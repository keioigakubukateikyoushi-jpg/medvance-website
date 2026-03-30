import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "順天堂大学医学部に受かるには｜入試対策・合格戦略 | Medvance",
  description:
    "順天堂大学医学部の入試対策を徹底解説。MMI面接方式・英語長文・数学の具体的な対策と合格戦略を現役慶應医学部生が紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★★☆",
    body: "長文読解が中心で医療・スポーツ医学・生命科学系テーマが頻出。英作文では自分の意見を論理的に述べる力が求められます。文量が多く、時間配分と読解速度が合否を分けます。",
    detail: "大問は長文読解2〜3題＋英作文・英文和訳の構成が基本。医療系専門用語が含まれる英文が多く、背景知識があると有利。英作文は100字前後の意見論述形式で、構成力と語彙の正確さが評価される。読解速度は1分100語以上を目標に訓練すること。スポーツ医学・運動生理学のトピックが特徴的な出題傾向にある。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準〜やや難レベル。典型問題の解法を確実に習得し、計算ミスなく正答を出す安定性が求められます。記述式問題では論証の正確さも評価されます。",
    detail: "大問4〜5題。微積分・確率・数列・図形・ベクトルが頻出。難問は少なく、標準的な問題を確実に解く力が合否の鍵。ただし計算量が多い問題もあり、時間切れに注意が必要。青チャート〜1対1対応のレベルで十分対応可能。記述形式の問題では論証の流れを明確にすること。",
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
    name: "面接（MMI）",
    level: "★★★★★",
    body: "複数のステーションを回るMMI（Multiple Mini Interview）方式を採用しており、私立医学部の中でも独特の形式です。瞬発的な思考力・コミュニケーション能力・倫理的判断力が問われます。",
    detail: "各ステーションで異なる設問（シナリオ問題・役割演技・課題解決等）に答える形式。一つのステーションは約8分程度で、準備時間も設けられる場合がある。医療倫理・患者対応・チームワークに関するシナリオが頻出。正解を求めるのではなく「思考プロセスを見せる」姿勢が評価される。模擬MMIを複数回経験することが不可欠。",
  },
  {
    name: "小論文",
    level: "★★★☆☆",
    body: "医療系テーマについての論述が求められます。論理的な文章構成と医療に対する基礎的な知識・意見を持っていることが評価されます。",
    detail: "600〜800字程度の小論文。医療格差・地域医療・スポーツ医学・高齢化社会など、順天堂の研究領域に関連したテーマが出題されることが多い。意見を述べるだけでなく、問題の背景と解決策を論じる構成が高評価につながる。日頃から医療ニュースを読み、自分の意見をノートに書き溜める習慣が有効。",
  },
];

