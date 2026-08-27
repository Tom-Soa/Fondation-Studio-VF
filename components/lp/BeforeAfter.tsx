"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { LP, BEFORE_AFTER, type BeforeAfterItem } from "@/lib/lp-content";

/**
 * Avant / après.
 *
 * Mobile  : carrousel horizontal (scroll-snap natif, swipe au doigt) ; dans
 *           chaque carte, "avant" puis "après" sont empilés — on descend un peu
 *           et on voit la transformation.
 * Desktop : les deux captures sont côte à côte, avant à gauche, après à droite.
 *
 * Les captures "après" existent déjà (/public/showcase). Les "avant" restent à
 * fournir : tant que `before` vaut null, on n'essaie même pas de charger une
 * image et une vignette de substitution s'affiche à la place. Réagir après coup
 * à une image cassée (onError) ne suffisait pas : le texte alternatif
 * apparaissait brièvement avant l'hydratation.
 */

function Shot({
  src,
  label,
  tone,
  alt,
}: {
  src: string | null;
  label: string;
  tone: "before" | "after";
  alt: string;
}) {
  const isBefore = tone === "before";

  return (
    <figure className="relative overflow-hidden rounded-2xl border border-grid-line bg-white">
      <figcaption
        className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${
          isBefore ? "bg-midnight/75 text-white backdrop-blur-sm" : "bg-terra text-white"
        }`}
      >
        {label}
      </figcaption>

      <div className="aspect-[16/11] w-full overflow-hidden bg-alabaster">
        {src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            className={`h-full w-full object-cover object-top ${isBefore ? "saturate-[0.75]" : ""}`}
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-2 text-center"
            style={{
              background: isBefore
                ? "repeating-linear-gradient(45deg,#eceae4 0 12px,#e3e0d8 12px 24px)"
                : "linear-gradient(135deg,#fdf6f1 0%,#f6e3d6 100%)",
            }}
            role="img"
            aria-label={`Capture « ${label.toLowerCase()} » à venir`}
          >
            <Icon
              icon="ph:image-square-duotone"
              width={26}
              height={26}
              className={isBefore ? "text-steel/45" : "text-terra/55"}
              aria-hidden
            />
            <span className="px-4 text-[11px] font-medium text-steel">
              Capture « {label.toLowerCase()} » à venir
            </span>
          </div>
        )}
      </div>
    </figure>
  );
}

function Pair({ item }: { item: BeforeAfterItem }) {
  return (
    <div className="flex w-[86vw] max-w-[420px] shrink-0 snap-center flex-col gap-4 rounded-3xl border border-grid-line bg-white p-4 shadow-card-light md:w-full md:max-w-none md:p-6">
      <div className="flex flex-col gap-2 px-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold text-midnight">{item.name}</h3>
          <p className="text-[12.5px] text-steel">{item.sector}</p>
        </div>
        <span className="w-fit shrink-0 rounded-full bg-terra/10 px-2.5 py-1 text-[11px] font-semibold text-terra">
          {item.gain}
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <Shot
          src={item.before}
          label={LP.beforeAfter.beforeLabel}
          tone="before"
          alt={`Ancien site ${item.name}`}
        />

        <div className="flex items-center justify-center py-1 md:py-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terra/10 text-terra">
            <Icon icon="lucide:arrow-down" width={18} height={18} className="md:hidden" aria-hidden />
            <Icon icon="lucide:arrow-right" width={18} height={18} className="hidden md:block" aria-hidden />
          </span>
        </div>

        <Shot
          src={item.after}
          label={LP.beforeAfter.afterLabel}
          tone="after"
          alt={`Nouveau site ${item.name} réalisé par ACTC`}
        />
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="border-y border-grid-line bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-terra">
          {LP.beforeAfter.kicker}
        </div>
        <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-midnight">
          {LP.beforeAfter.h2Start}{" "}
          <span className="font-emphasis font-normal text-terra">{LP.beforeAfter.h2Em}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-midnight/65">
          {LP.beforeAfter.sub}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="mt-12"
      >
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:mx-auto md:max-w-5xl md:snap-none md:flex-col md:gap-8 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          {BEFORE_AFTER.map((item) => (
            <Pair key={item.name} item={item} />
          ))}
        </div>

        <p className="mt-2 flex items-center justify-center gap-2 text-[12.5px] text-steel md:hidden">
          <Icon icon="lucide:move-horizontal" width={15} height={15} aria-hidden />
          {LP.beforeAfter.hint}
        </p>
      </motion.div>
    </section>
  );
}
