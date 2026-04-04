import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { seoConfig } from "../seo";

export const metadata: Metadata = {
  title: seoConfig.aPropos.title,
  description: seoConfig.aPropos.description,
};

export default function APropos() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* ── En-tête ─────────────────────────────── */}
          <div className="mb-16">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </a>
            <p className="text-xs text-gray-600 uppercase tracking-widest mt-8 mb-3">À propos</p>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight text-white mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Un cabinet construit autour d&apos;une conviction.
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl">
              Que la donnée, la finance et l&apos;IA ne sont utiles
              que si elles améliorent une décision réelle.
            </p>
          </div>

          {/* ── Section 1 : Pourquoi Enosi ──────────── */}
          <section className="mb-16 pb-16 border-b border-[#1e1e1e]">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Le cabinet</p>
            <h2
              className="text-3xl font-bold text-white mb-7"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Pourquoi Enosi Consulting existe
            </h2>

            <div className="space-y-5">
              <p className="text-gray-400 leading-relaxed">
                La plupart des organisations ont aujourd&apos;hui accès
                à plus de données qu&apos;elles n&apos;en ont jamais eu.
                Et pourtant, les décisions restent lentes,
                les reportings peu utilisés, les projets IA bloqués
                avant la mise en production.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Le problème n&apos;est pas technique.
                C&apos;est un problème de traduction — entre ce que
                les données disent et ce que les équipes peuvent
                en faire concrètement.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Enosi Consulting a été fondé pour combler cet écart.
                Nous intervenons à l&apos;intersection de la finance,
                de la performance, de la data et de l&apos;IA —
                pas pour faire de la technologie, mais pour aider
                les directions à mieux décider, plus vite,
                avec une base plus solide.
              </p>
            </div>

            <p className="text-xs text-gray-600 italic mt-6">
              &ldquo;Enosi&rdquo; signifie &ldquo;union&rdquo; en grec.
            </p>
          </section>

          {/* ── Section 2 : Ce qu'on fait vraiment ─── */}
          <section className="mb-16 pb-16 border-b border-[#1e1e1e]">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Notre positionnement</p>
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Le lien entre vos données, votre performance et vos décisions.
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Nous intervenons là où peu de profils savent opérer :
              à l&apos;intersection de la logique financière,
              de la maîtrise de la data et de l&apos;application concrète de l&apos;IA.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icone: "◎",
                  couleur: "#3ddc84",
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
                    "Prédiction, détection d'anomalies, aide à la décision. Nous déployons l'IA là où elle crée une valeur mesurable — pas là où elle impressionne.",
                },
              ].map((c) => (
                <div
                  key={c.titre}
                  className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6 hover:border-[#2a2a2a] transition-colors"
                >
                  <div className="text-xl font-bold mb-3" style={{ color: c.couleur }}>
                    {c.icone}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2">{c.titre}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{c.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 3 : Notre contexte ──────────── */}
          <section className="mb-16 pb-16 border-b border-[#1e1e1e]">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Notre ancrage</p>
            <h2
              className="text-3xl font-bold text-white mb-7"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Une expertise forgée dans des environnements complexes
            </h2>

            <div className="space-y-5">
              <p className="text-gray-400 leading-relaxed">
                Notre expérience s&apos;est construite dans des organisations
                où la data, la finance, le business et l&apos;IT
                coexistent — et doivent se parler.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Nous avons vu de l&apos;intérieur comment les problèmes
                de pilotage se posent vraiment : la complexité
                organisationnelle, les contraintes système,
                les dynamiques entre directions, la distance
                entre ce que les outils peuvent faire
                et ce que les équipes sont prêtes à adopter.
              </p>
              <p className="text-gray-400 leading-relaxed">
                C&apos;est cette expérience terrain qui structure
                notre façon d&apos;intervenir.
              </p>
            </div>
          </section>

          {/* ── Section 4 : Notre approche ──────────── */}
          <section className="mb-16 pb-16 border-b border-[#1e1e1e]">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Comment nous travaillons</p>
            <h2
              className="text-3xl font-bold text-white mb-8"
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
                  className={`flex gap-5 py-6 ${i < arr.length - 1 ? "border-b border-[#1e1e1e]" : ""}`}
                >
                  <span
                    className="text-sm font-mono shrink-0 mt-0.5"
                    style={{ color: "#3ddc84" }}
                  >
                    {b.n}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{b.titre}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{b.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 5 : Ce qu'on n'est pas ─────── */}
          <section
            className="mb-16 py-16 px-8 rounded-2xl border-y border-[#1e1e1e]"
            style={{ backgroundColor: "#0d0d0d" }}
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Pour être clair</p>
            <h2
              className="text-2xl font-bold text-white mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
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
                    <span className="text-gray-600 text-sm shrink-0 mt-0.5">✗</span>
                    <p className="text-sm text-gray-500">{item}</p>
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
                    <span className="text-sm shrink-0 mt-0.5" style={{ color: "#3ddc84" }}>✓</span>
                    <p className="text-sm text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 6 : CTA final ────────────────── */}
          <section className="py-16 text-center">
            <h2
              className="text-3xl font-bold text-white mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Discutons de vos enjeux.
            </h2>
            <p className="text-gray-500 max-w-sm mx-auto text-sm leading-relaxed mb-8">
              Un premier échange de 30 minutes,
              sans engagement, pour voir si nous pouvons
              vous aider.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-3.5 bg-[#3ddc84] text-black font-semibold rounded-full hover:bg-[#2ab86e] transition-colors text-sm"
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
