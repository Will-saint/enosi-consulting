import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Audit Reporting 5 jours — Offre découverte | Enosi Consulting",
  description: "Un diagnostic complet de vos reportings et tableaux de bord en 5 jours, à prix fixe. Livrables concrets, sans engagement long terme.",
  openGraph: {
    title: "Audit Reporting 5 jours | Enosi Consulting",
    description: "Diagnostic complet de vos reportings en 5 jours, prix fixe, livrables garantis.",
  },
};

const programme = [
  {
    jours: "Jours 1 – 2",
    titre: "Immersion",
    desc: "Analyse de vos outils, flux de données et reportings existants. Entretiens avec les utilisateurs clés. Cartographie de la situation réelle.",
    color: "#1a9e5c",
  },
  {
    jours: "Jour 3",
    titre: "Diagnostic",
    desc: "Identification des 3 frictions principales. Qualification de leur impact sur vos décisions. Priorisation des leviers d'amélioration.",
    color: "#4f46e5",
  },
  {
    jours: "Jours 4 – 5",
    titre: "Recommandations + Prototype",
    desc: "Plan d'action priorisé avec effort et impact estimés. Prototype d'un tableau de bord amélioré dans votre environnement existant.",
    color: "#d97706",
  },
];

const livrables = [
  "Rapport d'audit structuré (15–20 pages)",
  "Cartographie des flux de données et des outils",
  "Plan d'action priorisé avec impact estimé",
  "Prototype d'un dashboard amélioré (Power BI, Notion ou autre)",
];

const pourQui = [
  "Direction Financière qui veut savoir où elle en est avant de lancer un projet",
  "ETI en croissance dont le reporting ne suit plus la réalité opérationnelle",
  "COMEX qui ne croit plus aux données qu'on lui présente",
  "Organisation qui veut un regard extérieur sans s'engager sur 3 mois",
];

