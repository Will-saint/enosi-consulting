"use client";
import { useState } from "react";
import Image from "next/image";

type NavItem =
  | { label: string; anchor: string; direct: true }
  | { label: string; anchor: string; direct?: false; sub: { label: string; href: string }[] };

const navItems: NavItem[] = [
  {
    label: "Nos offres",
    anchor: "#offres",
    sub: [
      { label: "Pilotage de la performance", href: "/offres/pilotage" },
      { label: "Data & IA pour la décision", href: "/offres/data-ia" },
      { label: "Efficacité et création de valeur", href: "/offres/efficacite" },
    ],
  },
  {
    label: "Notre approche",
    anchor: "/#methode",
    sub: [
      { label: "Comment nous intervenons", href: "/#methode" },
      { label: "Notre méthode", href: "/#methode" },
      { label: "Ce qui nous distingue", href: "/#methode" },
    ],
  },
  {
    label: "Interventions",
    anchor: "/#interventions",
    sub: [
      { label: "Exemples de missions", href: "/#interventions" },
      { label: "Cas d'usage", href: "/#interventions" },
    ],
  },
  { label: "Portfolio", anchor: "/portfolio", direct: true },
  { label: "À propos", anchor: "/a-propos", direct: true },
];

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: 'rgba(248,247,244,0.88)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(0,0,0,0.07)',
    }}>
      <div style={{
        maxWidth: '80rem', margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: '4rem'
      }}>

        {/* Logo */}
        <a href="/" style={{display:'flex', alignItems:'center', flexShrink:0}}>
          <Image src="/logo-dark.svg" alt="Enosi Consulting" width={180} height={40} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            if (item.direct) {
              return (
                <a key={item.label} href={item.anchor}
                   style={{
                     padding: '0.5rem 1rem',
                     fontSize: '0.85rem',
                     color: '#3a3a3a',
                     textDecoration: 'none',
                     transition: 'color 0.2s',
                   }}
                   onMouseEnter={e => (e.currentTarget as HTMLElement).style.color='#0f0f0f'}
                   onMouseLeave={e => (e.currentTarget as HTMLElement).style.color='#3a3a3a'}>
                  {item.label}
                </a>
              );
            }
            return (
              <div key={item.label} className="relative"
                   onMouseEnter={() => setOpen(item.label)}
                   onMouseLeave={() => setOpen(null)}>
                <a href={item.anchor}
                   style={{
                     padding: '0.5rem 1rem',
                     fontSize: '0.85rem',
                     color: '#3a3a3a',
                     textDecoration: 'none',
                     transition: 'color 0.2s',
                     display: 'flex', alignItems: 'center', gap: '0.25rem',
                   }}
                   onMouseEnter={e => (e.currentTarget as HTMLElement).style.color='#0f0f0f'}
                   onMouseLeave={e => (e.currentTarget as HTMLElement).style.color='#3a3a3a'}>
                  {item.label}
                  <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                {open === item.label && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0, marginTop: '0.25rem',
                    background: 'rgba(255,255,255,0.97)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderRadius: '0.75rem',
                    padding: '0.5rem',
                    minWidth: '240px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  }}>
                    {item.sub.map((s) => (
                      <a key={s.label} href={s.href}
                         style={{
                           display: 'block',
                           padding: '0.6rem 1rem',
                           fontSize: '0.85rem',
                           color: '#3a3a3a',
                           textDecoration: 'none',
                           borderRadius: '0.5rem',
                           transition: 'background 0.15s, color 0.15s',
                         }}
                         onMouseEnter={e => {
                           (e.currentTarget as HTMLElement).style.background='rgba(26,158,92,0.06)';
                           (e.currentTarget as HTMLElement).style.color='#1a9e5c';
                         }}
                         onMouseLeave={e => {
                           (e.currentTarget as HTMLElement).style.background='transparent';
                           (e.currentTarget as HTMLElement).style.color='#3a3a3a';
                         }}>
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex">
          <a href="/contact"
             style={{
               padding: '0.5rem 1.5rem',
               borderRadius: '2rem',
               background: 'linear-gradient(135deg, #1a9e5c, #157a47)',
               color: '#fff',
               fontWeight: 600,
               fontSize: '0.8rem',
               textDecoration: 'none',
               boxShadow: '0 2px 12px rgba(26,158,92,0.25)',
               transition: 'box-shadow 0.3s',
             }}
             onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow='0 4px 20px rgba(26,158,92,0.4)'}
             onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow='0 2px 12px rgba(26,158,92,0.25)'}>
            Nous contacter
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          style={{color: '#3a3a3a', background: 'none', border: 'none', cursor: 'pointer'}}
          onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(248,247,244,0.98)',
          backdropFilter: 'blur(24px)',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          padding: '1rem 1.5rem 1.5rem',
        }}>
          {navItems.map((item) => {
            if (item.direct) {
              return (
                <div key={item.label} style={{padding:'0.75rem 0', borderBottom:'1px solid rgba(0,0,0,0.06)'}}>
                  <a href={item.anchor}
                     style={{color:'#0f0f0f', fontSize:'0.9rem', fontWeight:600, textDecoration:'none'}}
                     onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </a>
                </div>
              );
            }
            return (
              <div key={item.label} style={{padding:'0.75rem 0', borderBottom:'1px solid rgba(0,0,0,0.06)'}}>
                <a href={item.anchor}
                   style={{color:'#0f0f0f', fontSize:'0.9rem', fontWeight:600, textDecoration:'none', display:'block', marginBottom:'0.5rem'}}
                   onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
                {item.sub.map((s) => (
                  <a key={s.label} href={s.href}
                     style={{display:'block', fontSize:'0.8rem', color:'rgba(30,30,30,0.45)', padding:'0.25rem 0 0.25rem 0.75rem', textDecoration:'none'}}
                     onClick={() => setMobileOpen(false)}>
                    {s.label}
                  </a>
                ))}
              </div>
            );
          })}
          <a href="/contact"
             style={{
               display:'block', marginTop:'1rem',
               padding:'0.75rem', borderRadius:'2rem', textAlign:'center',
               background:'linear-gradient(135deg, #1a9e5c, #157a47)',
               color:'#fff', fontWeight:600, fontSize:'0.85rem', textDecoration:'none',
             }}
             onClick={() => setMobileOpen(false)}>
            Nous contacter
          </a>
        </div>
      )}
    </header>
  );
}
