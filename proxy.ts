import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["fr", "en"];
const defaultLocale = "fr";

// Redirige toute URL sans préfixe de langue vers le français (langue par défaut).
// Ex. /tarifs -> /fr/tarifs ; / -> /fr. Les URLs /en/... passent telles quelles.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Les pages publicitaires (/lp/... et /audit) vivent hors du système de
  // langues : elles sont en français uniquement et n'ont ni navigation ni pied
  // de page.
  if (pathname === "/lp" || pathname.startsWith("/lp/")) return;
  if (pathname === "/audit" || pathname.startsWith("/audit/")) return;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocalePrefix) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  // Tout sauf les internals Next, les fichiers statiques (extension) et les routes metadata.
  matcher: ["/((?!_next|api|.*\\..*|robots.txt|sitemap.xml).*)"],
};
