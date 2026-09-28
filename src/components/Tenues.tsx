"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { tenues } from "@/lib/content";
import { Reveal, RevealWords } from "./ui/Reveal";

export function Tenues() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section id="tenues" className="relative overflow-hidden py-28 sm:py-36">
      <div className="glow absolute -left-40 top-1/4 -z-10 h-96 w-96" />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* Texte */}
        <div className="flex flex-col gap-7">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.42em] text-gold-300">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-400/70" />
              {tenues.eyebrow}
            </span>
          </Reveal>

          <h2 className="text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            <RevealWords text={tenues.title} />
          </h2>

          <Reveal delay={0.12}>
            <p className="text-pretty text-lg leading-relaxed text-cream/85">{tenues.lead}</p>
          </Reveal>

          <ul className="mt-2 flex flex-col gap-px overflow-hidden rounded-2xl border-gold-soft bg-gold-400/10">
            {tenues.items.map((item, i) => (
              <Reveal key={item.title} delay={0.08 * i}>
                <li className="flex gap-5 bg-ink-900 px-6 py-5">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-fit shrink-0 font-display text-sm tracking-[0.2em] text-gold-400/70"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-xl text-gold-200">{item.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <p className="text-sm italic leading-relaxed text-muted/80">{tenues.note}</p>
          </Reveal>
        </div>

        {/* Visuels : les deux tenues */}
        <div ref={ref} className="grid grid-cols-2 gap-4">
          {tenues.images.map((image, i) => (
            <Reveal key={image.src} direction="left" delay={i * 0.12}>
              <figure className="relative">
                <motion.div
                  style={{ y: i === 1 ? y : undefined }}
                  className={`relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] border-gold-soft ${
                    i === 1 ? "mt-8" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 45vw, 22vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent" />
                </motion.div>
                <figcaption className="mt-3 text-center text-[0.6rem] uppercase tracking-[0.28em] text-gold-300/80">
                  {image.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
