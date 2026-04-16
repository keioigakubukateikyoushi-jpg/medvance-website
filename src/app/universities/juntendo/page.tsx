import UniversityPageSchemas from "@/components/UniversityPageSchemas";
import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "順天堂大学医学部に受かるには｜入試対策・合格戦略 | Medvance",
  description:
    "順天堂大学医学部の入試対策を公式要項ベースで解説。2026年度一般選抜A方式は一次で英語・数学・理科2科目・小論文、二次で面接を実施します。",

  alternates: {
    canonical: "/universities/juntendo",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★★☆",
    body: "一般選抜A方式の英語は200点・80分です。限られた時間で長文を読み切る処理力が必要で、配点も大きいため早めに仕上げたい科目です。",
    detail: "2026年度一般選抜A方式では、英語の試験範囲は英語コミュニケーションI〜III、論理・表現I〜IIIで、配点は200点、試験時間は80分です。まずは標準的な英文解釈と長文処理を安定させ、時間内に読み切る練習を積むのが基本になります。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "一般選抜A方式の数学は100点・70分です。数学I・II・III・A・B（数列）・C（ベクトル、平面上の曲線と複素数平面）が範囲です。",
    detail: "配点は100点で、試験時間は70分です。英語・理科より配点は小さいものの、取りこぼしが全体順位に直結しやすい構成です。典型問題の処理速度と記述の正確さを優先して仕上げるのが安全です。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "標準レベルを中心とした出題。力学・電磁気・波動が中心で、基本公式を正確に使いこなせれば高得点が狙えます。奇問は少なく、典型問題の習得が最短の対策です。",
    detail: "力学・電磁気からの出題が多く、波動・熱力学も出題される。実験問題・グラフ読み取り問題も出題されるため、物理現象を視覚的に把握する練習が有効。公式を導出から理解することで、変形問題にも柔軟に対応できる。名問の森レベルまで仕上げておけば十分。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "理論・有機・無機からバランスよく出題。各分野の基礎的な概念を正確に理解し、計算問題の精度を上げることが重要です。",
    detail: "理論化学の計算・有機化学の構造と性質・無機化学の知識問題がバランスよく出題。有機化学では合成や反応機構の理解が問われる。医療・生化学に関連したテーマが出ることもあり、背景知識があると差がつく。重要問題集レベルを完成させることが合格ラインへの近道。",
  },
  {
    name: "面接",
    level: "★★★★★",
    body: "2026年度一般選抜A方式の二次試験は約20分の面接です。一次合格後に受験日が通知されるため、志望理由と提出書類の整合性を早めに固める必要があります。",
    detail: "公式要項では、一般選抜A方式の二次面接は2026年2月13日〜15日のいずれか1日、約20分とされています。面接日は出願時の希望調査を踏まえて一次合格発表時に通知されるため、面接形式を決め打ちせず、志望理由・活動実績・提出資料との一貫性を中心に準備するのが安全です。",
  },
  {
    name: "小論文",
    level: "★★★☆☆",
    body: "一般選抜A方式では、一次試験日に70分の小論文を実施します。小論文は一次合格者選抜には使われず、二次合格者選抜で用いられます。",
    detail: "2026年度一般選抜A方式では、学力試験と同じ2026年2月3日に小論文試験があり、試験時間は70分です。公式要項には『小論文の評価は一次試験合格者選抜では使⽤せず、二次試験合格者選抜のときに使⽤』と明記されています。一次対策の段階から小論文を外さないことが重要です。",
  },
];

