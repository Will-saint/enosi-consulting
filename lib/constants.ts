/**
 * Constantes partagées du site.
 * Tout ce qui est susceptible de changer (domaine, contact, réseaux) vit ici,
 * jamais en dur dans les pages.
 */

/** URL de prise de rendez-vous. */
export const CALENDLY_URL = "https://calendly.com/williamsaintdizier";

/**
 * URL canonique du site.
 * Pilotée par NEXT_PUBLIC_SITE_URL côté Vercel : pour basculer sur le domaine
 * définitif, il suffit de définir cette variable d'environnement (sans slash final).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://enosi-consulting.vercel.app";

/** Adresse de contact unique du site (boîte OVH/Zimbra). */
export const CONTACT_EMAIL = "contact@enosi-consulting.fr";

/**
 * Profil LinkedIn.
 * ⚠️ Le site contenait deux variantes divergentes (`williamsaintdizier` et
 * `william-saint-dizier`) — l'une des deux menait vers une page inexistante.
 * Valeur retenue : celle utilisée majoritairement. À confirmer par William.
 */
export const LINKEDIN_URL = "https://www.linkedin.com/in/williamsaintdizier";

/** Identité affichée. */
export const NOM_COMPLET = "William Saint-Dizier";
export const MARQUE = "Enosi Consulting";

/** Zones d'intervention — utilisées pour le SEO local et les mentions du site. */
export const VILLES = ["Paris", "Montpellier"] as const;
