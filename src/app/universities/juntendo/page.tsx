import Link from "next/link";

export const metadata = {
  title: "順天堂大学医学部に受かるには｜入試対策・合格戦略を現役生が解説 | Medvance",
  description:
    "順天堂大学医学部の入試対策を現役慶應医学部生が解説。バランス型出題への対応からMMI面接対策まで、合格への具体的な戦略を紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "標準〜やや難レベルの出題。長文読解中心で医療・科学系テーマが頻出です。全体的なバランスが問われます。",
    detail: "長文読解2〜3題が中心構成。医療・科学・社会問題系のテーマが多く、段落構造を把握しながら正確に読む力が必要。英文法・語彙問題も含まれるため、基礎の抜けがないことが前提。読解スピードは1分80〜100語が目安。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心。典型問題を確実に解く力と計算の正確性が合否を分けます。",
    detail: "微積・確率・数列・ベクトルが頻出。難問より標準問題を確実に解くことが重要で、計算ミスや方針ミスが命取りになる。記述式解答では論証の流れを整えることも意識する必要がある。青チャートレベルの問題を完全に習得することが目安。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "標準レベルの出題が中心。典型的な問題形式への対応力と正確な計算力が求められます。",
    detail: "力学・電磁気・波動が中心。基本法則の理解と典型問題の解法習得が優先。実験問題やグラフ読み取りも出題される。難問よりも標準問題を落とさないことが合格の前提で、丁寧な計算と物理的な思考の整理が大切。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "理論・有機・無機の各分野から幅広く出題。基礎知識の網羅性と計算精度が問われます。",
    detail: "各分野からバランスよく出題される。有機化学の構造決定・理論化学の計算問題が頻出。知識の抜けがないよう全分野を均等に仕上げることが重要。計算は複数ステップの問題も多く、途中式を丁寧に書く習慣が正答率を上げる。",
  },
  {
    name: "小論文",
    level: "★★★★☆",
    body: "医療倫理・社会問題・生命科学に関するテーマが出題されます。論理的な構成と多面的な考察が評価されます。",
    detail: "600〜800字程度の論述。医療倫理（インフォームドコンセント・安楽死・延命治療）や医師の社会的責任などが頻出テーマ。「賛否を述べよ」形式と「考察せよ」形式の両方に対応できる論述力が必要。医療ニュースの継続的なインプットが高い評価につながる。",
  },
  {
    name: "面接",
    level: "★★★★★",
    body: "MMI（Multiple Mini Interview）方式を採用。複数のステーションを回る形式で、瞬時の思考力・コミュニケーション力が問われます。",
    detail: "MMI形式では、複数のステーションで異なる問い（倫理的ジレンマ・ロールプレイ・グループ討議など）に次々と対応する必要がある。事前に「正解」を覚えても対応できないため、様々な場面での思考・対話の練習が必要。MMI特有の形式に慣れておくことが最重要。",
  },
];

