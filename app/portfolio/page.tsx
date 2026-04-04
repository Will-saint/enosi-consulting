import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { seoConfig } from "../seo";

export const metadata: Metadata = {
  title: seoConfig.portfolio.title,
  description: seoConfig.portfolio.description,
};

/* ─────────────────────────────────────────────
   Composant réutilisable : bloc "En bref"
───────────────────────────────────────────── */
function EnBref({
  sujet,
  probleme,
  action,
  impact,
}: {
  sujet: string;
  probleme: string;
  action: string;
  impact: string;
}) {
  return (
    <div
      className="grid grid-cols-2 gap-4 rounded-xl p-5 mb-10"
      style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}
    >
      {[
        { label: "Sujet", value: sujet },
        { label: "Problème", value: probleme },
        { label: "Action", value: action },
        { label: "Impact", value: impact },
      ].map((item) => (
        <div key={item.label}>
          <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">{item.label}</p>
          <p className="text-sm font-medium text-white leading-snug">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Composant réutilisable : bloc "Notre approche"
───────────────────────────────────────────── */
function ApprocheBanner() {
  return (
    <div
      className="rounded-xl p-6 mb-10"
      style={{
        backgroundColor: "#0d0d0d",
        border: "1px solid #1e1e1e",
        borderLeft: "2px solid #3ddc84",
      }}
    >
      <p className="text-sm italic text-gray-400 leading-relaxed">
        &ldquo;Ce projet illustre notre approche : partir de la décision,
        structurer la donnée, et créer un impact mesurable.&rdquo;
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Composant : bouton retour
───────────────────────────────────────────── */
function BackButton() {
  return (
    <a
      href="/"
      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Retour à l&apos;accueil
    </a>
  );
}

/* ─────────────────────────────────────────────
   PAGE PORTFOLIO
───────────────────────────────────────────── */
export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">

          {/* En-tête de page */}
          <div className="mb-16">
            <BackButton />
            <p className="text-xs text-gray-600 uppercase tracking-widest mt-8 mb-3">Portfolio</p>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight text-white mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Exemples de missions
            </h1>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl">
              Trois interventions représentatives de notre approche.
              Les organisations ne sont pas nommées — les résultats, si.
            </p>
          </div>

          {/* ══════════════════════════════════════
              CAS 1 — PILOTAGE DE LA PERFORMANCE
          ══════════════════════════════════════ */}
          <article className="mb-20 pb-20 border-b border-[#1e1e1e]">

            {/* Badge + titre */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: "#3ddc8415", color: "#3ddc84" }}
              >
                Pilotage
              </span>
              <span className="text-xs text-gray-600">Direction financière — ETI industrielle</span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Refonte du pilotage de la performance
            </h2>

            {/* En bref */}
            <EnBref
              sujet="Pilotage de la performance"
              probleme="Reporting exhaustif — inutilisé pour décider"
              action="Reconstruction autour des 5 décisions clés + alertes automatiques"
              impact="−5 jours de production · ÷3 sur le temps de décision en COMEX"
            />

            {/* Contexte */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-3">Le contexte</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                ETI industrielle, 800 personnes. Le COMEX attendait un reporting
                mensuel de 6 jours pour prendre des décisions — et finissait
                souvent par les prendre avant qu&apos;il arrive.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                La direction financière produisait chaque mois un document de 40 pages,
                exhaustif, bien mis en page — et consulté en diagonale pendant
                5 minutes en réunion. Personne ne savait exactement quels indicateurs
                regarder pour décider quoi.
              </p>
            </div>

            {/* Le vrai problème */}
            <div
              className="rounded-xl p-6 mb-8"
              style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}
            >
              <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-3">Le vrai problème</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Le reporting n&apos;avait jamais été conçu pour décider.
                Il avait été conçu pour informer — ce qui est différent.
                La profusion d&apos;indicateurs masquait les quelques signaux
                qui auraient suffi à orienter les arbitrages mensuels.
              </p>
            </div>

            {/* Ce que nous avons fait */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-4">Ce que nous avons fait</h3>
              <div className="space-y-4">
                {[
                  {
                    n: "1",
                    titre: "Cartographie décisionnelle",
                    desc: "Identification des 5 décisions récurrentes du COMEX. Pour chaque décision : quels indicateurs sont réellement nécessaires, dans quel délai, avec quel niveau de granularité.",
                  },
                  {
                    n: "2",
                    titre: "Reconstruction du reporting",
                    desc: "Suppression de 60% des indicateurs existants. Reconstruction d'un format court (8 pages), structuré par décision, avec une page de synthèse exécutive en première position.",
                  },
                  {
                    n: "3",
                    titre: "Automatisation de la production",
                    desc: "Connexion directe aux sources de données, élimination des retraitements manuels. Le reporting devient produit en 1 jour au lieu de 6.",
                  },
                  {
                    n: "4",
                    titre: "Alertes et signaux avancés",
                    desc: "Mise en place de 5 alertes automatiques sur les indicateurs critiques. Le COMEX est informé avant la réunion mensuelle si un seuil est franchi.",
                  },
                ].map((e) => (
                  <div key={e.n} className="flex gap-4">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                      style={{ backgroundColor: "#3ddc8415", color: "#3ddc84" }}
                    >
                      {e.n}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{e.titre}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Graphique Cas 1 */}
            <div className="rounded-xl p-6 mb-8" style={{background: '#0d0d0d', border: '1px solid #1e1e1e'}}>
              <p className="text-xs text-gray-600 uppercase tracking-wider mb-6">Temps de production du reporting (jours)</p>
              <div className="space-y-4">
                {[
                  { label: "Avant", value: 100, display: "6 jours", color: "#ef444460" },
                  { label: "Après", value: 16, display: "1 jour", color: "#3ddc84" },
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-4">
                    <span className="text-xs w-10 shrink-0" style={{color: 'rgba(255,255,255,0.3)'}}>{b.label}</span>
                    <div className="flex-1 h-7 rounded-full overflow-hidden" style={{background: 'rgba(255,255,255,0.04)'}}>
                      <div className="h-full rounded-full transition-all duration-1000 flex items-center px-3"
                           style={{width: `${b.value}%`, background: b.color}} />
                    </div>
                    <span className="text-xs w-12 text-right" style={{color: b.color}}>{b.display}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4" style={{color: 'rgba(61,220,132,0.6)'}}>→ Gain : −5 jours de production mensuelle</p>
            </div>

            {/* Résultat */}
            <div
              className="rounded-xl p-6 mb-10"
              style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}
            >
              <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-4">Le résultat</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "−5 j", label: "de production" },
                  { val: "÷3", label: "temps de décision COMEX" },
                  { val: "−60%", label: "d'indicateurs" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold text-[#3ddc84] mb-1">{s.val}</div>
                    <div className="text-xs text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Citation */}
            <blockquote className="bg-[#0d0d0d] border-l-4 border-[#3ddc84]/30 p-6 rounded-r-xl mb-8">
              <p className="italic text-gray-400 text-sm leading-relaxed">
                &ldquo;Pour la première fois, on entre en réunion COMEX en sachant déjà quoi décider — pas juste quoi constater.&rdquo;
              </p>
              <footer className="text-xs text-gray-600 mt-3">— Directeur Financier, ETI industrielle</footer>
            </blockquote>

            {/* Approche */}
            <ApprocheBanner />
            <BackButton />
          </article>


          {/* ══════════════════════════════════════
              CAS 2 — DATA & IA DÉCISIONNELLE
          ══════════════════════════════════════ */}
          <article className="mb-20 pb-20 border-b border-[#1e1e1e]">

            {/* Badge + titre */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: "#6366f115", color: "#6366f1" }}
              >
                Data & IA
              </span>
              <span className="text-xs text-gray-600">Direction transformation — Grand groupe</span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Cadrage et déploiement d&apos;un cas d&apos;usage IA
            </h2>

            {/* En bref */}
            <EnBref
              sujet="IA décisionnelle sur flux financiers"
              probleme="12 cas d'usage IA identifiés — aucun en production depuis 18 mois"
              action="Scoring, sélection du cas prioritaire, déploiement en 8 semaines"
              impact="1 modèle en prod · 94% de détection · 3–4 ETP économisés"
            />

            {/* Contexte */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-3">Le contexte</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Grand groupe de services, direction transformation.
                Depuis 18 mois, 12 cas d&apos;usage IA avaient été identifiés
                en atelier — et aucun n&apos;était passé en production.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Le problème n&apos;était pas technique. C&apos;était un problème de
                priorisation : trop de sujets ouverts, pas de critères de sélection,
                des équipes data sans interlocuteur métier clair, et un sponsorship
                direction insuffisant sur chaque cas individuel.
              </p>
            </div>

            {/* Le vrai problème */}
            <div
              className="rounded-xl p-6 mb-8"
              style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}
            >
              <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-3">Le vrai problème</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                L&apos;organisation avait besoin d&apos;une victoire visible et rapide —
                un cas d&apos;usage déployé, utilisé, avec un impact chiffré.
                Pas d&apos;un nouveau rapport sur les 12 opportunités.
                La valeur n&apos;est pas dans l&apos;inventaire. Elle est dans l&apos;exécution.
              </p>
            </div>

            {/* Ce que nous avons fait */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-4">Ce que nous avons fait</h3>
              <div className="space-y-4">
                {[
                  {
                    n: "1",
                    titre: "Scoring des 12 cas d'usage",
                    desc: "Évaluation selon 4 critères : faisabilité technique, disponibilité des données, valeur métier attendue, rapidité de déploiement. Chaque cas noté et positionné sur une matrice impact / effort.",
                    color: "#3ddc84",
                    italic: false,
                  },
                  {
                    n: "2",
                    titre: "Sélection du cas prioritaire",
                    desc: "Détection d'anomalies sur flux de facturation : données disponibles, périmètre limité, impact financier direct mesurable, équipe métier motivée.",
                    color: "#3ddc84",
                    italic: false,
                  },
                  {
                    n: "3",
                    titre: "Déploiement en 8 semaines",
                    desc: "Préparation des données, entraînement du modèle, validation métier, intégration dans le workflow de contrôle existant. Passage en production avec suivi hebdomadaire.",
                    color: "#3ddc84",
                    italic: false,
                  },
                  {
                    n: "4",
                    titre: "Transfert et adoption",
                    desc: "Formation des équipes de contrôle. Documentation des règles de décision. Mise en place d'un tableau de suivi de la performance du modèle en temps réel.",
                    color: "#3ddc84",
                    italic: false,
                  },
                  {
                    n: "5",
                    titre: "Choix assumé : interprétabilité avant performance brute",
                    desc: "Nous avons sacrifié 5 points de performance du modèle au profit de son interprétabilité — un modèle à 94% qu'on utilise vaut mieux qu'un modèle à 99% qu'on ne comprend pas.",
                    color: "#6366f1",
                    italic: true,
                  },
                ].map((e) => (
                  <div key={e.n} className="flex gap-4">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                      style={{ backgroundColor: `${e.color}15`, color: e.color }}
                    >
                      {e.n}
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold mb-1"
                        style={{ color: e.italic ? e.color : "white" }}
                      >
                        {e.titre}
                      </p>
                      <p
                        className={`text-sm leading-relaxed ${e.italic ? "italic" : ""}`}
                        style={{ color: e.italic ? "#6366f1aa" : "#6b7280" }}
                      >
                        {e.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Graphique Cas 2 */}
            <div className="rounded-xl p-6 mb-8" style={{background: '#0d0d0d', border: '1px solid #1e1e1e'}}>
              <p className="text-xs text-gray-600 uppercase tracking-wider mb-6">Scoring des cas d&apos;usage (schématique)</p>
              <div className="relative" style={{height: '200px'}}>
                <div className="absolute bottom-0 left-8 right-0 h-px" style={{background: 'rgba(255,255,255,0.1)'}} />
                <div className="absolute bottom-0 left-8 top-0 w-px" style={{background: 'rgba(255,255,255,0.1)'}} />
                <span className="absolute bottom-[-18px] right-0 text-xs" style={{color: 'rgba(255,255,255,0.2)'}}>Faisabilité →</span>
                <span className="absolute top-0 left-0 text-xs" style={{color: 'rgba(255,255,255,0.2)', writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>Valeur ↑</span>
                {[
                  {x: 20, y: 70}, {x: 35, y: 30}, {x: 55, y: 55},
                  {x: 25, y: 50}, {x: 65, y: 25}, {x: 40, y: 75},
                  {x: 70, y: 60}, {x: 50, y: 35}, {x: 30, y: 85},
                  {x: 80, y: 45}, {x: 45, y: 20}, {x: 60, y: 80},
                ].map((p, i) => (
                  <div key={i} className="absolute w-2 h-2 rounded-full"
                       style={{left: `calc(2rem + ${p.x}%)`, bottom: `${p.y * 1.8}px`, background: 'rgba(255,255,255,0.15)', transform: 'translate(-50%, 50%)'}} />
                ))}
                <div className="absolute w-4 h-4 rounded-full"
                     style={{left: 'calc(2rem + 78%)', bottom: '145px', background: '#3ddc84', boxShadow: '0 0 12px rgba(61,220,132,0.5)', transform: 'translate(-50%, 50%)'}} />
                <span className="absolute text-xs font-semibold"
                      style={{left: 'calc(2rem + 78%)', bottom: '162px', transform: 'translateX(-50%)', color: '#3ddc84'}}>
                  Cas retenu
                </span>
              </div>
            </div>

            {/* Résultat */}
            <div
              className="rounded-xl p-6 mb-10"
              style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}
            >
              <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-4">Le résultat</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "94%", label: "taux de détection" },
                  { val: "3–4", label: "ETP économisés" },
                  { val: "8 sem.", label: "du cadrage à la prod" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold text-[#6366f1] mb-1">{s.val}</div>
                    <div className="text-xs text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Citation */}
            <blockquote className="bg-[#0d0d0d] border-l-4 border-[#3ddc84]/30 p-6 rounded-r-xl mb-8">
              <p className="italic text-gray-400 text-sm leading-relaxed">
                &ldquo;On avait les données depuis 3 ans. Il manquait quelqu&apos;un capable de faire le lien entre ce qu&apos;on avait et ce qu&apos;on devait décider.&rdquo;
              </p>
              <footer className="text-xs text-gray-600 mt-3">— Directeur Transformation, Grand groupe</footer>
            </blockquote>

            {/* Approche */}
            <ApprocheBanner />
            <BackButton />
          </article>


          {/* ══════════════════════════════════════
              CAS 3 — EFFICACITÉ / CYCLE BUDGÉTAIRE
          ══════════════════════════════════════ */}
          <article className="mb-8">

            {/* Badge + titre */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: "#f59e0b15", color: "#f59e0b" }}
              >
                Efficacité
              </span>
              <span className="text-xs text-gray-600">Direction performance / COMEX — ETI en croissance</span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Transformation du cycle budgétaire
            </h2>

            {/* En bref */}
            <EnBref
              sujet="Transformation du cycle budgétaire"
              probleme="14 semaines de budget — validé trop tard pour être utile"
              action="Cartographie des frictions + référentiel d'hypothèses commun"
              impact="−3 semaines · −60% d'allers-retours · budget utilisé en pilotage"
            />

            {/* Contexte */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-3">Le contexte</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                ETI en forte croissance, 500 personnes, 11 directions.
                Le budget arrivait validé trop tard pour être encore utile.
                Les vraies décisions avaient déjà été prises ailleurs,
                sans base commune.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                14 semaines de processus budgétaire. Des hypothèses de volume
                et de prix recalculées à chaque aller-retour entre les directions
                et la Direction performance / COMEX. Un outil de consolidation
                qui ne consolidait rien automatiquement — tout était fait à la main,
                dans des fichiers individuels, avec des versions qui se perdaient.
              </p>
            </div>

            {/* Le vrai problème */}
            <div
              className="rounded-xl p-6 mb-8"
              style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}
            >
              <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-3">Le vrai problème</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">
                Chaque direction budgétait avec ses propres hypothèses.
                Pas de référentiel commun sur les volumes, les prix, les effectifs.
                La Direction performance / COMEX passait l&apos;essentiel de son temps
                à réconcilier des données incompatibles — plutôt qu&apos;à analyser.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Résultat : un document de référence que personne
                ne regardait après le mois de février.
              </p>
            </div>

            {/* Ce que nous avons fait */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-4">Ce que nous avons fait</h3>
              <div className="space-y-4">
                {[
                  {
                    n: "1",
                    titre: "Cartographie des frictions",
                    desc: "Entretiens avec les 11 directions et la Direction performance / COMEX. Identification des 7 points de friction majeurs : hypothèses divergentes, formats hétérogènes, boucles de validation redondantes.",
                  },
                  {
                    n: "2",
                    titre: "Référentiel d'hypothèses commun",
                    desc: "Construction d'un fichier de référence centralisé : volumes, prix, taux, effectifs. Une seule source. Mise à jour par la Direction performance / COMEX, accessible en lecture à toutes les directions.",
                  },
                  {
                    n: "3",
                    titre: "Refonte du calendrier budgétaire",
                    desc: "Suppression de 3 boucles d'allers-retours redondantes. Passage de 14 à 11 semaines de cycle. Jalons clairement définis avec des livrables attendus précis à chaque étape.",
                  },
                  {
                    n: "4",
                    titre: "Outil de pilotage post-budget",
                    desc: "Le budget n'est plus un document annuel archivé. Il devient la base d'un suivi mensuel : écarts par direction, alertes sur les dépassements, projections dynamiques à horizon glissant.",
                  },
                ].map((e) => (
                  <div key={e.n} className="flex gap-4">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold"
                      style={{ backgroundColor: "#f59e0b15", color: "#f59e0b" }}
                    >
                      {e.n}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{e.titre}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Graphique Cas 3 */}
            <div className="rounded-xl p-6 mb-8" style={{background: '#0d0d0d', border: '1px solid #1e1e1e'}}>
              <p className="text-xs text-gray-600 uppercase tracking-wider mb-6">Durée du cycle budgétaire (semaines)</p>
              <div className="space-y-4">
                {[
                  { label: "Avant", weeks: 14, color: "#ef444460", display: "14 sem." },
                  { label: "Après", weeks: 11, color: "#3ddc84", display: "11 sem." },
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-4">
                    <span className="text-xs w-10 shrink-0" style={{color: 'rgba(255,255,255,0.3)'}}>{b.label}</span>
                    <div className="flex-1 h-7 rounded-full overflow-hidden relative" style={{background: 'rgba(255,255,255,0.04)'}}>
                      <div className="h-full rounded-full" style={{width: `${(b.weeks / 14) * 100}%`, background: b.color}} />
                    </div>
                    <span className="text-xs w-14 text-right" style={{color: b.color}}>{b.display}</span>
                  </div>
                ))}
                <p className="text-xs pt-2" style={{color: 'rgba(61,220,132,0.6)'}}>→ Gain : 3 semaines récupérées dès la première année</p>
              </div>
            </div>

            {/* Résultat */}
            <div
              className="rounded-xl p-6 mb-10"
              style={{ backgroundColor: "#0d0d0d", border: "1px solid #1e1e1e" }}
            >
              <h3 className="text-xs uppercase tracking-wider text-gray-600 mb-4">Le résultat</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "−3 sem.", label: "sur le cycle" },
                  { val: "−60%", label: "d'allers-retours" },
                  { val: "12 mois", label: "de pilotage actif" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-bold text-[#f59e0b] mb-1">{s.val}</div>
                    <div className="text-xs text-gray-600">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Citation */}
            <blockquote className="bg-[#0d0d0d] border-l-4 border-[#3ddc84]/30 p-6 rounded-r-xl mb-8">
              <p className="italic text-gray-400 text-sm leading-relaxed">
                &ldquo;Ce n&apos;était pas un problème d&apos;outil. C&apos;était un problème de méthode. Maintenant tout le monde travaille avec les mêmes règles.&rdquo;
              </p>
              <footer className="text-xs text-gray-600 mt-3">— Directeur de la Performance, ETI en croissance</footer>
            </blockquote>

            {/* Approche */}
            <ApprocheBanner />
            <BackButton />
          </article>

        </div>
      </main>
      <Footer />
    </>
  );
}
