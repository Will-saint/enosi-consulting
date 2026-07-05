import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { secteurs, secteurSlugs } from "../data";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return secteurSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = secteurs[slug];
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDesc,
    openGraph: { title: s.metaTitle, description: s.metaDesc },
  };
}

export default async function SecteurPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = secteurs[slug];
  if (!s) notFound();

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
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "1.5rem" }}>
              <span style={{
                fontSize: "0.65rem", letterSpacing: "0.2em",
                textTransform: "uppercase", color: s.color,
                padding: "0.3rem 0.875rem",
                borderRadius: "2rem",
                background: `${s.color}12`,
                border: `1px solid ${s.color}30`,
              }}>{s.kicker}</span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem,5vw,3.8rem)",
              fontWeight: 700, color: "#0f0f0f",
              lineHeight: 1.1, marginBottom: "1.5rem",
            }}>{s.h1}</h1>
            <p style={{
              fontSize: "1.05rem", color: "rgba(30,30,30,0.6)",
              lineHeight: 1.8, maxWidth: "48rem", marginBottom: "2.5rem",
            }}>{s.intro}</p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="/contact" style={{
                padding: "0.875rem 2rem", borderRadius: "2rem",
                background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`,
                color: "#fff", fontWeight: 700, fontSize: "0.85rem",
                textDecoration: "none",
                boxShadow: `0 4px 20px ${s.color}30`,
              }}>Mon diagnostic gratuit →</a>
              <a href="/offres/quick-win" style={{
                padding: "0.875rem 2rem", borderRadius: "2rem",
                border: "1.5px solid rgba(0,0,0,0.12)",
                color: "#3a3a3a", fontWeight: 500, fontSize: "0.85rem",
                textDecoration: "none", background: "rgba(0,0,0,0.02)",
              }}>Audit 5 jours →</a>
            </div>
          </div>
        </section>

        {/* Pain points + Solutions */}
        <section style={{ padding: "5rem 1.5rem", background: "#FFFFFF" }}>
          <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem" }}>

              {/* Pain points */}
              <div>
                <p style={{
                  fontSize: "0.65rem", letterSpacing: "0.2em",
                  textTransform: "uppercase", color: "rgba(30,30,30,0.4)",
                  marginBottom: "1.5rem",
                }}>Ce que vous vivez</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {s.painPoints.map((pt) => (
                    <div key={pt} style={{
                      display: "flex", alignItems: "flex-start", gap: "0.75rem",
                      padding: "1rem 1.25rem",
                      background: "#F8F7F4",
                      borderRadius: "0.75rem",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}>
                      <span style={{ color: "rgba(30,30,30,0.3)", fontSize: "0.75rem", marginTop: "0.1rem", flexShrink: 0 }}>✗</span>
                      <p style={{ fontSize: "0.88rem", color: "rgba(30,30,30,0.65)", lineHeight: 1.6 }}>{pt}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <p style={{
                  fontSize: "0.65rem", letterSpacing: "0.2em",
                  textTransform: "uppercase", color: s.color,
                  marginBottom: "1.5rem",
                }}>Ce qu&apos;Enosi apporte</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {s.solutions.map((sol) => (
                    <div key={sol} style={{
                      display: "flex", alignItems: "flex-start", gap: "0.75rem",
                      padding: "1rem 1.25rem",
                      background: `${s.color}06`,
                      borderRadius: "0.75rem",
                      border: `1px solid ${s.color}15`,
                    }}>
                      <span style={{ color: s.color, fontSize: "0.75rem", marginTop: "0.1rem", flexShrink: 0 }}>✓</span>
                      <p style={{ fontSize: "0.88rem", color: "rgba(30,30,30,0.7)", lineHeight: 1.6 }}>{sol}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case study */}
        <section style={{
          background: "#F2F0EC",
          padding: "4rem 1.5rem",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}>
          <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
            <p style={{
              fontSize: "0.65rem", letterSpacing: "0.2em",
              textTransform: "uppercase", color: "rgba(30,30,30,0.4)",
              marginBottom: "2rem",
            }}>Scénario d&apos;intervention type</p>
            <div style={{
              background: "#FFFFFF",
              borderRadius: "1.25rem",
              padding: "2rem 2.5rem",
              boxShadow: "0 0 0 1px rgba(0,0,0,0.06)",
            }}>
              <span style={{
                fontSize: "0.72rem", fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "0.1em",
                color: s.color, display: "block", marginBottom: "0.5rem",
              }}>{s.caseStudy.contexte}</span>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.3rem", fontWeight: 700,
                color: "#0f0f0f", marginBottom: "1.25rem",
              }}>{s.caseStudy.titre}</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {s.caseStudy.resultats.map((r) => (
                  <div key={r} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.88rem", color: "rgba(30,30,30,0.7)" }}>
                    <span style={{ color: s.color }}>→</span>
                    {r}
                  </div>
                ))}
              </div>
              <a href={s.caseStudy.href} style={{
                fontSize: "0.8rem", color: s.color,
                textDecoration: "none", fontWeight: 500,
              }}>Lire le scénario complet →</a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{
          background: "#0f0f0f",
          padding: "5rem 1.5rem",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: "40rem", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem,4vw,2.8rem)",
              fontWeight: 700, color: "#FFFFFF",
              marginBottom: "1rem", lineHeight: 1.2,
            }}>Vous vous reconnaissez ?</h2>
            <p style={{
              fontSize: "1rem", color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7, marginBottom: "2.5rem",
            }}>
              Un premier échange de 30 minutes pour qualifier votre situation
              et voir si une intervention fait sens.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/contact" style={{
                padding: "1rem 2.5rem", borderRadius: "2rem",
                background: `linear-gradient(135deg, ${s.color}, ${s.color}cc)`,
                color: "#fff", fontWeight: 700, fontSize: "0.9rem",
                textDecoration: "none",
              }}>Mon diagnostic gratuit →</a>
              <a href="/offres/quick-win" style={{
                padding: "1rem 2rem", borderRadius: "2rem",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)", fontWeight: 500,
                fontSize: "0.85rem", textDecoration: "none",
              }}>Voir l&apos;offre audit 5 jours</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
