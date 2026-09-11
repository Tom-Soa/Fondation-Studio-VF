"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { VSL_EMBED_URL, VSL_POSTER, VSL_DURATION } from "@/lib/lp-config";

/**
 * Lecteur de la VSL en "facade" : on n'injecte l'iframe qu'au clic, ce qui évite
 * de charger le player tiers au chargement de la page (et sa lenteur).
 */
export default function VslPlayer() {
  const [playing, setPlaying] = useState(false);
  const configured = VSL_EMBED_URL.length > 0;

  return (
    <div className="relative">
      {/* Halo derrière le lecteur */}
      <div
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-terra/10 blur-3xl"
        aria-hidden
      />

      <div className="relative aspect-video overflow-hidden rounded-3xl border border-grid-line bg-midnight shadow-card-light">
        {playing && configured ? (
          <iframe
            // autoplay=1 ne demarre la video qu'apres le clic sur la facade :
            // le geste de l'utilisateur autorise le navigateur a garder le son.
            src={`${VSL_EMBED_URL}${VSL_EMBED_URL.includes("?") ? "&" : "?"}autoplay=1&playsinline=1`}
            title="Comment choisir un site internet qui vous rapporte des clients"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => configured && setPlaying(true)}
            disabled={!configured}
            className="group absolute inset-0 h-full w-full cursor-pointer disabled:cursor-default"
            aria-label="Lire la vidéo"
          >
            <img
              src={VSL_POSTER}
              alt=""
              className="h-full w-full object-cover opacity-60"
              draggable={false}
            />
            <span className="absolute inset-0 bg-midnight/40" aria-hidden />
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-terra text-white shadow-terra transition-transform group-hover:scale-105">
                <Icon icon="lucide:play" width={30} height={30} className="ml-1" aria-hidden />
              </span>
              <span className="text-[13px] font-medium text-white/85">
                {configured ? `Lire la vidéo · ${VSL_DURATION}` : "Vidéo bientôt disponible"}
              </span>
            </span>
          </button>
        )}
      </div>

      {/* Barre sous le lecteur */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-midnight/60">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-terra" />
          Durée {VSL_DURATION}
        </span>
        <span className="inline-flex items-center gap-2">
          <Icon icon="ph:speaker-high-duotone" width={16} height={16} className="text-terra" aria-hidden />
          Son activé dès la lecture
        </span>
      </div>
    </div>
  );
}
