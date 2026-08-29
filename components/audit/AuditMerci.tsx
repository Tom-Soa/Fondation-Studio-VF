"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { AUDIT } from "@/lib/audit-content";

/** Confirmation de paiement : ce qui se passe ensuite, étape par étape. */
export default function AuditMerci() {
  const t = AUDIT.merci;

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-alabaster px-6 py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(194,65,12,0.14) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="w-full max-w-2xl text-center"
      >
        <div className="mb-8 font-display text-[15px] font-extrabold uppercase tracking-[0.22em] text-midnight/70">
          ACTC
        </div>

        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-terra text-white shadow-terra"
        >
          <Icon icon="lucide:check" width={30} height={30} aria-hidden />
        </motion.span>

        <h1 className="mt-8 font-display text-[clamp(2rem,5.5vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-midnight text-balance">
          {t.titreStart}{" "}
          <span className="font-emphasis font-normal text-terra">{t.titreEm}</span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-midnight/70">
          {t.sous}
        </p>

        <ol className="mt-10 space-y-3 text-left">
          {t.etapes.map((etape, i) => (
            <motion.li
              key={etape.titre}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.09, ease: [0.23, 1, 0.32, 1] }}
              className="flex gap-4 rounded-2xl border border-grid-line bg-white p-5 shadow-card-light"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terra/10 text-terra">
                <Icon icon={etape.icone} width={21} height={21} aria-hidden />
              </span>
              <div>
                <p className="font-display text-[15.5px] font-semibold text-midnight">
                  <span className="mr-2 text-terra">{i + 1}.</span>
                  {etape.titre}
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-midnight/70">{etape.corps}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Filet de sécurité : sans l'adresse du site, l'analyse ne peut pas démarrer */}
        <div className="mt-8 rounded-2xl border border-terra/25 bg-terra/[0.06] p-5 text-left">
          <p className="font-display text-[14.5px] font-bold text-midnight">{t.rappelTitre}</p>
          <p className="mt-1.5 text-[14px] leading-relaxed text-midnight/75">{t.rappelCorps}</p>
        </div>

        <p className="mt-8 text-[13.5px] text-midnight/70">
          {t.deduction}
        </p>

        <p className="mt-5 text-[13px] text-midnight/70">
          {t.contactLabel}{" "}
          <a href={`mailto:${t.contactMail}`} className="text-terra underline">
            {t.contactMail}
          </a>
        </p>
      </motion.div>
    </section>
  );
}
