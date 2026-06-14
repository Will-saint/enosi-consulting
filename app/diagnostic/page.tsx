"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Axes ────────────────────────────────────────────────────────────────────
const AXES = [
  { label: "Données & infrastructure", shortLabel: "Données",  color: "#1a9e5c" },
  { label: "Pilotage & décision",       shortLabel: "Pilotage", color: "#4f46e5" },
  { label: "IA & automatisation",       shortLabel: "IA",       color: "#d97706" },
  { label: "Culture & adoption",        shortLabel: "Culture",  color: "#0ea5e9" },
];

// ─── Questions (options index 0 = score 4, index 4 = score 0) ────────────────
const QUESTIONS = [
  {
    axisIndex: 0,
    text: "Quand vous avez besoin d'un chiffre, combien de temps faut-il en moyenne pour l'obtenir ?",
    options: [
      "Quelques minutes via un dashboard",
      "Quelques heures, en demandant à quelqu'un",
      "Une journée",
      "Plusieurs jours",
      "Impossible à dire",
    ],
  },
  {
    axisIndex: 0,
    text: "Vos sources de données (ERP, CRM, RH, ventes) sont-elles connectées ?",
    options: [
      "Toutes centralisées dans un entrepôt",
      "La plupart connectées",
      "Quelques-unes intégrées",
      "Chacune dans son silo",
      "Je ne sais pas",
    ],
  },
  {
    axisIndex: 0,
    text: "Qui est responsable de la qualité de vos données ?",
    options: [
      "Une direction Data dédiée",
      "Un référent identifié par domaine",
      "Le DSI / IT",
      "Personne en particulier",
      "Tout le monde et personne",
    ],
  },
  {
    axisIndex: 1,
    text: "Vos reportings COMEX sont-ils utilisés pour décider ou pour informer ?",
    options: [
      "Décider, avec instances dédiées",
      "Décider partiellement",
      "Plutôt informer",
      "Lus en diagonale",
      "Rarement lus",
    ],
  },
  {
    axisIndex: 1,
    text: "Combien de jours faut-il pour produire votre reporting mensuel ?",
    options: [
      "Automatisé, moins d'un jour",
      "1 à 3 jours",
      "4 à 6 jours",
      "7 à 10 jours",
      "Plus de 10 jours",
    ],
  },
  {
    axisIndex: 1,
    text: "Avez-vous des alertes automatiques sur vos indicateurs critiques ?",
    options: [
      "Oui, sur 5 indicateurs ou plus",
      "Sur 1 à 3 indicateurs",
      "En projet",
      "Non, surveillance manuelle",
      "Non, et pas envisagé",
    ],
  },
  {
    axisIndex: 2,
    text: "Avez-vous des cas d'usage IA en production ?",
    options: [
      "3 ou plus en prod, avec ROI mesuré",
      "1 à 2 en production",
      "En POC / pilote",
      "Identifiés mais non lancés",
      "Aucun",
    ],
  },
  {
    axisIndex: 2,
    text: "Combien de tâches répétitives ont été automatisées dans votre direction sur 12 mois ?",
    options: [
      "5 automatisations ou plus en prod",
      "2 à 4",
      "1",
      "En cours d'identification",
      "Aucune",
    ],
  },
  {
    axisIndex: 2,
    text: "Avez-vous une roadmap IA priorisée avec critères de sélection ?",
    options: [
      "Oui, scorée et suivie",
      "Oui, en partie formalisée",
      "Liste de sujets sans priorisation",
      "Idées éparses",
      "Pas de roadmap",
    ],
  },
  {
    axisIndex: 3,
    text: "Quel est le niveau de sponsorship data/IA au COMEX ?",
    options: [
      "Sujet stratégique, sponsor dédié",
      "Sujet régulier en COMEX",
      "Évoqué ponctuellement",
      "Délégué au DSI",
      "Sujet absent",
    ],
  },
  {
    axisIndex: 3,
    text: "Vos équipes métier savent-elles utiliser les outils data mis à disposition ?",
    options: [
      "Utilisation autonome et régulière",
      "Usage par les power users",
      "Usage occasionnel",
      "Outils déployés mais sous-utilisés",
      "Pas d'outils déployés",
    ],
  },
  {
    axisIndex: 3,
    text: "Les projets data/IA passés ont-ils été adoptés sur la durée ?",
    options: [
      "Oui, ancrés dans les processus",
      "Adoption partielle",
      "Utilisés au lancement puis abandonnés",
      "Faible adoption",
      "Pas de projets passés",
    ],
  },
];

