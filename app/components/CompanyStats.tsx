import ScrollReveal from "./ScrollReveal";
import GlowCard from "./GlowCard";

const differenciants = [
  {
    titre: "Pas de techno pour la techno",
    description:
      "L'IA et la data ne sont pas des fins en soi. Je les mobilise uniquement quand elles résolvent un problème réel et génèrent un impact mesurable.",
    icone: "◎",
  },
  {
    titre: "Pas de recommandations sans suite",
    description:
      "Je n'écris pas de rapports que personne ne lit. J'outille, je déploie, je transfère. Le livrable final, c'est une capacité, pas un document.",
    icone: "◈",
  },
  {
    titre: "Finance et data dans la même phrase",
    description:
      "Rares sont les profils qui maîtrisent à la fois la logique financière et la logique data. C'est ce qui rend mes interventions cohérentes de bout en bout.",
    icone: "◉",
  },
  {
    titre: "Priorité à la clarté, pas à la complexité",
    description:
      "Un bon pilotage se simplifie. Un bon modèle s'explique. Je travaille à rendre les choses plus lisibles, pas plus impressionnantes.",
    icone: "◎",
  },
];

export default function CompanyStats() {
  return (
    <section className="py-24 px-6 border-b relative overflow-hidden"
             style={{borderColor: 'rgba(0,0,0,0.07)'}}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full blur-3xl"
             style={{background: 'rgba(26,158,92,0.04)'}} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{color: 'rgba(30,30,30,0.35)'}}>Ce qui me distingue</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Pas de reporting décoratif.<br />
            <span className="text-[#1a9e5c]">Pas d&apos;IA gadget.</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{color: 'rgba(30,30,30,0.5)'}}>
            Ma différence ne tient pas à une méthode propriétaire ou à un
            logiciel maison. Elle tient à une exigence permanente : que chaque
            intervention soit utile, utilisée et appropriée.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {differenciants.map((d, index) => (
            <ScrollReveal key={d.titre} delay={index * 100}>
              <GlowCard className="card-premium p-7 flex gap-5">
                <div className="text-[#1a9e5c] text-xl shrink-0 mt-0.5 font-bold">{d.icone}</div>
                <div>
                  <h3 className="text-base font-bold mb-2" style={{color:'#0f0f0f'}}>{d.titre}</h3>
                  <p className="text-sm leading-relaxed" style={{color: 'rgba(30,30,30,0.5)'}}>{d.description}</p>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
