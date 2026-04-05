export default function ContactCTA() {
  return (
    <section style={{
      background:'#0e0e10', padding:'7rem 1.5rem',
      textAlign:'center', position:'relative', overflow:'hidden'
    }}>
      <div style={{
        position:'absolute', bottom:'-20%', left:'50%',
        transform:'translateX(-50%)',
        width:'600px', height:'300px',
        background:'radial-gradient(ellipse, rgba(61,220,132,0.07), transparent 70%)',
        filter:'blur(40px)', pointerEvents:'none'
      }}/>
      <div style={{position:'relative', maxWidth:'36rem', margin:'0 auto'}}>
        <p style={{
          fontSize:'0.65rem', letterSpacing:'0.2em',
          textTransform:'uppercase',
          color:'rgba(198,197,213,0.25)', marginBottom:'1.5rem'
        }}>Contact</p>
        <h2 style={{
          fontFamily:"'Playfair Display', serif",
          fontSize:'clamp(2.5rem,5vw,4rem)',
          fontWeight:700, color:'#ffffff',
          marginBottom:'1.25rem', lineHeight:1.1
        }}>Parlons de vos enjeux.</h2>
        <p style={{
          color:'rgba(198,197,213,0.4)',
          fontSize:'1rem', lineHeight:1.7,
          marginBottom:'2.5rem'
        }}>
          Un premier échange de 30 minutes, sans engagement.
        </p>
        <a href="/contact" style={{
          display:'inline-block',
          padding:'1rem 3rem',
          borderRadius:'2rem',
          background:'linear-gradient(135deg, #3ddc84, #2ab86e)',
          color:'#000', fontWeight:700,
          fontSize:'0.85rem', textDecoration:'none',
          boxShadow:'0 0 40px rgba(61,220,132,0.2)',
          letterSpacing:'0.02em'
        }}>Prendre contact</a>
      </div>
    </section>
  );
}
