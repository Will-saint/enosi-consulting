import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { seoConfig } from "../../seo";

export const metadata: Metadata = {
  title: seoConfig.offresPilotage.title,
  description: seoConfig.offresPilotage.description,
  openGraph: {
    title: seoConfig.offresPilotage.title,
    description: seoConfig.offresPilotage.description,
    url: `${SITE_URL}/offres/pilotage`,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Automatisation du reporting financier",
  "description": "Consolidation multi-sources, contrôles de cohérence et génération automatique du pack de reporting mensuel pour les directions financières.",
  "provider": { "@type": "Organization", "name": "Enosi Consulting" },
  "areaServed": "France",
  "serviceType": "Automatisation du reporting et des contrôles financiers",
  "audience": { "@type": "Audience", "audienceType": "Direction financière, Direction de la performance, COMEX" },
  "url": `${SITE_URL}/offres/pilotage`
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
    texte: "Je ne commence pas par les outils. Je commence par comprendre quelles décisions le pilotage doit permettre, et dans quel contexte organisationnel elles se prennent.",
  },
  {
    n: "2",
    titre: "Construire avec les équipes",
    texte: "Les livrables sont co-construits avec les utilisateurs finaux. Un tableau de bord conçu sans eux ne sera pas utilisé par eux.",
  },
  {
    n: "3",
    titre: "Transférer la maîtrise",
    texte: "L'objectif final est que les équipes puissent faire évoluer le dispositif elles-mêmes. Je documente, je forme, et je rends autonome.",
  },
];

const resultats = [
  { chiffre: "−25 %", label: "de temps de production — résultat obtenu sur un périmètre de 100 M€" },
  { chiffre: "J+1", label: "disponibilité des données au lieu d'attendre la fin de semaine" },
  { chiffre: "1 source", label: "de vérité partagée entre les directions" },
  { chiffre: "0", label: "ressaisie manuelle dans la chaîne" },
];

const COLOR = "#1a9e5c";

