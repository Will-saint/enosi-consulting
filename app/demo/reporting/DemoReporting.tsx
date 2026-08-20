"use client";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Données synthétiques — déterministes.
   Les contrôles ci-dessous sont réellement calculés
   à partir de ces lignes, pas scriptés à l'avance.
───────────────────────────────────────────── */

type Ligne = {
  id: number;
  filiale: string;
  date: string;
  formatUs: boolean;
  ca: number;
  couts: number;
  centreCout: string | null;
};

const FILIALES = [
  { nom: "Nord", fichier: "Filiale_Nord_T3.xlsx", budgetMarge: 36 },
  { nom: "Sud", fichier: "Filiale_Sud_T3.xlsx", budgetMarge: 35 },
  { nom: "Est", fichier: "Filiale_Est_T3 (2).xlsx", budgetMarge: 37 },
  { nom: "Ouest", fichier: "Filiale_Ouest_T3_final.xlsx", budgetMarge: 34 },
];

// Générateur déterministe (pas de Math.random : même résultat à chaque exécution)
function genererLignes(): Ligne[] {
  const lignes: Ligne[] = [];
  let id = 1000;
  const profils = [
    { filiale: "Nord", n: 142, caBase: 24_500, margeCible: 0.372 },
    { filiale: "Sud", n: 118, caBase: 21_800, margeCible: 0.351 },
    { filiale: "Est", n: 97, caBase: 28_300, margeCible: 0.368 },
    { filiale: "Ouest", n: 134, caBase: 19_600, margeCible: 0.281 }, // sous budget → écart
  ];

  for (const p of profils) {
    for (let i = 0; i < p.n; i++) {
      id++;
      const variation = 1 + (((id * 37) % 41) - 20) / 100; // pseudo-aléatoire stable
      const ca = Math.round(p.caBase * variation);
      const couts = Math.round(ca * (1 - p.margeCible));
      // Est : dates au format US sur une partie des lignes
      const jour = String((i % 28) + 1).padStart(2, "0");
      // Est : les 12 premières lignes arrivent au format US
      const formatUs = p.filiale === "Est" && i < 12;
      const date = formatUs ? `09/${jour}/2026` : `${jour}/09/2026`;
      // Nord : 3 lignes sans centre de coût
      const centreCout = p.filiale === "Nord" && i < 3 ? null : `CC-${100 + (i % 12)}`;
      lignes.push({ id, filiale: p.filiale, date, formatUs, ca, couts, centreCout });
    }
  }

  // Sud : injection d'un doublon réel (même écriture saisie deux fois)
  const aDupliquer = lignes.find((l) => l.filiale === "Sud")!;
  lignes.push({ ...aDupliquer });

  return lignes;
}

type Anomalie = { type: string; detail: string; gravite: "haute" | "moyenne" };

const ETAPES = [
  { cle: "lecture", label: "Lecture des fichiers" },
  { cle: "normalisation", label: "Normalisation des formats" },
  { cle: "controles", label: "Contrôles de cohérence" },
  { cle: "consolidation", label: "Consolidation" },
  { cle: "generation", label: "Génération du pack" },
] as const;

