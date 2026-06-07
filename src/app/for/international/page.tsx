import ForPageSchemas from "@/components/ForPageSchemas";
import InternationalClient from "./InternationalClient";

export const metadata = {
  title: "【外国人・留学生の日本医学部受験】英语・日本語ハイブリッド個別指導と理数徹底対策 | Medvance",
  description:
    "日本の医学部を目指す外国人・留学生のための専門個別指導。現役医学部生（東大・慶應・国際医療福祉大等）のバイリンガル講師が、日本語と英語の両方でEJU理数科目・数学・面接小論文・出願エッセイまで徹底指導します。",
  alternates: {
    canonical: "/for/international",
  },
};

export default function InternationalPage() {
  return (
    <>
      <ForPageSchemas slug="international" />
      <InternationalClient />
    </>
  );
}
