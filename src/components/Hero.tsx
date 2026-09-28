"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/content";
import { IconArrow } from "./ui/Icons";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Arrière-plan */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-20">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_10%,#100803_78%)]" />
        <div className="absolute inset-0 bg-ink-950/45" />
      </motion.div>

      {/* Halos */}
      <div className="glow absolute -left-40 top-1/4 -z-10 h-[32rem] w-[32rem] animate-[pulseGlow_9s_ease-in-out_infinite]" />
      <div className="glow absolute -right-32 bottom-0 -z-10 h-[26rem] w-[26rem] animate-[pulseGlow_11s_ease-in-out_infinite]" />

      <motion.div style={{ opacity }} className="container-x relative z-10 py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-gold-400/25 bg-ink-900/40 px-5 py-2 text-[0.62rem] uppercase tracking-[0.34em] text-gold-200 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
          {site.zones.join(" — ")}
        </motion.p>

        {/* Logo vertical de la charte : pictogramme doré + wordmark + baseline */}
        <h1 className="flex flex-col items-center">
          <span className="sr-only">
            {site.name} — {site.baseline}
          </span>

          <motion.span
            initial={{ opacity: 0, scale: 0.86, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            className="relative block"
            aria-hidden="true"
          >
            <span className="glow absolute left-1/2 top-1/2 -z-10 h-[160%] w-[160%] -translate-x-1/2 -translate-y-1/2 opacity-70" />
            <Image
              src="/logo-vipresta.svg"
              alt=""
              width={137}
              height={108}
              priority
              className="h-28 w-auto drop-shadow-[0_8px_28px_rgba(224,190,107,0.3)] sm:h-36 lg:h-44"
            />
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.45, ease }}
            className="mt-7 block font-display text-5xl font-bold leading-none tracking-[0.1em] text-gold-gradient sm:text-7xl lg:text-8xl"
            aria-hidden="true"
          >
            VIPRESTA
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease }}
            className="mt-6 block text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-gold-300/85 sm:text-sm sm:tracking-[0.5em]"
            aria-hidden="true"
          >
            {site.baseline}
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.85, ease }}
          className="mx-auto mt-10 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
        >
          {site.tagline}. Hôtesses, hôtes et animations d&apos;exception pour vos salons, galas,
          lancements et soirées privées.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#services"
            className="btn-gold group inline-flex w-full items-center justify-center gap-3 rounded-full px-9 py-4 text-[0.72rem] font-medium uppercase tracking-[0.24em] sm:w-auto"
          >
            Découvrir nos services
            <IconArrow className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="btn-ghost inline-flex w-full items-center justify-center rounded-full px-9 py-4 text-[0.72rem] uppercase tracking-[0.24em] sm:w-auto"
          >
            Nous contacter
          </a>
        </motion.div>
      </motion.div>

      {/* Indicateur de scroll */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex h-11 w-6 justify-center rounded-full border border-gold-400/30 pt-2">
          <span className="h-2 w-px animate-[scrollHint_2.2s_ease-in-out_infinite] bg-gold-200" />
        </div>
      </motion.div>
    </section>
  );
}
