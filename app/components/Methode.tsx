"use client";
import { useRef, useState } from "react";

const etapes = [
  {
    n: "01",
    titre: "Cadrer",
    description: "Comprendre le contexte réel avant de proposer quoi que ce soit. Identifier les vrais enjeux, pas ceux du cahier des charges.",
    icon: "◎",
    color: "#1a9e5c",
  },
  {
    n: "02",
    titre: "Analyser",
    description: "Aller dans les données, les processus, les systèmes. Nommer clairement ce qui fonctionne, ce qui bloque, ce qui manque.",
    icon: "◈",
    color: "#4f46e5",
  },
  {
    n: "03",
    titre: "Structurer",
    description: "Concevoir une réponse cohérente : indicateurs, architecture de pilotage, cas d'usage, processus, adaptée à l'organisation.",
    icon: "◉",
    color: "#d97706",
  },
  {
    n: "04",
    titre: "Déployer",
    description: "Implémenter avec les équipes. Pas en chambre. Dans les outils réels, avec les contraintes réelles.",
    icon: "◎",
    color: "#1a9e5c",
  },
  {
    n: "05",
    titre: "Transférer",
    description: "Rendre les équipes autonomes. La dépendance n'est pas un objectif. L'appropriation, si.",
    icon: "◈",
    color: "#4f46e5",
  },
];

export default function Methode() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement;
    el.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    setActive(i);
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / (el.scrollWidth / etapes.length));
    setActive(Math.min(index, etapes.length - 1));
  };

  return (
    <section id="methode" style={{
      background: "#0f0f0f",
      padding: "7.5rem 0",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Halo vert discret */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse, rgba(26,158,92,0.12), transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />
      {/* Header */}
      <div style={{ padding: "0 1.5rem", maxWidth: "64rem", margin: "0 auto 3rem", position: "relative" }}>
        <p style={{
          fontSize: "0.65rem", letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)", marginBottom: "1rem"
        }}>Mon approche</p>
        <div style={{ display: "flex", alignItems: "flex-end",
                      justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
            fontWeight: 800, color: "#ffffff",
            margin: 0, lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}>
            Je clarifie.<br />
            J&apos;outille.<br />
            <span style={{ color: "#1a9e5c" }}>Je rends utile.</span>
          </h2>
          {/* Dots navigation */}
          <div style={{ display: "flex", gap: "0.5rem", paddingBottom: "0.25rem" }}>
            {etapes.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                  background: i === active ? "#1a9e5c" : "rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll horizontal */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "auto",
          paddingLeft: "max(1.5rem, calc((100vw - 64rem) / 2))",
          paddingRight: "1.5rem",
          paddingBottom: "1rem",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {etapes.map((e, i) => (
          <div
            key={e.n}
            onClick={() => setActive(i)}
            style={{
              flexShrink: 0,
              width: "clamp(260px, 35vw, 320px)",
              scrollSnapAlign: "start",
              background: i === active ? "#1a1a1a" : "#161616",
              border: `1px solid ${i === active
                ? "rgba(26,158,92,0.45)"
                : "rgba(255,255,255,0.08)"}`,
              borderRadius: "1.25rem",
              padding: "2rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: i === active
                ? "0 8px 32px rgba(26,158,92,0.15)"
                : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center",
                          justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <span style={{
                fontSize: "0.65rem", fontFamily: "monospace",
                color: e.color, letterSpacing: "0.1em"
              }}>{e.n}</span>
              <span style={{ fontSize: "1.5rem", color: e.color }}>{e.icon}</span>
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.4rem", fontWeight: 700,
              color: "#ffffff", marginBottom: "0.75rem",
            }}>{e.titre}</h3>
            <p style={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
            }}>{e.description}</p>
          </div>
        ))}
      </div>

      {/* Barre de progression */}
      <div style={{
        maxWidth: "64rem", margin: "1.5rem auto 0",
        padding: "0 1.5rem"
      }}>
        <div style={{
          height: "2px", background: "rgba(255,255,255,0.1)",
          borderRadius: "1px", overflow: "hidden"
        }}>
          <div style={{
            height: "100%",
            width: `${((active + 1) / etapes.length) * 100}%`,
            background: "linear-gradient(to right, #1a9e5c, #4f46e5)",
            transition: "width 0.4s ease",
            borderRadius: "1px",
          }} />
        </div>
      </div>
    </section>
  );
}
