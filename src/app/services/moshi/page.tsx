import Link from "next/link";

export const metadata = {
  title: "模試分析サービス｜偏差値・弱点から学習ルートを設計 | Medvance",
  description:
    "模試の結果を現役慶應医学部生が徹底分析。偏差値・科目別得点・志望校との差分から、あなた専用の学習ルートを設計します。駿台・河合・進研・東進など主要模試に対応。",
};

const analysisItems = [
  {
    icon: "📊",
    title: "偏差値・得点の多角的分析",
    body: "単に「偏差値○○だから△△大学は厳しい」で終わらせません。科目別・分野別に何が取れていて何が取れていないかを細かく分析し、「どこを伸ばせば合格に近づくか」を明確にします。",
  },
  {
    icon: "🎯",
    title: "志望校との差分の可視化",
    body: "志望校の合格最低点・各科目の合格ラインと現在の得点を比較。「あと何点・どの科目で取るか」という具体的な目標を設定します。合格から逆算した学習計画の出発点になります。",
  },
  {
    icon: "🔍",
    title: "弱点の根本原因特定",
    body: "点数が低い＝弱点、ではありません。「計算ミスなのか」「概念理解が浅いのか」「時間不足なのか」という根本原因を特定します。原因が違えば対策も違います。",
  },
  {
    icon: "📚",
    title: "オーダーメイド学習ルートの設計",
    body: "分析結果をもとに、参考書・問題集・学習順序を含む具体的な学習ルートを設計します。「何を・どの順番で・どのくらいの期間で」やるかまで明確にします。",
  },
];

const supportedTests = [
  { name: "駿台全国模試", level: "ハイレベル", note: "難関医学部志望者の指標" },
  { name: "駿台全国判定模試", level: "標準〜上位", note: "私立医学部志望者向け" },
  { name: "河合塾全統記述模試", level: "標準", note: "最も受験者数が多い模試" },
  { name: "河合塾全統共通テスト模試", level: "標準", note: "国公立医学部の指標に" },
  { name: "進研模試", level: "基礎〜標準", note: "現状把握・基礎定着確認" },
  { name: "東進共通テスト本番レベル模試", level: "標準", note: "国公立対策の補助に" },
];

const flow = [
  {
    step: "01",
    title: "模試の結果をご共有",
    body: "受験した模試の成績表（PDF・画像）をお送りください。複数の模試をまとめて分析することも可能です。",
  },
  {
    step: "02",
    title: "志望校・現状のヒアリング",
    body: "志望校・学年・これまでの学習状況・現在の悩みをお聞きします。模試の数字だけでなく、背景も含めて分析します。",
  },
  {
    step: "03",
    title: "担当講師による徹底分析",
    body: "現役慶應医学部生の講師が模試を科目別・分野別に分析。弱点の根本原因と志望校への差分を整理します。",
  },
  {
    step: "04",
    title: "学習ルートのご提案",
    body: "分析結果をもとに、参考書・学習順序・スケジュールを含む具体的な学習ルートをご提案します。そのままMedvanceの指導につなげることも、参考として使っていただくことも可能です。",
  },
];

const faqs = [
  {
    q: "模試分析だけでも利用できますか？",
    a: "はい、模試分析のみのご利用も可能です。分析結果をもとにMedvanceの指導をご検討いただくことも、他の手段で活用していただくことも自由です。",
  },
  {
    q: "どの模試でも対応できますか？",
    a: "駿台・河合塾・進研・東進など主要な模試に対応しています。複数の模試をまとめて分析することで、より精度の高い弱点特定が可能です。",
  },
  {
    q: "模試を1回しか受けていなくても分析できますか？",
    a: "1回分でも分析可能です。ただし複数回分があると「得点の推移・安定度」も見られるため、より詳細な分析になります。",
  },
  {
    q: "分析にどれくらい時間がかかりますか？",
    a: "ご共有いただいてから通常2〜3日以内にフィードバックをお返しします。無料相談と合わせてご利用いただくのが最もスムーズです。",
  },
];

export default function MoshiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Mock Exam Analysis
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            模試分析サービス
          </h1>
          <p className="text-base mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            偏差値・科目別得点・弱点から、あなた専用の学習ルートを設計します
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["駿台対応", "河合塾対応", "進研・東進対応", "複数模試まとめて分析OK"].map((tag) => (
              <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 分析内容 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            模試分析でわかること
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "#6b7280" }}>
            「偏差値が低かった」で終わらせない。原因と対策まで一貫して分析します
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {analysisItems.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 対応模試 */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            対応している模試
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {supportedTests.map((test, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{test.name}</p>
                <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2" style={{ backgroundColor: "rgba(201,146,42,0.15)", color: "#c9922a" }}>
                  {test.level}
                </span>
                <p className="text-xs" style={{ color: "#9ca3af" }}>{test.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-4" style={{ color: "#9ca3af" }}>上記以外の模試もご相談ください</p>
        </div>
      </div>

      {/* 利用の流れ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            ご利用の流れ
          </h2>
          <div className="space-y-4">
            {flow.map((item, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
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
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tool CTA */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Tool</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            模試偏差値 自動分析ツール
          </h2>
          <p className="text-sm mb-6" style={{ color: "#6b7280" }}>
            偏差値を入力するだけで、科目別バンド・参考書・学習タイムラインを自動生成します。無料・登録不要。
          </p>
          <Link
            href="/services/moshi/tool"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#0c1a33" }}
          >
            自動分析ツールを使う
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Analysis</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            模試結果を送って、無料で分析してもらう
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            お問い合わせフォームから模試の成績表をお送りください。担当講師が分析し、学習ルートをご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料で模試分析を依頼する
          </Link>
        </div>
      </div>
    </div>
  );
}
