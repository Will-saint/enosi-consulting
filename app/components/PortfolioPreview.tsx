import ScrollReveal from "./ScrollReveal";

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
    <section className="py-28 px-6 border-b" style={{borderColor: 'rgba(0,0,0,0.07)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest mb-3" style={{color: 'rgba(30,30,30,0.35)'}}>Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Trois missions. Trois résultats concrets.
          </h2>
          <p className="max-w-xl mx-auto text-sm" style={{color: 'rgba(30,30,30,0.5)'}}>
            Des interventions réelles, présentées sans fioritures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {cas.map((c, index) => (
            <ScrollReveal key={c.titre} delay={index * 100}>
              <div className="card-premium p-7 flex flex-col h-full">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full self-start mb-4"
                      style={{ backgroundColor: c.badgeBg, color: c.badgeColor }}>
                  {c.badge}
                </span>
                <h3 className="text-base font-bold mb-2 leading-snug" style={{color:'#0f0f0f'}}>{c.titre}</h3>
                <p className="text-xs mb-5" style={{color: 'rgba(30,30,30,0.4)'}}>{c.contexte}</p>
                <div className="space-y-2 flex-1">
                  {c.resultats.map((r) => (
                    <div key={r} className="flex items-start gap-2 text-xs" style={{color: 'rgba(30,30,30,0.55)'}}>
                      <span className="text-[#3ddc84] shrink-0">→</span>
                      {r}
                    </div>
                  ))}
                </div>
                <a href={c.href} className="text-xs text-[#3ddc84] hover:underline mt-5 block">
                  Lire le cas complet →
                </a>
              </div>
            </ScrollReveal>
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
