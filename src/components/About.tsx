"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { about } from "@/lib/content";
import { Reveal, RevealWords } from "./ui/Reveal";
import { Counter } from "./ui/Counter";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="a-propos" className="relative py-28 sm:py-36">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Visuel */}
        <div ref={ref} className="relative order-2 lg:order-1">
          <Reveal direction="right">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-gold-soft">
              <motion.div style={{ y }} className="absolute inset-[-8%]">
                <Image
                  src="/images/about.webp"
                  alt="Équipe VIPresta en mission"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="up">
            <div className="surface-card absolute -bottom-8 -right-2 hidden rounded-2xl px-7 py-5 sm:block lg:-right-8">
              <p className="font-display text-4xl text-gold-gradient">
                <Counter value={2017} />
              </p>
              <p className="mt-1 text-[0.62rem] uppercase tracking-[0.3em] text-muted">
                Depuis nos débuts
              </p>
            </div>
          </Reveal>
        </div>

        {/* Texte */}
        <div className="order-1 flex flex-col gap-7 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.42em] text-gold-300">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-400/70" />
              {about.eyebrow}
            </span>
          </Reveal>

          <h2 className="text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            <RevealWords text={about.title} />
          </h2>

          <Reveal delay={0.12}>
            <p className="text-pretty text-lg leading-relaxed text-cream/85">{about.lead}</p>
          </Reveal>

          {about.body.map((paragraph, i) => (
            <Reveal key={i} delay={0.2 + i * 0.08}>
              <p className="text-pretty leading-relaxed text-muted">{paragraph}</p>
            </Reveal>
          ))}

          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border-gold-soft bg-gold-400/10 sm:grid-cols-4">
            {about.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.1 * i}>
                <div className="h-full bg-ink-900 px-4 py-6 text-center">
                  <p className="font-display text-3xl text-gold-200">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-[0.58rem] uppercase leading-relaxed tracking-[0.18em] text-muted">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
