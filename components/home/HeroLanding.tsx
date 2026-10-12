// Hero immersif : anneau 3D des sites réalisés en fond (Three.js, chargé à la demande),
// titre révélé mot par mot, CTA magnétique. Repli sans WebGL : bandes d'aperçus défilantes.
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Icon } from "@iconify/react";
import { MockupCard } from "@/components/ui/MockupCard";
import { RevealWords, Magnetic } from "@/components/ui/motion-kit";
import { SHOWCASE } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";

const T: Record<
  Locale,
  {
    pill: string;
    h1Start: string;
    h1Em1: string;
    h1Mid: string;
    h1Em2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    features: [string, string][];
  }
> = {
  fr: {
    pill: "Maquette de votre page d'accueil offerte",
    h1Start: "On crée des sites web qui",
    h1Em1: "captent",
    h1Mid: "vos",
    h1Em2: "futurs clients.",
    subtitle:
      "Sites internet, publicité Meta et Google, applications et conseil : tout ce qu'il faut pour que vos futurs clients vous trouvent et vous appellent. Livré en 21 jours, sans abonnement.",
    ctaPrimary: "Recevoir ma maquette offerte",
    ctaSecondary: "Voir nos réalisations",
    features: [
      ["ph:cloud-duotone", "Hébergement gratuit"],
      ["ph:calendar-check-duotone", "Livré en 21 jours"],
      ["ph:key-duotone", "Vous êtes propriétaire de votre site"],
    ],
  },
  en: {
    pill: "Your homepage mockup, on us",
    h1Start: "We build websites that",
    h1Em1: "capture",
    h1Mid: "your",
    h1Em2: "future customers.",
    subtitle:
      "Websites, Meta and Google ads, web apps and consulting: everything your future customers need to find you and call you. Delivered in 21 days, no subscription.",
    ctaPrimary: "Get my free mockup",
    ctaSecondary: "See our work",
    features: [
      ["ph:cloud-duotone", "Free hosting"],
      ["ph:calendar-check-duotone", "Delivered in 21 days"],
      ["ph:key-duotone", "You own your website"],
    ],
  },
};

const IMAGES = SHOWCASE.fr.map((s) => s.src.replace("/showcase/", "/showcase/3d/"));

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

// Repli : deux bandes d'aperçus qui défilent en sens inverse.
function MarqueeRow({ lang, reverse = false, offset = 0 }: { lang: Locale; reverse?: boolean; offset?: number }) {
  const showcase = SHOWCASE[lang];
  const items = [...showcase.slice(offset), ...showcase.slice(0, offset)];
  const loop = [...items, ...items];
  return (
    <div className="flex w-max gap-4 sm:gap-5">
      <div
        className={`flex w-max gap-4 sm:gap-5 animate-marquee-x ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ animationDuration: "40s" }}
      >
        {loop.map((s, i) => (
          <MockupCard key={i} image={s.src} alt={s.alt} className="w-[200px] md:w-[340px]" />
        ))}
      </div>
    </div>
  );
}

export default function HeroLanding({ lang }: { lang: Locale }) {
  const t = T[lang];
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<"pending" | "3d" | "fallback">("pending");

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  // Le texte s'éloigne pendant que la caméra recule (transform + opacity uniquement).
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -90]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => scrollYProgress.on("change", (v) => (progressRef.current = v)), [scrollYProgress]);

  useEffect(() => {
    if (!hasWebGL()) {
      setMode("fallback");
      return;
    }
    let destroy: (() => void) | undefined;
    let cancelled = false;
    import("./ring3d")
      .then(({ createRing }) =>
        createRing(stageRef.current!, {
          images: IMAGES,
          reducedMotion: !!reduce,
          getProgress: () => progressRef.current,
        }),
      )
      .then((d) => {
        if (cancelled) d();
        else {
          destroy = d;
          setMode("3d");
        }
      })
      .catch(() => !cancelled && setMode("fallback"));
    return () => {
      cancelled = true;
      destroy?.();
    };
  }, [reduce]);

  return (
    <header ref={sectionRef} className="relative isolate overflow-hidden bg-alabaster min-h-[100svh]">

      {/* Scène 3D (fond) */}
      <div
        ref={stageRef}
        aria-hidden
        className={`absolute inset-0 -z-10 transition-opacity duration-[1400ms] ${mode === "3d" ? "opacity-100" : "opacity-0"}`}
      />
      {/* Halo terracotta, au-dessus du canvas (opaque) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[80vh]"
        style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(194,65,12,0.14) 0%, transparent 70%)" }}
        aria-hidden
      />
      {/* Voile clair derrière le texte pour la lisibilité */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "radial-gradient(55% 42% at 50% 34%, rgba(249,249,247,0.92) 0%, rgba(249,249,247,0.55) 55%, transparent 80%)" }}
      />

      <motion.div style={reduce ? undefined : { y: textY, opacity: textOpacity }} className="relative max-w-4xl mx-auto px-6 pt-28 lg:pt-36 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-grid-line bg-white px-4 py-1.5 shadow-card-light"
        >
          <Icon icon="ph:gift-duotone" width={16} height={16} className="text-terra" aria-hidden />
          <span className="text-[13px] font-medium text-midnight/70">{t.pill}</span>
        </motion.div>

        <RevealWords
          className="mt-8 font-display font-extrabold tracking-[-0.03em] leading-[1.05] text-midnight text-[clamp(2.6rem,7vw,5.25rem)]"
          emClassName="font-emphasis font-normal text-terra"
          delay={0.15}
          segments={[{ text: t.h1Start }, { text: t.h1Em1, em: true }, { text: t.h1Mid }, { text: t.h1Em2, em: true }]}
        />

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-7 max-w-2xl mx-auto text-[clamp(1rem,1.3vw,1.2rem)] leading-relaxed text-midnight/70"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Magnetic>
            <Link
              href={localeHref(lang, "/contact")}
              className="group inline-flex items-center gap-2.5 rounded-full bg-terra hover:bg-terra-hover px-7 py-4 text-white font-semibold text-[15px] transition-colors glow-terra"
            >
              {t.ctaPrimary}
              <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </Magnetic>
          <Link
            href={localeHref(lang, "/realisations")}
            className="inline-flex items-center gap-2 rounded-full border border-midnight/15 hover:border-midnight/40 bg-white px-6 py-4 shadow-card-light text-midnight font-medium text-[15px] transition-colors"
          >
            {t.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-10 hidden sm:flex flex-wrap items-center justify-center gap-3 text-[13.5px] font-medium text-midnight/80"
        >
          {/* Pastilles opaques : restent lisibles quand l'anneau 3D passe derrière. */}
          {t.features.map(([icon, label]) => (
            <span key={label} className="inline-flex items-center gap-2 rounded-full border border-grid-line bg-white px-4 py-2 shadow-card-light">
              <Icon icon={icon} width={18} height={18} className="text-terra" aria-hidden />
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Repli sans WebGL */}
      {mode === "fallback" && (
        <div className="relative mt-16 space-y-4 sm:space-y-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <MarqueeRow lang={lang} reverse offset={0} />
          <MarqueeRow lang={lang} offset={3} />
        </div>
      )}

    </header>
  );
}
