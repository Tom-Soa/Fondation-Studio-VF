// Écran de maintenance plein écran (affiché tant que MAINTENANCE = true dans layout).
"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import HeroBackground from "@/components/ui/HeroBackground";
import { WHATSAPP_URL } from "@/lib/content";

export default function Maintenance() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-alabaster flex items-center justify-center px-6 py-20">
      {/* Halo terracotta + particules (identité de marque) */}
      <div
        className="absolute inset-x-0 top-0 -z-20 h-[70vh]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(194,65,12,0.16) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <HeroBackground />

      <div className="relative w-full max-w-2xl text-center">
        {/* Marque */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 font-display font-extrabold text-[17px] tracking-[-0.02em] text-midnight"
        >
          <span className="relative flex h-2 w-2 live-dot">
            <span className="block h-2 w-2 rounded-full bg-terra" />
          </span>
          Fondation<span className="text-terra">Studio</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-grid-line bg-white px-4 py-1.5 shadow-card-light"
        >
          <Icon icon="ph:wrench-duotone" width={16} height={16} className="text-terra" aria-hidden />
          <span className="text-[13px] font-medium text-midnight/70">Site en cours de construction</span>
        </motion.div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 font-display font-extrabold tracking-[-0.03em] leading-[1.04] text-midnight text-[clamp(2.75rem,9vw,5.5rem)]"
        >
          On prépare quelque chose{" "}
          <span className="font-emphasis font-normal text-terra">de beau.</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-lg mx-auto text-[clamp(1rem,1.4vw,1.2rem)] leading-relaxed text-midnight/70"
        >
          Notre nouveau site arrive très bientôt. En attendant, on reste joignables :
          écrivez-nous directement, on répond vite.
        </motion.p>

        {/* Coordonnées */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-terra hover:bg-terra-hover px-7 py-4 text-white font-semibold text-[15px] transition-all glow-terra"
          >
            <Icon icon="ph:whatsapp-logo-duotone" width={20} height={20} aria-hidden />
            Nous écrire sur WhatsApp
          </a>
          <a
            href="tel:+33637999738"
            className="inline-flex items-center gap-2 rounded-full border border-midnight/15 hover:border-midnight/40 px-6 py-4 text-midnight font-medium text-[15px] transition-colors"
          >
            <Icon icon="ph:phone-duotone" width={18} height={18} className="text-terra" aria-hidden />
            06 37 99 97 38
          </a>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-7 text-[14px] text-midnight/55"
        >
          <a
            href="mailto:fondationstudio.fr@gmail.com"
            className="inline-flex items-center gap-2 hover:text-terra transition-colors"
          >
            <Icon icon="ph:envelope-simple-duotone" width={16} height={16} aria-hidden />
            fondationstudio.fr@gmail.com
          </a>
        </motion.div>
      </div>
    </main>
  );
}
