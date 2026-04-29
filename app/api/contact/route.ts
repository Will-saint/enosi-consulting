import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json() as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const prenom = typeof body.prenom === "string" ? body.prenom.trim() : "";
  const nom = typeof body.nom === "string" ? body.nom.trim() : "";
  const entreprise = typeof body.entreprise === "string" ? body.entreprise.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const fonction = typeof body.fonction === "string" ? body.fonction.trim() : "";
  const sujet = typeof body.sujet === "string" ? body.sujet.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!prenom || !email || !message) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Service email non configuré" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Enosi Consulting <contact@enosi-consulting.fr>",
      to: "contact@enosi-consulting.fr",
      subject: `Nouveau contact ENOSI — ${prenom} ${nom}`.trim(),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1a1a1a;">
          <h2 style="color: #1a9e5c; margin-bottom: 24px;">Nouveau message de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #555; width: 140px;">Prénom</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(prenom)}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Nom</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(nom) || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #1a9e5c;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Entreprise</td><td style="padding: 8px 0;">${escapeHtml(entreprise) || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Fonction</td><td style="padding: 8px 0;">${escapeHtml(fonction) || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #555;">Sujet</td><td style="padding: 8px 0;">${escapeHtml(sujet) || "—"}</td></tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f8f8f8; border-radius: 8px;">
            <p style="margin: 0 0 8px; color: #555; font-size: 13px;">Message</p>
            <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">Reçu le ${new Date().toISOString()}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Échec de l'envoi du message" }, { status: 500 });
    }
  } catch (err) {
    console.error("Resend exception:", err);
    return NextResponse.json({ error: "Échec de l'envoi du message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
