import Link from "next/link";

export const metadata = {
  title: "昭和大学医学部に受かるには｜入試対策・合格戦略を現役生が解説 | Medvance",
  description:
    "昭和大学医学部の入試対策を現役慶應医学部生が解説。基礎力の完成と正確性を重視した対策から面接準備まで、合格への具体的な戦略を紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "標準レベルの出題が中心。長文読解の正確な内容把握と、語彙・文法の基礎力が合否を分けます。",
    detail: "長文読解2〜3題と文法・語彙問題が中心構成。医療・科学系テーマも出題されるが内容は比較的平易。正確に読む力と語彙の幅広さが得点に直結する。標準問題を確実に取るためには基礎単語・文法の網羅が前提。読解速度は1分80語以上を目安に練習する。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "基礎〜標準レベルの出題。典型問題の解法を完全に習得し、計算ミスゼロを目指すことが重要です。",
    detail: "微積・確率・数列・ベクトルが頻出。難問よりも標準問題の確実な正答が求められる。計算量が多い問題もあるため、計算の正確性とスピードの両立が合格の鍵。青チャートレベルの問題を時間内に正確に解き切れる状態にすることが目標。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "基礎〜標準レベルの出題。基本法則の正確な理解と典型問題への対応力が求められます。",
    detail: "力学・電磁気・波動・熱力学から幅広く出題。基本法則を正確に理解して典型問題を確実に解く力が重要。難問や応用問題よりも、標準問題での失点をなくすことが合格の前提条件。物理の基礎公式の意味を正確に理解し、適切な状況で使える力を養う。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "基礎〜標準レベルの出題。各分野の基礎知識を網羅し、計算問題の正確性を高めることが鍵です。",
    detail: "理論・有機・無機化学から均等に出題される。各分野の基礎知識の抜けがないことが前提で、計算問題の正確性が得点を左右する。有機化学の基本反応・理論化学の計算は特に重点的に仕上げること。標準問題を確実に解き切るレベルが合格ラインの目安。",
  },
  {
    name: "小論文",
    level: "★★★☆☆",
    body: "医療系テーマが出題されます。論理的な構成で自分の意見を明確に述べる力が問われます。",
    detail: "500〜700字程度の論述。医療倫理・医師の役割・社会問題が出題テーマの中心。明確な主張と根拠を論理的に展開する力が評価される。過激な主張は避け、バランスのとれた視点で論述することが高評価につながる。",
  },
  {
    name: "面接",
    level: "★★★★☆",
    body: "個人面接形式が中心。志望動機・医師への適性・コミュニケーション能力が問われます。",
    detail: "個人面接で「なぜ医師になりたいか」「なぜ昭和大学か」が核心的な質問。昭和大学の「チーム医療」「患者中心の医療」という理念への共感を示すことが重要。受験者数が多いため、初見でも安心して話せる準備が必要。模擬面接を通じて、質問に対してすぐに自分の言葉で答えられる力を養う。",
  },
];

