"use client";
import { useState } from "react";

const questions = [
  {
    q: "Pourquoi ne pas prendre un grand cabinet ?",
    a: "Les grands cabinets facturent un senior en avant-vente, puis déploient des juniors à la livraison. Chez Enosi, l'interlocuteur qui propose est le même qui exécute — du diagnostic au déploiement. Résultat : moins cher, plus rapide, et quelqu'un qui comprend vraiment vos contraintes opérationnelles, pas seulement votre brief.",
  },
  {
    q: "Quel ROI peut-on attendre ?",
    a: "Sur les missions de pilotage et reporting, mes clients récupèrent en moyenne 25 % du temps de production dès les 3 premiers mois. Sur les cas d'usage IA, le premier modèle en production est opérationnel en 6 à 10 semaines. Mon calculateur sur la page Démo vous donnera une estimation basée sur votre situation réelle.",
  },
  {
    q: "Combien de temps dure une intervention ?",
    a: "Un diagnostic initial : 2 à 3 jours. Une mission de structuration, d'automatisation ou de déploiement IA : 6 à 12 semaines. Chaque étape livre quelque chose de concret. Pas de mission ouverte indéfiniment — vous savez toujours où vous en êtes et ce qui a été produit.",
  },
  {
    q: "Comment se déroule concrètement une mission ?",
    a: "Je commence par comprendre vos décisions, pas vos données. Puis j'analyse les flux, les outils, les contraintes réelles. Je structure la solution dans vos systèmes existants, je déploie avec vos équipes et je transfère les compétences. Vous restez autonomes après mon départ — c'est l'objectif depuis le début.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: '#F8F7F4', padding: '6rem 1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(30,30,30,0.35)', marginBottom: '1rem' }}>
            Questions fréquentes
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem,4vw,3rem)',
            fontWeight: 700, color: '#0f0f0f', lineHeight: 1.1,
          }}>
            Ce que les décideurs<br />me demandent d&apos;abord.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {questions.map((item, i) => (
            <div key={i} style={{
              border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: '0.875rem',
              background: open === i ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
              overflow: 'hidden',
              transition: 'background 0.2s',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1.25rem 1.5rem',
                  background: 'none', border: 'none', cursor: 'pointer',
                  textAlign: 'left', gap: '1rem',
                }}
                aria-expanded={open === i}
              >
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f0f0f', lineHeight: 1.4 }}>
                  {item.q}
                </span>
                <span style={{
                  flexShrink: 0, width: '20px', height: '20px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(0,0,0,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.85rem', color: open === i ? '#1a9e5c' : 'rgba(30,30,30,0.4)',
                  transition: 'transform 0.25s, color 0.2s',
                  transform: open === i ? 'rotate(45deg)' : 'none',
                }}>
                  +
                </span>
              </button>
              {open === i && (
                <div style={{ padding: '0 1.5rem 1.5rem' }}>
                  <p style={{ fontSize: '0.88rem', color: 'rgba(30,30,30,0.6)', lineHeight: 1.75 }}>
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
