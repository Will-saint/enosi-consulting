import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { articles, getArticle, categoryColors } from "../articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
      publishedTime: article.date,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.seoDescription,
    "datePublished": article.date,
    "author": {
      "@type": "Person",
      "name": "William Saint-Dizier",
      "url": "https://enosi-consulting.vercel.app/a-propos",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Enosi Consulting",
      "url": "https://enosi-consulting.vercel.app",
    },
    "url": `https://enosi-consulting.vercel.app/blog/${article.slug}`,
    "keywords": article.keywords.join(", "),
  };

  const accentColor = categoryColors[article.category];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main style={{ background: "#F8F7F4", minHeight: "100vh" }}>

        {/* Article header */}
        <div style={{
          background: "#ffffff",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          paddingTop: "6rem",
          paddingBottom: "3rem",
        }}>
          <div style={{ maxWidth: "44rem", margin: "0 auto", padding: "0 1.5rem" }}>
            <a
              href="/blog"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
                fontSize: "0.8rem", color: "rgba(30,30,30,0.4)",
                textDecoration: "none", marginBottom: "2rem",
              }}
            >
              ← Notes
            </a>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span style={{
                fontSize: "0.68rem", fontWeight: 600,
                padding: "0.25rem 0.75rem", borderRadius: "999px",
                background: `${accentColor}12`,
                color: accentColor,
              }}>
                {article.category}
              </span>
              <span style={{ fontSize: "0.72rem", color: "rgba(30,30,30,0.35)" }}>
                {formatDate(article.date)}
              </span>
              <span style={{ fontSize: "0.72rem", color: "rgba(30,30,30,0.3)" }}>
                · {article.readTime} min de lecture
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              fontWeight: 700, color: "#0f0f0f",
              lineHeight: 1.15, marginBottom: "1.25rem",
            }}>
              {article.title}
            </h1>

            <p style={{
              fontSize: "1rem", color: "rgba(30,30,30,0.55)",
              lineHeight: 1.7, maxWidth: "42ch",
            }}>
              {article.excerpt}
            </p>
          </div>
        </div>

        {/* Article body */}
        <div style={{ maxWidth: "44rem", margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Author byline */}
          <div style={{
            marginTop: "3.5rem", paddingTop: "2rem",
            borderTop: "1px solid rgba(0,0,0,0.08)",
            display: "flex", alignItems: "center", gap: "1rem",
          }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "50%",
              background: `${accentColor}15`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1rem", fontWeight: 700, color: accentColor,
              flexShrink: 0,
            }}>
              W
            </div>
            <div>
              <p style={{ fontSize: "0.82rem", fontWeight: 600, color: "#0f0f0f", marginBottom: "0.15rem" }}>
                William Saint-Dizier
              </p>
              <p style={{ fontSize: "0.75rem", color: "rgba(30,30,30,0.45)" }}>
                Consultant en performance, data et IA · Enosi Consulting
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{
            marginTop: "2.5rem", padding: "2rem 2.25rem",
            borderRadius: "1.25rem", background: "#0d0d0d",
          }}>
            <p style={{
              fontSize: "0.65rem", letterSpacing: "0.2em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
              marginBottom: "0.75rem",
            }}>
              Prochaine étape
            </p>
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.2rem", fontWeight: 700,
              color: "#ffffff", marginBottom: "0.75rem",
              lineHeight: 1.3,
            }}>
              Ces questions vous concernent&nbsp;?
            </p>
            <p style={{
              fontSize: "0.82rem", color: "rgba(255,255,255,0.45)",
              marginBottom: "1.5rem", lineHeight: 1.6,
            }}>
              Évaluez la maturité Data&nbsp;/&nbsp;IA de votre organisation
              en 12 questions — résultats immédiats et gratuits.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href="/diagnostic"
                style={{
                  display: "inline-block", padding: "0.75rem 1.5rem",
                  background: "#1a9e5c", color: "#000",
                  fontWeight: 700, borderRadius: "999px",
                  fontSize: "0.82rem", textDecoration: "none",
                }}
              >
                Faire le diagnostic →
              </a>
              <a
                href="/contact"
                style={{
                  display: "inline-block", padding: "0.75rem 1.5rem",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 600, borderRadius: "999px",
                  fontSize: "0.82rem", textDecoration: "none",
                }}
              >
                Nous contacter
              </a>
            </div>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <div style={{ marginTop: "3rem" }}>
              <p style={{
                fontSize: "0.65rem", letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(30,30,30,0.35)",
                marginBottom: "1.25rem",
              }}>
                À lire aussi
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {related.map((r) => (
                  <a
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    style={{
                      display: "block", padding: "1.25rem 1.5rem",
                      background: "#ffffff",
                      borderRadius: "0.875rem",
                      boxShadow: "0 0 0 1px rgba(0,0,0,0.07)",
                      textDecoration: "none",
                    }}
                  >
                    <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#0f0f0f", marginBottom: "0.3rem" }}>
                      {r.title}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "rgba(30,30,30,0.4)" }}>
                      {formatDate(r.date)} · {r.readTime} min
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
