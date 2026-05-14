import { CALENDLY_URL } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section style={{
      background:'#F2F0EC', padding:'7rem 1.5rem',
      textAlign:'center', position:'relative', overflow:'hidden'
    }}>
      <div style={{
        position:'absolute', bottom:'-20%', left:'50%',
        transform:'translateX(-50%)',
        width:'600px', height:'300px',
        background:'radial-gradient(ellipse, rgba(26,158,92,0.08), transparent 70%)',
        filter:'blur(40px)', pointerEvents:'none'
      }}/>
      <div style={{position:'relative', maxWidth:'36rem', margin:'0 auto'}}>
        <p style={{
          fontSize:'0.65rem', letterSpacing:'0.2em',
          textTransform:'uppercase',
          color:'rgba(30,30,30,0.35)', marginBottom:'1.5rem'
        }}>Contact</p>
        <h2 style={{
          fontFamily:"'Playfair Display', serif",
          fontSize:'clamp(2.5rem,5vw,4rem)',
          fontWeight:700, color:'#0f0f0f',
          marginBottom:'1.25rem', lineHeight:1.1
        }}>Prêt à transformer vos données en décisions ?</h2>
        <p style={{
          color:'rgba(30,30,30,0.5)',
          fontSize:'1rem', lineHeight:1.7,
          marginBottom:'2.5rem'
        }}>
          Un diagnostic gratuit de 30 minutes, sans engagement.<br />
          On identifie vos vraies priorités ensemble.
        </p>
        <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
          <a href="/contact" style={{
            display:'inline-block',
            padding:'1rem 3rem',
            borderRadius:'2rem',
            background:'linear-gradient(135deg, #1a9e5c, #157a47)',
            color:'#fff', fontWeight:700,
            fontSize:'0.85rem', textDecoration:'none',
            boxShadow:'0 4px 24px rgba(26,158,92,0.25)',
            letterSpacing:'0.02em'
          }}>Réserver mon diagnostic gratuit</a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display:'inline-block',
              padding:'1rem 2.5rem',
              borderRadius:'2rem',
              border:'1.5px solid #1a9e5c',
              color:'#1a9e5c', fontWeight:700,
              fontSize:'0.85rem', textDecoration:'none',
              letterSpacing:'0.02em',
            }}
          >Réserver 30 minutes →</a>
        </div>
      </div>
    </section>
  );
}
