---
project_name: 'publicis-sapient'
user_name: 'Will'
date: '2026-04-27'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'testing_rules', 'code_quality_rules', 'workflow_rules', 'critical_rules']
status: 'complete'
rule_count: 42
optimized_for_llm: true
---

# Project Context for AI Agents

_Ce fichier contient les règles et patterns critiques que les agents IA doivent suivre lors de l'implémentation de code dans ce projet. Focus sur les détails non évidents._

---

## Technology Stack & Versions

- Next.js 16.2.2 (App Router — pas de Pages Router)
- React 19.2.4
- TypeScript ^5, strict mode activé (`"strict": true` dans tsconfig.json)
- Tailwind CSS ^4 (nouvelle syntaxe — `@import "tailwindcss"` dans globals.css, pas `@tailwind base`)
- ESLint ^9 avec `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`
- Module resolution : `"moduleResolution": "bundler"` (pas `node`)
- Path alias : `@/*` → project root
- Target : ES2017
- Déploiement : Vercel — `https://enosi-consulting.vercel.app`

## Critical Implementation Rules

### Règles TypeScript

- Strict mode complet — pas de `any` implicite, null checks obligatoires
- Imports : chemins absolus via `@/` (ex. `@/app/components/Hero`) ou relatifs
- Pas d'extension `.js` dans les imports (bundler mode gère)
- Types React explicites : `React.ReactNode`, `React.FC` évité — préférer la signature directe `export default function Foo({ children }: { children: React.ReactNode })`
- `Readonly<{}>` sur les props des Server Components (pattern existant dans layout.tsx)
- Unions discriminées pour les types conditionnels (ex. `NavItem` dans Navbar.tsx)
- Pas de `enum` — utiliser `as const` ou union de strings
- `useRef<HTMLDivElement>(null)` — toujours typer le ref avec le bon élément HTML

### Règles Next.js / React

**Server vs Client Components**
- Défaut = Server Component — ajouter `"use client"` uniquement si hooks ou events
- Composants avec `useState`, `useEffect`, `useRef`, handlers → `"use client"` obligatoire
- Les composants `"use client"` ne peuvent pas être des parents async

**Navigation**
- Navigation interne : balises `<a>` natives (pas `next/link`) — convention du projet
- Pas de `router.push()` sauf besoin programmatique explicite

**Images**
- Toujours `next/image` (`Image`) pour les images — jamais `<img>` nu
- Attributs `width` et `height` obligatoires sur `Image`

**Metadata / SEO**
- Toute page doit exporter `metadata` depuis `app/seo.ts` via `seoConfig`
- `metadataBase` défini dans le root layout — ne pas le redéfinir dans les pages
- Sitemap dans `app/sitemap.ts` — ajouter chaque nouvelle route

**App Router**
- Fichiers de route : `page.tsx`, `layout.tsx` uniquement dans les dossiers de route
- Sous-composants de page (ex. `ContactForm.tsx`) : dans le même dossier de route
- Composants partagés : dans `app/components/`

**Animations**
- Scroll reveal : utiliser le composant `ScrollReveal` existant (props : `delay`, `className`)
- Transitions de page : gérées par `PageTransition` dans le root layout — ne pas re-implémenter
- Animations CSS : via inline `style={{transition: ...}}` + `requestAnimationFrame`, pas de lib externe

### Règles de Tests

- Aucun setup de test configuré à ce stade — ne pas générer de fichiers de test sans configuration explicite
- Si des tests sont ajoutés : préférer Vitest (compatible Vite/Next.js 16) plutôt que Jest
- Tests E2E futurs : Playwright recommandé pour Next.js App Router
- Pas de convention de nommage établie — à définir lors de l'ajout du setup

### Règles de Style et Qualité

**Styling — règle critique**
- Approche hybride : Tailwind pour layout/responsive, inline `style={{}}` pour effets visuels fins
- Tailwind : `className` pour flex, grid, responsive (`lg:`, `md:`), hidden, spacing utilitaires
- Inline style : gradients, shadows, blur, border-radius custom, couleurs exactes, animations
- NE PAS utiliser de fichiers CSS modules (`.module.css`) — non utilisés dans le projet
- NE PAS utiliser `@apply` dans les CSS — non utilisé dans le projet

