import ScrollReveal from "./ScrollReveal";
import GlowCard from "./GlowCard";

const cas = [
  {
    badge: "Pilotage",
    badgeBg: "#1a9e5c15",
    badgeColor: "#1a9e5c",
    titre: "D'un reporting subi à un pilotage qui décide",
    contexte: "Scénario type — direction financière, ETI industrielle",
    resultats: [
      "Reporting produit en 1 jour au lieu de 6",
      "Décisions COMEX préparées avant la réunion",
      "Alertes automatiques sur les indicateurs critiques",
    ],
    href: "/portfolio#cas-1",
  },
  {
    badge: "Data & IA",
    badgeBg: "#4f46e515",
    badgeColor: "#4f46e5",
    titre: "De l'IA qui tourne en prod, pas en démo",
    contexte: "Scénario type — direction transformation, grand groupe",
    resultats: [
      "Cas d'usage scorés et priorisés sur 4 critères",
      "Un modèle en production en semaines, pas en mois",
      "Détection automatisée plutôt que contrôle manuel",
    ],
    href: "/portfolio#cas-2",
  },
  {
    badge: "Efficacité",
    badgeBg: "#d9770615",
    badgeColor: "#d97706",
    titre: "Un budget validé à temps pour être utile",
    contexte: "Scénario type — direction performance, ETI en croissance",
    resultats: [
      "Cycle budgétaire raccourci de plusieurs semaines",
      "Allers-retours entre directions réduits",
      "Budget utilisé comme outil de pilotage annuel",
    ],
    href: "/portfolio#cas-3",
  },
];

const sectionStyle = { borderColor: "rgba(0,0,0,0.07)" };
const labelColor = { color: "rgba(30,30,30,0.35)" };
const subtitleColor = { color: "rgba(30,30,30,0.5)" };
const h2Style = { fontFamily: "Playfair Display, Georgia, serif" };
const contexteStyle = { color: "rgba(30,30,30,0.4)" };
const resultatStyle = { color: "rgba(30,30,30,0.55)" };
const greenStyle = { color: "#1a9e5c" };
const darkStyle = { color: "#0f0f0f" };

export default function PortfolioPreview() {
  return (
    <section id="interventions" className="py-28 px-6 border-b" style={sectionStyle}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest mb-3" style={labelColor}>Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={h2Style}>Trois façons d&apos;aborder ces sujets.</h2>
          <p className="max-w-xl mx-auto text-sm" style={subtitleColor}>Trois scénarios type, construits à partir de mon expérience et de ma méthode — pas encore de mission freelance à publier.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {cas.map((c, index) => (
            <ScrollReveal key={c.titre} delay={index * 100}>
              <GlowCard className="card-premium p-7 flex flex-col h-full">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full self-start mb-4"
                  style={{ backgroundColor: c.badgeBg, color: c.badgeColor }}
                >
                  {c.badge}
                </span>
                <h3 className="text-base font-bold mb-2 leading-snug" style={darkStyle}>{c.titre}</h3>
                <p className="text-xs mb-5" style={contexteStyle}>{c.contexte}</p>
                <div className="space-y-2 flex-1">
                  {c.resultats.map((r) => (
                    <div key={r} className="flex items-start gap-2 text-xs" style={resultatStyle}>
                      <span style={greenStyle} className="shrink-0">→</span>
                      {r}
                    </div>
                  ))}
                </div>
                <a href={c.href} className="text-xs hover:underline mt-5 block" style={greenStyle}>
                  Lire le cas complet →
                </a>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <a href="/portfolio" className="text-sm hover:underline" style={greenStyle}>
            Voir tous les cas →
          </a>
        </div>
      </div>
    </section>
  );
}
