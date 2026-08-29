// ─────────────────────────────────────────────────────────────────────────────
// Page de vente de l'audit à 97 € (/audit).
//
// À REMPLACER VOUS-MÊME :
//   1. STRIPE_PAYMENT_LINK  → le lien de paiement Stripe
//   2. SITES_CREES          → le nombre de sites créés, s'il évolue
//   3. NEXT_PUBLIC_META_PIXEL_ID (variable d'environnement Vercel) → le pixel Meta
//
// La photo du fondateur est déjà en place : /images/tom-soa.jpg
// ─────────────────────────────────────────────────────────────────────────────

/** Lien de paiement Stripe. Tant qu'il n'est pas renseigné, les boutons sont inactifs. */
export const STRIPE_PAYMENT_LINK = "STRIPE_PAYMENT_LINK";

/** Prix affiché, délai de livraison et fenêtre de déduction. */
export const PRIX = "97 €";
export const DELAI = "48 h";
export const FENETRE_DEDUCTION = "30 jours";

/** Preuve chiffrée, à mettre à jour quand le nombre évolue. */
export const SITES_CREES = 50;

/** Le lien est-il réellement configuré ? */
export const PAIEMENT_ACTIF = STRIPE_PAYMENT_LINK !== "STRIPE_PAYMENT_LINK";
