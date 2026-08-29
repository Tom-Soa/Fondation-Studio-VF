"use client";

import Script from "next/script";
import { META_PIXEL_ID } from "@/lib/lp-config";

/**
 * Pixel Meta.
 *
 * - `event="PageView"` : à poser sur la landing (mesure du trafic publicitaire).
 * - `event="Lead"`     : à poser UNIQUEMENT sur la page de remerciement, qui
 *   n'est atteinte qu'après soumission du formulaire Pipedrive.
 * - `event="Purchase"` : à poser UNIQUEMENT sur la confirmation de paiement,
 *   qui n'est atteinte qu'après un paiement Stripe abouti.
 *
 * Si NEXT_PUBLIC_META_PIXEL_ID n'est pas défini, rien n'est injecté : la page
 * fonctionne normalement et aucune requête de tracking n'est émise.
 */
export default function MetaPixel({
  event = "PageView",
}: {
  event?: "PageView" | "Lead" | "Purchase";
}) {
  if (!META_PIXEL_ID) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', '${event}');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=${event}&noscript=1`}
        />
      </noscript>
    </>
  );
}
