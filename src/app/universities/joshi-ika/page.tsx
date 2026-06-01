import UniversityPageSchemas from "@/components/UniversityPageSchemas";
import Link from "next/link";
import UniversityHero from "@/components/UniversityHero";

export const metadata = {
  title: "東京女子医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "東京女子医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。女性医師としての覚悟と将来像を問う面接対策を詳しく紹介します。",

  alternates: {
    canonical: "/universities/joshi-ika",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解中心の標準的な出題です。医療・科学系テーマの英文に慣れておくと有利です。",
    detail: "長文読解2〜3題と文法・語彙問題で構成。医療・生命科学系テーマが頻出で、内容に関する記述式問題も含まれる。英文和訳を求められることがあるため、正確に日本語で表現する力も必要。標準的な単語力と文法知識を身につけた上で、医療系英文の読解演習を積み重ねることが有効。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心です。微積・確率・数列・ベクトルを中心に典型問題を習得することが重要です。",
    detail: "大問4〜5題。記述式が主体で、論理の流れが明確な答案が求められる。微積分・確率・ベクトル・数列が毎年頻出。難問は少ないが、標準問題を確実に解く安定感が必要。時間内に全問解き切るためのペース管理と、部分点を確保するための途中式の丁寧な記述を意識しよう。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気・波動から標準的な問題が出題されます。基本公式を確実に使いこなす力が問われます。",
    detail: "力学（運動方程式・エネルギー・運動量）と電磁気（コンデンサ・回路・電磁誘導）が特に頻出。波動と熱力学も毎年出題される。基本〜標準問題が中心で、難問への対策は必須ではないが、物理現象の本質的な理解がないと得点が安定しない。標準問題集を繰り返し解いて解法パターンを定着させること。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題されます。有機化学の構造決定と理論化学の計算問題への対策が重要です。",
    detail: "理論化学（気体・溶液・化学平衡・電気化学）と有機化学（構造決定・反応・高分子）が特に重要。無機化学は反応の仕組みを理解した上で暗記すると効率的。計算問題は丁寧な単位管理で失点を防ぐ。有機化学の構造決定は論理的思考力が鍛えられるため、多くの問題を演習して解法を習得すること。",
  },
  {
    name: "面接・小論文",
    level: "★★★★☆",
    body: "東京女子医科大学では女性医師としての覚悟・将来像・キャリアプランを深く問われます。女性ならではの視点で医療に貢献する意志を具体的に語れることが重要です。",
    detail: "面接では「女性医師として働き続けることへの覚悟」「結婚・出産後のキャリアプラン」「女性患者への配慮」などが問われる。単なる「医師になりたい」という思いだけでなく、女性医師としての社会的役割や使命感を語れる準備が必要。小論文では医療政策・女性医療・医師の働き方などがテーマになりやすい。",
  },
];

const strategies = [
  {
    step: "01",
    title: "女性医師としてのキャリアビジョンを明確にする",
    body: "東京女子医科大学は女子大として唯一の医学部です。面接では女性医師としての生き方・働き方に関する質問が多く出ます。「なぜ女子大の医学部を選んだのか」「女性医師として何を実現したいか」「ライフイベントとキャリアをどう両立するか」について、自分なりの考えを深めておきましょう。",
  },
  {
    step: "02",
    title: "筆記試験の基礎〜標準を着実に仕上げる",
    body: "筆記試験は標準レベルが中心です。英語・数学・理科すべての科目で基礎を確実に固め、典型問題を安定して解ける力を養いましょう。難問への対策より、基礎問題での失点をゼロにする安定性が合格への土台となります。",
  },
  {
    step: "03",
    title: "医療系ニュース・女性医療の課題を学ぶ",
    body: "小論文・面接では女性医療や医師の働き方改革に関するテーマが出題されやすいです。産婦人科・小児科などの女性医師が活躍する分野の現状、医師の長時間労働問題、女性医師のキャリア支援制度などについて日頃から情報収集しておきましょう。",
  },
  {
    step: "04",
    title: "模擬面接で場数を踏む",
    body: "面接は事前の準備量が直接パフォーマンスに影響します。想定質問に対する回答を用意するだけでなく、実際に声に出して答える練習を繰り返しましょう。Medvanceでは現役慶應医学部生による模擬面接サポートも提供しています。",
  },
];

const faqs = [
  {
    q: "東京女子医科大学は女性しか受験できませんか？",
    a: "はい、東京女子医科大学医学部は女性のみが受験できる日本唯一の女子医科大学です。女性医師として長く活躍することを強く望む受験生に適した大学です。",
  },
  {
    q: "面接でキャリアプランについて聞かれますが、どう答えればいいですか？",
    a: "「結婚・出産があっても医師として働き続ける意志がある」という姿勢を明確に示すことが大切です。具体的な専攻分野や将来像を語れるとさらに好印象です。東京女子医科大学はそのようなキャリアを支援する体制を整えていますので、その点への共感も伝えましょう。",
  },
  {
    q: "東京女子医科大学の1次試験の合格ラインはどのくらいですか？",
    a: "年度によって変動しますが、得点率65〜70%程度が目安とされています。筆記試験は標準レベルが中心のため、基礎の完成度を高めることで達成できるラインです。",
  },
];

export default function JoshiIkaPage() {
  return (
    <>
      <UniversityPageSchemas name="東京女子医科大学" slug="joshi-ika" breadcrumbLabel="女子医科大対策"  faq={faqs} />
          <div className="min-h-screen bg-white">
      {/* Hero */}
      <UniversityHero slug="joshi-ika">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            東京女子医科大学<br />入試対策ガイド
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              東京都
            </span>
          </div>
        </div>
      </UniversityHero>

      {/* Overview */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            東京女子医科大学の特徴
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            東京女子医科大学は日本唯一の女子医科大学として、1900年の創立以来、女性医師の育成に特化した教育を行っています。新宿区に位置し、附属病院は国内屈指の規模を誇ります。入試では筆記試験（英語・数学・理科2科目）に加え、面接・小論文が課されます。面接では女性医師としての覚悟やキャリアビジョンが深く問われ、筆記試験の成績だけでなく人物評価の比重も高い選考が特徴です。女性としての視点を活かして医療に貢献したいという明確な意志を持つ受験生に向いている大学です。
          </p>
        </div>
      </div>

      {/* Subjects */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Subject Analysis</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>科目別出題傾向</h2>
          <div className="space-y-6">
            {subjects.map((s) => (
              <div key={s.name} className="p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-base" style={{ color: "#0c1a33" }}>{s.name}</h3>
                  <span className="text-sm" style={{ color: "#c9922a" }}>{s.level}</span>
                </div>
                <p className="text-sm mb-2" style={{ color: "#374151" }}>{s.body}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategy */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Strategy</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>合格するための戦略</h2>
          <div className="space-y-5">
            {strategies.map((s) => (
              <div key={s.step} className="flex gap-5 p-6 bg-white rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>FAQ</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {f.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>A. {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-noto-serif)" }}>
            東京女子医科大学対策の相談はこちら
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が個別に対策をアドバイスします。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg hover:opacity-90 transition-opacity"
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