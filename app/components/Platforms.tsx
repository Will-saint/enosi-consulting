import ScrollReveal from "./ScrollReveal";

const offres = [
  {
    numero: "01",
    nom: "Pilotage de la performance",
    accroche: "Rendre la performance lisible, fiable et utile.",
    probleme: "Les indicateurs existent, mais le pilotage reste flou. Les décisions s'appuient sur des données mal structurées ou mal lues.",
    apport:
      "Nous structurons les indicateurs clés, fiabilisons les données de référence et construisons les dispositifs de pilotage dont les directions ont vraiment besoin pour décider.",
    sujets: [
      "Structuration des KPI et indicateurs de performance",
      "Refonte du reporting de pilotage",
      "Analyse de rentabilité et de contribution",
      "Tableaux de bord orientés décision",
      "Aide à la priorisation et arbitrage",
    ],
    benefice: "Un pilotage plus clair. Des décisions mieux fondées. Des équipes qui regardent les mêmes chiffres.",
    couleur: "#3ddc84",
    icone: "◎",
    href: "/offres/pilotage",
  },
  {
    numero: "02",
    nom: "Data & IA pour la décision",
    accroche: "Transformer les données en leviers de décision concrets.",
    probleme: "Les données sont disponibles, parfois abondantes — mais elles ne se traduisent pas encore en avantages décisionnels ou opérationnels.",
    apport:
      "Nous identifions les cas d'usage à forte valeur, structurons les analyses et déployons des outils d'aide à la décision qui s'intègrent dans les processus réels des équipes.",
    sujets: [
      "Automatisation et fiabilisation du reporting",
      "Modèles de prévision et de projection",
      "Détection d'anomalies et alerting",
      "Cadrage et déploiement de cas d'usage IA",
      "Aide à la décision augmentée",
    ],
    benefice: "Des projections plus fiables. Des décisions mieux éclairées. De l'IA qui sert les usages, pas l'inverse.",
    couleur: "#6366f1",
    icone: "◈",
    href: "/offres/data-ia",
  },
  {
    numero: "03",
    nom: "Efficacité et création de valeur",
    accroche: "Améliorer l'exécution, réduire les frictions, piloter ce qui compte.",
    probleme: "Les processus ralentissent l'organisation. La coordination entre métier, finance et data coûte plus qu'elle ne produit.",
    apport:
      "Nous analysons les flux, identifions les points de friction, rationalisons les processus critiques et mettons en place un pilotage orienté valeur — pragmatique, transférable, durable.",
    sujets: [
      "Optimisation de processus métier et de pilotage",
      "Réduction des redondances et des délais",
      "Amélioration de la coordination métier / data / finance",
      "Structuration d'une culture de la performance",
      "Transformation pragmatique et orientée résultats",
    ],
    benefice: "Des organisations plus fluides. Un pilotage centré sur la valeur. Des gains visibles à court terme.",
    couleur: "#f59e0b",
    icone: "◉",
    href: "/offres/efficacite",
  },
];

export default function Platforms() {
  return (
    <section id="offres" className="py-28 px-6 border-b" style={{borderColor: 'rgba(255,255,255,0.06)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{color: 'rgba(255,255,255,0.25)'}}>Nos offres</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Trois domaines d&apos;intervention
          </h2>
          <p className="max-w-2xl mx-auto" style={{color: 'rgba(255,255,255,0.4)'}}>
            Un périmètre resserré. Des expertises complémentaires. Une logique d&apos;impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {offres.map((o, index) => (
            <ScrollReveal key={o.nom} delay={index * 150}>
              <div className="card-premium p-8 flex flex-col relative overflow-hidden group h-full">

                {/* Fond décoratif hover */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0
                     group-hover:opacity-100 transition-opacity duration-500 -translate-y-8 translate-x-8"
                     style={{background: `radial-gradient(circle, ${o.couleur}15, transparent)`}} />

                {/* Numéro décoratif */}
                <span className="font-serif text-[5rem] opacity-10 absolute top-4 right-6 leading-none select-none"
                      style={{color: o.couleur, fontFamily: "'Playfair Display', serif"}}>
                  {o.numero}
                </span>

                {/* Icône */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                    style={{ backgroundColor: `${o.couleur}12`, color: o.couleur }}
                  >
                    {o.icone}
                  </div>
                </div>

                {/* Titre + accroche */}
                <div className="text-xs font-semibold uppercase tracking-wider mb-2 relative z-10" style={{ color: o.couleur }}>
                  {o.accroche}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{o.nom}</h3>

                {/* Problème */}
                <div className="rounded-xl p-4 mb-5 relative z-10"
                     style={{background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)'}}>
                  <p className="text-xs uppercase tracking-wider mb-1.5" style={{color: 'rgba(255,255,255,0.2)'}}>Le constat</p>
                  <p className="text-sm leading-relaxed" style={{color: 'rgba(255,255,255,0.5)'}}>{o.probleme}</p>
                </div>

                {/* Apport */}
                <p className="text-sm leading-relaxed mb-5 flex-1 relative z-10" style={{color: 'rgba(255,255,255,0.5)'}}>{o.apport}</p>

                {/* Sujets */}
                <div className="space-y-2 mb-6 relative z-10">
                  {o.sujets.map((s) => (
                    <div key={s} className="flex items-start gap-2 text-xs" style={{color: 'rgba(255,255,255,0.35)'}}>
                      <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: o.couleur }} />
                      {s}
                    </div>
                  ))}
                </div>

                {/* Bénéfice */}
                <div className="text-xs font-medium leading-relaxed pt-4 border-t mb-4 relative z-10"
                     style={{ borderColor: `${o.couleur}20`, color: o.couleur }}>
                  {o.benefice}
                </div>

                {/* Lien */}
                <a href={o.href}
                   className="inline-flex items-center gap-1 text-xs transition-colors relative z-10 text-[rgba(255,255,255,0.3)] hover:text-white">
                  En savoir plus →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
