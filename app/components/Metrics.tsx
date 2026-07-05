"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { end: 25, suffix: "%", label: "Temps de reporting réduit (Power Query)" },
  { end: 100, suffix: "M€", label: "Périmètre financier piloté" },
  { end: 1, suffix: " an", label: "Data & IA Value Management chez LVMH" },
  { end: 4, suffix: "", label: "Certifications Data/IA (PL-300, Azure, IBM)" },
];

function useCountUp(end: number, duration: number, started: boolean) {
  const [val, setVal] = useState(end);
  useEffect(() => {
    if (!started) { setVal(end); return; }
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

function BigMetric({
  end, suffix, label, index, started,
}: {
  end: number; suffix: string; label: string; index: number; started: boolean;
}) {
  const val = useCountUp(end, 1600, started);

  return (
    <div style={{
      textAlign: "left",
      opacity: started ? 1 : 0,
      transform: started ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s ease ${index * 120}ms`,
    }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2.6rem, 5vw, 4rem)",
        fontWeight: 700,
        lineHeight: 1,
        color: "#ffffff",
        marginBottom: "0.6rem",
        letterSpacing: "-0.02em",
      }}>
        {val}<span style={{ fontSize: "0.5em", color: "rgba(255,255,255,0.55)" }}>{suffix}</span>
      </div>
      <div style={{
        width: "2.5rem", height: "3px",
        background: "rgba(255,255,255,0.35)",
        borderRadius: "2px",
        marginBottom: "0.75rem",
      }} />
      <p style={{
        fontSize: "0.8rem",
        color: "rgba(255,255,255,0.75)",
        lineHeight: 1.55,
        maxWidth: "200px",
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
    const start = () => setStarted(true);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      start();
      return;
    }

    const fallback = setTimeout(start, 4000);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          obs.disconnect();
          clearTimeout(fallback);
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <section ref={sectionRef} style={{
      background: "linear-gradient(135deg, #0d3b24 0%, #157a47 60%, #1a9e5c 100%)",
      padding: "5.5rem 1.5rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Texture discrète */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />
      <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative" }}>
        <p style={{
          fontSize: "0.65rem", letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.55)", marginBottom: "3rem",
        }}>
          Mon expérience, en repères
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem 2rem",
        }}>
          {stats.map((s, i) => (
            <BigMetric key={i} {...s} index={i} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
