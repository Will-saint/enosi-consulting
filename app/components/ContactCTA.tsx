export default function ContactCTA() {
  return (
    <section className="py-28 px-6 text-center relative overflow-hidden"
             style={{background: '#080810'}}>
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute',
          bottom: '-20%', left: '50%',
          transform: 'translateX(-50%)',
          width: '600px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(61,220,132,0.08), transparent 70%)',
          filter: 'blur(40px)'
        }} />
      </div>
      <div className="relative max-w-2xl mx-auto">
        <p className="text-xs text-gray-600 uppercase tracking-widest mb-6">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"
            style={{fontFamily: "'Playfair Display', serif"}}>
          Parlons de vos enjeux.
        </h2>
        <p className="mb-10 text-base leading-relaxed max-w-md mx-auto"
           style={{color: 'rgba(255,255,255,0.4)'}}>
          Un premier échange de 30 minutes, sans engagement,
          pour voir si nous pouvons vous aider.
        </p>
        <a href="/contact"
           className="inline-block px-12 py-4 rounded-full text-sm font-semibold text-black transition-all duration-300"
           style={{
             background: 'linear-gradient(135deg, #3ddc84, #2ab86e)',
             boxShadow: '0 0 30px rgba(61,220,132,0.2)',
           }}>
          Prendre contact
        </a>
      </div>
    </section>
  );
}
