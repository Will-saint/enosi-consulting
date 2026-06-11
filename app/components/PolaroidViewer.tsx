"use client";
import type * as THREE from "three";
import { useEffect, useRef } from "react";

export default function PolaroidViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId: number;
    let disposed = false;

    const init = async (W: number, H: number) => {
      if (disposed) return;

      // Dynamic imports — fully client-side, no SSR risk
      const THREE = await import("three");
      const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js");

      if (disposed) return;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H, false);
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 200);
      camera.position.set(0, 0, 6);

      scene.add(new THREE.AmbientLight(0xffffff, 1.5));

      const key = new THREE.DirectionalLight(0xfff0d8, 3.0);
      key.position.set(5, 8, 6);
      scene.add(key);

      const fill = new THREE.DirectionalLight(0xd0e8ff, 1.2);
      fill.position.set(-5, 2, -4);
      scene.add(fill);

      const loader = new GLTFLoader();
      loader.load(
        "/polaroid.gltf",
        (gltf) => {
          if (disposed) return;

          const model = gltf.scene;

          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const sf = 3.5 / maxDim;

          model.scale.setScalar(sf);
          model.position.set(-center.x * sf, -center.y * sf, -center.z * sf);

          model.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                color: new THREE.Color(0xF5F0E8),
                roughness: 0.1,
                metalness: 0,
                clearcoat: 0.4,
                clearcoatRoughness: 0.05,
              });
            }
          });

          scene.add(model);

          const baseY = model.position.y;
          let t = 0;
          const animate = () => {
            if (disposed) return;
            animId = requestAnimationFrame(animate);
            t += 0.012;
            model.rotation.y += 0.012;
            model.rotation.x = Math.sin(t * 0.35) * 0.07;
            model.rotation.z = Math.sin(t * 0.28) * 0.035;
            model.position.y = baseY + Math.sin(t * 0.45) * 0.1;
            renderer.render(scene, camera);
          };
          animate();
        },
        undefined,
        (err) => console.error("[Polaroid] load error:", err)
      );

      return () => {
        renderer.dispose();
      };
    };

    // Use ResizeObserver to wait for real dimensions
    let cleanupRenderer: (() => void) | undefined;
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (width > 0 && height > 0) {
        observer.disconnect();
        init(Math.round(width), Math.round(height)).then((c) => {
          cleanupRenderer = c;
        });
      }
    });

    const parent = canvas.parentElement;
    if (parent) {
      observer.observe(parent);
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(animId);
      observer.disconnect();
      cleanupRenderer?.();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
