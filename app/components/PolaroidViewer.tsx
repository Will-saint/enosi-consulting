"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function PolaroidViewer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const W = container.clientWidth;
    const H = container.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 200);
    camera.position.set(0, 0, 6);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xfff5e8, 2.5);
    key.position.set(4, 6, 5);
    key.castShadow = true;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xe8f0ff, 1.0);
    fill.position.set(-4, 2, -3);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffffff, 0.8, 20);
    rim.position.set(0, -3, 4);
    scene.add(rim);

    let animId: number;

    const loader = new GLTFLoader();
    loader.load("/polaroid.gltf", (gltf) => {
      const model = gltf.scene;

      // Center + scale model
      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 3.5 / maxDim;
      model.position.sub(center.multiplyScalar(scale));
      model.scale.setScalar(scale);

      // Apply cream-white polaroid material
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          mesh.material = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(0xF7F3ED),
            roughness: 0.08,
            metalness: 0.0,
            reflectivity: 0.5,
            clearcoat: 0.3,
            clearcoatRoughness: 0.1,
          });
        }
      });

      scene.add(model);

      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.01;
        model.rotation.y += 0.012;
        // Subtle tilt oscillation
        model.rotation.x = Math.sin(t * 0.4) * 0.08;
        model.rotation.z = Math.sin(t * 0.3) * 0.04;
        // Float up/down
        model.position.y = Math.sin(t * 0.5) * 0.08;
        renderer.render(scene, camera);
      };
      animate();
    });

    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", cursor: "default" }}
    />
  );
}