export default function QuickWinPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "4rem" }}>

        {/* Hero */}
        <section style={{
          background: "#F8F7F4",
          padding: "5rem 1.5rem 4rem",
          borderBottom: "1px solid rgba(0,0,0,0.07)",
        }}>
          <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
              <span style={{
                fontSize: "0.65rem", letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#1a9e5c",
                padding: "0.3rem 0.875rem", borderRadius: "2rem",
                background: "rgba(26,158,92,0.08)",
                border: "1px solid rgba(26,158,92,0.2)",
              }}>Offre découverte</span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem,5vw,4rem)",
              fontWeight: 700, color: "#0f0f0f",
              lineHeight: 1.05, marginBottom: "1.25rem",
            }}>
              Audit Reporting<br />
              <span style={{ color: "#1a9e5c" }}>5 jours. Prix fixe.</span>
            </h1>
            <p style={{
              fontSize: "1.1rem", color: "rgba(30,30,30,0.6)",
              lineHeight: 1.8, maxWidth: "44rem", marginBottom: "2.5rem",
            }}>
              Un diagnostic complet de vos reportings, tableaux de bord et indicateurs.
              Résultats concrets, livrables garantis, sans engagement de suite.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="/contact" style={{
                padding: "0.9rem 2.5rem", borderRadius: "2rem",
                background: "linear-gradient(135deg, #1a9e5c, #157a47)",
                color: "#fff", fontWeight: 700, fontSize: "0.88rem",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(26,158,92,0.3)",
              }}>Démarrer mon audit →</a>
              <a href="#programme" style={{
                padding: "0.9rem 2rem", borderRadius: "2rem",
                border: "1.5px solid rgba(0,0,0,0.12)",
                color: "#3a3a3a", fontWeight: 500, fontSize: "0.85rem",
                textDecoration: "none",
              }}>Voir le programme</a>
            </div>
          </div>
        </section>

        {/* Argument strip */}
        <section style={{
          background: "#0f0f0f",
          padding: "1.75rem 1.5rem",
        }}>
          <div style={{
            maxWidth: "64rem", margin: "0 auto",
            display: "flex", gap: "2.5rem",
            flexWrap: "wrap", justifyContent: "center",
          }}>
            {[
              { label: "5 jours", desc: "calendaires" },
              { label: "Prix fixe", desc: "devis sous 24h" },
              { label: "4 livrables", desc: "garantis" },
              { label: "Zéro risque", desc: "satisfaction J+2 ou remboursé" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center", minWidth: "120px" }}>
                <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.2rem" }}>{item.label}</p>
                <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.05em" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Programme */}
        <section id="programme" style={{ background: "#FFFFFF", padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
            <p style={{
              fontSize: "0.65rem", letterSpacing: "0.2em",
              textTransform: "uppercase", color: "rgba(30,30,30,0.35)",
              marginBottom: "0.75rem",
            }}>Le programme</p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
              fontWeight: 700, color: "#0f0f0f",
              marginBottom: "3rem",
            }}>5 jours structurés,<br />pas une minute de perdue.</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}>
              {programme.map((p, i) => (
                <div key={p.titre} style={{
                  background: "#F8F7F4",
                  borderRadius: "1.25rem",
                  padding: "2rem",
                  borderTop: `3px solid ${p.color}`,
                  position: "relative",
                }}>
                  <span style={{
                    position: "absolute", top: "1.25rem", right: "1.5rem",
                    fontSize: "2.5rem", fontWeight: 800,
                    color: "rgba(0,0,0,0.04)",
                    fontFamily: "'Playfair Display', serif",
                  }}>{i + 1}</span>
                  <p style={{
                    fontSize: "0.7rem", fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.08em",
                    color: p.color, marginBottom: "0.5rem",
                  }}>{p.jours}</p>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.25rem", fontWeight: 700,
                    color: "#0f0f0f", marginBottom: "0.75rem",
                  }}>{p.titre}</h3>
                  <p style={{ fontSize: "0.88rem", color: "rgba(30,30,30,0.6)", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Livrables + Pour qui */}
        <section style={{ background: "#F2F0EC", padding: "5rem 1.5rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{
            maxWidth: "64rem", margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
          }}>
            {/* Livrables */}
            <div>
              <p style={{
                fontSize: "0.65rem", letterSpacing: "0.2em",
                textTransform: "uppercase", color: "#1a9e5c",
                marginBottom: "1.25rem",
              }}>Ce que vous recevez</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {livrables.map((l) => (
                  <div key={l} style={{
                    display: "flex", alignItems: "flex-start", gap: "0.75rem",
                    padding: "1rem 1.25rem",
                    background: "#FFFFFF",
                    borderRadius: "0.875rem",
                    boxShadow: "0 0 0 1px rgba(0,0,0,0.06)",
                  }}>
                    <span style={{ color: "#1a9e5c", flexShrink: 0, marginTop: "0.1rem" }}>◎</span>
                    <p style={{ fontSize: "0.88rem", color: "rgba(30,30,30,0.7)", lineHeight: 1.5 }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pour qui */}
            <div>
              <p style={{
                fontSize: "0.65rem", letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(30,30,30,0.4)",
                marginBottom: "1.25rem",
              }}>Pour qui</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {pourQui.map((q) => (
                  <div key={q} style={{
                    display: "flex", alignItems: "flex-start", gap: "0.75rem",
                    padding: "1rem 1.25rem",
                    background: "#FFFFFF",
                    borderRadius: "0.875rem",
                    boxShadow: "0 0 0 1px rgba(0,0,0,0.06)",
                  }}>
                    <span style={{ color: "rgba(30,30,30,0.25)", flexShrink: 0, marginTop: "0.15rem", fontSize: "0.7rem" }}>→</span>
                    <p style={{ fontSize: "0.88rem", color: "rgba(30,30,30,0.65)", lineHeight: 1.5 }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Garantie */}
        <section style={{ background: "#FFFFFF", padding: "4rem 1.5rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ maxWidth: "44rem", margin: "0 auto", textAlign: "center" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: "3rem", height: "3rem",
              background: "rgba(26,158,92,0.08)",
              borderRadius: "0.875rem",
              fontSize: "1.25rem",
              marginBottom: "1.25rem",
            }}>◉</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.6rem", fontWeight: 700,
              color: "#0f0f0f", marginBottom: "1rem",
            }}>Zéro risque.</h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(30,30,30,0.6)", lineHeight: 1.8 }}>
              Si à la fin du jour 2 vous estimez que l&apos;intervention ne crée pas de valeur,
              vous ne payez rien. Cette offre est conçue pour que vous ayez un retour
              concret avant de décider de la suite.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section style={{
          background: "#0f0f0f",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: "40rem", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700, color: "#FFFFFF",
              marginBottom: "1rem",
            }}>Prêt à voir où vous en êtes ?</h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Un devis sous 24h. Une date calée en moins d&apos;une semaine.
            </p>
            <a href="/contact" style={{
              display: "inline-block",
              padding: "1rem 3rem", borderRadius: "2rem",
              background: "linear-gradient(135deg, #1a9e5c, #157a47)",
              color: "#fff", fontWeight: 700, fontSize: "0.9rem",
              textDecoration: "none",
              boxShadow: "0 4px 24px rgba(26,158,92,0.35)",
            }}>Démarrer mon audit →</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
