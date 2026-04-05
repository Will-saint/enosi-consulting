"use client";
import CountUp from "./CountUp";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: 60, suffix: "%", label: "Réduction temps de reporting", color: "#3ddc84" },
  { value: 8, suffix: " sem.", label: "De zéro à un modèle en production", color: "#6366f1" },
  { value: 3, suffix: "×", label: "Plus rapide en réunion de décision", color: "#f59e0b" },
  { value: 94, suffix: "%", label: "Taux de détection anomalies", color: "#3ddc84" },
];

export default function Metrics() {
  return (
    <section className="py-24 px-6 border-y relative overflow-hidden"
             style={{
               borderColor: 'rgba(255,255,255,0.05)',
               background: 'linear-gradient(180deg, #080810 0%, #0d0d1a 50%, #080810 100%)'
             }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full opacity-10"
           style={{background: 'linear-gradient(to bottom, transparent, #3ddc84, transparent)'}} />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs text-gray-600 uppercase tracking-widest text-center mb-16">
            Résultats typiques de nos interventions
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-3"
                     style={{
                       fontFamily: "'Playfair Display', serif",
                       color: s.color,
                       textShadow: `0 0 40px ${s.color}30`
                     }}>
                  <CountUp end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-xs leading-relaxed" style={{color: 'rgba(255,255,255,0.3)'}}>
                  {s.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
