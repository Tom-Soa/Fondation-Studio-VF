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

/**
 * Lien de paiement Stripe (Payment Link). Tant qu'il n'est pas renseigné, les
 * boutons de la page restent visibles mais inactifs.
 *
 * À régler dans Stripe, sur le lien de paiement :
 *   1. Champ personnalisé obligatoire "Adresse de votre site" : c'est ainsi
 *      que vous récupérez le site à analyser, sans formulaire séparé.
 *   2. Après le paiement, rediriger vers :
 *      https://www.actcstudio.fr/audit/merci
 *      Cette page confirme le paiement, récapitule la suite, et porte
 *      l'événement Purchase du pixel Meta.
 */
export const STRIPE_PAYMENT_LINK: string =
  "https://buy.stripe.com/9B66oJ94Bg1g7XNgvd5Ne01";

/** Prix affiché, délai de livraison et fenêtre de déduction. */
export const PRIX = "97 €";
export const DELAI = "48 h";
export const FENETRE_DEDUCTION = "30 jours";

/**
 * Pixel Meta de la campagne audit.
 *
 * PageView est envoyé sur la page de vente, et la conversion (Purchase, avec
 * le montant, plus Lead) uniquement sur la page de confirmation, qui n'est
 * atteignable qu'après un paiement abouti.
 */
export const META_PIXEL_AUDIT = "1268635575330992";

/** Lien WhatsApp Business, proposé sur la page de confirmation. */
export const WHATSAPP_URL = "https://wa.me/message/Z3SK7EX5AXBZL1";

/** Preuve chiffrée, à mettre à jour quand le nombre évolue. */
export const SITES_CREES = 50;

/**
 * Le lien est-il réellement configuré ? Sert de garde : tant que le lien vaut
 * le texte de remplacement, les boutons restent visibles mais inactifs.
 */
export const PAIEMENT_ACTIF =
  STRIPE_PAYMENT_LINK.startsWith("https://") && !STRIPE_PAYMENT_LINK.includes("REMPLACER");
