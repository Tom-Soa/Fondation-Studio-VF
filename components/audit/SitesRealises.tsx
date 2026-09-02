"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { CLIENT_SITES } from "@/lib/lp-content";
import { AUDIT } from "@/lib/audit-content";

/**
 * Les sites déjà réalisés, en preuve du regard porté sur les vôtres.
 *
 * Réutilise la liste et les captures de la landing /lp : un seul endroit à
 * mettre à jour quand un site s'ajoute. Chaque carte ouvre le vrai site dans
 * un nouvel onglet, seule sortie tolérée sur une page qui doit vendre.
 */
export default function SitesRealises() {
  const t = AUDIT.sites;

  return (
    <section className="border-y border-grid-line bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-terra">
            {t.kicker}
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-midnight text-balance">
            {t.h2Start}{" "}
            <span className="font-emphasis font-normal text-terra">{t.h2Em}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-midnight/70">
            {t.sub}
          </p>
        </div>

        <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden scroll-px-6 px-6 pb-10 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CLIENT_SITES.map((site, i) => (
            <motion.a
              key={site.url}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.07, ease: [0.23, 1, 0.32, 1] }}
              className="group flex w-[80vw] max-w-[380px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border-2 border-grid-line bg-alabaster shadow-card-light transition-colors hover:border-terra"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-grid-line bg-white">
                <img
                  src={site.shot}
                  alt={`Site web ${site.name}`}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex items-center justify-between gap-3 p-5">
                <div className="min-w-0">
                  <h3 className="truncate font-display text-[16px] font-bold text-midnight">
                    {site.name}
                  </h3>
                  <p className="truncate text-[12.5px] text-midnight/70">{site.sector}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-terra/10 px-3 py-1.5 text-[12px] font-semibold text-terra">
                  {t.linkLabel}
                  <Icon
                    icon="lucide:arrow-up-right"
                    width={14}
                    height={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
        <p className="mt-1 flex items-center justify-center gap-2 text-[12.5px] text-midnight/70 sm:hidden">
          <Icon icon="lucide:move-horizontal" width={15} height={15} aria-hidden />
          Faites glisser pour voir les autres
        </p>
      </div>
    </section>
  );
}
