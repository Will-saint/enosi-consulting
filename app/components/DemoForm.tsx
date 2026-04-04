"use client";
import { useState } from "react";

const sujets = [
  "Pilotage de la performance",
  "Data & IA pour la décision",
  "Efficacité et création de valeur",
  "Plusieurs sujets à la fois",
  "Je ne sais pas encore",
];

export default function DemoForm() {
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
    <section id="contact" className="py-24 px-6 border-b border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Gauche */}
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Discutons de vos<br />
              <span className="text-[#3ddc84]">priorités.</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-sm">
              Un échange de 30 minutes suffit pour savoir si nous pouvons
              vous aider. Pas de présentation commerciale. Pas de réponse
              générique. Une conversation sur vos enjeux réels.
            </p>

            <div className="space-y-6">
              {[
                {
                  titre: "Vous avez un sujet précis",
                  desc: "Décrivez-le brièvement dans le formulaire. Nous revenons vers vous sous 48h avec un premier point de vue.",
                },
                {
                  titre: "Vous cherchez à structurer votre approche",
                  desc: "Nous pouvons vous aider à cadrer le problème avant de parler de solution.",
                },
                {
                  titre: "Vous évaluez plusieurs options",
                  desc: "Un échange préliminaire sans engagement vous permettra de nous positionner clairement.",
                },
              ].map((item) => (
                <div key={item.titre} className="flex gap-4">
                  <div className="w-1 bg-[#3ddc84]/30 rounded-full shrink-0 mt-1" style={{ minHeight: "100%" }} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.titre}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulaire */}
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
        </div>
      </div>
    </section>
  );
}
