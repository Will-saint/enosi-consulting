import { CALENDLY_URL } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section style={{
      background:'linear-gradient(135deg, #0d3b24 0%, #157a47 65%, #1a9e5c 100%)',
      padding:'7.5rem 1.5rem',
      textAlign:'center', position:'relative', overflow:'hidden'
    }}>
      {/* Halo lumineux */}
      <div style={{
        position:'absolute', top:'-30%', left:'50%',
        transform:'translateX(-50%)',
        width:'700px', height:'400px',
        background:'radial-gradient(ellipse, rgba(255,255,255,0.12), transparent 70%)',
        filter:'blur(50px)', pointerEvents:'none'
      }}/>
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize:'28px 28px',
      }}/>
      <div style={{position:'relative', maxWidth:'42rem', margin:'0 auto'}}>
        <p style={{
          fontSize:'0.65rem', letterSpacing:'0.22em',
          textTransform:'uppercase',
          color:'rgba(255,255,255,0.55)', marginBottom:'1.5rem'
        }}>Contact</p>
        <h2 style={{
          fontFamily:"'Playfair Display', serif",
          fontSize:'clamp(2.6rem,5.5vw,4.4rem)',
          fontWeight:800, color:'#ffffff',
          marginBottom:'1.25rem', lineHeight:1.05,
          letterSpacing:'-0.02em',
        }}>Prêt à transformer vos données en décisions ?</h2>
        <p style={{
          color:'rgba(255,255,255,0.75)',
          fontSize:'1.05rem', lineHeight:1.7,
          marginBottom:'2.75rem'
        }}>
          Un diagnostic gratuit de 3 minutes, sans engagement.<br />
          On identifie vos vraies priorités ensemble.
        </p>
        <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
          <a href="/diagnostic" style={{
            display:'inline-block',
            padding:'1.1rem 3.2rem',
            borderRadius:'2rem',
            background:'#ffffff',
            color:'#0d3b24', fontWeight:800,
            fontSize:'0.95rem', textDecoration:'none',
            boxShadow:'0 6px 32px rgba(0,0,0,0.25)',
            letterSpacing:'0.01em'
          }}>Mon diagnostic gratuit</a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:'inline-block',
              padding:'1.1rem 2.6rem',
              borderRadius:'2rem',
              border:'1.5px solid rgba(255,255,255,0.55)',
              color:'#ffffff', fontWeight:700,
              fontSize:'0.9rem', textDecoration:'none',
              letterSpacing:'0.01em',
            }}
          >Réserver 30 minutes →</a>
        </div>
      </div>
    </section>
  );
}
