"use client";
import { useEffect, useRef, useState } from "react";

function useInView(ref: React.RefObject<Element>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

const stats = [
  { value: 60, suffix: "%", label: "Réduction temps de reporting", color: "#3ddc84" },
  { value: 8, suffix: " sem.", label: "De zéro à un modèle en production", color: "#6366f1" },
  { value: 3, suffix: "×", label: "Plus rapide en réunion de décision", color: "#f59e0b" },
  { value: 94, suffix: "%", label: "Taux de détection anomalies", color: "#3ddc84" },
];

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>);

  return (
    <section ref={ref}
             className="py-20 px-6 border-y"
             style={{
               borderColor: 'rgba(255,255,255,0.05)',
               background: 'linear-gradient(180deg, #080810 0%, #0a0a18 50%, #080810 100%)'
             }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={s.label}
               className={`text-center transition-all duration-700 ${
                 inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
               }`}
               style={{ transitionDelay: `${i * 120}ms` }}>
            <div className="text-5xl font-bold mb-2"
                 style={{
                   fontFamily: "'Playfair Display', serif",
                   color: s.color,
                   textShadow: `0 0 40px ${s.color}40`
                 }}>
              {inView ? `${s.value}${s.suffix}` : '—'}
            </div>
            <p className="text-xs leading-relaxed"
               style={{color: 'rgba(255,255,255,0.35)'}}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
