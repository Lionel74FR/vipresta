import type { Metadata, Viewport } from "next";
import { Crimson_Pro } from "next/font/google";
import { site } from "@/lib/content";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

// Charte VIPresta : Crimson (titres en bold, textes en regular / semibold)
const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-crimson",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.baseline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "VIPresta, agence d'hôtesses, hôtes d'accueil et d'animations événementielles de prestige à Annecy et en Haute-Savoie. Salons, galas, lancements de produit et soirées privées.",
  keywords: [
    "agence d'hôtesses",
    "hôtesses d'accueil Annecy",
    "hôtesses Haute-Savoie",
    "animation événementielle",
    "robe champagne",
    "robe plateau LED",
    "événementiel de prestige",
    "staffing événementiel",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.baseline}`,
    description:
      "Hôtesses, hôtes d'accueil et animations de prestige pour vos événements à Annecy et en Haute-Savoie.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.baseline}`,
    description:
      "Hôtesses, hôtes d'accueil et animations de prestige pour vos événements à Annecy et en Haute-Savoie.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#2b180a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "Agence d'hôtesses, hôtes d'accueil et d'animations événementielles de prestige à Annecy et en Haute-Savoie.",
  url: site.url,
  telephone: site.phone,
  email: site.email,
  areaServed: site.zones.map((zone) => ({ "@type": "Place", name: zone })),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  sameAs: [site.instagram, site.facebook],
  slogan: site.baseline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={crimson.variable}>
      <body className="grain antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
