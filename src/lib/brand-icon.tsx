import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Compose l'icône de marque (favicon, icône iOS) à partir de l'unique
 * source du logo : public/logo-vipresta.svg. Rien à maintenir en double.
 */
export function brandIcon(size: number) {
  const svg = readFileSync(join(process.cwd(), "public", "logo-vipresta.svg"), "utf8");
  const src = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
  const mark = Math.round(size * 0.66);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a0f06",
          borderRadius: Math.round(size * 0.22),
          border: `${Math.max(2, Math.round(size * 0.014))}px solid rgba(224,190,107,0.8)`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- satori (next/og) n'accepte pas next/image */}
        <img src={src} width={mark} height={Math.round((mark * 108.5) / 137)} alt="" />
      </div>
    ),
    { width: size, height: size }
  );
}
