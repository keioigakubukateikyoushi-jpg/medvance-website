import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "東京医科大学に受かるには｜入試対策・合格戦略 | Medvance",
  description:
    "東京医科大学の入試対策を徹底解説。全科目バランス型の出題と近年強まる思考力重視の傾向に対応した合格戦略を現役慶應医学部生が紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解・英文和訳・英作文がバランスよく出題されます。医療・科学系テーマが頻出で、標準的な英語力に加え近年は思考力を問う設問が増えています。",
    detail: "大問は長文読解2〜3題＋英作文・英文和訳の構成。医療・生命科学系英文が中心で、内容を正確に把握したうえで自分の意見を述べる設問が増加傾向にある。英作文は100語前後の意見論述形式で、論理構成と表現の正確さが評価される。読解速度は1分90語以上を目標に、医療系英文に慣れるためのインプットが有効。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルを中心とした出題ですが、近年は単純な計算より思考プロセスを問う問題が増えています。基礎を確実に固めたうえで論述力を鍛えることが合格の条件です。",
    detail: "大問4〜5題。微積分・確率・数列・ベクトル・図形が頻出。近年は「なぜその方法が成り立つか」を問う論述形式の問題が増加。答えを出すだけでなく、解法の根拠を明確に示す答案作成の練習が必要。青チャートから1対1対応のレベルを完成させ、記述式答案の作成練習を高3春から開始すること。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "標準〜やや難レベル。力学・電磁気・波動が中心で、公式の正確な理解と典型問題の解法習得で対応できます。近年は実験考察型の問題も増えています。",
    detail: "力学・電磁気・波動・熱力学から出題。近年は実験設定の問題や、複数の物理概念を組み合わせた考察問題が増加傾向。公式を導出から理解することで変形問題にも柔軟に対応できる。名問の森レベルを完成させたうえで思考力系の問題演習に移行するのが理想的な対策ルート。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "理論・有機・無機からバランスよく出題。計算問題の精度と有機化学の基礎的な理解が合否を分けます。近年は実験・考察系の問題も増えています。",
    detail: "理論化学（計算・平衡・電気化学）・有機化学（構造と性質・反応機構）・無機化学（各族の反応・識別）がバランスよく出題。有機化学の構造決定も出るが難易度は標準レベル。近年は実験データを読み取って考察する問題が増加傾向。重要問題集の標準レベルを完成させたうえで考察系問題の演習に移行するのが効果的。",
  },
  {
    name: "面接",
    level: "★★★☆☆",
    body: "個人面接で志望動機・医師としての考え方・医療倫理について問われます。近年は医療現場の具体的な状況についての意見を求める質問が増えており、医療に対する関心と考えの深さが評価されます。",
    detail: "個人面接が主流。「なぜ医師になりたいのか」「東京医科大学を選んだ理由」「医師に必要な資質とは何か」が頻出質問。近年は「〇〇という医療現場の状況についてどう思いますか」といった思考力を問う質問が増加傾向。日頃から医療ニュースを読み、自分の意見を持つ習慣が重要。模擬面接を3〜4回実施すること。",
  },
  {
    name: "小論文",
    level: "★★★☆☆",
    body: "医療系テーマについての論述が求められます。データや文章を読んで論じる形式も出題されており、単に意見を述べるだけでなく根拠を示した論述力が求められます。",
    detail: "600〜800字程度の論述。医療倫理・地域医療・高齢化社会・医師の役割等が頻出テーマ。近年はデータや資料を読んで考察する形式も出題されており、情報を整理して論述する力が問われる。意見→根拠→具体例→まとめという論述の型を習得することが重要。日頃の医療ニュースのインプットと週次での執筆練習が有効。",
  },
];

