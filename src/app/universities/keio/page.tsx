import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "慶應医学部に受かるには｜入試対策・合格戦略を現役生が解説 | Medvance",
  description:
    "慶應義塾大学医学部に受かるには何が必要か。現役慶應医学部生が英語・数学・物理・化学・小論文・面接の具体的な対策を解説。合格への最短ルートを詳しく紹介します。",

  alternates: {
    canonical: "/universities/keio",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★★★",
    body: "長文読解中心で医療・科学系テーマが頻出。文量が多く、スピードと正確性が合否を分けます。英作文では論理的な記述力が問われます。",
    detail: "大問構成は長文読解2〜3題＋英作文が基本。医学・生命科学・倫理系テーマの英文が多く、専門用語を推測しながら読む力が必要。英作文は日本語の考えを英語で論述する形式で、構成力・語彙力・文法の三拍子が求められる。目標は1分100語以上の読解速度。",
  },
  {
    name: "数学",
    level: "★★★★★",
    body: "記述式で、途中の式や説明を含めて答案をまとめる力が求められます。単なる計算力だけでなく、典型解法を時間内に整理して書き切る練習が重要です。",
    detail: "大問5題・記述式。微積・確率・数列・複素数・ベクトルが頻出。答えだけを急いで書くのではなく、途中式を含めた答案作成に慣れておく必要があります。難問は完答にこだわりすぎず、解ける設問から確実に得点する戦略も重要です。",
  },
  {
    name: "物理",
    level: "★★★★☆",
    body: "難易度が高く、本質的な理解がないと解けない問題が多い。公式の丸暗記ではなく、原理から理解する指導を行います。",
    detail: "力学・電磁気・波動・熱力学から満遍なく出題。実験・グラフ読み取り問題も頻出。物理の本質（なぜそうなるか）を問う問題が多く、教科書の公式を当てはめるだけでは対応不可。問題文から物理モデルを構築する力が不可欠。",
  },
  {
    name: "化学",
    level: "★★★★☆",
    body: "有機化学の比重が高く、反応機構の深い理解が求められます。計算問題では多段階の思考が必要です。",
    detail: "有機・無機・理論化学がバランスよく出題。特に有機化学では構造決定問題の難度が高い。計算問題は数値が複雑で手計算での精度が求められる。医療・生命科学に関連した出題も増えており、背景知識があると有利。",
  },
  {
    name: "小論文",
    level: "★★★★☆",
    body: "医療倫理・生命科学・社会問題に関するテーマが出題されます。論理的な構成と深い考察が評価されます。",
    detail: "600〜800字程度の論述。安楽死・遺伝子操作・医療格差・AI診断など最先端の医療トピックが出題される。「賛否を述べよ」ではなく「どう考えるか」を問う形式が多く、多面的な視点と自分なりの結論が求められる。医療ニュースの日頃からのインプットが差をつける。",
  },
  {
    name: "面接",
    level: "★★★★☆",
    body: "面接が課されます。志望動機・医師としての倫理観・社会問題への意見など、自分の考えを落ち着いて伝える準備が必要です。",
    detail: "2次試験では小論文と面接が行われます。「なぜ医師になりたいのか」「慶應義塾大学医学部を選んだ理由」「医療に関する話題をどう考えるか」などを、自分の言葉で説明できるよう準備しておきましょう。",
  },
];

