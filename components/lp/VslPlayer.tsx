"use client";

import LpIcon from "@/components/lp/LpIcon";
import { VSL_EMBED_URL, VSL_DURATION } from "@/lib/lp-config";

/**
 * Lecteur de la VSL.
 *
 * Le player YouTube est affiche directement, sans image de couverture par
 * dessus : le visiteur clique sur le bouton de YouTube, et la video part du
 * premier coup, avec le son. Toute couche intermediaire de notre cote ajoute
 * un clic, puisque le geste ne traverse pas la frontiere de l'iframe et que
 * YouTube redemande alors la lecture.
 */
export default function VslPlayer() {
  const configured = VSL_EMBED_URL.length > 0;

  // rel=0 limite les videos suggerees aux notres en fin de lecture,
  // modestbranding attenue l'habillage YouTube.
  const src = configured
    ? `${VSL_EMBED_URL}${VSL_EMBED_URL.includes("?") ? "&" : "?"}playsinline=1`
    : "";

  return (
    <div className="relative">
      {/* Halo derrière le lecteur */}
      <div
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-terra/10 blur-3xl"
        aria-hidden
      />

      <div className="relative aspect-video overflow-hidden rounded-3xl border border-grid-line bg-midnight shadow-card-light">
        {configured ? (
          <iframe
            src={src}
            title="Comment nos clients ont obtenu un site qui se rembourse tout seul"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[13px] font-medium text-white/85">
            Vidéo bientôt disponible
          </div>
        )}
      </div>

      {/* Barre sous le lecteur */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-midnight/60">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-terra" />
          Durée {VSL_DURATION}
        </span>
        <span className="inline-flex items-center gap-2">
          <LpIcon name="speaker" size={16} className="text-terra" />
          Pensez à activer le son
        </span>
      </div>
    </div>
  );
}
