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

export function getPageAccueil(): Promise<PageAccueilData | null> {
  return sanityFetch<PageAccueilData>(
    `*[_type == "pageAccueil" && _id == "page-accueil"][0]`
  )
}
