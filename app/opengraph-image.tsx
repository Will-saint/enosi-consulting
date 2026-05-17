import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Enosi Consulting — Performance, Data & IA';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0c0c0c',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 96px',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top accent line */}
        <div style={{
          position: 'absolute',
          top: 0, left: 96,
          width: 80, height: 3,
          background: '#1a9e5c',
        }} />

        {/* Subtle grid texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        {/* Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 40,
          padding: '6px 16px',
          borderRadius: 24,
          border: '1px solid rgba(26,158,92,0.3)',
          background: 'rgba(26,158,92,0.08)',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: 3, background: '#1a9e5c' }} />
          <span style={{ fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', color: '#1a9e5c' }}>
            Cabinet de conseil
          </span>
        </div>

        {/* Title */}
        <div style={{
          fontSize: 80,
          fontWeight: 800,
          color: '#FFFFFF',
          lineHeight: 1.0,
          letterSpacing: '-2px',
          marginBottom: 28,
        }}>
          Enosi{' '}
          <span style={{ color: '#1a9e5c' }}>Consulting</span>
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: 24,
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.5,
          maxWidth: 620,
          marginBottom: 56,
        }}>
          Vos données savent déjà la réponse.
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['Performance', 'Data', 'IA'].map((label) => (
            <div key={label} style={{
              padding: '8px 20px',
              borderRadius: 20,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.04)',
              fontSize: 14,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: 1,
            }}>
              {label}
            </div>
          ))}
        </div>

        {/* Domain bottom-right */}
        <div style={{
          position: 'absolute',
          bottom: 48, right: 96,
          fontSize: 13,
          color: 'rgba(255,255,255,0.2)',
          letterSpacing: 2,
        }}>
          enosi-consulting.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
