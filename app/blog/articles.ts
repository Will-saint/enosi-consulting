export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  date: string;
  readTime: number;
  category: "IA" | "Data" | "Pilotage" | "Performance";
  excerpt: string;
  keywords: string[];
  content: string;
};

export const articles: Article[] = [
  {
    slug: "pourquoi-90-pourcent-cas-usage-ia-ne-passent-pas-en-production",
    title: "Pourquoi 90 % des cas d'usage IA ne passent pas en production",
    seoTitle: "Pourquoi les cas d'usage IA échouent avant la production — Enosi Consulting",
    seoDescription: "80 à 90 % des POC IA n'atteignent jamais la production. Voici les 4 vraies raisons, et la méthode pour en faire partie des 10 % qui réussissent.",
    date: "2026-05-20",
    readTime: 7,
    category: "IA",
    excerpt: "Un chiffre que tous les directeurs transformation connaissent : la grande majorité des projets IA ne dépassent jamais le stade du POC. Les raisons sont presque toujours les mêmes — et elles n'ont pas grand-chose à voir avec la technologie.",
    keywords: ["déploiement cas d'usage IA", "passage POC à production IA", "projet IA échec", "cas d'usage IA finance"],
    content: `
<p class="article-lead">Un chiffre que tous les directeurs transformation connaissent sans toujours l'admettre&nbsp;: selon Gartner, 80&nbsp;% des projets IA n'atteignent jamais la production. Dans la pratique, sur les entreprises françaises de taille intermédiaire, ce chiffre est probablement encore plus élevé. La moitié des POC sont abandonnés avant même d'avoir été présentés en COMEX.</p>

<p>Ce n'est pas une question de compétences techniques. Les équipes data sont de plus en plus solides. Les outils sont accessibles. Les frameworks open-source font ce qu'ils promettent. L'échec vient d'ailleurs — et comprendre d'où il vient est la première condition pour en sortir.</p>

<h2>Les 4 vraies raisons de l'échec</h2>

<h3>1. Le problème n'était pas le bon</h3>

<p>La majorité des échecs IA commencent avant la première ligne de code. On identifie un "sujet IA" dans un comité de direction, on monte une équipe, on démarre un POC — sans jamais avoir répondu à une question fondamentale&nbsp;: ce problème mérite-t-il vraiment une solution par apprentissage automatique&nbsp;?</p>

<p>L'IA est une réponse à un problème de <strong>prédiction ou de détection dans des données volumineuses</strong>. Ce n'est pas une réponse à un problème de gouvernance des données, à un manque de processus, à des flux non documentés. Or, dans la majorité des cas d'usage que nous voyons échouer, le problème sous-jacent n'était pas de l'ordre de la prédiction — c'était un problème de structuration des données ou d'organisation.</p>

<p>Un modèle de machine learning ne peut pas compenser des données de mauvaise qualité. Il ne peut pas remplacer un processus qui n'existe pas. Il ne peut pas créer de la valeur là où le problème n'a pas été correctement posé en amont.</p>

<h3>2. Les données n'étaient pas prêtes</h3>

<p>C'est la deuxième cause d'échec, et de très loin la plus fréquente dans nos diagnostics. Un POC peut fonctionner en environnement de lab avec des données nettoyées manuellement sur trois mois d'historique. En production, c'est différent&nbsp;: les données arrivent brutes, incomplètes, mal labellisées, dans des formats qui changent selon les versions des systèmes source.</p>

<p>La transition POC&nbsp;→&nbsp;production implique de gérer&nbsp;:</p>
<ul>
  <li>La qualité des données en temps réel (et non sur un échantillon de démonstration)</li>
  <li>La dérive du modèle au fil du temps (<em>concept drift</em>) quand les patterns changent</li>
  <li>Les cas hors distribution — tout ce que le modèle n'a jamais vu à l'entraînement</li>
  <li>Les données manquantes, en retard ou contradictoires entre systèmes</li>
</ul>

<p>La plupart des équipes ne sont pas préparées à ça — non pas parce qu'elles ne sont pas compétentes, mais parce que le POC n'a pas été conçu pour tester ces conditions de production réelle.</p>

<h3>3. Pas de sponsor métier suffisamment engagé</h3>

<p>Un projet IA en production change des processus. Il change des habitudes de travail. Il demande de la formation, de l'accompagnement, parfois de gérer de la résistance. Sans un sponsor métier clairement identifié, convaincu et disponible sur la durée, le modèle peut techniquement passer en production — et personne ne l'utilise.</p>

<p>Le déploiement technique n'est pas la fin du projet. C'est le début de l'adoption. Et l'adoption ne se décrète pas&nbsp;: elle se construit avec un sponsor qui a la légitimité et la disponibilité pour faire changer les pratiques dans son périmètre opérationnel.</p>

<p>Ce point est systématiquement sous-estimé dans les business cases. On modélise les gains, on ne modélise pas le temps sponsor nécessaire pour que les équipes adoptent réellement l'outil.</p>

<h3>4. Le ROI n'avait pas été défini avant de commencer</h3>

<p>"On verra ce que ça donne." C'est la phrase qui annonce l'abandon. Sans définition préalable du succès — une métrique cible précise, un seuil de performance acceptable, un horizon de mesure concret — il est impossible de défendre le projet en COMEX à six mois. Et sans défense en COMEX, le budget ne suit pas. Et sans budget, le projet meurt.</p>

<p>Définir le ROI avant de commencer n'est pas une formalité. C'est ce qui permet de&nbsp;:</p>
<ul>
  <li>Prioriser entre dix cas d'usage potentiels sur un critère objectif</li>
  <li>Choisir le bon périmètre de déploiement initial (ni trop large, ni trop étroit)</li>
  <li>Savoir quand s'arrêter si les résultats ne sont pas au rendez-vous</li>
  <li>Communiquer en interne sur ce qui a été livré et ce qui reste à faire</li>
</ul>

<h2>Le modèle qui fonctionne</h2>

<p>Les projets IA qui passent en production — et qui restent utilisés six mois après le déploiement — partagent systématiquement quatre caractéristiques.</p>

<p><strong>Le problème est formulé en termes de décision.</strong> Pas "on aimerait utiliser l'IA sur nos données de ventes", mais "nous avons besoin de savoir dans les 48h si une commande va être retournée, pour décider d'activer ou non un processus de rétention client." La formulation en termes de décision force à clarifier ce qu'on attend réellement du modèle.</p>

<p><strong>Les données nécessaires existent, sont accessibles et sont de qualité suffisante avant le lancement.</strong> Pas "on les aura bientôt". Maintenant. Un audit données rapide (deux à trois jours) avant tout développement évite des mois de travail en pure perte.</p>

<p><strong>Un sponsor métier est nommé avec une vraie disponibilité.</strong> Pas juste son nom sur le projet — une présence réelle, des revues régulières, un engagement à participer au déploiement et à la formation de ses équipes.</p>

<p><strong>Le succès est défini dès le démarrage.</strong> Une métrique, un seuil, une date de revue. "Le modèle détecte au moins 85&nbsp;% des anomalies de stock avec moins de 10&nbsp;% de faux positifs, mesuré sur les données de janvier à juin, revu en comité le 15 juillet."</p>

<h2>Comment sélectionner les bons cas d'usage</h2>

<p>Nous utilisons une grille de scoring sur cinq dimensions&nbsp;:</p>

<ul>
  <li><strong>Clarté du problème</strong>&nbsp;: est-ce réellement un problème de prédiction ou de détection dans des données&nbsp;?</li>
  <li><strong>Disponibilité des données</strong>&nbsp;: qualité, volume, accessibilité, labellisation</li>
  <li><strong>Impact business</strong>&nbsp;: que se passe-t-il concrètement si ça fonctionne&nbsp;? Chiffrable en €, en jours, en ETP&nbsp;?</li>
  <li><strong>Faisabilité technique</strong>&nbsp;: complexité estimée, dépendances systèmes, délai réaliste</li>
  <li><strong>Sponsor et adoption</strong>&nbsp;: qui porte le projet en interne&nbsp;? Son équipe est-elle prête&nbsp;?</li>
</ul>

<p>Sur 12&nbsp;cas d'usage scorés — une journée de travail en atelier avec les directions concernées — la majorité des équipes réalisent que 2 à 3 méritent d'être lancés maintenant. Les autres sont soit prématurés (données non prêtes), soit insuffisamment prioritaires, soit fondamentalement pas des problèmes d'apprentissage automatique.</p>

<p>Cette discipline de sélection est ce qui fait la différence entre une direction transformation qui empile les POC sans suite et une direction transformation qui met des modèles en production et mesure leur impact.</p>

<h2>En résumé</h2>

<p>L'échec des projets IA n'est pas une fatalité. Il est prévisible, et dans la majorité des cas, évitable avec deux à trois jours de cadrage rigoureux avant tout développement. Le problème n'est pas que l'IA ne fonctionne pas — c'est qu'on lui demande de fonctionner dans des conditions où même une solution plus simple échouerait.</p>

<p>Commencer par la décision que vous voulez améliorer. Vérifier que les données sont là. Nommer un sponsor réel. Définir le succès. Dans cet ordre.</p>
    `,
  },

  {
    slug: "reporting-qui-informe-vs-reporting-qui-decide",
    title: "Le reporting qui informe vs le reporting qui décide — 4 différences",
    seoTitle: "Reporting décisionnel vs reporting informatif — comment transformer votre pilotage",
    seoDescription: "La plupart des reportings COMEX informent sans décider. Voici les 4 différences structurelles entre un reporting passif et un pilotage décisionnel — et comment faire la transition.",
    date: "2026-05-13",
    readTime: 6,
    category: "Pilotage",
    excerpt: "La plupart des reportings COMEX sont lus, parfois commentés, rarement décisifs. Ce n'est pas une question de qualité des données — c'est une question de conception. Voici les 4 différences entre un reporting qui informe et un pilotage qui décide.",
    keywords: ["automatisation reporting financier", "refonte indicateurs COMEX", "pilotage décisionnel", "reporting direction générale"],
    content: `
<p class="article-lead">La question n'est pas de savoir si votre reporting est juste. Il l'est probablement. La question est de savoir s'il est <strong>utilisé pour décider</strong> — ou s'il est consulté, discuté, puis rangé jusqu'au mois suivant.</p>

<p>Dans la majorité des directions que nous rencontrons, la réponse honnête est la deuxième. Les chiffres sont là, les graphiques sont propres, le PowerPoint est envoyé le 8 du mois. Et pourtant, les décisions se prennent ailleurs — dans des échanges informels, sur la base d'intuitions, ou en retard parce que personne n'avait les bons chiffres au bon moment.</p>

<p>Ce n'est pas un problème de données. C'est un problème de conception du dispositif de pilotage. Et il a quatre symptômes caractéristiques.</p>

<h2>Différence 1&nbsp;: L'orientation — passé vs futur</h2>

<p>Un reporting qui informe vous dit ce qui s'est passé. Un reporting qui décide vous dit ce qui va se passer — ou ce qui risque de ne pas se passer comme prévu.</p>

<p>La différence n'est pas philosophique. Elle est concrète&nbsp;: un reporting orienté passé vous apprend, au 15 du mois, que votre CA de janvier a été inférieur de 8&nbsp;% à l'objectif. Vous pouvez le commenter, chercher des explications, promettre de corriger. Mais vous ne pouvez rien faire pour janvier — il est terminé.</p>

<p>Un reporting orienté décision vous signale, au 20 janvier, que les commandes en attente de confirmation laissent présager un écart de 8&nbsp;% sur le CA du mois. Vous avez encore dix jours pour agir — accélérer une facturation, activer un processus commercial, prendre une décision budgétaire.</p>

<p>La question de transition&nbsp;: <em>pour chaque indicateur de votre reporting actuel, demandez-vous à quel moment vous le consultez et quelle décision vous pouvez encore prendre à ce stade.</em> Si la réponse est "aucune", l'indicateur informe sans piloter.</p>

<h2>Différence 2&nbsp;: La structure — compte-rendu vs signal d'action</h2>

<p>La plupart des reportings sont structurés comme des comptes-rendus&nbsp;: un indicateur, sa valeur, son évolution, un commentaire. C'est une structure documentaire. Elle est utile pour l'archive — pas pour la décision en réunion.</p>

<p>Un reporting orienté décision est structuré autour de <strong>signaux d'action</strong>&nbsp;: il commence par les indicateurs hors cible, en met en évidence la cause probable, et propose une ou deux options de réponse. Le décideur n'a pas à chercher ce qui mérite son attention — le dispositif l'a fait pour lui.</p>

<p>En pratique, cela signifie&nbsp;:</p>
<ul>
  <li>Les indicateurs dans la norme sont visibles mais ne prennent pas de place</li>
  <li>Les indicateurs hors seuil remontent automatiquement, avec leur niveau d'urgence</li>
  <li>Chaque signal est accompagné d'une question décisionnelle — pas juste d'un chiffre</li>
  <li>La page de garde résume les 3 à 5 points qui demandent une action avant la prochaine réunion</li>
</ul>

<p>Un reporting bien conçu se lit en dix minutes, pas en quarante-cinq. Si votre COMEX consacre plus d'une heure à "lire le reporting", c'est que le reporting fait un travail qui devrait avoir été fait en amont.</p>

<h2>Différence 3&nbsp;: La fréquence — mensuel vs continu</h2>

<p>Le cycle mensuel est un héritage de l'époque où les données se collectaient manuellement. Aujourd'hui, dans la majorité des entreprises que nous accompagnons, les données qui alimentent le reporting mensuel sont disponibles en continu — ou pourraient l'être avec des connexions simples.</p>

<p>Le problème du reporting mensuel n'est pas sa fréquence en elle-même. C'est qu'il crée une <strong>illusion de pilotage</strong>&nbsp;: on a l'impression de suivre la performance parce qu'on la mesure régulièrement. Mais une mesure mensuelle, sur un business qui évolue à la semaine, ne permet pas d'agir — elle permet seulement de constater.</p>

<p>La transition vers un pilotage continu ne nécessite pas de tout révolutionner. Elle commence par identifier les 5 à 8 indicateurs véritablement critiques — ceux sur lesquels une dérive de quelques jours mérite une réaction — et de mettre en place des alertes automatiques sur ces indicateurs uniquement. Le reporting mensuel peut rester pour les indicateurs de fond. L'alerte automatique prend en charge le temps réel.</p>

<p>Un de nos clients dans le secteur industriel a réduit son cycle de reporting de 6&nbsp;jours à 1&nbsp;jour, tout en ajoutant 5 alertes automatiques sur ses indicateurs critiques. Résultat&nbsp;: les réunions COMEX mensuelles durent moitié moins longtemps, et les décisions urgentes sont prises 10 à 15 jours plus tôt.</p>

<h2>Différence 4&nbsp;: L'usage — lecture vs rituel décisionnel</h2>

<p>La différence la plus déterminante n'est pas technique. C'est organisationnelle. Un reporting devient décisionnel quand il est le support d'un <strong>rituel décisionnel</strong> — une instance dont le seul objectif est de trancher, pas de commenter.</p>

<p>Concrètement&nbsp;: une réunion de pilotage qui fonctionne ne commence pas par "on va regarder les chiffres du mois". Elle commence par "les signaux du mois montrent ces trois points hors norme — que décide-t-on&nbsp;?" La distinction semble subtile. Elle change tout au temps collectif dépensé et à la qualité des décisions prises.</p>

<p>Les rituels décisionnels efficaces partagent trois caractéristiques&nbsp;:</p>
<ul>
  <li><strong>Un ordre du jour centré sur les décisions à prendre</strong>, pas sur les informations à partager (les informations sont envoyées en amont, lues individuellement)</li>
  <li><strong>Des décisions formalisées en sortie de réunion</strong>&nbsp;: qui fait quoi, avant quand, avec quels moyens</li>
  <li><strong>Un suivi des décisions précédentes</strong> avant d'en prendre de nouvelles — pour ne pas retomber dans les mêmes ornières</li>
</ul>

<h2>Par où commencer&nbsp;?</h2>

<p>La transition d'un reporting informatif vers un pilotage décisionnel ne se fait pas en changeant le logiciel. Elle se fait en changeant la conception.</p>

<p>Un diagnostic pratique en trois questions&nbsp;:</p>
<ul>
  <li>Sur vos 15 à 20 indicateurs actuels, combien permettent encore une décision au moment où vous les consultez&nbsp;? (Si moins de la moitié, vous avez un reporting historique, pas décisionnel.)</li>
  <li>Quelle était la dernière décision importante prise explicitement à partir de votre reporting mensuel&nbsp;? Vous souvenez-vous de laquelle&nbsp;?</li>
  <li>Combien de jours s'écoulent entre la clôture de votre période et la disponibilité de votre reporting&nbsp;? (Au-delà de 5 jours, vous pilotez avec un rétroviseur.)</li>
</ul>

<p>Si ces questions révèlent un écart entre ce que votre dispositif devrait faire et ce qu'il fait réellement, la transformation n'est pas une question de budget ou de technologie. C'est une question de choix — sur ce que vous voulez que vos données fassent concrètement pour votre organisation.</p>
    `,
  },

  {
    slug: "cout-cache-reporting-mensuel-manuel",
    title: "Le coût caché d'un reporting mensuel manuel",
    seoTitle: "Coût réel du reporting mensuel manuel — calcul et alternatives",
    seoDescription: "Un reporting mensuel produit manuellement coûte bien plus qu'on ne le pense. Voici comment calculer le coût réel — et ce qu'il est possible de récupérer.",
    date: "2026-05-06",
    readTime: 5,
    category: "Performance",
    excerpt: "Combien coûte réellement la production de votre reporting mensuel ? La plupart des directions n'ont jamais fait ce calcul. Quand on le fait, le résultat est rarement confortable.",
    keywords: ["réduction temps clôture comptable", "automatisation reporting financier", "coût reporting mensuel", "consultant Power BI finance"],
    content: `
<p class="article-lead">La question semble triviale. Elle ne l'est pas. La majorité des directions financières et de performance que nous rencontrons n'ont jamais calculé ce que leur coûte réellement leur reporting mensuel — en temps, en charge cognitive, en opportunités manquées.</p>

<p>Quand on fait le calcul, le résultat est rarement confortable.</p>

<h2>La méthode de calcul</h2>

<p>Le coût d'un reporting manuel se décompose en quatre éléments&nbsp;:</p>

<h3>1. Le temps de production direct</h3>

<p>Combien d'heures par mois votre équipe consacre-t-elle à extraire les données, les consolider, les vérifier, les mettre en forme et les envoyer&nbsp;? Dans les entreprises que nous accompagnons, ce chiffre varie entre 2 et 40 jours/homme par mois — avec une médiane autour de 5 à 8 jours/homme pour un reporting COMEX standard.</p>

<p>Si 3 personnes travaillent 2 jours chacune sur le reporting, c'est 6 jours/homme. À 500 €/jour de coût chargé moyen (DAF + contrôleurs de gestion + assistants), c'est 3 000 € par mois de production directe. Sur l'année&nbsp;: 36 000 € — uniquement pour produire les chiffres, avant même de les lire.</p>

<h3>2. Les vérifications et corrections</h3>

<p>Combien de fois les chiffres sont-ils contestés en réunion&nbsp;? Combien de fois faut-il reprendre un chiffre parce que deux sources ne s'accordent pas&nbsp;? Combien d'emails de type "tu peux me reconfirmer le chiffre page 4&nbsp;?" reçoit votre équipe après chaque diffusion&nbsp;?</p>

<p>Ce temps de correction post-diffusion est rarement comptabilisé — et pourtant il est souvent équivalent au temps de production lui-même. Il génère en plus une charge cognitive permanente&nbsp;: l'angoisse de diffuser des chiffres faux, le sentiment de devoir se justifier en réunion plutôt que de décider.</p>

<h3>3. Le coût du retard</h3>

<p>C'est le coût le plus invisible et le plus important. Si votre reporting mensuel de janvier est disponible le 12 ou le 15 février, les décisions qui en dépendent ont 12 à 15 jours de retard. Qu'est-ce que ça coûte, concrètement, de décider 12 jours plus tard&nbsp;?</p>

<p>Sur une commande fournisseur, c'est peut-être rien. Sur une décision de recrutement, une réorientation commerciale, une révision de provisions&nbsp;: le retard a un coût réel, difficilement quantifiable mais rarement nul.</p>

<p>Une façon d'approcher ce chiffre&nbsp;: pensez à la dernière décision importante que vous auriez aimé prendre plus tôt. Quel aurait été l'impact d'une disponibilité de l'information 15 jours plus tôt&nbsp;?</p>

<h3>4. Le coût d'opportunité de l'équipe</h3>

<p>Le temps passé à produire le reporting est du temps qui n'est pas consacré à l'analyse, à l'aide à la décision, à l'amélioration des processus. Si vos contrôleurs de gestion passent 30&nbsp;% de leur temps à produire des tableaux Excel, c'est 30&nbsp;% de leur capacité qui n'est pas disponible pour ce pour quoi ils ont été recrutés&nbsp;: comprendre ce que les chiffres signifient et conseiller les opérationnels.</p>

<h2>Un exemple concret</h2>

<p>Prenons une direction financière de taille moyenne (3 contrôleurs de gestion + 1 DAF), avec un reporting mensuel qui prend 6 jours/homme à produire et 2 jours de corrections et échanges post-diffusion&nbsp;:</p>

<ul>
  <li>Production directe&nbsp;: 6 j × 500 €/j = 3 000 €/mois → <strong>36 000 €/an</strong></li>
  <li>Corrections et échanges&nbsp;: 2 j × 500 €/j = 1 000 €/mois → <strong>12 000 €/an</strong></li>
  <li>Sous-total coût direct&nbsp;: <strong>48 000 €/an</strong></li>
</ul>

<p>Et ce calcul ne comprend pas le coût du retard ni le coût d'opportunité de l'équipe.</p>

<p>48 000 € par an pour savoir ce qui s'est passé le mois dernier, 12 jours après la clôture.</p>

<h2>Ce qu'il est possible de récupérer</h2>

<p>La bonne nouvelle&nbsp;: la majorité de ce coût est récupérable. Pas entièrement, pas immédiatement — mais substantiellement, avec une intervention ciblée.</p>

<p>Dans les missions de pilotage que nous menons, voici ce que nos clients récupèrent en moyenne&nbsp;:</p>

<ul>
  <li><strong>Réduction du temps de production de 60 à 80&nbsp;%</strong> — en automatisant les extractions, les consolidations et les mises en forme répétitives. Le contrôleur passe de 2 jours de production à 2 heures de vérification et validation.</li>
  <li><strong>Disponibilité J+1 au lieu de J+10</strong> — en connectant directement les sources aux outils de restitution, sans étape manuelle intermédiaire.</li>
  <li><strong>Suppression quasi-totale des corrections post-diffusion</strong> — quand les chiffres viennent d'une source unique et auditée, les contestations disparaissent. Pas parce que tout le monde est d'accord — mais parce que les désaccords portent sur l'interprétation, pas sur les données.</li>
</ul>

<h2>Pourquoi ce n'est pas déjà fait</h2>

<p>Si ces gains sont accessibles, pourquoi la plupart des directions financières n'ont-elles pas encore automatisé leur reporting&nbsp;? Plusieurs raisons récurrentes&nbsp;:</p>

<p><strong>L'urgence du quotidien écrase l'investissement dans l'amélioration.</strong> Pendant que l'équipe produit le reporting de mars, il n'y a personne pour réfléchir à comment produire celui d'avril différemment. C'est un piège classique&nbsp;: on est trop occupé à subir le problème pour avoir le temps de le résoudre.</p>

<p><strong>La peur de toucher à "ce qui fonctionne".</strong> Le reporting actuel a ses défauts, mais il est connu. Les données qu'il produit sont vérifiées depuis des années. Y toucher, c'est prendre le risque de casser quelque chose sans avoir la garantie que ce qui remplace sera mieux.</p>

<p><strong>La dispersion des outils et des sources.</strong> ERP, CRM, outil RH, reporting agence, données Excel métier — tout consolider demande une compréhension fine de chaque source et de ses particularités. C'est précisément ce type d'intervention qui demande un regard extérieur et structuré.</p>

<h2>Par où commencer</h2>

<p>Avant tout investissement technique, un diagnostic de trois jours suffit généralement à&nbsp;:</p>
<ul>
  <li>Cartographier les sources de données et identifier les points de friction</li>
  <li>Estimer le temps réel consacré à la production du reporting</li>
  <li>Identifier les 2 à 3 automatisations qui représentent 80&nbsp;% du gain accessible</li>
  <li>Proposer une architecture simple — souvent sous Power BI — qui s'intègre dans les systèmes existants sans projet de 18 mois</li>
</ul>

<p>Le ROI d'une telle intervention est rarement difficile à calculer. La difficulté est plutôt de trouver une semaine pour se poser et regarder le problème en face — plutôt que de continuer à produire le reporting du mois prochain.</p>
    `,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const categoryColors: Record<Article["category"], string> = {
  IA:          "#d97706",
  Data:        "#4f46e5",
  Pilotage:    "#1a9e5c",
  Performance: "#0ea5e9",
};
