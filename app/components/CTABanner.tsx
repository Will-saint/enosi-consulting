export default function CTABanner() {
  return (
    <section className="px-6 py-20 bg-[#F2F0EC] border-t border-b" style={{borderColor:'rgba(0,0,0,0.06)'}}>
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
          style={{color:'#0f0f0f', fontFamily: "'Playfair Display', Georgia, serif"}}
        >
          Prêt à structurer<br />votre pilotage&nbsp;?
        </h2>
        <p className="mb-10 text-base leading-relaxed" style={{color:'rgba(30,30,30,0.5)'}}>
          Un premier échange de 30 minutes pour comprendre vos enjeux.<br className="hidden md:block" />
          Sans engagement.
        </p>
        <a
          href="/contact"
          className="inline-block px-12 py-4 text-white font-semibold rounded-full transition-all duration-200 text-sm"
          style={{background:'linear-gradient(135deg,#1a9e5c,#157a47)', boxShadow:'0 4px 20px rgba(26,158,92,0.25)'}}
        >
          Échangeons
        </a>
      </div>
    </section>
  );
}
