---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
status: complete
releaseMode: phased
inputDocuments: ['_bmad-output/project-context.md']
workflowType: 'prd'
classification:
  projectType: web_app
  domain: professional_services_b2b
  complexity: medium
  projectContext: brownfield
documentCounts:
  briefs: 0
  research: 0
  brainstorming: 0
  projectDocs: 1
---

# Product Requirements Document — Enosi Consulting

**Auteur :** William Saint-Dizier
**Date :** 2026-04-27
**Version :** 1.0 — V1 MVP

---

## Résumé Exécutif

Enosi Consulting est un cabinet de conseil indépendant spécialisé dans la performance, la data et l'IA pour les directions financières et opérationnelles de grands groupes et ETI françaises. Ce projet transforme le site vitrine existant en outil de développement commercial : une vitrine qui répond en < 10 secondes à la question de chaque DAF ou CDO visiteur — "pourquoi Enosi plutôt qu'un grand cabinet ?"

**Utilisateurs cibles :** DAF, CDO, Directeurs Généraux de grands groupes et ETI françaises (CA 50M€–2Md€). Secondairement : directions de grands groupes internationaux (V2 — version anglaise).

**Problème central :** Le site actuel ne convainc pas un décideur C-level en quelques secondes, ne génère pas de trafic organique qualifié, et ne guide pas efficacement vers la prise de contact.

### Les 3 Différenciateurs Enosi

**1. Interlocuteur unique senior.** Le client a toujours affaire à William Saint-Dizier directement — fondateur, expert, livreur. Aucune pyramide de juniors facturée au tarif senior.

**2. Double compétence native finance × data/IA.** Profil structurellement rare : contrôle de gestion et analytics/IA intégrés dès le diagnostic, pas traités en silos successifs. Résultat : recommandations immédiatement opérationnelles, pas des livrables PowerPoint sans suite.

**3. Vélocité de mise en œuvre.** Livrables concrets en semaines, pas en mois. Références réelles : outil de tracking déployé chez Moët Hennessy (LVMH), -25% de temps de reporting chez un opérateur de 100M€, audit financier de 98 sites pour un groupe de 200M€.

**Crédibilité fondateur :** Double diplôme Panthéon-Sorbonne × PSTB, Master Data IA for Business (2026), certifications PL-300, Azure, Dataiku, IBM Data Science + AI Engineering (340h). Expériences France, Nouvelle-Zélande, La Réunion.

**Insight stratégique :** Le risque perçu d'un cabinet indépendant est réel pour un C-level. Le site doit retourner la question : le vrai risque, c'est de payer 3–5× plus cher pour avoir moins d'accès à l'expert senior.

---

## État du Site Existant

Analyse du site live (enosi-consulting.vercel.app — 2026-04-29). Gaps critiques confirmés :

| Gap | Impact | Priorité V1 |
|---|---|---|
| Métriques home à 0% — section KPIs vide ("0%", "0x") | Détruit la crédibilité | Critique |
| Hero générique — "Donnez à vos décisions une base solide" ne cible pas les DAF/CDO et n'énonce pas les 3 différenciateurs | Taux de rebond élevé | Critique |
| Page À propos anonyme — aucun parcours William, aucune certification, aucun nom | Risque de crédibilité P2 | Critique |
| Calendly absent — seul formulaire /contact disponible | Frein à la conversion | Critique |
| Références anonymisées uniquement — les noms clients (LVMH, etc.) absents | Preuve sociale affaiblie | Important |

Points positifs conservés : structure portfolio (pb → résultat + citations), design premium, 3 offres bien séparées, CTAs présents.

---

## Classification du Projet

- **Type :** Application web MPA — site vitrine/marketing B2B
- **Domaine :** Professional Services, conseil indépendant
- **Complexité :** Moyenne — 6 chantiers distincts sur base brownfield saine
- **Contexte :** Brownfield — Next.js 16.2.2 existant, déployé sur Vercel
- **URL production :** enosi-consulting.vercel.app

---

## Critères de Succès

### Succès Utilisateur

Parcours de conversion cible en 4 étapes :
1. **Découverte** — Arrivée via requête Google ciblée ("cabinet conseil data finance ETI")
2. **Compréhension immédiate** — < 10 secondes sur la home : offre, cible, différenciation identifiées
3. **Validation** — Consultation portfolio (problème → résultat chiffré) pour réduire le risque perçu
4. **Conversion** — Formulaire complété ou créneau Calendly réservé

