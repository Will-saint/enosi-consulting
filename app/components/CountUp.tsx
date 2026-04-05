"use client";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  end, suffix="", duration=2000
}: {end:number; suffix?:string; duration?:number}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const t0 = Date.now();
        const tick = () => {
          const p = Math.min((Date.now()-t0)/duration, 1);
          const ease = 1-Math.pow(1-p,3);
          setVal(Math.floor(ease*end));
          if (p<1) requestAnimationFrame(tick);
          else setVal(end);
        };
        requestAnimationFrame(tick);
      }
    }, {threshold:0.5});
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}
