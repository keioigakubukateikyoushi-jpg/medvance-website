import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "久留米大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description:
    "久留米大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。英語読解力と全科目バランスが合否を決める九州圏私立医学部への完全ガイドです。",
};

const stats = [
  { label: "募集人員", value: "約120名" },
  { label: "競争倍率", value: "7〜11倍" },
  { label: "1次試験", value: "英・数・理2科目" },
  { label: "2次試験", value: "面接・小論文" },
];

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解中心で医療・科学系テーマが頻出です。語彙力と読解スピードが合否を分ける重要科目です。",
    tips: [
      "大問3〜4題。長文読解が主体で、内容一致・内容説明・下線部和訳などの問題が多い。",
      "医療系テーマ（感染症・遺伝子医療・高齢化社会など）への英文に日頃から慣れておくと有利。",
      "標準〜やや難の語彙が問われるため、単語帳は標準〜やや上のレベルまで仕上げておく。",
      "読解スピードの向上のため、毎日300〜400語の英文を時間を計りながら読む練習を習慣化する。",
      "文法・整序問題も出題される。英文法の全範囲を一通り復習し、特に接続詞・関係詞の使い方を正確に理解する。",
    ],
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準〜やや難レベルの問題が中心です。微積・確率・数列が頻出で、解法の正確な習得が重要です。",
    tips: [
      "大問4〜5題。記述式と選択式が混在。微積分・確率・数列・ベクトルが頻出分野。",
      "難問より標準問題を確実に解く力が求められる。基礎〜標準問題集を1冊完璧に仕上げることが最優先。",
      "時間配分を意識した演習が重要。本番90〜120分の試験を想定して、大問ごとの解答時間を練習で確認する。",
      "記述式では解答の論理展開を丁寧に書く練習を積む。部分点を取ることも合否に影響する。",
      "毎回の演習後に間違えた問題を分析し、同じミスを繰り返さない仕組みを作ることが成績向上の鍵。",
    ],
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気を中心に標準的な問題が出題されます。基本概念の正確な理解が合格への鍵です。",
    tips: [
      "力学・電磁気・波動・熱力学から出題。力学と電磁気の配点が高い傾向。",
      "基本公式の正確な適用と計算力が問われる。公式の暗記に加え、現象を図示して理解する習慣が重要。",
      "計算ミスで失点するリスクが高いため、検算の習慣と有効数字・単位管理を徹底する。",
      "標準問題集を1冊完全に仕上げた後、久留米大学の過去問形式に慣れるための演習を積む。",
      "波動・熱力学は軽視されがちだが、出題されたときに確実に得点できるよう基礎を押さえておく。",
    ],
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題されます。基礎知識の正確な定着と計算問題の精度が重要です。",
    tips: [
      "有機・無機・理論化学が均等に出題される傾向。3分野をバランスよく対策することが必要。",
      "理論化学は計算問題が多い。モル計算・化学平衡・酸塩基・電気化学の計算手順を確実に習得する。",
      "有機化学は構造決定問題が出題されやすい。官能基の性質と基本反応を体系的に整理しておく。",
      "無機化学は主要元素の性質・反応・製法を一覧にして記憶し、選択問題で確実に得点する。",
      "計算問題での正確性を特に重視した練習が有効。時間をかけても正確な答えを出す習慣を身につける。",
    ],
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "個人面接と小論文が課されます。医師としての志望動機と九州・地域医療への関心が評価されます。",
    tips: [
      "個人面接では志望動機・医師としての倫理観・チーム医療への理解が問われる。",
      "九州の地域医療（医師不足・農村部医療・高齢化）への理解を示すと好印象になる。",
      "久留米大学医学部の教育方針（早期臨床教育・附属病院での豊富な実習など）を事前に調べておく。",
      "小論文は医療倫理・社会問題系テーマが多い。「安楽死・尊厳死」「AI医療」「地域医療格差」などの頻出テーマへの意見を整理する。",
      "小論文は序論・本論・結論の論理構成を徹底し、600〜800字で自分の意見を明確に述べる練習を重ねる。",
    ],
  },
];

