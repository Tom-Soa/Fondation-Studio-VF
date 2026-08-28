"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { LP, VOICES, type Voice } from "@/lib/lp-content";

/**
 * Messages vocaux de clients.
 *
 * Le son seul, sans image : c'est une preuve, pas une vidéo à regarder. Le
 * lecteur est le lecteur audio natif du navigateur, sans dépendance.
 * Tant que `src` vaut null, le bloc affiche "enregistrement à venir" au lieu
 * d'un lecteur vide et inutilisable.
 */
function VoiceCard({ voice, index }: { voice: Voice; index: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className="flex flex-col rounded-3xl border border-grid-line bg-white p-6 shadow-card-light sm:p-8"
    >
      {/* Résultat mis en avant : c'est ce qui se retient */}
      <span className="w-fit rounded-full bg-terra/10 px-3 py-1 text-[12px] font-semibold text-terra">
        {voice.result}
      </span>

      <blockquote className="mt-5 flex-1 text-[15.5px] leading-relaxed text-midnight/80">
        {voice.quote}
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-grid-line pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terra/10 text-terra">
          <Icon icon="ph:microphone-duotone" width={20} height={20} aria-hidden />
        </span>
        <span>
          <span className="block font-display text-[15px] font-bold text-midnight">
            {voice.name}
          </span>
          <span className="block text-[12.5px] text-steel">{voice.job}</span>
        </span>
      </figcaption>

      {/* Lecteur audio */}
      <div className="mt-5">
        {voice.src ? (
          <audio
            controls
            preload="none"
            src={voice.src}
            className="w-full"
            aria-label={`Message vocal de ${voice.name}`}
          >
            Votre navigateur ne peut pas lire cet enregistrement.
          </audio>
        ) : (
          <div className="flex items-center justify-center gap-2 rounded-full border border-dashed border-grid-line bg-alabaster px-4 py-3 text-[12.5px] text-steel">
            <Icon icon="ph:waveform-duotone" width={17} height={17} aria-hidden />
            Enregistrement à venir
          </div>
        )}
      </div>
    </motion.figure>
  );
}

export default function Voices() {
  const t = LP.voices;
  return (
    <section className="border-y border-grid-line bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-terra">
            {t.kicker}
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-midnight">
            {t.h2Start}{" "}
            <span className="font-emphasis font-normal text-terra">{t.h2Em}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-midnight/65">
            {t.sub}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {VOICES.map((v, i) => (
            <VoiceCard key={v.name} voice={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
