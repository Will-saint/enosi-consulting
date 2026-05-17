# Deferred Work

## From spec-v1-fixes-legal-calendly-apropos (2026-04-29)

- **CountUp fallback 500ms** — `app/components/CountUp.tsx` déclenche l'animation 500ms après le mount via un timeout inconditionnnel, même si la section n'est pas dans le viewport. Pré-existant. À corriger séparément (supprimer le fallback ou l'augmenter à ~2000ms).

- **Adresse physique dans mentions légales** — `app/mentions-legales/page.tsx` contient un placeholder `[Adresse à compléter]`. À remplir avant publication (requis LCEN France).

- **SIRET dans mentions légales** — `app/mentions-legales/page.tsx` contient `[SIRET à compléter]`. À remplir avant publication (obligatoire légalement).

- **Cookies : page dédiée** — Le footer "Cookies" pointe vers `/politique-confidentialite`. V1 acceptable, mais ePrivacy/RGPD distingue techniquement les deux. Créer `/cookies` ou ajouter une section `#cookies` dans la politique de confidentialité en V2.

- **Calendly URL dupliquée** — RÉSOLU dans spec-v1b (extrait dans `lib/constants.ts`).

## From spec-v1b-calendly-resend-hero-env (2026-04-29)

- **Rate limiting /api/contact** — Pas de protection contre le spam sur l'endpoint POST. À ajouter avec Upstash Ratelimit ou middleware Vercel Edge quand le formulaire est en prod.

- **Fetch timeout ContactForm** — Pas d'AbortController sur le fetch dans `ContactForm.tsx`. Un appel Resend lent bloque l'UI indéfiniment. Ajouter un timeout de 10s en V2.

- **Calendly URL** — `lib/constants.ts` contient l'URL placeholder actuelle. Mettre à jour quand le vrai lien Calendly est disponible.

- **CSP nonce-based (unsafe-inline)** — `next.config.ts` utilise `'unsafe-inline'` dans `script-src`, ce qui affaiblit le XSS protection. Migrer vers une approche nonce (Next.js Middleware + `nonce` prop sur `<Script>`) quand la sécurité avancée est requise.

- **HMR websockets dev mode** — `connect-src 'self'` peut bloquer les websockets HMR en local selon le navigateur. Si des problèmes de hot reload apparaissent, ajouter `ws: wss:` à `connect-src` (impact sécurité minime sur marketing site).

- **Calendly embed frame-src** — Si un widget Calendly embarqué est ajouté, ajouter `frame-src https://calendly.com` au CSP dans `next.config.ts`.

## From spec-v1d-rgpd-casestudies-countup (2026-05-01)

- **Consentement RGPD côté serveur** — La case de consentement est validée uniquement côté client (disabled + guard JS). Pas de vérification serveur dans `/api/contact/route.ts`. Acceptable V1 pour un site marketing, à renforcer si le volume de soumissions augmente.

- **CountUp IntersectionObserver polyfill** — Sans fallback, les navigateurs sans IntersectionObserver (Safari < 12.1) affichent les compteurs à 0. Cible PRD = iOS 15+ (Safari 15), risque minimal. À surveiller si la cible s'élargit.

## From spec-v1c-security-audit (2026-04-29)

- **postcss MODERATE (bundled next)** — `postcss <8.5.10` bundlé dans next. Le fix npm propose de downgrader next@9.3.3 (breaking change absurde). À surveiller lors du prochain upgrade Next.js. CVE: GHSA-qx2v-qp2m-jg93.

- **uuid/svix/resend chain MODERATE** — `uuid <14.0.0` via `svix 1.68.0-1.91.1` via `resend >=6.2.0-canary.0`. Fix disponible avec `resend@6.1.3` mais hors plage semver déclarée (breaking change potentiel). Évaluer sur une branche dédiée avant merge. CVE: GHSA-w5hq-g745-h8pq.
