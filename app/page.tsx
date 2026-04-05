import type { Metadata } from "next";
import { seoConfig } from "./seo";

export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
};

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Awards from "./components/Awards";
import Partners from "./components/Partners";
import Metrics from "./components/Metrics";
import Platforms from "./components/Platforms";
import Methode from "./components/Methode";
import PortfolioPreview from "./components/PortfolioPreview";
import Industries from "./components/Industries";
import CompanyStats from "./components/CompanyStats";
import CTABanner from "./components/CTABanner";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Awards />
        <Partners />
        <Metrics />
        <Platforms />
        <Methode />
        <PortfolioPreview />
        <Industries />
        <CompanyStats />
        <CTABanner />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