const strategies = [
  {
    step: "01",
    title: "英語の読解力強化を最優先課題にする",
    body: "久留米大学医学部では英語の長文読解が出題の中心です。語彙力・読解スピード・内容把握力を同時に高める必要があります。医療・科学系テーマの英文を毎日読む習慣をつけ、内容一致問題と説明問題に特化した演習を積みましょう。英語で差をつけることが合格への大きなアドバンテージになります。",
  },
  {
    step: "02",
    title: "数学・理科の標準問題を完璧に習得する",
    body: "標準レベルが中心だからこそ、頻出分野の解法を確実に習得することが合格の条件です。微積・確率・数列（数学）、力学・電磁気（物理）、理論・有機化学（化学）は特に重点的に演習し、類題を見た瞬間に解法が浮かぶレベルまで仕上げましょう。難問への対策は標準問題を完成させた後で十分です。",
  },
  {
    step: "03",
    title: "計算ミスゼロを目標にした演習習慣を構築する",
    body: "標準問題での計算ミスが命取りになります。数学・化学・物理では必ず検算を行い、ミスのパターンを把握して同じミスを繰り返さない仕組みを作りましょう。本番の時間配分（どの大問に何分かけるか）を意識した模擬演習を繰り返し、見直し時間を確保できるリズムを確立することが重要です。",
  },
  {
    step: "04",
    title: "九州の地域医療への理解を面接対策の核にする",
    body: "久留米大学医学部は九州圏の医療人材育成を重要なミッションとしています。福岡県・久留米市の医療課題（高齢化社会・地域医師不足・過疎地医療など）について具体的に調べ、自分の言葉で地域医療への関心を語れるよう準備することが面接突破の鍵です。",
  },
  {
    step: "05",
    title: "小論文は夏前から定期的に書く練習を始める",
    body: "小論文は一夜漬けでは対応できません。夏以降に月2〜3題を定期的に書き、論理的な構成力を鍛えましょう。医療倫理・AI医療・地域医療格差などの頻出テーマへの自分の意見を事前に整理しておき、本番でも落ち着いて論述できる準備を整えます。",
  },
];

const schedule = [
  {
    period: "4〜6月",
    title: "全科目基礎固め期",
    body: "英語は単語帳（標準〜やや上のレベル）と文法書を仕上げる。数学は教科書全範囲を復習し例題を完全習得。物理・化学は基礎問題集を開始。全科目の基礎を均等に進める時期。",
  },
  {
    period: "7〜8月",
    title: "標準問題完成・小論文開始",
    body: "英語は長文読解を毎日1〜2題演習。数学は標準問題集（基礎問題精講・標準問題精講など）を完成させる。理科は基礎問題集を完了し弱点単元を特定。小論文の書き方を習得し、夏休み中に6〜8題書く。面接の志望動機を言語化し始める。",
  },
  {
    period: "9〜10月",
    title: "演習強化・九州医療研究",
    body: "全科目で模試を積極的に受けて弱点を可視化する。英語は長文読解の演習量をさらに増やす。数学・理科の頻出分野を重点的に演習。九州・福岡の医療課題についてリサーチし、面接用の回答メモを作成する。",
  },
  {
    period: "11〜12月",
    title: "過去問演習・総仕上げ",
    body: "久留米大学医学部の過去問5年分を本番形式で解く。時間配分・解答戦略を確立。弱点分野の最終補強。面接練習を週1〜2回実施。小論文の添削を受け、論理構成と表現力を高める。",
  },
  {
    period: "1〜2月",
    title: "直前仕上げ期",
    body: "過去問類題演習と弱点の最終確認。英語の語彙確認と長文演習を継続。計算ミスゼロを徹底。面接の想定問答を声に出して繰り返し練習。体調管理を最優先に整える。",
  },
];

const mistakes = [
  {
    title: "英語対策を後回しにして直前に詰め込もうとする",
    body: "久留米大学医学部では英語の長文読解が入試の中核です。語彙力・読解スピード・内容把握力はいずれも短期間では身につきません。英語は毎日の継続的な学習が最も効果的です。直前に単語帳を丸暗記しようとしても、読解問題では太刀打ちできません。春から計画的に英語学習を積み重ねましょう。",
  },
  {
    title: "理科の3分野（有機・無機・理論）をバランスよく対策しない",
    body: "化学では有機・無機・理論がバランスよく出題されます。「有機が得意だから有機だけ」という偏った対策では、無機・理論での失点が積み重なります。3分野を均等に仕上げることが安定した得点につながります。苦手分野があれば夏以降に集中して補強しましょう。",
  },
  {
    title: "面接・小論文の準備を11月以降まで放置する",
    body: "筆記対策に集中するあまり、面接と小論文を直前まで放置する受験生が多くいます。しかし久留米大学の面接では医師としての価値観・地域医療への理解・大学への具体的な志望理由が細かく問われます。これらは一夜漬けでは準備できません。夏以降に計画的に準備を積み上げることが必要です。",
  },
];

const whyMedvance = [
  {
    title: "久留米大学の英語・読解特化対策",
    body: "Medvanceでは久留米大学医学部の英語出題パターンを詳細に分析し、医療系長文の読解力と語彙力を集中的に強化する個別プランを設計します。英語で差をつけることが久留米大学合格への最短ルートです。",
  },
  {
    title: "面接・小論文まで一貫したサポート",
    body: "小論文の添削・面接の模擬練習を筆記対策と並行して提供します。九州・福岡の地域医療課題についての情報提供も行い、面接で説得力のある回答ができるよう準備を整えます。",
  },
  {
    title: "現役慶應医学部生が個人の弱点を直接特定",
    body: "1対1の指導で、英語の読み方のクセ・数学の解法の迷い・化学の計算ミスパターンなど個人特有の弱点を直接指摘します。なぜ間違えるかの根本原因を明確にすることで、効率的な改善につなげます。",
  },
];