const strategies = [
  {
    step: "01",
    title: "全科目をバランスよく仕上げる",
    body: "順天堂はどの科目も標準〜やや難レベルのため、1科目が飛び抜けて得意でも他科目が弱ければ合格できません。英語・数学・理科2科目の全てを均等に引き上げることが最重要戦略です。弱点科目を先に集中して補強してから、全科目のレベルを揃える計画を立てましょう。",
  },
  {
    step: "02",
    title: "MMI面接の形式に特化した対策をする",
    body: "順天堂のMMI面接は他の医学部の個人面接と根本的に異なります。「正解を覚える」対策では通用せず、様々な状況で即座に思考・発言・行動できる力が必要です。MMI特有のステーション形式（倫理的ジレンマ・ロールプレイ・グループ討議）の練習を複数回経験しておくことが不可欠です。",
  },
  {
    step: "03",
    title: "小論文は医療倫理テーマで繰り返し書く",
    body: "順天堂の小論文は医療倫理・患者と医師の関係性・社会問題がテーマの中心です。論述の型（問題提起→分析→自分の立場→結論）を習得し、インフォームドコンセント・安楽死・延命治療などの頻出テーマについて自分の意見を言語化しておきましょう。夏休みから週2本以上のペースで書くことが目安です。",
  },
  {
    step: "04",
    title: "標準問題を確実に取り切る訓練をする",
    body: "順天堂の合格点は高水準です。難問より標準問題を確実に解ける力の方が重要です。解ける問題でミスをしないこと、時間内に問題を処理するスピードを身につけることを最優先に訓練しましょう。問題演習後の見直し習慣と、ミスのパターン分析が合格に直結します。",
  },
  {
    step: "05",
    title: "過去問から出題パターンを把握して対策する",
    body: "順天堂の過去問は英語・数学・理科ともに出題形式が比較的安定しています。過去問を5年以上分析して出題頻度の高いテーマ・形式を把握し、それに特化した対策を行うことで効率的に点数を上げることができます。過去問演習は高3の夏終わりから本格的に開始しましょう。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "全科目の基礎を均等に固める",
    tasks: [
      "英語：単語・文法・読解の基礎を固める。毎日30分の英文読解習慣",
      "数学：青チャートレベルの問題を完全理解。計算ミスをなくす訓練",
      "理科：教科書の原理・定義を自分の言葉で説明できるレベルまで理解",
      "医療への関心：医療ニュース・倫理テーマを定期的にインプットする",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "応用力と論述力の強化",
    tasks: [
      "英語：長文読解の時間計測トレーニング開始。標準〜やや難問題の演習",
      "数学：標準問題の解法を完全習得。ミスをなくすための確認プロセスを習慣化",
      "理科：難問演習開始。典型問題の解法パターンを体系的に整理",
      "小論文：医療倫理テーマのインプット開始。週1本の小論文作成",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "実戦レベルへの引き上げ",
    tasks: [
      "英語：長文読解スピードと精度を同時に高める演習",
      "数学・理科：過去問レベルの問題で時間管理を意識した演習",
      "小論文：週2本以上の執筆と添削。医療倫理テーマを中心に",
      "面接：MMI形式の概要を理解し、倫理的ジレンマについて考える練習開始",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "順天堂大学医学部過去問演習（5〜10年分）を時間計測で実施",
      "MMI面接の模擬練習を複数回実施。様々なステーション形式に慣れる",
      "小論文の完成度を上げる。頻出テーマへの論述を磨く",
      "他の私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    tasks: [
      "過去問の最終確認と全科目の弱点チェック",
      "英語・数学の読み書きを毎日維持する",
      "MMI面接の最終模擬練習。様々な状況での即興対応力を確認",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const faqs = [
  {
    q: "順天堂のMMI面接はどんな形式ですか？",
    a: "MMI（Multiple Mini Interview）は、複数のステーション（場所）を順番に回る形式の面接です。各ステーションで異なるテーマ（医療倫理のジレンマ、ロールプレイ、グループ討議など）に対応します。事前に答えを準備するだけでは対応できないため、様々な状況での思考・コミュニケーション力を日頃から鍛えることが重要です。",
  },
  {
    q: "順天堂医学部に受かるには何科目が重要ですか？",
    a: "全科目バランスよく仕上げることが最重要です。1科目に突出した強みがあっても、他科目が標準以下だと合格は難しい。英語・数学・理科2科目の全てを標準レベル以上に引き上げることが前提で、その上でMMI面接・小論文の対策が合否を分けます。",
  },
  {
    q: "順天堂医学部の倍率はどのくらいですか？",
    a: "例年5〜8倍程度で推移しています。募集人員が約100名と多めですが、受験者数も多いため競争は激しい。標準問題での失点をなくすことと、面接・小論文での高評価が合格の鍵です。",
  },
  {
    q: "順天堂対策はいつから始めればいいですか？",
    a: "全科目をバランスよく仕上げる必要があるため、高2以前からの取り組みが理想です。高3からの場合は、全科目の基礎確認から始め、弱点補強と演習を並行して進める計画が必要です。まずは無料相談で現状をお聞かせください。",
  },
  {
    q: "小論文が苦手でも順天堂を目指せますか？",
    a: "はい。小論文は練習量と添削によって確実に伸びます。順天堂の小論文頻出テーマ（医療倫理・インフォームドコンセント・社会問題）に特化した練習を積むことで、十分な対策ができます。",
  },
  {
    q: "複数の私立医学部と並行して順天堂を受験できますか？",
    a: "はい。順天堂のバランス型対策は他の私立医学部の対策とも親和性が高く、効率的な並行対策が可能です。受験校の傾向を踏まえたプランをご提案します。",
  },
];

export default function JuntendoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            順天堂大学医学部
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            順天堂医学部合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            バランス型出題とMMI面接を制する対策を現役生が解説
          </p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            順天堂大学医学部の入試概要と特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              順天堂大学医学部の一般選抜は、1次試験（英語・数学・理科2科目）と2次試験（小論文・面接）の二段階選抜です。1次試験は全体的に標準〜やや難レベルで、どの科目もバランスよく仕上げることが求められます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              2次試験の面接はMMI（Multiple Mini Interview）方式を採用しており、複数のステーションを回る独特の形式です。通常の個人面接とは異なる準備が必要で、様々な状況での思考力・コミュニケーション力が問われます。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "約100名" },
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
            順天堂医学部に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            バランス型出題とMMI面接を突破するために、合否を分ける戦略を解説します。
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
            順天堂医学部合格までのスケジュール
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
            順天堂医学部合格への道筋を、一緒に考えます。
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
