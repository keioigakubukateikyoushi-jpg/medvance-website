import Link from "next/link";

export const metadata = {
  title: "東京慈恵会医科大学に受かるには｜入試対策・合格戦略を現役生が解説 | Medvance",
  description:
    "東京慈恵会医科大学の入試対策を現役慶應医学部生が解説。英語の医学系長文・英作文対策から面接の「慈恵の医師像」まで、合格への具体的な戦略を紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★★★",
    body: "私立医学部トップクラスの難易度。医学系長文の読解と英作文が出題され、スピードと内容理解の両立が求められます。",
    detail: "長文読解2〜3題＋英作文が基本構成。医療・生命科学系テーマの英文が頻出で、専門用語を文脈から推測しながら正確に読む力が必要。英作文は100〜150字程度の記述で、論理的な構成と適切な語彙力が問われる。読解速度は1分100語以上を目標に訓練すること。",
  },
  {
    name: "数学",
    level: "★★★★☆",
    body: "標準〜難レベルの問題が中心。記述式の出題が多く、解法の根拠を丁寧に示す必要があります。",
    detail: "微積・確率・数列・ベクトルが頻出。記述式解答では答えだけでなく、論証の筋道が正確であることが評価される。難問での部分点獲得を意識した答案作成の練習が重要。計算ミスを防ぐ正確性も合否を左右する。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "標準レベルを中心とした出題。基本原理の理解と典型問題の解法習得が鍵です。",
    detail: "力学・電磁気・波動・熱力学から幅広く出題。典型問題の解法を確実にマスターしつつ、実験やグラフ読み取り問題にも対応できる力を養う。公式の暗記ではなく、現象の本質を理解することで応用問題にも対応できる。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学からバランスよく出題。各分野の基礎を固め、計算問題の精度を上げることが重要です。",
    detail: "理論化学の計算・有機化学の構造決定・無機化学の知識問題がバランスよく出題される。医療系のテーマが扱われることもあり、生化学的な背景知識があると差がつく場面がある。計算は複数ステップになる問題が多く、途中ミスをなくすための訓練が必要。",
  },
  {
    name: "小論文",
    level: "★★★★☆",
    body: "医療倫理・医師としての役割・社会問題が頻出テーマ。慈恵の建学精神を意識した論述が求められます。",
    detail: "600〜800字程度の論述。医療倫理・地域医療・高齢化社会・患者との関係など、現代医療の課題が中心テーマ。単なる意見表明ではなく、「慈恵の医師像（病気を診るのではなく病人を診る）」を踏まえた考察が評価される。医療ニュースの継続的なインプットが欠かせない。",
  },
  {
    name: "面接",
    level: "★★★★★",
    body: "「なぜ慈恵か」が最重要質問。慈恵の建学理念への深い共感と、医師としての姿勢を問う質問が多い傾向です。",
    detail: "個人面接形式が主流。「病気を診るのではなく病人を診る」という慈恵の医師像について深く理解・共感していることが評価のポイント。「なぜ慈恵でなければならないか」という問いへの明確な回答が必要。志望動機を掘り下げられることを想定し、具体的なエピソードを準備すること。",
  },
];

