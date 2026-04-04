"use client";
import { useState, useEffect } from "react";

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
    anchor: "#methode",
    sub: [
      { label: "Comment nous intervenons", href: "#methode" },
      { label: "Notre méthode", href: "#methode" },
      { label: "Ce qui nous distingue", href: "#methode" },
    ],
  },
  {
    label: "Interventions",
    anchor: "#interventions",
    sub: [
      { label: "Exemples de missions", href: "#interventions" },
      { label: "Cas d'usage", href: "#interventions" },
    ],
  },
  {
    label: "Portfolio",
    anchor: "/portfolio",
    direct: true,
  },
  {
    label: "À propos",
    anchor: "/a-propos",
    direct: true,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/98 border-b border-[#1e1e1e] shadow-[0_1px_20px_rgba(0,0,0,0.5)]"
          : "bg-[#0a0a0a]/80 border-b border-transparent"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo SVG */}
        <a href="/" className="flex items-center shrink-0">
          <svg width="140" height="32" viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="8" width="16" height="16" fill="none" stroke="#3ddc84" strokeWidth="1.5"/>
            <rect x="4" y="12" width="8" height="8" fill="#3ddc84"/>
            <text x="24" y="22" fontFamily="'DM Sans', sans-serif" fontSize="14" fontWeight="700" letterSpacing="0.08em" fill="white">ENOSI</text>
            <text x="24" y="30" fontFamily="'DM Sans', sans-serif" fontSize="7" fontWeight="400" letterSpacing="0.18em" fill="#3ddc84">CONSULTING</text>
          </svg>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            if (item.direct) {
              return (
                <a
                  key={item.label}
                  href={item.anchor}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              );
            }
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(item.label)}
                onMouseLeave={() => setOpen(null)}
              >
                <a
                  href={item.anchor}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  {item.label}
                  <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                {open === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-[#111] border border-[#1e1e1e] rounded-xl shadow-2xl py-2 min-w-[240px]">
                    {item.sub.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-[#181818] transition-colors"
                      >
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
        <div className="hidden lg:flex items-center">
          <a
            href="/contact"
            className="px-5 py-2 text-sm font-semibold bg-[#3ddc84] text-black rounded-full hover:bg-[#2ab86e] transition-colors"
          >
            Nous contacter
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
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
        <div className="lg:hidden bg-[#0f0f0f] border-t border-[#1e1e1e] px-6 py-4">
          {navItems.map((item) => {
            if (item.direct) {
              return (
                <div key={item.label} className="py-3 border-b border-[#1a1a1a] last:border-0">
                  <a
                    href={item.anchor}
                    className="text-white font-semibold text-sm block"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </div>
              );
            }
            return (
              <div key={item.label} className="py-3 border-b border-[#1a1a1a] last:border-0">
                <a
                  href={item.anchor}
                  className="text-white font-semibold text-sm mb-2 block"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
                {item.sub.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="block text-sm text-gray-600 hover:text-white py-1 pl-3 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            );
          })}
          <a
            href="/contact"
            className="mt-4 w-full py-2.5 text-sm font-semibold bg-[#3ddc84] text-black rounded-full hover:bg-[#2ab86e] transition-colors block text-center"
            onClick={() => setMobileOpen(false)}
          >
            Nous contacter
          </a>
        </div>
      )}
    </header>
  );
}
