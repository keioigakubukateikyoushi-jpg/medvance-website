"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { resolveBreadcrumbLabel } from "@/lib/breadcrumbResolve";

export default function AutoBreadcrumb() {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs: { label: string; href?: string }[] = [
    { label: "ホーム", href: "/" },
  ];

  segments.forEach((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    const isLast = i === segments.length - 1;
    const label = resolveBreadcrumbLabel(seg, segments.slice(0, i));
    crumbs.push({ label, href: isLast ? undefined : href });
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => {
      const path = c.href || pathname;
      return {
        "@type": "ListItem",
        position: i + 1,
        name: c.label,
        item: `https://medvance-edu.com${path}`,
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="パンくずリスト"
        className="max-w-5xl mx-auto px-4 py-3 text-xs"
        style={{ color: "#6b7280" }}
      >
        <ol className="flex flex-wrap items-center gap-1.5">
          {crumbs.map((c, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <span style={{ color: "#c9b97a" }}>›</span>}
              {c.href ? (
                <Link
                  href={c.href}
                  className="hover:underline"
                  style={{ color: "#6b7280" }}
                >
                  {c.label}
                </Link>
              ) : (
                <span
                  className="font-semibold truncate max-w-[60vw] sm:max-w-none"
                  style={{ color: "#0c1a33" }}
                  aria-current="page"
                >
                  {c.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
