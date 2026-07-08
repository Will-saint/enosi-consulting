import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { articles, categoryColors } from "./articles";

export const metadata: Metadata = {
  title: "Notes — Conseil performance, data et IA | Enosi Consulting",
  description: "Articles de fond sur le pilotage de la performance, l'IA en production et l'automatisation du reporting. Pour directeurs financiers, transformation et performance.",
  openGraph: {
    title: "Notes — Enosi Consulting",
    description: "Articles de fond sur le pilotage, la data et l'IA appliquée aux organisations.",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Notes — Enosi Consulting",
  "description": "Articles de fond sur le pilotage de la performance, l'IA en production et l'automatisation du reporting.",
  "url": "https://enosi-consulting.vercel.app/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Enosi Consulting",
    "url": "https://enosi-consulting.vercel.app"
  },
  "blogPost": articles.map((a) => ({
    "@type": "BlogPosting",
    "headline": a.title,
    "url": `https://enosi-consulting.vercel.app/blog/${a.slug}`,
    "datePublished": a.date,
    "description": a.excerpt,
  })),
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />
      <main style={{ background: "#F8F7F4", minHeight: "100vh" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "7rem 1.5rem 6rem" }}>

          {/* Header */}
          <div style={{ marginBottom: "3.5rem" }}>
            <p style={{
              fontSize: "0.65rem", letterSpacing: "0.2em",
              textTransform: "uppercase", color: "rgba(30,30,30,0.35)",
              marginBottom: "1rem",
            }}>
              Notes
            </p>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.6rem, 6vw, 4.4rem)",
              fontWeight: 800, color: "#0f0f0f", lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}>
              Points de vue sur la data,<br /><span style={{ color: "#1a9e5c" }}>l&apos;IA et la performance.</span>
            </h1>
            <p style={{ color: "rgba(30,30,30,0.5)", fontSize: "1rem", maxWidth: "480px", lineHeight: 1.7 }}>
              Articles de fond sur ce que j&apos;observe sur le terrain — sans
              jargon, avec des cas concrets.
            </p>
          </div>

          {/* Articles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {articles.map((article, i) => (
              <a
                key={article.slug}
                href={`/blog/${article.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article className="blog-card">
                  <div style={{
                    display: "flex", alignItems: "center",
                    gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap",
                  }}>
                    <span style={{
                      fontSize: "0.68rem", fontWeight: 600,
                      padding: "0.25rem 0.75rem", borderRadius: "999px",
                      background: `${categoryColors[article.category]}12`,
                      color: categoryColors[article.category],
                    }}>
                      {article.category}
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "rgba(30,30,30,0.35)" }}>
                      {formatDate(article.date)}
                    </span>
                    <span style={{ fontSize: "0.72rem", color: "rgba(30,30,30,0.3)" }}>
                      · {article.readTime} min
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                    fontWeight: 700, color: "#0f0f0f",
                    marginBottom: "0.75rem", lineHeight: 1.25,
                  }}>
                    {article.title}
                  </h2>

                  <p style={{
                    fontSize: "0.88rem", color: "rgba(30,30,30,0.55)",
                    lineHeight: 1.7, marginBottom: "1.25rem",
                  }}>
                    {article.excerpt}
                  </p>

                  <span style={{
                    fontSize: "0.8rem", color: "#1a9e5c", fontWeight: 600,
                  }}>
                    Lire l&apos;article →
                  </span>
                </article>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: "3rem", padding: "2rem",
            borderRadius: "1.25rem",
            background: "rgba(26,158,92,0.06)",
            border: "1px solid rgba(26,158,92,0.12)",
            textAlign: "center",
          }}>
            <p style={{
              fontSize: "0.85rem", color: "rgba(30,30,30,0.6)",
              lineHeight: 1.6, marginBottom: "1rem",
            }}>
              Ces sujets vous parlent&nbsp;? Évaluez la maturité Data&nbsp;/&nbsp;IA
              de votre organisation en 3 minutes.
            </p>
            <a
              href="/diagnostic"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                background: "#1a9e5c", color: "#000",
                fontWeight: 700, borderRadius: "999px",
                fontSize: "0.85rem", textDecoration: "none",
              }}
            >
              Faire le diagnostic gratuit →
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
