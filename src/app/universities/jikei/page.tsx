import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "東京慈恵会医科大学に受かるには｜入試対策・合格戦略 | Medvance",
  description:
    "東京慈恵会医科大学医学部の入試対策を徹底解説。私立最難関の英語・数学記述・面接対策まで、合格への具体的な戦略を現役慶應医学部生が紹介します。",

  alternates: {
    canonical: "/universities/jikei",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★★★",
    body: "私立医学部随一の難易度を誇ります。医学・生命科学系の長文が複数題出題され、語彙力・読解速度・論述力のすべてが問われます。英作文では医療倫理や社会問題について英語で論じる力が必要です。",
    detail: "大問構成は長文読解2〜3題＋英作文＋英文和訳。医療系専門用語が文脈なしに登場することもあり、科学的背景知識が直接得点につながる。英作文は100〜150語程度の自由英作文形式で、論理構成と語彙の正確さが評価の核心。目標読解速度は1分120語以上。BBC Health・The Lancet等の英語医療ニュースの日常的な精読が有効。",
  },
  {
    name: "数学",
    level: "★★★★☆",
    body: "記述式で標準〜難問レベル。計算量が多く、論証力が求められます。解法の暗記だけでは対応できず、問題の本質を理解して答案を組み立てる力が必要です。",
    detail: "大問4〜5題・全問記述。微積分・確率・整数問題・数列・複素数が頻出。特に積分の計算量が多く、時間配分に注意が必要。論証をしっかり書く習慣がないと答えが正しくても減点されるリスクがある。難問は部分点を確実に確保する戦略が重要。青チャートを完成させたうえで、東大・一橋の類題で論述力を鍛えること。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "出題レベルは標準〜やや難。力学・電磁気・波動が中心で、基本原理を深く理解していれば対応できます。奇問は少なく、標準問題を確実に解く力があれば高得点が狙えます。",
    detail: "力学（運動方程式・エネルギー保存）と電磁気（回路・電磁誘導）が頻出。実験・グラフ問題も出題される。物理の本質（なぜそうなるか）を言語化できるレベルに仕上げること。名問の森・重要問題集を一通り仕上げれば十分な対策になる。公式の丸暗記より現象の理解を優先すること。",
  },
  {
    name: "化学",
    level: "★★★★☆",
    body: "有機化学の構造決定が最大の山場です。複雑な構造決定問題を論理的に解く力が求められ、無機・理論化学の知識も広く問われます。計算問題は整数値になりにくい設定もあり手計算の精度が求められます。",
    detail: "理論・無機・有機がバランスよく出題されるが、有機化学（構造決定・合成）の難度が特に高い。構造決定では複数の分析データを組み合わせて構造を推定する問題が多く、系統的な解法トレーニングが必要。分子式の決定→官能基の特定→部分構造の組み合わせ→確認という手順を体に叩き込むこと。化学の新研究レベルの理解を目標にしたい。",
  },
  {
    name: "面接",
    level: "★★★★★",
    body: "「病気を診ずして病人を診よ」という建学精神を体現した医師像への共感が徹底的に問われます。志望動機の深掘りはもちろん、医師という職業の本質についての自分の考えが求められます。表面的な回答では通過できません。",
    detail: "個人面接で複数の教員が担当。「なぜ慈恵か」「医師とは何か」「あなたが医師として大切にしたいことは」といった根本的な問いが多い。慈恵の建学精神への理解と共感を自分の言葉で示せるかが合否の大きな分岐点。医療現場でのボランティア・医療見学の体験を具体的に語れるようにしておくことが強く推奨される。模擬面接を最低5回は実施すること。",
  },
];

