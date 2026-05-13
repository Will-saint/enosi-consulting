"use client";
import { useState } from "react";
import { CALENDLY_URL } from "@/lib/constants";

function fmt(n: number): string {
  if (n >= 1000) return `${Math.round(n / 1000)} k€`;
  return `${Math.round(n)} €`;
}

function fmtDays(n: number): string {
  return n >= 1 ? `${Math.round(n)} jours` : `< 1 jour`;
}

export default function RoiCalculator() {
  const [days, setDays] = useState(6);
  const [team, setTeam] = useState(3);
  const [revenue, setRevenue] = useState(80);

  const daysPerYear = days * 12;
  const dailyCost = 750 * team;
  const annualCost = daysPerYear * dailyCost;
  const savings = annualCost * 0.25;
  const daysSaved = daysPerYear * 0.25;

  const sliders = [
    {
      label: "Jours de reporting produits par mois",
      value: days,
      min: 1, max: 15, step: 1,
      display: `${days} jour${days > 1 ? 's' : ''}`,
      onChange: setDays,
    },
    {
      label: "Personnes impliquées dans la production",
      value: team,
      min: 1, max: 12, step: 1,
      display: `${team} personne${team > 1 ? 's' : ''}`,
      onChange: setTeam,
    },
    {
      label: "Chiffre d'affaires annuel",
      value: revenue,
      min: 20, max: 500, step: 10,
      display: `${revenue} M€`,
      onChange: setRevenue,
    },
  ];

  return (
    <section style={{ background: '#FFFFFF', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(30,30,30,0.35)', marginBottom: '1rem' }}>
            Calculateur ROI
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, color: '#0f0f0f', marginBottom: '1rem', lineHeight: 1.1 }}>
            Combien vous coûte votre reporting ?
          </h2>
          <p style={{ color: 'rgba(30,30,30,0.5)', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Ajustez les curseurs selon votre situation. Le calcul se met à jour en temps réel.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          {/* Sliders */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {sliders.map((s) => (
              <div key={s.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <label style={{ fontSize: '0.8rem', color: 'rgba(30,30,30,0.6)', lineHeight: 1.4, maxWidth: '260px' }}>
                    {s.label}
                  </label>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1a9e5c', flexShrink: 0, marginLeft: '0.5rem' }}>
                    {s.display}
                  </span>
                </div>
                <input
                  type="range"
                  min={s.min} max={s.max} step={s.step}
                  value={s.value}
                  onChange={(e) => s.onChange(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#1a9e5c', cursor: 'pointer' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                  <span style={{ fontSize: '0.6rem', color: 'rgba(30,30,30,0.3)' }}>{s.min}{s.label.includes('affaires') ? ' M€' : s.label.includes('Personnes') ? ' p.' : ' j.'}</span>
                  <span style={{ fontSize: '0.6rem', color: 'rgba(30,30,30,0.3)' }}>{s.max}{s.label.includes('affaires') ? ' M€' : s.label.includes('Personnes') ? ' p.' : ' j.'}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <div style={{
            background: '#F8F7F4',
            borderRadius: '1.25rem',
            padding: '2rem',
            border: '1px solid rgba(0,0,0,0.06)',
          }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(30,30,30,0.35)', marginBottom: '1.5rem' }}>
              Votre situation actuelle
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { label: 'Jours de reporting / an', value: fmtDays(daysPerYear), neutral: true },
                { label: 'Coût de production estimé', value: fmt(annualCost), neutral: true },
              ].map((r) => (
                <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(30,30,30,0.55)' }}>{r.label}</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f0f0f' }}>{r.value}</span>
                </div>
              ))}
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(26,158,92,0.08), rgba(26,158,92,0.04))',
              border: '1px solid rgba(26,158,92,0.18)',
              borderRadius: '0.875rem',
              padding: '1.25rem',
              marginBottom: '1.5rem',
            }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1a9e5c', marginBottom: '1rem' }}>
                Avec Enosi — estimation −25 %
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(30,30,30,0.6)' }}>Économie annuelle</span>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: '#1a9e5c' }}>{fmt(savings)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(30,30,30,0.6)' }}>Temps récupéré</span>
                  <span style={{ fontSize: '1rem', fontWeight: 700, color: '#1a9e5c' }}>{fmtDays(daysSaved)} / an</span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.68rem', color: 'rgba(30,30,30,0.35)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
              Estimation basée sur un coût journalier moyen de 750€ / personne. Hors gains de vitesse de décision.
            </p>

            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'block', textAlign: 'center',
              padding: '0.875rem',
              borderRadius: '2rem',
              background: 'linear-gradient(135deg, #1a9e5c, #157a47)',
              color: '#fff', fontWeight: 700,
              fontSize: '0.85rem', textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(26,158,92,0.25)',
            }}>
              Calculer mon gain réel → 30 min
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
