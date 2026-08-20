import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";
import ScrollProgress from "./components/ScrollProgress";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Enosi Consulting — Automatisation IA des process finance',
  description: "Contrôleur de gestion de métier, j'automatise ce qui fait perdre des jours aux équipes finance : reporting, contrôles, traitement de documents. Vous repartez avec un outil qui tourne.",
  keywords: ['automatisation reporting', 'automatisation finance', 'IA finance', 'contrôle de gestion freelance', 'consultant automatisation', 'extraction documentaire IA', 'détection anomalies finance'],
  authors: [{ name: 'William Saint-Dizier' }],
  creator: 'Enosi Consulting',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Enosi Consulting',
    title: 'Enosi Consulting — Performance, Data & IA',
    description: 'Conseil indépendant en performance et ROI des projets Data & IA. Finance, data et IA au service de vos décisions.',
    images: [{
      url: '/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'Enosi Consulting — Performance, Data & IA'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enosi Consulting — Performance, Data & IA',
    description: 'Conseil indépendant en performance et ROI des projets Data & IA.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Plausible Analytics — RGPD-friendly, pas de cookie banner requis */}
        {/* Créer un compte sur plausible.io et ajouter le domaine pour activer */}
        <Script
          defer
          data-domain={SITE_URL.replace(/^https?:\/\//, "")}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Enosi Consulting",
              "description": "Conseil indépendant en performance et création de valeur, combinant finance, data et IA.",
              "url": SITE_URL,
              "logo": `${SITE_URL}/opengraph-image`,
              "founder": {
                "@type": "Person",
                "name": "William Saint-Dizier",
                "jobTitle": "Consultant en performance, data et IA",
                "sameAs": "https://www.linkedin.com/in/williamsaintdizier"
              },
              "sameAs": [
                "https://www.linkedin.com/in/williamsaintdizier"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paris",
                "addressRegion": "Île-de-France",
                "addressCountry": "FR"
              },
              "areaServed": {
                "@type": "Country",
                "name": "France"
              },
              "serviceType": [
                "Pilotage financier & ROI des projets Data/IA",
                "Conseil en pilotage de la performance",
                "Efficacité et création de valeur",
                "Audit reporting 5 jours"
              ],
              "inLanguage": "fr",
              "knowsAbout": [
                "Pilotage de la performance",
                "Reporting financier",
                "Intelligence artificielle",
                "Data engineering",
                "Business intelligence",
                "Transformation digitale"
              ]
            })
          }}
        />
        <ScrollProgress />
        <CustomCursor />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
