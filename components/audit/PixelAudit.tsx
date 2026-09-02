"use client";

import Script from "next/script";
import { META_PIXEL_AUDIT, PRIX } from "@/lib/audit-config";

/**
 * Pixel Meta de la campagne audit.
 *
 * - `conversion={false}` : page de vente, on envoie seulement PageView.
 * - `conversion={true}`  : page de confirmation, atteignable uniquement après
 *   un paiement Stripe abouti. On y envoie Purchase avec le montant, ce qui
 *   permet à Meta d'optimiser sur la vente réelle, plus Lead pour disposer du
 *   repère de conversion demandé.
 *
 * Le montant est extrait du prix affiché pour rester en phase avec lui.
 */
export default function PixelAudit({ conversion = false }: { conversion?: boolean }) {
  const montant = parseFloat(PRIX.replace(/[^\d,.]/g, "").replace(",", "."));

  const evenements = conversion
    ? `fbq('track', 'PageView');
fbq('track', 'Purchase', {value: ${montant}, currency: 'EUR'});
fbq('track', 'Lead');`
    : `fbq('track', 'PageView');`;

  return (
    <>
      <Script id="pixel-audit" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_AUDIT}');
${evenements}
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_AUDIT}&ev=${
            conversion ? "Purchase" : "PageView"
          }&noscript=1`}
        />
      </noscript>
    </>
  );
}
