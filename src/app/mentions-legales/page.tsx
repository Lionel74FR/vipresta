import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  const { legal, address } = site;

  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        <strong>{site.legalName}</strong> — {legal.form}
        {legal.capital ? `, au capital de ${legal.capital}` : null}.
        <br />
        Siège social : {address.complement}, {address.street}, {address.postalCode}{" "}
        {address.locality}, France.
        <br />
        {legal.rcs} — SIRET {legal.siret} — TVA intracommunautaire {legal.vat}.
        <br />
        Code APE : {legal.ape}.
        <br />
        Directrice de la publication : {legal.manager}, gérante.
        <br />
        Contact : <a href={`mailto:${site.email}`}>{site.email}</a> — {site.phoneDisplay}
      </p>

      <h2>Hébergement</h2>
      <p>
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis —{" "}
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

      <h2>Données personnelles</h2>
      <p>
        Les informations transmises via le formulaire de contact sont utilisées uniquement pour
        répondre à votre demande et ne font l&apos;objet d&apos;aucune cession à des tiers.
        Conformément au Règlement général sur la protection des données (RGPD), vous disposez
        d&apos;un droit d&apos;accès, de rectification et de suppression des données vous
        concernant, en écrivant à <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Responsabilité</h2>
      <p>
        {site.legalName} s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées
        sur ce site mais ne saurait être tenue responsable des omissions, inexactitudes ou
        indisponibilités temporaires du service.
      </p>
    </LegalPage>
  );
}
