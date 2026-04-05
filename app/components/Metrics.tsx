"use client";
import CountUp from "./CountUp";

const stats = [
  {end:60, suffix:"%", label:"Réduction temps reporting", color:"#1a9e5c"},
  {end:8, suffix:" sem.", label:"Zéro à modèle en production", color:"#4f46e5"},
  {end:3, suffix:"×", label:"Plus rapide en décision", color:"#d97706"},
  {end:94, suffix:"%", label:"Détection anomalies", color:"#1a9e5c"},
];

export default function Metrics() {
  return (
    <section style={{
      background:'#F2F0EC',
      padding:'6rem 1.5rem',
      borderTop:'1px solid rgba(0,0,0,0.06)',
      borderBottom:'1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{maxWidth:'64rem', margin:'0 auto'}}>
        <p style={{
          fontSize:'0.65rem', letterSpacing:'0.2em',
          textTransform:'uppercase', textAlign:'center',
          color:'rgba(30,30,30,0.35)', marginBottom:'4rem'
        }}>
          Résultats typiques de nos interventions
        </p>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',
          gap:'2rem'
        }}>
          {stats.map((s,i) => (
            <div key={i} style={{textAlign:'center'}}>
              <div style={{
                fontFamily:"'Playfair Display', serif",
                fontSize:'clamp(3rem,6vw,4.5rem)',
                fontWeight:700,
                color:s.color,
                textShadow:`0 0 60px ${s.color}25`,
                lineHeight:1,
                marginBottom:'0.75rem'
              }}>
                <CountUp end={s.end} suffix={s.suffix}/>
              </div>
              <p style={{fontSize:'0.75rem', color:'rgba(30,30,30,0.45)', lineHeight:1.5}}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
