// Réalisations (accueil). Desktop : section épinglée, le scroll vertical fait
// glisser la galerie à l'horizontale (transform seulement). Mobile : défilement
// horizontal natif au doigt, avec aimantation sur chaque carte.
"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Icon } from "@iconify/react";
import { SHOWCASE, type ShowcaseItem } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";
import { RevealWords } from "@/components/ui/motion-kit";

const T: Record<Locale, { kicker: string; h2Start: string; h2Em: string; note: string; cta: string; visit: string }> = {
  fr: {
    kicker: "Nos réalisations",
    h2Start: "Des sites qui amènent",
    h2Em: "des clients.",
    note: "Une cinquantaine d'entreprises accompagnées, dans tous les secteurs.",
    cta: "Voir toutes nos réalisations",
    visit: "Voir le projet",
  },
  en: {
    kicker: "Our work",
    h2Start: "Websites that bring in",
    h2Em: "customers.",
    note: "Around fifty businesses supported, across every industry.",
    cta: "See all our work",
    visit: "See the project",
  },
};

// Rapport scroll vertical / déplacement horizontal (0.6 = 600 px de scroll pour 1000 px de galerie).
const SPEED = 0.6;

function Card({ s, lang, visit }: { s: ShowcaseItem; lang: Locale; visit: string }) {
  return (
    <Link
      href={localeHref(lang, "/realisations")}
      className="group relative flex w-[78vw] sm:w-[440px] lg:w-[520px] shrink-0 snap-center flex-col overflow-hidden rounded-[1.75rem] border border-grid-line bg-white shadow-card-light transition-colors hover:border-terra/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-alabaster">
        <img
          src={s.src}
          alt={s.alt}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-2 text-[12.5px] font-semibold text-midnight opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {visit}
          <Icon icon="lucide:arrow-up-right" width={14} height={14} aria-hidden />
        </span>
      </div>
      <div className="flex items-end justify-between gap-4 p-6">
        <div>
          <h3 className="font-display text-[1.35rem] font-bold tracking-[-0.02em] text-midnight">{s.name}</h3>
          <p className="mt-1 text-[13.5px] text-steel">{s.sector}</p>
        </div>
        <span className="shrink-0 rounded-full bg-terra/10 px-3 py-1 text-[11.5px] font-semibold text-terra">{s.type}</span>
      </div>
    </Link>
  );
}

export default function Showcase({ lang }: { lang: Locale }) {
  const t = T[lang];
  // 8 projets sur l'accueil : assez pour convaincre, sans retenir le visiteur ; tous sont sur /realisations.
  const items = SHOWCASE[lang].slice(0, 8);
  const reduce = useReducedMotion();
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  // Distance à parcourir = largeur de la piste moins la largeur visible.
  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth + 48));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  // Lien direct au scroll (pas de ressort) : la galerie suit le doigt sans traîner.
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  const header = (
    <div className="max-w-7xl w-full mx-auto px-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
      <div className="max-w-2xl">
        <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-5 font-medium">{t.kicker}</div>
        <RevealWords
          as="h2"
          inView
          className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-midnight"
          emClassName="font-emphasis font-normal text-terra"
          segments={[{ text: t.h2Start }, { text: t.h2Em, em: true }]}
        />
      </div>
      <div className="flex flex-col items-start lg:items-end gap-4">
        <p className="text-[14.5px] text-steel max-w-xs lg:text-right">{t.note}</p>
        <Link
          href={localeHref(lang, "/realisations")}
          className="inline-flex items-center gap-2 rounded-full bg-midnight hover:bg-midnight/90 px-6 py-3.5 text-[14.5px] font-semibold text-white transition-colors"
        >
          {t.cta}
          <Icon icon="lucide:arrow-right" width={16} height={16} aria-hidden />
        </Link>
      </div>
    </div>
  );

  return (
    <section id="realisations" className="bg-white border-y border-grid-line">
      {/* Desktop : épinglé, la hauteur de la section donne la longueur du trajet */}
      <div
        ref={pinRef}
        className="relative hidden lg:block"
        style={{ height: reduce ? "auto" : `calc(100vh + ${Math.round(distance * SPEED)}px)` }}
      >
        <div className={reduce ? "py-24" : "sticky top-0 flex h-screen flex-col justify-center overflow-hidden"}>
          {header}
          <motion.div
            ref={trackRef}
            style={reduce ? undefined : { x }}
            className="flex w-max gap-6 pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pr-6"
          >
            {items.map((s) => (
              <Card key={s.name} s={s} lang={lang} visit={t.visit} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile et tablette : défilement au doigt */}
      <div className="lg:hidden py-20">
        {header}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((s) => (
            <Card key={s.name} s={s} lang={lang} visit={t.visit} />
          ))}
        </div>
      </div>
    </section>
  );
}
