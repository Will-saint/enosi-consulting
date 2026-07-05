"use client";
import ScrollReveal from "./ScrollReveal";

const offres = [
  {
    numero: "01",
    nom: "Pilotage financier & ROI des projets Data/IA",
    accroche: "Évaluer, challenger et piloter la valeur de vos investissements Data/IA.",
    points: [
      "ROI et suivi budgétaire des projets Data/IA",
      "Automatisation et fiabilisation du reporting",
      "Prévision, détection d'anomalies, alerting",
    ],
    couleur: "#4f46e5",
    icone: "◈",
    href: "/offres/data-ia",
    phare: true,
  },
  {
    numero: "02",
    nom: "Pilotage de la performance",
    accroche: "Rendre la performance lisible, fiable et utile pour la décision.",
    points: [
      "Structuration des KPI et indicateurs clés",
      "Refonte du reporting décisionnel",
      "Tableaux de bord orientés COMEX",
    ],
    couleur: "#1a9e5c",
    icone: "◎",
    href: "/offres/pilotage",
    phare: false,
  },
  {
    numero: "03",
    nom: "Efficacité et création de valeur",
    accroche: "Réduire les frictions, piloter ce qui crée vraiment de la valeur.",
    points: [
      "Optimisation des processus critiques",
      "Coordination métier / data / finance",
      "Gains visibles à court terme",
    ],
    couleur: "#d97706",
    icone: "◉",
    href: "/offres/efficacite",
    phare: false,
  },
];

export default function Platforms() {
  return (
    <section id="offres" style={{
      background: "#F2F0EC",
      padding: "6rem 1.5rem",
      borderTop: "1px solid rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
    }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{
            fontSize: "0.65rem", letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(30,30,30,0.35)", marginBottom: "1rem",
          }}>Mes offres</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.4rem,5vw,3.8rem)",
            fontWeight: 800, color: "#0f0f0f", lineHeight: 1.05, marginBottom: "0.75rem",
            letterSpacing: "-0.02em",
          }}>Une expertise.<br /><span style={{ color: "#1a9e5c" }}>Trois angles d&apos;attaque.</span></h2>
          <p style={{ color: "rgba(30,30,30,0.5)", fontSize: "0.95rem" }}>
            Un périmètre resserré. Des expertises complémentaires.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {offres.map((o, index) => (
            <ScrollReveal key={o.nom} delay={index * 100}>
              <div style={{
                background: "#FFFFFF",
                borderRadius: "1.25rem",
                padding: "2rem",
                boxShadow: o.phare
                  ? `0 0 0 2px ${o.couleur}, 0 12px 40px ${o.couleur}25`
                  : "0 0 0 1px rgba(0,0,0,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                height: "100%",
                position: "relative",
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = `0 0 0 2px ${o.couleur}, 0 12px 40px ${o.couleur}30`;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = o.phare
                  ? `0 0 0 2px ${o.couleur}, 0 12px 40px ${o.couleur}25`
                  : "0 0 0 1px rgba(0,0,0,0.06)";
                el.style.transform = "translateY(0)";
              }}>
                {o.phare && (
                  <span style={{
                    position: "absolute", top: "-0.8rem", left: "1.5rem",
                    padding: "0.3rem 1rem", borderRadius: "2rem",
                    background: o.couleur, color: "#fff",
                    fontSize: "0.62rem", fontWeight: 700,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                  }}>Offre phare</span>
                )}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{
                    fontSize: "0.65rem", fontFamily: "monospace",
                    color: o.couleur, letterSpacing: "0.1em",
                  }}>{o.numero}</span>
                  <span style={{ fontSize: "1.2rem", color: o.couleur }}>{o.icone}</span>
                </div>

                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.05rem", fontWeight: 700,
                    color: "#0f0f0f", marginBottom: "0.4rem",
                  }}>{o.nom}</h3>
                  <p style={{ fontSize: "0.83rem", color: "rgba(30,30,30,0.5)", lineHeight: 1.6 }}>{o.accroche}</p>
                </div>

                <div style={{ flex: 1 }}>
                  {o.points.map((pt) => (
                    <div key={pt} style={{
                      display: "flex", alignItems: "flex-start", gap: "0.5rem",
                      marginBottom: "0.35rem",
                      fontSize: "0.78rem", color: "rgba(30,30,30,0.45)",
                    }}>
                      <span style={{
                        width: "4px", height: "4px", borderRadius: "50%",
                        background: o.couleur, marginTop: "0.45rem", flexShrink: 0,
                      }} />
                      {pt}
                    </div>
                  ))}
                </div>

                <a href={o.href} style={{
                  fontSize: "0.78rem", color: o.couleur,
                  textDecoration: "none", fontWeight: 500,
                  borderTop: `1px solid ${o.couleur}18`,
                  paddingTop: "0.75rem",
                  display: "block",
                }}>
                  En savoir plus →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quick Win strip */}
        <div style={{
          marginTop: "2rem",
          padding: "1.25rem 2rem",
          background: "rgba(26,158,92,0.06)",
          border: "1px solid rgba(26,158,92,0.15)",
          borderRadius: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <div>
            <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "#0f0f0f", marginBottom: "0.2rem" }}>
              Pas encore prêt à vous engager sur 3 mois ?
            </p>
            <p style={{ fontSize: "0.8rem", color: "rgba(30,30,30,0.5)" }}>
              Commencez par un audit de 5 jours à prix fixe — livrables garantis, zéro risque.
            </p>
          </div>
          <a href="/offres/quick-win" style={{
            padding: "0.65rem 1.5rem",
            borderRadius: "2rem",
            background: "linear-gradient(135deg, #1a9e5c, #157a47)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.8rem",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}>Découvrir l&apos;offre →</a>
        </div>
      </div>
    </section>
  );
}
