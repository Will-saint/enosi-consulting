export default function Awards() {
  return (
    <section className="py-24 px-6 border-b border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs text-gray-600 uppercase tracking-widest text-center mb-10">
          Notre positionnement
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Carte 1 */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8 flex items-start gap-6 hover:border-[#3ddc84]/20 transition-colors duration-300">
            <div className="w-12 h-12 bg-[#3ddc84]/8 rounded-xl flex items-center justify-center shrink-0 text-xl text-[#3ddc84] font-bold">
              ◎
            </div>
            <div>
              <div className="text-xs text-[#3ddc84] font-semibold uppercase tracking-wider mb-2">
                Finance · Performance · Data · IA
              </div>
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                À l&apos;intersection de quatre disciplines
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Enosi Consulting intervient là où la finance, la performance, la data et l&apos;IA
                se croisent. Pas pour faire de la techno. Pour générer un impact
                décisionnel concret.
              </p>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8 flex items-start gap-6 hover:border-[#3ddc84]/20 transition-colors duration-300">
            <div className="w-12 h-12 bg-[#3ddc84]/8 rounded-xl flex items-center justify-center shrink-0 text-xl text-[#3ddc84] font-bold">
              ◉
            </div>
            <div>
              <div className="text-xs text-[#3ddc84] font-semibold uppercase tracking-wider mb-2">
                Exécution · Clarté · Valeur
              </div>
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Du diagnostic à l&apos;outil opérationnel
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Nous ne livrons pas des recommandations. Nous structurons,
                outillons et transférons — pour que les équipes puissent décider
                et agir plus vite, avec plus de clarté.
              </p>
            </div>
          </div>
        </div>

        {/* Fondateur */}
        <p className="text-center text-xs text-gray-700">
          Cabinet fondé par William Saint-Dizier — consultant en performance, data et IA.
        </p>
      </div>
    </section>
  );
}
