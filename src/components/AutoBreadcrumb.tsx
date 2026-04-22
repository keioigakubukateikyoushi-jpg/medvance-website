"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LabelMap = Record<string, string>;

const DEFAULT_LABELS: LabelMap = {
  column: "コラム",
  universities: "大学別対策",
  national: "国公立医学部",
  private: "私立医学部",
  services: "サービス",
  online: "オンライン指導",
  visit: "訪問指導",
  interview: "面接対策",
  moshi: "模試",
  tool: "自動採点ツール",
  for: "対象者別",
  subjects: "教科別対策",
  english: "英語",
  math: "数学",
  physics: "物理",
  chemistry: "化学",
  biology: "生物",
  about: "運営会社",
  tutors: "家庭教師一覧",
  recruit: "講師募集",
  pricing: "料金",
  contact: "お問い合わせ",
  privacy: "プライバシーポリシー",
  cookies: "Cookieポリシー",
  news: "お知らせ",
};

function toLabel(segment: string, labelOverride?: LabelMap): string {
  const merged = { ...DEFAULT_LABELS, ...(labelOverride ?? {}) };
  if (merged[segment]) return merged[segment];
  return decodeURIComponent(segment).replace(/-/g, " ");
}

export default function AutoBreadcrumb({
  labels,
  lastLabel,
}: {
  labels?: LabelMap;
  lastLabel?: string;
}) {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const crumbs: { label: string; href?: string }[] = [
    { label: "ホーム", href: "/" },
  ];

  segments.forEach((seg, i) => {
    const href = "/" + segments.slice(0, i + 1).join("/");
    const isLast = i === segments.length - 1;
    const label = isLast && lastLabel ? lastLabel : toLabel(seg, labels);
    crumbs.push({ label, href: isLast ? undefined : href });
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://medvance-edu.com${c.href}` } : {}),
    })),
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
