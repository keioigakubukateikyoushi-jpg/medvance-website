import LongformColumnPage from "@/components/LongformColumnPage";
import {
  aprilColumnArticleMetadata,
  mmiTaisakuArticle,
} from "@/lib/aprilColumnArticles";
import { buildHowToSchema } from "@/lib/seo";

export const metadata = aprilColumnArticleMetadata.mmiTaisakuArticle;

const howToSchema = buildHowToSchema({
  name: "医学部MMI面接の対策方法",
  description:
    "医学部MMI（マルチプル・ミニ・インタビュー）面接の準備を、情報収集から模擬面接まで段階的に進める方法。",
  path: "/column/mmi-taisaku",
  totalTime: "PT4H",
  steps: [
    {
      name: "MMIの形式と評価軸を理解する",
      text: "MMIは複数のステーションを巡回する形式で、倫理観・コミュニケーション・批判的思考・協調性などを評価。志望校がMMIを採用しているか・ステーション数・時間配分を確認する。",
    },
    {
      name: "頻出テーマを洗い出す",
      text: "医療倫理（安楽死・臓器移植・インフォームドコンセント）、医師像、チーム医療、時事問題（医療資源分配・AI診断）など、出題領域ごとに自分の立場を言語化する。",
    },
    {
      name: "STAR法で回答の型をつくる",
      text: "Situation（状況）・Task（課題）・Action（行動）・Result（結果）の順で経験を整理し、30秒・60秒・90秒の3パターンで話せるよう準備する。",
    },
    {
      name: "ロールプレイ課題を繰り返す",
      text: "患者役との対話・倫理的ジレンマへの意見提示・チーム内での意思決定など、実際のステーション設定を模した練習を繰り返す。録画して振り返る。",
    },
    {
      name: "模擬MMIで本番環境を再現する",
      text: "複数の面接官・制限時間・部屋移動まで本番通りに再現。初対面の講師・医学部生と模擬面接を行い、第三者からのフィードバックで改善点を洗い出す。",
    },
  ],
});

export default function MmiTaisakuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <LongformColumnPage article={mmiTaisakuArticle} />
    </>
  );
}
