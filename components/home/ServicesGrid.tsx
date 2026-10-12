// Les quatre services (accueil) : une carte par service, prix d'entrée et lien vers sa page.
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { TiltCard, RevealWords } from "@/components/ui/motion-kit";
import { FlatShape } from "@/components/ui/FlatShape";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";

type Card = { icon: string; title: string; price: string; body: string; href: string };

const T: Record<Locale, { kicker: string; h2Start: string; h2Em: string; more: string; cards: Card[] }> = {
  fr: {
    kicker: "Nos services",
    h2Start: "Tout ce qu'il faut pour",
    h2Em: "trouver des clients.",
    more: "En savoir plus",
    cards: [
      {
        icon: "ph:browser-duotone",
        title: "Site internet",
        price: "Dès 1 400 €",
        body: "Un site qui inspire confiance et donne envie de vous appeler. Livré en 21 jours, hébergement gratuit.",
        href: "/sites-vitrine",
      },
      {
        icon: "ph:storefront-duotone",
        title: "Site marchand",
        price: "Dès 2 900 €",
        body: "Votre boutique en ligne, ouverte jour et nuit : catalogue, panier et paiement sécurisé.",
        href: "/sites-marchands",
      },
      {
        icon: "ph:megaphone-duotone",
        title: "Publicité Meta et Google",
        price: "Dès 500 € / mois",
        body: "Des annonces montrées aux bonnes personnes, corrigées chaque semaine pour vous amener des demandes.",
        href: "/publicite",
      },
      {
        icon: "ph:compass-duotone",
        title: "Application et conseil",
        price: "Sur devis",
        body: "Un outil fait pour votre métier, ou un regard extérieur pour savoir où investir avant de dépenser.",
        href: "/applications-conseil",
      },
    ],
  },
  en: {
    kicker: "Our services",
    h2Start: "Everything you need to",
    h2Em: "win customers.",
    more: "Learn more",
    cards: [
      {
        icon: "ph:browser-duotone",
        title: "Website",
        price: "From €1,400",
        body: "A website that earns trust and makes people want to call you. Delivered in 21 days, free hosting.",
        href: "/sites-vitrine",
      },
      {
        icon: "ph:storefront-duotone",
        title: "Online store",
        price: "From €2,900",
        body: "Your online shop, open day and night: catalog, cart and secure checkout.",
        href: "/sites-marchands",
      },
      {
        icon: "ph:megaphone-duotone",
        title: "Meta & Google ads",
        price: "From €500 / month",
        body: "Ads shown to the right people, adjusted every week to bring you enquiries.",
        href: "/publicite",
      },
      {
        icon: "ph:compass-duotone",
        title: "Web apps & consulting",
        price: "Custom quote",
        body: "A tool built for your trade, or an outside view on where to invest before you spend.",
        href: "/applications-conseil",
      },
    ],
  },
};

// Même grammaire que la mosaïque « Un site qui inspire confiance » : aplats pleins et formes plates.
const LOOK = [
  { box: "bg-terra text-white", icon: "bg-white/15 text-white", kicker: "text-white/75", body: "text-white/85", shape: "quarter" as const, shapeColor: "#fef3c7" },
  { box: "bg-midnight text-white", icon: "bg-white/10 text-terra", kicker: "text-terra", body: "text-white/70", shape: "circle" as const, shapeColor: "#c2410c" },
  { box: "bg-[#fef3c7] text-midnight", icon: "bg-terra/10 text-terra", kicker: "text-terra", body: "text-midnight/70", shape: "half" as const, shapeColor: "#c2410c" },
  { box: "bg-white text-midnight border-2 border-midnight", icon: "bg-midnight/5 text-midnight", kicker: "text-terra", body: "text-midnight/65", shape: "dot" as const, shapeColor: "#0f172a" },
];

export default function ServicesGrid({ lang }: { lang: Locale }) {
  const t = T[lang];
  return (
    <section id="services" className="bg-alabaster py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-5 font-medium">{t.kicker}</div>
          <RevealWords
            as="h2"
            inView
            className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-midnight"
            emClassName="font-emphasis font-normal text-terra"
            segments={[{ text: t.h2Start }, { text: t.h2Em, em: true }]}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 [perspective:1200px]">
          {t.cards.map((c, i) => (
            <motion.div
              key={c.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
            <TiltCard className="rounded-[1.75rem]">
            <Link
              href={localeHref(lang, c.href)}
              className={cn("group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[1.75rem] p-7", LOOK[i].box)}
            >
              <FlatShape kind={LOOK[i].shape} color={LOOK[i].shapeColor} small />
              <div className={cn("relative grid h-12 w-12 place-items-center rounded-xl", LOOK[i].icon)}>
                <Icon icon={c.icon} width={24} height={24} aria-hidden />
              </div>
              <div className={cn("relative mt-6 text-[12px] font-semibold uppercase tracking-[0.14em]", LOOK[i].kicker)}>{c.price}</div>
              <h3 className="relative mt-2 font-display text-[clamp(1.45rem,2vw,1.7rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">{c.title}</h3>
              <p className={cn("relative mt-3 flex-1 text-[14.5px] leading-relaxed", LOOK[i].body)}>{c.body}</p>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold">
                {t.more}
                <Icon icon="lucide:arrow-right" width={15} height={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
            </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
