export default function Hero() {
  return (
    <section className="pt-36 pb-28 px-6 text-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#3ddc84]/5 rounded-full blur-3xl" />
        <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-[#3ddc84]/3 rounded-full blur-3xl" />
      </div>

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="max-w-4xl mx-auto relative fade-in">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-[#111] border border-[#1e1e1e] rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc84]" />
          <span className="text-xs text-gray-500 tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Cabinet de conseil en performance
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.08] tracking-tight mb-7"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Donnez à vos décisions{" "}
          <span className="text-[#3ddc84]">une base plus solide.</span>
        </h1>

        {/* Sous-titre */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Enosi Consulting accompagne les directions dans la structuration de leur pilotage,
          l&apos;exploitation de leurs données et l&apos;intégration de l&apos;IA là où elle crée
          une valeur concrète et mesurable.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center mb-24">
          <a
            href="/contact"
            className="px-9 py-3.5 bg-[#3ddc84] text-black font-semibold rounded-full hover:bg-[#2ab86e] transition-all duration-200 text-sm hover:shadow-[0_0_25px_rgba(61,220,132,0.2)]"
          >
            Échangeons sur vos enjeux
          </a>
          <a
            href="#offres"
            className="px-9 py-3.5 border border-[#2a2a2a] text-white font-semibold rounded-full hover:border-[#3ddc84]/30 hover:bg-[#111] transition-all duration-200 text-sm"
          >
            Découvrir nos offres
          </a>
        </div>

        {/* 3 piliers */}
        <div className="border-t border-[#1a1a1a] pt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            {
              label: "Pilotage de la performance",
              desc: "Structurer les indicateurs qui comptent. Rendre la performance lisible et utile.",
            },
            {
              label: "Data & IA pour la décision",
              desc: "Transformer les données en décisions concrètes, gains mesurables et capacités de projection.",
            },
            {
              label: "Efficacité et création de valeur",
              desc: "Améliorer les processus, réduire les frictions, piloter ce qui génère vraiment de la valeur.",
            },
          ].map((pilier) => (
            <div
              key={pilier.label}
              className="flex flex-col gap-2 pl-4 border-l border-[#1e1e1e] hover:border-[#3ddc84]/40 transition-colors duration-200"
            >
              <span className="text-sm font-semibold text-white">{pilier.label}</span>
              <p className="text-xs text-gray-600 leading-relaxed">{pilier.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
