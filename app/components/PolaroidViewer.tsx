"use client";

export default function PolaroidViewer() {
  return (
    <iframe
      src="/polaroid-viewer.html"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        display: "block",
        background: "transparent",
      }}
      title="Appareil photo 3D"
    />
  );
}
