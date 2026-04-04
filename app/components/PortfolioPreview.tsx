const cas = [
  {
    badge: "Pilotage",
    badgeBg: "#3ddc8415",
    badgeColor: "#3ddc84",
    titre: "D'un reporting subi à un pilotage qui décide",
    contexte: "Direction financière — ETI industrielle",
    resultats: [
      "Production reporting : 6 jours → 1 jour",
      "Temps de décision COMEX divisé par 3",
      "Alertes automatiques sur 5 indicateurs critiques",
    ],
    href: "/portfolio#cas-1",
  },
  {
    badge: "Data & IA",
    badgeBg: "#6366f115",
    badgeColor: "#6366f1",
    titre: "De l'IA qui tourne en prod — pas en démo",
    contexte: "Direction transformation — Grand groupe",
    resultats: [
      "12 cas d'usage scorés et priorisés",
      "1 modèle en production en 8 semaines",
      "94% de détection sur données historiques",
    ],
    href: "/portfolio#cas-2",
  },
  {
    badge: "Efficacité",
    badgeBg: "#f59e0b15",
    badgeColor: "#f59e0b",
    titre: "14 semaines de budget. Réduit à 11.",
    contexte: "Direction performance — ETI en croissance",
    resultats: [
      "Cycle budgétaire raccourci de 3 semaines",
      "Allers-retours divisés par 2,5",
      "Budget utilisé comme outil de pilotage annuel",
    ],
    href: "/portfolio#cas-3",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-28 px-6 border-b border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Trois missions. Trois résultats concrets.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Des interventions réelles, présentées sans fioritures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {cas.map((c) => (
            <div key={c.titre} className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-7 flex flex-col hover:border-[#3ddc84]/25 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-200">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full self-start mb-4" style={{ backgroundColor: c.badgeBg, color: c.badgeColor }}>
                {c.badge}
              </span>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">{c.titre}</h3>
              <p className="text-xs text-gray-600 mb-5">{c.contexte}</p>
              <div className="space-y-2 flex-1">
                {c.resultats.map((r) => (
                  <div key={r} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="text-[#3ddc84] shrink-0">→</span>
                    {r}
                  </div>
                ))}
              </div>
              <a href={c.href} className="text-xs text-[#3ddc84] hover:underline mt-5 block">
                Lire le cas complet →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/portfolio" className="text-sm text-[#3ddc84] hover:underline">
            Voir tous les cas →
          </a>
        </div>
      </div>
    </section>
  );
}