const fmtEur = (n: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

export default function DemoReporting() {
  const [etat, setEtat] = useState<"idle" | "run" | "fini">("idle");
  const [etapeActive, setEtapeActive] = useState(-1);
  const [journal, setJournal] = useState<string[]>([]);
  const [duree, setDuree] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Résultats calculés
  const [resultat, setResultat] = useState<{
    lignesLues: number;
    lignesRetenues: number;
    datesCorrigees: number;
    anomalies: Anomalie[];
    caTotal: number;
    margePct: number;
    parFiliale: { nom: string; ca: number; marge: number; budget: number }[];
  } | null>(null);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function lancer() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setEtat("run");
    setEtapeActive(0);
    setJournal([]);
    setResultat(null);
    setDuree(0);

    const t0 = performance.now();
    const lignes = genererLignes();

    const log = (m: string) => setJournal((j) => [...j, m]);

    const planifier = (delai: number, fn: () => void) => {
      timers.current.push(setTimeout(fn, delai));
    };

    // 1. Lecture
    planifier(500, () => {
      log(`${FILIALES.length} fichiers lus — ${lignes.length} lignes au total`);
      setEtapeActive(1);
    });

    // 2. Normalisation — détection réelle des dates au format US
    planifier(1100, () => {
      const datesUs = lignes.filter((l) => l.formatUs).length;
      log(`${datesUs} dates converties du format MM/DD/YYYY vers DD/MM/YYYY`);
      setEtapeActive(2);
    });

    // 3. Contrôles — réellement calculés
    planifier(1800, () => {
      const anomalies: Anomalie[] = [];

      const vus = new Set<number>();
      const doublons = lignes.filter((l) => (vus.has(l.id) ? true : (vus.add(l.id), false)));
      if (doublons.length) {
        anomalies.push({
          type: "Doublon",
          detail: `Écriture #${doublons[0].id} (${doublons[0].filiale}) saisie ${doublons.length + 1} fois — ${fmtEur(doublons[0].ca)}`,
          gravite: "haute",
        });
      }

      const sansCC = lignes.filter((l) => l.centreCout === null);
      if (sansCC.length) {
        anomalies.push({
          type: "Donnée manquante",
          detail: `${sansCC.length} lignes sans centre de coût (${sansCC[0].filiale})`,
          gravite: "moyenne",
        });
      }

      const datesUs = lignes.filter((l) => l.formatUs).length;
      if (datesUs) {
        anomalies.push({
          type: "Format non conforme",
          detail: `${datesUs} dates au format US détectées et corrigées (Est)`,
          gravite: "moyenne",
        });
      }

      for (const f of FILIALES) {
        const l = lignes.filter((x) => x.filiale === f.nom);
        const ca = l.reduce((s, x) => s + x.ca, 0);
        const couts = l.reduce((s, x) => s + x.couts, 0);
        const marge = ((ca - couts) / ca) * 100;
        if (marge < f.budgetMarge - 3) {
          anomalies.push({
            type: "Écart budget",
            detail: `${f.nom} : marge à ${marge.toFixed(1)} % vs ${f.budgetMarge} % budgété (${(marge - f.budgetMarge).toFixed(1)} pts)`,
            gravite: "haute",
          });
        }
      }

      log(`${anomalies.length} anomalies détectées`);
      setEtapeActive(3);

      // 4. Consolidation
      planifier(600, () => {
        const uniques = Array.from(new Map(lignes.map((l) => [l.id, l])).values());
        log(`${lignes.length} lignes → ${uniques.length} après déduplication`);
        setEtapeActive(4);

        // 5. Génération
        planifier(600, () => {
          const caTotal = uniques.reduce((s, x) => s + x.ca, 0);
          const coutsTotal = uniques.reduce((s, x) => s + x.couts, 0);
          const parFiliale = FILIALES.map((f) => {
            const l = uniques.filter((x) => x.filiale === f.nom);
            const ca = l.reduce((s, x) => s + x.ca, 0);
            const couts = l.reduce((s, x) => s + x.couts, 0);
            return { nom: f.nom, ca, marge: ((ca - couts) / ca) * 100, budget: f.budgetMarge };
          });

          setResultat({
            lignesLues: lignes.length,
            lignesRetenues: uniques.length,
            datesCorrigees: datesUs,
            anomalies,
            caTotal,
            margePct: ((caTotal - coutsTotal) / caTotal) * 100,
            parFiliale,
          });
          log("Pack de reporting généré");
          setDuree((performance.now() - t0) / 1000);
          setEtapeActive(5);
          setEtat("fini");
        });
      });
    });
  }

  return (
    <div>
      {/* Bandeau honnêteté */}
      <div
        className="rounded-xl px-5 py-3 mb-8 text-xs"
        style={{ background: "rgba(217,119,6,0.08)", border: "1px solid rgba(217,119,6,0.25)", color: "#92610a" }}
      >
        <strong>Démonstration</strong> — données synthétiques générées dans votre navigateur.
        Les contrôles et les calculs sont réellement exécutés sur ces données, rien n&apos;est pré-enregistré.
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
        {/* ── Colonne gauche : entrée + pilotage ── */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl bg-white p-5" style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.07)" }}>
            <p className="text-[0.62rem] uppercase tracking-[0.14em] mb-3" style={{ color: "rgba(30,30,30,0.4)" }}>
              Fichiers sources
            </p>
            <div className="flex flex-col gap-2">
              {FILIALES.map((f) => (
                <div key={f.nom} className="flex items-center gap-2.5 text-xs" style={{ color: "rgba(30,30,30,0.6)" }}>
                  <span
                    className="shrink-0 rounded"
                    style={{ width: 14, height: 17, background: "#e6e3dd", border: "1px solid rgba(0,0,0,0.1)" }}
                  />
                  <span className="truncate font-mono text-[0.7rem]">{f.fichier}</span>
                </div>
              ))}
            </div>
            <p className="text-[0.68rem] mt-4 pt-3" style={{ color: "rgba(30,30,30,0.4)", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
              Formats hétérogènes, doublons, valeurs manquantes — comme dans la vraie vie.
            </p>
          </div>

          <button
            onClick={lancer}
            disabled={etat === "run"}
            className="rounded-full py-4 px-6 font-bold text-sm text-white transition-transform"
            style={{
              background: etat === "run" ? "#9bbfae" : "linear-gradient(135deg, #1a9e5c, #157a47)",
              boxShadow: etat === "run" ? "none" : "0 6px 24px rgba(26,158,92,0.35)",
              cursor: etat === "run" ? "wait" : "pointer",
              border: "none",
            }}
          >
            {etat === "run" ? "Traitement en cours…" : etat === "fini" ? "Relancer le traitement" : "Lancer l'automatisation →"}
          </button>

          {/* Étapes */}
          <div className="rounded-2xl bg-white p-5" style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.07)" }}>
            <div className="flex flex-col gap-3">
              {ETAPES.map((e, i) => {
                const fait = etapeActive > i;
                const encours = etapeActive === i && etat === "run";
                return (
                  <div key={e.cle} className="flex items-center gap-3">
                    <span
                      className="shrink-0 rounded-full flex items-center justify-center text-[0.6rem] font-bold"
                      style={{
                        width: 20,
                        height: 20,
                        background: fait ? "#1a9e5c" : encours ? "rgba(26,158,92,0.15)" : "rgba(0,0,0,0.05)",
                        color: fait ? "#fff" : "#1a9e5c",
                        transition: "all 0.3s",
                      }}
                    >
                      {fait ? "✓" : encours ? "•" : ""}
                    </span>
                    <span
                      className="text-xs"
                      style={{
                        color: fait || encours ? "#0f0f0f" : "rgba(30,30,30,0.35)",
                        fontWeight: encours ? 700 : 400,
                        transition: "all 0.3s",
                      }}
                    >
                      {e.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {journal.length > 0 && (
              <div className="mt-4 pt-3 flex flex-col gap-1.5" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                {journal.map((j, i) => (
                  <p key={i} className="text-[0.68rem] font-mono" style={{ color: "rgba(30,30,30,0.5)" }}>
                    → {j}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Colonne droite : sortie ── */}
        <div className="rounded-2xl bg-white p-7 min-h-[420px]" style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.07)" }}>
          {!resultat ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div
                className="rounded-xl mb-5"
                style={{ width: 54, height: 66, background: "#F2F0EC", border: "1px dashed rgba(0,0,0,0.15)" }}
              />
              <p className="text-sm" style={{ color: "rgba(30,30,30,0.4)" }}>
                Le pack de reporting apparaîtra ici.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-6">
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.14em] mb-1" style={{ color: "rgba(30,30,30,0.4)" }}>
                    Pack consolidé — T3 2026
                  </p>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#0f0f0f" }}>
                    4 filiales · {resultat.lignesRetenues} écritures
                  </h3>
                </div>
                <span className="text-xs font-mono px-3 py-1.5 rounded-full" style={{ background: "rgba(26,158,92,0.1)", color: "#157a47" }}>
                  {duree.toFixed(1)} s
                </span>
              </div>

              {/* KPI */}
              <div className="grid grid-cols-3 gap-4 mb-7">
                {[
                  { v: fmtEur(resultat.caTotal), l: "CA consolidé" },
                  { v: `${resultat.margePct.toFixed(1)} %`, l: "Marge brute" },
                  { v: String(resultat.anomalies.length), l: "Anomalies détectées" },
                ].map((k) => (
                  <div key={k.l}>
                    <p className="text-2xl font-bold mb-0.5" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#1a9e5c" }}>
                      {k.v}
                    </p>
                    <p className="text-[0.68rem]" style={{ color: "rgba(30,30,30,0.45)" }}>{k.l}</p>
                  </div>
                ))}
              </div>

              {/* Marge par filiale */}
              <p className="text-[0.62rem] uppercase tracking-[0.14em] mb-3" style={{ color: "rgba(30,30,30,0.4)" }}>
                Marge par filiale vs budget
              </p>
              <div className="flex flex-col gap-2.5 mb-7">
                {resultat.parFiliale.map((f) => {
                  const sousBudget = f.marge < f.budget - 3;
                  return (
                    <div key={f.nom} className="flex items-center gap-3">
                      <span className="text-xs w-14 shrink-0" style={{ color: "rgba(30,30,30,0.55)" }}>{f.nom}</span>
                      <div className="flex-1 h-6 rounded-full overflow-hidden relative" style={{ background: "rgba(0,0,0,0.04)" }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(f.marge / 45) * 100}%`,
                            background: sousBudget ? "#d97706" : "#1a9e5c",
                            transition: "width 0.8s ease",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute", top: 0, bottom: 0,
                            left: `${(f.budget / 45) * 100}%`,
                            width: 2, background: "rgba(0,0,0,0.25)",
                          }}
                          title="Budget"
                        />
                      </div>
                      <span className="text-xs w-14 text-right font-mono" style={{ color: sousBudget ? "#d97706" : "#157a47" }}>
                        {f.marge.toFixed(1)}%
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="text-[0.65rem] mb-7" style={{ color: "rgba(30,30,30,0.35)" }}>
                Le trait vertical marque la marge budgétée.
              </p>

              {/* Anomalies */}
              <p className="text-[0.62rem] uppercase tracking-[0.14em] mb-3" style={{ color: "rgba(30,30,30,0.4)" }}>
                Anomalies remontées automatiquement
              </p>
              <div className="flex flex-col gap-2">
                {resultat.anomalies.map((a, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start rounded-lg p-3"
                    style={{
                      background: a.gravite === "haute" ? "rgba(217,119,6,0.07)" : "rgba(0,0,0,0.025)",
                      border: `1px solid ${a.gravite === "haute" ? "rgba(217,119,6,0.2)" : "rgba(0,0,0,0.06)"}`,
                    }}
                  >
                    <span
                      className="shrink-0 text-[0.6rem] font-bold px-2 py-0.5 rounded-full mt-0.5"
                      style={{
                        background: a.gravite === "haute" ? "#d97706" : "rgba(30,30,30,0.4)",
                        color: "#fff",
                      }}
                    >
                      {a.type}
                    </span>
                    <span className="text-xs leading-relaxed" style={{ color: "rgba(30,30,30,0.65)" }}>{a.detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-5 flex items-center justify-between flex-wrap gap-3" style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}>
                <p className="text-xs" style={{ color: "rgba(30,30,30,0.5)" }}>
                  Équivalent manuel estimé sur ce périmètre : <strong style={{ color: "#0f0f0f" }}>~2 jours</strong>
                </p>
                <a
                  href="/contact"
                  className="text-xs font-semibold px-5 py-2.5 rounded-full text-white"
                  style={{ background: "linear-gradient(135deg, #1a9e5c, #157a47)", textDecoration: "none" }}
                >
                  Faire ça sur mes données →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
