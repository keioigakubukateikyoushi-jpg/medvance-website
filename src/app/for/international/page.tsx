import ForPageSchemas from "@/components/ForPageSchemas";
import InternationalClient from "./InternationalClient";
import { Suspense } from "react";

export const metadata = {
  title: "【留学生の日本医学部受験】EJU理数徹底指導・日英バイリンガル個別指導 | Study Medicine in Japan | Medvance",
  description:
    "日本の医学部を目指す外国人・留学生のための専門個別指導。EJU理数（数学・物理・化学・生物）や英語枠（国際医療福祉大学等）を日英で徹底対策。Study Medicine in Japan / 日本留学考试医学部 / 일본 의대 입학 1:1 과외.",
  alternates: {
    canonical: "/for/international",
    languages: {
      "en": "/for/international?lang=en",
      "zh": "/for/international?lang=zh",
      "ko": "/for/international?lang=ko",
      "ja": "/for/international?lang=ja",
    }
  },
};

export default function InternationalPage() {
  return (
    <>
      <ForPageSchemas slug="international" />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <InternationalClient />
      </Suspense>
    </>
  );
}
