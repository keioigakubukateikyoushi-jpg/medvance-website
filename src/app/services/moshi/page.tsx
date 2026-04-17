import Link from "next/link";
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from "@/lib/seo";

export const metadata = {
  title: "AI模試分析サービス｜偏差値を入力するだけで学習ルートを自動生成 | Medvance",
  description:
    "偏差値を入力するだけで、AIが科目別バンド・弱点・参考書・学習タイムラインを即時生成。駿台・河合塾・進研・東進など模試の難易度補正も自動対応。無料・登録不要で今すぐ使えます。",

  alternates: {
    canonical: "/services/moshi",
  },};

const features = [
  {
    icon: "🤖",
    title: "AIが即時分析・無料で使える",
    body: "偏差値を入力してボタンを押すだけ。AIが科目別のバンド評価・弱点特定・学習ルートを数秒で生成します。登録不要・完全無料で今すぐ使えます。",
  },
  {
    icon: "📊",
    title: "模試の難易度補正を自動適用",
    body: "駿台全国・河合塾・進研・東進など模試ごとの難易度差をAIが自動補正。「駿台で55」と「進研で55」が同じ実力ではないことを正確に反映した分析を行います。",
  },
  {
    icon: "🎯",
    title: "志望校との差分を可視化",
    body: "国公立・最難関私立・上位私立・中堅私立の合格ラインと現在の位置をAIが比較。「あと何バンド・どの科目を伸ばすべきか」を具体的に示します。",
  },
  {
    icon: "📚",
    title: "参考書・タイムラインを自動設計",
    body: "バンドと学年を組み合わせてAIが参考書リスト・学習順序・スケジュールを設計します。「今すぐ取り組む1冊」から「次のステップ」まで具体的に提示。",
  },
];

const supportedTests = [
  { name: "駿台全国模試", level: "ハイレベル", note: "補正値+8（最難関・医学部志望者が集中）" },
  { name: "駿台全国判定模試", level: "標準〜上位", note: "補正値+4" },
  { name: "河合塾全統記述模試", level: "標準", note: "補正なし（AIの基準模試）" },
  { name: "河合塾全統共通テスト模試", level: "標準", note: "国公立医学部志望者の指標" },
  { name: "進研模試（高3）", level: "基礎〜標準", note: "補正値−10（過信禁物）" },
  { name: "進研模試（高2以下）", level: "基礎", note: "補正値−12" },
  { name: "東進共通テスト模試", level: "標準", note: "補正値−3" },
  { name: "代ゼミ模試", level: "標準", note: "補正値−2" },
];

const flow = [
  {
    step: "01",
    title: "偏差値を入力する",
    body: "学年・模試の種類・理科の選択科目・志望校タイプ・各科目の偏差値を入力します。所要時間は1分以内です。",
  },
  {
    step: "02",
    title: "AIが難易度補正＋バンド分類",
    body: "模試ごとの難易度差を自動補正し、英語・数学・理科2科目をE〜Sの6段階バンドに分類。どの科目が弱点かをAIが特定します。",
  },
  {
    step: "03",
    title: "学習ルートを即時生成",
    body: "科目別コメント・参考書リスト・学習タイムラインが即座に表示されます。「今日から何をすべきか」がすぐにわかります。",
  },
  {
    step: "04",
    title: "講師による詳細分析（オプション）",
    body: "AI分析の結果をもとに、現役慶應医学部生の講師がさらに踏み込んだ分析と個別戦略をご提案します。無料相談からどうぞ。",
  },
];

const faqs = [
  {
    q: "完全無料で使えますか？",
    a: "はい、AI模試分析ツールは完全無料・登録不要でご利用いただけます。分析結果をもとにMedvanceの指導をご検討いただくことも、参考のみに活用していただくことも自由です。",
  },
  {
    q: "なぜ模試の種類を選ぶ必要があるのですか？",
    a: "模試によって受験者層と難易度が大きく異なるため、同じ「偏差値60」でも実力は異なります。駿台全国模試は医学部志望者が集中する最難関模試で、河合塾全統より偏差値が低く出ます。AIが各模試の難易度差を自動補正し、実力を正確に評価します。",
  },
  {
    q: "どの模試でも対応できますか？",
    a: "駿台全国・駿台判定・河合塾全統記述・河合塾共通テスト・進研（高3/高2以下）・東進・代ゼミに対応しています。それ以外の模試は補正なし（参考値）として分析できます。",
  },
  {
    q: "AI分析と講師分析の違いは何ですか？",
    a: "AI分析は偏差値データから即時に標準的な学習ルートを生成します。講師分析では、AIの結果をベースに「答案の書き方」「時間配分の癖」「過去の学習履歴」など数値に現れない部分まで踏み込んだ分析を行います。まずAIで概要をつかみ、本格的な対策は無料相談でご相談ください。",
  },
];

