// Carte d'un site en ligne : toute la carte est un lien direct vers le vrai domaine du client,
// affiché dans une barre d'adresse au-dessus de l'aperçu.
"use client";

import { Icon } from "@iconify/react";
import { domainOf, type ShowcaseItem } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const T: Record<Locale, { live: string; visit: string }> = {
  fr: { live: "En ligne", visit: "Visiter le site" },
  en: { live: "Live", visit: "Visit the site" },
};

export default function LiveSiteCard({ s, lang, className = "" }: { s: ShowcaseItem; lang: Locale; className?: string }) {
  const t = T[lang];
  const domain = domainOf(s.url!);
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.visit} ${s.name} (${domain})`}
      className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-grid-line bg-white shadow-card-light transition-all duration-300 hover:-translate-y-1 hover:border-terra/40 hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)] ${className}`}
    >
      {/* Barre d'adresse */}
      <div className="flex items-center gap-3 border-b border-grid-line bg-alabaster px-4 py-3">
        <span className="hidden sm:flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-midnight/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-midnight/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-midnight/15" />
        </span>
        <span className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-grid-line bg-white px-3 py-1.5 text-[12.5px] font-medium text-midnight/80">
          <Icon icon="lucide:lock" width={12} height={12} className="shrink-0 text-steel" aria-hidden />
          <span className="truncate">{domain}</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-[11.5px] font-semibold text-emerald-700">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {t.live}
        </span>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-alabaster">
        <img
          src={s.src}
          alt={s.alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 items-end justify-between gap-4 p-5 sm:p-6">
        <div className="min-w-0">
          <h3 className="font-display text-[1.3rem] font-bold tracking-[-0.02em] text-midnight">{s.name}</h3>
          <p className="mt-1 text-[13.5px] text-steel">{s.sector}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-terra/10 px-4 py-2 text-[13px] font-semibold text-terra transition-colors group-hover:bg-terra group-hover:text-white">
          <span className="hidden sm:inline">{t.visit}</span>
          <Icon icon="lucide:arrow-up-right" width={15} height={15} aria-hidden />
        </span>
      </div>
    </a>
  );
}
