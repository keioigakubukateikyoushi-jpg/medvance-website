import Link from "next/link";

export const metadata = {
  title: "東京医科大学に受かるには｜入試対策・合格戦略を現役生が解説 | Medvance",
  description:
    "東京医科大学の入試対策を現役慶應医学部生が解説。全科目バランス型の出題への対応から思考力重視の傾向変化まで、合格への具体的な戦略を紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "標準〜やや難レベルの出題。長文読解の速度と正確性が合否を分けます。近年は読解量が増加傾向にあります。",
    detail: "長文読解2〜3題が中心構成。医療・科学系テーマの英文が頻出で、段落構造を素早く把握しながら内容を正確に読み取る力が必要。読解スピードが重要で、1分90語以上を目標に練習すること。語彙・文法問題も含まれるため、基礎の抜けをなくすことが前提。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準〜やや難レベルの出題。典型問題の確実な解法習得と正確な計算力が求められます。",
    detail: "微積・確率・数列・ベクトル・複素数が頻出。標準問題を確実に解き切る力が合格の前提で、難問よりも典型問題への対応力の方が重要。近年は思考力を問う問題が増えており、問題の本質を理解した上で柔軟に対応する力も求められる。計算の正確性とスピードの両立を意識した練習が必要。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "標準〜やや難レベルの出題。基本法則の正確な理解と典型問題への対応力が問われます。",
    detail: "力学・電磁気・波動・熱力学から幅広く出題。近年は単純な公式適用より、現象の本質的な理解を問う問題が増加傾向。実験・グラフ読み取り問題も出題される。基礎公式の意味を深く理解した上で、複合的な問題にも対応できる力を養うことが合格への近道。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "標準レベルを中心とした出題。各分野の基礎知識を網羅し、計算問題の精度を上げることが重要です。",
    detail: "理論・有機・無機化学から均等に出題される。有機化学の構造決定・理論化学の計算問題が頻出。知識の抜けがないよう全分野を仕上げることが前提で、計算問題は複数ステップの処理が求められる。近年は思考力を問う問題も増えており、単純な暗記より理解を重視した学習が有効。",
  },
  {
    name: "小論文",
    level: "★★★★☆",
    body: "医療倫理・社会問題・医師としての役割に関するテーマが出題されます。論理的な構成と多面的な視点が評価されます。",
    detail: "600〜800字程度の論述。医療倫理（先端医療・AI診断・臓器移植）・医師と患者の関係・医療格差などが頻出テーマ。自分の立場を明確にしながら根拠を示して論述する力が問われる。医療ニュースの継続的なインプットと、自分の意見を文章化する習慣が差をつける。",
  },
  {
    name: "面接",
    level: "★★★★☆",
    body: "個人面接形式が中心。志望動機・医師としての適性・社会問題への見解が問われます。",
    detail: "「なぜ医師になりたいか」「なぜ東京医科大学か」が核心的な質問。東京医科大学の「誠実・親切・研究心」という建学精神への共感を示すことが重要。近年は医療倫理・社会問題（AI医療・地域医療・高齢化）についての見解を問う質問も増加。事前に医療トピックについて自分の考えを整理しておくことが必要。",
  },
];

