"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const BUDGET_OPTIONS = [
  "Moins de 1 500 €",
  "1 500 € à 2 000 €",
  "2 000 € à 3 000 €",
  "3 000 € à 5 000 €",
  "Plus de 5 000 €",
  "Je ne sais pas encore",
];

const SITE_TYPE_OPTIONS = [
  "Site vitrine (présenter mon activité)",
  "Site vitrine avec blog",
  "Boutique e-commerce",
  "Landing page",
  "Je ne sais pas encore",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [budget, setBudget] = useState("");
  const [siteType, setSiteType] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "loading") return;

    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      sector: String(fd.get("sector") ?? ""),
      budget,
      siteType,
      message: String(fd.get("message") ?? ""),
      hp: String(fd.get("hp") ?? ""),
    };

    setStatus({ kind: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus({ kind: "error", message: data.error ?? "Une erreur est survenue." });
        return;
      }
      setStatus({ kind: "success" });
      e.currentTarget.reset();
      setBudget("");
      setSiteType("");
    } catch {
      setStatus({ kind: "error", message: "Connexion impossible. Réessayez dans un instant." });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {/* Prénom + Nom */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="firstName" label="Prénom" type="text" placeholder="Jean" autocomplete="given-name" required />
        <Field id="lastName" label="Nom" type="text" placeholder="Dupont" autocomplete="family-name" required />
      </div>

      {/* Email + Téléphone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="email" label="Email" type="email" placeholder="jean@entreprise.fr" autocomplete="email" required />
        <Field id="phone" label="Téléphone" type="tel" placeholder="06 00 00 00 00" autocomplete="tel" required={false} />
      </div>

      {/* Secteur */}
      <Field id="sector" label="Secteur d'activité" type="text" placeholder="BTP · restaurant · cabinet · e-commerce…" autocomplete="off" required />

      {/* Type de site */}
      <div>
        <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-steel mb-2">
          Type de site souhaité
        </label>
        <div className="flex flex-wrap gap-2">
          {SITE_TYPE_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setSiteType(opt === siteType ? "" : opt)}
              className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium border transition-all ${
                siteType === opt
                  ? "bg-terra text-white border-terra"
                  : "bg-white border-grid-line text-steel hover:border-terra/50 hover:text-midnight"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-steel mb-2">
          Budget envisagé
        </label>
        <div className="flex flex-wrap gap-2">
          {BUDGET_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setBudget(opt === budget ? "" : opt)}
              className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium border transition-all ${
                budget === opt
                  ? "bg-terra text-white border-terra"
                  : "bg-white border-grid-line text-steel hover:border-terra/50 hover:text-midnight"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-[0.16em] text-steel mb-2">
          Votre projet <span className="text-terra" aria-hidden>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          minLength={10}
          maxLength={5000}
          placeholder="Décrivez votre activité, vos objectifs et votre client idéal…"
          className="w-full bg-white border border-midnight/15 rounded-2xl px-4 py-3 text-[15px] text-midnight placeholder:text-midnight/35 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/20 transition-colors resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status.kind === "loading"}
          className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-terra hover:bg-terra-hover text-white font-semibold text-[15px] transition-all glow-terra disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status.kind === "loading" ? (
            <><Spinner />Envoi en cours…</>
          ) : (
            <>
              Envoyer ma demande
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-steel">
          Réponse sous 24 h · sans engagement
        </p>
      </div>

      <div aria-live="polite" className="min-h-[1.5rem]">
        <AnimatePresence mode="wait">
          {status.kind === "success" && (
            <motion.div key="success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="flex items-start gap-3 p-4 rounded-2xl border border-emerald-600/20 bg-emerald-50 text-emerald-900" role="status">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
              <div>
                <div className="font-semibold text-[14.5px]">Demande envoyée</div>
                <p className="text-[13.5px] mt-0.5 text-emerald-900/85">On vous répond sous 24 h avec une première proposition.</p>
              </div>
            </motion.div>
          )}
          {status.kind === "error" && (
            <motion.div key="error" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="flex items-start gap-3 p-4 rounded-2xl border border-terra/20 bg-terra/5 text-midnight" role="alert">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-terra" aria-hidden><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
              <div>
                <div className="font-semibold text-[14.5px]">{status.message}</div>
                <p className="text-[13.5px] mt-0.5 text-steel">
                  Écrivez-nous directement à{" "}
                  <a href="mailto:fondationstudio.fr@gmail.com" className="text-terra underline underline-offset-2">fondationstudio.fr@gmail.com</a>.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

function Field({ id, label, type, placeholder, autocomplete, required }: {
  id: string; label: string; type: string; placeholder: string; autocomplete: string; required: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-mono text-[10px] uppercase tracking-[0.16em] text-steel mb-2">
        {label}{required && <span className="text-terra ml-0.5" aria-hidden>*</span>}
      </label>
      <input
        id={id} name={id} type={type} required={required} placeholder={placeholder} autoComplete={autocomplete}
        className="w-full bg-white border border-midnight/15 rounded-2xl px-4 py-3 text-[15px] text-midnight placeholder:text-midnight/35 focus:outline-none focus:border-terra focus:ring-2 focus:ring-terra/20 transition-colors"
      />
    </div>
  );
}

function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="animate-spin" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
