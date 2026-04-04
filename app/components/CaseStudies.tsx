const interventions = [
  {
    contexte: "Direction financière — ETI industrielle",
    titre: "Refonte du pilotage de la performance",
    description:
      "Structuration d'un nouveau dispositif de pilotage mensuel : indicateurs clés, reporting automatisé, tableau de bord décisionnel. Réduction du temps de production du reporting de 60 %.",
    pilier: "Pilotage",
    couleurPilier: "#3ddc84",
    impact: "−60% de temps de production reporting",
  },
  {
    contexte: "Direction transformation — Grand groupe",
    titre: "Cadrage et déploiement d'un cas d'usage IA",
    description:
      "Identification du cas d'usage à plus fort potentiel parmi 12 candidats. Cadrage, prototypage et déploiement d'un modèle de détection d'anomalies sur flux financiers critiques.",
    pilier: "Data & IA",
    couleurPilier: "#6366f1",
    impact: "Détection en temps réel sur flux critiques",
  },
  {
    contexte: "Direction data — Groupe services",
    titre: "Structuration d'un dispositif d'aide à la décision",
    description:
      "Mise en place d'un socle analytique consolidé permettant à la direction de disposer de projections fiables à horizon 12 mois, avec alertes automatisées sur 5 indicateurs prioritaires.",
    pilier: "Data & IA",
    couleurPilier: "#6366f1",
    impact: "Projections 12 mois opérationnelles",
  },
  {
    contexte: "Direction performance — ETI en croissance",
    titre: "Optimisation de processus de pilotage multi-acteurs",
    description:
      "Diagnostic des frictions entre finance, métier et data. Rationalisation des processus de clôture et de reporting. Gain de 3 semaines sur le cycle budgétaire annuel.",
    pilier: "Efficacité",
    couleurPilier: "#f59e0b",
    impact: "−3 semaines sur le cycle budgétaire",
  },
  {
    contexte: "Comité de direction — PME en transformation",
    titre: "Fiabilisation d'un reporting critique",
    description:
      "Audit, reconstruction et automatisation d'un reporting mensuel stratégique présentant des incohérences récurrentes. Mise en place d'une gouvernance des données adaptée.",
    pilier: "Pilotage",
    couleurPilier: "#3ddc84",
    impact: "Reporting fiable dès le mois suivant",
  },
  {
    contexte: "Direction générale — Scale-up",
    titre: "Structuration des indicateurs de création de valeur",
    description:
      "Conception et déploiement d'un système d'indicateurs orienté valeur, permettant au COMEX d'aligner les priorités opérationnelles sur les leviers de performance économique réels.",
    pilier: "Efficacité",
    couleurPilier: "#f59e0b",
    impact: "Alignement COMEX / opérations atteint",
  },
];

export default function CaseStudies() {
  return (
    <section id="interventions" className="py-24 px-6 border-b border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Exemples d&apos;interventions</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Des missions concrètes,<br className="hidden md:block" /> des résultats mesurables.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Ces exemples illustrent la nature et la portée de nos interventions.
            Les noms de clients ne sont pas communiqués.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {interventions.map((item) => (
            <div
              key={item.titre}
              className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-7 flex flex-col hover:border-[#222] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <p className="text-xs text-gray-600 leading-snug max-w-[180px]">{item.contexte}</p>
                <span
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full shrink-0 ml-3"
                  style={{ backgroundColor: `${item.couleurPilier}12`, color: item.couleurPilier }}
                >
                  {item.pilier}
                </span>
              </div>

              {/* Titre */}
              <h3 className="text-base font-bold text-white mb-3 leading-snug">{item.titre}</h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{item.description}</p>

              {/* Impact */}
              <div
                className="text-xs font-semibold pt-4 border-t"
                style={{ borderColor: `${item.couleurPilier}18`, color: item.couleurPilier }}
              >
                → {item.impact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
