import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().trim().min(1, "Prénom requis").max(100),
  lastName: z.string().trim().min(1, "Nom requis").max(100),
  email: z.string().trim().email("Email invalide").max(200),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  sector: z.string().trim().max(200).optional().or(z.literal("")),
  budget: z.string().trim().max(100).optional().or(z.literal("")),
  siteType: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message trop court").max(5000),
  hp: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Requête invalide." }, { status: 400 });
  }

  const parsed = schema.safeParse(payload);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Données invalides.";
    return NextResponse.json({ ok: false, error: first }, { status: 400 });
  }

  const { firstName, lastName, email, phone, sector, budget, siteType, message, hp } = parsed.data;

  // Honeypot anti-spam
  if (hp && hp.length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: "b6b5fc4f-7945-47ca-8bb4-8c0461855bec",
        subject: `Nouveau projet · ${firstName} ${lastName}${sector ? ` (${sector})` : ""}`,
        from_name: `${firstName} ${lastName}`,
        email,
        phone: phone || "",
        sector: sector || "",
        budget: budget || "Non renseigné",
        site_type: siteType || "Non renseigné",
        message,
        botcheck: "",
      }),
    });

    const data = (await res.json()) as { success: boolean; message?: string };

    if (!data.success) {
      return NextResponse.json({ ok: false, error: "Envoi impossible. Réessayez ou écrivez-nous directement." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Erreur serveur. Réessayez dans un instant." }, { status: 500 });
  }
}
