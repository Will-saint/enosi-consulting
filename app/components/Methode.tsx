const etapes = [
  {
    numero: "1",
    titre: "Cadrer",
    description:
      "Comprendre le contexte réel avant de proposer quoi que ce soit. Identifier les vrais enjeux, pas ceux du cahier des charges.",
  },
  {
    numero: "2",
    titre: "Analyser",
    description:
      "Aller dans les données, les processus, les systèmes. Nommer clairement ce qui fonctionne, ce qui bloque, ce qui manque.",
  },
  {
    numero: "3",
    titre: "Structurer",
    description:
      "Concevoir une réponse cohérente — indicateurs, architecture de pilotage, cas d'usage, processus — adaptée à l'organisation.",
  },
  {
    numero: "4",
    titre: "Déployer",
    description:
      "Implémenter avec les équipes. Pas en chambre. Dans les outils réels, avec les contraintes réelles.",
  },
  {
    numero: "5",
    titre: "Transférer",
    description:
      "Rendre les équipes autonomes. La dépendance n'est pas un objectif. L'appropriation, si.",
  },
];

export default function Methode() {
  return (
    <section id="methode" className="py-28 px-6 border-b border-[#1e1e1e] bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Gauche — texte */}
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">Notre approche</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Nous clarifions.<br />
              Nous outillons.<br />
              <span className="text-[#3ddc84]">Nous rendons utile.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Nos interventions suivent une logique simple : comprendre avant de
              recommander, outiller avant de livrer, transférer avant de partir.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Chaque mission est cadrée avec précision. Les livrables sont conçus
              pour être utilisés — pas archivés. Et les équipes repartent avec
              des capacités nouvelles, pas une dépendance supplémentaire.
            </p>
          </div>

          {/* Droite — étapes */}
          <div className="space-y-0">
            {etapes.map((e, index) => (
              <div
                key={e.numero}
                className="flex gap-5 group"
              >
                {/* Ligne verticale + numéro */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[#111] border border-[#1e1e1e] flex items-center justify-center shrink-0 group-hover:border-[#3ddc84]/40 transition-colors">
                    <span className="text-xs font-bold text-[#3ddc84]">{e.numero}</span>
                  </div>
                  {index < etapes.length - 1 && (
                    <div className="w-px flex-1 bg-[#1e1e1e] my-1" />
                  )}
                </div>

                {/* Contenu */}
                <div className={`pb-6 ${index < etapes.length - 1 ? "" : ""}`}>
                  <h3 className="text-base font-bold text-white mb-1">{e.titre}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
