"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";

const STEPS = [
  {
    icon: "ph:phone-call-duotone",
    title: "On vous rappelle sous 24 h ouvrées",
    body: "Un échange court pour comprendre votre activité et vos objectifs.",
  },
  {
    icon: "ph:chats-circle-duotone",
    title: "On vous dit ce qu'on peut faire, et en combien de temps",
    body: "Une réponse claire sur votre projet. Vous décidez ensuite si on continue.",
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

      <div className="mt-10 rounded-3xl border border-grid-line bg-white p-6 shadow-card-light sm:p-8">
        <p className="font-display text-[17px] font-bold text-midnight">
          En attendant, regardez ce qu&apos;on a fait pour nos clients.
        </p>
        <p className="mx-auto mt-2 max-w-md text-[14.5px] leading-relaxed text-steel">
          Des sites en ligne, que vous pouvez ouvrir et parcourir comme le ferait
          un de vos clients.
        </p>
        <a
          href="https://www.actcstudio.fr/fr/realisations"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-terra px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-terra-hover"
        >
          Voir nos réalisations
          <Icon icon="lucide:arrow-right" width={16} height={16} aria-hidden />
        </a>
      </div>

      <p className="mt-8 text-[13px] text-steel">
        Une question en attendant ?{" "}
        <a href="mailto:tomsoa.actc@gmail.com" className="text-terra underline">
          tomsoa.actc@gmail.com
        </a>
      </p>
    </motion.div>
  );
}