const strategies = [
  {
    step: "01",
    title: "MMI面接を「初めての形式」で受けない",
    body: "MMI方式は一般的な面接練習だけでは対応できません。シナリオ問題や役割演技など、通常の面接にはない形式への慣れが必要です。夏から秋にかけて、できる限り多くの模擬MMIを経験しておくことが最重要の準備です。Medvanceでは模擬MMIを実施しており、フィードバックを通じて思考プロセスを磨くことができます。各ステーションで「正解を出す」のではなく「自分の考えを整理して伝える」スタイルを体得してください。",
  },
  {
    step: "02",
    title: "英語の読解速度を計測しながら鍛える",
    body: "順天堂の英語は文量が多く、時間配分を誤ると最後まで解けません。週3回以上、長文を時間計測しながら読む習慣をつけましょう。1分100語以上の読解速度を目標に、医療・スポーツ医学系の英文を素材として使うと傾向対策にもなります。英作文は書いて添削してもらうサイクルを高3春から始めることで、論述の精度が大きく上がります。",
  },
  {
    step: "03",
    title: "数学は「標準問題の完全制覇」を最優先にする",
    body: "順天堂の数学は難問よりも標準問題の安定した正答率が合否を分けます。青チャートと1対1対応のレベルを完璧に仕上げてから、過去問に移るのが最短の道です。計算ミスを防ぐための丁寧な計算習慣と、記述答案の論証の明確さを同時に鍛えてください。難問に時間をかけすぎて標準問題を落とすことが最大の失敗パターンです。",
  },
  {
    step: "04",
    title: "スポーツ医学・順天堂の特色を深く理解する",
    body: "順天堂大学はスポーツ医学の分野で全国トップクラスの実績を持ちます。面接でも「なぜ順天堂か」という問いに対してスポーツ医学・チーム医療への関心を示せると、他の受験生と大きく差がつきます。小論文のテーマにもスポーツ医学・運動生理学が出ることがあるため、基礎的な知識を入れておくことが有効です。",
  },
  {
    step: "05",
    title: "過去問は出題傾向の「型」を把握してから演習する",
    body: "順天堂の過去問を解く前に、まず5年分の問題を俯瞰して頻出分野・出題形式を整理することを推奨します。英語の出題テーマ、数学の頻出単元、小論文のテーマ傾向を把握したうえで過去問演習に入ることで、演習の質が格段に上がります。過去問演習は高3の9月から本番形式で始めましょう。",
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
      "スポーツ医学・医療への関心：順天堂の特色を知り、関連ニュースを読む",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "応用力強化と面接準備の開始",
    tasks: [
      "英語：長文読解の時間計測トレーニング開始。英作文の基礎練習スタート",
      "数学：1対1対応レベルへの移行。標準問題の完全制覇を目標に",
      "MMI面接：MMI形式の概要を理解し、基礎的な練習を開始",
      "小論文：医療・スポーツ医学系テーマのインプット開始",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "実戦レベルへの引き上げ",
    tasks: [
      "英語：1分100語の読解速度達成を目標に訓練。英作文の本格演習",
      "数学・理科：過去問レベルの問題演習に慣れる",
      "MMI面接：模擬MMIを複数回実施。思考プロセスを整理して伝える練習",
      "小論文：週2本の小論文執筆と添削サイクル",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "順天堂大学過去問演習（5〜7年分）を本番形式で実施",
      "MMI面接の最終仕上げ。シナリオ問題・役割演技の集中練習",
      "英語の弱点（読解スピード・英作文）を集中的に補強",
      "他私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    tasks: [
      "過去問の最終確認と英語・数学の毎日維持",
      "MMI面接の最終シミュレーション",
      "小論文の頻出テーマを復習",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const failures = [
  {
    title: "MMI面接を「普通の面接と同じ」と思う",
    body: "MMI方式は一般的な面接練習とはまったく異なります。シナリオ問題・役割演技・課題解決など、初めて経験する形式では本番でパニックに陥る受験生が多くいます。事前に複数回の模擬MMIを経験しておくことが必須です。",
  },
  {
    title: "英語の文量に対応できず時間切れ",
    body: "順天堂の英語は文量が多く、読解速度が不十分だと最後まで解けません。「読めるけど時間が足りない」状態のまま本番を迎える受験生が毎年います。日頃から時間計測しながら長文を読む習慣が不可欠です。",
  },
  {
    title: "「スポーツ医学は関係ない」と思って準備しない",
    body: "順天堂の特色であるスポーツ医学・チーム医療への関心を示せるかどうかが、面接・小論文で大きく差がつきます。「なぜ順天堂か」という問いに対してこの視点なしで臨むと、説得力のない回答になりがちです。",
  },
];

const reasons = [
  {
    title: "MMI面接対策の充実したサポート",
    body: "私立医学部の中でも独特のMMI方式を採用する順天堂の面接に対応するため、Medvanceでは模擬MMIセッションを実施します。現役医学部生の視点から、各ステーションで求められる思考プロセスを具体的に指導します。",
  },
  {
    title: "英語・小論文の医療系コンテンツに強い指導",
    body: "医療系英文の読解・英作文・医療系小論文は、医学部特有の知識が求められる分野です。Medvanceでは医学部受験に特化した英語・小論文指導を行い、順天堂の出題傾向に合わせた対策を提供します。",
  },
  {
    title: "個別分析に基づく最適な学習計画",
    body: "順天堂は英語・MMI面接・標準的な数学力のバランスが求められます。現状の学力と志望校を踏まえ、どの科目をいつまでにどのレベルまで仕上げるかを個別に計画します。効率的な対策で合格までの最短ルートを設計します。",
  },
];

const faqs = [
  {
    q: "順天堂大学のMMI面接とはどのような形式ですか？",
    a: "MMI（Multiple Mini Interview）は複数のステーション（各8〜10分程度）を回りながら、異なる設問に答える面接形式です。医療倫理のシナリオ問題・患者対応の役割演技・課題解決問題などが出題されます。正解を求めるのではなく、思考プロセスと伝える力が評価されます。通常の面接練習だけでは対応できないため、模擬MMIの経験が必須です。",
  },
  {
    q: "順天堂の英語はどのくらい難しいですか？",
    a: "私立医学部の中では難しい部類に入ります。医療・スポーツ医学系の長文が中心で、読解速度と英作文力の両方が求められます。特に文量が多いため、時間切れにならないよう読解速度を1分100語以上に鍛えることが重要です。",
  },
  {
    q: "スポーツ医学への関心がないのですが、順天堂を受験できますか？",
    a: "スポーツ医学への強い関心は必須ではありませんが、順天堂の特色を理解し「なぜ順天堂か」を説明できることは重要です。チーム医療・地域医療・スポーツ医学などの視点から、自分の志望理由を構成することをお勧めします。",
  },
  {
    q: "順天堂の数学はどのくらいのレベルですか？",
    a: "標準〜やや難レベルで、難関私立医学部（慶應・慈恵等）と比べると解きやすい問題が多いです。青チャートと1対1対応のレベルを完成させ、標準問題を確実に解く安定感を身につけることが最も重要です。",
  },
  {
    q: "順天堂の対策はいつから始めるべきですか？",
    a: "MMI面接の準備は高3夏から始めることをお勧めします。英語は高3春から読解速度のトレーニングを開始し、秋には過去問演習に移行するのが理想です。現状の学力に応じてプランが異なるため、まずは無料相談でご確認ください。",
  },
  {
    q: "順天堂と他の私立医学部を並行して受験できますか？",
    a: "はい、可能です。順天堂のMMI面接対策と他校の通常面接対策は並行して進められます。英語・数学・理科の学力対策は多くの私立医学部で共通して役立ちます。受験スケジュールを含めたサポートをMedvanceで提供しています。",
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
            順天堂大学医学部合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            MMI面接・英語長文・スポーツ医学特色を攻略する実践的戦略
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
              順天堂大学医学部の一般選抜は、1次試験（英語・数学・理科2科目）と2次試験（小論文・面接）の二段階選抜です。特筆すべきは2次試験のMMI（Multiple Mini Interview）方式の採用で、複数のステーションを回りながら異なる課題に取り組む独自の面接形式が特徴的です。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              スポーツ医学の分野で全国トップクラスの実績を持つ順天堂の特色を理解し、チーム医療・スポーツ医学への関心を示せるかどうかが面接・小論文で大きく評価されます。1次試験は英語の難易度が高く、文量の多い長文への対応力が合否を分けます。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "一般約105名" },
                { label: "競争倍率", value: "5〜8倍" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "2次試験", value: "小論文・MMI面接" },
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
            順天堂大学医学部に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            MMI面接方式という独自の選抜と英語の高い難易度を攻略するための合格戦略を解説します。
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
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
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
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            順天堂を目指す受験生が陥りやすい失敗パターン
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            独自のMMI方式を持つ順天堂では、準備不足で不合格になるパターンが明確です。早めに把握して対策しましょう。
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
  );
}
