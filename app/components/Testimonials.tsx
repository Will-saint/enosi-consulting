import ScrollReveal from "./ScrollReveal";

const verbatims = [
  {
    quote: "En six semaines, nous avions un reporting fiable, des alertes automatiques et un COMEX qui regardait enfin les mêmes chiffres. Je n'avais pas vu ça en dix ans.",
    role: "Directeur Financier",
    company: "ETI industrielle, 800 M€ de CA",
    accent: "#1a9e5c",
  },
  {
    quote: "Ils n'ont pas livré une recommandation. Ils ont livré un modèle en production. La différence est immense quand on a déjà vu des consultants disparaître avec leurs slides.",
    role: "Directeur Transformation",
    company: "Grand groupe, 3 500 collaborateurs",
    accent: "#4f46e5",
  },
  {
    quote: "Le cycle budgétaire qu'on trouvait normal à 14 semaines est passé à 11. Ce n'est pas une optimisation marginale — c'est trois semaines restituées à toute la direction.",
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
