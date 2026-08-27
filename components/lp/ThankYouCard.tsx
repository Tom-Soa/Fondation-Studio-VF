"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";

const STEPS = [
  {
    icon: "ph:envelope-simple-duotone",
    title: "Vous recevez un e-mail de confirmation",
    body: "Dans les minutes qui suivent. Pensez à vérifier vos indésirables.",
  },
  {
    icon: "ph:phone-call-duotone",
    title: "On vous appelle sous 24 h ouvrées",
    body: "Un échange court pour comprendre votre activité et vos objectifs.",
  },
  {
    icon: "ph:layout-duotone",
    title: "On conçoit votre page d'accueil, offerte",
    body: "Une vraie maquette sur-mesure. Vous décidez ensuite si on continue.",
  },
];

export default function ThankYouCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className="w-full max-w-2xl text-center"
    >
      <div className="mb-8 font-display text-[15px] font-extrabold uppercase tracking-[0.22em] text-midnight/70">
        ACTC
      </div>

      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-terra text-white shadow-terra">
        <Icon icon="lucide:check" width={30} height={30} aria-hidden />
      </span>

      <h1 className="mt-8 font-display text-[clamp(2rem,5.5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-midnight">
        C&apos;est enregistré.{" "}
        <span className="font-emphasis font-normal text-terra">Merci.</span>
      </h1>

      <p className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-midnight/70">
        Votre demande nous est bien parvenue. Voici ce qui se passe maintenant.
      </p>

      <ul className="mt-10 space-y-3 text-left">
        {STEPS.map((s, i) => (
          <li
            key={s.title}
            className="flex gap-4 rounded-2xl border border-grid-line bg-white p-5 shadow-card-light"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terra/10 text-terra">
              <Icon icon={s.icon} width={21} height={21} aria-hidden />
            </span>
            <div>
              <p className="font-display text-[15.5px] font-semibold text-midnight">
                <span className="mr-2 text-terra">{i + 1}.</span>
                {s.title}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-steel">{s.body}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-[13px] text-steel">
        Une question en attendant ?{" "}
        <a href="mailto:contact@fondationstudio.fr" className="text-terra underline">
          contact@fondationstudio.fr
        </a>
      </p>
    </motion.div>
  );
}