const strategies = [
  {
    step: "01",
    title: "全科目を「バランスよく」高いレベルに仕上げる",
    body: "東京医科大学は特定の科目に偏った難易度設定ではなく、全科目でバランスの取れた学力が求められます。一科目でも大きく崩れると合否ラインを下回るリスクがあるため、得意科目を伸ばすだけでなく苦手科目を底上げする戦略が重要です。高3春の段階で全科目の現状を把握し、均等な仕上がりを目指した学習計画を立てましょう。",
  },
  {
    step: "02",
    title: "思考力・論述力を意識した練習に切り替える",
    body: "近年の東京医科大学の問題は、単純な計算や暗記より思考プロセスを問う傾向が強まっています。数学・理科の問題を解く際に「なぜそうなるか」を言語化する習慣をつけましょう。英語でも内容についての意見を述べる設問が増えているため、読んで終わりではなく考えを言語化することを意識した演習が有効です。",
  },
  {
    step: "03",
    title: "医療系テーマへの知識・意見を早期から蓄積する",
    body: "東京医科大学では英語・小論文・面接のすべてで医療系テーマが頻出です。3科目分の準備を別々に行うのは非効率なため、医療ニュースを読んでノートに自分の意見を書き留める習慣を高3春から始めましょう。一度蓄積した知識は英語の背景理解・小論文のネタ・面接の回答として三重に活用できます。",
  },
  {
    step: "04",
    title: "英語の英作文を「添削サイクル」で磨く",
    body: "東京医科大学の英語は英作文の配点が高く、論理構成と表現の正確さが評価されます。英作文は独学で伸ばすのが最も難しい分野で、必ず添削を受けるサイクルが必要です。週1本の英作文を書いて添削してもらうサイクルを高3春から確立することで、秋には本番で通用するレベルに到達できます。",
  },
  {
    step: "05",
    title: "過去問で「近年の出題トレンド」を把握する",
    body: "東京医科大学は近年、思考力・考察力を問う問題が増加しています。過去問を解く際は最新の年度から遡り、出題スタイルの変化を把握することが重要です。古い問題と新しい問題の違いを分析し、近年の出題傾向に合わせた演習に重点を置いてください。過去問演習は高3の9月から本番形式で始めましょう。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "全科目の基礎力を均等に構築",
    tasks: [
      "数学：青チャートを完全理解。解法の根拠から理解する習慣をつける",
      "英語：単語・文法・構文の基礎を徹底。医療系英文に少しずつ触れる",
      "理科：教科書の原理を言語化できるレベルに。物理は現象理解を優先",
      "医療への関心：医療ニュースを読む習慣。自分の意見を書き留める",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "応用力・思考力の強化",
    tasks: [
      "数学：1対1対応レベルへの移行。記述式答案の作成練習を開始",
      "英語：長文の速読練習。英作文の基礎練習スタート（週1本）",
      "理科：重要問題集への移行。考察系問題の演習開始",
      "面接・小論文準備：医療テーマのインプットと意見の言語化を開始",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "実戦レベルへの引き上げ",
    tasks: [
      "英語：英作文の本格演習と添削サイクルを毎週維持",
      "数学：思考力系問題の演習。解法の言語化を意識した答案作成",
      "理科：考察・実験系問題の集中演習",
      "面接：模擬面接を2〜3回実施。医療現場への意見を整理する",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "東京医科大学過去問演習（5〜7年分）を本番形式で実施",
      "近年の出題トレンドを分析。思考力系問題への対応力を最終強化",
      "面接模擬練習を複数回。医療倫理系質問への回答を磨く",
      "他私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    tasks: [
      "過去問の最終確認と弱点科目の最終チェック",
      "全科目の毎日維持（感覚を落とさない）",
      "面接・小論文の最終模擬練習",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const failures = [
  {
    title: "特定科目だけ仕上げてバランスを崩す",
    body: "東京医科大学は全科目でバランスの取れた学力が求められます。得意科目だけを伸ばして苦手科目をおろそかにすると、苦手科目で大きく点を落として合格ラインを下回るリスクがあります。全科目を均等に仕上げる戦略が必須です。",
  },
  {
    title: "思考力系問題の変化に対応できない",
    body: "東京医科大学は近年、単純計算・暗記より思考力を問う問題が増えています。「昔の過去問と同じ対策でいい」と思っていると、近年の出題傾向に対応できず想定より低い得点になるケースがあります。最新の年度から過去問を分析し、近年の傾向に合わせた対策を行いましょう。",
  },
  {
    title: "英作文対策を独学のみで済ませる",
    body: "東京医科大学の英作文は論理構成と表現の正確さが評価されます。英作文は独学では伸ばしにくく、必ず添削を受けるサイクルが必要です。独学だけで済ませると、自分の間違いのパターンに気づかないまま本番を迎えるリスクがあります。",
  },
];

const reasons = [
  {
    title: "全科目バランス型の個別カリキュラム",
    body: "東京医科大学合格には全科目の均等な仕上がりが必要です。Medvanceでは現在の各科目の学力を正確に診断し、どの科目をいつまでにどのレベルまで仕上げるかを個別に設計します。得意科目と苦手科目のバランスを意識した最適な学習計画を提供します。",
  },
  {
    title: "英作文・小論文の添削指導",
    body: "東京医科大学で重視される英作文・小論文は、添削なしには伸ばしにくい分野です。Medvanceでは現役医学部生による英作文・小論文の添削指導を実施し、論理構成と表現の精度を継続的に向上させます。",
  },
  {
    title: "近年の出題傾向を踏まえた対策設計",
    body: "東京医科大学の近年の出題トレンド（思考力・考察力重視）を把握したうえで、対策を設計します。過去問分析をもとに、どの分野・形式に重点を置くかを指導します。最新の傾向に対応した効率的な準備が可能です。",
  },
];

const faqs = [
  {
    q: "東京医科大学はどのくらいの難易度ですか？",
    a: "私立医学部の中では標準〜やや難のレベルです。特定科目が極端に難しいわけではなく、全科目でバランスの取れた学力が求められます。近年は思考力・考察力を問う問題が増えており、単純な計算・暗記だけでは対応できない傾向が強まっています。",
  },
  {
    q: "東京医科大学の英語はどのような対策が必要ですか？",
    a: "長文読解・英文和訳・英作文がバランスよく出題されます。特に英作文は論理構成と表現の正確さが問われ、添削を受けるサイクルが不可欠です。医療系テーマの英文に慣れるためのインプットも有効です。高3春から週1本の英作文練習と添削を開始することを推奨します。",
  },
  {
    q: "東京医科大学の近年の出題傾向の変化はありますか？",
    a: "はい、近年は単純な計算・暗記より思考力・考察力を問う問題が増加しています。数学では「解法の根拠を説明せよ」、理科では「実験データを読んで考察せよ」といった形式が増えています。英語・面接でも自分の意見を論理的に述べる力が重視されるようになっています。",
  },
  {
    q: "東京医科大学の対策はいつから始めるべきですか？",
    a: "全科目のバランスを整えるには時間がかかるため、高3春から本格化することを推奨します。面接・小論文の準備も高3夏から開始し、秋に模擬練習を実施するスケジュールが理想です。現状の学力に応じてプランが異なるため、まずは無料相談でご確認ください。",
  },
  {
    q: "東京医科大学と他の私立医学部を並行して受験できますか？",
    a: "はい、可能です。全科目バランス型の対策は多くの私立医学部に共通して役立ちます。受験スケジュールと各校の特色を踏まえた効率的な並行対策プランをMedvanceでご提案します。",
  },
  {
    q: "東京医科大学の面接はどのような内容ですか？",
    a: "個人面接で志望動機・医師としての考え方・医療倫理への見解が中心です。近年は医療現場の具体的な状況についての意見を求める質問も増えています。日頃から医療ニュースを読み、自分の考えを言語化する習慣をつけることが最も有効な準備です。",
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
            全科目バランス型・近年強まる思考力重視に対応した合格戦略
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
              東京医科大学医学部の一般選抜は、1次試験（英語・数学・理科2科目）と2次試験（小論文・面接）の二段階選抜です。出題レベルは標準〜やや難で、特定科目が極端に難しいわけではなく、全科目でバランスの取れた学力が求められます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              近年は単純な計算・暗記より思考力・考察力を問う問題が増加傾向にあります。最新の出題トレンドを把握したうえで、論理的な思考力を鍛える対策が合否を分けます。英語・小論文・面接では医療系テーマへの知識と自分の意見を持つことが評価されます。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "一般約90名" },
                { label: "競争倍率", value: "6〜9倍" },
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

      {/* 合格のための戦略 */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            東京医科大学に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            全科目バランス型の選抜と近年の思考力重視の変化に対応するための戦略を解説します。
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
            各科目の出題傾向と、東京医科大学合格に向けた具体的な対策を解説します。
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
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            東京医科大学合格までのスケジュール
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
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            東京医科大学を目指す受験生が陥りやすい失敗パターン
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            近年の出題変化に対応できずに失敗するパターンが明確です。早めに把握して対策しましょう。
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
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            なぜMedvanceが東京医科大学合格に強いか
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

      <MedvanceBanner />

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
