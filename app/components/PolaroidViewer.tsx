"use client";

export default function PolaroidViewer() {
  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex", alignItems: "center", justifyContent: "center",
      perspective: "900px",
    }}>
      <div style={{
        width: "160px",
        animation: "polaroidSpin 9s linear infinite",
        transformStyle: "preserve-3d",
        filter: "drop-shadow(0 24px 40px rgba(0,0,0,0.55))",
      }}>
        {/* Front face */}
        <div style={{
          backfaceVisibility: "hidden",
          background: "#FAFAF7",
          borderRadius: "3px",
          padding: "10px 10px 44px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
        }}>
          {/* Photo area */}
          <div style={{
            height: "140px",
            background: "linear-gradient(140deg, #0d0d0d 0%, #1a1a1a 50%, #111 100%)",
            borderRadius: "1px",
            display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden",
            position: "relative",
          }}>
            {/* Monogram */}
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "3rem",
              color: "rgba(255,255,255,0.15)",
              letterSpacing: "-0.02em",
              userSelect: "none",
            }}>
              W
            </span>
            {/* Green accent line */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: "2px",
              background: "linear-gradient(90deg, transparent, #1a9e5c, transparent)",
            }} />
          </div>
          {/* Caption strip */}
          <div style={{
            textAlign: "center",
            marginTop: "8px",
          }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.52rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(30,30,30,0.35)",
              margin: 0,
            }}>
              ENOSI · 2026
            </p>
          </div>
        </div>

        {/* Back face */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: "#F2EFE9",
          borderRadius: "3px",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.65rem",
            color: "rgba(30,30,30,0.2)",
            letterSpacing: "0.1em",
            transform: "rotate(-15deg)",
          }}>
            ENOSI CONSULTING
          </p>
        </div>
      </div>

      <style>{`
        @keyframes polaroidSpin {
          0%   { transform: rotateY(0deg) rotateX(6deg); }
          100% { transform: rotateY(360deg) rotateX(6deg); }
        }
      `}</style>
    </div>
  );
}
