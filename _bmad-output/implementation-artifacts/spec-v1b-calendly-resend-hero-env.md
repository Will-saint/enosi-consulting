---
title: 'V1b — Calendly constants, Resend email, Hero wording, env.example'
type: 'feature'
created: '2026-04-29'
status: 'done'
baseline_commit: '82ae051e6c0a74573e6606f8f95cbf9184347ace'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** 4 gaps V1 restants : Calendly URL dupliquée dans 2 fichiers (risque de dérive), formulaire contact non fonctionnel (simule seulement), Hero générique qui n'expose pas les 3 différenciateurs en < 10s, et pas de `.env.example` pour onboarding Resend.

**Approach:** Extraire l'URL Calendly en constante partagée, câbler Resend via une route API Next.js et mettre à jour ContactForm pour appels réels avec états loading/erreur, retravaille les 3 textes du Hero (titre, sous-titre, 3 pills), et créer `.env.example` + corriger `.gitignore` pour que le fichier soit commitable.

## Boundaries & Constraints

**Always:**
- TypeScript strict — pas de `any` implicite
- Clé Resend côté serveur uniquement via `process.env.RESEND_API_KEY` — jamais exposée côté client
- `<a>` natif uniquement — pas `next/link`
- Tout contenu UI visible en français
- Les textes Hero à changer : titre (words array), sous-titre, 3 labels piliers — RIEN d'autre dans Hero.tsx
- CALENDLY_URL importée depuis `@/lib/constants` dans les 2 composants

**Ask First:** Rien — le domaine et la clé Resend seront ajoutés plus tard ; l'implémentation gère l'absence de clé de façon gracieuse

**Never:**
- Exposer `RESEND_API_KEY` dans le bundle client
- Modifier la logique d'animation, les couleurs, les styles du Hero
- Créer de fichier `.env.local` ou committer une vraie clé API
- Persister les soumissions en base de données

## I/O & Edge-Case Matrix

| Scenario | Input | Expected Output | Error Handling |
|----------|-------|-----------------|----------------|
| Soumission réussie | Formulaire valide + RESEND_API_KEY définie | `{ success: true }`, UI → état confirmé | N/A |
| Resend échoue | RESEND_API_KEY invalide ou réseau | `{ error: "..." }` HTTP 500 | UI → message "Une erreur est survenue…" |
| Champs manquants | prenom/email/message vides | HTTP 400 `{ error: "Champs requis manquants" }` | UI → message erreur |
| Soumission en cours | Click pendant fetch | Bouton disabled, label "Envoi en cours…" | N/A |

</frozen-after-approval>

## Code Map

