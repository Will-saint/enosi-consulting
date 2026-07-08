"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CALENDLY_URL } from "@/lib/constants";

// ─── Decode ──────────────────────────────────────────────────────────────────
function decodeId(id: string): number[] | null {
  try {
    const padded = id.replace(/-/g, "+").replace(/_/g, "/");
    const pad = (4 - (padded.length % 4)) % 4;
    const full = padded + "=".repeat(pad);
    const str = atob(full);
    if (str.length !== 12 || !/^[0-4]+$/.test(str)) return null;
    return str.split("").map(Number);
  } catch {
    return null;
  }
}

// ─── Levels ──────────────────────────────────────────────────────────────────
const LEVELS = [
  { label: "Latent",    min: 0,  max: 9,  color: "#dc2626", desc: "La donnée existe, l'organisation n'en tire pas encore de valeur." },
  { label: "Émergent",  min: 10, max: 19, color: "#d97706", desc: "Premiers chantiers, pas encore de cohérence d'ensemble." },
  { label: "Structuré", min: 20, max: 29, color: "#4f46e5", desc: "Fondations en place, l'exécution est inégale selon les axes." },
  { label: "Avancé",    min: 30, max: 39, color: "#1a9e5c", desc: "Pilotage data-driven installé, premiers cas IA en prod." },
  { label: "Leader",    min: 40, max: 48, color: "#b45309", desc: "Maturité opérationnelle, sujet stratégique au COMEX." },
];

const AXES = [
  { label: "Données & infrastructure", shortLabel: "Données",  color: "#1a9e5c" },
  { label: "Pilotage & décision",       shortLabel: "Pilotage", color: "#4f46e5" },
  { label: "IA & automatisation",       shortLabel: "IA",       color: "#d97706" },
  { label: "Culture & adoption",        shortLabel: "Culture",  color: "#0ea5e9" },
];

function getLevel(total: number) {
  return LEVELS.find((l) => total >= l.min && total <= l.max) ?? LEVELS[0];
}

function getAxisAnalysis(axisIndex: number, score: number): string {
  const idx = Math.min(4, Math.floor(score / 2.6));
  const texts = [
    [
      "Votre infrastructure data est embryonnaire. Les données existent mais restent éparpillées, peu fiables et difficiles d'accès.",
      "Quelques connexions existent mais la cohérence d'ensemble manque. La gouvernance de la donnée est à construire.",
      "Votre infrastructure est fonctionnelle mais non optimisée. Des gains rapides sont possibles sur la centralisation.",
      "Bonne maîtrise de votre infrastructure. Vous pouvez vous concentrer sur des cas d'usage à plus forte valeur.",
      "Infrastructure solide. C'est une base excellente pour accélérer sur l'IA et le pilotage en temps réel.",
    ],
    [
      "Le reporting n'est pas encore au service de la décision. La production est lente et peu utilisée en COMEX.",
      "Des reportings existent mais leur impact sur les décisions reste limité. La fréquence et la fiabilité sont à travailler.",
      "Votre pilotage est fonctionnel mais réactif. L'automatisation et les alertes permettraient de passer à la vitesse supérieure.",
      "Votre pilotage est mature. Les décisions s'appuient sur des données fiables et produites régulièrement.",
      "Pilotage exemplaire. Vos instances décisionnelles sont alimentées par des données en quasi-temps réel.",
    ],
    [
      "L'IA reste un sujet théorique. Aucune automatisation significative n'est en place ni en cours.",
      "Quelques automatisations sont engagées, sans cohérence ni ROI démontré. Le cadrage est à structurer.",
      "Vous avez les prémices d'une démarche IA, mais les résultats en production sont encore rares.",
      "Plusieurs cas d'usage IA en production avec du ROI mesurable. Vous êtes sur la bonne trajectoire.",
      "L'IA est industrialisée. Vous mesurez les résultats et les diffusez en interne.",
    ],
    [
      "La culture data est absente ou très localisée. L'adoption des outils est faible, le sponsorship inexistant.",
      "Des initiatives existent mais restent portées par quelques individus sans ancrage institutionnel.",
      "La culture data se construit, mais l'adoption est inégale et le sponsorship dirigeant encore insuffisant.",
      "La culture data est bien installée, avec un sponsorship fort et des équipes de plus en plus autonomes.",
      "Organisation véritablement data-driven. La culture est ancrée à tous les niveaux hiérarchiques.",
    ],
  ];
  return texts[axisIndex][idx];
}

