import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { seoConfig } from "../../seo";

export const metadata: Metadata = {
  title: seoConfig.offresEfficacite.title,
  description: seoConfig.offresEfficacite.description,
};

const interventions = [
  {
    n: "01",
    titre: "Diagnostic des frictions",
    texte: "Cartographie complète des processus critiques. Identification des points de blocage, des redondances, des délais injustifiés et des irritants récurrents.",
  },
  {
    n: "02",
    titre: "Refonte des processus clés",
    texte: "Reconstruction des processus autour de ce qui crée de la valeur. Suppression de ce qui n'en crée pas. Sans nostalgie pour l'existant.",
  },
  {
    n: "03",
    titre: "Alignement des référentiels",
    texte: "Mise en place d'hypothèses, de définitions et de données de référence communes entre les directions. La coordination commence par un langage commun.",
  },
  {
    n: "04",
    titre: "Pilotage orienté valeur",
    texte: "Mise en place d'indicateurs centrés sur la création de valeur réelle — pas sur l'activité. Ce qui se mesure, se pilote. Ce qui se pilote, s'améliore.",
  },
  {
    n: "05",
    titre: "Accélération des cycles de décision",
    texte: "Réduction des boucles de validation redondantes. Clarification des périmètres de décision. Les équipes savent qui décide quoi, et quand.",
  },
  {
    n: "06",
    titre: "Transfert et pérennisation",
    texte: "Les nouvelles façons de travailler sont documentées, formalisées et appropriées par les équipes. Le changement tient dans la durée.",
  },
];

const etapes = [
  {
    n: "1",
    titre: "Diagnostiquer avant de prescrire",
    texte: "Nous ne proposons pas de solution avant d'avoir compris le problème réel. La plupart des inefficacités ont une cause cachée que seul un diagnostic honnête révèle.",
  },
  {
    n: "2",
    titre: "Travailler avec les équipes, pas sur elles",
    texte: "Les personnes qui vivent les frictions au quotidien savent où elles sont. Nous les faisons parler, nous structurons, nous priorisons ensemble.",
  },
  {
    n: "3",
    titre: "Mesurer les gains",
    texte: "Chaque intervention est associée à des indicateurs de résultat concrets. On mesure le avant, on mesure le après. Pas d'impact sans mesure.",
  },
];

const resultats = [
  { chiffre: "−30 à 50%", label: "Sur les délais des processus critiques" },
  { chiffre: "−60%", label: "D'allers-retours sur les cycles budgétaires" },
  { chiffre: "1 référentiel", label: "Commun entre toutes les directions" },
  { chiffre: "Année 1", label: "Gains visibles dès la première itération" },
];

const COLOR = "#f59e0b";

export default function PageEfficacite() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* En-tête */}
          <div className="mb-14">
            <a href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </a>
            <div className="mt-8 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${COLOR}15`, color: COLOR }}>
                Efficacité et création de valeur
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Améliorer l&apos;exécution. Réduire les frictions. Piloter ce qui compte.
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl">
              Nous intervenons sur les processus qui ralentissent l&apos;organisation et sur les mécanismes qui empêchent de créer de la valeur.
            </p>
          </div>

          {/* Pour qui */}
          <section className="mb-14 pb-14 border-b border-[#1e1e1e]">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-6">Cette offre s&apos;adresse à</p>
            <div className="space-y-4">
              {[
                { icone: "◎", titre: "Directions en transformation", texte: "Votre organisation grandit ou se transforme. Les processus hérités ne tiennent plus. Il faut reconstruire sans tout arrêter." },
                { icone: "◈", titre: "Directions financières et performance", texte: "Vos cycles budgétaires, vos clôtures, vos processus de reporting prennent trop de temps et génèrent trop de frictions entre les équipes." },
                { icone: "◉", titre: "COMEX et directions générales", texte: "Vous cherchez à aligner les priorités opérationnelles sur les leviers de performance réels — et à mesurer ce qui crée vraiment de la valeur." },
              ].map((p) => (
                <div key={p.titre} className="flex gap-4 bg-[#111] border border-[#1e1e1e] rounded-xl p-5 hover:border-[#3ddc84]/25 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-200">
                  <span className="text-lg shrink-0 mt-0.5" style={{ color: COLOR }}>{p.icone}</span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{p.titre}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{p.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ce que nous faisons */}
          <section className="mb-14 pb-14 border-b border-[#1e1e1e]">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Nos interventions</p>
            <h2 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Ce que nous faisons concrètement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interventions.map((item) => (
                <div key={item.n} className="rounded-xl p-5" style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}>
                  <span className="text-xs font-mono mb-2 block" style={{ color: COLOR }}>{item.n}</span>
                  <h3 className="text-sm font-bold text-white mb-1.5">{item.titre}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Notre approche */}
          <section className="mb-14 pb-14 border-b border-[#1e1e1e]">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Notre méthode sur ce sujet</p>
            <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Le problème n&apos;est presque jamais l&apos;outil.
            </h2>
            <div className="space-y-0">
              {etapes.map((e, i) => (
                <div key={e.n} className={`flex gap-5 py-6 ${i < etapes.length - 1 ? "border-b border-[#1e1e1e]" : ""}`}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold" style={{ backgroundColor: `${COLOR}15`, color: COLOR }}>
                    {e.n}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-2">{e.titre}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{e.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ce que vous obtenez */}
          <section className="mb-14 pb-14 border-b border-[#1e1e1e]">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Les résultats typiques</p>
            <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Ce que nos clients obtiennent
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {resultats.map((r) => (
                <div key={r.label} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6 text-center hover:border-[#3ddc84]/25 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-200">
                  <div className="text-3xl font-bold mb-2" style={{ color: COLOR }}>{r.chiffre}</div>
                  <div className="text-xs text-gray-600 leading-snug">{r.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Ce que nous ne faisons pas */}
          <section className="mb-14 pb-14 border-b border-[#1e1e1e]">
            <div className="rounded-xl p-6" style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e", borderLeft: `2px solid ${COLOR}` }}>
              <h3 className="text-sm font-bold text-white mb-4">Ce que cette offre n&apos;est pas</h3>
              <div className="space-y-3">
                {[
                  "Des audits sans recommandations opérationnelles",
                  "Des recommandations sans déploiement",
                  "De la conduite du changement déconnectée des vrais enjeux métier",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-gray-600 text-sm shrink-0">✗</span>
                    <p className="text-sm text-gray-500">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cas client */}
          <section className="mb-14 pb-14 border-b border-[#1e1e1e]">
            <div className="flex items-center justify-between gap-4 rounded-xl p-6" style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}>
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Cas client</p>
                <p className="text-sm font-bold text-white mb-1">Transformation du cycle budgétaire d&apos;une ETI</p>
                <p className="text-xs text-gray-500">−3 semaines · −60% d&apos;allers-retours</p>
              </div>
              <a href="/portfolio#cas-3" className="text-sm text-[#f59e0b] hover:underline shrink-0">Lire le cas →</a>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Ce sujet vous concerne&nbsp;?
            </h2>
            <p className="text-gray-500 text-sm mb-7">Un premier échange de 30 minutes pour évaluer comment nous pouvons intervenir.</p>
            <a href="/contact" className="inline-block px-10 py-3.5 bg-[#3ddc84] text-black font-semibold rounded-full hover:bg-[#2ab86e] transition-colors text-sm">
              Échangeons sur vos enjeux
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
