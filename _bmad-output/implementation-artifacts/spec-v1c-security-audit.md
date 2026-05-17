---
title: 'V1c — Security headers, npm audit fix, vercel.json, env.example'
type: 'chore'
created: '2026-04-29'
status: 'done'
baseline_commit: 'e2e80b92bfdec7be7c34bc540eba078959a0d58b'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Le site n'expose aucun header de sécurité HTTP, `next` est en version HIGH (DoS Server Components < 16.2.3), `vercel.json` n'existe pas, les source maps sont activées en prod, et `.env.example` manque l'entrée `CALENDLY_URL`.

**Approach:** Ajouter les headers de sécurité dans `next.config.ts` (source principale) et `vercel.json` (fallback Vercel), désactiver les source maps en production, upgrader `next@16.2.4` pour corriger le HIGH, différer la chaîne uuid/svix/resend (breaking change), et compléter `.env.example`.

## Boundaries & Constraints

**Always:**
- TypeScript strict — `next.config.ts` reste typé avec `NextConfig`
- CSP doit autoriser : `'self'`, `'unsafe-inline'` (requis Next.js SSR/hydration), Google Fonts (`fonts.googleapis.com` + `fonts.gstatic.com`), Vercel scripts (`va.vercel-scripts.com`)
- Headers identiques dans `next.config.ts` et `vercel.json` pour cohérence
- `npm install next@16.2.4` uniquement — ne pas toucher resend/svix/uuid

**Ask First:** Rien

**Never:**
- Upgrader `resend` dans cette session (breaking change, investigation séparée)
- Activer `productionBrowserSourceMaps: true`
- Supprimer `.env.example` ou le re-créer — seulement ajouter la ligne manquante

</frozen-after-approval>

## Code Map

- `next.config.ts` — Config Next.js vide à remplir avec headers + productionBrowserSourceMaps
- `vercel.json` — Nouveau fichier (n'existe pas)
- `.env.example` — Ajouter ligne `CALENDLY_URL`
- `.gitignore` — Vérification uniquement (`.env*` + `!.env.example` déjà présents)
- `package.json` / `package-lock.json` — Mis à jour par npm install next@16.2.4

## Tasks & Acceptance

**Execution:**
- [x] `next.config.ts` -- ajouter `productionBrowserSourceMaps: false` + `async headers()` retournant les 6 headers sur `source: "/(.*)"` : CSP (self + unsafe-inline + Google Fonts + va.vercel-scripts.com), X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin, Permissions-Policy camera/microphone/geolocation vides, HSTS max-age=31536000
- [x] `vercel.json` -- CRÉER avec les mêmes 6 headers sur `"source": "/(.*)"` (JSON pur, pas de TypeScript)
- [x] `.env.example` -- ajouter `CALENDLY_URL=https://calendly.com/ton-lien` après la ligne RESEND_API_KEY
- [x] `npm install next@16.2.4` -- corriger la HIGH + postcss MODERATE
- [x] `_bmad-output/implementation-artifacts/deferred-work.md` -- documenter la chaîne uuid/svix/resend MODERATE (4 moderate restantes après fix next)

**Acceptance Criteria:**
- Given le site en production, when un navigateur reçoit n'importe quelle page, then les headers `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`, `Content-Security-Policy` sont présents
- Given `vercel.json`, when Vercel sert la réponse, then les mêmes headers sont injectés en fallback si next.config.ts ne les émet pas
- Given `npm audit`, when exécuté après fix, then zéro HIGH ou CRITICAL (moderate restantes documentées en deferred)
- Given `.env.example`, when ouvert, then les deux variables `RESEND_API_KEY` et `CALENDLY_URL` sont présentes
- Given `npm run build`, when le build se termine, then exit code 0, zéro erreur TypeScript

## Verification

**Commands:**
- `export PATH="/c/Program Files/nodejs:$PATH" && npm audit` -- expected: 0 high, 0 critical
- `export PATH="/c/Program Files/nodejs:$PATH" && npm run build` -- expected: exit code 0

## Suggested Review Order

**Headers de sécurité — source principale**

- CSP + 5 autres headers ; `productionBrowserSourceMaps: false` ; array `securityHeaders` factorisé
  [`next.config.ts:1`](../../next.config.ts#L1)

**Fallback Vercel**

- vercel.json minimal (framework hint uniquement — headers gérés exclusivement par next.config.ts pour éviter les doublons)
  [`vercel.json:1`](../../vercel.json#L1)

**Dépendances**

- next épinglé exactement à `16.2.4` (patch security, sans caret)
  [`package.json:12`](../../package.json#L12)

**Périphériques**

- RESEND_API_KEY + CALENDLY_URL documentés
  [`.env.example:1`](../../.env.example#L1)
