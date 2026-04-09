import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "金沢医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description:
    "金沢医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。北陸唯一の私立医学部で地域医療を重視した入試への完全対策ガイドです。",

  alternates: {
    canonical: "/universities/kanazawa-ika",
  },};

const stats = [
  { label: "募集人員", value: "約112名" },
  { label: "競争倍率", value: "5〜8倍" },
  { label: "1次試験", value: "英・数・理2科目" },
  { label: "2次試験", value: "面接・小論文" },
];

const subjects = [
  {
    name: "英語",
    level: "★★☆☆☆",
    body: "基礎〜標準レベルの長文読解と文法問題が中心です。難問は少なく、基礎的な英語力があれば十分対応できます。",
    tips: [
      "長文読解は1〜2題。文章量は多くないため、内容を正確に把握する精読力を意識して鍛える。",
      "文法・語彙問題は基礎レベルが中心。高校文法の全範囲を一通り整理しておくことで安定した得点が可能。",
      "語彙は難関大学レベルの単語集は不要。標準レベルの単語帳で十分対応できる。",
      "医療・健康系テーマの英文に慣れておくと内容理解が早くなり、時間のゆとりが生まれる。",
      "設問は選択式が多い傾向。選択肢の消去法と本文照合を素早く行う練習を積む。",
    ],
  },
  {
    name: "数学",
    level: "★★☆☆☆",
    body: "基礎〜標準レベルの問題が中心で、難問はほとんど出題されません。教科書レベルの理解と典型問題の習得が合格の条件です。",
    tips: [
      "大問3〜4題。頻出分野は微積分・確率・数列・三角関数で、教科書の例題レベルが多い。",
      "計算力が合否に直結する。普段から丁寧な計算練習を行い、ミスを最小化する習慣を作る。",
      "記述式問題は解答の過程を丁寧に書く練習を行う。途中点を取ることも合否に影響する。",
      "難問が出ない分、取れる問題を確実に得点することが最重要。問題を見て解法を即座に判断する力を磨く。",
      "過去問3〜5年分を解いて出題パターンを把握し、頻出の計算手順を繰り返し練習する。",
    ],
  },
  {
    name: "物理",
    level: "★★☆☆☆",
    body: "基礎〜標準レベルの問題が中心です。力学・電磁気の基礎をしっかり理解しておくことで安定した得点が得られます。",
    tips: [
      "力学（運動方程式・エネルギー保存則）と電磁気（回路・ローレンツ力）が頻出分野。",
      "公式の丸暗記ではなく、物理的現象の仕組みを理解した上で公式を適用できるよう学習する。",
      "難問はほぼ出題されないため、基礎問題集1冊を完璧にすることが最も効率的な対策。",
      "波動・熱力学も基礎レベルで出題されることがあるため、全範囲をひととおり確認しておく。",
      "計算問題では単位の変換・有効数字を常に意識し、数値ミスで失点しない習慣を作る。",
    ],
  },
  {
    name: "化学",
    level: "★★☆☆☆",
    body: "基礎〜標準レベルの出題です。理論化学と有機化学の基礎を丁寧に習得することが高得点への道です。",
    tips: [
      "理論化学（モル計算・気体の法則・酸塩基反応・酸化還元）と有機化学（官能基・基本反応）が中心。",
      "無機化学は主要な反応（金属の性質・イオン反応）を整理しておく程度で十分対応できる。",
      "計算問題はモルと質量・体積の換算を素早く行えるよう繰り返し練習する。",
      "有機化学は構造式の読み書きと基本的な反応系列（アルコール→アルデヒド→カルボン酸など）を確実に習得する。",
      "難易度が低いためケアレスミスによる失点が最も痛手。見直し時間を確保できる時間配分を意識する。",
    ],
  },
  {
    name: "面接",
    level: "★★★☆☆",
    body: "個人面接が実施されます。地域医療への関心と医師になる明確な動機が問われます。北陸の地域医療を担う医師の育成を重視した大学であり、地域への理解が評価されます。",
    tips: [
      "「なぜ医師になりたいのか」「なぜ金沢医科大学なのか」は必ず具体的なエピソードを交えて答える準備をする。",
      "北陸（石川県・富山県・福井県）の医療課題（医師不足・高齢化・過疎地医療）について事前に調べておく。",
      "内灘キャンパスの地域に密着した医療教育の特徴について理解を示すと印象が良い。",
      "面接官は人柄・誠実さ・コミュニケーション能力を見ている。答えの完璧さより誠実に話す姿勢を大切にする。",
      "模擬面接を最低3回行い、想定外の質問にも落ち着いて対応できる練習を積む。",
    ],
  },
  {
    name: "小論文",
    level: "★★☆☆☆",
    body: "医療・社会問題をテーマにした小論文が課されます。論理的な構成で自分の意見を明確に述べる力が求められます。",
    tips: [
      "序論（問題提起）・本論（根拠・考察）・結論（まとめ・主張）の3部構成を徹底する。",
      "医療倫理・地域医療・高齢化社会・終末期ケアなど頻出テーマへの考えを事前に整理しておく。",
      "自分の意見を書くだけでなく、反対意見にも触れた上で自分の立場を述べると論理性が高まる。",
      "600〜800字程度の答案を月2〜3題書く練習を積み、書くスピードと構成力を同時に鍛える。",
      "書いた小論文は第三者に添削してもらい、論理の飛躍や表現の不明確さを修正する。",
    ],
  },
];

