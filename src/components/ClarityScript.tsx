"use client";

import Script from "next/script";

/**
 * Microsoft Clarity (heatmaps / session replay).
 * Enabled only when NEXT_PUBLIC_CLARITY_ID is set in Vercel env.
 * Create a free project at https://clarity.microsoft.com/ and set the project ID.
 */
export default function ClarityScript() {
  const id = process.env.NEXT_PUBLIC_CLARITY_ID?.trim();
  if (!id) return null;

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", ${JSON.stringify(id)});`}
    </Script>
  );
}
