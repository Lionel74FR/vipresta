"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { contact, site } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { IconArrow, IconMail, IconPhone, IconPin } from "./ui/Icons";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-gold-400/15 bg-ink-900/70 px-4 py-3.5 text-sm text-cream placeholder:text-muted/60 outline-none transition-all duration-300 focus:border-gold-300/60 focus:bg-ink-850 focus:ring-1 focus:ring-gold-300/25";

const labelClass = "mb-2 block text-[0.62rem] uppercase tracking-[0.24em] text-muted";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? "Erreur inconnue");
      setStatus("success");
      setMessage(json.message ?? "Merci, votre demande a bien été transmise.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Une erreur est survenue. Merci de réessayer."
      );
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="glow absolute -left-32 bottom-0 -z-10 h-96 w-96" />

      <div className="container-x">
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} lead={contact.lead} />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Coordonnées */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: IconPhone,
                label: "Téléphone",
                value: site.phoneDisplay,
                href: `tel:${site.phone.replace(/\s/g, "")}`,
              },
              { icon: IconMail, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
              {
                icon: IconPin,
                label: "Zones d'intervention",
                value: site.zones.join(" • "),
              },
            ].map((row, i) => {
              const Icon = row.icon;
              const inner = (
                <motion.div
                  whileHover={row.href ? { x: 6 } : undefined}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="surface-card flex items-center gap-5 rounded-2xl px-6 py-5"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold-400/25 text-gold-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[0.6rem] uppercase tracking-[0.26em] text-muted">
                      {row.label}
                    </span>
                    <span className="mt-1 text-base text-cream">{row.value}</span>
                  </span>
                </motion.div>
              );

              return (
                <Reveal key={row.label} delay={i * 0.1}>
                  {row.href ? <a href={row.href}>{inner}</a> : inner}
                </Reveal>
              );
            })}

            <Reveal delay={0.3}>
              <div className="surface-card rounded-2xl px-6 py-6">
                <p className="text-sm leading-relaxed text-muted">
                  Réponse garantie sous <span className="text-gold-200">24 heures ouvrées</span>.
                  Pour une demande urgente ou un remplacement de dernière minute, appelez-nous
                  directement.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Formulaire */}
          <Reveal direction="left">
            <form onSubmit={onSubmit} className="surface-card rounded-[1.75rem] p-7 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Nom et prénom *
                  </label>
                  <input id="name" name="name" required className={inputClass} placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="company">
                    Société
                  </label>
                  <input id="company" name="company" className={inputClass} placeholder="Nom de la société" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="jean@exemple.fr"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Téléphone
                  </label>
                  <input id="phone" name="phone" type="tel" className={inputClass} placeholder="06 12 34 56 78" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="eventType">
                    Type d&apos;événement
                  </label>
                  <select id="eventType" name="eventType" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Sélectionner…
                    </option>
                    {contact.fields.eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-ink-900">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="date">
                    Date de l&apos;événement
                  </label>
                  <input id="date" name="date" type="date" className={inputClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="message">
                    Votre besoin *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Lieu, nombre d'invités, horaires, prestations souhaitées…"
                  />
                </div>
              </div>

              {/* Anti-spam : champ caché */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[0.68rem] leading-relaxed text-muted">
                  Vos données servent uniquement à traiter votre demande.
                </p>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gold group inline-flex w-full items-center justify-center gap-3 rounded-full px-9 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
                  <IconArrow className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </button>
              </div>

              {status === "success" || status === "error" ? (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="status"
                  className={`mt-5 rounded-xl px-4 py-3 text-sm ${
                    status === "success"
                      ? "bg-gold-400/10 text-gold-100"
                      : "bg-red-500/10 text-red-300"
                  }`}
                >
                  {message}
                </motion.p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
