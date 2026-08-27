// =============================================================================
//  RESSOURCES · le seul fichier a modifier pour publier
// =============================================================================
//
//  Pour ajouter une video Loom ou un article, ajoute un objet en HAUT du
//  tableau RESSOURCES ci-dessous (le plus recent en premier). Rien d'autre
//  a toucher : la page /ressources, la page de detail, le sitemap et les
//  filtres se mettent a jour tout seuls.
//
//  CHAMPS OBLIGATOIRES
//   slug        Identifiant dans l'URL. Minuscules, tirets, sans accent.
//               Ex. "pourquoi-votre-site-ne-convertit-pas"
//               Attention : ne jamais le changer apres publication, cela
//               casse le lien deja partage.
//   date        "AAAA-MM-JJ". Sert au tri et a l'affichage.
//   type        "video" (une Loom) ou "article" (du texte).
//   categorie   Une cle de CATEGORIES (voir plus bas) : sert de filtre.
//   titre       Le titre, en FR et EN.
//   resume      1 a 2 phrases affichees sur la carte, en FR et EN.
//
//  SI type: "video"
//   loom        L'URL de partage Loom, telle que copiee depuis Loom.
//               Ex. "https://www.loom.com/share/ab12cd34..."
//   duree       Duree affichee, ex. "7 min".
//
//  SI type: "article"
//   corps       Le texte, en FR et EN, sous forme de tableau de blocs.
//               Types de blocs disponibles :
//                 { p: "..." }              un paragraphe
//                 { h: "..." }              un sous-titre
//                 { liste: ["a", "b"] }     une liste a puces
//                 { citation: "..." }       une phrase mise en avant
//   lecture     Temps de lecture affiche, ex. "5 min". Optionnel.
//
//  Une video peut aussi avoir un "corps" : le texte s'affiche sous le lecteur.
// =============================================================================

import type { Locale } from "@/lib/i18n";

export type RessourceType = "video" | "article";

/** Un bloc de contenu dans le corps d'une ressource. */
export type Bloc =
  | { p: string }
  | { h: string }
  | { liste: string[] }
  | { citation: string };

export interface Ressource {
  slug: string;
  date: string;
  type: RessourceType;
  categorie: CategorieId;
  titre: Record<Locale, string>;
  resume: Record<Locale, string>;
  loom?: string;
  duree?: string;
  lecture?: string;
  corps?: Record<Locale, Bloc[]>;
}

/** Categories utilisees comme filtres sur la page. */
export const CATEGORIES = {
  conversion: { fr: "Conversion", en: "Conversion" },
  seo: { fr: "Référencement", en: "SEO" },
  coulisses: { fr: "Coulisses", en: "Behind the scenes" },
  conseils: { fr: "Conseils", en: "Advice" },
} as const;

export type CategorieId = keyof typeof CATEGORIES;

// =============================================================================
//  AJOUTE TES RESSOURCES ICI, la plus recente en premier
// =============================================================================

export const RESSOURCES: Ressource[] = [
  {
    slug: "presentation-actc",
    date: "2026-07-31",
    type: "video",
    categorie: "coulisses",
    loom: "https://www.loom.com/share/c45d44849e314eceb7f264ffb66465aa",
    duree: "5 min",
    titre: {
      fr: "Présentation ACTC",
      en: "Meet ACTC",
    },
    resume: {
      fr: "Qui nous sommes, comment on travaille, et ce que vous obtenez en confiant votre site à ACTC.",
      en: "Who we are, how we work, and what you get when you trust ACTC with your website.",
    },
  },
];

// =============================================================================
//  Fin de la zone a modifier, le reste est de la mecanique
// =============================================================================

/** Toutes les ressources, de la plus recente a la plus ancienne. */
export function ressourcesTriees(): Ressource[] {
  return [...RESSOURCES].sort((a, b) => b.date.localeCompare(a.date));
}

/** Retrouve une ressource par son slug. */
export function ressourceParSlug(slug: string): Ressource | undefined {
  return RESSOURCES.find((r) => r.slug === slug);
}

/**
 * Transforme une URL de partage Loom en URL d'integration.
 * Accepte les formats /share/<id>, /embed/<id> et les parametres (?t=, ?sid=).
 * Renvoie null si l'URL n'est pas une Loom exploitable : la page affiche
 * alors un lien de repli au lieu d'un lecteur casse.
 */
export function loomEmbedUrl(url: string): string | null {
  const match = url.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/);
  if (!match) return null;
  return `https://www.loom.com/embed/${match[1]}?hide_owner=true&hide_share=true&hideEmbedTopBar=true`;
}

/** Date lisible dans la langue courante : "31 juillet 2026" / "July 31, 2026". */
export function formatDate(date: string, lang: Locale): string {
  // On construit la date en UTC pour eviter tout decalage de fuseau.
  const d = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Duree affichee sur une carte : duree de video ou temps de lecture. */
export function metaDuree(r: Ressource): string | undefined {
  return r.type === "video" ? r.duree : r.lecture;
}

/** Categories reellement utilisees, pour n'afficher que des filtres utiles. */
export function categoriesUtilisees(): CategorieId[] {
  const ids = Object.keys(CATEGORIES) as CategorieId[];
  return ids.filter((r) => RESSOURCES.some((x) => x.categorie === r));
}
