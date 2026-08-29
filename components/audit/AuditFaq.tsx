"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { AUDIT } from "@/lib/audit-content";

/** Questions fréquentes, dépliables une à une. */
export default function AuditFaq() {
  const t = AUDIT.faq;
  const [ouvert, setOuvert] = useState<number | null>(0);

  return (
    <section className="px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--au-accent)]">
            {t.kicker}
          </div>
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,2.9rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[var(--au-craie)] text-balance">
            {t.h2}
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[var(--au-bord)] bg-[var(--au-ardoise)]">
          {t.items.map((item, i) => {
            const actif = ouvert === i;
            return (
              <div
                key={item.q}
                className={i > 0 ? "border-t border-[var(--au-bord)]" : undefined}
              >
                <button
                  type="button"
                  onClick={() => setOuvert(actif ? null : i)}
                  aria-expanded={actif}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.02] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--au-accent)] sm:px-7"
                >
                  <span className="font-display text-[16px] font-semibold text-[var(--au-craie)] sm:text-[17px]">
                    {item.q}
                  </span>
                  <Icon
                    icon="lucide:plus"
                    width={19}
                    height={19}
                    className={`shrink-0 text-[var(--au-accent)] transition-transform duration-300 ${
                      actif ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: actif ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-[15px] leading-relaxed text-[var(--au-brume)] sm:px-7">
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
