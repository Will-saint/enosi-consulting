"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

type Piece = {
  src: string;
  titre: string;
  legende: string;
  tag: string;
  tagColor: string;
  large?: boolean;
  demo?: string;
};

const pieces: Piece[] = [
  {
    src: "/portfolio/reporting.jpg",
    titre: "Automatisation d'un reporting mensuel",
    legende:
      "Consolidation de fichiers multi-sources, contrôles de cohérence et génération automatique du pack de reporting. J'ai mis en œuvre ce type d'automatisation sur un périmètre de 100 M€ chez un précédent employeur (Excel / Power Query), avec 25 % de gain sur les délais de production.",
    tag: "Démonstration — données synthétiques",
    tagColor: "#1a9e5c",
    large: true,
    demo: "/demo/reporting",
  },
  {
    src: "/portfolio/pipeline.jpg",
    titre: "Pipeline de collecte et de scoring automatisé",
    legende:
      "Pipeline Python collectant des données depuis 5 sources hétérogènes (APIs REST et SPARQL), avec normalisation, déduplication, enrichissement et scoring pondéré. 12 185 profils et 11 447 entreprises traités, stockés en PostgreSQL / PostGIS.",
    tag: "Projet personnel — architecture déployée",
    tagColor: "#4f46e5",
    large: true,
  },
  {
    src: "/portfolio/controles.jpg",
    titre: "Contrôles et détection d'anomalies",
    legende:
      "Moteur de contrôles automatiques sur flux financiers : seuils, doublons, écarts budgétaires, ruptures de série. Détection le jour même et alerte par exception, au lieu d'un contrôle manuel en fin de mois.",
    tag: "Démonstration",
    tagColor: "#d97706",
  },
  {
    src: "/portfolio/extraction.jpg",
    titre: "Extraction documentaire par IA",
    legende:
      "Lecture automatique de factures et pièces comptables, mise en champs structurés, contrôle par règles métier avec revue humaine sur exception. Supprime la ressaisie et conserve la traçabilité.",
    tag: "Démonstration",
    tagColor: "#4f46e5",
  },
  {
    src: "/portfolio/publication.jpg",
    titre: "Chaîne de publication automatisée",
    legende:
      "Chaîne complète s'exécutant quotidiennement sans aucune intervention : déclencheur planifié, filtrage sur critères de complétude, génération, appel webhook et publication. Supervision avec journalisation, reprise sur erreur et alerte en cas d'échec.",
    tag: "Projet personnel — en production",
    tagColor: "#1a9e5c",
  },
];

function Carte({ p, onOuvrir }: { p: Piece; onOuvrir: (p: Piece) => void }) {
  return (
    <figure
      className="overflow-hidden rounded-2xl bg-white h-full flex flex-col group"
      style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.07), 0 4px 24px rgba(0,0,0,0.05)" }}
    >
      <button
        type="button"
        onClick={() => onOuvrir(p)}
        aria-label={`Agrandir : ${p.titre}`}
        className="relative w-full block cursor-zoom-in"
        style={{ aspectRatio: "16 / 9", background: "#F2F0EC", border: "none", padding: 0 }}
      >
        <Image
          src={p.src}
          alt={p.titre}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
          className="group-hover:scale-[1.03]"
        />
        {/* Indice d'agrandissement */}
        <span
          className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full px-3 py-1.5 opacity-0 group-hover:opacity-100"
          style={{
            background: "rgba(15,15,15,0.82)",
            color: "#fff",
            fontSize: "0.66rem",
            fontWeight: 600,
            backdropFilter: "blur(6px)",
            transition: "opacity 0.25s ease",
          }}
        >
          ⤢ Agrandir
        </span>
      </button>
      <figcaption className="p-6 flex flex-col gap-2 flex-1">
        <span className="text-[0.62rem] uppercase tracking-[0.12em] font-semibold" style={{ color: p.tagColor }}>
          {p.tag}
        </span>
        <h3 className="text-base font-bold" style={{ color: "#0f0f0f" }}>
          {p.titre}
        </h3>
        <p className="text-xs leading-relaxed" style={{ color: "rgba(30,30,30,0.55)" }}>
          {p.legende}
        </p>
        {p.demo && (
          <a
            href={p.demo}
            className="mt-auto pt-3 text-xs font-semibold inline-flex items-center gap-1.5"
            style={{ color: "#1a9e5c", textDecoration: "none" }}
          >
            ▶ Lancer la démo interactive
          </a>
        )}
      </figcaption>
    </figure>
  );
}

export default function Realisations() {
  const [actif, setActif] = useState<Piece | null>(null);
  const fermer = useCallback(() => setActif(null), []);

  // Échap pour fermer + blocage du scroll de fond
  useEffect(() => {
    if (!actif) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && fermer();
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [actif, fermer]);

  const grandes = pieces.filter((p) => p.large);
  const petites = pieces.filter((p) => !p.large);

  return (
    <section
      id="realisations"
      className="py-28 px-6"
      style={{
        background: "#F8F7F4",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(30,30,30,0.35)" }}>
            Réalisations
          </p>
          <h2
            className="font-extrabold mb-4"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.4rem,5vw,3.8rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#0f0f0f",
            }}
          >
            Ce que ça donne<br />
            <span style={{ color: "#1a9e5c" }}>concrètement.</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(30,30,30,0.5)" }}>
            Des architectures réelles et des démonstrations construites sur ma méthode.
            Chaque pièce indique clairement sa provenance — cliquez pour agrandir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {grandes.map((p, i) => (
            <ScrollReveal key={p.src} delay={i * 100}>
              <Carte p={p} onOuvrir={setActif} />
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {petites.map((p, i) => (
            <ScrollReveal key={p.src} delay={i * 100}>
              <Carte p={p} onOuvrir={setActif} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Visionneuse plein écran */}
      {actif && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={actif.titre}
          onClick={fermer}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9995,
            background: "rgba(10,10,10,0.92)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(1rem, 4vw, 3rem)",
            cursor: "zoom-out",
            animation: "fadeUp 0.25s ease",
          }}
        >
          <button
            type="button"
            onClick={fermer}
            aria-label="Fermer"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.08)",
              color: "#fff",
              fontSize: "1.1rem",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ✕
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "1200px", width: "100%", cursor: "default", margin: 0 }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: "0.75rem", overflow: "hidden" }}>
              <Image src={actif.src} alt={actif.titre} fill sizes="100vw" style={{ objectFit: "contain" }} priority />
            </div>
            <figcaption className="mt-4 text-center">
              <span
                className="text-[0.62rem] uppercase tracking-[0.12em] font-semibold block mb-1"
                style={{ color: actif.tagColor }}
              >
                {actif.tag}
              </span>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>{actif.titre}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
