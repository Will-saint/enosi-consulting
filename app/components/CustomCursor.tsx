"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.left = mouseX + "px";
        dot.current.style.top = mouseY + "px";
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring.current) {
        ring.current.style.left = ringX + "px";
        ring.current.style.top = ringY + "px";
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animate();
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="fixed pointer-events-none z-[9999] w-1.5 h-1.5 rounded-full bg-[#3ddc84]"
        style={{transform: 'translate(-50%, -50%)'}}
      />
      <div
        ref={ring}
        className="fixed pointer-events-none z-[9998] w-8 h-8 rounded-full border border-[#3ddc84]"
        style={{transform: 'translate(-50%, -50%)', opacity: 0.4}}
      />
    </>
  );
}
