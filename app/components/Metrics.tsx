"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 25, suffix: "%", label: "Réduction temps reporting", color: "#1a9e5c" },
  { end: 8, suffix: " sem", label: "Zéro à modèle en production", color: "#4f46e5" },
  { end: 3, suffix: "×", label: "Plus rapide en décision", color: "#d97706" },
  { end: 91, suffix: "%", label: "Détection anomalies IA", color: "#1a9e5c" },
];

function useCountUp(end: number, duration: number, started: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let frame: number;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * end));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration]);
  return val;
}

function ArcMetric({
  end, suffix, label, color, index, started,
}: {
  end: number; suffix: string; label: string; color: string; index: number; started: boolean;
}) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(end / 100, 1);
  const dashOffset = started ? circumference * (1 - progress) : circumference;
  const val = useCountUp(end, 1600, started);

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
            style={{ transition: `stroke-dashoffset 1.5s ease ${index * 200}ms` }}
          />
        </svg>
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.4rem", fontWeight: 700,
          color: color,
        }}>
          {val}{suffix}
        </div>
      </div>
      <p style={{
        fontSize: "0.72rem",
        color: "rgba(30,30,30,0.45)",
        lineHeight: 1.5,
        maxWidth: "120px",
        margin: "0 auto",
      }}>
        {label}
      </p>
    </div>
  );
}

export default function Metrics() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{
      background: "#F2F0EC",
      padding: "5rem 1.5rem",
      borderTop: "1px solid rgba(0,0,0,0.05)",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
    }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
        <p style={{
          fontSize: "0.65rem", letterSpacing: "0.2em",
          textTransform: "uppercase", textAlign: "center",
          color: "rgba(30,30,30,0.3)", marginBottom: "3.5rem",
        }}>
          Résultats typiques de nos interventions
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "2rem",
        }}>
          {stats.map((s, i) => (
            <ArcMetric key={i} {...s} index={i} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