const strategies = [
  {
    step: "01",
    title: "英語の医学系長文読解を最優先で対策する",
    body: "慈恵の英語は私立医学部の中でも最難関レベルです。医療・生命科学系の専門用語が含まれた長文を正確かつ素早く読む力を養うことが最優先課題です。毎日医学系英語の長文を時間計測しながら読み、週1回は英作文の練習を行いましょう。英語の仕上がりが慈恵合格の最大の鍵です。",
  },
  {
    step: "02",
    title: "「慈恵の医師像」を深く理解して面接準備に活かす",
    body: "慈恵の建学精神「病気を診るのではなく病人を診る」は、面接で必ず意識されるテーマです。単なる暗記ではなく、自分の体験や考えと結びつけて語れるレベルまで落とし込むことが必要です。「なぜ慈恵か」という問いに対して、他の医学部との違いを踏まえた答えを用意しておきましょう。",
  },
  {
    step: "03",
    title: "数学の記述答案を磨く",
    body: "慈恵の数学は記述式が中心のため、答えが正しくても論証が不十分だと減点されます。解法の根拠を言語化しながら答案を作る練習を高3春から始めましょう。難問は完答を目指すより、解ける部分の部分点を確実に取る戦略が有効です。",
  },
  {
    step: "04",
    title: "小論文は慈恵特有のテーマで練習する",
    body: "慈恵の小論文は医療倫理・患者中心の医療など、慈恵の理念に沿ったテーマが頻出です。一般的な小論文対策に加え、慈恵の医師像に関連したテーマで練習を重ねることが差をつけるポイントです。夏休みから取り組み始め、最低10本以上の小論文を書いて添削を受けましょう。",
  },
  {
    step: "05",
    title: "過去問は5年分以上を徹底分析する",
    body: "慈恵の過去問は出題形式・テーマに一定のパターンがあります。英語の読解テーマ・数学の頻出分野・小論文のテーマを過去問から把握し、頻出パターンへの対応力を高めましょう。過去問演習は高3夏終わりから始め、秋以降は本番形式で時間を計って解く練習を繰り返してください。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "英語と理系科目の基礎を固める",
    tasks: [
      "英語：単語・文法・構文の基礎を徹底。医療系英語にも少しずつ触れる",
      "数学：青チャートレベルを完全理解。記述式解答の書き方を早期から意識する",
      "理科：教科書の原理・定義を自分の言葉で説明できるレベルまで理解する",
      "医師像への理解：慈恵の建学精神・医療ニュースを定期的に読む習慣をつける",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "英語の医学系長文読解強化と数学記述訓練",
    tasks: [
      "英語：医学系英語長文の読解練習を開始。時間計測を習慣化する",
      "英語：英作文の基礎練習開始。構成の組み立てを意識する",
      "数学：記述式問題の答案作成訓練。解法の言語化を意識する",
      "小論文：慈恵の医師像を中心に医療テーマのインプット開始",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "実戦レベルへの引き上げ",
    tasks: [
      "英語：医学系長文の速読練習を強化。英作文の本格演習",
      "数学・理科：過去問レベルの難問演習に慣れる",
      "小論文：週2本以上の小論文執筆と添削。慈恵特有テーマを中心に",
      "面接：志望動機・慈恵の医師像について自分の言葉で語る練習開始",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "慈恵医科大学過去問演習（5〜10年分）を時間計測で実施",
      "英語の弱点分野（読解スピード・英作文）を集中的に補強",
      "面接模擬練習を複数回実施。「なぜ慈恵か」の回答を磨く",
      "他の私立医学部との受験スケジュール管理と並行対策",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    tasks: [
      "過去問の最終確認と英語・数学の読み書きを毎日維持",
      "面接の最終模擬練習。慈恵特有の質問パターンの最終確認",
      "小論文の頻出テーマを復習し、論述の型を体に染み込ませる",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const faqs = [
  {
    q: "慈恵医大の英語はどのくらい難しいですか？",
    a: "私立医学部の中でもトップクラスの難易度です。医学系の専門的な内容を含む長文と英作文が出題されます。早期から医療系英語に触れる習慣をつけ、読解速度と英作文力を同時に鍛えることが合格への最短ルートです。",
  },
  {
    q: "「慈恵の医師像」とは何ですか？面接でどう使えばいいですか？",
    a: "「病気を診るのではなく病人を診る」という患者中心の医療を重視する慈恵の建学精神です。面接では「なぜ慈恵か」という質問に対して、この理念と自分の考えを結びつけて答えることが高評価につながります。単なる暗記ではなく、自分の体験や志望動機と有機的に結びつけた回答を準備しましょう。",
  },
  {
    q: "慈恵医大に受かるには何科目対策が必要ですか？",
    a: "1次試験は英語・数学・理科2科目（物理・化学から選択）、2次試験は小論文・面接です。特に英語と面接の配点・難易度が高いため、この2科目を重点的に対策することが重要です。",
  },
  {
    q: "慈恵医大対策はいつから始めればいいですか？",
    a: "英語の実力を高めるには時間がかかるため、高2以前からの取り組みが理想的です。高3から始める場合は、英語を最優先にしながら数学・理科の記述力も同時並行で鍛えるプランが必要です。まずは無料相談で現状をお聞かせください。",
  },
  {
    q: "小論文が苦手でも慈恵医大を受験できますか？",
    a: "はい。小論文は練習量と添削によって確実に伸びる科目です。慈恵の小論文に頻出の医療倫理・患者中心医療テーマに慣れながら、論述の型を習得することで十分に戦えるレベルになります。Medvanceでは小論文添削も含めた一貫した指導を行っています。",
  },
  {
    q: "慈恵医大と他の私立医学部を並行して受験できますか？",
    a: "はい、可能です。慈恵の英語重視の対策は他の私立医学部の英語力向上にも直結します。受験校の日程・傾向を踏まえた効率的な並行対策プランをご提案します。",
  },
];

export default function JikeiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            東京慈恵会医科大学
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            慈恵医大合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            英語最難関・面接重視の慈恵を突破する対策を現役生が解説
          </p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            東京慈恵会医科大学の入試概要と特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              東京慈恵会医科大学の一般選抜は、1次試験（英語・数学・理科2科目）と2次試験（小論文・面接）の二段階選抜です。1次試験では特に英語の難度が高く、医学系長文読解と英作文への対応力が最大の関門となります。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              2次試験の面接では「病気を診るのではなく病人を診る」という慈恵の建学精神への共感が重視されます。「なぜ慈恵か」という問いに対して説得力ある回答を用意できているかどうかが、面接合否を分ける最大のポイントです。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "約80名" },
                { label: "競争倍率", value: "5〜7倍" },
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
            慈恵医大に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            英語最難関・面接重視の慈恵医大を突破するために、合否を分ける戦略を解説します。
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
            慈恵医大合格までのスケジュール
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
            慈恵医大合格への道筋を、一緒に考えます。
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
