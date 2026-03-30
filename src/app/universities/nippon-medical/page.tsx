import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "日本医科大学に受かるには｜入試対策・合格戦略 | Medvance",
  description:
    "日本医科大学の入試対策を徹底解説。数学記述最難関・面接2回という独自の選抜を突破する合格戦略を現役慶應医学部生が紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★★☆",
    body: "長文読解・英文和訳・英作文がバランスよく出題されます。医学系テーマの英文が多く、語彙力と論述力が問われます。時間配分を意識した演習が必要です。",
    detail: "大問構成は長文読解2〜3題＋英文和訳＋英作文が基本。医療・生命科学・倫理系テーマが頻出。和訳問題は日本語の自然な表現力も評価される。英作文は100〜150語程度の意見論述で、論理構成と語彙の正確さが求められる。1分100語以上の読解速度を目標に、毎日長文を時間計測しながら読む習慣をつけること。",
  },
  {
    name: "数学",
    level: "★★★★★",
    body: "私立医学部最難関レベルの記述数学。論証力・思考力が徹底的に問われ、答えが正しくても論証が不完全だと大きく減点されます。東大受験生でも苦労する難易度です。",
    detail: "大問4〜5題・全問記述。微積分・整数・確率・数列・複素数・ベクトルが頻出。難問が多く、完答よりも部分点を確実に取る戦略が重要。解法の根拠を明確に言語化した答案作成の訓練が合否を分ける。東大数学の過去問を活用した論述力トレーニングが最も有効な対策の一つ。高3春から記述式答案の作成練習を開始することが必須。",
  },
  {
    name: "物理",
    level: "★★★★☆",
    body: "標準〜難レベル。力学・電磁気・波動が中心で、本質的な理解がないと解けない問題が出題されます。公式の丸暗記では対応できず、現象を理解してモデル化する力が必要です。",
    detail: "力学（運動方程式・エネルギー・運動量）と電磁気（回路・電磁誘導・コンデンサー）が頻出。実験問題・グラフ読み取り問題も出題。物理の本質を問う問題が多く、教科書の原理から理解することが重要。名問の森を完成させ、さらに難問演習に進むのが理想の対策ルート。",
  },
  {
    name: "化学",
    level: "★★★★☆",
    body: "理論・有機・無機がバランスよく出題され、難易度はやや高め。有機化学の構造決定と理論化学の計算問題の精度が合否を分けます。",
    detail: "有機化学（構造決定・合成・反応機構）の難度が高く、系統的な解法習得が必要。理論化学の計算は複数ステップで整数値にならないケースも多く、手計算の精度が求められる。無機化学の知識も広く問われる。重要問題集Aレベルを完成させたうえで過去問演習に移行するのが効率的。",
  },
  {
    name: "面接（1回目）",
    level: "★★★★☆",
    body: "1回目は個人面接で志望動機・医師としての考え方・医療倫理について問われます。自分の経験と結びついた具体的な回答が評価されます。",
    detail: "志望動機・「なぜ日本医科大学か」・医師になりたい理由・医療倫理への見解が中心的な質問。日本医科大学の特色（救急医療・地域医療等）について理解を示せるかが評価ポイント。回答を掘り下げて問われることを想定し、エピソードを複数準備しておくこと。模擬面接を5回以上実施することが推奨される。",
  },
  {
    name: "面接（2回目）",
    level: "★★★★☆",
    body: "2回面接が実施される点が日本医科大学の大きな特徴です。2回目は医療倫理・社会問題・医師としての資質についてより深く問われます。1回目と異なる教員が担当するケースが多いです。",
    detail: "1回目の面接後、異なる面接官による2回目の面接が実施される。「先ほどの面接での回答について詳しく教えてください」といった深掘り質問や、医療倫理的なジレンマへの対応を問う質問が多い。一貫した考えを持っているかどうかが評価される。準備した内容と本番での発言に矛盾が生じないよう、自分の考えを深く整理しておくことが重要。",
  },
];

