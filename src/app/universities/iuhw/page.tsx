import Link from "next/link";

export const metadata = {
  title: "国際医療福祉大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description: "国際医療福祉大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。英語重視のグローバル教育と英語高配点の対策を詳しく紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★★☆",
    body: "国際医療福祉大学は英語の配点・比重が他大学と比べて格段に高く、英語力が合否を大きく左右します。長文読解のスピードと正確性が特に重要です。",
    detail: "英語の配点が全体の約40%を占めるとされ、長文読解4〜5題と文法・語彙・英作文が含まれる。医療・国際保健・グローバルヘルスに関する英文が頻出。英語力の高い受験生が集まるため、英検準1級〜1級相当の語彙力と読解スピードが必要。英語を武器にできる受験生にとっては有利な大学。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心です。微積・確率・数列の典型問題を確実に習得すれば安定した得点が可能です。",
    detail: "大問4〜5題構成。記述式と選択式が混在。微積分・確率・数列・ベクトルが頻出分野。英語での高得点を狙う受験生にとって、数学は取れて当然の科目という位置づけ。標準問題集を1冊完璧にし、典型問題で失点しない安定感を養うことが目標。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "標準的な問題が中心で、力学・電磁気から頻出です。基本的な公式と解法パターンを習得すれば対応できます。",
    detail: "力学・電磁気・波動・熱力学から出題。難問は少なく、基本〜標準問題を確実に解く力があれば十分。物理で難問に時間を取られるより、英語に十分な時間を確保する学習配分が合格戦略的に有効。標準問題集を丁寧に仕上げることで安定した得点が期待できる。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学が標準レベルで出題されます。計算問題の正確性と有機反応の基礎知識が重要です。",
    detail: "理論化学（モル・気体・溶液・電気化学）と有機化学（構造決定・反応）が主要な出題分野。無機化学は族ごとの特徴と反応を覚えておくこと。標準問題集で基礎〜標準を固めた後、過去問で出題パターンを把握することが効率的。英語の対策に比重を置くため、化学は標準レベルの完成を目標とする。",
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "グローバルな医師としての視野と、国際医療への関心が評価されます。英語での面接が課されることもあります。",
    detail: "面接では「なぜ国際医療福祉大学を選んだか」「グローバルな医療にどう貢献したいか」「英語を使った医療活動への関心」などが問われる。英語での質疑応答が含まれる可能性があるため、基本的な英語面接の準備も必要。グローバルヘルスや国際医療支援への関心を具体的なエピソードを交えて語れると好印象。",
  },
];

const strategies = [
  {
    step: "01",
    title: "英語を最大の武器にする",
    body: "国際医療福祉大学は英語の配点が非常に高いため、英語を得点源にできるかどうかが合否を決定的に左右します。英検準1級以上を目標に、長文読解のスピードと正確性を徹底的に鍛えましょう。英語の高得点が他科目の不足を補う可能性があります。",
  },
  {
    step: "02",
    title: "グローバルヘルスの知識を蓄積する",
    body: "国際医療福祉大学の英語長文はグローバルヘルス・国際医療・感染症などのテーマが頻出です。WHOの活動、途上国の医療課題、感染症の世界的な拡大といったトピックに日頃から触れておくことで、長文の内容理解がスムーズになります。英語学習と知識習得を同時に進める意識を持ちましょう。",
  },
  {
    step: "03",
    title: "数学・理科は標準レベルを確実に仕上げる",
    body: "英語に比重を置く戦略のため、数学・理科は標準問題を確実に解ける力を目標にしましょう。難問への過度な対策は英語の練習時間を圧迫します。各科目で基礎〜標準の典型問題を漏れなく対処できる状態を目指してください。",
  },
  {
    step: "04",
    title: "英語面接・グローバル志向の面接準備を行う",
    body: "面接では英語での質疑応答が含まれる場合があります。自己紹介・志望動機・将来の医師像を英語で話せるよう準備しておきましょう。また、国際医療への関心を示す具体的なエピソード（海外経験、国際ボランティア、外国語学習の動機など）を整理しておくことも重要です。",
  },
];

const faqs = [
  {
    q: "国際医療福祉大学医学部は英語がどのくらい重要ですか？",
    a: "非常に重要です。英語の配点が全体の約40%を占めるとされており、英語力が合否を大きく左右します。英検準1級以上の語彙力と読解スピードを目標に、英語を最優先で鍛えることをお勧めします。",
  },
  {
    q: "英語が苦手でも合格できますか？",
    a: "非常に難しいと言わざるを得ません。英語が得意な受験生が多く受験する大学のため、英語での失点は他科目で補い切れない可能性があります。英語を武器にできる受験生に向いている大学です。",
  },
  {
    q: "国際医療福祉大学医学部の特徴ある教育内容は何ですか？",
    a: "英語を用いた医学教育（英語での講義・実習）が行われており、卒業後に海外で活躍できる医師の育成を目指しています。国際保健・グローバルヘルスへの関心が高い学生に適した環境です。",
  },
];

export default function IuhwPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            国際医療福祉大学医学部<br />入試対策ガイド
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              栃木県
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            国際医療福祉大学医学部の特徴
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            国際医療福祉大学医学部は2017年に開設された比較的新しい医学部で、栃木県那須塩原市に位置します。最大の特徴は英語による医学教育を積極的に取り入れたグローバル志向のカリキュラムで、英語での講義・試験が行われます。入試においても英語の配点が他大学より高く設定されており、英語力が合否を大きく左右します。国際医療・グローバルヘルスへの関心が高く、英語を武器にできる受験生にとって有利な大学です。
          </p>
        </div>
      </div>

      {/* Subjects */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Subject Analysis</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>科目別出題傾向</h2>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>合格するための戦略</h2>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>よくある質問</h2>
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
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            国際医療福祉大学医学部対策の相談はこちら
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
  );
}
