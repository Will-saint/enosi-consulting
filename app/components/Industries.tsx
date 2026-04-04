const contextes = [
  {
    fonction: "Direction financière",
    desc: "Fiabiliser les chiffres, clarifier le pilotage, accélérer la clôture.",
    icone: "◎",
  },
  {
    fonction: "Direction performance",
    desc: "Structurer les indicateurs qui comptent. Rendre la performance lisible à tous les niveaux.",
    icone: "◈",
  },
  {
    fonction: "Direction transformation",
    desc: "Cadrer les initiatives, piloter les impacts, connecter la stratégie à l'exécution.",
    icone: "◉",
  },
  {
    fonction: "ETI en croissance",
    desc: "Structurer le pilotage à mesure que la complexité augmente.",
    icone: "◎",
  },
  {
    fonction: "Grands groupes et COMEX",
    desc: "Intervenir en environnements multi-acteurs, multi-périmètres, créer les conditions d'une décision plus rapide.",
    icone: "◈",
  },
];

export default function Industries() {
  return (
    <section id="contextes" className="py-28 px-6 border-b border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Contextes d&apos;intervention</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Avec qui nous travaillons
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Nous intervenons auprès de directions qui cherchent à mieux piloter,
            mieux décider et mieux créer de la valeur — quelle que soit la taille
            de l&apos;organisation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contextes.map((c) => (
            <div
              key={c.fonction}
              className="bg-[#111] border border-[#1e1e1e] rounded-xl p-6 hover:border-[#3ddc84]/25 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-200 group"
            >
              <div className="text-[#3ddc84] text-base mb-3 font-bold">{c.icone}</div>
              <h3 className="text-sm font-bold text-white mb-2 group-hover:text-[#3ddc84] transition-colors">
                {c.fonction}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
