import { SITE_URL, LINKEDIN_URL, CONTACT_EMAIL, NOM_COMPLET, MARQUE, VILLES } from "@/lib/constants";
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
  keywords: [
    'automatisation reporting financier', 'automatisation process finance', 'IA finance',
    'contrôle de gestion freelance', 'consultant automatisation Paris', 'consultant automatisation Montpellier',
    'extraction documentaire IA', 'détection anomalies comptables', 'automatisation clôture mensuelle',
    'freelance contrôle de gestion', 'consultant data finance',
  ],
  authors: [{ name: NOM_COMPLET, url: LINKEDIN_URL }],
  creator: NOM_COMPLET,
  publisher: MARQUE,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: MARQUE,
    title: 'Automatisation IA des process finance — Enosi Consulting',
    description: "Contrôleur de gestion de métier, j'automatise le reporting, les contrôles et le traitement documentaire. Vous repartez avec un outil qui tourne, pas avec un rapport.",
    images: [{
      url: '/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'Enosi Consulting — Automatisation IA des process finance'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatisation IA des process finance — Enosi Consulting',
    description: "J'automatise ce qui fait perdre des jours à vos équipes finance.",
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  formatDetection: { telephone: false },
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
        {/* Balise <script> native et non next/script : le JSON-LD doit être présent
            dans le HTML rendu côté serveur pour être lu de façon fiable par les moteurs. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "@id": `${SITE_URL}/#organisation`,
                  "name": MARQUE,
                  "description": "Automatisation des process de la fonction finance par l'IA : reporting, contrôles, extraction documentaire. Conseil indépendant tenu par un contrôleur de gestion.",
                  "url": SITE_URL,
                  "logo": `${SITE_URL}/opengraph-image`,
                  "image": `${SITE_URL}/opengraph-image`,
                  "email": CONTACT_EMAIL,
                  "priceRange": "€€",
                  "currenciesAccepted": "EUR",
                  "founder": { "@id": `${SITE_URL}/#william` },
                  "sameAs": [LINKEDIN_URL],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Paris",
                    "addressRegion": "Île-de-France",
                    "addressCountry": "FR",
                  },
                  // SEO local : les deux zones où William intervient réellement
                  "areaServed": [
                    ...VILLES.map((v) => ({ "@type": "City", name: v })),
                    { "@type": "Country", name: "France" },
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Commercial",
                    "email": CONTACT_EMAIL,
                    "availableLanguage": ["French", "English"],
                    "areaServed": "FR",
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Prestations d'automatisation",
                    "itemListElement": [
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automatisation du reporting financier", "description": "Consolidation multi-sources, contrôles de cohérence et génération automatique du pack mensuel." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Contrôles et détection d'anomalies", "description": "Seuils, doublons, écarts budgétaires détectés le jour même avec alerte par exception." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Extraction documentaire par IA", "description": "Factures et pièces comptables transformées en données structurées, sans ressaisie." } },
                      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Audit reporting 5 jours", "description": "Diagnostic à prix fixe, quatre livrables garantis." }, "price": "2900", "priceCurrency": "EUR" },
                    ],
                  },
                  "inLanguage": "fr",
                },
                {
                  "@type": "Person",
                  "@id": `${SITE_URL}/#william`,
                  "name": NOM_COMPLET,
                  "jobTitle": "Contrôleur de gestion — consultant en automatisation des process finance",
                  "url": `${SITE_URL}/a-propos`,
                  "image": `${SITE_URL}/william.jpg`,
                  "email": CONTACT_EMAIL,
                  "sameAs": [LINKEDIN_URL],
                  "worksFor": { "@id": `${SITE_URL}/#organisation` },
                  "alumniOf": [
                    { "@type": "CollegeOrUniversity", "name": "Université Paris 1 Panthéon-Sorbonne" },
                    { "@type": "CollegeOrUniversity", "name": "Montpellier Business School" },
                  ],
                  "hasCredential": [
                    { "@type": "EducationalOccupationalCredential", "name": "Microsoft Power BI Data Analyst (PL-300)" },
                    { "@type": "EducationalOccupationalCredential", "name": "Microsoft Azure Data Scientist (DP-100)" },
                    { "@type": "EducationalOccupationalCredential", "name": "IBM AI Engineering Professional Certificate" },
                    { "@type": "EducationalOccupationalCredential", "name": "IBM Data Science Professional Certificate" },
                  ],
                  "knowsAbout": [
                    "Contrôle de gestion", "Automatisation du reporting", "Intelligence artificielle appliquée",
                    "Extraction documentaire", "Détection d'anomalies", "Business intelligence",
                    "Modélisation financière", "ROI des projets data",
                  ],
                  "knowsLanguage": ["fr", "en"],
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#site`,
                  "url": SITE_URL,
                  "name": MARQUE,
                  "inLanguage": "fr",
                  "publisher": { "@id": `${SITE_URL}/#organisation` },
                },
              ],
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
