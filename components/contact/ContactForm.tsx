"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Locale } from "@/lib/i18n";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const T: Record<Locale, {
  budgetOptions: string[];
  siteTypeOptions: string[];
  firstName: { label: string; placeholder: string };
  lastName: { label: string; placeholder: string };
  email: { label: string; placeholder: string };
  phone: { label: string; placeholder: string };
  sector: { label: string; placeholder: string };
  siteTypeLabel: string;
  budgetLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  submitting: string;
  responseNote: string;
  successTitle: string;
  successBody: string;
  errorSend: string;
  errorNetwork: string;
  errorWriteUs: string;
  notProvided: string;
}> = {
  fr: {
    budgetOptions: [
      "Moins de 1 500 €",
      "1 500 € à 2 000 €",
      "2 000 € à 3 000 €",
      "3 000 € à 5 000 €",
      "Plus de 5 000 €",
      "Je ne sais pas encore",
    ],
    siteTypeOptions: [
      "Site vitrine (présenter mon activité)",
      "Site vitrine avec blog",
      "Boutique e-commerce",
      "Landing page",
      "Je ne sais pas encore",
    ],
    firstName: { label: "Prénom", placeholder: "Jean" },
    lastName: { label: "Nom", placeholder: "Dupont" },
    email: { label: "Email", placeholder: "jean@entreprise.fr" },
    phone: { label: "Téléphone", placeholder: "06 00 00 00 00" },
    sector: { label: "Secteur d'activité", placeholder: "BTP · restaurant · cabinet · e-commerce…" },
    siteTypeLabel: "Type de site souhaité",
    budgetLabel: "Budget envisagé",
    messageLabel: "Votre projet",
    messagePlaceholder: "Décrivez votre activité, vos objectifs et votre client idéal…",
    submit: "Envoyer ma demande",
    submitting: "Envoi en cours…",
    responseNote: "Réponse sous 24 h · sans engagement",
    successTitle: "Demande envoyée",
    successBody: "On vous répond sous 24 h avec une première proposition.",
    errorSend: "Envoi impossible. Réessayez ou écrivez-nous directement.",
    errorNetwork: "Connexion impossible. Réessayez dans un instant.",
    errorWriteUs: "Écrivez-nous directement à",
    notProvided: "Non renseigné",
  },
  en: {
    budgetOptions: [
      "Under 1,500 €",
      "1,500 € to 2,000 €",
      "2,000 € to 3,000 €",
      "3,000 € to 5,000 €",
      "Over 5,000 €",
      "Not sure yet",
    ],
    siteTypeOptions: [
      "Business website (showcase my activity)",
      "Business website with a blog",
      "E-commerce store",
      "Landing page",
      "Not sure yet",
    ],
    firstName: { label: "First name", placeholder: "John" },
    lastName: { label: "Last name", placeholder: "Smith" },
    email: { label: "Email", placeholder: "john@company.com" },
    phone: { label: "Phone", placeholder: "+33 6 00 00 00 00" },
    sector: { label: "Industry", placeholder: "Construction · restaurant · consulting · e-commerce…" },
    siteTypeLabel: "Type of website you need",
    budgetLabel: "Estimated budget",
    messageLabel: "Your project",
    messagePlaceholder: "Tell us about your business, your goals and your ideal customer…",
    submit: "Send my request",
    submitting: "Sending…",
    responseNote: "Reply within 24 hours · no commitment",
    successTitle: "Request sent",
    successBody: "We will get back to you within 24 hours with a first proposal.",
    errorSend: "The message could not be sent. Try again or email us directly.",
    errorNetwork: "Connection failed. Please try again in a moment.",
    errorWriteUs: "Email us directly at",
    notProvided: "Not provided",
  },
};

export default function ContactForm({ lang }: { lang: Locale }) {
  const t = T[lang];
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [budget, setBudget] = useState("");
  const [siteType, setSiteType] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "loading") return;

    const form = e.currentTarget;
    const fd = new FormData(form);
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

    // Honeypot anti-spam : on simule un succès sans rien envoyer
    if (payload.hp) {
      setStatus({ kind: "success" });
      return;
    }

    try {
      // Appel direct depuis le navigateur : Web3Forms refuse les requêtes
      // serveur (403, plan Pro requis), donc pas de route API intermédiaire.
      // Envoi en FormData : leur API rejette le preflight CORS du JSON,
      // il faut une "simple request" sans en-tête Content-Type manuel.
      const body = new FormData();
      body.append("access_key", "b6b5fc4f-7945-47ca-8bb4-8c0461855bec");
      body.append("subject", `Nouveau projet · ${payload.firstName} ${payload.lastName}${payload.sector ? ` (${payload.sector})` : ""}`);
      body.append("from_name", `${payload.firstName} ${payload.lastName}`);
      body.append("email", payload.email);
      body.append("phone", payload.phone);
      body.append("sector", payload.sector);
      body.append("budget", payload.budget || t.notProvided);
      body.append("site_type", payload.siteType || t.notProvided);
      body.append("message", payload.message);
      body.append("botcheck", "");
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body });
      const data = (await res.json()) as { success: boolean; message?: string };
      if (!res.ok || !data.success) {
        setStatus({ kind: "error", message: t.errorSend });
        return;
      }
      setStatus({ kind: "success" });
      form.reset();
      setBudget("");
      setSiteType("");
    } catch {
      setStatus({ kind: "error", message: t.errorNetwork });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {/* Prénom + Nom */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="firstName" label={t.firstName.label} type="text" placeholder={t.firstName.placeholder} autocomplete="given-name" required />
        <Field id="lastName" label={t.lastName.label} type="text" placeholder={t.lastName.placeholder} autocomplete="family-name" required />
      </div>

      {/* Email + Téléphone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="email" label={t.email.label} type="email" placeholder={t.email.placeholder} autocomplete="email" required />
        <Field id="phone" label={t.phone.label} type="tel" placeholder={t.phone.placeholder} autocomplete="tel" required={false} />
      </div>

      {/* Secteur */}
      <Field id="sector" label={t.sector.label} type="text" placeholder={t.sector.placeholder} autocomplete="off" required />

      {/* Type de site */}
      <div>
        <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-steel mb-2">
          {t.siteTypeLabel}
        </label>
        <div className="flex flex-wrap gap-2">
          {t.siteTypeOptions.map((opt) => (
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
          {t.budgetLabel}
        </label>
        <div className="flex flex-wrap gap-2">
          {t.budgetOptions.map((opt) => (
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
          {t.messageLabel} <span className="text-terra" aria-hidden>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          minLength={10}
          maxLength={5000}
          placeholder={t.messagePlaceholder}
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
            <><Spinner />{t.submitting}</>
          ) : (
            <>
              {t.submit}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-steel">
          {t.responseNote}
        </p>
      </div>

      <div aria-live="polite" className="min-h-[1.5rem]">
        <AnimatePresence mode="wait">
          {status.kind === "success" && (
            <motion.div key="success" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="flex items-start gap-3 p-4 rounded-2xl border border-emerald-600/20 bg-emerald-50 text-emerald-900" role="status">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>
              <div>
                <div className="font-semibold text-[14.5px]">{t.successTitle}</div>
                <p className="text-[13.5px] mt-0.5 text-emerald-900/85">{t.successBody}</p>
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
                  {t.errorWriteUs}{" "}
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
