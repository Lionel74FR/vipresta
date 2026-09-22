import { Reveal, RevealWords } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} gap-5`}>
      {eyebrow ? (
        <Reveal>
          <span className="inline-flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.42em] text-gold-300">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold-400/70" />
            {eyebrow}
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold-400/70" />
          </span>
        </Reveal>
      ) : null}

      <h2 className="text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
        <RevealWords text={title} />
      </h2>

      {lead ? (
        <Reveal delay={0.15}>
          <p className={`max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