**Métrique primaire :** Formulaires complétés + créneaux Calendly réservés / mois.

### Succès Business

| Métrique | Cible | Horizon |
|---|---|---|
| Prises de contact qualifiées | 2–3 / mois | 3 mois post-V1 |
| SEO — "cabinet conseil data finance Paris" | Page 1 Google | 6 mois |
| SEO — "consultant pilotage performance data ETI" | Page 1 Google | 6 mois |
| SEO — "consultant data IA direction financière" | Page 1 Google | 6 mois |
| Taux de rebond home | < 50% | 3 mois post-V1 |

### Succès Technique

- Lighthouse Performance ≥ 90 sur toutes les pages V1
- Site 100% responsive (mobile, tablette, desktop)
- Intégration Calendly fonctionnelle
- Formulaire de contact opérationnel avec confirmation email
- Schema.org ProfessionalService + Person déployé

---

## Parcours Utilisateurs

### Parcours 1 — Sophie, DAF d'une ETI de 150M€ (succès type)

**Situation :** Sophie dirige la finance d'un groupe industriel. Son CODIR demande un dashboard de pilotage consolidé depuis 6 mois. Elle a consulté deux grands cabinets : devis à 150k€, délai de 4 mois, interlocuteur senior visible 2 réunions sur 10.

**Découverte :** Elle cherche "consultant pilotage performance data ETI" sur Google. Le titre Enosi la retient : "Finance × Data/IA — Livrables en semaines, pas en mois."

**Home (10 secondes) :** Un seul expert, double compétence, 3 références avec résultats chiffrés. "Est-ce sérieux ?" est adressé avant le premier scroll.

**Validation :** Portfolio — missions en format problème → approche → résultat. Le cas reporting -25% correspond à son besoin. Page À propos : Sorbonne, certifications, expériences grands groupes. Elle comprend que William a travaillé dans son monde.

**Conversion :** "Réserver 30 minutes" → Calendly → créneau la semaine suivante → confirmation automatique.

**Exigences révélées :** Hero différenciant < 10s, références avec résultats chiffrés, portfolio structuré, page À propos crédibilisante, Calendly intégré.

---

### Parcours 2 — Marc, CDO d'un grand groupe (profil sceptique)

**Situation :** Recommandé par un pair. Il cherche un expert qui comprend la data côté métier, pas un data scientist sans ancrage financier. Arrive via LinkedIn.

**Friction :** Il scroll rapidement, va sur les pages Offres, ne trouve pas assez de profondeur méthodologique. "Trop marketing."

**Récupération :** Page À propos — certifications Dataiku, Azure, IBM 340h. Portfolio — cas Synapse/LVMH. Il remplit le formulaire avec une question précise sur la méthode.

**Exigences révélées :** Pages Offres avec profondeur méthodologique, certifications visibles, formulaire avec champ message libre, réponse < 24h.

---

### Parcours 3 — William (administrateur)

**Situation :** Mission clôturée. Il veut ajouter la référence au portfolio et corriger les métriques de la home.

**Actions :** Modifie un fichier de données centralisé, teste en local, déploie via push Git → Vercel.

**Friction V2 :** Publication d'articles sans toucher au code React.

**Exigences révélées :** Données portfolio en fichier de config (pas hardcodé), structure MDX pour V2, déploiement Vercel automatique sur push.

---

### Synthèse des Exigences Révélées

| Capacité | Parcours | Priorité |
|---|---|---|
| Hero avec proposition de valeur < 10s | P1, P2 | V1 |
| Références avec résultats chiffrés | P1 | V1 |
| Portfolio structuré (pb → approche → résultat) | P1, P2 | V1 |
| Page À propos avec parcours + certifications | P1, P2 | V1 |
| Intégration Calendly | P1 | V1 |
| Formulaire contact avec champ message libre | P2 | V1 |
| Pages Offres avec profondeur méthodologique | P2 | V1 |
| Données portfolio en fichier de config | P3 | V1 |
| Structure blog Markdown/MDX | P3 | V2 |

---

## Exigences Spécifiques au Domaine

### Conformité légale (France — obligatoire dès V1)

- **Mentions légales** — Nom, adresse, SIRET, hébergeur (Vercel) — page dédiée obligatoire
- **Politique de confidentialité (RGPD)** — Formulaire collecte nom, email, message → consentement explicite, finalité, durée de conservation, droit à l'effacement
- **Cookie banner** — Non requis pour V1 (pas de tracking). Requis dès l'ajout de Google Analytics (V2)

