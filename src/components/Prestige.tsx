"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { prestige } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { IconArrow } from "./ui/Icons";

export function Prestige() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + prestige.length) % prestige.length);
  }, [index]);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % prestige.length);
    }, 6500);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  const item = prestige[index];

  return (
    <section id="animations" className="relative overflow-hidden py-28 sm:py-36">
      <div className="glow absolute left-1/2 top-24 -z-10 h-96 w-96 -translate-x-1/2" />

      <div className="container-x">
        <SectionHeading
          eyebrow="Animations prestige"
          title="Des dispositifs que vos invités filment"
          lead="Nos animations signature transforment un service en moment de spectacle. Chacune est opérée par des professionnels formés, en tenue et briefés sur votre événement."
        />

        <div
          className="relative mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-[2rem] border-gold-soft bg-ink-900">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={item.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) go(index + 1);
                  if (info.offset.x > 70) go(index - 1);
                }}
                className="grid cursor-grab active:cursor-grabbing md:grid-cols-2"
              >
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[30rem]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent md:bg-gradient-to-r" />
                </div>

                <div className="flex flex-col justify-center gap-6 p-8 sm:p-12">
                  <span className="text-[0.62rem] uppercase tracking-[0.38em] text-gold-300">
                    {item.tagline}
                  </span>
                  <h3 className="text-4xl leading-tight text-cream sm:text-5xl">{item.name}</h3>
                  <p className="text-pretty leading-relaxed text-muted">{item.description}</p>
                  <a
                    href="#contact"
                    className="btn-ghost mt-2 inline-flex w-fit items-center gap-3 rounded-full px-7 py-3.5 text-[0.7rem] uppercase tracking-[0.24em]"
                  >
                    Réserver cette animation
                    <IconArrow className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Contrôles */}
          <div className="mt-8 flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {prestige.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Voir ${p.name}`}
                  aria-current={i === index}
                  className="group relative h-8 py-3"
                >
                  <span
                    className={`block h-px transition-all duration-500 ${
                      i === index ? "w-12 bg-gold-200" : "w-6 bg-cream/25 group-hover:bg-cream/60"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Animation précédente"
                className="btn-ghost grid h-12 w-12 place-items-center rounded-full"
              >
                <IconArrow className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Animation suivante"
                className="btn-ghost grid h-12 w-12 place-items-center rounded-full"
              >
                <IconArrow className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