const strategies = [
  {
    step: "01",
    title: "全科目で基礎を完璧に仕上げることを最優先にする",
    body: "金沢医科大学は全科目で基礎〜標準問題が中心です。難問への対策よりも、基礎問題を確実に得点できる状態を作ることが最短ルートです。特に数学・物理・化学では教科書の例題レベルを完全に習得することから始め、基礎が固まった段階で標準問題へと移行しましょう。焦って難問集に手を出すのは基礎固めの妨げになります。",
  },
  {
    step: "02",
    title: "取れる問題を確実に得点するメンタルと技術を養う",
    body: "難易度が低い入試では、基礎問題での取りこぼしが合否を直接左右します。「難しい問題で差をつける」ではなく「取れる問題で絶対に落とさない」という意識で演習に臨みましょう。特に計算ミスと問題文の読み間違いは致命傷になるため、見直しの習慣と丁寧な作業を徹底することが重要です。",
  },
  {
    step: "03",
    title: "小論文は論理的構成の型を早期に習得する",
    body: "金沢医科大学では小論文が課されます。書き慣れていない受験生が多いため、ここで差がつきやすい科目です。序論・本論・結論の3部構成を早期に習得し、夏以降は月2〜3題を定期的に書く練習を継続しましょう。テーマは医療・社会問題が中心のため、日頃から医療ニュースへのアンテナを張ることが重要です。",
  },
  {
    step: "04",
    title: "北陸の地域医療への理解を面接対策の核に置く",
    body: "金沢医科大学は北陸唯一の私立医学部として地域医療人材の育成を建学理念に持ちます。面接では地域医療への関心が重視されます。石川県・北陸地域の医療課題（医師不足・高齢化・過疎地医療）について具体的に調べ、自分の言葉で語れるようになることが面接突破の鍵です。",
  },
  {
    step: "05",
    title: "秋以降は過去問を本番形式で解き、時間配分を確立する",
    body: "基礎が固まった秋以降は、金沢医科大学の過去問を本番と同じ時間・環境で解く演習を積みましょう。時間配分・解答順序・見直し時間の確保について、自分なりの戦略を確立することが重要です。過去問で出題パターンに慣れることで、本番での焦りを大幅に減らせます。",
  },
];

const schedule = [
  {
    period: "4〜6月",
    title: "全科目基礎固め期",
    body: "英語は単語帳と基礎文法書を1冊ずつ完成させる。数学は教科書の全範囲を復習し、例題を完全習得。物理・化学は基礎問題集を開始。全科目の基礎を均等に進める時期。",
  },
  {
    period: "7〜8月",
    title: "標準問題完成・小論文開始",
    body: "英語は長文読解の演習を毎日1題。数学は標準問題集を完成させる。理科は基礎問題集を完了し弱点を特定。小論文の書き方を習得し、夏休み中に5〜6題書く。面接の志望動機を言語化し始める。",
  },
  {
    period: "9〜10月",
    title: "演習・弱点補強・北陸医療研究",
    body: "全科目で模試を受けて弱点を可視化する。数学・理科の頻出分野を集中的に演習。北陸の医療課題についてリサーチし、面接用のメモを作成する。小論文は月2〜3題のペースで継続。",
  },
  {
    period: "11〜12月",
    title: "過去問演習・仕上げ",
    body: "金沢医科大学の過去問5年分を本番形式で解く。時間配分・解答戦略を確立。弱点分野の最終補強。面接練習を週1〜2回実施。小論文の添削を受け、論理構成の完成度を高める。",
  },
  {
    period: "1〜2月",
    title: "直前仕上げ期",
    body: "過去問類題演習と弱点の最終確認。計算ミスゼロを徹底。面接の想定問答を声に出して繰り返し練習。体調管理を最優先に、本番に向けて精神的にも準備を整える。",
  },
];