const strategies = [
  {
    step: "01",
    title: "小論文を「一次の日だけの科目」として軽視しない",
    body: "2026年度一般選抜A方式では、小論文は一次試験日に実施されますが、一次合格者選抜には使われず、二次合格者選抜で使われます。学力試験の陰に隠れて後回しにすると、一次通過後に間に合いません。高3の夏以降は要約と意見論述を継続しておき、一次の段階で書ける状態を作っておくのが安全です。",
  },
  {
    step: "02",
    title: "英語の読解速度を計測しながら鍛える",
    body: "順天堂の英語は200点・80分で、配点比重が大きい科目です。時間配分を誤ると合計点に直結するため、週3回以上は長文を時間計測しながら読む習慣をつけましょう。高3春から記述練習と添削を回し、秋には80分で解き切る前提で過去問を回せる状態にしたいところです。",
  },
  {
    step: "03",
    title: "数学は「標準問題の完全制覇」を最優先にする",
    body: "順天堂の数学は難問よりも標準問題の安定した正答率が合否を分けます。青チャートと1対1対応のレベルを完璧に仕上げてから、過去問に移るのが最短の道です。計算ミスを防ぐための丁寧な計算習慣と、記述答案の論証の明確さを同時に鍛えてください。難問に時間をかけすぎて標準問題を落とすことが最大の失敗パターンです。",
  },
  {
    step: "04",
    title: "約20分の面接で願書内容と志望理由を一貫させる",
    body: "一般選抜A方式の二次面接は約20分です。長く話すよりも、志望理由・これまでの活動・将来像を一貫した言葉で説明できるかが重要です。願書に書いた内容、提出できる活動実績、面接で話す内容の三つをずらさないように整理しておきましょう。",
  },
  {
    step: "05",
    title: "A方式の時間割どおりに過去問を解く",
    body: "一般選抜A方式は2026年度要項で、理科120分、英語80分、数学70分、小論文70分という長い時間割が示されています。科目ごとの実力だけでなく、終盤まで集中力を維持できるかが重要です。過去問演習は科目別ではなく、時間割どおりに並べて解く日を作って本番の負荷に慣れておきましょう。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "基礎力の徹底構築と医療への関心醸成",
    tasks: [
      "英語：単語・文法・長文読解の基礎。医療系英文に少しずつ触れる習慣",
      "数学：青チャートを完成させる。解法の丸暗記ではなく理由から理解する",
      "理科：教科書の原理を言語化できるレベルに。化学は有機の基礎を固める",
      "方式理解：一般選抜A方式と共通テスト利用方式の違いを要項で確認する",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "応用力強化と面接準備の開始",
    tasks: [
      "英語：長文読解の時間計測トレーニング開始。英作文の基礎練習スタート",
      "数学：1対1対応レベルへの移行。標準問題の完全制覇を目標に",
      "面接：志望理由・活動実績を言語化する練習を開始",
      "小論文：医療・教育・社会テーマの要約と意見整理を始める",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "実戦レベルへの引き上げ",
    tasks: [
      "英語：1分100語の読解速度達成を目標に訓練。英作文の本格演習",
      "数学・理科：過去問レベルの問題演習に慣れる",
      "面接：個人面接の想定問答を作り、回答の一貫性を確認",
      "小論文：週2本の小論文または要約練習",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "順天堂大学過去問演習（5〜7年分）を本番形式で実施",
      "面接の最終仕上げ。願書・活動実績と回答の整合性を確認",
      "英語の弱点（読解スピード・英作文）を集中的に補強",
      "他私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    tasks: [
      "過去問の最終確認と英語・数学の毎日維持",
      "面接の最終シミュレーション",
      "小論文の頻出テーマを復習",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const failures = [
  {
    title: "小論文を一次対策から外してしまう",
    body: "一般選抜A方式では小論文を一次試験日に受けますが、評価は二次合格者選抜で使われます。この仕様を知らずに学力試験だけで一次を通ろうとすると、通過後に小論文の差が埋まりません。一次の段階から継続して準備しておく必要があります。",
  },
  {
    title: "英語の文量に対応できず時間切れ",
    body: "順天堂の英語は文量が多く、読解速度が不十分だと最後まで解けません。「読めるけど時間が足りない」状態のまま本番を迎える受験生が毎年います。日頃から時間計測しながら長文を読む習慣が不可欠です。",
  },
  {
    title: "A方式と他方式を混同したまま準備する",
    body: "順天堂はA方式、共通テスト利用、B方式などで科目や配点が異なります。A方式のつもりで見ていたのに別方式の情報を混ぜると、数学や小論文、面接の比重を読み違えます。受ける方式を決めたら、その方式の要項だけで学習計画を組みましょう。",
  },
];

const reasons = [
  {
    title: "小論文・面接まで含めた総合サポート",
    body: "順天堂の一般選抜A方式は、学力試験に加えて小論文と面接まで見て合否が決まります。Medvanceでは科目対策と並行して、願書内容の整理、小論文添削、面接練習まで一貫して対応します。",
  },
  {
    title: "英語と小論文の記述対策に強い指導",
    body: "順天堂では英語200点、小論文70分と、読む・書く力を継続して問われます。Medvanceでは医学部受験に特化した英語・小論文指導を行い、時間内でまとめ切る実戦力を磨きます。",
  },
  {
    title: "個別分析に基づく最適な学習計画",
    body: "順天堂は方式ごとに配点と試験科目が異なります。現状の学力と受験方式を踏まえ、どの科目をいつまでにどのレベルまで仕上げるかを個別に計画します。効率的な対策で合格までの最短ルートを設計します。",
  },
];

const faqs = [
  {
    q: "順天堂大学の面接はどのような形式ですか？",
    a: "2026年度一般選抜A方式の公式要項では、二次試験の面接は2026年2月13日〜15日のいずれか1日、約20分とされています。一次合格発表時に受験日が通知されるため、志望理由・活動実績・提出資料の整合性を中心に準備するのが安全です。",
  },
  {
    q: "順天堂の英語はどのくらい難しいですか？",
    a: "2026年度一般選抜A方式では英語は200点・80分です。配点が大きいので、難度評価よりもまず時間内に読み切る処理力を作ることが重要です。長文演習を時間計測しながら積み、80分で安定して解き切れる状態を目指してください。",
  },
  {
    q: "順天堂の小論文はいつ実施されますか？",
    a: "2026年度一般選抜A方式では、学力試験と同じ2026年2月3日に70分の小論文を実施します。公式要項では、小論文の評価は一次合格者選抜には使わず、二次合格者選抜で使用すると明記されています。",
  },
  {
    q: "順天堂の数学はどのくらいのレベルですか？",
    a: "標準〜やや難レベルで、難関私立医学部（慶應・慈恵等）と比べると解きやすい問題が多いです。青チャートと1対1対応のレベルを完成させ、標準問題を確実に解く安定感を身につけることが最も重要です。",
  },
  {
    q: "順天堂の対策はいつから始めるべきですか？",
    a: "面接の準備は高3夏までに始め、小論文は一次試験日に受ける前提で高3春〜夏から継続しておくのが安全です。英語は高3春から時間計測を始め、秋にはA方式の時間割どおりに過去問演習へ移行するのが理想です。",
  },
  {
    q: "順天堂と他の私立医学部を並行して受験できますか？",
    a: "はい、可能です。英語・数学・理科の学力対策は多くの私立医学部で共通して役立ちます。順天堂はA方式で小論文を一次日に受け、二次で面接があるため、他校と比べて小論文の着手を早める意識を持つと調整しやすくなります。",
  },
];

export default function JuntendoPage() {
  return (
    <>
      <UniversityPageSchemas name="順天堂大学医学部" slug="juntendo" breadcrumbLabel="順天堂大医学部対策" />
          <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            順天堂大学医学部
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            順天堂大学医学部合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            一般選抜A方式の時間割と配点を踏まえて攻略する実践的戦略
          </p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            順天堂大学医学部の入試概要と特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              2026年度学生募集要項の一般選抜A方式では、一次試験日に理科2科目・英語・数学・小論文を実施し、一次合格者に対して二次で面接を行います。小論文は一次合格者選抜には用いられず、二次合格者選抜で使用される点が重要です。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              A方式の一次試験は理科120分、英語80分、数学70分、小論文70分の長い時間割で実施されます。英語200点、理科200点、数学100点という配点差も踏まえ、学力試験の総点と小論文・面接の準備を切り分けずに進めることが重要です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "一般A方式", value: "64名" },
                { label: "1次試験", value: "2/3" },
                { label: "2次試験", value: "2/13〜15" },
                { label: "面接", value: "約20分" },
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

      {/* 合格のための戦略 */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            順天堂大学医学部に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            一般選抜A方式の科目構成、配点、小論文・面接の位置づけを踏まえた合格戦略を解説します。
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
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            科目別対策のポイント
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            各科目の出題傾向と、順天堂大学医学部合格に向けた具体的な対策を解説します。
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

      {/* 合格までのスケジュール */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            順天堂大学医学部合格までのスケジュール
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            いつ、何を、どのくらいやるべきか。合格者の勉強ロードマップを公開します。
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

      {/* よくある失敗パターン */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            順天堂を目指す受験生が陥りやすい失敗パターン
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            順天堂では方式ごとの違いを取り違えると準備がずれやすくなります。公式要項ベースで落とし穴を先に潰しましょう。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {failures.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>落とし穴 {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* なぜMedvanceか */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            なぜMedvanceが順天堂大学医学部合格に強いか
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
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

      {/* FAQ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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

      <MedvanceBanner />

      {/* CTA */}
      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            順天堂大学医学部合格への道筋を、一緒に考えます。
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