export default function PagePilotage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* En-tête */}
          <div className="mb-14">
            <a href="/" className="inline-flex items-center gap-2 text-sm text-[rgba(30,30,30,0.5)] hover:text-[#0f0f0f] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </a>
            <div className="mt-8 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${COLOR}15`, color: COLOR }}>
                Automatisation du reporting
              </span>
            </div>
            <h1 className="font-extrabold leading-tight text-[#0f0f0f] mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.6rem, 6vw, 4.6rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Votre reporting mensuel <span style={{ color: COLOR }}>ne devrait pas prendre deux jours.</span>
            </h1>
            <p className="text-[rgba(30,30,30,0.5)] text-base leading-relaxed max-w-xl">
              Des fichiers qui arrivent de partout, des formats qui ne se parlent pas, des contrôles
              faits à la main : je remplace tout ça par un traitement qui s&apos;exécute seul.
              <a href="/demo/reporting" style={{ color: COLOR, fontWeight: 600, textDecoration: "none" }}> ▶ Voir la démo</a>
            </p>
          </div>

          {/* Pour qui */}
          <section className="mb-14 pb-14 border-b border-[rgba(0,0,0,0.08)]">
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-6">Cette offre s&apos;adresse à</p>
            <div className="space-y-4">
              {[
                { icone: "◎", titre: "Directions financières", texte: "Vous produisez un reporting mensuel exhaustif. Il arrive trop tard, il est trop long, et les décisions sont souvent déjà prises avant qu'il soit lu." },
                { icone: "◈", titre: "Directions de la performance", texte: "Vous avez des indicateurs. Mais ils ne sont pas alignés entre les directions, et personne ne regarde les mêmes chiffres pour décider." },
                { icone: "◉", titre: "COMEX et directions générales", texte: "Vous avez besoin d'une vision synthétique, fiable et actionnable de la performance, pas d'un tableau de bord de plus." },
              ].map((p) => (
                <div key={p.titre} className="flex gap-4 bg-white border border-[rgba(0,0,0,0.08)] rounded-xl p-5 hover:border-[#1a9e5c]/25 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-200">
                  <span className="text-lg shrink-0 mt-0.5" style={{ color: COLOR }}>{p.icone}</span>
                  <div>
                    <h3 className="text-sm font-bold text-[#0f0f0f] mb-1">{p.titre}</h3>
                    <p className="text-xs text-[rgba(30,30,30,0.5)] leading-relaxed">{p.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ce que nous faisons */}
          <section className="mb-14 pb-14 border-b border-[rgba(0,0,0,0.08)]">
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-3">Mes interventions</p>
            <h2 className="text-3xl font-bold text-[#0f0f0f] mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Ce que je fais concrètement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interventions.map((item) => (
                <div key={item.n} className="rounded-xl p-5 bg-white transition-shadow hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)]" style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.07)", borderTop: `2px solid ${COLOR}` }}>
                  <span className="text-xs font-mono mb-2 block" style={{ color: COLOR }}>{item.n}</span>
                  <h3 className="text-sm font-bold text-[#0f0f0f] mb-1.5">{item.titre}</h3>
                  <p className="text-xs text-[rgba(30,30,30,0.55)] leading-relaxed">{item.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Notre approche */}
          <section className="mb-14 pb-14 border-b border-[rgba(0,0,0,0.08)]">
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-3">Ma méthode sur ce sujet</p>
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              On part de la décision. Pas de la donnée.
            </h2>
            <div className="space-y-0">
              {etapes.map((e, i) => (
                <div key={e.n} className={`flex gap-5 py-6 ${i < etapes.length - 1 ? "border-b border-[rgba(0,0,0,0.08)]" : ""}`}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold" style={{ backgroundColor: `${COLOR}15`, color: COLOR }}>
                    {e.n}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0f0f0f] mb-2">{e.titre}</h3>
                    <p className="text-sm text-[rgba(30,30,30,0.5)] leading-relaxed">{e.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ce que vous obtenez */}
          <section className="mb-14 pb-14 border-b border-[rgba(0,0,0,0.08)]">
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-3">Les résultats typiques</p>
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Ce que je vise pour vous
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {resultats.map((r) => (
                <div key={r.label} className="bg-white border border-[rgba(0,0,0,0.08)] rounded-xl p-6 text-center hover:border-[#1a9e5c]/25 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-200">
                  <div className="text-3xl font-bold mb-2" style={{ color: COLOR }}>{r.chiffre}</div>
                  <div className="text-xs text-[rgba(30,30,30,0.4)] leading-snug">{r.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Ce que nous ne faisons pas */}
          <section className="mb-14 pb-14 border-b border-[rgba(0,0,0,0.08)]">
            <div className="rounded-xl p-6" style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e", borderLeft: `2px solid ${COLOR}` }}>
              <h3 className="text-sm font-bold mb-4" style={{ color: "#ffffff" }}>Ce que cette offre n&apos;est pas</h3>
              <div className="space-y-3">
                {[
                  "Un projet de déploiement d'outil BI sans réflexion sur les usages",
                  "Une mission de reporting décoratif conçue pour impressionner",
                  "Un audit sans suite opérationnelle",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-sm shrink-0" style={{ color: "rgba(255,255,255,0.35)" }}>✗</span>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cas client */}
          <section className="mb-14 pb-14 border-b border-[rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between gap-4 rounded-xl p-6 bg-white" style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.07)" }}>
              <div>
                <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-wider mb-1">Cas d&apos;usage type</p>
                <p className="text-sm font-bold text-[#0f0f0f] mb-1">Refonte du pilotage mensuel d&apos;une ETI industrielle</p>
                <p className="text-xs text-[rgba(30,30,30,0.5)]">Reporting produit en 1 jour au lieu de 6 · décision COMEX préparée avant la réunion</p>
              </div>
              <a href="/portfolio#cas-1" className="text-sm text-[#1a9e5c] hover:underline shrink-0">Lire le cas →</a>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Ce sujet vous concerne&nbsp;?
            </h2>
            <p className="text-[rgba(30,30,30,0.5)] text-sm mb-7">Un premier échange de 30 minutes pour évaluer comment je peux intervenir.</p>
            <a href="/contact" className="inline-block px-10 py-3.5 bg-[#1a9e5c] text-black font-semibold rounded-full hover:bg-[#157a47] transition-colors text-sm">
              Échangeons sur vos enjeux
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
