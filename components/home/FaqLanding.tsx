// FAQ (section_faq11 Miniamea) : item ouvert = fond gradient terracotta + arrondi.
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FAQ } from "@/lib/content";

export default function FaqLanding() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 lg:py-32 border-t border-grid-line">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-terra mb-5">FAQ</div>
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-midnight">
            Les questions{" "}
            <span className="font-emphasis font-normal text-terra">qu'on nous pose.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={cn(
                  "rounded-2xl border transition-all duration-500",
                  isOpen
                    ? "border-terra/30 bg-gradient-to-b from-terra/[0.12] via-terra/[0.05] to-terra/[0.10]"
                    : "border-grid-line bg-alabaster",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-[17px] font-semibold text-midnight">{it.q}</span>
                  <span
                    className={cn(
                      "shrink-0 text-2xl leading-none text-terra transition-transform duration-500",
                      isOpen && "rotate-45",
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.625, 0.05, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-relaxed text-midnight/75">{it.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
