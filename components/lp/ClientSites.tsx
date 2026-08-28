"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { LP, CLIENT_SITES } from "@/lib/lp-content";

/**
 * Sites clients en ligne.
 *
 * Chaque carte ouvre le vrai site dans un nouvel onglet : le visiteur peut le
 * parcourir sans perdre la landing, seule sortie tolérée de la page. Les
 * captures sont générées depuis les sites eux-mêmes et servies en JPEG léger.
 */
export default function ClientSites() {
  const t = LP.sites;
  return (
    <section className="bg-alabaster py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-terra">
            {t.kicker}
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-midnight">
            {t.h2Start}{" "}
            <span className="font-emphasis font-normal text-terra">{t.h2Em}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-midnight/65">
            {t.sub}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              className="group flex flex-col overflow-hidden rounded-3xl border border-grid-line bg-white shadow-card-light transition-colors hover:border-terra/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-grid-line bg-alabaster">
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
                  <p className="truncate text-[12.5px] text-steel">{site.sector}</p>
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
      </div>
    </section>
  );
}
