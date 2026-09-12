import type { Metadata } from "next";
import { LP } from "@/lib/lp-content";
import VslPlayer from "@/components/lp/VslPlayer";
import { CtaButton } from "@/components/lp/CtaButton";
import Voices from "@/components/lp/Voices";
import ClientSites from "@/components/lp/ClientSites";
import Versus from "@/components/lp/Versus";
import LpFaq from "@/components/lp/LpFaq";
import MetaPixel from "@/components/lp/MetaPixel";
import LpHeroDecor from "@/components/lp/LpHeroDecor";
import TrustRow from "@/components/lp/TrustRow";

export const metadata: Metadata = {
  title: "Plus de clients grâce à votre site · ACTC",
  description:
    "La vidéo qui explique comment nos clients ont obtenu un site qui se rembourse tout seul, livré en 21 jours, sans abonnement ni frais d'hébergement.",
};

export default function LandingPage() {
  return (
    <main className="relative">
      <MetaPixel event="PageView" />

      {/* ── Haut de page : texte court, puis la vidéo ─────────────────── */}
      <header
        className="relative isolate overflow-hidden bg-alabaster pb-16 pt-12 lg:pt-16"
        style={{ transform: "translateZ(0)" }}
      >
        <LpHeroDecor />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Logo seul, non cliquable : identité sans porte de sortie */}
          <div className="mb-9 font-display text-[15px] font-extrabold uppercase tracking-[0.22em] text-midnight/70">
            ACTC
          </div>

          <h1 className="mt-2 font-display text-[clamp(1.85rem,4.2vw,3.1rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-midnight">
            {LP.hero.h1Start}{" "}
            <span className="font-emphasis font-normal text-terra">{LP.hero.h1Em}</span>{" "}
            {LP.hero.h1End}
          </h1>

        </div>

        {/* Vidéo, puis le bouton directement en dessous */}
        <div className="relative mx-auto mt-11 max-w-3xl px-6">
          <VslPlayer />

          <div className="mt-7 text-center">
            <CtaButton className="w-full py-5 text-[17px] sm:w-auto sm:px-12">
              {LP.underVideo.cta}
            </CtaButton>
            <p className="mt-3 text-[13px] text-steel">{LP.underVideo.ctaNote}</p>
          </div>
        </div>

        {/* La consigne de visionnage reste sous le bouton : elle suffit,
            la liste des points faisait doublon avec la vidéo elle-même. */}
        <div className="relative mx-auto mt-8 max-w-3xl px-6">
          <p className="text-center text-[13px] italic text-steel">
            {LP.hero.watchNote}
          </p>
        </div>
      </header>

      {/* ── Réassurance + chiffres ───────────────────────────────────── */}
      <TrustRow />

      {/* ── Eux / nous ───────────────────────────────────────────────── */}
      <Versus />

      {/* ── Vocaux clients ───────────────────────────────────────────── */}
      <Voices />

      {/* ── Sites clients en ligne ───────────────────────────────────── */}
      <ClientSites />

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
