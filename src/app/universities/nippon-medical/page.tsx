import Link from "next/link";

export const metadata = {
  title: "日本医科大学に受かるには｜入試対策・合格戦略を現役生が解説 | Medvance",
  description:
    "日本医科大学の入試対策を現役慶應医学部生が解説。難易度の高い数学・理科の記述力強化から2回の面接対策まで、合格への具体的な戦略を紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★★☆",
    body: "難易度が高く、医学系の専門的な長文が出題されます。精読力と英作文の論述力が同時に問われます。",
    detail: "医療・生命科学・倫理系テーマの長文読解と英作文が中心。長文は内容が専門的で、論旨を正確に把握する精読力が必要。英作文は自分の考えを英語で論理的に述べる形式で、構成力・語彙力・文法力の総合力が問われる。1分90語以上の読解速度を目標に訓練する。",
  },
  {
    name: "数学",
    level: "★★★★★",
    body: "記述式の難問が多く、思考力と論証力の両方が問われます。解法の根拠を言語化できる力が必要です。",
    detail: "大問4〜5題・記述式。微積・複素数・確率・数列・ベクトルが頻出。答えが正しくても論証が不十分だと大幅に減点される。解答プロセスを丁寧に記述しながら、採点者が読んで理解できる答案を作る訓練が不可欠。難問への対応と部分点獲得の両立が合格の鍵。",
  },
  {
    name: "物理",
    level: "★★★★☆",
    body: "記述式が多く、物理の本質的な理解を問う問題が中心。現象のモデル化と論理的な記述力が求められます。",
    detail: "力学・電磁気・波動・熱力学から幅広く出題。実験系の問題や複合的な問題も多い。公式の当てはめだけでは解けない問題が多く、物理現象を自分でモデル化して記述する力が必要。記述式のため、図や言葉を使って解答の根拠を明確に示すことが重要。",
  },
  {
    name: "化学",
    level: "★★★★☆",
    body: "有機化学の比重が高く、構造決定問題の難度が際立ちます。多段階の論理的思考と正確な計算が求められます。",
    detail: "有機・無機・理論化学から出題されるが、有機化学の構造決定問題の難度が特に高い。反応機構を論理的に組み立てる力が必要で、思考のプロセスを記述式で示すことが求められる。計算問題も複数ステップになることが多く、途中式を丁寧に書く習慣が高得点につながる。",
  },
  {
    name: "小論文",
    level: "★★★★☆",
    body: "医療倫理・社会問題・医師としての姿勢に関するテーマが出題されます。論理的な展開と深い考察が必要です。",
    detail: "600〜800字程度の論述。医療倫理（終末期医療・臓器移植・遺伝子治療）・医師と患者の関係・医療格差などが頻出。自分なりの見解を論理的に述べる力が問われる。医療ニュースを日常的にインプットし、多角的な視点を持つことが差をつけるポイント。",
  },
  {
    name: "面接",
    level: "★★★★★",
    body: "面接が2回実施される特徴があります。複数回の面接で医師としての適性・一貫性・思考の深さを総合的に評価されます。",
    detail: "日医では面接が2回行われることが特徴。1回目と2回目で異なる面接官が評価するため、回答の一貫性が重要。「なぜ医師を目指すか」「なぜ日医か」という志望動機の深掘りに加え、医療倫理・社会問題への見解も問われる。2回分の練習を想定した準備が必要。",
  },
];

