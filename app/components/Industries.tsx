"use client";
import ScrollReveal from "./ScrollReveal";

const contextes = [
  {
    fonction: "Direction financière",
    desc: "Fiabiliser les chiffres, clarifier le pilotage, accélérer la clôture.",
    icone: "◎",
  },
  {
    fonction: "Direction performance",
    desc: "Structurer les indicateurs qui comptent. Rendre la performance lisible à tous les niveaux.",
    icone: "◈",
  },
  {
    fonction: "Direction transformation",
    desc: "Cadrer les initiatives, piloter les impacts, connecter la stratégie à l'exécution.",
    icone: "◉",
  },
  {
    fonction: "ETI en croissance",
    desc: "Structurer le pilotage à mesure que la complexité augmente.",
    icone: "◎",
  },
  {
    fonction: "Grands groupes et COMEX",
    desc: "Intervenir en environnements multi-acteurs, multi-périmètres, créer les conditions d'une décision plus rapide.",
    icone: "◈",
  },
];

export default function Industries() {
  return (
    <section id="contextes" className="py-28 px-6 border-b" style={{borderColor: 'rgba(0,0,0,0.07)'}}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{color: 'rgba(30,30,30,0.35)'}}>Contextes d&apos;intervention</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Avec qui nous travaillons
          </h2>
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{color: 'rgba(30,30,30,0.5)'}}>
            Nous intervenons auprès de directions qui cherchent à mieux piloter,
            mieux décider et mieux créer de la valeur — quelle que soit la taille
            de l&apos;organisation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contextes.map((c, index) => (
            <ScrollReveal key={c.fonction} delay={index * 80}>
              <div className="card-premium p-6 group">
                <div className="text-[#3ddc84] text-base mb-3 font-bold">{c.icone}</div>
                <h3 className="text-sm font-bold mb-2 transition-colors" style={{color:'#0f0f0f'}} onMouseOver={e=>(e.currentTarget as HTMLElement).style.color='#1a9e5c'} onMouseOut={e=>(e.currentTarget as HTMLElement).style.color='#0f0f0f'}>
                  {c.fonction}
                </h3>
                <p className="text-xs leading-relaxed" style={{color: 'rgba(30,30,30,0.5)'}}>{c.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
