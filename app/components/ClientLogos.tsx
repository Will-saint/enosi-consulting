"use client";

const clients = [
  {
    wordmark: "LVMH",
    sub: "Moët Hennessy",
    style: { fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', letterSpacing: '0.18em' },
  },
  {
    wordmark: "BOURBON",
    sub: "Voyages",
    style: { fontFamily: "DM Sans, sans-serif", fontSize: '0.9rem', letterSpacing: '0.22em' },
  },
  {
    wordmark: "APPART'CITY",
    sub: "Groupe hôtelier",
    style: { fontFamily: "DM Sans, sans-serif", fontSize: '0.82rem', letterSpacing: '0.12em' },
  },
];

export default function ClientLogos() {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '3rem 1.5rem',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '3rem',
          flexWrap: 'wrap',
        }}>
          <span style={{
            fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'rgba(30,30,30,0.28)', whiteSpace: 'nowrap',
          }}>
            Ils nous font confiance
          </span>
          <div style={{ width: '1px', height: '24px', background: 'rgba(0,0,0,0.08)' }} />
          {clients.map((c) => (
            <div key={c.wordmark} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
              opacity: 0.38,
              transition: 'opacity 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.65'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0.38'}>
              <span style={{
                fontWeight: 700,
                color: '#0f0f0f',
                ...c.style,
              }}>
                {c.wordmark}
              </span>
              {c.sub && (
                <span style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: 'rgba(30,30,30,0.5)', textTransform: 'uppercase' }}>
                  {c.sub}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
