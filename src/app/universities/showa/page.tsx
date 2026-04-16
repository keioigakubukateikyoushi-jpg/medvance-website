import UniversityPageSchemas from "@/components/UniversityPageSchemas";
import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "昭和医科大学医学部に受かるには｜入試対策・合格戦略 | Medvance",
  description:
    "昭和医科大学医学部の入試対策を徹底解説。基礎重視の出題とチーム医療教育の特色を踏まえた合格戦略を現役慶應医学部生が紹介します。",

  alternates: {
    canonical: "/universities/showa",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解・英文和訳・英作文がバランスよく出題されます。難易度は標準レベルで、基礎的な英語力を確実に身につければ高得点が狙えます。医療系テーマへの慣れも有効です。",
    detail: "大問は長文読解2〜3題＋英文和訳＋英作文が基本。英文は医療・健康・社会問題系が頻出。英作文は50〜100語程度の短文記述で、基本的な文法・語彙の正確さが評価される。読解速度は1分80語以上を目標にすれば時間内に解き終えられる。基礎的な英語力を確実に仕上げることが最優先。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "基礎〜標準レベルが中心。典型問題の解法を確実に習得することが最優先です。難問は少なく、基礎を丁寧に固めた受験生が安定して高得点を取れる傾向があります。",
    detail: "大問4〜5題。微積分・確率・数列・ベクトル・図形が頻出。難問はほとんど出題されないため、青チャートレベルの問題を確実に解ける力が鍵。計算ミスを防ぐ正確性と、記述問題での論証の丁寧さが評価される。数学が苦手な受験生でも、基礎を徹底すれば合格ラインに達しやすい科目。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "標準レベルを中心とした出題。基本公式の正確な理解と典型問題の解法習得で対応できます。奇問は少なく、丁寧な基礎固めが最も有効な対策です。",
    detail: "力学・電磁気・波動・熱力学から出題。典型的な解法パターンを確実に習得することが合格への最短ルート。実験問題・グラフ読み取り問題も出題されるため、物理現象を視覚的に把握する練習が有効。重要問題集の標準レベルを完成させれば十分対応できる。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "理論・有機・無機からバランスよく出題。各分野の基礎的な概念を正確に理解し、計算問題の精度を上げることが重要です。難問より標準問題の確実な正答が合否を左右します。",
    detail: "理論化学（計算・反応）・有機化学（合成・性質）・無機化学（各族の性質）がバランスよく出題。有機化学は構造決定も出るが難易度は標準レベル。計算問題は複数ステップでも整数値が出やすい設定が多く、手計算の精度を高めることで安定した得点が狙える。重要問題集の標準レベルを完成させることが目標。",
  },
  {
    name: "面接",
    level: "★★★☆☆",
    body: "個人面接で志望動機・医師としての考え方・チーム医療への理解を中心に問われます。昭和医科大学のチーム医療教育の特色を理解し、共感を示せると好評価につながります。",
    detail: "個人面接が主流。「なぜ医師になりたいのか」「なぜ昭和医科大学か」「チーム医療についてどう思うか」が頻出質問。昭和医科大学は全国でも珍しい他学部と合同のチーム医療教育（IPE）を実施しており、この特色への関心を示せるかがポイント。模擬面接を3〜4回実施し、自分の考えを自分の言葉で表現できるレベルに仕上げること。",
  },
  {
    name: "小論文",
    level: "★★★☆☆",
    body: "医療系テーマについての論述が求められます。チーム医療・患者中心の医療・地域医療など、昭和医科大学の教育方針に沿ったテーマが頻出です。",
    detail: "600〜800字程度の論述。医療倫理・チーム医療・地域医療・高齢化社会などのテーマが多い。意見を述べるだけでなく、問題の背景と解決策を論じる構成が高評価につながる。昭和医科大学のIPE（専門職連携教育）への理解を示せると差がつく。日頃から医療ニュースを読み、自分の意見をノートに書き留める習慣が有効。",
  },
];

