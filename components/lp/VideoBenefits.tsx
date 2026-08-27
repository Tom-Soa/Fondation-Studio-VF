"use client";

import { Icon } from "@iconify/react";
import { LP } from "@/lib/lp-content";
import { CtaButton } from "@/components/lp/CtaButton";

/** Bloc posé juste sous la vidéo : ce qu'on y apprend, puis le CTA principal. */
export default function VideoBenefits() {
  return (
    <div className="rounded-3xl border border-grid-line bg-white p-6 shadow-card-light sm:p-9">
      <h2 className="font-display text-[19px] font-bold text-midnight sm:text-[22px]">
        {LP.underVideo.title}
      </h2>
      <ul className="mt-6 space-y-3.5">
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

      <div className="mt-8 flex flex-col items-center gap-3 border-t border-grid-line pt-8">
        <CtaButton className="w-full sm:w-auto">{LP.underVideo.cta}</CtaButton>
        <p className="text-[13px] text-steel">{LP.underVideo.ctaNote}</p>
      </div>
    </div>
  );
}
