"use client";

import { Icon } from "@iconify/react";
import { LP } from "@/lib/lp-content";
import { CtaButton } from "@/components/lp/CtaButton";

/**
 * Ce qui suit immédiatement la vidéo.
 *
 * L'ordre compte : le bouton arrive AVANT le rappel du contenu de la vidéo.
 * Le visiteur qui vient de finir de regarder doit trouver l'action sous ses
 * yeux, sans avoir à parcourir une liste d'arguments d'abord. Les bénéfices
 * passent dessous, pour celui qui hésite encore.
 */
export default function VideoBenefits() {
  return (
    <div className="space-y-6">
      {/* ── Bloc d'action, mis en avant ─────────────────────────────── */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-terra/30 bg-white p-6 text-center shadow-[0_18px_50px_-20px_rgba(194,65,12,0.45)] sm:p-9">
        {/* Halo discret pour détacher le bloc du fond */}
        <div
          className="pointer-events-none absolute -top-20 left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-full bg-terra/10 blur-3xl"
          aria-hidden
        />

        <div className="relative">
          <h2 className="font-display text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-midnight sm:text-[27px]">
            {LP.underVideo.ctaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-midnight/70">
            {LP.underVideo.ctaLead}
          </p>

          <div className="mt-7">
            <CtaButton className="w-full py-5 text-[17px] sm:w-auto sm:px-10">
              {LP.underVideo.cta}
            </CtaButton>
            <p className="mt-3 text-[13px] text-steel">{LP.underVideo.ctaNote}</p>
          </div>

          {/* Micro-réassurance : lève les 3 freins juste au moment du clic */}
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-grid-line pt-5 text-[12.5px] text-midnight/60">
            {LP.underVideo.ctaMicro.map((m) => (
              <li key={m} className="inline-flex items-center gap-1.5">
                <Icon
                  icon="lucide:check"
                  width={14}
                  height={14}
                  className="text-terra"
                  aria-hidden
                />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Rappel du contenu de la vidéo ───────────────────────────── */}
      <div className="rounded-3xl border border-grid-line bg-white p-6 shadow-card-light sm:p-9">
        <h3 className="font-display text-[17px] font-bold text-midnight sm:text-[19px]">
          {LP.underVideo.title}
        </h3>
        <ul className="mt-5 space-y-3.5">
          {LP.underVideo.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-midnight/80">
              <Icon
                icon="lucide:check"
                width={17}
                height={17}
                className="mt-1 shrink-0 text-terra"
                aria-hidden
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