const strategies = [
  {
    step: "01",
    title: "基礎を完璧に固めることを最優先にする",
    body: "昭和大学の出題は基礎〜標準レベルが中心のため、難問への対応より基礎の完璧な習得が最重要戦略です。英語・数学・理科の全科目で「基礎問題は全て確実に解ける」状態を作ってから、応用問題に取り組む順序を守りましょう。基礎に抜けがある状態で難問演習をしても点数は伸びません。",
  },
  {
    step: "02",
    title: "標準問題を落とさない正確性を磨く",
    body: "受験者数が多い昭和大学では、標準問題での失点が合否を直接的に左右します。「解けるはずの問題でミスをする」パターンを徹底的になくすことが合格への最短ルートです。問題演習後の見直し時間を必ず確保し、ミスのパターンを記録して繰り返さない訓練を積みましょう。",
  },
  {
    step: "03",
    title: "計算の正確性とスピードを同時に高める",
    body: "昭和大学の数学・理科は計算量が多い問題が出題されます。正確に・速く計算できる力が合格に直結します。毎日計算練習を欠かさず行い、制限時間内に全問を処理できるペース配分を身につけましょう。本番での時間切れを防ぐための計算トレーニングを高3春から継続してください。",
  },
  {
    step: "04",
    title: "昭和大学の「チーム医療」理念を面接に活かす",
    body: "昭和大学は「チーム医療」「患者中心の医療」を重視する大学です。面接では「なぜ昭和か」という問いに対して、この理念への共感を自分の体験と結びつけて語れる準備が必要です。他の医学部との違いを明確に認識した上で、昭和を選ぶ理由を言語化しておきましょう。",
  },
  {
    step: "05",
    title: "過去問で出題形式・難易度に慣れる",
    body: "昭和大学の過去問は出題形式が安定しているため、過去問演習を通じて本番の形式・時間配分に慣れることが重要です。過去問を5年以上解いて頻出分野を把握し、その分野を重点的に補強しましょう。過去問演習は高3の夏終わりから本格的に開始するのが理想です。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "全科目の基礎を徹底的に固める",
    tasks: [
      "英語：単語・文法・構文の基礎を徹底。読解習慣を毎日継続する",
      "数学：青チャートレベルの問題を完全理解。計算ミスゼロを目標にする",
      "理科：教科書の基礎概念を正確に理解。全分野の抜けをなくす",
      "医療への関心：医療ニュース・書籍を定期的にインプットする習慣をつける",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "標準問題の完全習得と演習強化",
    tasks: [
      "英語：標準レベルの長文読解演習を本格開始。語彙の最終チェック",
      "数学：標準問題を制限時間内に確実に解く練習。ミスのパターンを記録・分析",
      "理科：標準問題の演習を強化。各分野の基礎知識の網羅を確認",
      "小論文：医療倫理テーマのインプット開始。週1本の小論文作成",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "実戦レベルへの引き上げ",
    tasks: [
      "英語・数学・理科：時間計測での演習を習慣化。本番ペースに慣れる",
      "計算スピードと正確性を同時に高める計算練習を毎日継続",
      "面接：「なぜ医師か」「なぜ昭和か」の回答を深掘りして言語化",
      "小論文：週2本以上の執筆と添削を継続",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "昭和大学医学部過去問演習（5〜10年分）を時間計測で実施",
      "全科目で標準問題の失点ゼロを目標にした弱点補強",
      "面接模擬練習を複数回実施。昭和大学の理念を踏まえた回答の磨き込み",
      "他の私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    tasks: [
      "全科目の標準問題を毎日解いて感覚を維持する",
      "過去問の最終確認と弱点の最終チェック",
      "面接の最終模擬練習。当日のシミュレーション",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const faqs = [
  {
    q: "昭和大学医学部の難易度はどのくらいですか？",
    a: "私立医学部の中では基礎〜標準レベルの出題が中心です。ただし受験者数が多く競争倍率が高いため、標準問題での失点をなくすことが合格の前提条件です。「解けるはずの問題を確実に取る」力の方が、難問への対応より重要な大学です。",
  },
  {
    q: "基礎が固まっていない状態で昭和大学を目指せますか？",
    a: "基礎が固まっていない状態では合格は難しいですが、今から正しい方法で基礎を固めれば間に合います。現状の学力を診断し、どの科目のどの分野に抜けがあるかを特定してから、優先順位をつけて補強するプランを立てましょう。まずは無料相談でご相談ください。",
  },
  {
    q: "昭和大学の面接ではどんなことが聞かれますか？",
    a: "「なぜ医師になりたいか」「なぜ昭和大学か」が核心的な質問です。昭和大学の「チーム医療」「患者中心の医療」という理念への共感を自分の体験と結びつけて語れることが高評価につながります。準備なしの即興対応では差がつかないため、事前の模擬練習が重要です。",
  },
  {
    q: "昭和大学対策はいつから始めればいいですか？",
    a: "早ければ早いほど有利ですが、高3からでも基礎が固まっていれば合格の可能性があります。特に高3の春から全科目の標準問題を確実に解ける状態にする集中対策が有効です。現状の学力をヒアリングして最適なプランをご提案します。",
  },
  {
    q: "昭和大学と他の私立医学部を並行して受験できますか？",
    a: "はい。昭和大学の基礎力重視の対策は他の私立医学部受験の土台にもなります。各大学の傾向を踏まえた効率的な並行対策プランをご提案します。",
  },
  {
    q: "昭和大学の合格最低点はどのくらいですか？",
    a: "年度によって異なりますが、受験者数が多く競争が激しいため高い得点率が必要です。標準問題を確実に取りながら、面接・小論文でも平均以上の評価を得ることが合格の条件です。Medvanceでは各科目の目標点数設定も含めた具体的な対策プランをご提案しています。",
  },
];

export default function ShowaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            昭和大学医学部
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            昭和大学医学部合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            基礎完成と正確性を武器にする対策を現役生が解説
          </p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            昭和大学医学部の入試概要と特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              昭和大学医学部の一般選抜は、1次試験（英語・数学・理科2科目）と2次試験（面接）の二段階選抜です。1次試験は基礎〜標準レベルの出題が中心で、全ての受験生が解ける問題を落とさないことが合格の前提条件となります。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              受験者数が多く競争率が高いため、標準問題での失点を限りなくゼロに近づけることと、計算の正確性・スピードが合否を直接左右します。基礎力の完成度と正確性が最も問われる医学部の一つです。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "約100名" },
                { label: "競争倍率", value: "4〜6倍" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "2次試験", value: "面接" },
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
            昭和大学医学部に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            基礎完成と正確性で高得点を実現するために、合否を分ける戦略を解説します。
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
            昭和大学医学部合格までのスケジュール
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
            昭和大学医学部合格への道筋を、一緒に考えます。
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
