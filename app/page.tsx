import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { seoConfig } from "./seo";

export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
  openGraph: {
    title: seoConfig.home.title,
    description: seoConfig.home.description,
    url: SITE_URL,
  },
};

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Metrics from "./components/Metrics";
import Parcours from "./components/Parcours";
import Platforms from "./components/Platforms";
import Realisations from "./components/Realisations";
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
      "name": "Pourquoi vous plutôt qu'un développeur ou qu'un cabinet ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un développeur construira exactement ce que vous lui demandez, sans savoir si ça valait la peine. Un cabinet vous expliquera ce qu'il faudrait faire, puis déploiera des juniors. Moi je viens du contrôle de gestion : je sais quelles tâches méritent d'être automatisées, et je les construis moi-même."
      }
    },
    {
      "@type": "Question",
      "name": "Quel ROI peut-on attendre ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sur le reporting, je vise une réduction du temps de production de l'ordre de 25 % — c'est le résultat que j'ai obtenu en automatisant le reporting financier chez un précédent employeur (Power Query). Sur les cas d'usage IA, l'objectif est un premier modèle en production en 6 à 10 semaines."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps dure une intervention ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un diagnostic initial : 2 à 3 jours. Une automatisation livrée et transférée : 4 à 8 semaines selon le périmètre. Le périmètre est écrit noir sur blanc dans le devis."
      }
    },
    {
      "@type": "Question",
      "name": "Que se passe-t-il si l'automatisation casse après votre départ ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Je livre systématiquement avec la documentation et un transfert à vos équipes : vous devez pouvoir comprendre et modifier ce que j'ai construit sans moi. Je commence aussi par les process périphériques plutôt que par vos systèmes critiques."
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
        <Parcours />
        <Platforms />
        <Realisations />
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
