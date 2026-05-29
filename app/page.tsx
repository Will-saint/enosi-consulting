import type { Metadata } from "next";
import { seoConfig } from "./seo";

export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
  openGraph: {
    title: seoConfig.home.title,
    description: seoConfig.home.description,
    url: 'https://enosi-consulting.vercel.app',
  },
};

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Metrics from "./components/Metrics";
import Platforms from "./components/Platforms";
import Methode from "./components/Methode";
import PortfolioPreview from "./components/PortfolioPreview";
import Industries from "./components/Industries";
import CompanyStats from "./components/CompanyStats";
import FAQ from "./components/FAQ";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Pourquoi ne pas prendre un grand cabinet ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les grands cabinets facturent un senior en avant-vente, puis déploient des juniors à la livraison. Chez Enosi, l'interlocuteur qui propose est le même qui exécute — du diagnostic au déploiement. Résultat : moins cher, plus rapide, et quelqu'un qui comprend vraiment vos contraintes opérationnelles."
      }
    },
    {
      "@type": "Question",
      "name": "Quel ROI peut-on attendre ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sur les missions de pilotage et reporting, nos clients récupèrent en moyenne 25 % du temps de production dès les 3 premiers mois. Sur les cas d'usage IA, le premier modèle en production est opérationnel en 6 à 10 semaines."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure une intervention ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un diagnostic initial : 2 à 3 jours. Une mission de structuration, d'automatisation ou de déploiement IA : 6 à 12 semaines. Chaque étape livre quelque chose de concret."
      }
    },
    {
      "@type": "Question",
      "name": "Comment se déroule concrètement une mission ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On commence par comprendre vos décisions, pas vos données. Puis on analyse les flux, les outils, les contraintes réelles. On structure la solution dans vos systèmes existants, on déploie avec vos équipes et on transfère les compétences."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Metrics />
        <Platforms />
        <Methode />
        <PortfolioPreview />
        <Industries />
        <CompanyStats />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
