"use client";
import { useState } from "react";

const sujets = [
  "Pilotage de la performance",
  "Data & IA pour la décision",
  "Efficacité et création de valeur",
  "Plusieurs sujets à la fois",
  "Je ne sais pas encore",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    prenom: "", nom: "", entreprise: "", email: "",
    fonction: "", sujet: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-8">
      {submitted ? (
        <div className="text-center py-12">
          <div className="text-3xl mb-5 text-[#3ddc84]">◎</div>
          <h3 className="text-xl font-bold text-white mb-3">Message reçu.</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
            Nous reviendrons vers vous sous 48h pour organiser un
            premier échange sur vos enjeux.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label className="block text-xs text-gray-600 mb-1.5">Décrivez brièvement votre enjeu</label>
            <textarea
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-800 focus:outline-none focus:border-[#3ddc84]/50 transition-colors resize-none"
              placeholder="Contexte, objectif, contrainte principale…"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#3ddc84] text-black font-semibold rounded-lg hover:bg-[#2ab86e] transition-colors text-sm mt-1"
          >
            Envoyer le message
          </button>

          <p className="text-xs text-gray-700 text-center pt-1">
            Réponse sous 48h · Échange sans engagement
          </p>
        </form>
      )}
    </div>
  );
}
