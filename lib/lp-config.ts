// ─────────────────────────────────────────────────────────────────────────────
// Configuration de la landing page publicitaire (VSL + formulaire Pipedrive).
// Tout ce qui change d'une campagne à l'autre se règle ICI, en un seul endroit.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * URL d'embed de la VSL.
 * - YouTube  : https://www.youtube.com/embed/ID?rel=0&modestbranding=1
 * - Vimeo    : https://player.vimeo.com/video/ID
 * - Mux/Wistia : l'URL d'iframe fournie par la plateforme
 * Laisser vide affiche un bloc "vidéo à venir" (utile en préprod).
 */
export const VSL_EMBED_URL =
  "https://www.youtube.com/embed/6WEvd6GK3KQ?rel=0&modestbranding=1&iv_load_policy=3";


/** Miniature affichée avant lecture (facade). Placer le fichier dans /public. */
export const VSL_POSTER = "/lp/vsl-poster.jpg";

/** Durée annoncée sous le lecteur (texte libre, sert de repère au visiteur). */
export const VSL_DURATION = "9 min";

/**
 * Lien du formulaire Pipedrive (Web Forms → Partager → lien direct).
 * Le visiteur y est envoyé au clic sur les CTA de la landing.
 */
export const PIPEDRIVE_FORM_URL =
  "https://webforms.pipedrive.com/f/6q8kD2MjdVFcqUsxFGxmdB48PkJhfGNTp7IAGI8aFE7KN5PGIeLAnrSvQs4OuVfaH9";

/** Page de remerciement où est posé le pixel Meta (événement Lead). */
export const THANK_YOU_PATH = "/lp/merci";

/**
 * ID du pixel Meta. Renseigner NEXT_PUBLIC_META_PIXEL_ID dans les variables
 * d'environnement Vercel, ou remplacer la valeur par défaut ci-dessous.
 * Tant qu'il est vide, aucun script de tracking n'est injecté.
 */
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
