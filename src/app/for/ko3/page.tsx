import ForPageSchemas from "@/components/ForPageSchemas";
import Link from "next/link";
export const metadata = {
  title: "高3の医学部受験対策｜現役医学部生による完全1対1指導 | Medvance",
  description:
    "高校3年生・受験本番の年。限られた時間で最大の結果を出すには、正しい戦略と指導が必要です。Medvanceは現役医学部生が完全1対1で、現役合格まで徹底サポートします。",

  alternates: {
    canonical: "/for/ko3",
  },};

const challenges = [
  {
    title: "「時間が全然足りない」",
    body: "高3の受験生が最も口にする悩みです。英数理すべてを仕上げながら面接・小論文も対策しなければならない。Medvanceでは優先順位を明確にし、限られた時間で最大の成果を出す戦略を設計します。",
  },
  {
    title: "「何をどこまで仕上げればいいかわからない」",
    body: "志望校によって「合格に必要なレベル」は全く違います。全科目を満点近くにする必要はなく、「どこで点を取るか」の設計が重要です。大学ごとの出題傾向を知り尽くした講師が、最短ルートを示します。",
  },
  {
    title: "「模試の結果が安定しない・伸びない」",
    body: "模試の点数が伸び悩む原因は、ほぼ必ず「理解の穴」にあります。漠然と問題を解くのではなく、模試を徹底的に分析して弱点をピンポイントで潰す指導を行います。",
  },
];

const schedule = [
  {
    period: "4〜6月",
    title: "基礎完成・弱点潰し",
    desc: "部活引退前の時期は、基礎の見直しと弱点の特定に集中します。「わかったつもり」になっている分野を洗い出し、根本から整理し直す時期です。ここで基礎が固まっていないと、夏の演習期に伸び悩みます。",
  },
  {
    period: "7〜9月（夏）",
    title: "応用演習・量をこなす",
    desc: "部活引退後の夏は受験の天王山。基礎が固まった状態で、問題演習の量を大幅に増やします。模試を積極的に受験し、本番形式での得点力を鍛えます。夏の過ごし方が合否を大きく左右します。",
  },
  {
    period: "10〜11月",
    title: "志望校過去問・特化対策",
    desc: "過去問演習を本格化し、志望校の出題形式に体を慣らしていきます。大学別の対策（慶應なら論証力、慈恵なら英語速度など）をこの時期に仕上げます。面接・小論文対策もこの時期から本格始動します。",
  },
  {
    period: "12月〜本番",
    title: "仕上げ・メンタル管理",
    desc: "新しいことには手を出さず、これまでの学習の確認と定着に集中します。直前期は「不安から新しいことを始める」という行動が最も危険。メンタル面のサポートも含め、講師が最後まで伴走します。",
  },
];

const features = [
  {
    title: "現役合格に特化した戦略",
    body: "現役生に最適な時間配分・科目バランスを設計します。浪人生とは異なる「現役ならではの戦い方」があります。学校行事・模試・体調管理まで含めた現実的なスケジュールを共に作ります。",
  },
  {
    title: "面接・小論文の一貫サポート",
    body: "学科試験だけでなく、面接・小論文も1対1で対策します。「なぜ医師を目指すか」という根本的な問いから、模擬面接の反復練習まで、医学部特有の選考に完全対応します。",
  },
  {
    title: "志望校別のピンポイント対策",
    body: "慶應・慈恵・順天堂など、大学ごとに求められる能力は異なります。その大学の合格者が講師として在籍しているMedvanceだからこそ、リアルな傾向と対策を提供できます。",
  },
];

const faqs = [
  {
    q: "高3の春から始めて現役合格できますか？",
    a: "可能です。ただし戦略が重要です。高3のスタート時点での学力と志望校によって最適な戦略は異なります。まずは無料相談で現状を診断し、現実的な合格プランをご提案します。",
  },
  {
    q: "部活引退後から始めようと思っているのですが遅いですか？",
    a: "引退時期によります。7〜8月の引退なら、戦略次第で現役合格は十分可能です。ただし引退を待たず、今できる範囲で少しでも始めておくことを強くお勧めします。",
  },
  {
    q: "複数の大学を受験する場合、対策が追いつきますか？",
    a: "優先順位をつけた対策で対応できます。第一志望校の対策を軸に置きながら、他校との共通部分・差異を整理し、効率よく複数校に対応できる指導を行います。",
  },
  {
    q: "面接・小論文対策はいつから始めるべきですか？",
    a: "秋（10月頃）を目安に本格始動するのが理想です。ただし「なぜ医師を目指すか」という問いへの自分なりの答えは、早い段階から考え始めることをお勧めします。",
  },
];

export default function Ko3Page() {
  return (
    <>
      <ForPageSchemas slug="ko3" />
      <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            高校3年生の方へ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            現役で医学部に合格するために、今すぐ動く。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            限られた時間を最大化する戦略で、現役合格を目指します
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            高3受験生が直面する課題
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            高3の学習ロードマップ
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "#6b7280" }}>
            時期ごとに「何をすべきか」を明確にし、迷わず走り切ります
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {schedule.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#c9922a" }}>{item.period}</span>
                  <span className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.title}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceが高3に選ばれる理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4" style={{ backgroundColor: "#c9922a" }}>
                  {i + 1}
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        {/* ── HIGH QUALITY JAPANESE REALISTIC PHOTO (Tier 4) ── */}
        <section className="bg-white px-4 py-8">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border" style={{ borderColor: "#e5e1d8" }}>
            <img 
              src="/images/generated/highschool_study_smiling.png" 
              alt="志望校合格に向け学習計画表を前にモチベーション高く自習に取り組む日本の高校生" 
              className="w-full h-auto object-cover max-h-[380px]"
            />
          </div>
        </section>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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

      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>無料相談</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            現状の学力・志望校・残り時間を整理し、現役合格への最短ルートをご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