function getPriorities(axisScores: number[]) {
  const min = Math.min(...axisScores);
  const max = Math.max(...axisScores);
  const weakI = axisScores.indexOf(min);
  const strongI = axisScores.indexOf(max);
  const gap = max - min;

  const remediations = [
    "Connecter vos sources principales (ERP, CRM, ventes) dans un entrepôt centralisé, même minimaliste, et nommer un responsable qualité des données.",
    "Automatiser la production de vos reportings et déployer des alertes sur vos 3 KPIs les plus critiques.",
    "Identifier vos 2-3 cas d'usage IA à ROI le plus rapide et lancer un premier pilote cadré en 6-8 semaines.",
    "Créer un sponsor COMEX explicite sur la data et former 3-5 power users pour créer des relais dans les équipes.",
  ];

  const accelerations = [
    "Capitaliser sur votre infrastructure mature pour déployer des modèles IA plus ambitieux — prédiction, anomalie, optimisation.",
    "Étendre votre pilotage à vos filiales ou BUs moins matures. Votre modèle est réplicable.",
    "Documenter et diffuser les ROI de vos cas IA existants. C'est le levier le plus efficace pour accélérer l'adoption interne.",
    "Transformer votre culture data en différenciateur RH : c'est un argument de recrutement et de rétention fort sur les profils data/IA.",
  ];

  const priorities: { type: string; axis: string; text: string; color: string }[] = [
    {
      type: "Priorité 1 — Remédiation",
      axis: AXES[weakI].label,
      text: remediations[weakI],
      color: "#dc2626",
    },
    {
      type: "Priorité 2 — Accélération",
      axis: AXES[strongI].label,
      text: accelerations[strongI],
      color: "#1a9e5c",
    },
  ];

  if (gap > 4) {
    priorities.push({
      type: "Priorité 3 — Rééquilibrage",
      axis: `${AXES[weakI].shortLabel} vs ${AXES[strongI].shortLabel}`,
      text: `L'écart entre votre axe le plus fort (${AXES[strongI].shortLabel} : ${axisScores[strongI]}/12) et le plus faible (${AXES[weakI].shortLabel} : ${axisScores[weakI]}/12) est significatif. Rééquilibrer les deux axes est souvent plus efficace que de progresser sur un seul.`,
      color: "#4f46e5",
    });
  }

  return priorities;
}

