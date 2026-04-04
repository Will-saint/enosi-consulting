import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { seoConfig } from "../../seo";

export const metadata: Metadata = {
  title: seoConfig.offresPilotage.title,
  description: seoConfig.offresPilotage.description,
};

const interventions = [
  {
    n: "01",
    titre: "Audit du pilotage existant",
    texte: "Compréhension des flux de données, des processus de production, des usages réels. Identification des irritants et des angles morts.",
  },
  {
    n: "02",
    titre: "Définition des décisions clés",
    texte: "Travail avec la direction pour identifier les 5 à 8 décisions récurrentes que le pilotage doit permettre de prendre. Tout le reste découle de là.",
  },
  {
    n: "03",
    titre: "Structuration des KPIs",
    texte: "Sélection, définition et hiérarchisation des indicateurs. Un KPI qui n'est pas relié à une décision possible est supprimé.",
  },
  {
    n: "04",
    titre: "Construction du dispositif de pilotage",
    texte: "Tableau de bord décisionnel, format court, logique de lecture claire. Construit avec les équipes, pas pour elles.",
  },
  {
    n: "05",
    titre: "Automatisation de la production",
    texte: "Connexion aux sources, élimination des retraitements manuels, fiabilisation des données. Le reporting doit être produit sans effort.",
  },
  {
    n: "06",
    titre: "Alertes et signaux avancés",
    texte: "Mise en place d'alertes automatiques sur les indicateurs critiques. La direction est informée avant la réunion, pas pendant.",
  },
];

const etapes = [
  {
    n: "1",
    titre: "Comprendre avant de construire",
    texte: "Nous ne commençons pas par les outils. Nous commençons par comprendre quelles décisions le pilotage doit permettre, et dans quel contexte organisationnel elles se prennent.",
  },
  {
    n: "2",
    titre: "Construire avec les équipes",
    texte: "Les livrables sont co-construits avec les utilisateurs finaux. Un tableau de bord conçu sans eux ne sera pas utilisé par eux.",
  },
  {
    n: "3",
    titre: "Transférer la maîtrise",
    texte: "L'objectif final est que les équipes puissent faire évoluer le dispositif elles-mêmes. Nous documentons, formons, et rendons autonome.",
  },
];

const resultats = [
  { chiffre: "−60 à 80%", label: "de temps de production reporting" },
  { chiffre: "÷2 à 3", label: "sur le temps de décision en réunion" },
  { chiffre: "1 source", label: "de vérité partagée entre les directions" },
  { chiffre: "J+1", label: "disponibilité des données vs J+5 à J+15 avant" },
];

const COLOR = "#3ddc84";

export default function PagePilotage() {
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
                Pilotage de la performance
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Rendre la performance lisible, fiable et utile.
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl">
              Nous aidons les directions à construire un pilotage qui sert vraiment à décider — pas à constater.
            </p>
          </div>

          {/* Pour qui */}
          <section className="mb-14 pb-14 border-b border-[#1e1e1e]">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-6">Cette offre s&apos;adresse à</p>
            <div className="space-y-4">
              {[
                { icone: "◎", titre: "Directions financières", texte: "Vous produisez un reporting mensuel exhaustif. Il arrive trop tard, il est trop long, et les décisions sont souvent déjà prises avant qu'il soit lu." },
                { icone: "◈", titre: "Directions de la performance", texte: "Vous avez des indicateurs. Mais ils ne sont pas alignés entre les directions, et personne ne regarde les mêmes chiffres pour décider." },
                { icone: "◉", titre: "COMEX et directions générales", texte: "Vous avez besoin d'une vision synthétique, fiable et actionnable de la performance — pas d'un tableau de bord de plus." },
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
              On part de la décision. Pas de la donnée.
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
                  "Un projet de déploiement d'outil BI sans réflexion sur les usages",
                  "Une mission de reporting décoratif conçue pour impressionner",
                  "Un audit sans suite opérationnelle",
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
                <p className="text-sm font-bold text-white mb-1">Refonte du pilotage mensuel d&apos;une ETI industrielle</p>
                <p className="text-xs text-gray-500">−5 jours de production · ÷3 sur le temps de décision</p>
              </div>
              <a href="/portfolio#cas-1" className="text-sm text-[#3ddc84] hover:underline shrink-0">Lire le cas →</a>
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