### Contraintes de données

- Soumissions formulaire : transmission directe par email (Resend) sans persistance base de données
- Références clients : Moët Hennessy, Bourbon Voyages, Appart'City — citables nommément ou anonymisés selon accord

### Risques domaine

- **Crédibilité** — Aucun chiffre inventé, aucune métrique sans source réelle. Règle non négociable.
- **Sur-promesse** — Pages Offres décrivent uniquement ce que William peut livrer seul

---

## Exigences Techniques — Site Web

### Architecture

MPA (Multi-Page Application) Next.js 16.2.2 App Router. Pas de backend, pas de base de données, pas de temps réel. Rendu SSR/SSG optimisé pour SEO.

### Compatibilité

- **Desktop :** Chrome, Safari, Firefox, Edge (N et N-1)
- **Mobile :** iOS Safari 15+, Chrome Android — audience C-level consulte sur iPhone
- **Pas de support IE**

### Design Responsive

- Breakpoints critiques : 375px (iPhone SE), 768px (iPad), 1280px (desktop)
- CTA "Réserver 30 minutes" visible sans scroll sur mobile

### Stratégie SEO — V1

- Balises `<title>` et `<meta description>` uniques par page via `seoConfig`
- Structure H1 unique + H2/H3 sémantiques sur toutes les pages
- Schema.org `ProfessionalService` + `Person` (William Saint-Dizier)
- Open Graph + Twitter Card sur toutes les pages
- `sitemap.xml` dynamique et `robots.txt` (déjà en place)

**Requêtes cibles :**
- "cabinet conseil data finance Paris"
- "consultant pilotage performance data ETI"
- "consultant data IA direction financière"

### Stratégie SEO — V2

- Articles MDX optimisés pour requêtes longue traîne finance/data/IA
- Structured data étendu (Article, BreadcrumbList)

### Intégrations V1

- **Calendly** — chargement asynchrone, ne bloque pas le rendu
- **Resend** — envoi email formulaire sans persistance serveur

### Intégrations V2

- **Google Analytics** — après cookie banner CNIL conforme
- **i18n Next.js** — routing multilingue + balises `hreflang`

---

## Scoping & Développement Phasé

### Stratégie

**Experience MVP** — La V1 doit convaincre un C-level en < 10 secondes et déclencher une prise de contact. Aucune feature technique n'a de valeur si le fond (contenu + preuve) ne convertit pas.

**Ressources :** William seul. Finir V1 complète avant d'ouvrir V2. Pas de feature partiellement implémentée.

### V1 — MVP (priorité immédiate)

Supporte les parcours Sophie (DAF) et Marc (CDO).

