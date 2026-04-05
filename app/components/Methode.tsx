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
    <section id="methode" className="py-28 px-6 border-b bg-[#F2F0EC]" style={{borderColor:'rgba(0,0,0,0.07)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Gauche — texte */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{color:'rgba(30,30,30,0.4)'}}>Notre approche</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Nous clarifions.<br />
              Nous outillons.<br />
              <span className="text-[#1a9e5c]">Nous rendons utile.</span>
            </h2>
            <p className="leading-relaxed mb-6" style={{color:'rgba(30,30,30,0.55)'}}>
              Nos interventions suivent une logique simple : comprendre avant de
              recommander, outiller avant de livrer, transférer avant de partir.
            </p>
            <p className="text-sm leading-relaxed" style={{color:'rgba(30,30,30,0.45)'}}>
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
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors"
                       style={{background:'#FFFFFF', border:'1px solid rgba(0,0,0,0.1)'}}>
                    <span className="text-xs font-bold" style={{color:'#1a9e5c'}}>{e.numero}</span>
                  </div>
                  {index < etapes.length - 1 && (
                    <div className="w-px flex-1 my-1" style={{background:'rgba(0,0,0,0.1)'}} />
                  )}
                </div>

                {/* Contenu */}
                <div className={`pb-6 ${index < etapes.length - 1 ? "" : ""}`}>
                  <h3 className="text-base font-bold mb-1" style={{color:'#0f0f0f'}}>{e.titre}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'rgba(30,30,30,0.5)'}}>{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
