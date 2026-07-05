import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { seoConfig } from "../seo";

export const metadata: Metadata = {
  title: seoConfig.offres.title,
  description: seoConfig.offres.description,
  openGraph: {
    title: seoConfig.offres.title,
    description: seoConfig.offres.description,
    url: 'https://enosi-consulting.vercel.app/offres',
  },
};

const offres = [
  {
    numero: "01",
    nom: "Pilotage financier & ROI des projets Data/IA",
    accroche: "Évaluer, challenger et suivre la valeur réelle de vos investissements Data & IA.",
    detail:
      "Business cases challengés, suivi coûts / valeur / ROI de votre portefeuille de projets, arbitrages éclairés. C'est le cœur de mon expérience chez Moët Hennessy (LVMH).",
    points: [
      "ROI et suivi budgétaire des projets Data/IA",
      "Cartographie et scoring des cas d'usage",
      "Automatisation et fiabilisation du reporting",
    ],
    couleur: "#4f46e5",
    icone: "◈",
    href: "/offres/data-ia",
  },
  {
    numero: "02",
    nom: "Pilotage de la performance",
    accroche: "Rendre la performance lisible, fiable et utile pour la décision.",
    detail:
      "Vos indicateurs existent mais votre pilotage reste flou. Je structure les KPI qui comptent et je construis les dispositifs dont votre COMEX a besoin pour décider.",
    points: [
      "Structuration des KPI et indicateurs clés",
      "Refonte du reporting décisionnel",
      "Tableaux de bord orientés COMEX",
    ],
    couleur: "#1a9e5c",
    icone: "◎",
    href: "/offres/pilotage",
  },
  {
    numero: "03",
    nom: "Efficacité et création de valeur",
    accroche: "Réduire les frictions, piloter ce qui crée vraiment de la valeur.",
    detail:
      "Cycles budgétaires trop longs, allers-retours redondants, coordination métier / data / finance défaillante : j'identifie les frictions et je les traite.",
    points: [
      "Optimisation des processus critiques",
      "Coordination métier / data / finance",
      "Gains visibles à court terme",
    ],
    couleur: "#d97706",
    icone: "◉",
    href: "/offres/efficacite",
  },
];

export default function OffresHub() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-4xl mx-auto">

          {/* En-tête */}
          <div className="mb-14">
            <a href="/" className="inline-flex items-center gap-2 text-sm text-[rgba(30,30,30,0.5)] hover:text-[#0f0f0f] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </a>
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mt-8 mb-3">Mes offres</p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#0f0f0f] mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Une expertise. Trois angles d&apos;attaque.
            </h1>
            <p className="text-[rgba(30,30,30,0.5)] text-base leading-relaxed max-w-xl">
              Je ne vends pas un catalogue : j&apos;interviens à la jonction de la finance,
              de la data et de l&apos;IA. Ces trois offres sont trois façons concrètes
              dont cette expertise se traduit chez vous.
            </p>
          </div>

          {/* Offres */}
          <div className="space-y-5 mb-12">
            {offres.map((o) => (
              <a key={o.numero} href={o.href}
                 className="block bg-white border border-[rgba(0,0,0,0.08)] rounded-2xl p-7 md:p-8 transition-all duration-200 hover:-translate-y-0.5"
                 style={{ textDecoration: "none" }}>
                <div className="flex items-start justify-between gap-6 flex-wrap md:flex-nowrap">
                  <div className="flex gap-5">
                    <span className="text-lg shrink-0 mt-1" style={{ color: o.couleur }}>{o.icone}</span>
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[0.65rem] font-mono tracking-widest" style={{ color: o.couleur }}>{o.numero}</span>
                        <h2 className="text-lg md:text-xl font-bold text-[#0f0f0f]"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                          {o.nom}
                        </h2>
                      </div>
                      <p className="text-sm font-medium text-[rgba(30,30,30,0.65)] mb-2">{o.accroche}</p>
                      <p className="text-xs text-[rgba(30,30,30,0.45)] leading-relaxed mb-3 max-w-xl">{o.detail}</p>
                      <div className="flex flex-wrap gap-x-5 gap-y-1">
                        {o.points.map((pt) => (
                          <span key={pt} className="text-xs text-[rgba(30,30,30,0.45)] flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full inline-block" style={{ background: o.couleur }} />
                            {pt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold shrink-0 mt-1" style={{ color: o.couleur }}>
                    En savoir plus →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Repères d'engagement */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { titre: "Diagnostic gratuit", desc: "12 questions, 3 minutes, rapport personnalisé — le point d'entrée recommandé.", cta: "Commencer →", href: "/diagnostic", accent: "#1a9e5c", fond: true },
              { titre: "Audit 5 jours — 2 900 € HT", desc: "Prix fixe, 4 livrables garantis, résiliation sans frais à J+2. Pour tester sans engagement long.", cta: "Découvrir →", href: "/offres/quick-win", accent: "#d97706", fond: false },
              { titre: "Mission 6–12 semaines", desc: "Sur devis, cadré à l'issue du diagnostic. Chaque étape livre quelque chose de concret.", cta: "En discuter →", href: "/contact", accent: "#4f46e5", fond: false },
            ].map((r) => (
              <div key={r.titre}
                   className="rounded-2xl p-6 border"
                   style={{
                     background: r.fond ? "rgba(26,158,92,0.06)" : "#FFFFFF",
                     borderColor: r.fond ? "rgba(26,158,92,0.2)" : "rgba(0,0,0,0.08)",
                   }}>
                <p className="text-sm font-bold text-[#0f0f0f] mb-2">{r.titre}</p>
                <p className="text-xs text-[rgba(30,30,30,0.5)] leading-relaxed mb-4">{r.desc}</p>
                <a href={r.href} className="text-xs font-semibold hover:underline" style={{ color: r.accent }}>{r.cta}</a>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <section className="text-center py-8">
            <h2 className="text-2xl font-bold text-[#0f0f0f] mb-4"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Vous ne savez pas par où commencer&nbsp;?
            </h2>
            <p className="text-[rgba(30,30,30,0.5)] text-sm mb-7">
              Le diagnostic gratuit identifie votre priorité en 3 minutes — et vous oriente vers la bonne porte.
            </p>
            <a href="/diagnostic"
               className="inline-block px-10 py-3.5 text-white font-semibold rounded-full text-sm"
               style={{ background: "linear-gradient(135deg, #1a9e5c, #157a47)", boxShadow: "0 4px 20px rgba(26,158,92,0.3)" }}>
              Mon diagnostic gratuit →
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
