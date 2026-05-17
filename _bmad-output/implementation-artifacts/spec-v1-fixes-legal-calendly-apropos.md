---
title: 'V1 Fixes — Métriques, Légal, Calendly, À propos'
type: 'feature'
created: '2026-04-29'
status: 'done'
baseline_commit: 'bf88825f89ad021115d85eb2ff97bdc78360b2ac'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** Le site présente 4 gaps V1 bloquants : métriques home incorrectes (60% affiché au lieu de 25%), absence de pages légales RGPD obligatoires avec liens footer pointant vers /contact, pas de CTA Calendly sur le site, et page À propos sans identité du fondateur.

**Approach:** Corriger la valeur CountUp de la première métrique, créer les 2 pages légales RGPD, corriger les hrefs dans le footer, ajouter le bloc Calendly sur /contact et dans ContactCTA, et enrichir la page À propos avec le parcours complet et les certifications de William Saint-Dizier.

## Boundaries & Constraints

**Always:**
- Design system couleurs : `#1a9e5c` vert, `#4f46e5` violet, `#d97706` amber, `#F8F7F4` bg light — pour composants light
- Conserver le dark theme existant des pages dark (a-propos utilise `bg-[#111]`, `text-white`)
- `<a>` natif uniquement — jamais `next/link`
- TypeScript strict — pas de `any` implicite
- Ajouter entrée seo.ts + sitemap.ts pour chaque nouvelle route
- Tout contenu UI visible en français
- Lien Calendly : `https://calendly.com/williamsaintdizier` (placeholder — target="_blank" rel="noopener noreferrer")

**Ask First:** SIRET inconnu — insérer `[SIRET à compléter]` comme placeholder visible dans les mentions légales

**Never:**
- Changer le thème (dark ↔ light) des pages existantes
- Ajouter cookies tiers, analytics, ou tracking
- Persister les données formulaire en base de données
- Utiliser `<img>` nu — `next/image` obligatoire pour toute image

</frozen-after-approval>

## Code Map

