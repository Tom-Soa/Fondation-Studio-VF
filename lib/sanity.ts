const PROJECT_ID = 'm2u2eg5e'
const DATASET = 'production'
const API_VERSION = '2021-10-21'
const BASE_URL = `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}`

async function sanityFetch<T>(query: string): Promise<T | null> {
  const url = `${BASE_URL}?query=${encodeURIComponent(query)}`
  try {
    const res = await fetch(url, { next: { revalidate: 60 } })
    if (!res.ok) return null
    const data = await res.json()
    return data.result ?? null
  } catch {
    return null
  }
}

export interface PageAccueilData {
  heroTitre?: string
  heroSousTitre?: string
  heroCta?: string
  heroCtaSecondaire?: string
  problemeTitre?: string
  problemeCorps?: string
  problemeSousCorps?: string
  piliersTitre?: string
  piliersCorps?: string
  realisationsTitre?: string
  realisationsCorps?: string
  processusTitre?: string
  processusCorps?: string
  nobrainerTitre?: string
  nobrainerDescription?: string
  nobrainerCta?: string
}

// Retire toute mention de prix d'un texte éditorial (ex. "À partir de 1 400 €.").
function stripPrix(text?: string): string | undefined {
  if (!text) return text
  return text
    .replace(/\s*(à partir de|dès|a partir de)?\s*\d[\d\s ]*€\.?/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim()
}

// Remplace un CTA obsolète trop vague par un intitulé clair.
function cleanCta(cta?: string): string | undefined {
  if (!cta) return cta
  if (/d[ée]marrer/i.test(cta)) return "Obtenir un devis"
  return cta
}

export async function getPageAccueil(): Promise<PageAccueilData | null> {
  // On ne récupère que les champs réellement utilisés (évite d'exposer les
  // métadonnées Sanity dans le payload de la page).
  const data = await sanityFetch<PageAccueilData>(
    `*[_type == "pageAccueil" && _id == "page-accueil"][0]{
      heroTitre, heroSousTitre, heroCta, heroCtaSecondaire,
      problemeTitre, problemeCorps, problemeSousCorps,
      piliersTitre, piliersCorps, realisationsTitre, realisationsCorps,
      processusTitre, processusCorps,
      nobrainerTitre, nobrainerDescription, nobrainerCta
    }`
  )
  if (!data) return data
  // Assainit le contenu éditable : aucun prix ni CTA obsolète ne doit passer.
  return {
    ...data,
    heroSousTitre: stripPrix(data.heroSousTitre),
    heroCta: cleanCta(data.heroCta),
  }
}
