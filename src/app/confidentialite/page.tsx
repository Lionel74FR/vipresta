import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: true },
};

export default function Confidentialite() {
  return (
    <LegalPage title="Politique de confidentialité">
      <h2>Responsable de traitement</h2>
      <p>
        {site.legalName} — <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>Données collectées</h2>
      <p>
        Le formulaire de contact collecte : nom et prénom, société, adresse e-mail, téléphone, type
        et date d&apos;événement, ainsi que le contenu de votre message. Ces champs sont nécessaires
        au traitement de votre demande de devis.
      </p>

      <h2>Finalité et base légale</h2>
      <p>
        Les données sont traitées dans le seul but de répondre à votre demande et d&apos;établir une
        proposition commerciale. La base légale est l&apos;exécution de mesures précontractuelles
        prises à votre demande (art. 6.1.b du RGPD).
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Les demandes sont conservées 3 ans à compter du dernier contact, puis supprimées ou
        anonymisées.
      </p>

      <h2>Destinataires</h2>
      <p>
        Les données sont destinées à l&apos;équipe commerciale de {site.legalName} et à ses
        sous-traitants techniques (hébergement Vercel, service d&apos;envoi d&apos;e-mails). Aucune
        donnée n&apos;est cédée ou vendue à des tiers.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de
        limitation et d&apos;opposition. Pour l&apos;exercer, écrivez à{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>. Vous pouvez également saisir la CNIL
        (www.cnil.fr).
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site ne dépose aucun cookie de mesure d&apos;audience ni de publicité. Seuls des cookies
        strictement techniques peuvent être utilisés pour le bon fonctionnement du site.
      </p>
    </LegalPage>
  );
}
