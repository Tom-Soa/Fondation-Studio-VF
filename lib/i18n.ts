// i18n : deux locales, français par défaut (URLs /fr/... et /en/...).
export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Préfixe un chemin interne avec la locale : localeHref("en", "/contact") -> "/en/contact"
export function localeHref(lang: Locale, path: string) {
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

// Extrait la locale d'un pathname côté client ("/en/contact" -> "en").
export function localeFromPathname(pathname: string): Locale {
  const first = pathname.split("/")[1];
  return hasLocale(first) ? first : defaultLocale;
}

// Même chemin dans l'autre langue ("/fr/tarifs" -> "/en/tarifs").
export function switchLocalePath(pathname: string, target: Locale) {
  const parts = pathname.split("/");
  if (hasLocale(parts[1])) {
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  }
  return `/${target}${pathname === "/" ? "" : pathname}`;
}
