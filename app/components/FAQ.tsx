"use client";
import { useState } from "react";

const questions = [
  {
    q: "Pourquoi vous plutôt qu'un développeur ou qu'un cabinet ?",
    a: "Un développeur construira exactement ce que vous lui demandez, sans savoir si ça valait la peine. Un cabinet vous expliquera ce qu'il faudrait faire, puis déploiera des juniors. Moi je viens du contrôle de gestion : je sais quelles tâches méritent d'être automatisées, et je les construis moi-même. Celui qui propose est celui qui livre.",
  },
  {
    q: "Quel ROI peut-on attendre ?",
    a: "Sur le reporting, je vise une réduction de l'ordre de 25 % du temps de production — c'est le résultat que j'ai obtenu en automatisant le reporting financier chez un précédent employeur (Power Query). Sur les cas d'usage IA, l'objectif est un premier modèle en production en 6 à 10 semaines. Mon calculateur sur la page Démo vous donnera une estimation basée sur votre situation réelle.",
  },
  {
    q: "Combien de temps dure une intervention ?",
    a: "Un diagnostic initial : 2 à 3 jours. Une automatisation livrée et transférée : 4 à 8 semaines selon le périmètre. Chaque étape livre quelque chose de concret, et le périmètre est écrit noir sur blanc dans le devis. Pas de mission ouverte indéfiniment.",
  },
  {
    q: "Que se passe-t-il si l'automatisation casse après votre départ ?",
    a: "C'est la question qu'il faut poser, et elle conditionne ma façon de travailler. Je livre systématiquement avec la documentation et un transfert à vos équipes : vous devez pouvoir comprendre et modifier ce que j'ai construit sans moi. Je commence aussi par les process périphériques plutôt que par vos systèmes critiques — une automatisation de reporting qui s'arrête est un désagrément, pas un incident de paie.",
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
            fontSize: 'clamp(2.4rem,5vw,3.8rem)',
            fontWeight: 800, color: '#0f0f0f', lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}>
            Ce que les décideurs<br /><span style={{color:'#1a9e5c'}}>me demandent d&apos;abord.</span>
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
