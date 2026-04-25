"use client";
import { useRef, useState } from "react";

export default function BeforeAfter({
  color,
  before,
  after,
}: {
  color: string;
  before: string[];
  after: string[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);

  const updatePct = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const raw = ((clientX - rect.left) / rect.width) * 100;
    setPct(Math.min(Math.max(raw, 5), 95));
  };

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    updatePct(e.clientX);
    const onMove = (ev: MouseEvent) => { if (dragging.current) updatePct(ev.clientX); };
    const onUp = () => { dragging.current = false; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    updatePct(e.touches[0].clientX);
    const onMove = (ev: TouchEvent) => updatePct(ev.touches[0].clientX);
    const onEnd = () => { window.removeEventListener("touchmove", onMove); window.removeEventListener("touchend", onEnd); };
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onEnd);
  };

  return (
    <div
      className="mb-10"
      style={{ border: "1px solid #1e1e1e", borderRadius: "1rem", overflow: "hidden", background: "#0d0d0d" }}
    >
      {/* Labels */}
      <div style={{ display: "flex", borderBottom: "1px solid #1e1e1e" }}>
        <div style={{ flex: 1, padding: "0.6rem 1.25rem", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
          Avant
        </div>
        <div style={{ flex: 1, padding: "0.6rem 1.25rem", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color, textAlign: "right" }}>
          Après
        </div>
      </div>

      {/* Slider area */}
      <div
        ref={containerRef}
        style={{ position: "relative", cursor: "col-resize", userSelect: "none", minHeight: "220px" }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        {/* Before panel (full width, always visible) */}
        <div style={{ position: "absolute", inset: 0, padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          {before.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
              <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem", lineHeight: 1.4, flexShrink: 0 }}>✗</span>
              <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* After panel (clipped) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            clipPath: `inset(0 0 0 ${pct}%)`,
            background: `${color}08`,
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          {after.map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
              <span style={{ color, fontSize: "0.8rem", lineHeight: 1.4, flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Divider handle */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${pct}%`,
            width: "2px",
            background: color,
            opacity: 0.6,
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 12px ${color}60`,
              fontSize: "10px",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            ⟺
          </div>
        </div>
      </div>
    </div>
  );
}