- `app/components/Metrics.tsx` — Stats home, `end: 60` incorrect sur le 1er stat → corriger à 25
- `app/components/CountUp.tsx` — Composant animation scroll-triggered, fonctionnel, aucune modification
- `app/components/Footer.tsx` — `legalLinks` array : 3 hrefs incorrects pointent vers `/contact`
- `app/components/ContactCTA.tsx` — CTA bas de home, Server Component, ajouter 2e bouton Calendly
- `app/contact/page.tsx` — Page contact, Server Component, ajouter bloc Calendly sous la grille
- `app/a-propos/page.tsx` — Page À propos, dark theme, enrichir avec profil William + certs
- `app/seo.ts` — Ajouter `mentionsLegales` + `politiqueConfidentialite`
- `app/sitemap.ts` — Ajouter les 2 nouvelles routes légales
- `app/mentions-legales/page.tsx` — CRÉER (n'existe pas)
- `app/politique-confidentialite/page.tsx` — CRÉER (n'existe pas)

## Tasks & Acceptance

**Execution:**
- [x] `app/components/Metrics.tsx` -- corriger `end: 60` → `end: 25` et label → `"Réduction temps reporting"` (cohérent avec le -25% cité dans les missions)
- [x] `app/seo.ts` -- ajouter entrées `mentionsLegales` et `politiqueConfidentialite` avec title + description
- [x] `app/mentions-legales/page.tsx` -- CRÉER : page légale complète avec éditeur William Saint-Dizier, email contact@enosi-consulting.fr, hébergeur Vercel, SIRET placeholder ; même structure visuelle que a-propos (dark theme, Navbar + Footer)
- [x] `app/politique-confidentialite/page.tsx` -- CRÉER : politique RGPD complète — données collectées (nom/email/message), finalité (répondre aux demandes), conservation 12 mois, droits (accès/rectification/suppression sur contact@enosi-consulting.fr), pas de cookies tiers V1
- [x] `app/components/Footer.tsx` -- corriger `legalLinks` : Mentions légales → `/mentions-legales`, Politique de confidentialité → `/politique-confidentialite`, Cookies → `/politique-confidentialite`
- [x] `app/contact/page.tsx` -- ajouter section Calendly sous la grille 2 colonnes : texte "Vous préférez réserver directement un créneau ?" + bouton `<a>` vers Calendly `target="_blank"`
- [x] `app/components/ContactCTA.tsx` -- ajouter bouton "Réserver 30 minutes →" en style outline (border vert `#1a9e5c`) à côté du CTA existant, lien Calendly `target="_blank"`
- [x] `app/a-propos/page.tsx` -- enrichir avec section "William Saint-Dizier" : double diplôme Panthéon-Sorbonne × PSTB, Master Data IA for Business (2026) ; expériences Moët Hennessy/LVMH, périmètre 100M€ (-25% reporting), audit 98 sites groupe 200M€ ; certifications Power BI PL-300, Azure, Dataiku, IBM Data Science + AI Engineering (340h)
- [x] `app/sitemap.ts` -- ajouter `/mentions-legales` et `/politique-confidentialite` avec `priority: 0.3`

**Acceptance Criteria:**
- Given la section Metrics est scrollée dans le viewport, when le CountUp se déclenche, then les 4 valeurs animent vers 25% / 8sem / 3× / 94%
- Given le footer est affiché, when l'utilisateur clique "Mentions légales", then il arrive sur `/mentions-legales` avec contenu éditeur + hébergeur + SIRET placeholder
- Given le footer est affiché, when l'utilisateur clique "Politique de confidentialité", then il arrive sur `/politique-confidentialite` avec contenu RGPD complet
- Given la page `/contact` chargée, when l'utilisateur consulte la page, then un bloc Calendly avec bouton "Réserver 30 minutes" est visible sous le formulaire
- Given le composant ContactCTA visible, when l'utilisateur le consulte, then deux CTAs sont présents côte à côte : "Prendre contact" (plein) et "Réserver 30 minutes" (outline)
- Given la page `/a-propos`, when l'utilisateur consulte la section fondateur, then il voit nom William Saint-Dizier, diplômes Sorbonne+PSTB, les 3 expériences clés avec résultats chiffrés, et les certifications avec 340h IBM
- Given `npm run build`, when le build se termine, then exit code 0 et zéro erreur TypeScript

## Verification

**Commands:**
- `export PATH="/c/Program Files/nodejs:$PATH" && npm run build` -- expected: exit code 0, zéro erreur TypeScript/lint

## Suggested Review Order

**Bug fix — Métrique KPI**

- Seul changement numérique : valeur cible 60→25 sur le 1er stat
  [`Metrics.tsx:64`](../../app/components/Metrics.tsx#L64)

**Conformité légale**

- Entrée dans les 2 nouvelles pages légales ; structure visuelle identique à a-propos
  [`mentions-legales/page.tsx:1`](../../app/mentions-legales/page.tsx#L1)

- Page RGPD complète : données, finalité, droits, 12 mois conservation
  [`politique-confidentialite/page.tsx:1`](../../app/politique-confidentialite/page.tsx#L1)

- `legalLinks` corrigé : 3 hrefs passent de `/contact` vers les bonnes routes
  [`Footer.tsx:25`](../../app/components/Footer.tsx#L25)

**Conversion — CTAs Calendly**

- Flex wrapper avec 2 boutons (filled + outline) ; `flexWrap:wrap` mobile-safe
  [`ContactCTA.tsx:33`](../../app/components/ContactCTA.tsx#L33)

- Section Calendly sous la grille contact ; hover via Tailwind (Server Component)
  [`contact/page.tsx:92`](../../app/contact/page.tsx#L92)

**Crédibilité — Fondateur**

- Section William Saint-Dizier : diplômes, 3 expériences chiffrées, 4 certifications
  [`a-propos/page.tsx:259`](../../app/a-propos/page.tsx#L259)

**Périphériques — SEO & config**

- 2 entrées SEO pour les nouvelles routes légales
  [`seo.ts:41`](../../app/seo.ts#L41)

- 2 routes légales ajoutées au sitemap XML (priority 0.3, changeFrequency yearly)
  [`sitemap.ts:11`](../../app/sitemap.ts#L11)
