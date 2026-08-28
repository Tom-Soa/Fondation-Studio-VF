"use client";

import HeroBackground from "@/components/ui/HeroBackground";

/**
 * Décor du haut de page, identique au hero du site : halo terracotta puis
 * réseau de particules animé (canvas).
 *
 * Le mouvement des particules est autonome et n'est lié à aucun scroll, comme
 * sur le site. Le lecteur vidéo étant posé au-dessus sur fond opaque, rien ne
 * bouge derrière la vidéo pendant la lecture.
 */
export default function LpHeroDecor() {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-[70vh]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(194,65,12,0.14) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <HeroBackground />
    </>
  );
}