const mistakes = [
  {
    title: "「簡単だから大丈夫」と対策が甘くなる",
    body: "難易度が低い入試ほど、全受験生が同レベルの問題を解いてきます。「基礎問題だから誰でも解ける」という油断が命取りです。基礎問題でのケアレスミスや計算ミスが直接的に合否を分けるため、丁寧な演習と見直しの習慣を絶対に手を抜かずに続けることが重要です。",
  },
  {
    title: "小論文と面接の準備を後回しにする",
    body: "筆記対策に集中するあまり、小論文と面接の準備を11月以降まで放置する受験生が多くいます。金沢医科大学は地域医療への関心と論理的思考力を小論文・面接で確認しています。これらは一夜漬けでは対応できないため、夏以降に計画的に準備を進めることが必要です。",
  },
  {
    title: "地域医療への理解なしに面接に臨む",
    body: "北陸唯一の私立医学部という立場から、金沢医科大学は地域医療に貢献できる医師を求めています。石川県・北陸地域の医療状況について何も調べずに面接に臨むと、志望動機の説得力が大幅に低下します。大学のアドミッションポリシーを熟読し、地域医療への具体的な関心を示す準備をしましょう。",
  },
];

const whyMedvance = [
  {
    title: "金沢医科大学に特化した基礎対策プラン",
    body: "Medvanceでは金沢医科大学の過去問と出題傾向を分析し、基礎固めから過去問演習まで無駄のない個別学習計画を設計します。難易度に合わせた最適な問題集と演習量で合格ラインへの最短ルートを提供します。",
  },
  {
    title: "小論文・面接の丁寧な個別指導",
    body: "筆記試験だけでなく、小論文の添削と面接の模擬練習まで一貫してサポートします。北陸地域の医療課題についての情報提供も行い、面接で説得力のある回答ができるよう準備を整えます。",
  },
  {
    title: "現役慶應医学部生による弱点の個別特定",
    body: "1対1の指導形式で、個人特有の計算ミスのクセ・英語の読み方の癖・論述の論理の飛躍などを直接指摘します。授業形式では気づけない根本的な弱点を明確にして、効率的に克服します。",
  },
];

const faqs = [
  {
    q: "金沢医科大学の難易度はどのくらいですか？",
    a: "私立医学部の中では比較的取り組みやすいレベルです。全科目で基礎〜標準問題が中心のため、教科書レベルの基礎を丁寧に仕上げることが最も効果的な対策です。難問への特別な対策は不要ですが、基礎の完成度で合否が決まります。",
  },
  {
    q: "石川県出身でなくても受験・合格できますか？",
    a: "はい、全国から受験生が来る大学です。地域枠の設定はありますが、一般枠は全国対象です。ただし面接では地域医療への関心が評価されるため、北陸の医療状況について調べておくことをお勧めします。",
  },
  {
    q: "小論文はどのくらいのレベルが必要ですか？",
    a: "高校生の標準的な文章力があれば十分対応できるレベルです。大切なのは論理的な構成と自分の意見を明確に述べることです。序論・本論・結論の構成を習得し、月2〜3題書く練習をすれば十分です。",
  },
  {
    q: "理科は物理と化学のどちらを選ぶべきですか？",
    a: "どちらも難易度は低めです。得意な方・より理解が深い方を選ぶことが基本です。どちらか一方のみの場合は早めに選択を固め、対策を集中させることをお勧めします。",
  },
  {
    q: "合格に必要な得点率の目安はありますか？",
    a: "1次試験は得点率60〜65%程度が目安とされています。基礎問題を着実に得点することで十分に到達可能なラインです。難問に時間を使うより、基礎問題を確実に全問正解することを目標にした方が効率的です。",
  },
  {
    q: "浪人生でも合格できますか？",
    a: "もちろん合格できます。金沢医科大学は浪人年数による明示的な不利はありません。面接では浪人した理由を問われることがあるため、前向きで誠実な回答を準備しておきましょう。浪人期間中に医師への志望動機を深められたことを具体的に伝えると好印象です。",
  },
];

export default function KanazawaIkaPage() {
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
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            金沢医科大学
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
              石川県
            </span>
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              北陸唯一の私立医学部
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
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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
            金沢医科大学は石川県河北郡内灘町に位置し、北陸唯一の私立医学部として地域医療の担い手を育成してきた大学です。1972年の開学以来、北陸三県（石川・富山・福井）の医療人材供給に大きく貢献しています。入試は全科目で基礎〜標準レベルが中心であり、私立医学部の中では比較的取り組みやすい難易度です。面接と小論文が課されており、地域医療への関心と論理的思考力が評価されます。基礎を丁寧に積み上げ、小論文・面接を着実に準備することが合格への王道です。
          </p>
        </div>
      </div>

      {/* 合格のための戦略 */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Strategy
          </p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-noto-serif)" }}>
            金沢医科大学対策の相談はこちら
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
