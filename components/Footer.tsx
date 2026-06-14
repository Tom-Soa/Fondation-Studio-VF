// Footer : colonnes nav + contact, puis grande signature de marque tout en bas.
"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative bg-midnight text-white/70 border-t border-white/[0.06] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <p className="text-[14.5px] leading-relaxed text-white/55 max-w-sm mb-6">
              Design sur-mesure. Référencement intégré. Hébergement gratuit. À partir de
              1 400 €, page d'accueil offerte avant tout engagement.
            </p>
            <div className="space-y-2 text-[13px]">
              <a
                href="tel:+33637999738"
                className="flex items-center gap-2 text-white/55 hover:text-white transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l.91-1.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
                </svg>
                +33 6 37 99 97 38
              </a>
              <a
                href="mailto:fondationstudio.fr@gmail.com"
                className="flex items-center gap-2 text-white/55 hover:text-white transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                fondationstudio.fr@gmail.com
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-5 font-medium">
              Navigation
            </div>
            <ul className="space-y-2.5 text-[14px]">
              {[
                ["Accueil", "/"],
                ["Sites vitrines", "/sites-vitrine"],
                ["Sites marchands", "/sites-marchands"],
                ["Réalisations", "/realisations"],
                ["Tarifs", "/tarifs"],
                ["L'équipe", "/qui-sommes-nous"],
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
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-5 font-medium">
              Légal
            </div>
            <ul className="space-y-2.5 text-[14px]">
              {[
                ["Mentions légales", "/mentions-legales"],
                ["CGV", "/cgv"],
                ["Politique de confidentialité", "/politique-confidentialite"],
                ["Cookies", "/mentions-legales#politique-cookies"],
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

        {/* Bas de page : copyright */}
        <div className="pt-8 border-t border-white/[0.06] text-[12px] uppercase tracking-[0.14em] text-white/40">
          <div>© 2026 Fondation Studio · Tous droits réservés</div>
        </div>

        {/* Grande signature de marque + tagline, tout en bas (même police que la navbar) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <h2 className="font-display font-extrabold tracking-[-0.04em] text-[clamp(2.5rem,9vw,7rem)] leading-[0.95] text-white">
            Fondation<span className="text-terra">&nbsp;Studio</span>
          </h2>
          <p className="mt-3 font-display font-medium text-[clamp(0.95rem,2vw,1.25rem)] tracking-[-0.01em] text-white/40">
            Sites premium pour PME ambitieuses
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
