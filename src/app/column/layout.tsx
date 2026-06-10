import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "医学部受験コラム｜勉強法・学費・面接対策まとめ",
    template: "%s | Medvance",
  },
  description:
    "医学部受験の勉強法・学費・過去問・面接・小論文・推薦AO対策を現役慶應医学部生が解説。浪人・再受験・内部進学・大学別対策まで。",
  alternates: { canonical: "/column" },
  openGraph: {
    title: "医学部受験コラム",
    description: "医学部受験の勉強法・学費・過去問・面接・推薦AO対策を現役慶應医学部生が解説。",
    url: "/column",
    type: "website",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Medvance コラム",
  description:
    "医学部受験・難関大受験・定期テスト対策・推薦AO入試・慶應内部進学の受験・学習コラム",
  url: `${siteUrl}/column`,
  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Medvance",
  },
  inLanguage: "ja-JP",
};

export default function ColumnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="column-body">{children}</div>
    </>
  );
}
