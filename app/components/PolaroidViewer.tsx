"use client";
import Image from "next/image";

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
        {/* Front */}
        <div style={{
          backfaceVisibility: "hidden",
          background: "#FAFAF7",
          borderRadius: "3px",
          padding: "10px 10px 44px",
        }}>
          <div style={{
            height: "140px",
            borderRadius: "1px",
            overflow: "hidden",
          }}>
            <Image
              src="/william.jpg"
              alt="William Saint-Dizier"
              width={140}
              height={140}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>
          <p style={{
            textAlign: "center", marginTop: "8px",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.52rem", letterSpacing: "0.2em",
            textTransform: "uppercase", color: "rgba(30,30,30,0.35)",
          }}>ENOSI · 2026</p>
        </div>
        {/* Back */}
        <div style={{
          position: "absolute", inset: 0,
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: "#F2EFE9", borderRadius: "3px",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "0.65rem", color: "rgba(30,30,30,0.2)",
            letterSpacing: "0.1em", transform: "rotate(-15deg)",
          }}>ENOSI CONSULTING</p>
        </div>
      </div>
      <style>{`
        @keyframes polaroidSpin {
          from { transform: rotateY(0deg) rotateX(6deg); }
          to   { transform: rotateY(360deg) rotateX(6deg); }
        }
      `}</style>
    </div>
  );
}
