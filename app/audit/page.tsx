// ─────────────────────────────────────────────────────────────────────────────
// Page de vente de l'audit à 97 € (/audit).
//
// À REMPLACER VOUS-MÊME (tout est dans lib/audit-config.ts) :
//   1. STRIPE_PAYMENT_LINK  : le lien de paiement Stripe
//   2. SITES_CREES          : le nombre de sites créés, s'il évolue
//   3. Le pixel Meta        : variable NEXT_PUBLIC_META_PIXEL_ID sur Vercel
//
// La photo du fondateur est déjà en place : /public/images/tom-soa.jpg
// ─────────────────────────────────────────────────────────────────────────────

import { AUDIT } from "@/lib/audit-content";
import { PRIX, DELAI } from "@/lib/audit-config";
import { BoutonPaiement } from "@/components/audit/BoutonPaiement";
import AuditFaq from "@/components/audit/AuditFaq";
import MetaPixel from "@/components/lp/MetaPixel";
import Icone from "@/components/audit/Icone";

export default function PageAudit() {
  return (
    <main className="relative">
      <MetaPixel event="PageView" />

      {/* ── 1. Accroche ────────────────────────────────────────────────── */}
      <header className="audit-grain relative isolate overflow-hidden px-6 pb-16 pt-10 sm:pt-14">
        {/* Halo unique de la page, derrière le titre */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
          style={{
            background:
              "radial-gradient(58% 46% at 50% 0%, rgba(255,92,31,0.20) 0%, transparent 72%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="font-display text-[14px] font-extrabold uppercase tracking-[0.24em] text-[var(--au-craie)]/60">
            ACTC
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--au-bord)] bg-[var(--au-ardoise)] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--au-accent)]" />
            <span className="text-[12.5px] font-medium uppercase tracking-[0.14em] text-[var(--au-brume)]">
              {AUDIT.hero.eyebrow}
            </span>
          </div>

          <h1 className="mt-6 font-display text-[clamp(2.05rem,6.2vw,3.9rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-[var(--au-craie)] text-balance">
            {AUDIT.hero.h1Start}{" "}
            <span className="text-[var(--au-accent)]">{AUDIT.hero.h1Em}</span>{" "}
            {AUDIT.hero.h1End}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-[var(--au-brume)] sm:text-[16.5px]">
            {AUDIT.hero.sub}
          </p>

          {/* Prix et délai, visibles sans défiler */}
          <div className="mx-auto mt-8 flex max-w-sm items-stretch gap-3">
            <div className="flex-1 rounded-2xl border border-[var(--au-bord)] bg-[var(--au-ardoise)] px-4 py-3">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[var(--au-brume)]">
                {AUDIT.hero.priceLabel}
              </div>
              <div className="audit-chiffres mt-1 font-display text-[26px] font-extrabold leading-none text-[var(--au-accent)]">
                {PRIX}
              </div>
            </div>
            <div className="flex-1 rounded-2xl border border-[var(--au-bord)] bg-[var(--au-ardoise)] px-4 py-3">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[var(--au-brume)]">
                {AUDIT.hero.delayLabel}
              </div>
              <div className="audit-chiffres mt-1 font-display text-[26px] font-extrabold leading-none text-[var(--au-craie)]">
                {DELAI}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <BoutonPaiement taille="grand" className="w-full sm:w-auto">
              {AUDIT.hero.cta}
            </BoutonPaiement>
            <p className="mt-3 text-[13px] text-[var(--au-brume)]">{AUDIT.hero.ctaNote}</p>
          </div>

          <p className="mx-auto mt-6 max-w-md rounded-2xl border border-[var(--au-accent)]/25 bg-[var(--au-accent)]/[0.07] px-4 py-3 text-[13.5px] leading-snug text-[var(--au-craie)]">
            {AUDIT.hero.deductionFlash}
          </p>
        </div>
      </header>

      {/* ── 2. Le problème ─────────────────────────────────────────────── */}
      <section className="border-t border-[var(--au-bord)] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--au-accent)]">
              {AUDIT.probleme.kicker}
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance">
              {AUDIT.probleme.h2}
            </h2>
          </div>

          <ul className="grid gap-4 md:grid-cols-3">
            {AUDIT.probleme.items.map((item) => (
              <li
                key={item.titre}
                className="rounded-3xl border border-[var(--au-bord)] bg-[var(--au-ardoise)] p-6"
              >
                <h3 className="font-display text-[17px] font-bold leading-snug text-[var(--au-craie)]">
                  {item.titre}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--au-brume)]">
                  {item.corps}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. Ce que vous recevez ─────────────────────────────────────── */}
      <section className="border-t border-[var(--au-bord)] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--au-accent)]">
              {AUDIT.livrables.kicker}
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance">
              {AUDIT.livrables.h2}
            </h2>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {AUDIT.livrables.items.map((item) => (
              <li
                key={item.titre}
                className="flex gap-4 rounded-3xl border border-[var(--au-bord)] bg-[var(--au-ardoise)] p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--au-accent)]/10 text-[var(--au-accent)]">
                  <Icone nom={item.icone} taille={22} />
                </span>
                <div>
                  <h3 className="font-display text-[17px] font-bold text-[var(--au-craie)]">
                    {item.titre}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--au-brume)]">
                    {item.corps}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. Comment ça marche ───────────────────────────────────────── */}
      <section className="border-t border-[var(--au-bord)] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--au-accent)]">
              {AUDIT.etapes.kicker}
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance">
              {AUDIT.etapes.h2}
            </h2>
          </div>

          {/* Numérotées : l'ordre porte une information, ces étapes se suivent. */}
          <ol className="grid gap-4 md:grid-cols-3">
            {AUDIT.etapes.items.map((item, i) => (
              <li
                key={item.titre}
                className="rounded-3xl border border-[var(--au-bord)] bg-[var(--au-ardoise)] p-6"
              >
                <span className="audit-chiffres font-display text-[30px] font-extrabold leading-none text-[var(--au-accent)]">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-display text-[17px] font-bold text-[var(--au-craie)]">
                  {item.titre}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[var(--au-brume)]">
                  {item.corps}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 5. Ce que j'analyse ────────────────────────────────────────── */}
      <section className="border-t border-[var(--au-bord)] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--au-accent)]">
              {AUDIT.axes.kicker}
            </div>
            <h2 className="font-display text-[clamp(1.9rem,4.5vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance">
              {AUDIT.axes.h2}
            </h2>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIT.axes.items.map((item) => (
              <li
                key={item.titre}
                className="rounded-3xl border border-[var(--au-bord)] bg-[var(--au-ardoise)] p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--au-accent)]/10 text-[var(--au-accent)]">
                  <Icone nom={item.icone} taille={20} />
                </span>
                <h3 className="mt-4 font-display text-[16px] font-bold text-[var(--au-craie)]">
                  {item.titre}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--au-brume)]">
                  {item.corps}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. Qui réalise l'audit ─────────────────────────────────────── */}
      <section className="border-t border-[var(--au-bord)] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-[var(--au-bord)] bg-[var(--au-ardoise)] p-6 sm:p-10">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--au-accent)]">
              {AUDIT.auteur.kicker}
            </div>

            <div className="flex flex-col gap-7 sm:flex-row sm:items-start">
              <img
                src={AUDIT.auteur.photo}
                alt={`${AUDIT.auteur.nom}, ${AUDIT.auteur.role}`}
                width={132}
                height={132}
                loading="lazy"
                decoding="async"
                className="h-[132px] w-[132px] shrink-0 rounded-2xl border border-[var(--au-bord)] object-cover"
              />

              <div className="min-w-0">
                <h2 className="font-display text-[24px] font-extrabold tracking-[-0.02em] text-[var(--au-craie)] sm:text-[28px]">
                  {AUDIT.auteur.nom}
                </h2>
                <p className="mt-1 text-[13.5px] font-medium uppercase tracking-[0.12em] text-[var(--au-accent)]">
                  {AUDIT.auteur.role}
                </p>

                {AUDIT.auteur.corps.map((p) => (
                  <p key={p} className="mt-4 text-[14.5px] leading-relaxed text-[var(--au-brume)]">
                    {p}
                  </p>
                ))}

                <div className="mt-6 flex items-center gap-4 border-t border-[var(--au-bord)] pt-6">
                  <span className="audit-chiffres font-display text-[38px] font-extrabold leading-none text-[var(--au-accent)]">
                    {AUDIT.auteur.preuveValeur}
                  </span>
                  <span className="text-[13.5px] leading-snug text-[var(--au-brume)]">
                    {AUDIT.auteur.preuveLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. L'offre et la déduction ─────────────────────────────────── */}
      <section className="border-t border-[var(--au-bord)] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--au-accent)]">
              {AUDIT.offre.kicker}
            </div>
            <h2 className="font-display text-[clamp(1.9rem,5vw,3.1rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-balance">
              {AUDIT.offre.h2Start}{" "}
              <span className="text-[var(--au-accent)]">{AUDIT.offre.h2Em}</span>{" "}
              {AUDIT.offre.h2End}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-[var(--au-brume)]">
              {AUDIT.offre.corps}
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border-2 border-[var(--au-accent)]/40 bg-[var(--au-ardoise)]">
            <div className="p-7 text-center sm:p-10">
              <div className="audit-chiffres font-display text-[clamp(3.4rem,12vw,5.2rem)] font-extrabold leading-none tracking-[-0.04em] text-[var(--au-accent)]">
                {PRIX}
              </div>
              <p className="mt-2 text-[13.5px] uppercase tracking-[0.14em] text-[var(--au-brume)]">
                Paiement unique
              </p>

              <ul className="mx-auto mt-7 max-w-sm space-y-3 text-left">
                {AUDIT.offre.inclus.map((li) => (
                  <li key={li} className="flex gap-3 text-[14.5px] leading-snug text-[var(--au-craie)]">
                    <Icone nom="lucide:check" taille={17} className="mt-0.5 shrink-0 text-[var(--au-accent)]" />
                    {li}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <BoutonPaiement taille="grand" className="w-full sm:w-auto">
                  {AUDIT.offre.cta}
                </BoutonPaiement>
                <p className="mt-3 text-[13px] text-[var(--au-brume)]">{AUDIT.offre.ctaNote}</p>
              </div>
            </div>

            {/* La déduction : l'argument principal, détaché sur fond accentué */}
            <div className="border-t-2 border-[var(--au-accent)]/30 bg-[var(--au-accent)]/[0.09] p-6 text-center sm:p-8">
              <div className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--au-accent)]">
                <Icone nom="ph:arrow-bend-down-right-bold" taille={16} />
                {AUDIT.offre.deductionTitre}
              </div>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[var(--au-craie)]">
                {AUDIT.offre.deductionCorps}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Questions fréquentes ────────────────────────────────────── */}
      <div className="border-t border-[var(--au-bord)]">
        <AuditFaq />
      </div>

      {/* ── 9. Dernier appel à l'action ────────────────────────────────── */}
      <section className="audit-grain relative isolate overflow-hidden border-t border-[var(--au-bord)] px-6 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px]"
          style={{
            background:
              "radial-gradient(55% 50% at 50% 100%, rgba(255,92,31,0.18) 0%, transparent 72%)",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h2 className="font-display text-[clamp(2rem,5.5vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-balance">
            {AUDIT.final.h2Start}{" "}
            <span className="text-[var(--au-accent)]">{AUDIT.final.h2Em}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15.5px] leading-relaxed text-[var(--au-brume)]">
            {AUDIT.final.corps}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="audit-chiffres font-display text-[42px] font-extrabold leading-none text-[var(--au-craie)]">
              {PRIX}
            </div>
            <BoutonPaiement taille="grand" className="w-full sm:w-auto">
              {AUDIT.final.cta}
            </BoutonPaiement>
            <p className="text-[13px] text-[var(--au-brume)]">{AUDIT.final.ctaNote}</p>
          </div>
        </div>
      </section>

      {/* Pied de page minimal : mentions obligatoires, aucune navigation */}
      <footer className="border-t border-[var(--au-bord)] px-6 py-8 text-center">
        <p className="text-[12.5px] text-[var(--au-brume)]">
          © {new Date().getFullYear()} ACTC ·{" "}
          <a href="/fr/mentions-legales" className="underline hover:text-[var(--au-craie)]">
            Mentions légales
          </a>{" "}
          ·{" "}
          <a href="/fr/politique-confidentialite" className="underline hover:text-[var(--au-craie)]">
            Confidentialité
          </a>
        </p>
      </footer>
    </main>
  );
}
