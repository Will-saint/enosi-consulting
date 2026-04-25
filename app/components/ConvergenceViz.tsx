"use client";
import { useEffect, useRef, useState } from "react";

const NODES = [
  { id: "finance", label: "Finance", x: 80, y: 60, color: "#1a9e5c" },
  { id: "data", label: "Data", x: 220, y: 180, color: "#4f46e5" },
  { id: "ia", label: "IA", x: 80, y: 300, color: "#d97706" },
];
const CENTER = { x: 220, y: 60 + (300 - 60) / 2 }; // x=220, y=180

const PATHS = NODES.map((n) => `M ${n.x} ${n.y} Q ${(n.x + CENTER.x) / 2} ${(n.y + CENTER.y) / 2} ${CENTER.x} ${CENTER.y}`);

function Particle({ pathD, color, delay }: { pathD: string; color: string; delay: number }) {
  return (
    <circle r="3" fill={color} opacity="0.85">
      <animateMotion dur="2.2s" begin={`${delay}s`} repeatCount="indefinite" path={pathD} />
      <animate attributeName="opacity" values="0;0.9;0" dur="2.2s" begin={`${delay}s`} repeatCount="indefinite" />
    </circle>
  );
}

export default function ConvergenceViz() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setPulse((p) => !p), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <svg
      viewBox="0 0 300 360"
      width="100%"
      height="100%"
      style={{ maxHeight: "380px" }}
      aria-hidden="true"
    >
      {/* Concentric circles background */}
      {[90, 65, 40].map((r, i) => (
        <circle
          key={r}
          cx={CENTER.x}
          cy={CENTER.y}
          r={r}
          fill="none"
          stroke="rgba(26,158,92,0.07)"
          strokeWidth="1"
          opacity={1 - i * 0.2}
        />
      ))}

      {/* Flow paths */}
      {PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={NODES[i].color}
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.3"
        />
      ))}

      {/* Particles */}
      {NODES.map((n, i) => (
        <Particle key={n.id} pathD={PATHS[i]} color={n.color} delay={i * 0.7} />
      ))}

      {/* Center node — pulsing */}
      <circle
        cx={CENTER.x}
        cy={CENTER.y}
        r={pulse ? 28 : 24}
        fill="rgba(26,158,92,0.12)"
        stroke="rgba(26,158,92,0.35)"
        strokeWidth="1.5"
        style={{ transition: "r 0.7s ease" }}
      />
      <circle cx={CENTER.x} cy={CENTER.y} r="16" fill="#1a9e5c" opacity="0.9" />
      <text
        x={CENTER.x}
        y={CENTER.y + 18}
        textAnchor="middle"
        fill="rgba(26,158,92,0.6)"
        fontSize="8"
        letterSpacing="0.08em"
        fontFamily="monospace"
      >
        DÉCISION
      </text>

      {/* Peripheral nodes */}
      {NODES.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="22" fill={`${n.color}18`} stroke={`${n.color}50`} strokeWidth="1" />
          <circle cx={n.x} cy={n.y} r="12" fill={n.color} opacity="0.8" />
          <text
            x={n.x}
            y={n.y + 32}
            textAnchor="middle"
            fill={n.color}
            fontSize="9"
            letterSpacing="0.05em"
            fontFamily="monospace"
            opacity="0.7"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
