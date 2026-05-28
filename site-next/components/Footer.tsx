// INSPIRATION: editorial minimal footer Awwwards/Land-book -> brand mark grande typo, colonnes navigation, signature mono
"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative bg-midnight text-white/70 border-t border-white/[0.06] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Big serif brand statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 pb-16 border-b border-white/[0.06]"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-terra mb-4">
            Fondation Studio
          </div>
          <h2 className="font-sans font-medium tracking-[-0.04em] text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] text-white max-w-4xl">
            Sites premium pour
            <br />
            <span className="text-terra">PME ambitieuses</span>.
          </h2>
        </motion.div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <p className="text-[14.5px] leading-relaxed text-white/55 max-w-sm mb-6">
              Code pur. Design sur-mesure. Référencement intégré. À partir de
              1 400 €, maquette gratuite avant tout engagement.
            </p>
            <div className="space-y-2 text-[13px]">
              <a
                href="tel:+262692000000"
                className="flex items-center gap-2 text-white/55 hover:text-white transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l.91-1.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
                </svg>
                +262 6 92 00 00 00
              </a>
              <a
                href="mailto:contact@fondationstudio.fr"
                className="flex items-center gap-2 text-white/55 hover:text-white transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                contact@fondationstudio.fr
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 mb-5">
              Navigation
            </div>
            <ul className="space-y-2.5 text-[14px]">
              {[
                ["Accueil", "/"],
                ["L'équipe", "/qui-sommes-nous"],
                ["Réalisations", "/realisations"],
                ["Processus", "/processus"],
                ["Tarifs", "/tarifs"],
                ["FAQ", "/faq"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/65 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 mb-5">
              Légal
            </div>
            <ul className="space-y-2.5 text-[14px]">
              {[
                ["Mentions légales", "/mentions-legales"],
                ["Politique cookies", "/mentions-legales#politique-cookies"],
                ["Données personnelles", "/mentions-legales#rgpd"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/65 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] font-mono uppercase tracking-[0.14em] text-white/40">
          <div>© 2026 Fondation Studio · Tous droits réservés</div>
          <div className="flex items-center gap-1.5">
            <span className="block h-1.5 w-1.5 rounded-full bg-terra" />
            <span>Fait main · Code pur · Hébergé sans frais</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
