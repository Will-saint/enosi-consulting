import Image from "next/image";
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

function Carte({ p }: { p: Piece }) {
  return (
    <figure
      className="overflow-hidden rounded-2xl bg-white h-full flex flex-col"
      style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.07), 0 4px 24px rgba(0,0,0,0.05)" }}
    >
      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#F2F0EC" }}>
        <Image
          src={p.src}
          alt={p.titre}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <figcaption className="p-6 flex flex-col gap-2 flex-1">
        <span
          className="text-[0.62rem] uppercase tracking-[0.12em] font-semibold"
          style={{ color: p.tagColor }}
        >
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
  const grandes = pieces.filter((p) => p.large);
  const petites = pieces.filter((p) => !p.large);

  return (
    <section
      id="realisations"
      className="py-28 px-6"
      style={{ background: "#F8F7F4", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
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
            Chaque pièce indique clairement sa provenance.
          </p>
        </div>

        {/* Deux pièces principales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {grandes.map((p, i) => (
            <ScrollReveal key={p.src} delay={i * 100}>
              <Carte p={p} />
            </ScrollReveal>
          ))}
        </div>

        {/* Les trois autres */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {petites.map((p, i) => (
            <ScrollReveal key={p.src} delay={i * 100}>
              <Carte p={p} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
