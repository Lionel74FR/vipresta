import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        <strong>{site.legalName}</strong> — [Forme juridique], au capital de [montant] €.
        <br />
        Siège social : [adresse complète].
        <br />
        RCS [ville] — SIRET [numéro] — TVA intracommunautaire [numéro].
        <br />
        Directeur de la publication : [nom].
        <br />
        Contact : <a href={`mailto:${site.email}`}>{site.email}</a> — {site.phoneDisplay}
      </p>

      <h2>Hébergement</h2>
      <p>
        Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis —{" "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          vercel.com
        </a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur ce site (textes, visuels, logos, marques) est la
        propriété de {site.legalName} ou de ses partenaires. Toute reproduction, représentation ou
        diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.
      </p>

      <h2>Responsabilité</h2>
      <p>
        {site.legalName} s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées
        sur ce site mais ne saurait être tenue responsable des omissions, inexactitudes ou
        indisponibilités temporaires du service.
      </p>

      <p className="text-sm">
        [Remplacer les champs entre crochets par les informations légales définitives avant mise en
        ligne.]
      </p>
    </LegalPage>
  );
}
