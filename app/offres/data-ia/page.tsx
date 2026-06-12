import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { seoConfig } from "../../seo";

export const metadata: Metadata = {
  title: seoConfig.offresDataIA.title,
  description: seoConfig.offresDataIA.description,
  openGraph: {
    title: seoConfig.offresDataIA.title,
    description: seoConfig.offresDataIA.description,
    url: 'https://enosi-consulting.vercel.app/offres/data-ia',
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Data & IA pour la décision",
  "description": "Transformer les données en décisions concrètes. Automatisation du reporting, déploiement de cas d'usage IA en 6 à 10 semaines pour les directions transformation et DSI.",
  "provider": { "@type": "Organization", "name": "Enosi Consulting" },
  "areaServed": "France",
  "serviceType": "Conseil en intelligence artificielle et data engineering",
  "audience": { "@type": "Audience", "audienceType": "Direction Transformation, CDO, DSI, Direction générale" },
  "url": "https://enosi-consulting.vercel.app/offres/data-ia"
};

const interventions = [
  {
    n: "01",
    titre: "Cartographie et scoring des cas d'usage",
    texte: "Identification et évaluation des opportunités selon 4 critères : valeur business, faisabilité technique, disponibilité des données, rapidité de déploiement.",
  },
  {
    n: "02",
    titre: "Cadrage orienté décision",
    texte: "Pour chaque cas retenu : définition précise de la décision que le modèle doit déclencher. Un modèle sans décision associée n'est pas un cas d'usage, c'est un projet R&D.",
  },
  {
    n: "03",
    titre: "Automatisation du reporting",
    texte: "Connexion aux sources, transformation des données, production automatique. Le reporting n'est plus un travail manuel, c'est un flux.",
  },
  {
    n: "04",
    titre: "Modèles de prévision et projection",
    texte: "Construction de modèles simples, interprétables, intégrés dans les outils existants. Horizon 3 à 12 mois selon les besoins.",
  },
  {
    n: "05",
    titre: "Détection d'anomalies",
    texte: "Identification automatique des écarts significatifs sur les flux financiers, opérationnels ou commerciaux. Alertes en temps réel sur les seuils critiques.",
  },
  {
    n: "06",
    titre: "Intégration et transfert",
    texte: "Le modèle déployé s'intègre dans le workflow existant. Les équipes comprennent comment il fonctionne et peuvent l'interpréter. Je ne livre pas des boîtes noires.",
  },
];

const etapes = [
  {
    n: "1",
    titre: "Commencer par la valeur business",
    texte: "Je ne pars jamais d'un algorithme. Je pars d'un problème de décision réel, et je choisis l'approche technique la plus simple qui le résout.",
  },
  {
    n: "2",
    titre: "Privilégier l'interprétabilité",
    texte: "Un modèle que les équipes ne comprennent pas ne sera pas utilisé. Je sacrifie parfois quelques points de performance pour gagner en clarté et en adoption.",
  },
  {
    n: "3",
    titre: "Déployer, pas démontrer",
    texte: "L'objectif n'est pas un POC impressionnant. C'est un modèle en production, utilisé quotidiennement, avec un impact mesurable.",
  },
];

const resultats = [
  { chiffre: "6 à 10 sem.", label: "De zéro à un modèle en production" },
  { chiffre: "−80%", label: "Temps de production d'un reporting automatisé" },
  { chiffre: "12 mois", label: "Horizon de projection fiable obtenu" },
  { chiffre: "1 source", label: "De données consolidée pour les décisions" },
];

const COLOR = "#6366f1";

export default function PageDataIA() {
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
                Data &amp; IA pour la décision
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#0f0f0f] mb-5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Transformer vos données en décisions concrètes.
            </h1>
            <p className="text-[rgba(30,30,30,0.5)] text-base leading-relaxed max-w-xl">
              J&apos;aide les directions à identifier les cas d&apos;usage à forte valeur, et à les déployer, pas à les lister.
            </p>
          </div>

          {/* Pour qui */}
          <section className="mb-14 pb-14 border-b border-[rgba(0,0,0,0.08)]">
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-6">Cette offre s&apos;adresse à</p>
            <div className="space-y-4">
              {[
                { icone: "◎", titre: "Directions transformation", texte: "Vous avez des cas d'usage IA identifiés mais aucun en production. Le manque de priorisation et de lien avec le métier bloque tout." },
                { icone: "◈", titre: "Directions data", texte: "Vos équipes data produisent des modèles. Mais ils ne sont pas adoptés par le métier, parce qu'ils ne s'intègrent dans aucun processus de décision réel." },
                { icone: "◉", titre: "Directions financières et performance", texte: "Vous cherchez à automatiser votre reporting, améliorer vos prévisions, ou détecter les anomalies plus tôt, sans savoir par où commencer." },
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
                <div key={item.n} className="rounded-xl p-5" style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}>
                  <span className="text-xs font-mono mb-2 block" style={{ color: COLOR }}>{item.n}</span>
                  <h3 className="text-sm font-bold text-[#0f0f0f] mb-1.5">{item.titre}</h3>
                  <p className="text-xs text-[rgba(30,30,30,0.5)] leading-relaxed">{item.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Notre approche */}
          <section className="mb-14 pb-14 border-b border-[rgba(0,0,0,0.08)]">
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mb-3">Ma méthode sur ce sujet</p>
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              L&apos;IA utile, c&apos;est celle qu&apos;on utilise.
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
              Ce que mes clients obtiennent
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
              <h3 className="text-sm font-bold text-[#0f0f0f] mb-4">Ce que cette offre n&apos;est pas</h3>
              <div className="space-y-3">
                {[
                  "De l'IA pour l'IA, sans cas d'usage métier défini",
                  "Des POC non déployables ou non maintenables",
                  "Des modèles opaques que personne ne comprend ni n'utilise",
                ].map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-[rgba(30,30,30,0.4)] text-sm shrink-0">✗</span>
                    <p className="text-sm text-[rgba(30,30,30,0.5)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cas client */}
          <section className="mb-14 pb-14 border-b border-[rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between gap-4 rounded-xl p-6" style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}>
              <div>
                <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-wider mb-1">Cas client</p>
                <p className="text-sm font-bold text-[#0f0f0f] mb-1">Détection d&apos;anomalies sur flux financiers critiques</p>
                <p className="text-xs text-[rgba(30,30,30,0.5)]">8 semaines de zéro à production · 94% de détection</p>
              </div>
              <a href="/portfolio#cas-2" className="text-sm text-[#6366f1] hover:underline shrink-0">Lire le cas →</a>
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