const strategies = [
  {
    step: "01",
    title: "数学・理科の記述力を最重点で強化する",
    body: "日医の最大の特徴は数学・理科の記述式難問です。「答えを出す力」だけでなく「解法の根拠を言語化して記述する力」が合否を分けます。高3春から記述式答案の作成練習を毎日行い、採点者が読んで理解できる答案を作れるレベルを目指しましょう。解いた後に解答プロセスを言語化する習慣が最重要です。",
  },
  {
    step: "02",
    title: "英語は医学系長文の精読と英作文を徹底する",
    body: "日医の英語は量より質で、医学系テーマの専門的な長文を正確に読む精読力が求められます。速読より精読を優先しながら、英作文では自分の考えを英語で論理的に述べる力も同時に鍛えましょう。週2回以上の英作文練習と添削が英語力向上の最短ルートです。",
  },
  {
    step: "03",
    title: "2回の面接を想定した一貫性のある準備をする",
    body: "日医の面接は2回実施されます。1回目と2回目で同じ人物として一貫した回答ができることが重要です。「なぜ医師か」「なぜ日医か」という核心的な質問への回答を深く作り込み、どの面接官に問われても一貫した考えを述べられる準備をしましょう。模擬面接は最低6回以上行うことを推奨します。",
  },
  {
    step: "04",
    title: "有機化学の構造決定問題を反復演習する",
    body: "日医の化学で最も難しい有機化学の構造決定問題は、解法の論理的なプロセスを組み立てる力が必要です。問題を見てすぐに解法の筋道が見えるようになるまで、様々なパターンの構造決定問題を繰り返し解きましょう。模範解答と自分の解答を比較して思考プロセスの差を分析することが上達の鍵です。",
  },
  {
    step: "05",
    title: "過去問演習は記述答案の質を重視して行う",
    body: "日医の過去問演習では「答えが合っているか」より「記述の質はどうか」を優先して分析してください。過去問を解いた後に、模範解答と自分の答案の記述内容を詳細に比較し、何が足りなかったかを言語化することが合格への近道です。過去問演習は高3夏終わりから本格的に開始しましょう。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "記述式思考の基礎を早期に構築する",
    tasks: [
      "英語：単語・文法・構文の基礎を徹底。医療系英語への早期接触",
      "数学：青チャートレベルを完全理解。解法の言語化を意識した答案作成を早期から習慣化",
      "理科：教科書の原理・定義を自分の言葉で説明できるレベルまで理解する",
      "医療への関心：医療ニュース・倫理テーマを定期的にインプットする習慣をつける",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "記述力・論証力の本格強化",
    tasks: [
      "英語：医学系英語長文の精読練習開始。英作文の基礎練習も並行して実施",
      "数学：記述式問題の答案作成訓練を本格開始。解法プロセスの言語化を徹底",
      "理科：有機化学の構造決定・物理の記述式問題に特化した演習開始",
      "小論文：医療倫理テーマのインプット開始。週1本の小論文作成",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "実戦レベルへの引き上げ",
    tasks: [
      "英語：精読＋英作文の演習を強化。医学系テーマの長文を毎週解く",
      "数学・理科：難問演習と記述式答案の質を高める練習",
      "面接：志望動機を深掘りし、「なぜ日医か」の核心的な回答を言語化",
      "小論文：週2本以上の執筆と添削。医療倫理テーマを中心に",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "日本医科大学過去問演習（5〜10年分）を時間計測で実施",
      "記述答案の質を過去問の模範解答と比較分析して改善",
      "面接模擬練習を最低6回実施。2回面接を想定した一貫性の確認",
      "他の私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    tasks: [
      "数学・理科の記述式問題を毎日1問以上解き続ける",
      "英語の精読・英作文を毎日維持する",
      "面接の最終模擬練習。2回面接に備えた一貫性の最終確認",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const faqs = [
  {
    q: "日本医科大学の数学はどのくらい難しいですか？",
    a: "私立医学部の中でも難易度が高く、記述式問題が中心です。答えを出すだけでなく、解法の根拠を言語化して記述する力が求められます。高3春から記述式答案の作成練習を毎日行うことが合格への最短ルートです。",
  },
  {
    q: "面接が2回ある理由は何ですか？どう対策すればいいですか？",
    a: "日医では面接を2回行うことで、受験生の医師としての適性・一貫性・思考の深さを多面的に評価しています。対策として重要なのは、1回目と2回目で一貫した回答ができることです。「なぜ医師か」「なぜ日医か」という核心的な問いへの深い回答を準備し、模擬面接を最低6回以上行うことを推奨します。",
  },
  {
    q: "日医の有機化学の構造決定が苦手です。どう対策すればいいですか？",
    a: "構造決定は解法の論理的なプロセスを組み立てる力が必要です。まず解法の体系を理解してから、様々なパターンの問題を繰り返し解くことが有効です。模範解答との比較で自分の思考プロセスの弱点を特定し、そこを集中的に補強しましょう。",
  },
  {
    q: "日医対策はいつから始めればいいですか？",
    a: "数学・理科の記述力を高めるには時間がかかるため、高2以前からの取り組みが理想です。高3から始める場合は、数学・理科の記述式演習を最優先にしながら英語も並行して強化するプランが必要です。まずは無料相談で現状をお聞かせください。",
  },
  {
    q: "日医は理科で物理と化学の両方が必要ですか？",
    a: "はい、日医の理科は物理・化学の2科目受験です。両科目とも記述式の難問が出題されるため、どちらか一方に偏らず、両方の記述力を同時に高める対策が必要です。",
  },
  {
    q: "日医と他の私立医学部を並行して受験できますか？",
    a: "はい。日医の記述式対策は他の私立医学部の実力向上にも直結します。受験スケジュールと各校の傾向を踏まえた効率的な並行対策プランをご提案します。",
  },
];

export default function NipponMedicalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            日本医科大学
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            日本医科大学合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            記述式難問と2回面接を制する対策を現役生が解説
          </p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            日本医科大学の入試概要と特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              日本医科大学の一般選抜は、1次試験（英語・数学・理科2科目）と2次試験（小論文・面接）の二段階選抜です。1次試験では数学・理科の難易度が特に高く、記述式の問題で解法の論証力が厳しく評価されます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              2次試験の面接は複数回実施されるのが特徴で、医師としての適性・志望動機の一貫性・倫理観が多角的に評価されます。学力と人物評価の両面で高いレベルが求められる難関校です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "約60名" },
                { label: "競争倍率", value: "6〜9倍" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "2次試験", value: "小論文・面接（複数回）" },
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
            日本医科大学に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            記述式難問と複数回面接を突破するために、合否を分ける戦略を解説します。
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
            日本医科大学合格までのスケジュール
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
            日本医科大学合格への道筋を、一緒に考えます。
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