const strategies = [
  {
    step: "01",
    title: "全科目を標準レベルで確実に仕上げる",
    body: "東京医科大学は全科目バランス型の出題のため、どの科目も標準問題を確実に解ける状態にすることが最重要戦略です。1科目に飛び抜けた強みがあっても、他科目が弱ければ合格は難しい。英語・数学・理科2科目の全てを標準レベル以上に引き上げることを最優先にしましょう。",
  },
  {
    step: "02",
    title: "英語の読解スピードを優先して鍛える",
    body: "東京医科大学の英語は近年読解量が増加傾向にあります。時間内に全問を処理するためには、1分90語以上の読解速度が目標ラインです。毎日の長文読解で時間計測を習慣化し、スピードと正確性を同時に高める訓練を高3春から本格的に開始しましょう。",
  },
  {
    step: "03",
    title: "理科は典型問題の反復演習を徹底する",
    body: "東京医科大学の物理・化学は典型問題への対応力が合格の鍵です。問題パターンを幅広くインプットし、初見の問題でも既知のパターンに当てはめて解ける状態を作ることが重要です。難問より典型問題の反復演習を優先し、解法の引き出しを増やすことに集中しましょう。",
  },
  {
    step: "04",
    title: "近年増加の思考力問題に対応する",
    body: "東京医科大学は近年思考力重視の出題に移行しつつあります。単純な公式暗記・知識の再現だけでは解けない問題が増えています。各科目で「なぜその答えになるか」を説明できるレベルまで理解することで、思考力問題にも対応できる実力を養いましょう。",
  },
  {
    step: "05",
    title: "過去問で出題傾向の変化を把握して対策する",
    body: "東京医科大学の過去問は近年の出題傾向の変化（思考力重視化）を把握するために重要です。古い年度と最近の年度を比較しながら、どの形式の問題が増えているかを分析し、その傾向に合わせた対策を行いましょう。過去問演習は高3夏終わりから本格的に開始するのが理想です。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "全科目の基礎を均等に固める",
    tasks: [
      "英語：単語・文法・構文の基礎を徹底。毎日30分の英文読解習慣をつける",
      "数学：青チャートレベルの問題を完全理解。典型問題の解法を体系的に整理",
      "理科：教科書の原理・定義を正確に理解。全分野の基礎を均等に仕上げる",
      "医療への関心：医療ニュース・倫理テーマを定期的にインプットする",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "標準問題の完全習得と読解スピード強化",
    tasks: [
      "英語：長文読解の時間計測トレーニング開始。目標読解速度1分90語",
      "数学：標準問題を制限時間内に確実に解く練習。ミスパターンの分析",
      "理科：典型問題の反復演習を本格開始。解法のパターン整理",
      "小論文：医療倫理テーマのインプット開始。週1本の小論文作成",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "実戦レベルへの引き上げ",
    tasks: [
      "英語：長文読解スピードと精度を同時に高める演習を継続",
      "数学・理科：やや難レベルの問題演習。思考力問題への対応力を養う",
      "面接：「なぜ医師か」「なぜ東京医科大学か」の回答を深掘りして言語化",
      "小論文：週2本以上の執筆と添削を継続",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "東京医科大学過去問演習（5〜10年分）を時間計測で実施",
      "近年の出題傾向変化を過去問で把握し、思考力問題への対応力を強化",
      "面接模擬練習を複数回実施。東京医科大学の理念を踏まえた回答の磨き込み",
      "他の私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    tasks: [
      "全科目の標準問題を毎日解いて本番感覚を維持する",
      "過去問の最終確認と弱点の最終チェック",
      "面接の最終模擬練習と当日のシミュレーション",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const faqs = [
  {
    q: "東京医科大学の難易度はどのくらいですか？",
    a: "全体的に標準〜やや難レベルの出題で、私立医学部の中では中堅〜上位に位置します。全科目をバランスよく仕上げることが最重要で、特定科目に偏った対策は通用しません。近年は思考力を問う問題が増加しており、単純な暗記学習だけでは対応が難しくなっています。",
  },
  {
    q: "東京医科大学に受かるには何科目が重要ですか？",
    a: "全科目バランスよく仕上げることが最重要です。英語・数学・物理・化学の4科目全てを標準レベル以上に引き上げることが合格の前提条件です。その上で小論文・面接での評価も重要で、全方位的な対策が必要な大学です。",
  },
  {
    q: "近年の出題傾向の変化について教えてください。",
    a: "近年は思考力・応用力を問う問題が増加傾向にあります。単純な公式暗記や知識の再現だけでは解けない問題が増えており、各科目で「なぜそうなるか」を説明できるレベルの理解が必要です。過去問を分析して最新傾向を把握した上で対策することが重要です。",
  },
  {
    q: "東京医科大学対策はいつから始めればいいですか？",
    a: "全科目をバランスよく仕上げる必要があるため、高2以前からの取り組みが理想です。高3から始める場合は、全科目の基礎確認と弱点補強を最優先にしながら、演習を並行して進める計画が必要です。まずは無料相談で現状をお聞かせください。",
  },
  {
    q: "面接で「東京医科大学の理念」についての質問はありますか？",
    a: "東京医科大学の「誠実・親切・研究心」という建学精神を踏まえた質問は出ることがあります。「なぜ東京医科大学か」という問いへの回答に、この理念への共感を自分の言葉で盛り込むことが高評価につながります。面接前に大学の理念・特色・附属病院の特徴を調べておきましょう。",
  },
  {
    q: "東京医科大学と他の私立医学部を並行して受験できますか？",
    a: "はい。東京医科大学のバランス型対策は他の私立医学部受験にも活かせます。受験校の傾向を踏まえた効率的な並行対策プランをご提案します。",
  },
];

export default function TokyoIkaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            東京医科大学
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            東京医科大学合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            バランス型出題と思考力重視の傾向を制する対策を現役生が解説
          </p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            東京医科大学の入試概要と特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              東京医科大学の一般選抜は、1次試験（英語・数学・理科2科目）と2次試験（小論文・面接）の二段階選抜です。1次試験は全体的に標準〜やや難レベルで、全科目をバランスよく仕上げることが合格の条件となります。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              近年は思考力・応用力を問う問題が増加傾向にあり、単純な暗記学習だけでは対応が難しくなっています。標準問題を確実に取りながら、思考力問題にも対応できる実力を養うことが現在の東京医科大学合格の鍵です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "約80名" },
                { label: "競争倍率", value: "5〜8倍" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "2次試験", value: "小論文・面接" },
              ].map((item) => (
                <div key={item.label} className="text-center p-3 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <p className="text-xs mb-1" style={{ color: "#c9922a" }}>{item.label}</p>
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 合格戦略 */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            東京医科大学に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            バランス型出題と思考力重視の変化に対応するために、合否を分ける戦略を解説します。
          </p>
          <div className="space-y-6">
            {strategies.map((item) => (
              <div key={item.step} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#c9922a" }}>
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 科目別対策 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            科目別対策のポイント
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            各科目の出題傾向と具体的な対策を解説します。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-base" style={{ color: "#c9922a" }}>{item.name}</p>
                  <p className="text-xs" style={{ color: "#c9922a" }}>{item.level}</p>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#3d3d3d" }}>{item.body}</p>
                <p className="text-xs leading-relaxed p-3 rounded-lg" style={{ color: "#6b7280", backgroundColor: "#f7f5f0" }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* スケジュール */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            東京医科大学合格までのスケジュール
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            いつ、何を、どのくらいやるべきか。合格に向けた学習ロードマップを公開します。
          </p>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-4 px-6 py-4" style={{ backgroundColor: i % 2 === 0 ? "#0c1a33" : "#1a3a72" }}>
                  <span className="text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>{item.period}</span>
                  <span className="font-bold text-sm text-white">{item.title}</span>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {item.tasks.map((task, j) => (
                      <li key={j} className="flex gap-3 text-sm" style={{ color: "#6b7280" }}>
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: "#c9922a" }} />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
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

      {/* CTA */}
      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            東京医科大学合格への道筋を、一緒に考えます。
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
  );
}
