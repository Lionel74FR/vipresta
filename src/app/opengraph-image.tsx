import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} — ${site.baseline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 0%, #3a2413 0%, #100803 62%)",
          color: "#f6f2e8",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            fontSize: 118,
            letterSpacing: 14,
            background: "linear-gradient(100deg,#8c6e29,#f2e3bc 40%,#e0be6b 70%,#8c6e29)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          VIPRESTA
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 26,
            letterSpacing: 14,
            textTransform: "uppercase",
            color: "#a99f88",
          }}
        >
          {site.baseline}
        </div>
        <div
          style={{
            marginTop: 46,
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#e0be6b",
          }}
        >
          {site.zones.join("  —  ")}
        </div>
      </div>
    ),
    size
  );
}
