"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { AUDIT } from "@/lib/audit-content";
import { PRIX } from "@/lib/audit-config";
import { BoutonPaiement } from "@/components/audit/BoutonPaiement";
import { Grille, Halo, Formes, Couture } from "@/components/audit/Decor";

// Apparition douce au scroll, reprise du site : fondu + légère montée, sans
// aucun lien au défilement une fois déclenchée.
const monte = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};
const doux = [0.23, 1, 0.32, 1] as const;

/** Titre de section : eyebrow terracotta + H2 avec mot accentué en serif. */
function TitreSection({
  kicker,
  debut,
  accent,
  fin,
  sous,
}: {
  kicker: string;
  debut: string;
  accent?: string;
  fin?: string;
  sous?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-terra">
        {kicker}
      </div>
      <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-midnight text-balance">
        {debut}
        {accent && (
          <>
            {" "}
            <span className="font-emphasis font-normal text-terra">{accent}</span>
          </>
        )}
        {fin && ` ${fin}`}
      </h2>
      {sous && (
        <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-midnight/65">
          {sous}
        </p>
      )}
    </div>
  );
}

/** 2. Les symptômes que le visiteur reconnaît chez lui. */
export function Probleme() {
  const t = AUDIT.probleme;
  return (
    <section className="relative isolate overflow-hidden bg-alabaster py-20 lg:py-28">
      <Grille className="-z-10 opacity-70" />
      <Halo className="inset-x-0 top-0 -z-10 h-80" />
      <div className="relative mx-auto max-w-5xl px-6">
        <TitreSection kicker={t.kicker} debut={t.h2Start} accent={t.h2Em} />
        <ul className="grid gap-5 md:grid-cols-3">
          {t.items.map((item, i) => (
            <motion.li
              key={item.titre}
              {...monte}
              transition={{ duration: 0.6, delay: i * 0.09, ease: doux }}
              className="rounded-3xl border border-grid-line bg-white p-6 shadow-card-light"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-terra/10 text-terra">
                <Icon icon={item.icone} width={22} height={22} aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-[17px] font-bold leading-snug text-midnight">
                {item.titre}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-midnight/70">{item.corps}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** 3. Ce que le client reçoit concrètement. */
export function Livrables() {
  const t = AUDIT.livrables;
  return (
    <section className="relative isolate overflow-hidden border-y border-grid-line bg-white py-20 lg:py-28">
      <Formes variante="terra" className="-z-10" />
      <div className="relative mx-auto max-w-5xl px-6">
        <TitreSection kicker={t.kicker} debut={t.h2Start} accent={t.h2Em} />
        <ul className="grid gap-5 sm:grid-cols-2">
          {t.items.map((item, i) => (
            <motion.li
              key={item.titre}
              {...monte}
              transition={{ duration: 0.6, delay: (i % 2) * 0.09, ease: doux }}
              className="group flex gap-4 rounded-3xl border border-grid-line bg-alabaster p-6 transition-colors hover:border-terra/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-terra text-white shadow-terra transition-transform group-hover:scale-105">
                <Icon icon={item.icone} width={24} height={24} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-[17px] font-bold text-midnight">{item.titre}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-midnight/70">{item.corps}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** 4. Les trois étapes, numérotées car l'ordre compte. */
export function Etapes() {
  const t = AUDIT.etapes;
  return (
    <section className="relative isolate overflow-hidden bg-terra/[0.045] py-20 lg:py-28">
      <Couture className="top-0" />
      <Grille className="-z-10 opacity-50" />
      <div className="relative mx-auto max-w-4xl px-6">
        <TitreSection kicker={t.kicker} debut={t.h2Start} accent={t.h2Em} />
        <ol className="grid gap-5 md:grid-cols-3">
          {t.items.map((item, i) => (
            <motion.li
              key={item.titre}
              {...monte}
              transition={{ duration: 0.6, delay: i * 0.1, ease: doux }}
              className="relative rounded-3xl border border-grid-line bg-white p-6 shadow-card-light"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terra/10 font-display text-[19px] font-extrabold text-terra">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-[17px] font-bold text-midnight">
                {item.titre}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-midnight/70">{item.corps}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** 5. Les six axes analysés. */
export function Axes() {
  const t = AUDIT.axes;
  return (
    <section className="relative isolate overflow-hidden border-y border-grid-line bg-white py-20 lg:py-28">
      <Formes variante="mixte" className="-z-10" />
      <Grille className="-z-10 opacity-40" />
      <div className="relative mx-auto max-w-5xl px-6">
        <TitreSection kicker={t.kicker} debut={t.h2Start} accent={t.h2Em} />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <motion.li
              key={item.titre}
              {...monte}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: doux }}
              className="group rounded-3xl border border-grid-line bg-alabaster p-6 transition-colors hover:border-terra/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-terra/10 text-terra transition-colors group-hover:bg-terra group-hover:text-white">
                <Icon icon={item.icone} width={22} height={22} aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-[16.5px] font-bold text-midnight">
                {item.titre}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-midnight/70">{item.corps}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** 6. Qui réalise l'audit : présentation, repères, parcours, résultats. */
export function Auteur() {
  const t = AUDIT.auteur;
  return (
    <section className="relative isolate overflow-hidden bg-alabaster py-20 lg:py-28">
      <Halo className="inset-x-0 bottom-0 -z-10 h-96" position="50% 100%" couleur="rgba(194,65,12,0.13)" />
      <Formes variante="nuit" className="-z-10" />
      <div className="relative mx-auto max-w-4xl px-6">
        <TitreSection kicker={t.kicker} debut={t.h2Start} accent={t.h2Em} />

        {/* Présentation + repères chiffrés */}
        <motion.div
          {...monte}
          transition={{ duration: 0.7, ease: doux }}
          className="overflow-hidden rounded-[2rem] border border-grid-line bg-white shadow-card-light"
        >
          <div className="flex flex-col gap-7 p-6 sm:flex-row sm:items-start sm:p-10">
            <img
              src={t.photo}
              alt={`${t.nom}, ${t.role}`}
              width={140}
              height={140}
              loading="lazy"
              decoding="async"
              className="h-[140px] w-[140px] shrink-0 rounded-2xl border border-grid-line object-cover"
            />
            <div className="min-w-0">
              <h3 className="font-display text-[25px] font-extrabold tracking-[-0.02em] text-midnight sm:text-[29px]">
                {t.nom}
              </h3>
              <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.12em] text-terra">
                {t.role}
              </p>
              {t.corps.map((p) => (
                <p key={p} className="mt-4 text-[14.5px] leading-relaxed text-midnight/70">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="grid divide-y divide-grid-line border-t border-grid-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {t.reperes.map((r) => (
              <div key={r.label} className="px-5 py-6 text-center">
                <div className="font-display text-[24px] font-extrabold leading-none tracking-[-0.02em] text-terra">
                  {r.valeur}
                </div>
                <p className="mt-2 text-[12.5px] leading-snug text-midnight/70">{r.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Le parcours, en étapes */}
        <div className="mt-14">
          <div className="mb-7 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-terra">
            {t.parcoursKicker}
          </div>
          <ol className="relative space-y-4 sm:space-y-0">
            {t.parcours.map((etape, i) => (
              <motion.li
                key={etape.titre}
                {...monte}
                transition={{ duration: 0.6, delay: i * 0.08, ease: doux }}
                className="relative flex gap-5 rounded-3xl border border-grid-line bg-white p-6 shadow-card-light sm:mb-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-terra/10 text-terra">
                  <Icon icon={etape.icone} width={24} height={24} aria-hidden />
                </span>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-terra">
                    {etape.periode}
                  </span>
                  <h4 className="mt-1.5 font-display text-[17px] font-bold leading-snug text-midnight">
                    {etape.titre}
                  </h4>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-midnight/70">
                    {etape.corps}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Les résultats obtenus, attribués à des cas précis */}
        <div className="mt-14">
          <div className="mb-7 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-terra">
            {t.resultatsKicker}
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {t.resultats.map((r, i) => (
              <motion.li
                key={r.chiffre}
                {...monte}
                transition={{ duration: 0.6, delay: i * 0.08, ease: doux }}
                className="rounded-3xl border border-grid-line bg-white p-6 shadow-card-light"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-terra/10 text-terra">
                  <Icon icon={r.icone} width={22} height={22} aria-hidden />
                </span>
                <div className="mt-4 font-display text-[21px] font-extrabold leading-none tracking-[-0.02em] text-terra">
                  {r.chiffre}
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-midnight/70">{r.corps}</p>
              </motion.li>
            ))}
          </ul>

          <p className="mx-auto mt-6 max-w-xl rounded-2xl border border-grid-line bg-white px-5 py-4 text-center text-[13.5px] leading-relaxed text-midnight/75">
            {t.resultatsNote}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-center text-[13.5px] leading-relaxed text-midnight/70">
            {t.territoire}
          </p>
        </div>
      </div>
    </section>
  );
}

/** 7. L'offre et la déduction : le bloc qui doit peser le plus. */
export function Offre() {
  const t = AUDIT.offre;
  return (
    <section className="relative isolate overflow-hidden border-y border-grid-line bg-white py-20 lg:py-28">
      <Halo className="inset-0 -z-10" taille="70% 60%" couleur="rgba(194,65,12,0.15)" />
      <Grille className="-z-10 opacity-60" />
      <div className="relative mx-auto max-w-3xl px-6">
        <TitreSection kicker={t.kicker} debut={t.h2Start} accent={t.h2Em} fin={t.h2End} sous={t.corps} />

        <motion.div
          {...monte}
          transition={{ duration: 0.7, ease: doux }}
          className="overflow-hidden rounded-[2rem] border-2 border-terra/30 bg-alabaster shadow-card-light"
        >
          <div className="p-7 text-center sm:p-10">
            <div className="font-display text-[clamp(3.4rem,12vw,5rem)] font-extrabold leading-none tracking-[-0.04em] text-terra">
              {PRIX}
            </div>
            <p className="mt-2 text-[12.5px] uppercase tracking-[0.16em] text-midnight/70">
              Paiement unique
            </p>

            <ul className="mx-auto mt-8 max-w-sm space-y-3 text-left">
              {t.inclus.map((li) => (
                <li key={li} className="flex gap-3 text-[14.5px] leading-snug text-midnight/85">
                  <Icon
                    icon="lucide:check"
                    width={17}
                    height={17}
                    className="mt-0.5 shrink-0 text-terra"
                    aria-hidden
                  />
                  {li}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <BoutonPaiement taille="grand" className="w-full sm:w-auto">
                {t.cta}
              </BoutonPaiement>
              <p className="mt-3 text-[13px] text-midnight/70">{t.ctaNote}</p>
            </div>
          </div>

          {/* La déduction : l'argument principal, détaché sur fond terracotta */}
          <div className="border-t-2 border-terra/25 bg-terra/[0.07] p-6 text-center sm:p-8">
            <div className="inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.16em] text-terra">
              <Icon icon="ph:arrow-bend-down-right-bold" width={16} height={16} aria-hidden />
              {t.deductionTitre}
            </div>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-midnight/85">
              {t.deductionCorps}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/** 9. Dernier appel à l'action, sur la bande terracotta du site. */
export function AppelFinal() {
  const t = AUDIT.final;
  return (
    <section className="bg-alabaster py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          {...monte}
          transition={{ duration: 0.7, ease: doux }}
          className="relative overflow-hidden rounded-[2rem] bg-terra px-6 py-14 text-center sm:px-8 sm:py-16 lg:px-16 lg:py-20"
        >
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-display text-[clamp(2rem,5.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white text-balance">
              {t.h2Start}{" "}
              <span className="font-emphasis font-normal">{t.h2Em}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-white/85">
              {t.corps}
            </p>
            <div className="mt-9 flex flex-col items-center gap-3">
              <BoutonPaiement variant="blanc" taille="grand" className="w-full sm:w-auto">
                {t.cta}
              </BoutonPaiement>
              <p className="text-[13px] text-white/80">{t.ctaNote}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