**Design system — couleurs (toujours ces valeurs exactes)**
- Vert principal : `#1a9e5c` / vert foncé : `#157a47` / vert glow : `rgba(26,158,92,0.12)`
- Violet : `#4f46e5`
- Amber : `#d97706`
- Background : `#F8F7F4` / Surface : `#FFFFFF` / Surface low : `#F2F0EC`
- Text primary : `#0f0f0f` / Text secondary : `#3a3a3a` / Text muted : `rgba(30,30,30,0.5)`
- Border ghost : `rgba(0,0,0,0.07)`

**Typographie**
- Headings (`h1`, `h2`, `h3`) : `fontFamily: "'Playfair Display', serif"` via inline style
- Body : DM Sans (chargé via Google Fonts dans globals.css)
- Geist : disponible via variable CSS `--font-geist-sans` (défini dans layout.tsx)
- Cursor caché : `cursor: none` sur body — le composant `CustomCursor` gère l'affichage

**Structure des composants**
- Un composant par fichier, export default
- Nom du fichier = nom du composant en PascalCase (ex. `ScrollReveal.tsx`)
- Pas de barrel files (`index.ts`) — imports directs
- Aucun commentaire dans le code sauf si logique non évidente

**ESLint**
- Config via `eslint.config.mjs` (flat config ESLint 9) — ne pas créer `.eslintrc`
- `next/core-web-vitals` + `next/typescript` — respecter les règles d'accessibilité et perf

### Règles de Workflow

**Contenu et langue**
- Tout le contenu visible (UI, labels, messages) en français (fr_FR)
- Code, noms de variables et commentaires en anglais

**Déploiement**
- Plateforme : Vercel (déploiement automatique depuis main)
- URL de production : `https://enosi-consulting.vercel.app`
- `metadataBase` dans layout.tsx pointe sur cette URL — ne pas modifier

**Pas de config Git établie** — aucune convention de branche ou commit message trouvée dans le projet

### Règles Critiques — À ne pas manquer

**Anti-patterns à éviter absolument**
- ❌ Ne jamais utiliser `<img>` — toujours `next/image` (`Image`)
- ❌ Ne jamais utiliser `next/link` — le projet utilise `<a>` natif
- ❌ Ne pas créer de fichiers `middleware.ts` — Next.js 16 utilise `proxy.ts`
- ❌ Ne pas utiliser `@tailwind base/components/utilities` — Tailwind v4 utilise `@import "tailwindcss"`
- ❌ Ne pas créer `.eslintrc` ou `.eslintrc.json` — ESLint 9 flat config uniquement (`eslint.config.mjs`)
- ❌ Ne pas créer de fichiers CSS modules — approche hybride Tailwind + inline style uniquement
- ❌ Ne pas coder de couleurs différentes du design system — toujours `#1a9e5c`, `#4f46e5`, `#d97706`, `#F8F7F4`
- ❌ Ne pas afficher le curseur natif — `cursor: none` sur body est intentionnel

**Gotchas spécifiques au projet**
- Le `cursor: none` sur body est global et intentionnel — ne pas surcharger sans le composant `CustomCursor`
- `ScrollProgress` et `CustomCursor` sont injectés au niveau root layout — ne pas les dupliquer dans les pages
- `PageTransition` enveloppe tous les `children` dans le root layout — les animations d'entrée de page sont automatiques
- Les effets de grain (body::after) et scrollbar custom sont définis dans globals.css — ne pas recréer
- `seoConfig` dans `app/seo.ts` est la source unique de vérité pour les titres et descriptions — toujours l'utiliser
- Nouvelle route = ajouter l'entrée dans `app/sitemap.ts`

**Accessibilité**
- Attribut `alt` obligatoire sur tous les `Image`
- Boutons sans texte visible → `aria-label` obligatoire (ex. hamburger menu)
- Les `<a>` avec `href="#..."` pour les ancres in-page sont valides dans ce projet

---

## Usage Guidelines

**Pour les agents IA :**
- Lire ce fichier avant d'implémenter tout code
- Suivre TOUTES les règles telles que documentées
- En cas de doute, choisir l'option la plus restrictive
- Mettre à jour ce fichier si de nouveaux patterns émergent

**Pour les humains :**
- Garder ce fichier concis et centré sur les besoins des agents
- Mettre à jour lors de changements de stack technologique
- Réviser trimestriellement pour supprimer les règles obsolètes

_Dernière mise à jour : 2026-04-27_
