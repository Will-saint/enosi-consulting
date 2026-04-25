"use client";
import CountUp from "./CountUp";

function ArcMetric({
  end, suffix, label, color, index
}: {
  end: number;
  suffix: string;
  label: string;
  color: string;
  index: number;
}) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(end / 100, 1);
  const dashOffset = circumference * (1 - progress);

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ position: "relative", display: "inline-block", marginBottom: "1rem" }}>
        <svg width="100" height="100" style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="3"
          />
          <circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{
              transition: `stroke-dashoffset 1.5s ease ${index * 200}ms`,
            }}
          />
        </svg>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.4rem", fontWeight: 700,
          color: color,
        }}>
          <CountUp end={end} suffix={suffix} />
        </div>
      </div>
      <p style={{
        fontSize: "0.72rem",
        color: "rgba(30,30,30,0.45)",
        lineHeight: 1.5,
        maxWidth: "120px",
        margin: "0 auto"
      }}>
        {label}
      </p>
    </div>
  );
}

const stats = [
  { end: 60, suffix: "%", label: "Réduction temps reporting", color: "#1a9e5c" },
  { end: 8, suffix: "sem", label: "Zéro à modèle en production", color: "#4f46e5" },
  { end: 3, suffix: "×", label: "Plus rapide en décision", color: "#d97706" },
  { end: 94, suffix: "%", label: "Détection anomalies", color: "#1a9e5c" },
];

export default function Metrics() {
  return (
    <section style={{
      background: "#F2F0EC",
      padding: "5rem 1.5rem",
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
    }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
        <p style={{
          fontSize: "0.65rem", letterSpacing: "0.2em",
          textTransform: "uppercase", textAlign: "center",
          color: "rgba(30,30,30,0.3)", marginBottom: "3.5rem"
        }}>
          Résultats typiques de nos interventions
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "2rem"
        }}>
          {stats.map((s, i) => (
            <ArcMetric key={i} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
