"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { googleReviewsUrl, reviews } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { IconArrow, IconQuote, IconStar } from "./ui/Icons";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reviews.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 7000);
    return () => clearInterval(id);
  }, [paused]);

  // Aucun avis réel renseigné : la section ne s'affiche pas.
  if (reviews.length === 0) return null;

  const review = reviews[index];

  return (
    <section id="avis" className="relative overflow-hidden py-28 sm:py-36">
      <div className="glow absolute -right-40 top-1/3 -z-10 h-80 w-80" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Avis clients"
          title="Ils nous ont confié leur événement"
          lead="Avis publiés sur notre fiche Google."
        />

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="surface-card relative overflow-hidden rounded-[1.75rem] px-7 py-12 sm:px-14">
            <IconQuote className="absolute -left-2 -top-2 h-24 w-24 text-gold-400/8" />

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center gap-6 text-center"
              >
                <div className="flex gap-1.5" aria-label={`${review.rating} étoiles sur 5`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4 text-gold-300" />
                  ))}
                </div>

                <p className="text-pretty font-display text-2xl leading-relaxed text-cream/90 sm:text-[1.7rem]">
                  « {review.text} »
                </p>

                <footer className="flex flex-col items-center gap-1">
                  <span className="text-sm uppercase tracking-[0.24em] text-gold-200">
                    {review.author}
                  </span>
                  {review.role ? (
                    <span className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                      {review.role}
                    </span>
                  ) : null}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
              aria-label="Avis précédent"
              className="btn-ghost grid h-11 w-11 place-items-center rounded-full"
            >
              <IconArrow className="h-4 w-4 rotate-180" />
            </button>

            <div className="flex items-center gap-2.5">
              {reviews.map((r, i) => (
                <button
                  key={r.author}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Avis de ${r.author}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-7 bg-gold-300" : "w-1.5 bg-cream/25 hover:bg-cream/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % reviews.length)}
              aria-label="Avis suivant"
              className="btn-ghost grid h-11 w-11 place-items-center rounded-full"
            >
              <IconArrow className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-10 text-center">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.24em] text-gold-300/90"
            >
              Voir tous les avis sur Google
              <IconArrow className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
