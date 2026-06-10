import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "講師募集",
  description:
    "Medvanceの講師募集ページです。医学部受験、内部進学、学校成績対策、面接・小論文対策を支える講師を募集しています。オンライン中心、対面も相談可能です。",
  alternates: {
    canonical: "/recruit",
  },
  openGraph: {
    title: "講師募集",
    description:
      "医学部受験、内部進学、学校成績対策を支えるMedvance講師を募集しています。承認後は講師一覧への掲載も可能です。",
    url: "https://medvance-edu.com/recruit",
    siteName: "Medvance",
    locale: "ja_JP",
    type: "website",
    images: ["https://medvance-edu.com/og-image.png"],
  },
};

const recruitSchema = buildBreadcrumbSchema([
  { name: "ホーム", url: "/" },
  { name: "講師募集", url: "/recruit" },
]);

export default function RecruitLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recruitSchema) }}
      />
      {children}
    </>
  );
}
