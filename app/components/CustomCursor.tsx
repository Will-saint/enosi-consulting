"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    let mx=0, my=0, rx=0, ry=0;
    const move = (e:MouseEvent) => {
      mx=e.clientX; my=e.clientY;
      if(dot.current){
        dot.current.style.left=mx+"px";
        dot.current.style.top=my+"px";
      }
    };
    const animate = ()=>{
      rx+=(mx-rx)*0.1; ry+=(my-ry)*0.1;
      if(ring.current){
        ring.current.style.left=rx+"px";
        ring.current.style.top=ry+"px";
      }
      requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove",move);
    animate();
    return ()=>window.removeEventListener("mousemove",move);
  },[]);

  return (
    <>
      <div ref={dot} style={{
        position:'fixed', pointerEvents:'none', zIndex:9999,
        width:'6px', height:'6px', borderRadius:'50%',
        background:'#3ddc84',
        transform:'translate(-50%,-50%)',
        transition:'transform 0.1s'
      }}/>
      <div ref={ring} style={{
        position:'fixed', pointerEvents:'none', zIndex:9998,
        width:'28px', height:'28px', borderRadius:'50%',
        border:'1px solid rgba(61,220,132,0.35)',
        transform:'translate(-50%,-50%)'
      }}/>
    </>
  );
}