const faqs = [
  {
    q: "久留米大学医学部の難易度はどのくらいですか？",
    a: "私立医学部の中では標準〜やや難のレベルです。全科目の基礎〜標準問題を確実に解く力が求められます。特に英語の長文読解力が重要で、日頃から英語を読む習慣がある受験生が有利です。難問より基礎の完成度で合否が決まります。",
  },
  {
    q: "九州以外の出身でも受験できますか？",
    a: "もちろん受験できます。全国からの受験者が多い大学です。ただし面接では九州・福岡の地域医療への関心が問われることがあるため、事前に福岡県の医療状況について調べておくとよいでしょう。",
  },
  {
    q: "英語が苦手でも合格できますか？",
    a: "英語は久留米大学医学部の入試で重要な科目です。長文読解中心の出題のため、語彙力と読解スピードが不十分だと得点が安定しません。苦手な場合は早期から毎日の英語学習を始め、少なくとも標準レベルまで引き上げることが合格の条件になります。",
  },
  {
    q: "小論文のテーマはどのようなものが出ますか？",
    a: "医療倫理・地域医療・高齢化社会・終末期ケア・AI医療などのテーマが多い傾向にあります。時事的な医療ニュースにも目を向けておき、自分の考えを論理的に書けるよう練習しておくことが重要です。",
  },
  {
    q: "合格に必要な得点率の目安はありますか？",
    a: "1次試験は得点率65〜70%程度が目安とされています。英語で高得点を取り、数学・理科で基礎問題を確実に得点することが合格ラインへの近道です。",
  },
  {
    q: "何浪までなら合格できますか？",
    a: "浪人年数による明示的な不利はありません。現役・1浪・2浪を問わず、学力と準備の充実度が合否を決めます。面接では浪人した理由を問われることがあるため、前向きで誠実な回答を準備しておきましょう。",
  },
];

export default function KurumePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            久留米大学医学部
            <br />
            入試対策ガイド
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}
            >
              私立医学部
            </span>
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              福岡県
            </span>
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              英語読解力重視
            </span>
          </div>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Exam Overview
          </p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            入試概要
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-5 text-center"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <p className="text-xs font-semibold mb-2" style={{ color: "#6b7280" }}>
                  {s.label}
                </p>
                <p className="text-lg font-bold" style={{ color: "#0c1a33" }}>
                  {s.value}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            久留米大学医学部は福岡県久留米市に位置し、九州圏の私立医学部として長い歴史を持つ大学です。1928年に設立された久留米医学専門学校を源流に持ち、九州・西日本の医療人材育成に大きく貢献してきました。入試は英語・数学・理科2科目の筆記試験と面接・小論文で構成されます。特に英語の長文読解力が重視されており、語彙力と読解スピードが合否を分ける科目です。豊富な臨床実習が用意された附属病院を持ち、臨床医を目指す学生に人気があります。
          </p>
        </div>
      </div>

      {/* 合格のための戦略 */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Strategy
          </p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            合格のための戦略
          </h2>
          <div className="space-y-5">
            {strategies.map((s) => (
              <div
                key={s.step}
                className="flex gap-5 p-6 rounded-2xl"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                >
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 科目別対策 */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Subject Analysis
          </p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            科目別対策
          </h2>
          <div className="space-y-6">
            {subjects.map((s) => (
              <div key={s.name} className="bg-white p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-base" style={{ color: "#0c1a33" }}>
                    {s.name}
                  </h3>
                  <span className="text-sm" style={{ color: "#c9922a" }}>
                    {s.level}
                  </span>
                </div>
                <p className="text-sm mb-4" style={{ color: "#374151" }}>
                  {s.body}
                </p>
                <ul className="space-y-2">
                  {s.tips.map((tip, i) => (
                    <li key={i} className="flex gap-2 text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                      <span className="flex-shrink-0 font-bold" style={{ color: "#c9922a" }}>
                        {i + 1}.
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* スケジュール */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Schedule
          </p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            合格までのスケジュール
          </h2>
          <div className="space-y-4">
            {schedule.map((s, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div
                  className="flex-shrink-0 px-3 py-1 rounded-lg text-xs font-bold h-fit"
                  style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                >
                  {s.period}
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>
                    {s.title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* よくある失敗パターン */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Common Mistakes
          </p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくある失敗パターン
          </h2>
          <div className="space-y-5">
            {mistakes.map((m, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "rgba(201,146,42,0.15)", color: "#c9922a" }}
                  >
                    !
                  </span>
                  <div>
                    <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>
                      {m.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                      {m.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* なぜMedvanceか */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Why Medvance
          </p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            なぜMedvanceか
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {whyMedvance.map((w, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>
                  {w.title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            FAQ
          </p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくある質問
          </h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>
                  Q. {f.q}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                  A. {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner */}
      <MedvanceBanner />

      {/* CTA */}
      <div className="py-16 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Free Consultation
          </p>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            久留米大学医学部対策の相談はこちら
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