1. Refonte complète du wording — toutes les pages (home, offres ×3, portfolio, à-propos, contact) — ton C-level, 3 différenciateurs explicites, métriques renseignées avec vrais chiffres
2. Section preuve sociale — home : 3 références avec résultats chiffrés (LVMH, Bourbon Voyages, Appart'City)
3. Portfolio restructuré — format problème → approche → résultat, données en fichier de config
4. Page À propos — parcours William, certifications, photo professionnelle
5. Pages Offres — profondeur méthodologique par offre
6. Intégration Calendly — CTA "Réserver 30 minutes" sur home, offres, contact
7. Formulaire contact — champ message libre + Resend sans persistance serveur
8. SEO fondations — meta tags, Schema.org, H1/H2 optimisés
9. Mentions légales + Politique de confidentialité RGPD

### V2 — Croissance

Déclencheur : premières prises de contact qualifiées validées.

- SEO technique approfondi (Core Web Vitals, structured data étendu)
- Blog / Insights — infrastructure MDX + 3 articles Finance × Data/IA
- Version anglaise — i18n Next.js + hreflang

### V3+ — Vision

- Espace ressources téléchargeables (capture email, pipeline long-terme)
- Newsletter thématique Finance × Data/IA
- Études de cas détaillées (avec accord formel clients)

### Gestion des Risques

| Risque | Niveau | Mitigation |
|---|---|---|
| Qualité du contenu (facteur #1 de conversion) | Prioritaire | Co-rédaction Will + agent, revue C-level avant publication |
| Technique (stack connue, pas de backend) | Faible | Tests Lighthouse avant chaque déploiement |
| Ressources (William seul) | Moyen | Finir V1 avant d'ouvrir V2 |

---

## Exigences Fonctionnelles

> Ce contrat de capacités est contraignant : toute feature absente n'existera pas dans le produit final.

### Présentation & Positionnement

- **FR1 :** Le visiteur comprend l'offre, la cible et la différenciation d'Enosi en < 10 secondes sur la home
- **FR2 :** Le visiteur identifie les 3 différenciateurs (interlocuteur unique senior, double compétence finance × data/IA, vélocité)
- **FR3 :** Le visiteur consulte une description détaillée de chaque offre (problèmes résolus + méthodologie)
- **FR4 :** Le visiteur consulte le parcours professionnel, les certifications et les expériences de William Saint-Dizier

### Preuve Sociale & Crédibilité

- **FR5 :** Le visiteur consulte les références clients avec contexte de mission et résultats chiffrés
- **FR6 :** Le visiteur identifie le secteur d'activité et l'ordre de grandeur des clients référencés
- **FR7 :** Le visiteur consulte un portfolio de missions au format : problème → approche → résultat

### Conversion & Prise de Contact

- **FR8 :** Le visiteur réserve un créneau de 30 minutes depuis le site sans quitter la page
- **FR9 :** Le visiteur envoie un message de contact avec nom, email et description libre du besoin
- **FR10 :** Le visiteur reçoit une confirmation visuelle après soumission réussie
- **FR11 :** William reçoit une notification email à chaque soumission de formulaire
- **FR12 :** Le visiteur trouve un CTA vers la prise de contact sur chaque page

### Navigation & Structure

- **FR13 :** Le visiteur navigue entre toutes les pages depuis le menu principal
- **FR14 :** Le visiteur accède au menu de navigation sur mobile
- **FR15 :** Le visiteur accède directement à chaque page d'offre depuis la navigation

### SEO & Visibilité Organique

- **FR16 :** Chaque page expose un titre et une méta-description uniques optimisés pour les requêtes cibles
- **FR17 :** Le site expose des données structurées Schema.org (ProfessionalService + Person)
- **FR18 :** Le site expose un sitemap XML référençant toutes les pages indexables
- **FR19 :** Le site expose un fichier robots.txt configuré
- **FR20 :** Chaque page expose des balises Open Graph et Twitter Card

### Conformité Légale

- **FR21 :** Le visiteur consulte les mentions légales complètes
- **FR22 :** Le visiteur consulte la politique de confidentialité (collecte et traitement des données)
- **FR23 :** Le visiteur donne son consentement explicite avant soumission du formulaire

### Administration du Contenu

- **FR24 :** William met à jour les missions du portfolio sans modifier les composants React
- **FR25 :** William déploie une mise à jour via push Git vers la branche principale

### V2 — Blog & Ressources

- **FR26 :** Le visiteur consulte une liste d'articles avec titre, date et résumé
- **FR27 :** Le visiteur lit un article complet avec mise en forme riche
- **FR28 :** William publie un article en ajoutant un fichier Markdown/MDX sans modifier le code

### V2 — Version Anglaise

- **FR29 :** Le visiteur bascule entre la version française et anglaise du site
- **FR30 :** Chaque page expose les balises `hreflang` appropriées

---

## Exigences Non-Fonctionnelles

### Performance

Prérequis au classement SEO Google (Core Web Vitals) :

- LCP < 2,5s sur mobile et desktop
- CLS < 0,1
- INP < 200ms
- Score Lighthouse Performance ≥ 90 sur toutes les pages V1
- TTFB < 800ms (SSR Vercel Edge)
- Images en format WebP/AVIF, lazy loading via next/image

### Sécurité

- Données formulaire transmises par email (Resend) sans persistance serveur
- Consentement RGPD obligatoire avant soumission
- Site servi exclusivement en HTTPS (Vercel)
- Clés API exclusivement côté serveur via Vercel Environment Variables

### Accessibilité

- WCAG 2.1 niveau AA sur toutes les pages V1
- Navigation clavier complète (focus visible)
- `alt` descriptif sur toutes les images
- `aria-label` sur éléments interactifs sans texte (hamburger, icônes)
- Contraste texte/fond ≥ 4,5:1 (palette existante conforme)
- H1 unique par page, hiérarchie H2/H3 cohérente

### Intégrations

- **Calendly** : chargement asynchrone — ne bloque pas le rendu de la page
- **Resend** : livraison email < 30s après soumission ; message d'erreur explicite en cas d'échec
- **Vercel** : build automatique sur push branche principale, durée < 3 minutes
