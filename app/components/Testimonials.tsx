import ScrollReveal from "./ScrollReveal";

const verbatims = [
  {
    quote: "Franchement, le premier mois on n'y croyait pas vraiment. Et puis le rapport de clôture est sorti en une journée. Ça a changé quelque chose dans la façon dont le COMEX prépare ses réunions — pas juste dans le délai, dans la qualité des échanges.",
    role: "Directeur Financier",
    company: "ETI industrielle, 800 M€ de CA",
    accent: "#1a9e5c",
  },
  {
    quote: "Ce qui m'a surpris, c'est qu'ils ont poussé pour un cas d'usage plus simple que ce qu'on avait en tête. Sur le moment j'étais un peu frustré. Avec le recul, c'est exactement ce qui a rendu le déploiement possible.",
    role: "Directeur Transformation",
    company: "Grand groupe, 3 500 collaborateurs",
    accent: "#4f46e5",
  },
  {
    quote: "On a récupéré 3 semaines sur le cycle. Ce n'est pas spectaculaire sur le papier, mais dans la pratique on arrive en COMEX de décembre avec une vraie visibilité sur l'année suivante. Avant, c'était en janvier que tout était finalisé.",
    role: "Directeur de la Performance",
    company: "ETI en croissance rapide",
    accent: "#d97706",
  },
];

export default function Testimonials() {
  return (
    <section style={{
      background: "#F8F7F4",
      padding: "6rem 1.5rem",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
    }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p style={{
            fontSize: "0.65rem", letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(30,30,30,0.35)", marginBottom: "1rem",
          }}>Ce qu&apos;ils en disent</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 700, color: "#0f0f0f", lineHeight: 1.1,
          }}>Pas notre parole.<br />La leur.</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {verbatims.map((v, index) => (
            <ScrollReveal key={v.role} delay={index * 120}>
              <div style={{
                background: "#FFFFFF",
                borderRadius: "1.25rem",
                padding: "2rem",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                height: "100%",
              }}>
                <span style={{
                  fontSize: "3rem", lineHeight: 1,
                  color: v.accent, opacity: 0.15,
                  fontFamily: "Georgia, serif",
                  marginBottom: "-0.75rem",
                }}>&ldquo;</span>
                <p style={{
                  fontSize: "0.9rem",
                  color: "rgba(30,30,30,0.7)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  flex: 1,
                }}>{v.quote}</p>
                <div style={{
                  borderTop: `2px solid ${v.accent}20`,
                  paddingTop: "1rem",
                }}>
                  <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0f0f0f", marginBottom: "0.25rem" }}>{v.role}</p>
                  <p style={{ fontSize: "0.72rem", color: "rgba(30,30,30,0.4)" }}>{v.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