- `lib/constants.ts` — CRÉER : `CALENDLY_URL` constante partagée (n'existe pas)
- `app/components/ContactCTA.tsx` — Remplacer URL inline par import `CALENDLY_URL`
- `app/contact/page.tsx` — Remplacer URL inline par import `CALENDLY_URL`
- `app/api/contact/route.ts` — CRÉER : route POST Resend (app/api/ n'existe pas)
- `app/contact/ContactForm.tsx` — Client component, handleSubmit → fetch POST + états loading/error
- `app/components/Hero.tsx` — `words` array + sous-titre `<p>` + 3 piliers `label` fields
- `.env.example` — CRÉER à la racine
- `.gitignore` — Ajouter `!.env.example` pour exclure de l'ignore `.env*`

## Tasks & Acceptance

**Execution:**
- [x] `lib/constants.ts` -- CRÉER avec `export const CALENDLY_URL = "https://calendly.com/williamsaintdizier"` (placeholder — à remplacer par le vrai lien quand disponible)
- [x] `app/components/ContactCTA.tsx` -- remplacer la string URL Calendly inline par `import { CALENDLY_URL } from "@/lib/constants"` et utiliser la constante dans les 2 `href`
- [x] `app/contact/page.tsx` -- même import et remplacement que ContactCTA
- [x] `npm install resend` -- ajouter la dépendance avant de créer la route
- [x] `app/api/contact/route.ts` -- CRÉER : route POST qui lit `{ prenom, nom, entreprise, email, fonction, sujet, message }`, valide que `prenom`/`email`/`message` sont présents (HTTP 400 sinon), vérifie que `RESEND_API_KEY` est définie (HTTP 500 si absente — gracieux, pas de crash), envoie via `new Resend(process.env.RESEND_API_KEY)` à `contact@enosi-consulting.fr` FROM `"Enosi Consulting <contact@enosi-consulting.fr>"`, sujet `"Nouveau contact ENOSI — {prenom} {nom}"`, corps HTML avec tous les champs + date ISO, retourne `{ success: true }` ou `{ error: string }`
- [x] `app/contact/ContactForm.tsx` -- ajouter états `loading` et `error`, modifier `handleSubmit` en async pour `fetch("/api/contact", { method:"POST", ... })`, remplacer `setSubmitted(true)` par la gestion success/error, bouton disabled pendant loading, message succès "Votre message a bien été envoyé. Nous vous répondons sous 48h ouvrées.", message erreur "Une erreur est survenue, veuillez réessayer ou nous écrire directement."
- [x] `app/components/Hero.tsx` -- remplacer `words` par `["Vos","données","méritent","mieux","qu'un","rapport","PowerPoint."]` ; remplacer le texte du sous-titre `<p>` ; remplacer les 3 `label` des piliers par "Interlocuteur senior direct" / "Finance × Data × IA" / "Livrables en semaines"
- [x] `.env.example` -- CRÉER : `RESEND_API_KEY=your_resend_api_key_here`
- [x] `.gitignore` -- ajouter `!.env.example` après la ligne `.env*` pour permettre de committer le fichier example

**Acceptance Criteria:**
- Given `lib/constants.ts` existe, when ContactCTA et contact/page importent CALENDLY_URL, then aucune URL Calendly n'est hardcodée dans ces 2 fichiers
- Given `RESEND_API_KEY` valide dans l'env, when le formulaire est soumis avec prenom/email/message remplis, then l'API retourne `{ success: true }` et l'UI affiche "Votre message a bien été envoyé. Nous vous répondons sous 48h ouvrées."
- Given soumission en cours, when fetch est pending, then le bouton affiche "Envoi en cours…" et est disabled
- Given une erreur Resend, when l'API retourne 500, then l'UI affiche "Une erreur est survenue, veuillez réessayer ou nous écrire directement."
- Given Hero.tsx, when la page home se charge, then le titre animé lit "Vos données méritent mieux qu'un rapport PowerPoint." et les 3 pills affichent les 3 différenciateurs
- Given `.env.example` commité, when `git status` après ajout de `.env.local`, then `.env.local` n'apparaît pas dans les fichiers trackés
- Given `npm run build`, when le build se termine, then exit code 0, zéro erreur TypeScript

## Design Notes

La route API est un Route Handler Next.js App Router (`export async function POST(req: Request)`). Corps email en HTML simple (pas de template externe). `process.env.RESEND_API_KEY` est `string | undefined` — instancier `new Resend(key)` uniquement après guard explicite `if (!key) return NextResponse.json({ error: "..." }, { status: 500 })`. La route est fonctionnelle dès qu'une vraie clé est ajoutée dans les env Vercel — aucune autre modification de code nécessaire.

## Verification

**Commands:**
- `export PATH="/c/Program Files/nodejs:$PATH" && npm run build` -- expected: exit code 0, zéro erreur TypeScript

## Suggested Review Order

**API contact — sécurité (entry point)**

- Helpers escapeHtml + regex email ; imports Resend et NextResponse
  [`route.ts:1`](../../app/api/contact/route.ts#L1)

- Guard try/catch autour du JSON parse (retourne 400 propre si corps invalide)
  [`route.ts:16`](../../app/api/contact/route.ts#L16)

- Trim + validation présence + regex email avant tout appel externe
  [`route.ts:29`](../../app/api/contact/route.ts#L29)

- Guard RESEND_API_KEY puis try/catch autour de resend.emails.send + escapeHtml sur tous les champs
  [`route.ts:43`](../../app/api/contact/route.ts#L43)

**Formulaire client — async submit**

- handleSubmit rewritten async : fetch, loading/error states, success/error routing
  [`ContactForm.tsx:20`](../../app/contact/ContactForm.tsx#L20)

**Constante Calendly — source unique**

- Export CALENDLY_URL (placeholder, à remplacer quand lien réel disponible)
  [`constants.ts:1`](../../lib/constants.ts#L1)

- Import dans ContactCTA — plus d'URL hardcodée
  [`ContactCTA.tsx:1`](../../app/components/ContactCTA.tsx#L1)

- Import dans contact/page — plus d'URL hardcodée
  [`contact/page.tsx:6`](../../app/contact/page.tsx#L6)

**Hero — 3 textes différenciateurs**

- words array : nouveau titre animé mot à mot
  [`Hero.tsx:6`](../../app/components/Hero.tsx#L6)

- Sous-titre et 3 labels piliers ("Interlocuteur senior direct" / "Finance × Data × IA" / "Livrables en semaines")
  [`Hero.tsx:104`](../../app/components/Hero.tsx#L104)

**Périphériques**

- Template env variables pour onboarding Resend
  [`.env.example:1`](../../.env.example#L1)

- Negation `!.env.example` dans `.env*` pour permettre le commit du template
  [`.gitignore:34`](../../.gitignore#L34)
