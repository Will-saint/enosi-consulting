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
    <section id="offres" className="py-28 px-6 border-b border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Nos offres</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Trois domaines d&apos;intervention
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Un périmètre resserré. Des expertises complémentaires. Une logique d&apos;impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {offres.map((o) => (
            <div
              key={o.nom}
              className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8 flex flex-col hover:border-[#3ddc84]/25 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-200"
            >
              {/* Numéro + icône */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs text-gray-700 font-mono">{o.numero}</span>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                  style={{ backgroundColor: `${o.couleur}12`, color: o.couleur }}
                >
                  {o.icone}
                </div>
              </div>

              {/* Titre + accroche */}
              <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: o.couleur }}>
                {o.accroche}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{o.nom}</h3>

              {/* Problème */}
              <div className="bg-[#0d0d0d] rounded-xl p-4 mb-5 border border-[#181818]">
                <p className="text-xs text-gray-600 uppercase tracking-wider mb-1.5">Le constat</p>
                <p className="text-sm text-gray-400 leading-relaxed">{o.probleme}</p>
              </div>

              {/* Apport */}
              <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">{o.apport}</p>

              {/* Sujets */}
              <div className="space-y-2 mb-6">
                {o.sujets.map((s) => (
                  <div key={s} className="flex items-start gap-2 text-xs text-gray-500">
                    <div
                      className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                      style={{ backgroundColor: o.couleur }}
                    />
                    {s}
                  </div>
                ))}
              </div>

              {/* Bénéfice */}
              <div
                className="text-xs font-medium leading-relaxed pt-4 border-t mb-4"
                style={{ borderColor: `${o.couleur}20`, color: o.couleur }}
              >
                {o.benefice}
              </div>

              {/* Lien page offre */}
              <a
                href={o.href}
                className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-white transition-colors"
              >
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
