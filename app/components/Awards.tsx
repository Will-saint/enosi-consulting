export default function Awards() {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '6rem 1.5rem',
      borderTop: '1px solid rgba(0,0,0,0.06)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div style={{maxWidth: '80rem', margin: '0 auto'}}>
        <p style={{
          fontSize: '0.65rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', textAlign: 'center',
          color: 'rgba(30,30,30,0.35)', marginBottom: '2.5rem'
        }}>
          Notre positionnement
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {[
            {
              icone: '◎',
              label: 'Finance · Performance · Data · IA',
              titre: 'À l\'intersection de quatre disciplines',
              texte: 'Enosi Consulting intervient là où la finance, la performance, la data et l\'IA se croisent. Pas pour faire de la techno. Pour générer un impact décisionnel concret.',
            },
            {
              icone: '◉',
              label: 'Exécution · Clarté · Valeur',
              titre: 'Du diagnostic à l\'outil opérationnel',
              texte: 'Nous ne livrons pas des recommandations. Nous structurons, outillons et transférons — pour que les équipes puissent décider et agir plus vite, avec plus de clarté.',
            },
          ].map((c) => (
            <div key={c.titre} style={{
              background: '#F2F0EC',
              borderRadius: '1.5rem',
              padding: '2rem 2.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1.5rem',
            }}>
              <div style={{
                width: '3rem', height: '3rem',
                background: 'rgba(26,158,92,0.08)',
                borderRadius: '0.75rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem', color: '#1a9e5c', fontWeight: 700,
                flexShrink: 0,
              }}>{c.icone}</div>
              <div>
                <p style={{
                  fontSize: '0.7rem', fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  color: '#1a9e5c', marginBottom: '0.5rem'
                }}>{c.label}</p>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.1rem', fontWeight: 700,
                  color: '#0f0f0f', marginBottom: '0.75rem'
                }}>{c.titre}</h3>
                <p style={{
                  fontSize: '0.85rem', lineHeight: 1.7,
                  color: 'rgba(30,30,30,0.5)'
                }}>{c.texte}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{
          textAlign: 'center', fontSize: '0.75rem',
          color: 'rgba(30,30,30,0.3)'
        }}>
          Cabinet fondé par William Saint-Dizier — consultant en performance, data et IA.
        </p>
      </div>
    </section>
  );
}