// ─── Radar Chart (pure SVG) ──────────────────────────────────────────────────
function RadarChart({ axisScores }: { axisScores: number[] }) {
  const cx = 160;
  const cy = 160;
  const r = 100;
  // top, right, bottom, left
  const angles = [0, 1, 2, 3].map((i) => -Math.PI / 2 + (Math.PI / 2) * i);
  const levelRatios = [0.25, 0.5, 0.75, 1.0];

  const pt = (angle: number, ratio: number) => [
    cx + r * ratio * Math.cos(angle),
    cy + r * ratio * Math.sin(angle),
  ];

  const dataPoints = axisScores.map((s, i) => pt(angles[i], Math.max(0.05, s / 12)));
  const dataPath =
    dataPoints.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ") + "Z";

  const labelOffset = 1.35;
  const labelData = [
    { label: "Données", score: axisScores[0], angle: angles[0] },
    { label: "Pilotage", score: axisScores[1], angle: angles[1] },
    { label: "IA",       score: axisScores[2], angle: angles[2] },
    { label: "Culture",  score: axisScores[3], angle: angles[3] },
  ];

  return (
    <svg viewBox="0 0 320 320" style={{ width: "100%", maxWidth: 300 }}>
      {/* Grid rings */}
      {levelRatios.map((ratio, ri) => {
        const pts = angles.map((a) => pt(a, ratio));
        const path =
          pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ") + "Z";
        return (
          <path
            key={ri}
            d={path}
            fill={ri === 3 ? "rgba(0,0,0,0.02)" : "none"}
            stroke="rgba(0,0,0,0.07)"
            strokeWidth="1"
          />
        );
      })}

      {/* Axis lines */}
      {angles.map((angle, i) => {
        const [x, y] = pt(angle, 1);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={x.toFixed(1)}
            y2={y.toFixed(1)}
            stroke="rgba(0,0,0,0.08)"
            strokeWidth="1"
          />
        );
      })}

      {/* Data fill */}
      <path d={dataPath} fill="rgba(26,158,92,0.10)" stroke="#1a9e5c" strokeWidth="2" strokeLinejoin="round" />

      {/* Data dots */}
      {dataPoints.map(([x, y], i) => (
        <circle key={i} cx={x.toFixed(1)} cy={y.toFixed(1)} r="4.5" fill="#1a9e5c" />
      ))}

      {/* Labels */}
      {labelData.map(({ label, score, angle }, i) => {
        const [lx, ly] = pt(angle, labelOffset);
        const anchor =
          Math.abs(Math.cos(angle)) < 0.15
            ? "middle"
            : Math.cos(angle) > 0
            ? "start"
            : "end";
        return (
          <g key={i}>
            <text
              x={lx.toFixed(1)}
              y={(ly - 7).toFixed(1)}
              textAnchor={anchor}
              fontSize="10"
              fill="rgba(30,30,30,0.45)"
              fontFamily="sans-serif"
            >
              {label}
            </text>
            <text
              x={lx.toFixed(1)}
              y={(ly + 8).toFixed(1)}
              textAnchor={anchor}
              fontSize="12"
              fontWeight="700"
              fill="#0f0f0f"
              fontFamily="sans-serif"
            >
              {score}/12
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function DiagnosticResult() {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);

  const scores = decodeId(id as string);

  if (!scores) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center" style={{ background: "#F8F7F4" }}>
          <div className="text-center">
            <p className="text-2xl font-bold mb-3" style={{ color: "#0f0f0f" }}>Résultat introuvable</p>
            <p className="text-sm mb-6" style={{ color: "rgba(30,30,30,0.5)" }}>
              Ce lien semble invalide ou expiré.
            </p>
            <a
              href="/diagnostic"
              className="px-6 py-3 rounded-full text-sm font-semibold"
              style={{ background: "#1a9e5c", color: "#000" }}
            >
              Refaire le diagnostic →
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const axisScores = [
    scores[0] + scores[1] + scores[2],
    scores[3] + scores[4] + scores[5],
    scores[6] + scores[7] + scores[8],
    scores[9] + scores[10] + scores[11],
  ];
  const total = axisScores.reduce((a, b) => a + b, 0);
  const level = getLevel(total);
  const priorities = getPriorities(axisScores);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main style={{ background: "#F8F7F4", minHeight: "100vh" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "5rem 1.5rem 6rem" }}>

          {/* ── Score banner ─────────────────────────────────────────────── */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "1.25rem",
              padding: "2.5rem",
              boxShadow: "0 0 0 1px rgba(0,0,0,0.07)",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(30,30,30,0.35)",
                marginBottom: "1rem",
              }}
            >
              Diagnostic de maturité Data&nbsp;/&nbsp;IA
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <div>
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(3rem, 7vw, 5rem)",
                    fontWeight: 800,
                    color: level.color,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {total}
                </span>
                <span
                  style={{
                    fontSize: "1.25rem",
                    color: "rgba(30,30,30,0.3)",
                    fontWeight: 400,
                    marginLeft: "0.25rem",
                  }}
                >
                  /48
                </span>
              </div>

              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.35rem 1rem",
                    borderRadius: "999px",
                    background: `${level.color}15`,
                    color: level.color,
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    marginBottom: "0.4rem",
                  }}
                >
                  {level.label}
                </span>
                <p style={{ fontSize: "0.8rem", color: "rgba(30,30,30,0.5)", maxWidth: "30ch" }}>
                  {level.desc}
                </p>
              </div>
            </div>
          </div>

          {/* ── Radar + axis bars ─────────────────────────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {/* Radar */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "1.25rem",
                padding: "2rem",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.07)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <RadarChart axisScores={axisScores} />
            </div>

            {/* Axis bars */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "1.25rem",
                padding: "2rem",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.07)",
              }}
            >
              <p
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(30,30,30,0.35)",
                  marginBottom: "1.5rem",
                }}
              >
                Détail par axe
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {AXES.map((a, i) => (
                  <div key={i}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#0f0f0f" }}>
                        {a.shortLabel}
                      </span>
                      <span
                        style={{ fontSize: "0.75rem", fontWeight: 700, color: a.color }}
                      >
                        {axisScores[i]}/12
                      </span>
                    </div>
                    <div
                      style={{
                        height: "5px",
                        borderRadius: "99px",
                        background: "rgba(0,0,0,0.06)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${(axisScores[i] / 12) * 100}%`,
                          background: a.color,
                          borderRadius: "99px",
                          transition: "width 0.8s ease",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Lecture des résultats ─────────────────────────────────────── */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "1.25rem",
              padding: "2rem",
              boxShadow: "0 0 0 1px rgba(0,0,0,0.07)",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(30,30,30,0.35)",
                marginBottom: "1.5rem",
              }}
            >
              Lecture de vos résultats
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {AXES.map((a, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: "0.875rem",
                    padding: "1.25rem",
                    background: "#F8F7F4",
                    borderLeft: `3px solid ${a.color}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#0f0f0f" }}>
                      {a.shortLabel}
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: a.color,
                        background: `${a.color}15`,
                        padding: "0.2rem 0.5rem",
                        borderRadius: "999px",
                      }}
                    >
                      {axisScores[i]}/12
                    </span>
                  </div>
                  <p style={{ fontSize: "0.78rem", color: "rgba(30,30,30,0.55)", lineHeight: 1.6 }}>
                    {getAxisAnalysis(i, axisScores[i])}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Priorités ────────────────────────────────────────────────── */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "1.25rem",
              padding: "2rem",
              boxShadow: "0 0 0 1px rgba(0,0,0,0.07)",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(30,30,30,0.35)",
                marginBottom: "1.5rem",
              }}
            >
              Vos priorités identifiées
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {priorities.map((p, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.25rem 1.5rem",
                    borderRadius: "0.875rem",
                    background: `${p.color}08`,
                    border: `1px solid ${p.color}20`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "baseline",
                      marginBottom: "0.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{ fontSize: "0.72rem", fontWeight: 700, color: p.color }}
                    >
                      {p.type}
                    </span>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        color: "rgba(30,30,30,0.4)",
                        padding: "0.15rem 0.5rem",
                        background: "rgba(0,0,0,0.05)",
                        borderRadius: "999px",
                      }}
                    >
                      {p.axis}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "rgba(30,30,30,0.65)", lineHeight: 1.65 }}>
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <div
            style={{
              background: "linear-gradient(135deg, #0d3b24 0%, #157a47 65%, #1a9e5c 100%)",
              borderRadius: "1.25rem",
              padding: "3rem 2.5rem",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }} />
            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "1rem",
                position: "relative",
              }}
            >
              Prochaine étape
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "0.75rem",
                letterSpacing: "-0.02em",
                position: "relative",
              }}
            >
              Discutons de votre plan d&apos;action.
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.75)",
                marginBottom: "2.25rem",
                maxWidth: "36ch",
                margin: "0 auto 2.25rem",
                position: "relative",
              }}
            >
              30 minutes d&apos;échange pour transformer ce score {total}/48
              en feuille de route concrète.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "0.95rem 2.4rem",
                  background: "#ffffff",
                  color: "#0d3b24",
                  fontWeight: 800,
                  borderRadius: "999px",
                  fontSize: "0.88rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
                }}
              >
                Réserver 30 minutes →
              </a>
              <button
                onClick={handleCopy}
                style={{
                  padding: "0.95rem 2rem",
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 600,
                  borderRadius: "999px",
                  fontSize: "0.85rem",
                  border: "1px solid rgba(255,255,255,0.25)",
                  cursor: "pointer",
                }}
              >
                {copied ? "Lien copié ✓" : "Partager mes résultats"}
              </button>
            </div>

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.15)", position: "relative" }}>
              <a
                href="/diagnostic"
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                }}
              >
                ← Refaire le diagnostic
              </a>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
