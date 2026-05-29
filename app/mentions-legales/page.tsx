import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { seoConfig } from "../seo";

export const metadata: Metadata = {
  title: seoConfig.mentionsLegales.title,
  description: seoConfig.mentionsLegales.description,
  openGraph: {
    title: seoConfig.mentionsLegales.title,
    description: seoConfig.mentionsLegales.description,
    url: 'https://enosi-consulting.vercel.app/mentions-legales',
  },
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="mb-14">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[rgba(30,30,30,0.5)] hover:text-[#0f0f0f] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </a>
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mt-8 mb-3">Légal</p>
            <h1
              className="text-5xl font-bold leading-tight text-[#0f0f0f] mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Mentions légales
            </h1>
          </div>

          <div className="space-y-12">

            <section className="pb-10 border-b border-[rgba(0,0,0,0.08)]">
              <h2
                className="text-xl font-bold text-[#0f0f0f] mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Éditeur du site
              </h2>
              <div className="space-y-2 text-sm text-[rgba(30,30,30,0.55)] leading-relaxed">
                <p><span className="text-[#3a3a3a] font-medium">Dénomination sociale :</span> Enosi Consulting</p>
                <p><span className="text-[#3a3a3a] font-medium">Responsable de la publication :</span> William Saint-Dizier</p>
                <p><span className="text-[#3a3a3a] font-medium">Adresse :</span> [Adresse à compléter]</p>
                <p><span className="text-[#3a3a3a] font-medium">SIRET :</span> [SIRET à compléter]</p>
                <p>
                  <span className="text-[#3a3a3a] font-medium">Contact :</span>{" "}
                  <a
                    href="mailto:contact@enosi-consulting.fr"
                    className="text-[#1a9e5c] hover:underline"
                  >
                    contact@enosi-consulting.fr
                  </a>
                </p>
              </div>
            </section>

            <section className="pb-10 border-b border-[rgba(0,0,0,0.08)]">
              <h2
                className="text-xl font-bold text-[#0f0f0f] mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Hébergement
              </h2>
              <div className="space-y-2 text-sm text-[rgba(30,30,30,0.55)] leading-relaxed">
                <p><span className="text-[#3a3a3a] font-medium">Hébergeur :</span> Vercel Inc.</p>
                <p><span className="text-[#3a3a3a] font-medium">Adresse :</span> 340 Pine Street, Suite 1002, San Francisco, CA 94104, États-Unis</p>
                <p><span className="text-[#3a3a3a] font-medium">Site :</span> vercel.com</p>
              </div>
            </section>

            <section className="pb-10 border-b border-[rgba(0,0,0,0.08)]">
              <h2
                className="text-xl font-bold text-[#0f0f0f] mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Propriété intellectuelle
              </h2>
              <p className="text-sm text-[rgba(30,30,30,0.55)] leading-relaxed">
                L&apos;ensemble des contenus présents sur ce site (textes, images, logos, structure) est la propriété exclusive d&apos;Enosi Consulting, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est interdite.
              </p>
            </section>

            <section className="pb-10 border-b border-[rgba(0,0,0,0.08)]">
              <h2
                className="text-xl font-bold text-[#0f0f0f] mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Données personnelles
              </h2>
              <p className="text-sm text-[rgba(30,30,30,0.55)] leading-relaxed">
                Le traitement des données personnelles collectées via le formulaire de contact est décrit dans notre{" "}
                <a href="/politique-confidentialite" className="text-[#1a9e5c] hover:underline">
                  politique de confidentialité
                </a>.
              </p>
            </section>

            <section>
              <h2
                className="text-xl font-bold text-[#0f0f0f] mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Limitation de responsabilité
              </h2>
              <p className="text-sm text-[rgba(30,30,30,0.55)] leading-relaxed">
                Enosi Consulting s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Cependant, Enosi Consulting ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations. Les liens externes présents sur ce site sont fournis à titre indicatif ; Enosi Consulting n&apos;est pas responsable du contenu des sites tiers.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
