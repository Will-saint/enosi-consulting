import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createRateLimiter, getClientIp } from "@/lib/rate-limit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_MS = 3_000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1_000;

const checkRateLimit = createRateLimiter(RATE_LIMIT, RATE_WINDOW_MS);

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function encodeId(scores: number[]): string {
  const str = scores.join("");
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

const LEVELS = [
  { label: "Latent",    min: 0,  max: 9  },
  { label: "Émergent",  min: 10, max: 19 },
  { label: "Structuré", min: 20, max: 29 },
  { label: "Avancé",    min: 30, max: 39 },
  { label: "Leader",    min: 40, max: 48 },
];

const AXIS_LABELS = ["Données", "Pilotage", "IA", "Culture"];

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Trop de requêtes, veuillez réessayer dans 15 minutes." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json() as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  // Honeypot — bots fill this, humans don't see it
  if (typeof body._hp === "string" && body._hp !== "") {
    return NextResponse.json({ success: true, id: "" }); // silent accept
  }

  // Timing — under 3s = bot
  const fillTime = typeof body._t === "number" ? body._t : MIN_FILL_MS;
  if (fillTime < MIN_FILL_MS) {
    return NextResponse.json({ error: "Formulaire soumis trop rapidement." }, { status: 400 });
  }

  const scores = body.scores;
  const email  = typeof body.email === "string" ? body.email.trim() : "";
  const prenom = typeof body.prenom === "string" ? body.prenom.trim() : "";
  const entreprise = typeof body.entreprise === "string" ? body.entreprise.trim() : "";

  if (
    !Array.isArray(scores) || scores.length !== 12 ||
    !scores.every((s) => Number.isInteger(s) && s >= 0 && s <= 4)
  ) {
    return NextResponse.json({ error: "Invalid scores" }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  const nums = scores as number[];
  const id = encodeId(nums);
  const total = nums.reduce((a, b) => a + b, 0);
  const axisScores = [
    nums[0] + nums[1] + nums[2],
    nums[3] + nums[4] + nums[5],
    nums[6] + nums[7] + nums[8],
    nums[9] + nums[10] + nums[11],
  ];
  const level = LEVELS.find((l) => total >= l.min && total <= l.max)?.label ?? "Latent";

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://enosi-consulting.vercel.app";
  const resultsUrl = `${baseUrl}/diagnostic/${id}`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Log for Vercel logs — still return success so UX isn't broken
    console.log(
      `[Diagnostic] Nouveau lead — ${prenom} (${entreprise}) — ${email} — Score ${total}/48 — ${level}`
    );
    return NextResponse.json({ success: true, id });
  }

  const resend = new Resend(apiKey);
  const axisRows = AXIS_LABELS.map(
    (label, i) => `<tr><td style="padding:6px 0;color:#555;">${label}</td><td style="padding:6px 0;font-weight:700;">${axisScores[i]}/12</td></tr>`
  ).join("");

  // Notification to William
  const notifHtml = `
    <div style="font-family:sans-serif;max-width:600px;color:#1a1a1a;">
      <h2 style="color:#1a9e5c;margin-bottom:20px;">Nouveau diagnostic complété</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px 0;color:#555;width:120px;">Prénom</td><td style="padding:6px 0;font-weight:700;">${escapeHtml(prenom)}</td></tr>
        <tr><td style="padding:6px 0;color:#555;">Entreprise</td><td style="padding:6px 0;">${escapeHtml(entreprise) || "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#555;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#1a9e5c;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#555;">Score</td><td style="padding:6px 0;font-weight:700;">${total}/48 — ${level}</td></tr>
        ${axisRows}
      </table>
      <p style="margin-top:20px;"><a href="${resultsUrl}" style="color:#1a9e5c;">Voir le rapport complet →</a></p>
      <p style="margin-top:20px;font-size:11px;color:#999;">Reçu le ${new Date().toISOString()}</p>
    </div>`;

  // Report to lead
  const leadHtml = `
    <div style="font-family:sans-serif;max-width:600px;color:#1a1a1a;">
      <h2 style="color:#1a9e5c;margin-bottom:8px;">Votre diagnostic de maturité Data / IA</h2>
      <p style="color:#555;margin-bottom:20px;">Bonjour ${escapeHtml(prenom)}, voici votre résultat.</p>
      <div style="background:#f8f8f8;border-radius:12px;padding:20px;margin-bottom:20px;">
        <p style="font-size:14px;color:#555;margin:0 0 8px;">Score global</p>
        <p style="font-size:36px;font-weight:700;color:#1a9e5c;margin:0;">${total}<span style="font-size:20px;color:#999;">/48</span></p>
        <p style="font-size:14px;font-weight:600;margin:8px 0 0;">${level}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        ${axisRows}
      </table>
      <p style="margin-bottom:24px;">
        <a href="${resultsUrl}" style="display:inline-block;padding:12px 28px;background:#1a9e5c;color:#000;text-decoration:none;border-radius:999px;font-weight:700;font-size:14px;">
          Accéder à mon rapport complet →
        </a>
      </p>
      <p style="font-size:13px;color:#555;">
        Vous souhaitez discuter de ce résultat et construire un plan d'action ?<br/>
        <a href="${baseUrl}/contact" style="color:#1a9e5c;">Prenons 30 minutes →</a>
      </p>
      <p style="margin-top:24px;font-size:11px;color:#999;">Enosi Consulting — contact@enosi-consulting.fr</p>
    </div>`;

  try {
    await Promise.all([
      resend.emails.send({
        from: "Enosi Consulting <contact@enosi-consulting.fr>",
        to: "contact@enosi-consulting.fr",
        subject: `Diagnostic — ${prenom} (${entreprise || "??"}) — ${total}/48 ${level}`,
        html: notifHtml,
      }),
      resend.emails.send({
        from: "Enosi Consulting <contact@enosi-consulting.fr>",
        to: email,
        subject: `Votre diagnostic de maturité Data / IA — ${total}/48 — ${level}`,
        html: leadHtml,
      }),
    ]);
  } catch (err) {
    console.error("Resend error:", err);
    // Don't fail the request — results page still works
  }

  return NextResponse.json({ success: true, id });
}