const strategies = [
  {
    step: "01",
    title: "英語の「読む速さ」を最優先で鍛える",
    body: "慶應医学部の英語で最も多くの受験生が時間切れになります。合格者の多くは「本番で時間が余った」と言います。1分100語以上の読解速度を目標に、毎日長文を時間計測しながら読む習慣をつけてください。速読の訓練は最低3ヶ月必要です。高3春には着手しましょう。",
  },
  {
    step: "02",
    title: "数学は記述答案を毎日書く",
    body: "慶應の数学は記述式なので、途中式を含めて答案を整える練習が欠かせません。問題を解いたあとに、式変形が飛びすぎていないか、読み返して流れが追えるかを確認する習慣をつけてください。友人や講師に見てもらい、伝わる答案になっているか確認するのも効果的です。",
  },
  {
    step: "03",
    title: "小論文・面接は3ヶ月前から始める",
    body: "「小論文は秋から」という考えは慶應受験では通用しません。医療倫理・生命科学の知識は1日2日で身につくものではないからです。夏休み中から医療系ニュース・書籍を定期的に読み、自分の意見をノートに書き留める習慣を作りましょう。面接は模擬練習を最低5回は行うべきです。",
  },
  {
    step: "04",
    title: "物理・化学は「なぜ」から理解する",
    body: "慶應の理科は公式の暗記だけでは解けない問題が多い。特に物理は「この状況では力はどの方向に働くか」を自分でモデル化する力が求められます。化学の有機構造決定は、反応機構を根拠に筋道を立てて解く力が必要です。問題演習の前に教科書の理論を徹底的に理解することが近道です。",
  },
  {
    step: "05",
    title: "過去問は「採点者視点」で解く",
    body: "慶應医学部の過去問は、解くだけでなく「採点者が何を見ているか」を意識しながら分析することが重要です。模範解答と自分の解答を比べて、何が足りないかを言語化してください。過去問演習は受験直前ではなく、高3の夏終わりから始めるのが理想です。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "基礎力の徹底構築",
    tasks: [
      "英語：単語・文法・読解の基礎を固める。毎日30分の英文読解習慣",
      "数学：青チャートレベルの問題を完全に理解。解法の暗記ではなく理解",
      "理科：教科書の原理・定義を言語化できるレベルまで理解",
      "医療への関心：医療ニュース・書籍を定期的に読む習慣をつける",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "応用力・論述力の強化",
    tasks: [
      "英語：長文読解の時間計測トレーニング開始（目標: 1分100語）",
      "数学：記述式問題の答案作成トレーニング。解法の言語化を意識",
      "理科：難問演習開始。問題文からモデルを構築する力を養成",
      "小論文：医療トピックのインプット開始。週1本の小論文作成",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "実戦レベルへの引き上げ",
    tasks: [
      "英語：英作文の本格練習。採点者が読める答案の作成",
      "数学：時間内に論証を完成させる練習。部分点戦略の習得",
      "理科：過去問レベルの問題に慣れる",
      "面接：志望動機・医療倫理の考えを言語化する練習開始",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "慶應医学部過去問演習（5〜10年分）",
      "面接模擬練習を複数回実施。外部の視点でフィードバックを受ける",
      "小論文の完成度を上げる。200字要約→600字論述の反復",
      "他の私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    tasks: [
      "過去問の最終確認と弱点の最終チェック",
      "英語・数学の読み書きを毎日維持",
      "面接の最終模擬練習。当日のシミュレーション",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const reasons = [
  {
    title: "講師が現役慶應医学部生",
    body: "実際に慶應医学部の入試を突破した現役生が指導します。試験の雰囲気・傾向・当日の戦略まで、体験者だからこそ語れるリアルな情報を提供します。参考書や予備校では教えてくれない「合格者の思考プロセス」が学べます。",
  },
  {
    title: "慶應医学部の過去問を完全分析",
    body: "過去10年以上の過去問を分析し、頻出テーマ・問われやすい思考パターンを体系的に把握。やみくもに問題を解くのではなく、出題傾向に合わせた効率的な対策を行います。",
  },
  {
    title: "合格者の視点からの指導",
    body: "慶應医学部を実際に突破した講師だからこそ、本番で何が求められるかを正確に理解しています。「なぜこの科目でこの点数が必要か」「どこで差がつくか」を根拠をもって指導します。",
  },
];

const faqs = [
  {
    q: "慶應医学部に受かるには、どのくらいの学力が必要ですか？",
    a: "一般的に東大理科I類・II類合格レベルの学力が目安とされています。ただし「現時点の学力」よりも「いつから始めるか」と「何をどう対策するか」が重要です。高2から始めれば十分な準備期間があります。現状の学力を把握してから合格までの道筋を逆算する方法が最も現実的です。",
  },
  {
    q: "慶應医学部に受かるには、どの科目が最重要ですか？",
    a: "英語と数学が最重要です。1次試験の配点比率と難易度から、この2科目で差がつきます。特に英語は読解速度の問題で多くの受験生が失敗するため、早期から対策を始めることが重要です。理科は物理・化学いずれかを選択できますが、どちらも本質的な理解が必要です。",
  },
  {
    q: "慶應医学部はどのくらい難しいですか？",
    a: "私立医学部の中でも最難関に位置しますが、正しい対策と十分な準備期間があれば手が届かない大学ではありません。合格者の多くが「どの科目で点を取るか」の戦略を明確に持っていた点が共通しています。まずは現状の学力をヒアリングし、具体的な合格戦略をお伝えします。",
  },
  {
    q: "慶應医学部対策はいつから始めればいいですか？",
    a: "早ければ早いほど選択肢が広がりますが、高3からでも合格したケースがあります。ただし高3からの場合は、英語・数学の基礎が固まっていることが前提です。現状の学力によってプランが異なるため、まずは無料相談でご確認ください。",
  },
  {
    q: "慶應医学部の面接対策はどうすればいいですか？",
    a: "面接は最低でも本番の3〜4ヶ月前から準備を始めることをお勧めします。医療倫理・生命科学の知識を蓄えつつ、自分の考えを言語化する練習が必要です。Medvanceでは現役慶應医学部生による模擬面接を実施し、採点者目線でのフィードバックを提供しています。",
  },
  {
    q: "慶應医学部専願で対策できますか？",
    a: "はい、慶應医学部に特化した対策プランを組むことが可能です。他の私立医学部と並行して受験する場合のスケジュール管理プランもご提案できます。",
  },
];

export default function KeioPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            慶應義塾大学医学部
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            慶應医学部合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生だからこそ語れる、リアルな入試対策
          </p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            慶應義塾大学医学部の入試概要と特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              慶應義塾大学医学部の一般選抜は、1次試験（英語・数学・理科1科目）と2次試験（小論文・面接）の二段階選抜です。1次試験では高い学力が問われ、英語・数学とも記述式で答案をまとめる力が重要になります。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              2次試験の面接では医師としての適性・倫理観・社会問題への視点が問われ、単なる学力以上の準備が必要になります。私立医学部の中でも最難関と位置付けられていますが、Medvanceでは現役慶應医学部生の講師が自身の合格体験をもとに、戦略的な対策を提供しています。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "一般約66名" },
                { label: "競争倍率", value: "約7倍" },
                { label: "1次試験", value: "英・数・理1科目" },
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

      {/* 慶應医学部に受かるには */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            慶應医学部に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            慶應医学部を実際に突破した現役生の視点から、合否を分ける戦略を解説します。「難しいから対策も難しいはず」ではありません。合格者には共通した考え方と行動パターンがあります。
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
            各科目の出題傾向と、現役慶應医学部生が実践した具体的な対策を解説します。
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
            慶應医学部合格までのスケジュール
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

      {/* 入試データ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            慶應義塾大学医学部の入試データ
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            慶應医学部の入試データは、2025年度実績を中心に概況をまとめています。最新の情報は大学公式サイトで確認してください。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: "募集人員",
                value: "一般選抜：約66名",
                note: "推薦・帰国生等を含む全体の定員は110名程度。2025年度の一般選抜倍率は7.3倍でした。",
              },
              {
                label: "1次試験科目",
                value: "英語・数学・物理または化学",
                note: "英語・数学とも記述式です。途中式や記述を含めて、読みやすい答案を時間内に仕上げる練習が重要です。",
              },
              {
                label: "2次試験",
                value: "小論文・面接",
                note: "2次試験は1次通過者のみ受験可能です。医師としての資質、学部理解、志望理由を自分の言葉で説明できるよう準備しておきましょう。",
              },
              {
                label: "出願期間・試験日",
                value: "例年1月中旬出願、2月上旬1次試験",
                note: "他の私立医学部と日程が重なることが多いため、出願スケジュールの管理が重要です。複数校受験の場合は日程の確認を早めに行いましょう。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-bold tracking-wide uppercase mb-1" style={{ color: "#c9922a" }}>{item.label}</p>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.value}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 失敗パターン */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            慶應医学部を目指す上で多くの受験生が陥る失敗
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            慶應医学部は「難しいから対策も難しいはず」と思いがちですが、実際に受験した立場から見ると、合格した人と落ちた人の間には共通した失敗パターンがあります。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "英語の速度不足で時間切れ",
                body: "慶應医学部の英語は文量が多く、読解スピードが合否を分けます。「読めるけど時間が足りない」という状態のまま本番を迎える受験生が毎年います。日頃から時間を計って長文を読む訓練が不可欠です。",
              },
              {
                title: "数学を答えだけで終わらせる",
                body: "記述式の数学では、途中式を含めて読みやすく答案をまとめる練習が必要です。「解けたから終わり」にしていると、本番で途中の流れが崩れやすくなります。早い段階から記述答案を仕上げる練習を重ねましょう。",
              },
              {
                title: "面接を「最後に少しだけやればいい」と思う",
                body: "慶應の面接は準備なしでは対応できません。医師としての倫理観・社会問題への見解・志望理由の深掘りなど、即席で答えられる質問ではありません。3〜4か月前から取り組まないと間に合わないケースがあります。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>落とし穴 {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* なぜMedvanceか */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            なぜMedvanceが慶應医学部合格に強いか
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
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
            慶應医学部合格への道筋を、一緒に考えます。
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