const strategies = [
  {
    step: "01",
    title: "数学の論述力を最優先で鍛える",
    body: "日本医科大学の数学は私立医学部の中でも最難関レベルです。答えを出すだけでなく、解法の根拠を論理的に言語化した答案が評価されます。高3春から記述式答案の作成練習を始め、毎日少なくとも1問は記述で解く習慣をつけましょう。東大数学の過去問を答案作成の練習素材として活用することが特に有効です。友人や講師に答案を読んでもらい、伝わるかを確認するサイクルを作ってください。",
  },
  {
    step: "02",
    title: "面接2回分の準備を早期から行う",
    body: "日本医科大学は2回面接が実施されるという特殊な形式です。1回目の面接内容をもとに2回目で深掘りされることを想定し、自分の考えに一貫性を持たせる準備が必要です。志望動機・医師としての考え方・医療倫理への見解を複数の角度から整理し、どの方向から問われても答えられるようにしてください。高3夏から模擬面接を開始し、秋以降は実際の2回連続形式で練習することが理想的です。",
  },
  {
    step: "03",
    title: "理科は「難問への対応力」を別途鍛える",
    body: "日本医科大学の理科は標準問題だけでなく難問も出題されます。物理・化学ともに難問レベルの問題演習を高3秋から取り入れてください。物理は名問の森を完成させてから難問集、化学は有機化学の構造決定を系統的に習得してから構造決定の難問演習に進む流れが効果的です。難問では完答を目指さず、解ける部分の部分点を確実に取る戦略を練ってください。",
  },
  {
    step: "04",
    title: "英語の和訳・英作文を別科目として対策する",
    body: "日本医科大学の英語は長文読解に加えて英文和訳と英作文が出題されます。和訳は単に単語を置き換えるのではなく、日本語として自然な文章に仕上げる能力が問われます。英作文は論述構成と語彙の正確さが評価ポイントです。それぞれを週次で練習し、添削を受けるサイクルを高3春から確立してください。",
  },
  {
    step: "05",
    title: "過去問演習で「日本医科大学の難易度感覚」を体得する",
    body: "日本医科大学の過去問は他の私立医学部と難易度が大きく異なります。過去問に早期に触れることで「どの難易度の問題が出るか」という感覚を体得することが重要です。高3の9月から過去問演習を開始し、特に数学の難問への対応策（部分点獲得戦略）を確立してください。過去問は5〜8年分の演習が理想です。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "基礎力の徹底構築",
    tasks: [
      "数学：青チャートを完全理解。記述式答案の書き方を高2から意識する",
      "英語：単語・文法・構文の基礎を徹底。毎日英文を読む習慣",
      "理科：教科書の原理を言語化できるレベルに。物理は現象理解を優先",
      "医療への関心：日本医科大学の特色（救急医療等）を知る",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "論述力の強化と応用問題への移行",
    tasks: [
      "数学：記述式答案の作成練習を毎日実施。解法の言語化を徹底",
      "英語：長文読解の速読訓練。英文和訳・英作文の週次練習スタート",
      "理科：名問の森（物理）・重要問題集A（化学）レベルへの移行",
      "面接準備：志望動機・医師になりたい理由の言語化スタート",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "実戦レベルへの引き上げ",
    tasks: [
      "数学：東大数学過去問を使った論述力の集中強化",
      "理科：難問レベルの問題演習開始",
      "英語：英文和訳・英作文の添削サイクルを毎週維持",
      "面接：模擬面接（1回目・2回目の連続形式）を2〜3回実施",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "日本医科大学過去問演習（5〜8年分）を本番形式で実施",
      "数学の部分点戦略を確立。難問への対応パターンを習得",
      "面接2回形式の模擬練習を複数回。考えの一貫性を確認",
      "他私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    tasks: [
      "過去問の最終確認と弱点科目の最終チェック",
      "数学の論述答案の最終確認。書き方の型を固める",
      "面接の最終模擬練習。2回連続形式で実施",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const failures = [
  {
    title: "数学を「答えが出れば合格」と考える",
    body: "日本医科大学の数学は記述式最難関レベルです。答えが正しくても論証が不完全だと大きく減点されます。「答えさえ合えばいい」という考えで練習を重ねていると、本番で大きく点数を落とす原因になります。論証を書く習慣を早期から確立することが不可欠です。",
  },
  {
    title: "面接を「1回分の準備」しかしない",
    body: "日本医科大学は2回面接が実施されます。1回目の面接内容をもとに2回目で深掘りされるため、1回分の準備だけでは対応できません。自分の考えに一貫性を持たせ、どの角度から問われても答えられる準備が必要です。2回連続の模擬練習を事前に行っておきましょう。",
  },
  {
    title: "倍率の高さを見て志望校から外す",
    body: "日本医科大学は倍率8〜12倍と高く見えますが、記念受験・準備不足の受験生も多く含まれます。しっかりした対策をしている受験生にとっては、倍率の数字ほど難しい入試ではありません。倍率の数字だけで志望校から外すのは機会損失につながります。",
  },
];

const reasons = [
  {
    title: "数学記述最難関への専門的な指導",
    body: "私立医学部最難関レベルの日本医科大学の数学は、論述力を体系的に鍛えることが合格の鍵です。Medvanceでは記述答案の作成から論証の言語化まで、採点者目線でのフィードバックを提供します。東大数学レベルの難問にも対応できる論述力を育成します。",
  },
  {
    title: "面接2回形式に対応した模擬練習",
    body: "日本医科大学独自の2回面接形式に対応した模擬練習を実施します。1回目の回答をもとに2回目で深掘りされるシナリオを想定した練習で、本番でも一貫した考えを示せる力を養います。",
  },
  {
    title: "全科目を高水準に引き上げる個別カリキュラム",
    body: "日本医科大学は数学・英語・理科のすべてが高いレベルで求められます。現状の学力を診断し、各科目をどの順番でどのレベルまで仕上げるかを個別に設計します。合格に必要な学力を最短で身につける戦略的な学習計画を提供します。",
  },
];

const faqs = [
  {
    q: "日本医科大学の数学はどのくらい難しいですか？",
    a: "私立医学部の中で最難関レベルです。記述式で思考力・論証力が徹底的に問われ、答えが正しくても論証が不完全だと大きく減点されます。東大受験生でも苦労する難度の問題が出題されることがあります。早期からの記述式答案作成訓練が不可欠です。",
  },
  {
    q: "面接が2回あるとはどういうことですか？",
    a: "日本医科大学では2次試験で面接が2回実施されます。1回目は志望動機・医師としての考え方が中心で、2回目では1回目の回答をもとにした深掘り質問や医療倫理的なジレンマへの対応が問われます。自分の考えに一貫性を持たせ、どの角度から問われても答えられる準備が必要です。",
  },
  {
    q: "日本医科大学の倍率が高くて不安なのですが？",
    a: "倍率8〜12倍は高く見えますが、記念受験・準備不足の受験生も多く含まれます。しっかりした対策を行っている受験生にとっては、倍率の数字ほど難しい入試ではありません。数学の論証力と面接の準備に時間をかけることが、倍率を突破する最も確実な方法です。",
  },
  {
    q: "日本医科大学対策はいつから始めるべきですか？",
    a: "数学の論述力は時間がかかるため、高3春から始めることが理想です。面接は高3夏から準備し、秋には2回連続の模擬練習を行うスケジュールを推奨します。現状の学力によってプランが異なるため、まずは無料相談でご確認ください。",
  },
  {
    q: "日本医科大学は英語も難しいですか？",
    a: "英語は難しい部類に入りますが、数学に比べると対策しやすい科目です。長文読解・英文和訳・英作文が出題され、それぞれへの対応力が求められます。医療系英文への慣れと英作文の添削練習を高3春から始めることが重要です。",
  },
  {
    q: "日本医科大学と他の私立医学部を並行して受験できますか？",
    a: "はい、可能です。特に数学の論述力向上は慶應・慈恵など他の難関私立医学部の対策にもなります。受験スケジュールと各校の特色を踏まえた効率的な並行対策プランをご提案します。",
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
            記述数学最難関・面接2回という独自の選抜を突破する実践的戦略
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
              日本医科大学の一般選抜は、1次試験（英語・数学・理科2科目）と2次試験（面接2回）の二段階選抜です。数学は私立医学部の中でも最難関レベルの記述式で、論証力と思考力が徹底的に問われます。理科（物理・化学）も難易度が高く、全科目で高水準の学力が要求されます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              2次試験の面接が2回実施されるという独自の形式が大きな特徴です。1回目の面接内容をもとに2回目で深掘りされるため、自分の考えに一貫性を持たせた準備が必要です。倍率は8〜12倍と高いですが、準備を徹底した受験生には十分に手が届く大学です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "一般約80名" },
                { label: "競争倍率", value: "8〜12倍" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "2次試験", value: "面接2回" },
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
            日本医科大学に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            数学記述最難関・面接2回という独自の難しさを攻略するために、合格者が実践してきた戦略を解説します。
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
            各科目の出題傾向と、日本医科大学合格に向けた具体的な対策を解説します。
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
            日本医科大学合格までのスケジュール
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
            日本医科大学を目指す受験生が陥りやすい失敗パターン
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            記述数学最難関・面接2回という独自の難しさがあるからこそ、対策の方向性を間違えると大きな損失になります。
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
            なぜMedvanceが日本医科大学合格に強いか
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
