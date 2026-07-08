import ScrollReveal from "./ScrollReveal";

const etapes = [
  {
    periode: "2026",
    org: "Moët Hennessy — LVMH",
    role: "Data AI Value Management",
    desc: "Évaluation et challenge du ROI des projets Data/IA. Conception de l'outil de tracking coûts/valeur «Synapse».",
    couleur: "#4f46e5",
  },
  {
    periode: "2025",
    org: "Bourbon Voyages",
    role: "Financial Controller — Assistant CFO",
    desc: "Pilotage d'un périmètre de 100 M€ de revenus. Automatisation du reporting : −25% de temps de production (Power Query).",
    couleur: "#1a9e5c",
  },
  {
    periode: "2023",
    org: "Appart'City",
    role: "Internal & Financial Controller",
    desc: "Audits financiers et de conformité sur 98 résidences pour un groupe à 200 M€.",
    couleur: "#d97706",
  },
  {
    periode: "2026",
    org: "Panthéon-Sorbonne × PSTB",
    role: "Master Data IA for Business",
    desc: "Certifié Power BI (PL-300), Azure, Dataiku. Data Science + AI Engineering (IBM, 340h).",
    couleur: "#0ea5e9",
  },
];

export default function Parcours() {
  return (
    <section className="py-24 px-6 border-b relative overflow-hidden" style={{ borderColor: "rgba(0,0,0,0.07)", background: "#FFFFFF" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(30,30,30,0.35)" }}>Mon parcours</p>
          <h2 className="font-extrabold mb-4" style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.4rem,5vw,3.8rem)",
            letterSpacing: "-0.02em", lineHeight: 1.05, color: "#0f0f0f",
          }}>
            Une expertise <span style={{ color: "#1a9e5c" }}>forgée sur le terrain.</span>
          </h2>
          <p className="max-w-lg mx-auto text-sm leading-relaxed" style={{ color: "rgba(30,30,30,0.5)" }}>
            Pas un discours — des environnements réels, grands groupes et ETI, où j&apos;ai vu comment
            la finance, la data et l&apos;IA doivent vraiment se parler.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {etapes.map((e, index) => (
            <ScrollReveal key={e.org} delay={index * 90}>
              <div className="h-full rounded-2xl p-6" style={{
                background: "#F8F7F4",
                borderTop: `3px solid ${e.couleur}`,
              }}>
                <span className="text-xs font-mono" style={{ color: e.couleur }}>{e.periode}</span>
                <h3 className="text-sm font-bold mt-2 mb-1" style={{ color: "#0f0f0f" }}>{e.org}</h3>
                <p className="text-xs font-semibold mb-3" style={{ color: "rgba(30,30,30,0.45)" }}>{e.role}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(30,30,30,0.55)" }}>{e.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/a-propos" className="text-sm font-semibold hover:underline" style={{ color: "#1a9e5c" }}>
            En savoir plus sur mon profil →
          </a>
        </div>
      </div>
    </section>
  );
}
