import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  eventType?: string;
  date?: string;
  message?: string;
  website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Piège à robots : si rempli, on répond OK sans rien envoyer.
  if (body.website) {
    return NextResponse.json({ message: "Merci, votre demande a bien été transmise." });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Merci de remplir les champs obligatoires." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message trop long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Sans configuration e-mail, on journalise et on répond normalement
  // (utile en développement et tant que le domaine n'est pas configuré).
  if (!apiKey || !to || !from) {
    console.info("[contact] nouvelle demande (e-mail non configuré)", {
      name,
      email,
      company: body.company,
      phone: body.phone,
      eventType: body.eventType,
      date: body.date,
    });
    return NextResponse.json({
      message: "Merci, votre demande a bien été enregistrée. Nous revenons vers vous sous 24 h.",
    });
  }

  const html = `
    <h2>Nouvelle demande — VIPresta</h2>
    <ul>
      <li><strong>Nom :</strong> ${escapeHtml(name)}</li>
      <li><strong>Société :</strong> ${escapeHtml(body.company ?? "—")}</li>
      <li><strong>E-mail :</strong> ${escapeHtml(email)}</li>
      <li><strong>Téléphone :</strong> ${escapeHtml(body.phone ?? "—")}</li>
      <li><strong>Type d'événement :</strong> ${escapeHtml(body.eventType ?? "—")}</li>
      <li><strong>Date :</strong> ${escapeHtml(body.date ?? "—")}</li>
    </ul>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Demande VIPresta — ${name}`,
        html,
      }),
    });

    if (!res.ok) throw new Error(await res.text());

    return NextResponse.json({
      message: "Merci, votre demande a bien été transmise. Réponse sous 24 h ouvrées.",
    });
  } catch (error) {
    console.error("[contact] échec d'envoi", error);
    return NextResponse.json(
      { error: "L'envoi a échoué. Merci de nous écrire directement par e-mail." },
      { status: 502 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