function encodeId(scores: number[]): string {
  const str = scores.join("");
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function DiagnosticPage() {
  const router = useRouter();
  // step 0 = intro, 1-12 = questions, 13 = email capture
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(12).fill(null));
  const [selected, setSelected] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [prenom, setPrenom] = useState("");
  const [entreprise, setEntreprise] = useState("");
  const [loading, setLoading] = useState(false);

  const currentQ = step >= 1 && step <= 12 ? QUESTIONS[step - 1] : null;
  const axis = currentQ ? AXES[currentQ.axisIndex] : null;

  const handleNext = () => {
    if (step < 1 || step > 12 || selected === null) return;
    const score = 4 - selected;
    const newAnswers = [...answers];
    newAnswers[step - 1] = score;
    setAnswers(newAnswers);
    setSelected(null);
    setStep(step < 12 ? step + 1 : 13);
  };

  const handleBack = () => {
    if (step === 0) return;
    const prevStep = step - 1;
    setStep(prevStep);
    if (prevStep >= 1) {
      const prevAnswer = answers[prevStep - 1];
      setSelected(prevAnswer !== null ? 4 - (prevAnswer as number) : null);
    } else {
      setSelected(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !prenom) return;
    setLoading(true);
    const scores = answers as number[];
    const id = encodeId(scores);
    try {
      await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scores, email, prenom, entreprise, id }),
      });
    } catch {
      // Non-blocking — continue even if email fails
    }
    router.push(`/diagnostic/${id}`);
  };

  // ─── Intro ──────────────────────────────────────────────────────────────────
  if (step === 0) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen" style={{ background: "#F8F7F4" }}>
          <div className="max-w-2xl mx-auto px-6 pt-32 pb-24">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "rgba(30,30,30,0.35)" }}
            >
              Outil gratuit
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0f0f0f" }}
            >
              Évaluez la maturité<br />Data&nbsp;/&nbsp;IA de votre organisation
            </h1>
            <p
              className="text-base leading-relaxed mb-10 max-w-lg"
              style={{ color: "rgba(30,30,30,0.55)" }}
            >
              12 questions · 3 minutes · Un rapport personnalisé sur 4 axes
              avec vos priorités d&apos;action identifiées — envoyé gratuitement.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-12">
              {AXES.map((a) => (
                <span
                  key={a.label}
                  className="text-xs px-3 py-1.5 rounded-full border font-medium"
                  style={{
                    borderColor: `${a.color}40`,
                    color: a.color,
                    background: `${a.color}0d`,
                  }}
                >
                  {a.shortLabel}
                </span>
              ))}
            </div>

            <button
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm transition-colors"
              style={{ background: "#1a9e5c", color: "#000" }}
            >
              Commencer le diagnostic →
            </button>
            <p className="text-xs mt-5" style={{ color: "rgba(30,30,30,0.3)" }}>
              Gratuit · Sans inscription préalable · Résultats immédiats
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ─── Questions ──────────────────────────────────────────────────────────────
  if (step >= 1 && step <= 12 && currentQ && axis) {
    const qInAxis = QUESTIONS.slice(0, step).filter(
      (q) => q.axisIndex === currentQ.axisIndex
    ).length;

    return (
      <div className="min-h-screen bg-white flex flex-col">
        {/* Minimal header */}
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
        >
          <a
            href="/"
            className="text-sm font-semibold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#0f0f0f" }}
          >
            Enosi
          </a>
          <span className="text-xs" style={{ color: "rgba(30,30,30,0.4)" }}>
            {step}&nbsp;/&nbsp;12
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-0.5" style={{ background: "rgba(0,0,0,0.05)" }}>
          <div
            className="h-full"
            style={{
              width: `${(step / 12) * 100}%`,
              background: axis.color,
              transition: "width 0.4s ease",
            }}
          />
        </div>

        {/* Question */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full px-6 py-12">
          {/* Axis + question count */}
          <div className="flex items-center gap-2.5 mb-8">
            <span
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: `${axis.color}12`, color: axis.color }}
            >
              {axis.shortLabel}
            </span>
            <span className="text-xs" style={{ color: "rgba(30,30,30,0.35)" }}>
              Question {qInAxis} / 3
            </span>
          </div>

          <h2
            className="text-2xl md:text-3xl font-bold leading-snug mb-10"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#0f0f0f",
            }}
          >
            {currentQ.text}
          </h2>

          {/* Options */}
          <div className="space-y-2.5">
            {currentQ.options.map((option, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="w-full text-left px-5 py-4 rounded-xl text-sm transition-all duration-150"
                style={{
                  border: `1px solid ${selected === i ? axis.color : "rgba(0,0,0,0.08)"}`,
                  background: selected === i ? `${axis.color}0d` : "#ffffff",
                  color:
                    selected === i ? axis.color : "rgba(30,30,30,0.7)",
                  fontWeight: selected === i ? 600 : 400,
                }}
              >
                <span className="inline-flex items-center gap-3">
                  <span
                    className="w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center"
                    style={{
                      borderColor:
                        selected === i ? axis.color : "rgba(0,0,0,0.18)",
                    }}
                  >
                    {selected === i && (
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: axis.color }}
                      />
                    )}
                  </span>
                  {option}
                </span>
              </button>
            ))}
          </div>

          {/* Nav */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={handleBack}
              className="text-sm transition-colors"
              style={{ color: "rgba(30,30,30,0.4)" }}
            >
              ← Précédent
            </button>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="px-7 py-2.5 rounded-full text-sm font-semibold transition-all"
              style={{
                background: selected !== null ? axis.color : "rgba(0,0,0,0.06)",
                color: selected !== null ? "#000" : "rgba(30,30,30,0.25)",
                cursor: selected !== null ? "pointer" : "not-allowed",
              }}
            >
              {step === 12 ? "Voir mon diagnostic →" : "Suivant →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Email capture ──────────────────────────────────────────────────────────
  if (step === 13) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
        >
          <a
            href="/"
            className="text-sm font-semibold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#0f0f0f" }}
          >
            Enosi
          </a>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full" style={{ background: "#1a9e5c" }} />
            <span className="text-xs" style={{ color: "rgba(30,30,30,0.4)" }}>
              Diagnostic terminé
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full px-6 py-12">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4" style={{ color: "#1a9e5c" }}>◎</div>
            <h2
              className="text-2xl font-bold mb-3"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#0f0f0f",
              }}
            >
              Votre diagnostic est prêt.
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(30,30,30,0.5)" }}>
              Entrez votre email pour accéder à votre rapport
              personnalisé et recevoir le lien partageable.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="prenom"
                  className="block text-xs mb-1.5"
                  style={{ color: "rgba(30,30,30,0.4)" }}
                >
                  Prénom *
                </label>
                <input
                  id="prenom"
                  required
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="Jean"
                  className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none transition-colors"
                  style={{
                    border: "1px solid rgba(0,0,0,0.08)",
                    color: "#0f0f0f",
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="entreprise"
                  className="block text-xs mb-1.5"
                  style={{ color: "rgba(30,30,30,0.4)" }}
                >
                  Entreprise
                </label>
                <input
                  id="entreprise"
                  type="text"
                  value={entreprise}
                  onChange={(e) => setEntreprise(e.target.value)}
                  placeholder="Votre organisation"
                  className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none transition-colors"
                  style={{
                    border: "1px solid rgba(0,0,0,0.08)",
                    color: "#0f0f0f",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs mb-1.5"
                style={{ color: "rgba(30,30,30,0.4)" }}
              >
                Email professionnel *
              </label>
              <input
                id="email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jean.dupont@entreprise.fr"
                className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none transition-colors"
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  color: "#0f0f0f",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold text-sm mt-2 transition-colors"
              style={{
                background: "#1a9e5c",
                color: "#000",
                opacity: loading ? 0.6 : 1,
              }}
            >
              {loading ? "Chargement…" : "Accéder à mon diagnostic →"}
            </button>

            <p
              className="text-xs text-center pt-1"
              style={{ color: "rgba(30,30,30,0.3)" }}
            >
              Vos données servent uniquement à vous envoyer votre rapport.
            </p>
          </form>

          <button
            onClick={handleBack}
            className="text-xs text-center mt-5 w-full"
            style={{ color: "rgba(30,30,30,0.35)" }}
          >
            ← Modifier mes réponses
          </button>
        </div>
      </div>
    );
  }

  return null;
}
