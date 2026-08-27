import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { cn } from "@/lib/utils";
import { breadcrumbSchema, SITE_URL } from "@/lib/schema";
import type { Locale } from "@/lib/i18n";
import { hasLocale, localeHref, locales } from "@/lib/i18n";
import {
  CATEGORIES,
  formatDate,
  loomEmbedUrl,
  metaDuree,
  ressourceParSlug,
  ressourcesTriees,
  type Bloc,
  type Ressource,
} from "@/lib/ressources";

const T: Record<
  Locale,
  {
    breadcrumbHome: string;
    breadcrumbList: string;
    back: string;
    openLoom: string;
    playerFallback: string;
    alsoTitle: string;
    ctaTitleStart: string;
    ctaTitleEm: string;
    ctaText: string;
    ctaButton: string;
    videoLabel: string;
    articleLabel: string;
  }
> = {
  fr: {
    breadcrumbHome: "Accueil",
    breadcrumbList: "Ressources",
    back: "Toutes les ressources",
    openLoom: "Ouvrir la vidéo sur Loom",
    playerFallback:
      "La vidéo ne peut pas s'afficher ici. Vous pouvez la regarder directement sur Loom.",
    alsoTitle: "À regarder aussi",
    ctaTitleStart: "Envie d'un site qui",
    ctaTitleEm: "travaille pour vous ?",
    ctaText:
      "On vous offre la maquette de votre page d'accueil, sur-mesure, avant tout engagement.",
    ctaButton: "Demander un devis gratuit",
    videoLabel: "Vidéo",
    articleLabel: "Article",
  },
  en: {
    breadcrumbHome: "Home",
    breadcrumbList: "Resources",
    back: "All resources",
    openLoom: "Open the video on Loom",
    playerFallback:
      "This video cannot be displayed here. You can watch it directly on Loom.",
    alsoTitle: "Also worth watching",
    ctaTitleStart: "Want a website that",
    ctaTitleEm: "works for you?",
    ctaText:
      "We design your homepage mockup for free, fully custom, before any commitment.",
    ctaButton: "Get a free quote",
    videoLabel: "Video",
    articleLabel: "Article",
  },
};

