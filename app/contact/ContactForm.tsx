"use client";
import { useState, useRef } from "react";

const sujets = [
  "Pilotage de la performance",
  "Data & IA pour la décision",
  "Efficacité et création de valeur",
  "Plusieurs sujets à la fois",
  "Je ne sais pas encore",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const mountTime = useRef(Date.now());
  const [form, setForm] = useState({
    prenom: "", nom: "", entreprise: "", email: "",
    fonction: "", sujet: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _hp: honeypot, _t: Date.now() - mountTime.current }),
      });
      const data = await res.json() as { success?: boolean; error?: string };
      if (!res.ok || !data.success) {
        setError("Une erreur est survenue, veuillez réessayer ou nous écrire directement.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Une erreur est survenue, veuillez réessayer ou nous écrire directement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8">
      {submitted ? (
        <div className="text-center py-12">
          <div className="text-3xl mb-5 text-[#3ddc84]">◎</div>
          <h3 className="text-xl font-bold text-white mb-3">Message envoyé.</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
            Votre message a bien été envoyé. Nous vous répondons sous 48h ouvrées.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot — invisible, rempli uniquement par les bots */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0, pointerEvents: "none" }}
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1.5">Prénom *</label>
              <input
                required
                type="text"
                value={form.prenom}
                onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-800 focus:outline-none focus:border-[#3ddc84]/50 transition-colors"
                placeholder="Jean"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1.5">Nom *</label>
              <input
                required
                type="text"
                value={form.nom}
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-800 focus:outline-none focus:border-[#3ddc84]/50 transition-colors"
                placeholder="Dupont"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1.5">Entreprise *</label>
            <input
              required
              type="text"
              value={form.entreprise}
              onChange={(e) => setForm({ ...form, entreprise: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-800 focus:outline-none focus:border-[#3ddc84]/50 transition-colors"
              placeholder="Nom de votre organisation"
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1.5">Adresse email professionnelle *</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-800 focus:outline-none focus:border-[#3ddc84]/50 transition-colors"
              placeholder="jean.dupont@entreprise.fr"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1.5">Fonction</label>
              <input
                type="text"
                value={form.fonction}
                onChange={(e) => setForm({ ...form, fonction: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-800 focus:outline-none focus:border-[#3ddc84]/50 transition-colors"
                placeholder="DAF, DPERF, DSI…"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1.5">Sujet principal</label>
              <select
                value={form.sujet}
                onChange={(e) => setForm({ ...form, sujet: e.target.value })}
                className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#3ddc84]/50 transition-colors"
              >
                <option value="">Choisir…</option>
                {sujets.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-600 mb-1.5">Décrivez brièvement votre enjeu *</label>
            <textarea
              required
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-800 focus:outline-none focus:border-[#3ddc84]/50 transition-colors resize-none"
              placeholder="Contexte, objectif, contrainte principale…"
            />
          </div>

          <div className="flex items-start gap-3 pt-1">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 shrink-0 accent-[#3ddc84]"
            />
            <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
              J&apos;accepte que mes données soient utilisées pour répondre à ma demande.{" "}
              <a href="/politique-confidentialite" className="text-[#3ddc84] hover:underline">
                Politique de confidentialité
              </a>
            </label>
          </div>

          {error && (
            <p className="text-xs text-red-400 text-center py-1">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !consent}
            className="w-full py-3 bg-[#3ddc84] text-black font-semibold rounded-lg hover:bg-[#2ab86e] transition-colors text-sm mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Envoi en cours…" : "Envoyer le message"}
          </button>

          <p className="text-xs text-gray-700 text-center pt-1">
            Réponse sous 48h · Échange sans engagement
          </p>
        </form>
      )}
    </div>
  );
}