const faqSchema = buildFaqSchema(faqs.map((f) => ({ q: f.q, a: f.a })));
const serviceSchema = buildServiceSchema(
  "AI模試分析サービス",
  "偏差値を入力するだけでAIが科目別バンド・弱点・参考書・学習タイムラインを即時生成する無料ツール。",
  "/services/moshi",
  "模試分析・学習ルート設計"
);
const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "ホーム", url: "/" },
  { name: "サービス", url: "/services" },
  { name: "AI模試分析", url: "/services/moshi" },
]);

export default function MoshiPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, serviceSchema, breadcrumbSchema]) }} />
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.15)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
            <span>🤖</span>
            <span>AI Mock Exam Analysis</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            AI模試分析サービス
          </h1>
          <p className="text-base mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>
            偏差値を入力するだけで、AIが学習ルートを即時生成
          </p>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            難易度補正・バンド分類・参考書レコメンド・タイムライン設計まで自動。無料・登録不要。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services/moshi/tool"
              className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
            >
              今すぐAI分析を使う（無料）
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 font-bold text-base rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              講師に相談する
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["駿台補正対応", "河合塾基準", "進研・東進対応", "6段階バンド評価", "即時生成"].map((tag) => (
              <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* AIツールのプレビューCTA */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden" style={{ border: "2px solid #c9922a" }}>
            <div className="px-6 py-4 flex items-center gap-3" style={{ backgroundColor: "#c9922a" }}>
              <span className="text-white text-lg">🤖</span>
              <p className="text-white font-bold text-base">AI模試分析ツール — 無料・登録不要</p>
            </div>
            <div className="p-6 bg-white">
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "STEP 1", desc: "学年・模試・偏差値を入力" },
                  { label: "STEP 2", desc: "AIが難易度補正＋バンド分類" },
                  { label: "STEP 3", desc: "参考書・タイムラインを即時生成" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 rounded-xl" style={{ backgroundColor: "#f7f5f0" }}>
                    <p className="text-xs font-bold mb-1" style={{ color: "#c9922a" }}>{s.label}</p>
                    <p className="text-sm" style={{ color: "#374151" }}>{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link
                  href="/services/moshi/tool"
                  className="inline-block px-8 py-3.5 text-white font-bold text-sm rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#0c1a33" }}
                >
                  AI分析ツールを開く →
                </Link>
                <p className="text-xs mt-2" style={{ color: "#9ca3af" }}>1分で完了・完全無料</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AIの分析内容 */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            AIが分析すること
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "#6b7280" }}>
            偏差値の入力だけで、ここまでわかります
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 対応模試 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            AIが対応している模試
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "#6b7280" }}>
            模試ごとの難易度差を自動補正します。同じ偏差値でも模試が違えば意味が違います
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {supportedTests.map((test, i) => (
              <div key={i} className="p-4 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{test.name}</p>
                <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2" style={{ backgroundColor: "rgba(201,146,42,0.15)", color: "#c9922a" }}>
                  {test.level}
                </span>
                <p className="text-xs" style={{ color: "#9ca3af" }}>{test.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-4" style={{ color: "#9ca3af" }}>上記以外の模試は補正なし（参考値）として分析可能</p>
        </div>
      </div>

      {/* 利用の流れ */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            ご利用の流れ
          </h2>
          <div className="space-y-4">
            {flow.map((item, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: "#0c1a33" }}>
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free AI Analysis</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            今すぐAIで模試を分析する
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            偏差値を入力するだけ。無料・登録不要で学習ルートを即時生成します。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services/moshi/tool"
              className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
            >
              AI分析ツールを使う（無料）
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 font-bold text-base rounded-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              講師に相談する
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
