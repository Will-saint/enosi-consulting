---
title: 'V1d — RGPD consent form, CaseStudies fix, CountUp fallback'
type: 'feature'
created: '2026-04-30'
status: 'done'
baseline_commit: '318bc8ccf1649ca9a286d36646797501ee60f66f'
---

<frozen-after-approval reason="human-owned intent — do not modify unless human renegotiates">

## Intent

**Problem:** 3 gaps restants : `CaseStudies.tsx` affiche encore "60 %" (incohérent avec Metrics 25%), le formulaire contact n'a pas de case de consentement RGPD (FR23 obligatoire), et `CountUp` déclenche son animation 500ms après le mount sans vérifier si la section est visible.

**Approach:** Corriger les deux chiffres dans CaseStudies, ajouter une checkbox de consentement RGPD obligatoire dans ContactForm (désactive le bouton si non cochée), et supprimer le fallback timeout de CountUp pour ne conserver que l'IntersectionObserver.

## Boundaries & Constraints

**Always:**
- TypeScript strict — pas de `any` implicite
- Checkbox consentement : `required` HTML + state `consent` en guard dans handleSubmit
- Lien `/politique-confidentialite` dans le label du consentement
- Tout contenu UI visible en français
- CountUp : garder l'IntersectionObserver intact — ne supprimer QUE le setTimeout fallback

**Never:**
- Modifier le design ou la logique d'animation de CountUp au-delà du fallback
- Changer le wording des missions dans CaseStudies sauf les deux chiffres 60%
- Ajouter un champ supplémentaire au formulaire

</frozen-after-approval>

## Code Map

- `app/components/CaseStudies.tsx:9-10` — description + impact field avec "60 %"
- `app/contact/ContactForm.tsx` — Client component, handleSubmit async, ajouter état consent + checkbox
- `app/components/CountUp.tsx:20-22` — `const fallback = setTimeout(...)` à supprimer

## Tasks & Acceptance

**Execution:**
- [x] `app/components/CaseStudies.tsx` -- corriger "60 %" → "25 %" dans description (ligne 9) et impact "−60%" → "−25%" (ligne 10)
- [x] `app/contact/ContactForm.tsx` -- ajouter `const [consent, setConsent] = useState(false)` ; ajouter checkbox avant le bouton submit avec label "J'accepte que mes données soient utilisées pour répondre à ma demande. [Politique de confidentialité]" ; désactiver le bouton si `!consent` ; guard dans handleSubmit : `if (!consent) return`
- [x] `app/components/CountUp.tsx` -- supprimer `const fallback = setTimeout(...)`, `clearTimeout(fallback)` du cleanup, et le `clearTimeout(fallback)` dans le callback IntersectionObserver

**Acceptance Criteria:**
- Given `CaseStudies.tsx`, when affiché, then les deux occurrences de 60% sont remplacées par 25%
- Given la page `/contact`, when l'utilisateur soumet sans cocher la case, then le bouton est disabled et la soumission ne part pas
- Given la page `/contact`, when l'utilisateur coche puis soumet, then le fetch POST est déclenché normalement
- Given la section Metrics scrollée dans le viewport, when CountUp se déclenche, then l'animation démarre uniquement grâce à l'IntersectionObserver (pas au mount)
- Given `npm run build`, when le build se termine, then exit code 0

## Verification

**Commands:**
- `export PATH="/c/Program Files/nodejs:$PATH" && npm run build` -- expected: exit code 0

## Suggested Review Order

**RGPD consent — entry point**

- Checkbox contrôlée (consent state), guard handleSubmit, button disabled={loading || !consent}
  [`ContactForm.tsx:22`](../../app/contact/ContactForm.tsx#L22)

**Fix données**

- Deux occurrences de 60% corrigées en 25%
  [`CaseStudies.tsx:9`](../../app/components/CaseStudies.tsx#L9)

**CountUp — fallback supprimé**

- setTimeout retiré, seul IntersectionObserver déclenche l'animation
  [`CountUp.tsx:17`](../../app/components/CountUp.tsx#L17)
