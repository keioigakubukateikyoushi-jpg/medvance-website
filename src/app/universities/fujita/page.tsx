import UniversityPageSchemas from "@/components/UniversityPageSchemas";
import Link from "next/link";

export const metadata = {
  title: "藤田医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "藤田医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。中部圏最大規模で基礎〜標準問題中心の対策を詳しく紹介します。",

  alternates: {
    canonical: "/universities/fujita",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解と文法・語彙問題が標準的なレベルで出題されます。基礎英語力を固めることが得点安定につながります。",
    detail: "長文読解2〜3題と文法・語彙・整序問題で構成。医療・科学系テーマの英文が頻出。難問は少なく基礎〜標準の英語力で対応可能。英単語と文法の基礎を固めた後、長文読解の練習を積み重ねるのが効率的。読解スピードより正確性を重視した読み方を身につけよう。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心です。微積・確率・数列・ベクトルの典型問題を完全に習得することが合格への近道です。",
    detail: "大問4〜5題。記述式と選択式が混在。微積分・確率・ベクトル・数列が頻出分野。難問は少なく、基礎〜標準問題を確実に解ける力が合否を決める。時間配分を意識した演習で、解けない問題に時間をかけすぎない判断力も養おう。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気・波動から標準的な問題が出題されます。基本的な解法パターンの習得が重要です。",
    detail: "力学（運動方程式・エネルギー）と電磁気（コンデンサ・回路）が頻出。波動と熱力学も出題される。標準問題集を1冊仕上げれば十分対応できる難易度。計算問題は検算を習慣化してミスを防ぐこと。物理の基本概念を図やグラフで理解する習慣をつけると応用力が伸びる。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題されます。理論化学の計算問題と有機化学の基礎知識が得点に直結します。",
    detail: "理論化学（モル・気体・溶液・平衡）と有機化学（官能基・反応・構造決定）が重要分野。無機化学は族ごとの特徴と主要な反応を確実に押さえること。計算問題は丁寧な単位管理で失点を防ぐ。全体的に標準問題が多いため、基礎を固めることで高得点が狙える。",
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "志望動機・医師としての理念・チーム医療の理解が面接で問われます。藤田医科大学の大規模附属病院での臨床教育への関心を示すと好印象です。",
    detail: "個人面接形式。「なぜ医師になりたいのか」「藤田医科大学を選んだ理由」「チーム医療における医師の役割」などが問われる。藤田医科大学は中部圏最大規模の附属病院を有しており、豊富な臨床経験ができる環境が特徴。大学の特色を踏まえた志望動機を語ることで説得力が増す。",
  },
];

const strategies = [
  {
    step: "01",
    title: "全科目の基礎〜標準を確実に仕上げる",
    body: "藤田医科大学は全科目で標準問題が中心のため、基礎の完成度が合否を直接決めます。各科目で典型問題を漏れなく解ける力を最優先で養いましょう。難問を追い求めるよりも、取れるはずの問題を100%取り切る安定性が合格への条件です。",
  },
  {
    step: "02",
    title: "計算ミスゼロの習慣を徹底する",
    body: "標準問題が中心の藤田医科大学では、ケアレスミスが合否に直結します。数学・理科の演習では必ず検算する習慣をつけ、本番で安定した得点を確保できるようにしましょう。",
  },
  {
    step: "03",
    title: "大規模病院での臨床教育に関心を持ち面接に備える",
    body: "藤田医科大学は中部圏最大規模の附属病院を持ち、豊富な臨床症例を経験できる環境が強みです。この特徴に共感した志望動機を面接で語ることで、大学への真剣な志望意思が伝わります。病院見学や大学のオープンキャンパスに参加することも準備として有効です。",
  },
  {
    step: "04",
    title: "過去問演習で出題パターンを把握する",
    body: "藤田医科大学の過去問は出題分野や形式に一定の傾向があります。過去5〜10年分を分析し、頻出分野への準備を優先させることで効率よく得点力を高めることができます。",
  },
];

const faqs = [
  {
    q: "藤田医科大学の入試難易度はどのくらいですか？",
    a: "私立医学部の中では標準〜やや易しめのレベルです。全科目で基礎〜標準問題が中心のため、丁寧な基礎固めで合格圏内に入ることができます。ただし応募者数も多いため、しっかりとした準備が必要です。",
  },
  {
    q: "藤田医科大学の附属病院の特徴は何ですか？",
    a: "藤田医科大学病院は中部圏最大規模の私立大学病院の一つで、年間の外来患者数・入院患者数ともに多く、多様な疾患を経験できる臨床実習環境が整っています。この豊富な臨床経験の機会は、医師を目指す学生にとって大きな魅力です。",
  },
  {
    q: "藤田医科大学は愛知県出身でなくても合格できますか？",
    a: "はい、全国から受験生が集まる大学です。出身地は合否に影響しません。ただし「なぜ藤田医科大学なのか」を具体的に説明できることは重要で、大学の特色（大規模病院・充実した臨床実習）と自分の目標を結びつけた志望動機を準備してください。",
  },
];

export default function FujitaPage() {
  return (
    <>
      <UniversityPageSchemas name="藤田医科大学" slug="fujita" breadcrumbLabel="藤田医科大対策" />
          <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            藤田医科大学<br />入試対策ガイド
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              愛知県
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            藤田医科大学の特徴
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            藤田医科大学は愛知県豊明市に位置し、中部圏最大規模の私立医学部として知られています。豊富な臨床症例を経験できる大規模附属病院を持ち、実践的な医師育成に強みを持っています。入試では英語・数学・理科2科目の筆記試験と面接が課されます。全科目で基礎〜標準問題が中心のため、基礎の完成度が合否を決めます。中部圏の医学部を志望する受験生にとって重要な選択肢です。
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
            藤田医科大学対策の相談はこちら
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