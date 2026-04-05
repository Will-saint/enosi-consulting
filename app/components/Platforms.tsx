"use client";
import ScrollReveal from "./ScrollReveal";

const offres = [
  {
    numero: "01",
    nom: "Pilotage de la performance",
    accroche: "Rendre la performance lisible, fiable et utile.",
    probleme: "Les indicateurs existent, mais le pilotage reste flou. Les décisions s'appuient sur des données mal structurées ou mal lues.",
    apport: "Nous structurons les indicateurs clés, fiabilisons les données de référence et construisons les dispositifs de pilotage dont les directions ont vraiment besoin pour décider.",
    sujets: [
      "Structuration des KPI et indicateurs de performance",
      "Refonte du reporting de pilotage",
      "Analyse de rentabilité et de contribution",
      "Tableaux de bord orientés décision",
      "Aide à la priorisation et arbitrage",
    ],
    benefice: "Un pilotage plus clair. Des décisions mieux fondées. Des équipes qui regardent les mêmes chiffres.",
    couleur: "#3ddc84",
    icone: "◎",
    href: "/offres/pilotage",
  },
  {
    numero: "02",
    nom: "Data & IA pour la décision",
    accroche: "Transformer les données en leviers de décision concrets.",
    probleme: "Les données sont disponibles, parfois abondantes — mais elles ne se traduisent pas encore en avantages décisionnels ou opérationnels.",
    apport: "Nous identifions les cas d'usage à forte valeur, structurons les analyses et déployons des outils d'aide à la décision qui s'intègrent dans les processus réels des équipes.",
    sujets: [
      "Automatisation et fiabilisation du reporting",
      "Modèles de prévision et de projection",
      "Détection d'anomalies et alerting",
      "Cadrage et déploiement de cas d'usage IA",
      "Aide à la décision augmentée",
    ],
    benefice: "Des projections plus fiables. Des décisions mieux éclairées. De l'IA qui sert les usages, pas l'inverse.",
    couleur: "#6366f1",
    icone: "◈",
    href: "/offres/data-ia",
  },
  {
    numero: "03",
    nom: "Efficacité et création de valeur",
    accroche: "Améliorer l'exécution, réduire les frictions, piloter ce qui compte.",
    probleme: "Les processus ralentissent l'organisation. La coordination entre métier, finance et data coûte plus qu'elle ne produit.",
    apport: "Nous analysons les flux, identifions les points de friction, rationalisons les processus critiques et mettons en place un pilotage orienté valeur — pragmatique, transférable, durable.",
    sujets: [
      "Optimisation de processus métier et de pilotage",
      "Réduction des redondances et des délais",
      "Amélioration de la coordination métier / data / finance",
      "Structuration d'une culture de la performance",
      "Transformation pragmatique et orientée résultats",
    ],
    benefice: "Des organisations plus fluides. Un pilotage centré sur la valeur. Des gains visibles à court terme.",
    couleur: "#f59e0b",
    icone: "◉",
    href: "/offres/efficacite",
  },
];

export default function Platforms() {
  return (
    <section id="offres" style={{
      background: '#1c1b1d',
      padding: '7rem 1.5rem',
      borderTop: '1px solid rgba(144,143,158,0.06)',
      borderBottom: '1px solid rgba(144,143,158,0.06)',
    }}>
      <div style={{maxWidth: '80rem', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '3.5rem'}}>
          <p style={{
            fontSize: '0.65rem', letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(198,197,213,0.25)', marginBottom: '1rem'
          }}>Nos offres</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem,4vw,3rem)',
            fontWeight: 700, color: '#ffffff', marginBottom: '1rem'
          }}>
            Trois domaines d&apos;intervention
          </h2>
          <p style={{color: 'rgba(198,197,213,0.4)', maxWidth: '40rem', margin: '0 auto', fontSize: '0.9rem'}}>
            Un périmètre resserré. Des expertises complémentaires. Une logique d&apos;impact.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {offres.map((o, index) => (
            <ScrollReveal key={o.nom} delay={index * 150}>
              <div style={{
                background: '#0e0e10',
                borderRadius: '1.25rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 0 1px rgba(144,143,158,0.08)',
                transition: 'box-shadow 0.25s, background 0.25s',
                height: '100%',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = `0 0 0 1px rgba(61,220,132,0.15), 0 8px 32px rgba(0,0,0,0.4)`;
                el.style.background = '#131315';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = '0 0 0 1px rgba(144,143,158,0.08)';
                el.style.background = '#0e0e10';
              }}>

                {/* Numéro décoratif */}
                <span style={{
                  position: 'absolute', top: '1rem', right: '1.5rem',
                  fontSize: '5rem', opacity: 0.06,
                  color: '#ffffff',
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700, lineHeight: 1, userSelect: 'none',
                  pointerEvents: 'none',
                }}>
                  {o.numero}
                </span>

                {/* Icône */}
                <div style={{
                  width: '2.5rem', height: '2.5rem',
                  borderRadius: '0.625rem',
                  background: `${o.couleur}12`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.1rem', color: o.couleur,
                  marginBottom: '1.5rem', position: 'relative', zIndex: 1,
                }}>
                  {o.icone}
                </div>

                <p style={{
                  fontSize: '0.7rem', fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  color: o.couleur, marginBottom: '0.5rem',
                  position: 'relative', zIndex: 1,
                }}>{o.accroche}</p>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.15rem', fontWeight: 700,
                  color: '#ffffff', marginBottom: '1rem',
                  position: 'relative', zIndex: 1,
                }}>{o.nom}</h3>

                <div style={{
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '0.75rem',
                  padding: '1rem',
                  marginBottom: '1.25rem',
                  position: 'relative', zIndex: 1,
                }}>
                  <p style={{
                    fontSize: '0.7rem', textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'rgba(255,255,255,0.2)', marginBottom: '0.5rem'
                  }}>Le constat</p>
                  <p style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6}}>{o.probleme}</p>
                </div>

                <p style={{
                  fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7, marginBottom: '1.25rem',
                  flex: 1, position: 'relative', zIndex: 1,
                }}>{o.apport}</p>

                <div style={{marginBottom: '1.25rem', position: 'relative', zIndex: 1}}>
                  {o.sujets.map((s) => (
                    <div key={s} style={{
                      display: 'flex', alignItems: 'flex-start',
                      gap: '0.5rem', marginBottom: '0.4rem',
                      fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)',
                    }}>
                      <span style={{
                        width: '4px', height: '4px', borderRadius: '50%',
                        background: o.couleur, marginTop: '0.45rem', flexShrink: 0,
                      }}/>
                      {s}
                    </div>
                  ))}
                </div>

                <div style={{
                  fontSize: '0.78rem', fontWeight: 500,
                  color: o.couleur, lineHeight: 1.6,
                  paddingTop: '1rem',
                  borderTop: `1px solid ${o.couleur}20`,
                  marginBottom: '1rem',
                  position: 'relative', zIndex: 1,
                }}>{o.benefice}</div>

                <a href={o.href} style={{
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  position: 'relative', zIndex: 1,
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color='#ffffff'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,0.3)'}>
                  En savoir plus →
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
