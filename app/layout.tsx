import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://enosi-consulting.vercel.app'),
  title: 'Enosi Consulting — Performance, Data & IA',
  description: "Cabinet de conseil en performance et création de valeur. Nous aidons les directions à mieux piloter, exploiter leurs données et intégrer l'IA là où elle crée une valeur concrète.",
  keywords: ['conseil performance', 'pilotage data', 'IA décisionnelle', 'consultant finance data', 'cabinet conseil ETI', 'reporting automatisation', 'cas usage IA finance'],
  authors: [{ name: 'William Saint-Dizier' }],
  creator: 'Enosi Consulting',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://enosi-consulting.vercel.app',
    siteName: 'Enosi Consulting',
    title: 'Enosi Consulting — Performance, Data & IA',
    description: 'Cabinet de conseil en performance et création de valeur. Finance, data et IA au service de vos décisions.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Enosi Consulting'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enosi Consulting — Performance, Data & IA',
    description: 'Cabinet de conseil en performance et création de valeur.',
    images: ['/og-image.png'],
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
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Enosi Consulting",
              "description": "Cabinet de conseil en performance et création de valeur, combinant finance, data et IA.",
              "url": "https://enosi-consulting.vercel.app",
              "founder": {
                "@type": "Person",
                "name": "William Saint-Dizier"
              },
              "serviceType": [
                "Conseil en pilotage de la performance",
                "Data & IA pour la décision",
                "Efficacité et création de valeur"
              ],
              "areaServed": "France",
              "inLanguage": "fr"
            })
          }}
        />
        <CustomCursor />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
