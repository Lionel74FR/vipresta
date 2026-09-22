import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function IconAward(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.6 7 22l5-2.6L17 22l-1.5-8.4" />
      <path d="m12 6.3 1 2 2.2.3-1.6 1.6.4 2.2-2-1-2 1 .4-2.2L8.8 8.6l2.2-.3z" />
    </svg>
  );
}

export function IconBolt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 2 4 13.5h6.5L10 22l9.5-11.5H13z" />
    </svg>
  );
}

export function IconSparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.5c.9 4.7 3.9 7.7 8.6 8.6-4.7.9-7.7 3.9-8.6 8.6-.9-4.7-3.9-7.7-8.6-8.6 4.7-.9 7.7-3.9 8.6-8.6Z" />
      <path d="M19 16.5c.3 1.6 1.3 2.6 2.9 2.9-1.6.3-2.6 1.3-2.9 2.9-.3-1.6-1.3-2.6-2.9-2.9 1.6-.3 2.6-1.3 2.9-2.9Z" />
    </svg>
  );
}

export function IconHandshake(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m2.5 12.5 4-4 3 1.5 2.5-2 2.5 2 3-1.5 4 4" />
      <path d="M9.5 10 7 12.6a1.8 1.8 0 0 0 2.5 2.5l.7-.7.9.9a1.8 1.8 0 0 0 2.5-2.5" />
      <path d="m13.6 12.8 2.2 2.2a1.8 1.8 0 0 0 2.5-2.5l-2.1-2.1" />
    </svg>
  );
}

export function IconStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m12 2.8 2.8 5.9 6.4.9-4.6 4.5 1.1 6.4L12 17.4l-5.7 3.1 1.1-6.4L2.8 9.6l6.4-.9z" />
    </svg>
  );
}

export function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6.2 3.5h3l1.5 3.8-2 1.3a11.5 11.5 0 0 0 5.7 5.7l1.3-2 3.8 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function IconArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  );
}

export function IconPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconQuote(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.6 5.5C6.3 6.9 4.3 9.8 4.3 13.2c0 3.1 1.8 5.3 4.4 5.3 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.7 1.9-3.4 4-4.3l-2.6-1.7Zm9.1 0c-3.3 1.4-5.3 4.3-5.3 7.7 0 3.1 1.8 5.3 4.4 5.3 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.7 1.9-3.4 4-4.3l-2.6-1.7Z" />
    </svg>
  );
}

export const iconMap = {
  award: IconAward,
  bolt: IconBolt,
  sparkle: IconSparkle,
  handshake: IconHandshake,
} as const;
