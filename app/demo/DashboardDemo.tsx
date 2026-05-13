"use client";
import { useEffect, useRef, useState } from "react";

const kpis = [
  { label: "CA YTD", value: "41,5 M€", delta: "+8,1 %", deltaLabel: "vs N-1", positive: true, sub: "4 mois complets" },
  { label: "Marge brute", value: "31,2 %", delta: "−0,8 pt", deltaLabel: "vs budget", positive: false, sub: "Suivi mensuel" },
  { label: "EBITDA annualisé", value: "12,1 M€", delta: "+12,4 %", deltaLabel: "vs N-1", positive: true, sub: "En progression" },
  { label: "DSO", value: "42 jours", delta: "−3 j", deltaLabel: "vs N-1", positive: true, sub: "Objectif 45j ✓" },
];

const chartData = [
  { month: "Jan", actual: 9.2, budget: 9.8, full: true },
  { month: "Fév", actual: 10.1, budget: 9.5, full: true },
  { month: "Mar", actual: 11.4, budget: 11.0, full: true },
  { month: "Avr", actual: 10.8, budget: 11.2, full: true },
  { month: "Mai", actual: 7.4, budget: 11.5, full: false },
];

const alerts = [
  { type: "warn", icon: "⚠", text: "BU Est — Écart budget +14% en avril, analyse requise" },
  { type: "ok",   icon: "✓", text: "Trésorerie — DSO 42j, objectif 45j atteint" },
  { type: "up",   icon: "↑", text: "Marge — T4 2025 en progression (+0,3 pt)" },
  { type: "warn", icon: "⚠", text: "Masse salariale — +2,3% vs N-1, à surveiller" },
];

const MAX_VAL = 13;
const CHART_H = 140;
const CHART_Y0 = 20;
const BAR_W = 38;
const GROUP_W = 76;

function toY(val: number) {
  return CHART_Y0 + CHART_H - (val / MAX_VAL) * CHART_H;
}