// Genere une page statique par ressource et par langue au build.
export function generateStaticParams() {
  return locales.flatMap((lang) =>
    ressourcesTriees().map((r) => ({ lang, slug: r.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = hasLocale(lang) ? lang : "fr";
  const r = ressourceParSlug(slug);
  if (!r) return {};
  return {
    title: r.titre[locale],
    description: r.resume[locale],
    alternates: { canonical: localeHref(locale, `/ressources/${r.slug}`) },
    openGraph: {
      type: "article",
      title: r.titre[locale],
      description: r.resume[locale],
      publishedTime: r.date,
    },
  };
}

export default async function RessourcePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const r = ressourceParSlug(slug);
  if (!r) notFound();

  const t = T[lang];
  const duree = metaDuree(r);
  const estVideo = r.type === "video";
  const embed = r.loom ? loomEmbedUrl(r.loom) : null;
  const corps = r.corps?.[lang] ?? [];
  const autres = ressourcesTriees()
    .filter((x) => x.slug !== r.slug)
    .slice(0, 3);

  return (
    <main>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: t.breadcrumbHome, path: localeHref(lang, "/") },
            { name: t.breadcrumbList, path: localeHref(lang, "/ressources") },
            { name: r.titre[lang], path: localeHref(lang, `/ressources/${r.slug}`) },
          ]),
          {
            "@context": "https://schema.org",
            "@type": estVideo ? "VideoObject" : "Article",
            headline: r.titre[lang],
            name: r.titre[lang],
            description: r.resume[lang],
            datePublished: r.date,
            inLanguage: lang === "fr" ? "fr-FR" : "en-US",
            url: `${SITE_URL}${localeHref(lang, `/ressources/${r.slug}`)}`,
            ...(estVideo && r.loom ? { embedUrl: r.loom, uploadDate: r.date } : {}),
            author: { "@type": "Organization", name: "ACTC" },
            publisher: { "@type": "Organization", name: "ACTC" },
          },
        ]}
      />

      {/* En-tete */}
      <section className="bg-alabaster pt-32 pb-8 lg:pt-44 lg:pb-10">
        <div className="max-w-4xl mx-auto px-6">
          <a
            href={localeHref(lang, "/ressources")}
            className="inline-flex items-center gap-2 text-[13.5px] font-medium text-steel hover:text-terra transition-colors"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t.back}
          </a>

          <div className="mt-7 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.14em] font-medium">
            <span className="rounded-full bg-terra/10 px-3 py-1 text-terra">
              {estVideo ? t.videoLabel : t.articleLabel}
            </span>
            <span className="text-steel">{CATEGORIES[r.categorie][lang]}</span>
          </div>

          <h1 className="mt-5 font-display font-extrabold tracking-[-0.035em] text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] text-midnight">
            {r.titre[lang]}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-[13.5px] text-steel">
            <time dateTime={r.date}>{formatDate(r.date, lang)}</time>
            {duree && (
              <span className="flex items-center gap-1.5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {duree}
              </span>
            )}
          </div>

          <p className="mt-6 text-[clamp(1.05rem,1.3vw,1.25rem)] leading-relaxed text-steel">
            {r.resume[lang]}
          </p>
        </div>
      </section>

      {/* Lecteur Loom */}
      {estVideo && (
        <section className="bg-alabaster pb-4">
          <div className="max-w-4xl mx-auto px-6">
            {embed ? (
              <div className="overflow-hidden rounded-3xl border border-grid-line bg-midnight shadow-card-light">
                <div className="relative aspect-video">
                  <iframe
                    src={embed}
                    title={r.titre[lang]}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
            ) : (
              // Repli : URL Loom non reconnue, on evite un lecteur casse.
              <div className="rounded-3xl border border-grid-line bg-white p-8 text-center">
                <p className="text-steel">{t.playerFallback}</p>
                {r.loom && (
                  <a
                    href={r.loom}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-terra hover:bg-terra-hover px-6 py-3 text-[14.5px] font-semibold text-white transition-colors"
                  >
                    {t.openLoom}
                  </a>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Corps de texte */}
      {corps.length > 0 && (
        <section className="bg-alabaster pt-12">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-6">
              {corps.map((bloc, i) => (
                <BlocRendu key={i} bloc={bloc} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Autres ressources + CTA. Espacement haut reduit quand la page n'a ni
          texte ni autres ressources, pour eviter un grand vide sous la video. */}
      <section
        className={cn(
          "bg-alabaster pb-24 lg:pb-28",
          corps.length > 0 || autres.length > 0 ? "pt-16" : "pt-10",
        )}
      >
        <div className="max-w-4xl mx-auto px-6">
          {autres.length > 0 && (
            <div className="border-t border-grid-line pt-12">
              <h2 className="font-display font-bold tracking-[-0.02em] text-[22px] text-midnight">
                {t.alsoTitle}
              </h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {autres.map((autre) => (
                  <CarteAutre key={autre.slug} r={autre} lang={lang} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-14 rounded-3xl border border-grid-line bg-white p-10 lg:p-12 text-center">
            <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(1.6rem,3vw,2.4rem)] text-midnight">
              {t.ctaTitleStart}{" "}
              <span className="font-emphasis font-normal text-terra">{t.ctaTitleEm}</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-steel">{t.ctaText}</p>
            <a
              href={localeHref(lang, "/contact")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-terra hover:bg-terra-hover text-white px-7 py-3.5 text-[15px] font-semibold transition-colors glow-terra"
            >
              {t.ctaButton}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/** Rend un bloc de contenu (paragraphe, sous-titre, liste ou citation). */
function BlocRendu({ bloc }: { bloc: Bloc }) {
  if ("h" in bloc) {
    return (
      <h2 className="pt-4 font-display font-bold tracking-[-0.02em] text-[clamp(1.35rem,2.2vw,1.75rem)] text-midnight">
        {bloc.h}
      </h2>
    );
  }
  if ("liste" in bloc) {
    return (
      <ul className="space-y-3">
        {bloc.liste.map((item, i) => (
          <li key={i} className="flex gap-3 text-[16.5px] leading-relaxed text-steel">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terra" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    );
  }
  if ("citation" in bloc) {
    return (
      <blockquote className="border-l-2 border-terra pl-5 font-emphasis text-[clamp(1.15rem,2vw,1.4rem)] leading-relaxed text-midnight">
        {bloc.citation}
      </blockquote>
    );
  }
  return <p className="text-[16.5px] leading-relaxed text-steel">{bloc.p}</p>;
}

/** Petite carte de ressource affichee en bas d'une page de detail. */
function CarteAutre({ r, lang }: { r: Ressource; lang: Locale }) {
  const duree = metaDuree(r);
  return (
    <a
      href={localeHref(lang, `/ressources/${r.slug}`)}
      className="group flex flex-col rounded-2xl border border-grid-line bg-white p-5 transition-all duration-300 hover:border-terra/30 hover:shadow-card-light"
    >
      <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.12em] font-medium text-terra">
        {CATEGORIES[r.categorie][lang]}
      </div>
      <h3 className="mt-2.5 font-display font-semibold tracking-[-0.01em] text-[15.5px] leading-snug text-midnight">
        {r.titre[lang]}
      </h3>
      <div className="mt-3 flex items-center gap-2 text-[12px] text-steel/80">
        <time dateTime={r.date}>{formatDate(r.date, lang)}</time>
        {duree && <span>· {duree}</span>}
      </div>
    </a>
  );
}
