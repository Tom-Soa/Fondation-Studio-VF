import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Nom requis").max(200),
  email: z.string().trim().email("Email invalide").max(200),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  sector: z.string().trim().min(2, "Secteur requis").max(200),
  message: z.string().trim().min(10, "Message trop court").max(5000),
  hp: z.string().max(0).optional().or(z.literal("")),
});

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 },
    );
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Données invalides.";
    return NextResponse.json({ ok: false, error: first }, { status: 400 });
  }

  const { name, email, phone, sector, message, hp } = parsed.data;

  if (hp && hp.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from =
    process.env.FROM_EMAIL ?? "Fondation Studio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error(
      "[contact] Variables manquantes : RESEND_API_KEY et/ou CONTACT_EMAIL.",
    );
    return NextResponse.json(
      { ok: false, error: "Service de messagerie indisponible." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#0f172a">
      <div style="border-left:3px solid #c2410c;padding:0 0 0 16px;margin-bottom:24px">
        <div style="font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#c2410c">
          Nouvelle demande · Fondation Studio
        </div>
        <h1 style="margin:8px 0 0;font-size:22px;font-weight:600;letter-spacing:-.02em">
          ${escape(name)}
        </h1>
        <div style="margin-top:4px;font-size:13px;color:#64748b">${escape(sector)}</div>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:8px 0;color:#64748b;width:120px">Email</td><td><a href="mailto:${escape(email)}" style="color:#c2410c;text-decoration:none">${escape(email)}</a></td></tr>
        ${phone ? `<tr><td style="padding:8px 0;color:#64748b">Téléphone</td><td><a href="tel:${escape(phone)}" style="color:#0f172a;text-decoration:none">${escape(phone)}</a></td></tr>` : ""}
        <tr><td style="padding:8px 0;color:#64748b;vertical-align:top">Projet</td><td style="white-space:pre-wrap;line-height:1.55">${escape(message)}</td></tr>
      </table>
      <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e5e5e1;font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#94a3b8">
        Envoyé depuis fondationstudio.fr/contact
      </div>
    </div>
  `;

  const text = `Nouvelle demande Fondation Studio

Nom : ${name}
Secteur : ${sector}
Email : ${email}
${phone ? `Téléphone : ${phone}\n` : ""}
Projet :
${message}
`;

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Nouveau projet · ${name} (${sector})`,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Envoi impossible. Réessayez ou écrivez-nous." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] Exception:", e);
    return NextResponse.json(
      { ok: false, error: "Erreur serveur." },
      { status: 500 },
    );
  }
}
