// Réalisations (accueil) : uniquement les sites en ligne, chaque carte ouvre le vrai site.
// Desktop : section épinglée, le scroll vertical fait glisser la galerie à l'horizontale
// (transform seulement). Mobile : défilement horizontal natif au doigt, aimanté sur chaque carte.
"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Icon } from "@iconify/react";
import { SHOWCASE, isLive } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";
import { RevealWords } from "@/components/ui/motion-kit";
import LiveSiteCard from "@/components/realisations/LiveSiteCard";

const T: Record<Locale, { kicker: string; h2Start: string; h2Em: string; note: string; cta: string }> = {
  fr: {
    kicker: "Nos réalisations",
    h2Start: "Nos sites sont en ligne.",
    h2Em: "Allez les voir.",
    note: "Cliquez sur un site pour le visiter. Une cinquantaine d'entreprises accompagnées, dans tous les secteurs.",
    cta: "Voir toutes nos réalisations",
  },
  en: {
    kicker: "Our work",
    h2Start: "Our websites are live.",
    h2Em: "Go take a look.",
    note: "Click any website to visit it. Around fifty businesses supported, across every industry.",
    cta: "See all our work",
  },
};

// Rapport scroll vertical / déplacement horizontal (0.6 = 600 px de scroll pour 1000 px de galerie).
const SPEED = 0.6;
const CARD = "w-[82vw] sm:w-[440px] lg:w-[520px] shrink-0 snap-center";

export default function Showcase({ lang }: { lang: Locale }) {
  const t = T[lang];
  const items = SHOWCASE[lang].filter(isLive);
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
    <div className="max-w-3xl w-full mx-auto px-6 flex flex-col items-center text-center gap-5 mb-10 lg:mb-12">
      <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium">{t.kicker}</div>
      <RevealWords
        as="h2"
        inView
        className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-midnight"
        emClassName="font-emphasis font-normal text-terra"
        segments={[{ text: t.h2Start }, { text: t.h2Em, em: true }]}
      />
      <p className="text-[15px] text-steel max-w-xl">{t.note}</p>
      <Link
        href={localeHref(lang, "/realisations")}
        className="inline-flex items-center gap-2 rounded-full bg-midnight hover:bg-midnight/90 px-6 py-3.5 text-[14.5px] font-semibold text-white transition-colors"
      >
        {t.cta}
        <Icon icon="lucide:arrow-right" width={16} height={16} aria-hidden />
      </Link>
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
              <LiveSiteCard key={s.url} s={s} lang={lang} className={CARD} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile et tablette : défilement au doigt */}
      <div className="lg:hidden py-20">
        {header}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((s) => (
            <LiveSiteCard key={s.url} s={s} lang={lang} className={CARD} />
          ))}
        </div>
      </div>
    </section>
  );
}
