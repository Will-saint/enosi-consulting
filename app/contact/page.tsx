import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";
import { seoConfig } from "../seo";

export const metadata: Metadata = {
  title: seoConfig.contact.title,
  description: seoConfig.contact.description,
};

export default function PageContact() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* En-tête */}
          <div className="mb-14">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">Contact</p>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight text-white mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Discutons de vos enjeux.
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-lg">
              Un premier échange de 30 minutes pour comprendre
              votre situation. Pas de présentation commerciale.
              Une conversation sur vos priorités réelles.
            </p>
          </div>

          {/* Grille 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">


            {/* Colonne gauche */}
            <div>
              <div className="space-y-8 mb-10">
                {[
                  {
                    n: "01",
                    titre: "Vous avez un sujet précis",
                    texte: "Décrivez-le brièvement dans le formulaire. Nous revenons vers vous sous 48h avec un premier point de vue structuré.",
                  },
                  {
                    n: "02",
                    titre: "Vous cherchez à cadrer un problème",
                    texte: "Avant de parler solution, nous pouvons vous aider à poser le bon diagnostic. C'est souvent là que ça commence.",
                  },
                  {
                    n: "03",
                    titre: "Vous évaluez plusieurs options",
                    texte: "Un échange préliminaire sans engagement vous permettra de nous positionner clairement par rapport à vos besoins.",
                  },
                ].map((b, i, arr) => (
                  <div
                    key={b.n}
                    className={`flex gap-5 pb-8 ${i < arr.length - 1 ? "border-b border-[#1e1e1e]" : ""}`}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                      style={{ backgroundColor: "#3ddc8415", color: "#3ddc84" }}
                    >
                      {b.n}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-2">{b.titre}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{b.texte}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Encadré email */}
              <div className="rounded-xl p-5 bg-[#0d0d0d] border border-[#1e1e1e]">
                <a
                  href="mailto:william.saint-dizier@enosi-consulting.fr"
                  className="text-sm text-[#3ddc84] block"
                >
                  william.saint-dizier@enosi-consulting.fr
                </a>
                <p className="text-xs text-gray-600 mt-1">Réponse sous 48h ouvrées</p>
              </div>
            </div>

            {/* Colonne droite — formulaire */}
            <ContactForm />
          </div>

          {/* Bloc Calendly */}
          <div className="mt-16 pt-16 border-t border-[#1e1e1e] text-center">
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">Préférence directe</p>
            <h2
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Vous préférez réserver directement un créneau ?
            </h2>
            <p className="text-sm text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
              Sélectionnez un créneau de 30 minutes dans l&apos;agenda. Confirmation automatique, sans intermédiaire.
            </p>
            <a
              href="https://calendly.com/williamsaintdizier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold border border-[#1a9e5c] text-[#1a9e5c] hover:bg-[#1a9e5c] hover:text-white transition-colors"
            >
              Réserver 30 minutes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
