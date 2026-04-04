"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("animate-fade-up");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Fond */}
      <div className="absolute inset-0 z-0">
        <div style={{
          position: 'absolute', top: '-20%', left: '50%',
          transform: 'translateX(-50%)',
          width: '900px', height: '600px',
          background: 'radial-gradient(ellipse, rgba(61,220,132,0.06) 0%, rgba(99,102,241,0.04) 40%, transparent 70%)',
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-10
             border-[rgba(61,220,132,0.2)] bg-[rgba(61,220,132,0.05)]
             animate-fade-in delay-100">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc84] animate-pulse" />
          <span className="text-xs tracking-widest uppercase text-[rgba(255,255,255,0.5)]"
                style={{fontFamily: 'DM Sans'}}>
            Cabinet de conseil en performance
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-bold leading-[1.05] tracking-tight mb-8 animate-fade-up delay-200"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(3rem, 7vw, 6rem)',
            }}>
          Donnez à vos décisions
          <br />
          <span style={{
            background: 'linear-gradient(135deg, #3ddc84 0%, #2ab86e 50%, #6366f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            une base plus solide.
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-300"
           style={{color: 'rgba(255,255,255,0.5)', fontWeight: 300}}>
          Enosi Consulting accompagne les directions dans la structuration
          de leur pilotage, l&apos;exploitation de leurs données et
          l&apos;intégration de l&apos;IA là où elle crée une valeur concrète.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-24 animate-fade-up delay-400">
          <a href="/contact"
             className="px-9 py-4 rounded-full text-sm font-semibold text-black transition-all duration-300"
             style={{
               background: 'linear-gradient(135deg, #3ddc84, #2ab86e)',
               boxShadow: '0 0 30px rgba(61,220,132,0.25)',
             }}
             onMouseEnter={e => {
               (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(61,220,132,0.4)';
               (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
             }}
             onMouseLeave={e => {
               (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(61,220,132,0.25)';
               (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
             }}>
            Échangeons sur vos enjeux
          </a>
          <a href="#offres"
             className="px-9 py-4 rounded-full text-sm font-semibold text-white border transition-all duration-300 hover:border-[rgba(61,220,132,0.3)] hover:bg-[rgba(61,220,132,0.05)]"
             style={{borderColor: 'rgba(255,255,255,0.12)'}}>
            Découvrir nos offres
          </a>
        </div>

        {/* 3 piliers */}
        <div className="border-t pt-10 grid grid-cols-1 md:grid-cols-3 gap-0 animate-fade-up delay-500"
             style={{borderColor: 'rgba(255,255,255,0.06)'}}>
          {[
            { label: "Pilotage", desc: "Structurer les indicateurs qui comptent.", color: "#3ddc84" },
            { label: "Data & IA", desc: "Transformer les données en décisions.", color: "#6366f1" },
            { label: "Efficacité", desc: "Piloter ce qui génère vraiment de la valeur.", color: "#f59e0b" },
          ].map((p, i) => (
            <div key={p.label}
                 className={`px-8 py-4 text-left ${i < 2 ? 'md:border-r' : ''}`}
                 style={{borderColor: 'rgba(255,255,255,0.06)'}}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full" style={{background: p.color}} />
                <span className="text-sm font-semibold text-white">{p.label}</span>
              </div>
              <p className="text-xs leading-relaxed" style={{color: 'rgba(255,255,255,0.35)'}}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-500">
        <span className="text-xs tracking-widest uppercase" style={{color: 'rgba(255,255,255,0.2)'}}>Scroll</span>
        <div className="w-px h-12" style={{background: 'linear-gradient(to bottom, rgba(61,220,132,0.5), transparent)'}} />
      </div>

    </section>
  );
}