const strategies = [
  {
    step: "01",
    title: "英語は「医学系読解力」を別途鍛える",
    body: "慈恵の英語は一般的な長文読解対策だけでは不十分です。医学・生命科学・倫理の専門的な内容に慣れる必要があります。BBCのHealth記事やNew England Journal of Medicineのアブストラクトを週2〜3本読む習慣をつけましょう。語彙は医学系単語帳を別途使うと効率的です。英作文は書いて添削してもらうサイクルを毎週維持することが最も重要で、論理構成と語彙の正確さを同時に磨いてください。",
  },
  {
    step: "02",
    title: "数学の記述答案を「採点者目線」で作る",
    body: "慈恵の数学は答えが合っていても論証が不完全だと減点されます。解答欄に式を並べるだけでなく、「なぜその変換をするか」を日本語で補足する答案作りが求められます。自分が書いた答案を翌日読み直して、初見の人が理解できるかを確認する習慣をつけてください。講師や仲間に読んでもらい、伝わらない部分を修正するサイクルが最速の上達法です。高3春から始めることが理想的なタイミングです。",
  },
  {
    step: "03",
    title: "化学の有機構造決定を「型」で攻略する",
    body: "慈恵の化学で最も差がつくのが有機化学の構造決定です。この分野は解き方の手順（型）を確立することで安定した得点が見込めます。分子式の決定→官能基の特定→部分構造の組み合わせ→確認という手順を体に叩き込んでください。過去問の構造決定問題を10問以上繰り返すことで、どんな構造が出ても対応できる力がつきます。高3の4〜5月から取り組み始めることが必須です。",
  },
  {
    step: "04",
    title: "面接は「慈恵の医師像」を深く理解してから臨む",
    body: "慈恵の面接で最も重視されるのは建学精神「病気を診ずして病人を診よ」への共感です。ただ暗記するのではなく、自分の言葉で語れるかが問われます。医療現場でのボランティア体験や、患者と向き合った経験を具体的なエピソードとして準備してください。また、医師の使命感・奉仕の精神について自分の考えを3〜4文で述べられるよう練習しましょう。模擬面接を夏から秋にかけて複数回行うことが重要です。",
  },
  {
    step: "05",
    title: "過去問は5〜7年分を「科目別傾向分析」で使う",
    body: "慈恵の過去問は、ただ解くだけでなく傾向を分析することが重要です。各科目で「毎年出ている分野」「数年おきに出る分野」を整理し、優先度をつけて学習しましょう。特に英語は過去問の英文テーマ（どんな医療トピックが出たか）をリスト化し、関連知識を補強することが効果的です。過去問演習は高3の9月から始め、11月以降は本番形式で時間を計って解く練習を繰り返してください。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "基礎力と医療知識の土台作り",
    tasks: [
      "英語：単語・文法・構文を徹底。毎日英文を読む習慣をつける（医療ニュースにも触れる）",
      "数学：青チャートを完成させる。公式の丸暗記ではなく導出から理解する",
      "理科：教科書の原理を言語化できるレベルに。化学は有機の基礎を高2のうちに固める",
      "医療への関心：病院見学・医療ボランティアを経験。慈恵の建学精神を知る",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "応用力強化と英語の読解速度向上",
    tasks: [
      "英語：医学系長文の速読トレーニング開始。英作文の週次練習スタート",
      "数学：記述形式での答案作成トレーニング。論証を言語化する練習",
      "化学：有機化学・構造決定の体系的学習開始",
      "面接準備：志望動機の言語化スタート。慈恵の建学精神の深掘り",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "実戦レベルへの引き上げ",
    tasks: [
      "英語：英作文の添削サイクルを毎週実施。1分120語の読解速度を目標に",
      "数学：難問演習。部分点戦略の習得",
      "化学：構造決定の過去問10問以上を反復練習",
      "面接：模擬面接を2〜3回実施。医療倫理テーマの自分の見解を整理",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "慈恵過去問を5〜7年分演習（科目別傾向分析を同時進行）",
      "面接模擬練習を複数回。慈恵の医師像を自分の言葉で語る練習",
      "英作文の最終仕上げ。過去問英作文テーマの傾向把握",
      "他私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと本番シミュレーション",
    tasks: [
      "過去問の最終確認と弱点科目の最終チェック",
      "英語・数学の読み書きを毎日維持（感覚を落とさない）",
      "面接の最終模擬練習。当日の流れのシミュレーション",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const failures = [
  {
    title: "英語を「普通の入試英語」と同じ対策で済ませる",
    body: "慈恵の英語は医学・生命科学系の高度な内容が出題されます。一般的な長文読解練習だけでは語彙・背景知識ともに不足します。医学系英語に特化したインプットを早期から行わないと、読める文章でも時間切れになるリスクが高く、英作文の質も上がりません。",
  },
  {
    title: "面接を「暗記で乗り切れる」と思う",
    body: "慈恵の面接は定型的な答えを求めていません。「医師とは何か」「なぜ慈恵か」という本質的な問いに対して、自分の考えを筋道立てて述べる力が求められます。暗記した回答ではすぐに深掘りされてボロが出ます。自分の言葉で語れるレベルまで準備することが不可欠です。",
  },
  {
    title: "化学の有機分野を後回しにする",
    body: "慈恵の化学は有機化学の構造決定が最も差がつく分野です。多くの受験生が「後でやればいい」と先送りにして本番に間に合わないケースが目立ちます。有機化学は短期間で仕上げられる分野ではなく、高3春から計画的に取り組む必要があります。",
  },
];

const reasons = [
  {
    title: "慈恵の英語・医学系長文対策に特化した指導",
    body: "私立医学部随一の難易度を誇る慈恵の英語は、医学系専門知識と高い論述力が必要です。Medvanceでは医学部受験に特化した英語指導を行い、慈恵合格に必要な読解速度・英作文力を体系的に育成します。",
  },
  {
    title: "慈恵の面接を知り抜いた模擬練習",
    body: "「病気を診ずして病人を診よ」という慈恵の建学精神を深く理解した現役慶應医学部生が、慈恵の面接で問われやすい質問を使って模擬練習を実施します。表面的な準備では通過できない慈恵の面接に、万全の状態で臨めます。",
  },
  {
    title: "個別カリキュラムで弱点を最短で克服",
    body: "慈恵は英語・数学・化学のすべてが高水準で求められる大学です。各科目の現状学力を診断したうえで、どの分野を優先するかを個別に設計します。やみくもに全科目を勉強するのではなく、合格に最短で届く戦略的な学習計画を提供します。",
  },
];

const faqs = [
  {
    q: "東京慈恵会医科大学の英語はどのくらい難しいですか？",
    a: "私立医学部の中でもトップクラスの難易度です。医学・生命科学系の専門的な長文が出題され、語彙・読解速度・英作文力のすべてが求められます。一般的な大学受験英語の対策だけでは不十分で、医学系英語に特化したインプットと英作文練習が必要です。早期着手が合否を左右します。",
  },
  {
    q: "慈恵の面接はどのような内容ですか？",
    a: "「なぜ医師になりたいのか」「慈恵を選んだ理由は何か」「医師の使命とは何か」といった、医師としての本質を問う質問が中心です。建学精神「病気を診ずして病人を診よ」に共感を示し、自分の言葉で語れるかが合否を分けます。定型的な回答では通過できないため、夏から準備が必要です。",
  },
  {
    q: "慈恵は数学も難しいですか？",
    a: "記述式で標準〜難問レベルです。計算量が多く、論証を正確に書く力が問われます。答えが正しくても論証が不完全だと減点されるため、解法の根拠を言語化する訓練が必須です。東大・一橋の過去問の類題演習が有効な対策になります。",
  },
  {
    q: "慈恵医科大学の対策はいつから始めるべきですか？",
    a: "英語と化学（有機）は高3春、遅くとも夏休み前には対策を始めてください。面接は夏休みから準備を開始し、秋〜冬に模擬練習を複数回行うのが理想です。現時点の学力によってプランが変わるため、まずは無料相談で現状診断をお受けください。",
  },
  {
    q: "慈恵の化学で有機が苦手なのですが、間に合いますか？",
    a: "対策開始のタイミング次第です。有機化学の構造決定は型を習得すれば安定した得点が見込める分野です。ただし短期間での習得は難しく、高3の4〜5月から始めることを推奨します。Medvanceでは構造決定の解法パターンを体系的に指導します。",
  },
  {
    q: "慈恵と他の私立医学部を並行して受験できますか？",
    a: "はい、可能です。慈恵の英語重視の対策は他の私立医学部の英語力向上にも直結します。受験校の日程・傾向を踏まえた効率的な並行対策プランをご提案します。無料相談にてご相談ください。",
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
            慈恵医科大学合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            私立医学部最難関の英語と面接を突破する、実践的な合格戦略
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
              東京慈恵会医科大学医学部の一般選抜は、1次試験（英語・数学・理科2科目）と2次試験（小論文・面接）の二段階選抜です。英語は私立医学部最難関レベルで医学系長文と英作文が課され、数学は記述式で論証力が問われます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              2次試験の小論文・面接では「病気を診ずして病人を診よ」という建学精神を体現した医師像への共感を強く重視することで知られています。学力だけでなく医師としての本質的な志を問う選抜スタイルが特徴的で、面接対策への早期着手が合否を大きく左右します。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "一般約105名" },
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

      {/* 合格のための戦略 */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            慈恵医科大学に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            私立医学部最難関クラスの英語と独自の面接形式を攻略するために、合格者が実践してきた戦略を解説します。
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
            各科目の出題傾向と、慈恵医科大学合格に向けた具体的な対策を解説します。
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
            慈恵医科大学合格までのスケジュール
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
            慈恵を目指す受験生が陥りやすい失敗パターン
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            難関校だからこそ、対策の方向性を間違えると大きなロスになります。よくある失敗パターンを把握して回避しましょう。
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
            なぜMedvanceが慈恵医科大学合格に強いか
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
            慈恵医科大学合格への道筋を、一緒に考えます。
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