export default function DashboardDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [alertsVisible, setAlertsVisible] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
        alerts.forEach((_, i) => {
          setTimeout(() => setAlertsVisible(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          }), 400 + i * 500);
        });
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ background: '#F2F0EC', padding: '0 1.5rem 5rem' }}>
      <div style={{
        maxWidth: '64rem', margin: '0 auto',
        background: '#0d0d0d',
        borderRadius: '1.25rem',
        border: '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
      }}>
        {/* Header bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0.875rem 1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.03)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a9e5c', display: 'inline-block', boxShadow: '0 0 8px #1a9e5c' }} />
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fff', letterSpacing: '0.05em' }}>
              Groupe Marchal — Distribution B2B
            </span>
            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>CA 150M€ · 11 directions</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>Mai 2026</span>
            <span style={{
              fontSize: '0.6rem', fontWeight: 700, padding: '0.25rem 0.6rem',
              borderRadius: '2rem', background: 'rgba(26,158,92,0.15)',
              color: '#1a9e5c', letterSpacing: '0.08em',
            }}>
              EN DIRECT
            </span>
          </div>
        </div>

        <div style={{ padding: '1.5rem' }}>
          {/* KPI row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {kpis.map((k, i) => (
              <div key={k.label} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '0.75rem', padding: '1rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}>
                <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{k.label}</p>
                <p style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', fontFamily: "'Playfair Display', serif", marginBottom: '0.35rem' }}>{k.value}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: k.positive ? '#1a9e5c' : '#f59e0b' }}>{k.delta}</span>
                  <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>{k.deltaLabel}</span>
                </div>
                <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', marginTop: '0.35rem' }}>{k.sub}</p>
              </div>
            ))}
          </div>

          {/* Chart + Alerts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {/* Chart */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '0.75rem', padding: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>CA mensuel (M€)</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2, background: '#1a9e5c', display: 'inline-block' }} />
                    <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)' }}>Réalisé</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ width: 10, borderTop: '2px dashed #4f46e5', display: 'inline-block' }} />
                    <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)' }}>Budget</span>
                  </div>
                </div>
              </div>
              <svg viewBox={`0 0 ${chartData.length * GROUP_W + 20} ${CHART_Y0 + CHART_H + 30}`} style={{ width: '100%' }}>
                {/* Grid lines */}
                {[0, 3, 6, 9, 12].map(v => (
                  <line key={v}
                    x1={10} y1={toY(v)} x2={chartData.length * GROUP_W + 10} y2={toY(v)}
                    stroke="rgba(255,255,255,0.05)" strokeWidth={1}
                  />
                ))}
                {/* Bars + budget markers */}
                {chartData.map((d, i) => {
                  const x = 10 + i * GROUP_W + (GROUP_W - BAR_W) / 2;
                  const barH = (d.actual / MAX_VAL) * CHART_H;
                  const barY = CHART_Y0 + CHART_H - barH;
                  const budgetY = toY(d.budget);
                  const color = d.actual >= d.budget * 0.95 ? '#1a9e5c' : '#f59e0b';
                  return (
                    <g key={d.month}>
                      {/* Bar */}
                      <g style={{
                        transform: visible ? 'scaleY(1)' : 'scaleY(0)',
                        transformOrigin: `${x + BAR_W / 2}px ${CHART_Y0 + CHART_H}px`,
                        transition: `transform 0.65s cubic-bezier(0.34,1.2,0.64,1) ${i * 0.1}s`,
                      }}>
                        <rect
                          x={x} y={barY} width={BAR_W} height={barH}
                          fill={d.full ? color : color}
                          opacity={d.full ? 0.9 : 0.45}
                          rx={3}
                        />
                      </g>
                      {/* Value label */}
                      {d.full && visible && (
                        <text
                          x={x + BAR_W / 2} y={barY - 5}
                          textAnchor="middle" fontSize={9}
                          fill="rgba(255,255,255,0.5)"
                          style={{ opacity: visible ? 1 : 0, transition: `opacity 0.3s ease ${0.6 + i * 0.1}s` }}
                        >{d.actual}</text>
                      )}
                      {/* Budget dashed line */}
                      <line
                        x1={x - 4} y1={budgetY} x2={x + BAR_W + 4} y2={budgetY}
                        stroke="#4f46e5" strokeWidth={1.5} strokeDasharray="4 3"
                        opacity={0.7}
                      />
                      {/* Month label */}
                      <text x={x + BAR_W / 2} y={CHART_Y0 + CHART_H + 18} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,0.3)">
                        {d.month}
                        {!d.full && <tspan fill="#4f46e5"> ●</tspan>}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Alerts */}
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '0.75rem', padding: '1rem',
            }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>
                Alertes automatiques
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {alerts.map((a, i) => {
                  const colors: Record<string, string> = { warn: '#f59e0b', ok: '#1a9e5c', up: '#4f46e5' };
                  const bgs: Record<string, string> = { warn: 'rgba(245,158,11,0.08)', ok: 'rgba(26,158,92,0.08)', up: 'rgba(79,70,229,0.08)' };
                  return (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                      padding: '0.7rem 0.875rem',
                      borderRadius: '0.5rem',
                      background: alertsVisible[i] ? bgs[a.type] : 'transparent',
                      border: `1px solid ${alertsVisible[i] ? colors[a.type] + '25' : 'transparent'}`,
                      opacity: alertsVisible[i] ? 1 : 0,
                      transform: alertsVisible[i] ? 'translateX(0)' : 'translateX(-12px)',
                      transition: 'opacity 0.4s ease, transform 0.4s ease, background 0.3s, border 0.3s',
                    }}>
                      <span style={{ fontSize: '0.75rem', color: colors[a.type], flexShrink: 0, marginTop: 1 }}>{a.icon}</span>
                      <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{a.text}</p>
                    </div>
                  );
                })}
              </div>
              <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.18)', marginTop: '1rem' }}>
                Alertes générées automatiquement · Seuils configurables
              </p>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div style={{
          padding: '0.75rem 1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <p style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)' }}>
            Données fictives à titre illustratif · Architecture déployable en 8 semaines
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['Power BI', 'Python', 'Azure'].map(t => (
              <span key={t} style={{
                fontSize: '0.6rem', padding: '0.2rem 0.5rem',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '0.25rem', color: 'rgba(255,255,255,0.3)',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
