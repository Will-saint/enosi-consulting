import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { seoConfig } from "../seo";

export const metadata: Metadata = {
  title: seoConfig.politiqueConfidentialite.title,
  description: seoConfig.politiqueConfidentialite.description,
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          <div className="mb-14">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </a>
            <p className="text-xs text-gray-600 uppercase tracking-widest mt-8 mb-3">Légal</p>
            <h1
              className="text-5xl font-bold leading-tight text-white mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Politique de confidentialité
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>

          <div className="space-y-12">

            <section className="pb-10 border-b border-[#1e1e1e]">
              <h2
                className="text-xl font-bold text-white mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Responsable du traitement
              </h2>
              <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
                <p><span className="text-gray-300 font-medium">Entité :</span> Enosi Consulting</p>
                <p><span className="text-gray-300 font-medium">Responsable :</span> William Saint-Dizier</p>
                <p>
                  <span className="text-gray-300 font-medium">Contact :</span>{" "}
                  <a
                    href="mailto:contact@enosi-consulting.fr"
                    className="text-[#1a9e5c] hover:underline"
                  >
                    contact@enosi-consulting.fr
                  </a>
                </p>
              </div>
            </section>

            <section className="pb-10 border-b border-[#1e1e1e]">
              <h2
                className="text-xl font-bold text-white mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Données collectées
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Lors de la soumission du formulaire de contact, les données suivantes sont collectées :
              </p>
              <ul className="space-y-2">
                {["Nom et prénom", "Adresse email", "Message libre décrivant votre besoin"].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm text-gray-400">
                    <span className="text-[#1a9e5c] shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                Aucune autre donnée n&apos;est collectée. Ce site n&apos;utilise pas de cookies de traçage ou d&apos;identification.
              </p>
            </section>

            <section className="pb-10 border-b border-[#1e1e1e]">
              <h2
                className="text-xl font-bold text-white mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Finalité du traitement
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Les données collectées sont utilisées exclusivement pour répondre à votre demande de contact et établir un premier échange professionnel. Elles ne sont pas utilisées à des fins commerciales, de prospection, ni partagées avec des tiers à des fins marketing.
              </p>
            </section>

            <section className="pb-10 border-b border-[#1e1e1e]">
              <h2
                className="text-xl font-bold text-white mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Sous-traitants et transferts de données
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Conformément à l&apos;article 28 du RGPD, les sous-traitants suivants traitent des données pour le compte d&apos;Enosi Consulting :
              </p>
              <div className="space-y-4">
                <div className="rounded-lg border border-[#1e1e1e] p-4">
                  <p className="text-sm text-gray-300 font-medium mb-1">Resend (resend.com)</p>
                  <p className="text-sm text-gray-500 leading-relaxed">Service d&apos;envoi d&apos;emails transactionnels — traite les données du formulaire de contact (nom, email, message) pour acheminer votre message. Données hébergées aux États-Unis, transfert encadré par des clauses contractuelles types (CCT). Politique de confidentialité : <span className="text-gray-400">resend.com/privacy</span></p>
                </div>
                <div className="rounded-lg border border-[#1e1e1e] p-4">
                  <p className="text-sm text-gray-300 font-medium mb-1">Vercel Inc. (vercel.com)</p>
                  <p className="text-sm text-gray-500 leading-relaxed">Hébergeur du site — traite les données de navigation (logs serveur) de façon transitoire. Données hébergées aux États-Unis, transfert encadré par des CCT.</p>
                </div>
                <div className="rounded-lg border border-[#1e1e1e] p-4">
                  <p className="text-sm text-gray-300 font-medium mb-1">Plausible Analytics (plausible.io)</p>
                  <p className="text-sm text-gray-500 leading-relaxed">Outil de mesure d&apos;audience privacy-first — ne dépose aucun cookie, ne collecte aucune donnée personnelle identifiable, ne permet aucun suivi individuel. Données agrégées hébergées dans l&apos;UE. Aucun consentement préalable requis au titre de la CNIL.</p>
                </div>
              </div>
            </section>

            <section className="pb-10 border-b border-[#1e1e1e]">
              <h2
                className="text-xl font-bold text-white mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Durée de conservation
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Les données sont conservées pendant une durée maximale de <span className="text-gray-300 font-medium">12 mois</span> à compter de la date de réception du message, puis supprimées.
              </p>
            </section>

            <section className="pb-10 border-b border-[#1e1e1e]">
              <h2
                className="text-xl font-bold text-white mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Vos droits
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Droit d'accès — obtenir une copie de vos données",
                  "Droit de rectification — corriger des données inexactes",
                  "Droit à l'effacement — demander la suppression de vos données",
                  "Droit d'opposition — vous opposer au traitement de vos données",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm text-gray-400">
                    <span className="text-[#1a9e5c] shrink-0 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-400 leading-relaxed">
                Pour exercer ces droits, contactez-nous à{" "}
                <a
                  href="mailto:contact@enosi-consulting.fr"
                  className="text-[#1a9e5c] hover:underline"
                >
                  contact@enosi-consulting.fr
                </a>
                . Nous répondrons dans un délai de 30 jours. En cas de litige non résolu, vous pouvez saisir la{" "}
                <span className="text-gray-300">CNIL (cnil.fr)</span>.
              </p>
            </section>

            <section>
              <h2
                className="text-xl font-bold text-white mb-5"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Cookies et traceurs
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Ce site n&apos;utilise aucun cookie de traçage, de publicité ou d&apos;identification. L&apos;outil d&apos;audience Plausible Analytics ne dépose aucun cookie et ne permet aucun suivi individuel. Aucun bandeau de consentement n&apos;est requis au titre de la réglementation CNIL.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
