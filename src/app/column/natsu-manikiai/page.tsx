import LongformColumnPage from "@/components/LongformColumnPage";
import {
  aprilColumnArticleMetadata,
  natsuManikiaiArticle,
} from "@/lib/aprilColumnArticles";
import { buildHowToSchema } from "@/lib/seo";

export const metadata = aprilColumnArticleMetadata.natsuManikiaiArticle;

const howToSchema = buildHowToSchema({
  name: "夏から医学部受験を間に合わせる勉強戦略",
  description:
    "高3・浪人生が夏休みから医学部合格に必要な学力を積み上げるための、優先順位付けと具体的な学習計画の立て方。",
  path: "/column/natsu-manikiai",
  totalTime: "P4M",
  steps: [
    {
      name: "残り期間と目標点のギャップを数値化する",
      text: "共通テスト・志望校の過去問を1回分解いて得点を測定。合格ラインとの差を科目別に算出し、何点・どの分野で上積みが必要か洗い出す。",
    },
    {
      name: "夏休み中に英数の基礎を完成させる",
      text: "英数は完成に時間がかかるため夏に集中投下。英文法・英単語帳1冊完走、数学は青チャート等の網羅系で基礎例題を全周する。",
    },
    {
      name: "理科は1科目ずつ短期集中で仕上げる",
      text: "物化or化生を同時並行せず、夏前半に1科目・後半にもう1科目と集中投下。分野ごとに「理解→問題演習→入試問題」の3段階で進める。",
    },
    {
      name: "9月以降は過去問演習と弱点潰しに切り替える",
      text: "志望校の過去問を週1〜2年分解き、出題傾向に合わせて弱点補強。模試結果も合わせて残り期間の優先順位を毎月見直す。",
    },
    {
      name: "11月以降は面接・小論文・推薦要件を仕上げる",
      text: "学科対策と並行して、MMI・小論文・志望理由書を準備。推薦AOを使う場合は出願要件・書類作成を逆算してスケジュールする。",
    },
  ],
});

export default function NatsuManikiaiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <LongformColumnPage article={natsuManikiaiArticle} />
    </>
  );
}
