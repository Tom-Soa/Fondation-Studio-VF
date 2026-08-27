import type { Metadata } from "next";
import { LP } from "@/lib/lp-content";
import VslPlayer from "@/components/lp/VslPlayer";
import VideoBenefits from "@/components/lp/VideoBenefits";
import { CtaButton } from "@/components/lp/CtaButton";
import BeforeAfter from "@/components/lp/BeforeAfter";
import Versus from "@/components/lp/Versus";
import LpFaq from "@/components/lp/LpFaq";
import MetaPixel from "@/components/lp/MetaPixel";
import LpHeroDecor from "@/components/lp/LpHeroDecor";
import TrustRow from "@/components/lp/TrustRow";

export const metadata: Metadata = {
  title: "Plus de clients grâce à votre site · ACTC",
  description:
    "La vidéo qui explique comment choisir un site internet qui vous rapporte réellement des clients, et pourquoi nos sites en génèrent en moins de 30 jours en moyenne.",
};

export default function LandingPage() {
  return (
    <main className="relative">
      <MetaPixel event="PageView" />

      {/* ── Haut de page : texte court, puis la vidéo ─────────────────── */}
      <header className="relative isolate overflow-hidden bg-alabaster pb-16 pt-12 lg:pt-16">
        <LpHeroDecor />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Logo seul, non cliquable : identité sans porte de sortie */}
          <div className="mb-9 font-display text-[15px] font-extrabold uppercase tracking-[0.22em] text-midnight/70">
            ACTC
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-grid-line bg-white px-4 py-1.5 shadow-card-light">
            <span className="h-1.5 w-1.5 rounded-full bg-terra" />
            <span className="text-[13px] font-medium text-midnight/70">{LP.hero.pill}</span>
          </span>

          <h1 className="mt-7 font-display text-[clamp(2.1rem,5.5vw,4rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-midnight">
            {LP.hero.h1Start}{" "}
            <span className="font-emphasis font-normal text-terra">{LP.hero.h1Em}</span>
            <br className="hidden sm:block" />{" "}
            {LP.hero.h1End}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[clamp(0.98rem,1.25vw,1.15rem)] leading-relaxed text-midnight/70">
            {LP.hero.sub}
          </p>
        </div>

        {/* Vidéo */}
        <div className="relative mx-auto mt-11 max-w-3xl px-6">
          <VslPlayer />
        </div>

        {/* ── Juste sous la vidéo : bénéfices + CTA principal ─────────── */}
        <div className="relative mx-auto mt-7 max-w-3xl px-6">
          <VideoBenefits />

          <p className="mt-5 text-center text-[13px] italic text-steel">
            {LP.hero.watchNote}
          </p>
        </div>
      </header>

      {/* ── Réassurance + chiffres ───────────────────────────────────── */}
      <TrustRow />

      {/* ── Eux / nous ───────────────────────────────────────────────── */}
      <Versus />

      {/* ── Avant / après ────────────────────────────────────────────── */}
      <BeforeAfter />

      {/* ── Objections ───────────────────────────────────────────────── */}
      <LpFaq />

      {/* ── CTA final ────────────────────────────────────────────────── */}
      <section className="bg-alabaster py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-terra px-6 py-14 text-center sm:px-8 sm:py-16 lg:px-16 lg:py-20">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full bg-white/20 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {LP.finalCta.badge}
              </span>
              <h2 className="mt-7 font-display text-[clamp(2rem,5.5vw,4rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-white">
                {LP.finalCta.h2Start}{" "}
                <span className="font-emphasis font-normal">{LP.finalCta.h2Em}</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-white/85">
                {LP.finalCta.body}
              </p>
              <div className="mt-9 flex flex-col items-center gap-3">
                <CtaButton variant="white" className="w-full sm:w-auto">
                  {LP.finalCta.cta}
                </CtaButton>
                <p className="text-[13px] text-white/80">{LP.finalCta.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pied de page minimal : mentions obligatoires, aucun lien de navigation */}
      <footer className="border-t border-grid-line bg-alabaster py-8 text-center">
        <p className="text-[12.5px] text-steel">
          © {new Date().getFullYear()} ACTC ·{" "}
          <a href="/fr/mentions-legales" className="underline hover:text-midnight">
            Mentions légales
          </a>{" "}
          ·{" "}
          <a href="/fr/politique-confidentialite" className="underline hover:text-midnight">
            Confidentialité
          </a>
        </p>
      </footer>
    </main>
  );
}
