"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

export default function StarField3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;

    let alive = true;

    // --- Scene / Camera / Renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, w / h, 0.1, 100);
    camera.position.set(0, 0, 6.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.95;
    container.appendChild(renderer.domElement);

    // --- Lights (thème clair) ---
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(-3.5, 4, 4);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xd4ede0, 0.5);
    fill.position.set(4, 0, 3);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xa8d5bc, 0.7);
    rim.position.set(2, -1, -3);
    scene.add(rim);

    const ambient = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambient);

    // --- Branch geometry (bipyramid wedge) ---
    function makeBranchGeometry(innerR: number, outerR: number, depth: number) {
      const a = Math.PI / 8;
      const vL = [innerR * Math.cos(-a), innerR * Math.sin(-a), 0];
      const vR = [innerR * Math.cos(a), innerR * Math.sin(a), 0];
      const tip = [outerR, 0, 0];
      const top = [0, 0, depth];
      const bot = [0, 0, -depth];

      const verts: number[] = [];
      const push = (...pts: number[][]) => pts.forEach(p => verts.push(p[0], p[1], p[2]));
      push(top, vL, tip);
      push(top, tip, vR);
      push(bot, tip, vL);
      push(bot, vR, tip);
      push(top, bot, vL);
      push(top, vR, bot);

      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
      g.computeVertexNormals();
      return g;
    }

    const geom = makeBranchGeometry(0.42, 1.25, 0.50);

    const material = new THREE.MeshPhysicalMaterial({
      color: 0xe8ede9,
      emissive: new THREE.Color(0x2a6040),
      emissiveIntensity: 0.12,
      metalness: 0.0,
      roughness: 0.22,
      ior: 1.6,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      flatShading: true,
    });

    // --- Hierarchy ---
    const root = new THREE.Group();
    scene.add(root);

    root.scale.setScalar(0.76);

    function placeRoot() {
      if (!container || !container.isConnected) return;
      const aspect = container.clientWidth / (container.clientHeight || 1);
      root.position.x = aspect > 1.2 ? 0.2 : aspect > 0.85 ? 0.1 : 0;
      root.position.y = 0.0;
      root.rotation.x = -0.12;
    }
    placeRoot();

    const group = new THREE.Group();
    root.add(group);

    const meshes: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const pivot = new THREE.Group();
      pivot.rotation.z = (i * Math.PI) / 4;
      group.add(pivot);
      const m = new THREE.Mesh(geom, material);
      pivot.add(m);
      meshes.push(m);
    }

    // --- Rubik-style animation ---
    const PI = Math.PI;

    type Move = { rx: number; ry: number; out: number };

    function pickMove(): Move {
      const moves: Array<() => Move> = [
        () => ({ rx: PI * 2,  ry: 0,   out: 0    }),
        () => ({ rx: -PI * 2, ry: 0,   out: 0    }),
        () => ({ rx: 0,       ry: PI,  out: 0.35 }),
        () => ({ rx: 0,       ry: -PI, out: 0.35 }),
        () => ({ rx: PI,      ry: 0,   out: 0.4  }),
      ];
      return moves[Math.floor(Math.random() * moves.length)]();
    }

    let cycleTimeline: gsap.core.Timeline | null = null;

    function runCycle() {
      if (!alive) return;
      cycleTimeline = gsap.timeline({ onComplete: runCycle });
      const tl = cycleTimeline;

      const seqA = [0, 2, 4, 6].sort(() => Math.random() - 0.5);
      seqA.forEach((idx, k) => {
        const m = meshes[idx];
        const move = pickMove();
        const t = 0.4 + k * 0.08;
        tl.to(m.position, { x: move.out || 0.4, duration: 0.55, ease: "power2.out" }, t);
        tl.to(m.rotation, { x: "+=" + move.rx, y: "+=" + move.ry, duration: 1.0, ease: "power2.inOut" }, t);
        tl.to(m.position, { x: 0, duration: 0.6, ease: "power2.in" }, t + 0.7);
      });

      const seqB = [1, 3, 5, 7].sort(() => Math.random() - 0.5);
      seqB.forEach((idx, k) => {
        const m = meshes[idx];
        const move = pickMove();
        const t = 2.0 + k * 0.08;
        tl.to(m.position, { x: move.out || 0.4, duration: 0.55, ease: "power2.out" }, t);
        tl.to(m.rotation, { x: "+=" + move.rx, y: "+=" + move.ry, duration: 1.0, ease: "power2.inOut" }, t);
        tl.to(m.position, { x: 0, duration: 0.6, ease: "power2.in" }, t + 0.7);
      });

      for (let i = 0; i < 8; i++) {
        const dir = i % 2 === 0 ? 1 : -1;
        tl.to(meshes[i].rotation, { x: "+=" + PI * 2 * dir, duration: 1.1, ease: "power2.inOut" }, 3.7 + i * 0.06);
      }

      tl.to(group.rotation, { y: group.rotation.y + PI * 0.35, duration: 2.4, ease: "sine.inOut" }, 5.6);
      tl.to({}, { duration: 1.0 }, 8.0);
    }
    runCycle();

    // --- Render loop ---
    function render() {
      rafRef.current = requestAnimationFrame(render);
      root.rotation.y = Math.sin(performance.now() * 0.00018) * 0.1;
      renderer.render(scene, camera);
    }
    render();

    // --- Resize ---
    function onResize() {
      if (!container || !container.isConnected) return;
      const cw = container.clientWidth;
      const ch = container.clientHeight;
      if (!cw || !ch) return;
      camera.aspect = cw / ch;
      camera.updateProjectionMatrix();
      renderer.setSize(cw, ch);
      placeRoot();
    }
    window.addEventListener("resize", onResize, { passive: true });

    // --- Cleanup ---
    return () => {
      alive = false;
      cancelAnimationFrame(rafRef.current);
      cycleTimeline?.kill();
      gsap.killTweensOf([
        ...meshes.map(m => m.position),
        ...meshes.map(m => m.rotation),
        group.rotation,
      ]);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geom.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