const strategies = [
  {
    step: "01",
    title: "基礎を徹底的に固めて「確実に取れる問題を落とさない」",
    body: "昭和医科大学は難問より基礎〜標準問題の正答率が合否を分けます。「難しい問題も解けるようにしなければ」とプレッシャーをかけすぎず、まず基礎を完璧に固めることが最優先です。全科目で青チャート・重要問題集の標準レベルを完成させ、どの問題も確実に解ける状態を作ることを目指しましょう。この基礎固めが完成した段階で初めて応用問題に移行してください。",
  },
  {
    step: "02",
    title: "チーム医療・昭和医科大学の特色を深く理解する",
    body: "昭和医科大学は全国でも珍しい他学部との合同チーム医療教育（IPE：専門職連携教育）を実施しています。面接・小論文の両方でこの特色への関心と理解を示せると、他の受験生と大きく差がつきます。「なぜ昭和医科大学か」という問いに対して、チーム医療への関心を具体的に述べられるよう準備してください。医師単独ではなく多職種連携による医療の重要性を自分の言葉で語れることが重要です。",
  },
  {
    step: "03",
    title: "英語の基礎力を早期に完成させる",
    body: "昭和医科大学の英語は標準レベルですが、基礎的な英語力が不十分な状態では確実な得点が見込めません。単語・文法・構文の基礎を高3春までに完成させ、長文読解の練習を夏から本格化させましょう。英作文は書いて添削してもらうサイクルを高3春から始めることで、論述の精度が大きく上がります。英語で大きく点を落とさないことが安定した合格への条件です。",
  },
  {
    step: "04",
    title: "面接は「チーム医療への共感」を中心に準備する",
    body: "昭和医科大学の面接では医師という職業へのモチベーションに加え、チーム医療・多職種連携への理解が特に重視されます。「医師だけが医療を担うのではなく、看護師・薬剤師・理学療法士等と連携することの重要性」について自分の考えを持ちましょう。高3夏から模擬面接を開始し、チーム医療に関する質問への回答を磨いてください。",
  },
  {
    step: "05",
    title: "過去問で出題パターンを把握してから演習する",
    body: "昭和医科大学の過去問は出題形式・難易度が比較的安定しています。まず5年分の問題を俯瞰して頻出分野・出題形式を把握し、優先度の高い単元を集中的に仕上げてから演習に入りましょう。過去問演習は高3の9月から本番形式で始め、時間配分の感覚を体得してください。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "全科目の基礎力を徹底して構築",
    tasks: [
      "数学：青チャートを確実に理解。全単元の基礎的な解法を身につける",
      "英語：単語・文法・構文の基礎を徹底。毎日英文を読む習慣をつける",
      "理科：教科書の基礎概念を完全理解。原理から理解することを意識する",
      "医療への関心：チーム医療・昭和医科大学の特色を知る。医療ニュースを読む",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "標準問題への移行と英語基礎の完成",
    tasks: [
      "数学：青チャートから重要問題集への移行。標準問題を確実に解く練習",
      "英語：長文読解の練習開始。英作文の基礎練習スタート",
      "理科：重要問題集の標準レベルへの移行",
      "面接準備：志望動機・チーム医療についての考えの言語化スタート",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "実戦レベルへの引き上げ",
    tasks: [
      "英語：長文読解の速読練習を強化。英作文の本格演習と添削",
      "数学・理科：過去問レベルの問題演習に慣れる",
      "小論文：週2本以上の小論文執筆と添削。チーム医療テーマを中心に",
      "面接：模擬面接を2〜3回実施。チーム医療への共感を言語化する練習",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "昭和医科大学過去問演習（5〜7年分）を本番形式で実施",
      "基礎問題の最終確認。ミスなく解ける状態を作る",
      "面接模擬練習を複数回。「なぜ昭和医科大学か」の回答を磨く",
      "他私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    tasks: [
      "過去問の最終確認と弱点科目の最終チェック",
      "英語・数学の毎日維持（感覚を落とさない）",
      "面接の最終模擬練習。当日の流れのシミュレーション",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const failures = [
  {
    title: "基礎を固める前に難問演習に移行する",
    body: "昭和医科大学は基礎〜標準問題が中心の出題です。難問を解ける必要はなく、基礎問題を確実に解く安定感が最も重要です。基礎が固まる前に難問演習に移行すると、基礎問題でのミスが増えて本番で大きく点を落とすリスクがあります。",
  },
  {
    title: "チーム医療・IPEへの理解なしに面接に臨む",
    body: "昭和医科大学のチーム医療教育（IPE）は同大学の大きな特色です。この特色を理解せずに「なぜ昭和医科大学か」という問いに答えようとすると、説得力のない回答になります。事前に昭和医科大学のIPEについて調べ、自分の言葉で語れるようにしておきましょう。",
  },
  {
    title: "受験者数の多さを軽視する",
    body: "昭和医科大学は受験者数が多く、競争倍率も5〜8倍程度あります。「基礎レベルだから楽だろう」と油断して準備不足で臨む受験生が多くいますが、基礎を確実に積み上げた受験生との差は大きいです。基礎を丁寧に固めた受験生が安定して合格しています。",
  },
];

const reasons = [
  {
    title: "基礎から丁寧に固める指導スタイル",
    body: "昭和医科大学の合格に最も重要なのは基礎の確実な習得です。Medvanceでは現在の学力レベルを正確に把握し、基礎から丁寧に積み上げる指導を行います。難問を無理に解こうとするのではなく、確実に取れる問題を全問正解できる安定感を育てます。",
  },
  {
    title: "チーム医療・IPEを踏まえた面接対策",
    body: "昭和医科大学のIPE（専門職連携教育）という特色を深く理解した指導を提供します。「なぜ昭和医科大学か」という問いに対して、チーム医療への共感と自分の志望理由を結びつけた説得力ある回答を一緒に作り上げます。",
  },
  {
    title: "複数校対策を効率的に並行できる設計",
    body: "昭和医科大学は私立医学部の中でも受験者数が多く、複数校と並行受験するケースが多い大学です。Medvanceでは昭和大学対策と他志望校の対策を効率的に並行できるカリキュラムを設計します。受験スケジュール管理も含めてサポートします。",
  },
];

const faqs = [
  {
    q: "昭和医科大学医学部はどのくらいの難易度ですか？",
    a: "私立医学部の中では標準的な難易度です。基礎〜標準問題が中心の出題で、難問への対応よりも基礎を確実に仕上げることが合格への最短ルートです。基礎をしっかり固めた受験生が安定して合格する傾向があります。",
  },
  {
    q: "チーム医療教育（IPE）とは何ですか？面接でどう活かせますか？",
    a: "IPE（専門職連携教育）は昭和大学が全学部（医・歯・薬・保健医療）合同で実施するチーム医療の教育プログラムです。医師・歯科医師・薬剤師・看護師等が連携して患者を支えるチーム医療の実践力を育てます。「なぜ昭和医科大学か」という面接質問に対して、このIPEへの関心と自分の志望理由を結びつけることで説得力ある回答ができます。",
  },
  {
    q: "昭和医科大学の面接はどのような形式ですか？",
    a: "個人面接が主流です。志望動機・「なぜ昭和医科大学か」・チーム医療についての考え・医師としての資質が中心的な質問です。難しい倫理問題よりも、自分の経験と結びついた具体的な回答を求める傾向があります。",
  },
  {
    q: "昭和医科大学の対策はいつから始めるべきですか？",
    a: "基礎固めは早ければ早いほど良いですが、高3春から本格化するのが一般的です。面接・小論文は高3夏から準備を始め、秋に模擬練習を実施するスケジュールが理想的です。現状の学力に応じたプランを無料相談でご提案します。",
  },
  {
    q: "昭和医科大学と他の私立医学部を並行して受験できますか？",
    a: "はい、可能です。昭和医科大学は基礎〜標準レベルの対策が中心のため、他の難関私立医学部（慶應・慈恵等）との並行対策も可能です。昭和医科大学を第一志望とする場合も、難関校への挑戦と並行するプランも設計できます。",
  },
  {
    q: "昭和医科大学医学部の合格最低点はどのくらいですか？",
    a: "公式に公表されていないため正確な数字はお伝えできませんが、全科目で基礎〜標準問題を確実に正解し、英語・数学・理科のバランスが取れた得点が求められます。一科目でも大きく崩れると不利になるため、全科目の底上げが重要です。",
  },
];

export default function ShowaPage() {
  return (
    <>
      <UniversityPageSchemas name="昭和大学医学部" slug="showa" breadcrumbLabel="昭和大医学部対策" />
          <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            昭和医科大学医学部
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            昭和医科大学医学部合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            基礎の確実な習得とチーム医療理解で合格をつかむ戦略
          </p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            昭和医科大学医学部の入試概要と特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              昭和医科大学医学部の一般選抜は、1次試験（英語・数学・理科2科目）と2次試験（小論文・面接）の二段階選抜です。出題レベルは基礎〜標準が中心で、確実な基礎力を持った受験生が安定して合格する傾向があります。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              昭和医科大学の大きな特色は、全学部（医・歯・薬・保健医療）合同で実施するチーム医療教育（IPE）です。この特色を理解し、チーム医療への関心を面接・小論文で示せる受験生が評価される傾向があります。受験者数は多いですが、基礎を丁寧に固めた受験生が合格しています。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "一般約88名" },
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

      {/* 合格のための戦略 */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            昭和医科大学医学部に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            基礎重視の出題とチーム医療教育という特色を踏まえた、合格者が実践してきた戦略を解説します。
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
            各科目の出題傾向と、昭和医科大学医学部合格に向けた具体的な対策を解説します。
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
            昭和医科大学医学部合格までのスケジュール
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
            昭和医科大学を目指す受験生が陥りやすい失敗パターン
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            基礎重視だからこそ、対策の方向性を間違えるとミスが重なります。よくある失敗パターンを把握しましょう。
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
            なぜMedvanceが昭和医科大学医学部合格に強いか
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
            昭和医科大学医学部合格への道筋を、一緒に考えます。
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