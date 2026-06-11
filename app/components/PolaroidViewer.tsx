"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function PolaroidViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const W = canvas.parentElement?.offsetWidth || 240;
    const H = canvas.parentElement?.offsetHeight || 300;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H, false); // false = don't set CSS size (canvas fills via CSS)
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

    const rim = new THREE.PointLight(0xffd0a0, 1.0, 20);
    rim.position.set(0, -4, 5);
    scene.add(rim);

    let animId: number;

    const loader = new GLTFLoader();
    loader.load(
      "/polaroid.gltf",
      (gltf) => {
        const model = gltf.scene;

        // Auto-center and scale
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = 3.5 / maxDim;

        model.scale.setScalar(scaleFactor);
        model.position.set(
          -center.x * scaleFactor,
          -center.y * scaleFactor,
          -center.z * scaleFactor,
        );

        // Cream-white glossy plastic material
        model.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
              color: new THREE.Color(0xF5F0E8),
              roughness: 0.1,
              metalness: 0.0,
              reflectivity: 0.6,
              clearcoat: 0.4,
              clearcoatRoughness: 0.05,
            });
          }
        });

        scene.add(model);

        let t = 0;
        const baseY = model.position.y;
        const animate = () => {
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
      (err) => console.error("[PolaroidViewer] GLTF load error:", err)
    );

    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
