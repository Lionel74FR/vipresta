import Image from "next/image";

/**
 * Logotype horizontal VIPresta (charte de marque) :
 * pictogramme vectoriel officiel + wordmark en Crimson + baseline.
 */
export function Logo({
  className = "",
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <Image
        src="/logo-vipresta.svg"
        alt="VIPresta"
        width={137}
        height={108}
        priority
        className="h-10 w-auto drop-shadow-[0_2px_10px_rgba(224,190,107,0.22)] sm:h-11"
      />

      {withWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="font-display text-2xl font-bold tracking-[0.16em] text-gold-gradient">
            VIPRESTA
          </span>
          <span className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold-300/80">
            Votre prestige, notre mission
          </span>
        </span>
      ) : null}
    </span>
  );
}
