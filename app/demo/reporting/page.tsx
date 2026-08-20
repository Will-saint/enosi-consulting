import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DemoReporting from "./DemoReporting";

export const metadata: Metadata = {
  title: "Démo interactive — Automatisation d'un reporting mensuel | Enosi Consulting",
  description:
    "Lancez vous-même l'automatisation : 4 fichiers de filiales en désordre, contrôles de cohérence, détection d'anomalies et pack consolidé généré en quelques secondes.",
  openGraph: {
    title: "Démo interactive — Automatisation d'un reporting mensuel",
    description: "4 fichiers en désordre, un pack consolidé en quelques secondes. Lancez la démonstration.",
    url: `${SITE_URL}/demo/reporting`,
  },
};

export default function PageDemoReporting() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6" style={{ background: "#F8F7F4", minHeight: "100vh" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[rgba(30,30,30,0.5)] hover:text-[#0f0f0f] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l&apos;accueil
            </a>
            <p className="text-xs text-[rgba(30,30,30,0.4)] uppercase tracking-widest mt-8 mb-3">Démo interactive</p>
            <h1
              className="font-extrabold leading-tight text-[#0f0f0f] mb-5"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Quatre fichiers en désordre.<br />
              <span style={{ color: "#1a9e5c" }}>Un pack consolidé.</span>
            </h1>
            <p className="text-[rgba(30,30,30,0.55)] text-base leading-relaxed max-w-2xl">
              C&apos;est le scénario le plus courant chez mes interlocuteurs : des fichiers qui arrivent
              de partout, des formats qui ne se parlent pas, des doublons, et deux jours passés à
              reconstruire ce que personne ne relira. Lancez le traitement et regardez ce qui se passe.
            </p>
          </div>

          <DemoReporting />
        </div>
      </main>
      <Footer />
    </>
  );
}
