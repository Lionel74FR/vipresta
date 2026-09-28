"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gallery } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";

export function Gallery() {
  return (
    <section id="galerie" className="relative overflow-hidden py-28 sm:py-36">
      <div className="glow absolute -right-40 top-1/3 -z-10 h-96 w-96" />

      <div className="container-x">
        <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} lead={gallery.lead} />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.photos.map((photo, i) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-gold-soft"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-40" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
