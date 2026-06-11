import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { seoConfig } from "../seo";
import PolaroidWrapper from "../components/PolaroidWrapper";

export const metadata: Metadata = {
  title: seoConfig.aPropos.title,
  description: seoConfig.aPropos.description,
  openGraph: {
    title: seoConfig.aPropos.title,
    description: seoConfig.aPropos.description,
    url: 'https://enosi-consulting.vercel.app/a-propos',
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "William Saint-Dizier",
  "jobTitle": "Consultant en performance, data et IA",
  "worksFor": {
    "@type": "Organization",
    "name": "Enosi Consulting",
    "url": "https://enosi-consulting.vercel.app"
  },
  "alumniOf": [
    { "@type": "CollegeOrUniversity", "name": "Université Paris 1 Panthéon-Sorbonne" }
  ],
  "knowsAbout": [
    "Pilotage de la performance", "Reporting financier", "Data engineering",
    "Intelligence artificielle", "Business intelligence", "Power BI", "Dataiku"
  ],
  "sameAs": ["https://www.linkedin.com/in/williamsaintdizier"],
  "url": "https://enosi-consulting.vercel.app/a-propos"
};

export default function APropos() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* ── En-tête ─────────────────────────────── */}
          <div className="mb-16">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[rgba(30,30,30,0.5)] hover:text-[#0f0f0f] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </a>
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mt-8 mb-3">À propos</p>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight text-[#0f0f0f] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Un cabinet construit autour d&apos;une conviction.
            </h1>
            <p className="text-[rgba(30,30,30,0.5)] text-base leading-relaxed max-w-xl">
              Que la donnée, la finance et l&apos;IA ne sont utiles
              que si elles améliorent une décision réelle.
            </p>
          </div>

          {/* ── Section 1 : Pourquoi Enosi ──────────── */}
          <section className="mb-16 pb-16 border-b border-[rgba(0,0,0,0.08)]">
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-3">Le cabinet</p>
            <h2
              className="text-3xl font-bold text-[#0f0f0f] mb-7"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Pourquoi Enosi Consulting existe
            </h2>

            <div className="space-y-5">
              <p className="text-[rgba(30,30,30,0.55)] leading-relaxed">
                La plupart des organisations ont aujourd&apos;hui accès
                à plus de données qu&apos;elles n&apos;en ont jamais eu.
                Et pourtant, les décisions restent lentes,
                les reportings peu utilisés, les projets IA bloqués
                avant la mise en production.
              </p>
              <p className="text-[rgba(30,30,30,0.55)] leading-relaxed">
                Le problème n&apos;est pas technique.
                C&apos;est un problème de traduction, entre ce que
                les données disent et ce que les équipes peuvent
                en faire concrètement.
              </p>
              <p className="text-[rgba(30,30,30,0.55)] leading-relaxed">
                Enosi Consulting a été fondé pour combler cet écart.
                Nous intervenons à l&apos;intersection de la finance,
                de la performance, de la data et de l&apos;IA.
                Pas pour faire de la technologie, mais pour aider
                les directions à mieux décider, plus vite,
                avec une base plus solide.
              </p>
            </div>

            <p className="text-xs text-[rgba(30,30,30,0.4)] italic mt-6">
              &ldquo;Enosi&rdquo; signifie &ldquo;union&rdquo; en grec.
            </p>
          </section>

          {/* ── Section 2 : Ce qu'on fait vraiment ─── */}
          <section className="mb-16 pb-16 border-b border-[rgba(0,0,0,0.08)]">
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-3">Notre positionnement</p>
            <h2
              className="text-3xl font-bold text-[#0f0f0f] mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Le lien entre vos données, votre performance et vos décisions.
            </h2>
            <p className="text-[rgba(30,30,30,0.55)] mb-8 leading-relaxed">
              Nous intervenons là où peu de profils savent opérer :
              à l&apos;intersection de la logique financière,
              de la maîtrise de la data et de l&apos;application concrète de l&apos;IA.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icone: "◎",
                  couleur: "#1a9e5c",
                  titre: "Finance & Performance",
                  texte:
                    "Lecture de la performance, logique business, rentabilité, KPIs, vision management. Nous comprenons ce que les directions financières et de performance cherchent à piloter.",
                },
                {
                  icone: "◈",
                  couleur: "#6366f1",
                  titre: "Data & Automatisation",
                  texte:
                    "Analyse, structuration, dashboards, automatisation. Nous transformons les données disponibles en dispositifs utiles et adoptés.",
                },
                {
                  icone: "◉",
                  couleur: "#f59e0b",
                  titre: "IA appliquée",
                  texte:
                    "Prédiction, détection d'anomalies, aide à la décision. Nous déployons l'IA là où elle crée une valeur mesurable, pas là où elle impressionne.",
                },
              ].map((c) => (
                <div
                  key={c.titre}
                  className="bg-white border border-[rgba(0,0,0,0.08)] rounded-xl p-6 hover:border-[#2a2a2a] transition-colors"
                >
                  <div className="text-xl font-bold mb-3" style={{ color: c.couleur }}>
                    {c.icone}
                  </div>
                  <h3 className="text-sm font-bold text-[#0f0f0f] mb-2">{c.titre}</h3>
                  <p className="text-xs text-[rgba(30,30,30,0.5)] leading-relaxed">{c.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 3 : Notre contexte ──────────── */}
          <section className="mb-16 pb-16 border-b border-[rgba(0,0,0,0.08)]">
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-3">Notre ancrage</p>
            <h2
              className="text-3xl font-bold text-[#0f0f0f] mb-7"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Une expertise forgée dans des environnements complexes
            </h2>

            <div className="space-y-5">
              <p className="text-[rgba(30,30,30,0.55)] leading-relaxed">
                Notre expérience s&apos;est construite dans des organisations
                où la data, la finance, le business et l&apos;IT
                coexistent et doivent se parler.
              </p>
              <p className="text-[rgba(30,30,30,0.55)] leading-relaxed">
                Nous avons vu de l&apos;intérieur comment les problèmes
                de pilotage se posent vraiment : la complexité
                organisationnelle, les contraintes système,
                les dynamiques entre directions, la distance
                entre ce que les outils peuvent faire
                et ce que les équipes sont prêtes à adopter.
              </p>
              <p className="text-[rgba(30,30,30,0.55)] leading-relaxed">
                C&apos;est cette expérience terrain qui structure
                notre façon d&apos;intervenir.
              </p>
            </div>
          </section>

          {/* ── Section 4 : Notre approche ──────────── */}
          <section className="mb-16 pb-16 border-b border-[rgba(0,0,0,0.08)]">
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-3">Comment nous travaillons</p>
            <h2
              className="text-3xl font-bold text-[#0f0f0f] mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Trois principes. Pas de méthode propriétaire.
            </h2>

            <div className="space-y-0">
              {[
                {
                  n: "01",
                  titre: "On part toujours de la décision",
                  texte:
                    "Avant de parler de données ou d'outils, on identifie les décisions que l'organisation doit prendre. Tout le reste en découle.",
                },
                {
                  n: "02",
                  titre: "On outille, on ne recommande pas",
                  texte:
                    "Nous ne livrons pas des rapports. Nous construisons des dispositifs que les équipes utilisent après notre départ. L'autonomie du client est l'objectif.",
                },
                {
                  n: "03",
                  titre: "On s'adapte au contexte réel",
                  texte:
                    "Pas de méthode standard appliquée mécaniquement. Chaque intervention est cadrée sur les vrais enjeux, les vraies contraintes, les vrais acteurs.",
                },
              ].map((b, i, arr) => (
                <div
                  key={b.n}
                  className={`flex gap-5 py-6 ${i < arr.length - 1 ? "border-b border-[rgba(0,0,0,0.08)]" : ""}`}
                >
                  <span
                    className="text-sm font-mono shrink-0 mt-0.5"
                    style={{ color: "#1a9e5c" }}
                  >
                    {b.n}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#0f0f0f] mb-2">{b.titre}</h3>
                    <p className="text-sm text-[rgba(30,30,30,0.5)] leading-relaxed">{b.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 5 : Ce qu'on n'est pas ─────── */}
          <section
            className="mb-16 py-16 px-8 rounded-2xl"
            style={{ backgroundColor: "#0d0d0d" }}
          >
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>Pour être clair</p>
            <h2
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#ffffff" }}
            >
              Ce que nous ne sommes pas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Colonne gauche — ce qu'on n'est pas */}
              <div className="space-y-3">
                {[
                  "Un cabinet de conseil en stratégie pure",
                  "Une ESN ou un prestataire technique",
                  "Un éditeur de logiciel",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-sm shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>✗</span>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>{item}</p>
                  </div>
                ))}
              </div>

              {/* Colonne droite — ce qu'on est */}
              <div className="space-y-3">
                {[
                  "Un cabinet orienté exécution et impact",
                  "Un partenaire qui reste jusqu'au résultat",
                  "Un pont entre business, data et décision",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-sm shrink-0 mt-0.5" style={{ color: "#1a9e5c" }}>✓</span>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 5b : Le fondateur ───────────── */}
          <section className="mb-16 pb-16 border-b border-[rgba(0,0,0,0.08)]">
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-3">Le fondateur</p>

            {/* Two-column layout: polaroid left, text right */}
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 items-center sm:items-start mb-8">

              {/* 3D Polaroid */}
              <div style={{
                flexShrink: 0,
                width: "200px",
                height: "260px",
                borderRadius: "12px",
                overflow: "visible",
                background: "transparent",
              }}>
                <PolaroidWrapper />
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <h2
                  className="text-3xl font-bold text-[#0f0f0f] mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  William Saint-Dizier
                </h2>
                <p className="text-[rgba(30,30,30,0.55)] leading-relaxed">
                  Consultant en performance, data et IA. Double diplôme Panthéon-Sorbonne × PSTB,
                  Master Data IA for Business (2026). Expériences en France, Nouvelle-Zélande
                  et La Réunion, dans des environnements grands groupes et ETI.
                </p>
              </div>
            </div>

            {/* Logo strip */}
            <div className="mb-8 py-6 border-y border-[rgba(0,0,0,0.06)]">
              <p className="text-xs text-[rgba(30,30,30,0.35)] uppercase tracking-widest mb-5">Environnements d&apos;exercice</p>
              <div className="flex flex-wrap items-center gap-8">
                {[
                  { wordmark: "LVMH", sub: "Moët Hennessy", style: { fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", letterSpacing: "0.18em" } },
                  { wordmark: "BOURBON", sub: "Voyages", style: { fontFamily: "DM Sans, sans-serif", fontSize: "0.9rem", letterSpacing: "0.22em" } },
                  { wordmark: "APPART’CITY", sub: "Groupe hôtelier", style: { fontFamily: "DM Sans, sans-serif", fontSize: "0.82rem", letterSpacing: "0.12em" } },
                ].map((c) => (
                  <div key={c.wordmark} className="flex flex-col items-start gap-0.5 opacity-40">
                    <span className="font-bold text-[#0f0f0f]" style={c.style}>{c.wordmark}</span>
                    <span className="text-[0.55rem] tracking-[0.1em] uppercase text-[rgba(30,30,30,0.5)]">{c.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expériences */}
            <div className="mb-8">
              <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-5">Expériences clés</p>
              <div className="space-y-0">
                {[
                  {
                    org: "Moët Hennessy — LVMH",
                    desc: "Pilotage financier de projets Data/IA — déploiement d'outils de tracking et reporting analytique pour une maison du groupe.",
                  },
                  {
                    org: "Périmètre 100 M€ de revenus",
                    desc: "Contrôle financier et automatisation du reporting : réduction de 25 % du temps de production des reportings de pilotage.",
                  },
                  {
                    org: "Groupe 200 M€",
                    desc: "Audit financier et conformité sur 98 sites — structuration des données, fiabilisation des indicateurs de performance.",
                  },
                ].map((e, i, arr) => (
                  <div
                    key={e.org}
                    className={`flex gap-5 py-5 ${i < arr.length - 1 ? "border-b border-[rgba(0,0,0,0.08)]" : ""}`}
                  >
                    <span
                      className="shrink-0 w-2 h-2 rounded-full mt-2"
                      style={{ background: "#1a9e5c", minWidth: "8px", maxHeight: "8px", display: "block" }}
                    />
                    <div>
                      <h3 className="text-sm font-bold text-[#0f0f0f] mb-1">{e.org}</h3>
                      <p className="text-sm text-[rgba(30,30,30,0.5)] leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-5">Certifications</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Power BI", detail: "PL-300 Microsoft Certified" },
                  { label: "Microsoft Azure", detail: "Certification cloud" },
                  { label: "Dataiku", detail: "ML & data pipeline" },
                  { label: "IBM Data Science + AI Engineering", detail: "340h cumulées" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="flex gap-3 items-start rounded-xl p-4 bg-[#F2F0EC] border border-[rgba(0,0,0,0.08)]"
                  >
                    <span className="text-xs shrink-0 mt-0.5" style={{ color: "#1a9e5c" }}>✓</span>
                    <div>
                      <p className="text-xs font-bold text-[#0f0f0f]">{c.label}</p>
                      <p className="text-xs text-[rgba(30,30,30,0.4)] mt-0.5">{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 6 : CTA final ────────────────── */}
          <section className="py-16 text-center">
            <h2
              className="text-3xl font-bold text-[#0f0f0f] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Discutons de vos enjeux.
            </h2>
            <p className="text-[rgba(30,30,30,0.5)] max-w-sm mx-auto text-sm leading-relaxed mb-8">
              Un premier échange de 30 minutes,
              sans engagement, pour voir si nous pouvons
              vous aider.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-3.5 bg-[#1a9e5c] text-black font-semibold rounded-full hover:bg-[#157a47] transition-colors text-sm"
            >
              Prendre contact
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
