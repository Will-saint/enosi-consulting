export default function CTABanner() {
  return (
    <section className="px-6 py-20 bg-[#0d0d0d] border-t border-[#3ddc84]/15 border-b border-[#1e1e1e]">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Prêt à structurer<br />votre pilotage&nbsp;?
        </h2>
        <p className="text-gray-500 mb-10 text-base leading-relaxed">
          Un premier échange de 30 minutes pour comprendre vos enjeux.<br className="hidden md:block" />
          Sans engagement.
        </p>
        <a
          href="/contact"
          className="inline-block px-12 py-4 bg-[#3ddc84] text-black font-semibold rounded-full hover:bg-[#2ab86e] transition-all duration-200 text-sm hover:shadow-[0_0_40px_rgba(61,220,132,0.3)]"
        >
          Échangeons
        </a>
      </div>
    </section>
  );
}
