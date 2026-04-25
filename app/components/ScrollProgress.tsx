"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0,
      height: "2px", zIndex: 9999,
      background: "rgba(0,0,0,0.04)"
    }}>
      <div style={{
        height: "100%",
        width: `${progress}%`,
        background: "linear-gradient(to right, #1a9e5c, #4f46e5)",
        transition: "width 0.1s linear",
      }} />
    </div>
  );
}
