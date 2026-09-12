"use client";

import { useState } from "react";
import LpIcon from "@/components/lp/LpIcon";
import { LP } from "@/lib/lp-content";

/** Objections traitées juste avant le dernier CTA. */
export default function LpFaq() {
  const t = LP.faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-grid-line bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-terra">
            {t.kicker}
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-midnight">
            {t.h2Start}{" "}
            <span className="font-emphasis font-normal text-terra">{t.h2Em}</span>
          </h2>
        </div>

        <div className="divide-y divide-grid-line overflow-hidden rounded-3xl border border-grid-line">
          {t.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                >
                  <span className="font-display text-[16px] font-semibold text-midnight sm:text-[17px]">
                    {item.q}
                  </span>
                  <LpIcon name="plus" size={18} />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-[15px] leading-relaxed text-midnight/70 sm:px-7">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
