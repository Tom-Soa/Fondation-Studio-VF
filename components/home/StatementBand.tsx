// « Un site qui inspire confiance » : grand titre, paragraphe qui s'allume au scroll,
// puis une mosaïque de quatre bénéfices client, chacun prouvé par un chiffre.
// Formes plates (quarts de cercle, cercles) reprises des visuels Instagram ACTC.
"use client";

import { motion } from "motion/react";
import { StatCounter } from "@/components/ui/StatCounter";
import type { Locale } from "@/lib/i18n";
import { RevealWords, ScrollWords, TiltCard } from "@/components/ui/motion-kit";
import { cn } from "@/lib/utils";
import { FlatShape as Shape } from "@/components/ui/FlatShape";

type Tile = {
  kicker: string;
  title: string;
  body: string;
  value: number;
  prefix?: string;
  suffix?: string;
  unit?: string;
};

const T: Record<Locale, { h2Start: string; h2Em1: string; h2Mid: string; h2Em2: string; body: string; tiles: [Tile, Tile, Tile, Tile] }> = {
  fr: {
    h2Start: "Un site qui inspire",
    h2Em1: "confiance.",
    h2Mid: "Et qui",
    h2Em2: "fait appeler.",
    body: "Vos visiteurs comprennent tout de suite qu'ils sont au bon endroit, et savent comment vous contacter.",
    tiles: [
      {
        kicker: "Des prospects",
        title: "Un site qui vous génère des prospects.",
        body: "Chaque page est pensée pour qu'on vous appelle ou qu'on vous demande un devis, pas pour faire joli.",
        value: 50,
        unit: "entreprises déjà accompagnées",
      },
      {
        kicker: "De la confiance",
        title: "Un site qui inspire confiance.",
        body: "Un design unique, des textes clairs : votre sérieux se voit dès la première seconde.",
        value: 100,
        suffix: " %",
        unit: "sur-mesure",
      },
      {
        kicker: "Aucun abonnement",
        title: "Rien à payer chaque mois.",
        body: "Hébergement gratuit. Vous payez la création, et c'est tout.",
        value: 0,
        suffix: " €",
        unit: "par mois",
      },
      {
        kicker: "En ligne vite",
        title: "Votre site en 21 jours.",
        body: "Et il vous appartient, sans verrou ni engagement.",
        value: 21,
        unit: "jours",
      },
    ],
  },
  en: {
    h2Start: "A website that inspires",
    h2Em1: "trust.",
    h2Mid: "And that",
    h2Em2: "gets you calls.",
    body: "Your visitors see right away they are in the right place, and know how to reach you.",
    tiles: [
      {
        kicker: "Leads",
        title: "A website that brings you leads.",
        body: "Every page is designed to make people call you or ask for a quote, not just to look nice.",
        value: 50,
        unit: "businesses already supported",
      },
      {
        kicker: "Trust",
        title: "A website that inspires trust.",
        body: "A unique design and clear copy: your professionalism shows from the very first second.",
        value: 100,
        suffix: " %",
        unit: "custom-made",
      },
      {
        kicker: "No subscription",
        title: "Nothing to pay every month.",
        body: "Free hosting. You pay for the build, and that's it.",
        value: 0,
        suffix: " €",
        unit: "per month",
      },
      {
        kicker: "Live fast",
        title: "Your website in 21 days.",
        body: "And it is yours, with no lock-in and no commitment.",
        value: 21,
        unit: "days",
      },
    ],
  },
};

// Apparence de chaque tuile : fond, encre, forme décorative.
const LOOK = [
  { box: "bg-terra text-white lg:col-span-2 lg:row-span-2", kicker: "text-white/70", body: "text-white/85", num: "text-white", shape: "quarter" as const, shapeColor: "#fef3c7" },
  { box: "bg-midnight text-white lg:col-span-2", kicker: "text-terra", body: "text-white/70", num: "text-terra", shape: "circle" as const, shapeColor: "#c2410c" },
  { box: "bg-[#fef3c7] text-midnight", kicker: "text-terra", body: "text-midnight/70", num: "text-midnight", shape: "half" as const, shapeColor: "#c2410c" },
  { box: "bg-white text-midnight border-2 border-midnight", kicker: "text-terra", body: "text-midnight/65", num: "text-terra", shape: "dot" as const, shapeColor: "#0f172a" },
];

export default function StatementBand({ lang }: { lang: Locale }) {
  const t = T[lang];
  return (
    <section className="bg-alabaster py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <RevealWords
            as="h2"
            inView
            className="font-display font-extrabold tracking-[-0.03em] leading-[1.05] text-midnight text-[clamp(2.25rem,6vw,4.5rem)]"
            emClassName="font-emphasis font-normal text-terra"
            segments={[{ text: t.h2Start }, { text: t.h2Em1, em: true }, { text: t.h2Mid }, { text: t.h2Em2, em: true }]}
          />
          <ScrollWords
            text={t.body}
            className="mt-8 max-w-3xl mx-auto text-[clamp(1.25rem,2.2vw,1.85rem)] font-medium leading-snug tracking-[-0.01em] text-midnight"
          />
        </div>

        {/* Mosaïque des bénéfices */}
        <div className="mt-16 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto]">
          {t.tiles.map((tile, i) => {
            const look = LOOK[i];
            const big = i === 0;
            return (
              <motion.div
                key={tile.kicker}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(big && "sm:col-span-2 lg:col-span-2 lg:row-span-2", i === 1 && "sm:col-span-2 lg:col-span-2")}
              >
                <TiltCard className="rounded-[1.75rem]" max={big ? 4 : 7}>
                  <div className={cn("relative h-full overflow-hidden rounded-[1.75rem] p-7 sm:p-8 flex flex-col", look.box, big && "min-h-[420px] lg:min-h-[520px]")}>
                    <Shape kind={look.shape} color={look.shapeColor} />
                    <div className={cn("relative text-[11px] font-semibold uppercase tracking-[0.16em]", look.kicker)}>{tile.kicker}</div>
                    <h3 className={cn("relative mt-4 font-display font-extrabold tracking-[-0.03em] leading-[1.02]", big ? "text-[clamp(2.2rem,4.4vw,3.6rem)] max-w-md" : "text-[clamp(1.5rem,2.2vw,1.9rem)]")}>
                      {tile.title}
                    </h3>
                    <p className={cn("relative mt-4 max-w-sm text-[15px] leading-relaxed", look.body)}>{tile.body}</p>
                    {/* Chiffre puis légende sur sa propre ligne : jamais sous la forme décorative */}
                    <div className={cn("relative mt-auto pt-8 flex flex-col gap-1", big && "pr-20 sm:pr-36 lg:pr-48")}>
                      <span className={cn("font-display font-extrabold leading-none tracking-[-0.05em]", look.num, big ? "text-[clamp(4.5rem,9vw,7.5rem)]" : "text-[clamp(3rem,5vw,4rem)]")}>
                        <StatCounter to={tile.value} prefix={tile.prefix} suffix={tile.suffix} />
                      </span>
                      {tile.unit && <span className={cn("font-emphasis italic text-[clamp(1.1rem,1.6vw,1.4rem)] leading-tight", look.body)}>{tile.unit}</span>}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
