"use client";
import dynamic from "next/dynamic";

const PolaroidViewer = dynamic(() => import("./PolaroidViewer"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontSize: "0.7rem", color: "rgba(30,30,30,0.3)" }}>…</span>
    </div>
  ),
});

export default function PolaroidWrapper() {
  return <PolaroidViewer />;
}
