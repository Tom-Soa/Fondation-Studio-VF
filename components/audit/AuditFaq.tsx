"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { AUDIT } from "@/lib/audit-content";

/** Questions fréquentes, dépliables une à une. Style identique au site. */
export default function AuditFaq() {
  const t = AUDIT.faq;
  const [ouvert, setOuvert] = useState<number | null>(0);

  return (
    <section className="border-t border-grid-line bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-terra">
            {t.kicker}
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-midnight text-balance">
            {t.h2}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="divide-y divide-grid-line overflow-hidden rounded-3xl border border-grid-line"
        >
          {t.items.map((item, i) => {
            const actif = ouvert === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOuvert(actif ? null : i)}
                  aria-expanded={actif}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-alabaster sm:px-7"
                >
                  <span className="font-display text-[16px] font-semibold text-midnight sm:text-[17px]">
                    {item.q}
                  </span>
                  <Icon
                    icon="lucide:plus"
                    width={18}
                    height={18}
                    className={`shrink-0 text-terra transition-transform duration-300 ${
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
                    <p className="px-5 pb-6 text-[15px] leading-relaxed text-midnight/70 sm:px-7">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Sortie de secours pour qui hésite encore : la page doit vendre seule */}
        <p className="mt-8 text-center text-[14px] leading-relaxed text-midnight/70">
          {t.contactAmorce}{" "}
          <a
            href={`mailto:${t.contactMail}`}
            className="font-medium text-terra underline underline-offset-2"
          >
            {t.contactLien}
          </a>
        </p>
      </div>
    </section>
  );
}
