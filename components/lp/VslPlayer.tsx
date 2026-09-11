"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import {
  VSL_EMBED_URL,
  VSL_POSTER,
  VSL_DURATION,
  VSL_YOUTUBE_ID,
} from "@/lib/lp-config";

/**
 * Lecteur de la VSL en "facade" : rien du player tiers n'est charge tant que
 * le visiteur n'a pas clique, ce qui garde le haut de page rapide.
 *
 * Le clic doit lancer la video AVEC le son, du premier coup. Une iframe avec
 * autoplay=1 ne suffit pas : le geste de l'utilisateur ne traverse pas la
 * frontiere de l'iframe, le navigateur bloque donc le son et YouTube affiche
 * son propre bouton play, obligeant a cliquer une seconde fois. On pilote donc
 * la lecture par l'API YouTube, qui permet d'appeler playVideo() et unMute()
 * nous-memes. Si l'API ne repond pas, on retombe sur l'iframe autoplay, qui
 * demarre au pire en muet plutot que pas du tout.
 */

type YtPlayer = {
  playVideo: () => void;
  unMute: () => void;
  setVolume: (v: number) => void;
  setPlaybackQuality?: (q: string) => void;
};

type YtNamespace = {
  Player: new (
    el: HTMLElement,
    options: Record<string, unknown>,
  ) => YtPlayer;
};

declare global {
  interface Window {
    YT?: YtNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

/** Charge l'API YouTube une seule fois pour toute la page. */
function chargerApiYoutube(): Promise<YtNamespace | null> {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.YT?.Player) return Promise.resolve(window.YT);

  return new Promise((resolve) => {
    // L'API ne rappelle qu'un seul callback global : on chaine le precedent
    // pour ne pas ecraser un autre lecteur eventuel.
    const precedent = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      precedent?.();
      resolve(window.YT ?? null);
    };

    if (!document.getElementById("yt-iframe-api")) {
      const script = document.createElement("script");
      script.id = "yt-iframe-api";
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    }

    // Filet de securite : si l'API ne repond pas, on ne bloque pas la lecture.
    setTimeout(() => resolve(window.YT ?? null), 4000);
  });
}

export default function VslPlayer() {
  const [playing, setPlaying] = useState(false);
  // Vrai tant que l'API n'a pas pris la main : sert au repli sur l'iframe.
  const [repliIframe, setRepliIframe] = useState(false);
  const monteRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YtPlayer | null>(null);

  const configured = VSL_EMBED_URL.length > 0;
  const parApi = configured && VSL_YOUTUBE_ID.length > 0;

  const lancer = useCallback(async () => {
    if (!configured) return;
    setPlaying(true);
    if (!parApi) return;

    const YT = await chargerApiYoutube();
    const hote = monteRef.current;
    if (!YT || !hote) {
      setRepliIframe(true);
      return;
    }

    playerRef.current = new YT.Player(hote, {
      videoId: VSL_YOUTUBE_ID,
      playerVars: {
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
        autoplay: 1,
      },
      events: {
        onReady: (e: { target: YtPlayer }) => {
          // L'appel vient de notre code, pas d'un autoplay d'iframe : le son
          // est autorise parce qu'il decoule du clic du visiteur.
          e.target.unMute();
          e.target.setVolume(100);
          // Suggestion seulement : YouTube tranche selon la bande passante.
          e.target.setPlaybackQuality?.("hd1080");
          e.target.playVideo();
        },
        onError: () => setRepliIframe(true),
      },
    });
  }, [configured, parApi]);

  // Detruit le lecteur si le composant disparait, pour ne pas laisser tourner
  // le son d'une video demontee.
  useEffect(() => {
    return () => {
      playerRef.current = null;
    };
  }, []);

  return (
    <div className="relative">
      {/* Halo derrière le lecteur */}
      <div
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-terra/10 blur-3xl"
        aria-hidden
      />

      <div className="relative aspect-video overflow-hidden rounded-3xl border border-grid-line bg-midnight shadow-card-light">
        {playing && configured ? (
          parApi && !repliIframe ? (
            // L'API remplace ce noeud par sa propre iframe.
            <div ref={monteRef} className="absolute inset-0 h-full w-full" />
          ) : (
            <iframe
              src={`${VSL_EMBED_URL}${
                VSL_EMBED_URL.includes("?") ? "&" : "?"
              }autoplay=1&playsinline=1`}
              title="Comment choisir un site internet qui vous rapporte des clients"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          )
        ) : (
          <button
            type="button"
            onClick={lancer}
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
