"use client";

import { Icon } from "@iconify/react";
import { LP } from "@/lib/lp-content";

/**
 * Rappel du contenu de la vidéo.
 *
 * Le CTA ne vit plus ici : il est posé nu juste sous le lecteur, dans la page
 * elle-même, pour qu'aucun texte ne le repousse vers le bas. Ce bloc sert
 * uniquement à retenir celui qui hésite encore après le bouton.
 */
export default function VideoBenefits() {
  return (
    <div className="rounded-3xl border border-grid-line bg-white p-6 shadow-card-light sm:p-9">
      <h2 className="font-display text-[17px] font-bold text-midnight sm:text-[19px]">
        {LP.underVideo.title}
      </h2>
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
  );
}
