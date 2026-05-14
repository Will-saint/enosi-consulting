import type { Metadata } from "next";
import { seoConfig } from "./seo";

export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
};

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import Partners from "./components/Partners";
import Awards from "./components/Awards";
import Metrics from "./components/Metrics";
import Platforms from "./components/Platforms";
import Methode from "./components/Methode";
import PortfolioPreview from "./components/PortfolioPreview";
import Industries from "./components/Industries";
import CompanyStats from "./components/CompanyStats";
import FAQ from "./components/FAQ";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Partners />
        <Awards />
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
