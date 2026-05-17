---
title: 'V1e — Étoile 3D animée dans le Hero (Three.js + GSAP)'
type: 'feature'
created: '2026-05-01'
status: 'done'
baseline_commit: 'f09eccd2aead2b3f77dc44cff9e6de6441d429dc'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** La colonne droite du Hero affiche `ConvergenceViz` (SVG basique). Le design handoff fournit une étoile 3D à 8 branches avec animation Rubik-style (Three.js + GSAP) plus impactante visuellement.

**Approach:** Créer `StarField3D.tsx` (client component, useEffect Three.js init), le lazy-charger via `next/dynamic` avec `ssr: false`, remplacer `<ConvergenceViz />` dans Hero.tsx. Le canvas est transparent pour s'adapter au fond clair du Hero. Cleanup complet au unmount.

## Boundaries & Constraints

**Always:**
- `"use client"` + `useEffect` pour tout le code Three.js — jamais côté serveur
- Canvas transparent : `alpha: true`, `setClearColor(0x000000, 0)`
- `renderer.outputColorSpace = THREE.SRGBColorSpace` (API r152+, pas `outputEncoding`)
- Pas de `reflectivity` sur `MeshPhysicalMaterial` (retiré en r152)
- Rim light : `0x1a9e5c` (couleur verte du design system)
- Cleanup au unmount : `cancelAnimationFrame`, `timeline.kill()`, `renderer.dispose()`, `geom.dispose()`, `material.dispose()`, retirer le canvas du DOM
- `pixelRatio` capé à `1.5` (perf)
- Colonne droite Hero garde ses classes existantes : `hidden lg:flex items-center justify-center` + `height: 420px`
- `ConvergenceViz` retiré de Hero.tsx uniquement — le fichier reste (non supprimé)

**Never:**
- Charger Three.js/GSAP côté serveur (ssr: false obligatoire)
- Utiliser `outputEncoding` ou `THREE.sRGBEncoding` (API r128 supprimée)
- Modifier les props ou la logique du Hero en dehors du remplacement visuel droit

</frozen-after-approval>

## Code Map

- `app/components/StarField3D.tsx` — CRÉER : composant Three.js, animation Rubik-style
- `app/components/Hero.tsx:6-7` — ajouter import `dynamic`, remplacer `ConvergenceViz` import et JSX
- `package.json` / `package-lock.json` — `npm install three gsap`

## Tasks & Acceptance

**Execution:**
- [x] `npm install three gsap` -- ajouter les dépendances
- [x] `app/components/StarField3D.tsx` -- CRÉER : "use client", useEffect initialise scène Three.js r184 (8 branches bipyramide, 3 lumières dont rim #1a9e5c, MeshPhysicalMaterial dark graphite, animation GSAP Rubik-style du prototype v3, render loop, resize listener, cleanup complet au unmount)
- [x] `app/components/Hero.tsx` -- supprimer import ConvergenceViz, ajouter `import dynamic from "next/dynamic"`, créer `const StarField3D = dynamic(() => import("./StarField3D"), { ssr: false, loading: () => <div style={{width:"100%",height:"100%"}} /> })`, remplacer `<ConvergenceViz />` par `<StarField3D />`

**Acceptance Criteria:**
- Given la page home en desktop (lg+), when la section Hero est visible, then la colonne droite affiche l'étoile 3D animée sur fond transparent
- Given le canvas, when rendu, then le fond est transparent (le fond clair du Hero est visible derrière l'étoile)
- Given l'étoile, when ~9s de cycle, then les branches slidesout/flip/retour + rotation globale sont visibles
- Given la page, when resize, then l'étoile s'adapte sans erreur
- Given le composant, when unmount (navigation), then aucun requestAnimationFrame orphelin ni fuite mémoire
- Given `npm run build`, when le build se termine, then exit code 0, zéro erreur TypeScript

## Design Notes

Adaptations du prototype v3 pour le container Next.js (420px height, ~600px width) :
- `root.position.x` réduit : `aspect > 1.2 ? 0.4 : 0` (était 1.7 relatif au viewport entier)
- `renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))` au lieu de 2
- `renderer.setSize(container.clientWidth, container.clientHeight)` — dimensionné sur le container, pas le viewport
- `camera.aspect = container.clientWidth / container.clientHeight`
- Suppression `reflectivity: 0.4` — remplacé par rien (le clearcoat `0.85` assure la brillance)

## Verification

**Commands:**
- `export PATH="/c/Program Files/nodejs:$PATH" && npm run build` -- expected: exit code 0

## Suggested Review Order

**Entry point — lazy load + remplacement visuel**

- `dynamic()` ssr:false, fallback aria-hidden ; remplacement `<StarField3D />`
  [`Hero.tsx:3`](../../app/components/Hero.tsx#L3)

**Composant 3D — init et sécurité**

- Guard dimension zéro, `alive` flag runCycle, `rafRef` useRef pour RAF
  [`StarField3D.tsx:14`](../../app/components/StarField3D.tsx#L14)

- Scène, caméra, renderer (alpha, SRGBColorSpace, pixelRatio 1.5)
  [`StarField3D.tsx:22`](../../app/components/StarField3D.tsx#L22)

- Géométrie bipyramide + MeshPhysicalMaterial (sans transmission, sans reflectivity)
  [`StarField3D.tsx:47`](../../app/components/StarField3D.tsx#L47)

- Animation GSAP Rubik-style — runCycle récursif avec guard `alive`
  [`StarField3D.tsx:102`](../../app/components/StarField3D.tsx#L102)

**Cleanup — sans fuite**

- cancelAnimationFrame, kill timeline, killTweensOf, dispose, removeChild
  [`StarField3D.tsx:153`](../../app/components/StarField3D.tsx#L153)
