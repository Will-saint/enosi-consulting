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
