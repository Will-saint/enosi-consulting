export type SecteurData = {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  kicker: string;
  h1: string;
  intro: string;
  painPoints: string[];
  solutions: string[];
  caseStudy: {
    titre: string;
    contexte: string;
    resultats: string[];
    href: string;
  };
  color: string;
  offreHref: string;
  offreLabel: string;
};

export const secteurs: Record<string, SecteurData> = {
  "eti-industrielle": {
    slug: "eti-industrielle",
    metaTitle: "Consultant Data & Performance pour ETI industrielles | Enosi Consulting",
    metaDesc: "Pilotage, reporting et IA pour ETI industrielles en croissance. Structurer les indicateurs, fiabiliser les données, déployer l'IA en semaines.",
    kicker: "ETI industrielles",
    h1: "Pilotage et Data pour ETI industrielles",
    intro: "Les ETI industrielles grandissent vite. Trop vite pour que le reporting suive. Les données existent — dans l'ERP, dans Excel, dans les têtes — mais elles ne se traduisent pas en décisions claires au bon moment.",
    painPoints: [
      "Données dispersées entre ERP, Excel et outils métier sans consolidation fiable",
      "DSI légère qui ne peut pas absorber tous les besoins data",
      "COMEX qui navigue à vue sur la performance réelle de l'entreprise",
      "Clôtures mensuelles trop longues pour piloter en temps réel",
    ],
    solutions: [
      "Structuration d'un référentiel de données unique et auditable",
      "Reporting COMEX fiable, automatisé, produit en moins d'une journée",
      "Indicateurs industriels clés (marges par produit, stocks, OEE)",
      "Déploiement de cas d'usage IA sur les flux existants",
    ],
    caseStudy: {
      titre: "D'un reporting subi à un pilotage qui décide",
      contexte: "Scénario type — direction financière, ETI industrielle",
      resultats: [
        "Reporting produit en 1 jour au lieu de 6",
        "Décisions COMEX préparées avant la réunion",
        "Alertes automatiques sur 5 indicateurs critiques",
      ],
      href: "/portfolio#cas-1",
    },
    color: "#1a9e5c",
    offreHref: "/offres/pilotage",
    offreLabel: "Pilotage de la performance",
  },

  "direction-financiere": {
    slug: "direction-financiere",
    metaTitle: "Conseil Reporting et Pilotage pour Directions Financières | Enosi Consulting",
    metaDesc: "Fiabiliser le reporting, accélérer la clôture, construire un pilotage décisionnel. Pour DAF et Directions Financières d'ETI et grands groupes.",
    kicker: "Direction financière",
    h1: "Reporting et Pilotage pour Directions Financières",
    intro: "La Direction Financière produit les chiffres. Mais les chiffres ne décident pas à sa place. Entre reportings chronophages, données contestées et COMEX qui demande toujours plus — l'enjeu n'est pas la production, c'est la confiance.",
    painPoints: [
      "Clôture mensuelle trop longue — on perd le fil avant d'avoir les résultats",
      "Données contestées par les opérationnels à chaque réunion",
      "Reporting COMEX qui prend plus de temps à produire qu'à lire",
      "Indicateurs financiers déconnectés des réalités terrain",
    ],
    solutions: [
      "Refonte du processus de clôture et fiabilisation des sources",
      "Reporting COMEX automatisé, livré en une journée",
      "KPI financiers connectés aux indicateurs opérationnels",
      "Alertes automatiques sur les indicateurs critiques",
    ],
    caseStudy: {
      titre: "D'un reporting subi à un pilotage qui décide",
      contexte: "Scénario type — direction financière, ETI industrielle",
      resultats: [
        "Reporting produit en 1 jour au lieu de 6",
        "Alertes automatiques sur 5 indicateurs critiques",
        "Décisions COMEX préparées avant la réunion",
      ],
      href: "/portfolio#cas-1",
    },
    color: "#4f46e5",
    offreHref: "/offres/pilotage",
    offreLabel: "Pilotage de la performance",
  },

  "direction-transformation": {
    slug: "direction-transformation",
    metaTitle: "Conseil Data & IA pour Directions Transformation | Enosi Consulting",
    metaDesc: "Cadrer et déployer des cas d'usage IA concrets. De la priorisation à la mise en production en 6 à 10 semaines, pour les Directions Transformation.",
    kicker: "Direction transformation",
    h1: "Data & IA pour Directions Transformation",
    intro: "Les POC s'accumulent, les backlogs débordent de cas d'usage, mais en production il n'y a toujours rien. La Direction Transformation porte la promesse de l'IA — sans toujours avoir les ressources ou la méthode pour la tenir.",
    painPoints: [
      "Trop de cas d'usage identifiés sans priorisation claire ni critère ROI",
      "POC qui ne franchissent jamais la barrière de la mise en production",
      "Équipes data et métier qui ne parlent pas le même langage",
      "Business cases IA difficiles à construire et à défendre en COMEX",
    ],
    solutions: [
      "Scoring et priorisation de 10 à 15 cas d'usage en 2 semaines",
      "Déploiement d'un premier modèle en production en 6 à 8 semaines",
      "Transfert de compétences aux équipes — autonomie garantie",
      "Business case documenté et défendable avec les vrais chiffres",
    ],
    caseStudy: {
      titre: "De l'IA qui tourne en prod, pas en démo",
      contexte: "Scénario type — direction transformation, grand groupe",
      resultats: [
        "12 cas d'usage scorés et priorisés",
        "1 modèle en production en 8 semaines",
        "Détection automatisée, validée sur données historiques",
      ],
      href: "/portfolio#cas-2",
    },
    color: "#d97706",
    offreHref: "/offres/data-ia",
    offreLabel: "Data & IA pour la décision",
  },
};

export const secteurSlugs = Object.keys(secteurs);
