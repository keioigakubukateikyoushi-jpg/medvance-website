import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約｜Medvance",
  description:
    "Medvanceが提供する医学部受験専門指導サービスの利用規約。申込・契約、料金、キャンセル、禁止事項、知的財産権、免責事項などを定めています。",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
