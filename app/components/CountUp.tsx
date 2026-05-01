"use client";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [val, setVal] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasStarted) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let frame: number;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * end));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}
