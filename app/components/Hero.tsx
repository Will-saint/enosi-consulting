"use client";
import { useEffect, useState } from "react";
import ConvergenceViz from "./ConvergenceViz";

export default function Hero() {
  const words = ["Donnez", "à", "vos", "décisions", "une", "base", "solide."];
  const [visibleWords, setVisibleWords] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleWords(prev => {
        if (prev >= words.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">

      {/* Fond ambiant */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div style={{
          position:'absolute', top:'-10%', left:'50%',
          transform:'translateX(-50%)',
          width:'1000px', height:'600px',
          background:'radial-gradient(ellipse, rgba(26,158,92,0.06) 0%, rgba(79,70,229,0.03) 40%, transparent 70%)',
          filter:'blur(60px)'
        }}/>
        <div style={{
          position:'absolute', inset:0,
          backgroundImage:'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)',
          backgroundSize:'100px 100px'
        }}/>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">

        {/* 2-col layout on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 lg:items-center">

        {/* LEFT COLUMN */}
        <div>

        <div className="flex flex-col md:flex-row md:items-end md:gap-16 mb-8">

          {/* Label gauche */}
          <div className="md:w-48 shrink-0 mb-6 md:mb-0 md:pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
                 style={{background:'rgba(26,158,92,0.08)', border:'1px solid rgba(26,158,92,0.18)'}}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:'#1a9e5c'}}/>
              <span className="text-[10px] tracking-[0.15em] uppercase" style={{color:'#1a9e5c'}}>
                Cabinet de conseil
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{color:'rgba(30,30,30,0.4)'}}>
              Performance · Data · IA
            </p>
          </div>

          {/* Titre animé mot à mot */}
          <h1 style={{
            fontFamily:"'Playfair Display', serif",
            fontSize:'clamp(3.5rem, 8vw, 7rem)',
            fontWeight:700,
            lineHeight:1.0,
            letterSpacing:'-0.02em',
            color:'#0f0f0f',
            flex:1,
          }}>
            {words.map((word, i) => (
              <span
                key={i}
                style={{
                  display:'inline-block',
                  marginRight:'0.25em',
                  opacity: i < visibleWords ? 1 : 0,
                  transform: i < visibleWords ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                  color: i >= 4 ? '#1a9e5c' : '#0f0f0f',
                  fontStyle: i === 3 ? 'italic' : 'normal',
                }}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>

        {/* Sous-titre + CTAs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-20"
             style={{borderTop:'1px solid rgba(0,0,0,0.07)', paddingTop:'2rem'}}>
          <p style={{
            color:'rgba(30,30,30,0.5)',
            fontSize:'1rem',
            fontWeight:300,
            lineHeight:1.7,
            maxWidth:'480px'
          }}>
            Enosi Consulting accompagne les directions dans la
            structuration de leur pilotage, l&apos;exploitation de leurs
            données et l&apos;intégration concrète de l&apos;IA.
          </p>
          <div className="flex gap-4 shrink-0">
            <a href="/contact"
               style={{
                 padding:'0.875rem 2rem',
                 borderRadius:'2rem',
                 background:'linear-gradient(135deg, #1a9e5c, #157a47)',
                 color:'#fff',
                 fontWeight:600,
                 fontSize:'0.85rem',
                 boxShadow:'0 4px 20px rgba(26,158,92,0.3)',
                 textDecoration:'none',
                 whiteSpace:'nowrap',
               }}>
              Échangeons
            </a>
            <a href="#offres"
               style={{
                 padding:'0.875rem 2rem',
                 borderRadius:'2rem',
                 border:'1px solid rgba(0,0,0,0.12)',
                 color:'#3a3a3a',
                 fontWeight:500,
                 fontSize:'0.85rem',
                 textDecoration:'none',
                 whiteSpace:'nowrap',
                 background:'rgba(0,0,0,0.03)',
                 backdropFilter:'blur(8px)'
               }}>
              Nos offres
            </a>
          </div>
        </div>

        {/* 3 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            {label:'Pilotage', desc:"Indicateurs, reporting, aide à la décision.", color:'#1a9e5c'},
            {label:'Data & IA', desc:"Automatisation, prévision, cas d'usage concrets.", color:'#4f46e5'},
            {label:'Efficacité', desc:"Processus, frictions, création de valeur.", color:'#d97706'},
          ].map((p) => (
            <div key={p.label} style={{
              background:'rgba(0,0,0,0.02)',
              border:'1px solid rgba(0,0,0,0.07)',
              borderRadius:'1rem',
              padding:'1.25rem 1.5rem',
            }}>
              <div style={{
                width:'6px', height:'6px', borderRadius:'50%',
                background:p.color,
                marginBottom:'0.75rem'
              }}/>
              <p style={{fontSize:'0.85rem', fontWeight:600, color:'#0f0f0f', marginBottom:'0.35rem'}}>{p.label}</p>
              <p style={{fontSize:'0.75rem', color:'rgba(30,30,30,0.4)', lineHeight:1.5}}>{p.desc}</p>
            </div>
          ))}
        </div>

        </div>{/* end LEFT COLUMN */}

        {/* RIGHT COLUMN — hidden on mobile */}
        <div className="hidden lg:flex items-center justify-center" style={{height:'420px'}}>
          <ConvergenceViz />
        </div>

        </div>{/* end 2-col grid */}

      </div>

      {/* Scroll indicator */}
      <div style={{
        position:'absolute', bottom:'2rem', left:'50%',
        transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem'
      }}>
        <span style={{fontSize:'0.65rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(0,0,0,0.2)'}}>Scroll</span>
        <div style={{width:'1px', height:'40px', background:'linear-gradient(to bottom, rgba(26,158,92,0.4), transparent)'}}/>
      </div>

    </section>
  );
}
