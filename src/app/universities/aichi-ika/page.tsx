import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "愛知医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description:
    "愛知医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。標準問題中心で基礎力完成が合否を左右する対策を詳しく紹介します。",

  alternates: {
    canonical: "/universities/aichi-ika",
  },};

const stats = [
  { label: "募集人員", value: "約70名" },
  { label: "競争倍率", value: "約9倍" },
  { label: "1次試験", value: "英・数・理2科目" },
  { label: "2次試験", value: "面接・小論文" },
];

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解と文法・語彙問題が標準的なレベルで出題されます。基礎英語力を確実に固めることが得点安定の鍵です。",
    tips: [
      "長文読解は2〜3題出題。医療・科学系テーマが頻出なので、関連語彙を重点的に学習する。",
      "文法・語彙・整序問題も出題される。基礎文法の抜け漏れをなくすことが優先事項。",
      "読解スピードを上げるため、毎日200〜300語の英文を読む習慣をつける。",
      "難問はほとんど出ないため、基礎〜標準の問題で取りこぼさないことが最重要。",
      "医療英語の頻出語彙（diagnosis, treatmentなど）は早めにリスト化して覚えておく。",
    ],
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心です。微積・確率・数列の典型問題を確実に習得することが最も重要です。",
    tips: [
      "大問4〜5題。記述式と選択式が混在するため、どちらの形式にも慣れておく。",
      "微積分・確率・数列・ベクトルが頻出分野。これら4分野の典型問題を完全習得することが最優先。",
      "難問はほとんど出ないため、基礎〜標準レベルの問題を見た瞬間に解法が浮かぶまで反復する。",
      "計算ミスが合否に直結するため、普段の演習から検算を必ず行う習慣をつける。",
      "過去問5年分を解いて出題パターンを把握し、時間配分（試験時間内に全問完答できるか）を確認する。",
    ],
  },
  {
    name: "物理",
    level: "★★☆☆☆",
    body: "基礎〜標準レベルの問題が中心です。基本公式を確実に理解し、正確に適用できる力が求められます。",
    tips: [
      "力学・電磁気・波動から基礎〜標準レベルの問題が出題される。難問はほとんどない。",
      "公式を丸暗記するのではなく、現象の仕組みを理解した上で公式を導ける水準を目指す。",
      "標準問題集（物理のエッセンスなど）を1冊完璧に仕上げれば十分対応できるレベル。",
      "計算問題は有効数字・単位管理を徹底し、数値ミスによる失点を防ぐ。",
      "熱力学も近年出題されているため、基本的な状態変化と熱力学第一法則を押さえておく。",
    ],
  },
  {
    name: "化学",
    level: "★★☆☆☆",
    body: "基礎〜標準レベルの出題です。理論化学の計算と有機化学の基礎知識を確実に習得することが重要です。",
    tips: [
      "理論化学（モル計算・気体・溶液・電気化学）と有機化学（官能基・基本反応）が中心。",
      "難易度は低めで、教科書レベルの内容を丁寧に理解すれば高得点が狙える。",
      "無機化学は主要な族の性質と反応（ハロゲン・金属イオンの沈殿反応など）を網羅する。",
      "計算問題は単位管理を徹底し、途中式を丁寧に書く習慣で計算ミスを最小化する。",
      "有機化学は基本的な反応パターン（エステル化・酸化・還元など）を繰り返し練習する。",
    ],
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "志望動機・医師としての姿勢・地域医療への関心が面接で問われます。愛知県の医療課題への理解を示すことが有効です。",
    tips: [
      "個人面接形式。「なぜ医師になりたいのか」「愛知医科大学を選んだ理由」は必ず具体的に答えられるよう準備する。",
      "愛知医科大学は地域医療への貢献を重視しており、中部圏の医療課題（超高齢社会・地域格差など）への関心を示すと好印象。",
      "面接官は医師としての人間性・倫理観を見ている。自分の体験と結びつけた言葉で志望動機を語る練習を重ねる。",
      "小論文は医療・社会問題をテーマに論理的な文章を書く力が求められる。序論・本論・結論の構成を徹底する。",
      "過去の小論文テーマ（チーム医療・AI医療・終末期医療など）を調べ、自分の意見を事前に整理しておく。",
    ],
  },
];

const strategies = [
  {
    step: "01",
    title: "基礎の完成度を最優先に据える",
    body: "愛知医科大学は全科目で基礎〜標準問題が中心のため、基礎の完成度が合否を直接決めます。教科書レベルの内容を完全に理解し、典型問題を見た瞬間に解法が浮かぶレベルまで仕上げましょう。難問への対策は基礎が完成してから取り組む順序が正しく、焦って応用問題集に手を出すのは逆効果です。まず網羅系の基礎問題集を1冊完璧にすることが最短ルートです。",
  },
  {
    step: "02",
    title: "理科（物理・化学）を得点の柱にする",
    body: "愛知医科大学の物理・化学は難易度が低めで、基礎をしっかり固めれば高得点が狙えます。この2科目で確実に得点することが合格への大きなアドバンテージになります。理科の対策は基礎問題集を1冊完璧にすることから始め、過去問で出題パターンを確認してから演習を積み上げていきましょう。理科で点差をつけられることで、英数の多少のブレをカバーできます。",
  },
  {
    step: "03",
    title: "全科目バランス重視で苦手科目をなくす",
    body: "難問が少ない入試では、1科目での大きな失点が合否を直接左右します。得意科目で高得点を狙うよりも、苦手科目の底上げに時間を使う方が合格確率を上げます。定期的に模試や過去問で自分の弱点を可視化し、苦手分野への対策を計画的に行いましょう。全科目で65〜70%以上の得点を安定して取れる状態が理想です。",
  },
  {
    step: "04",
    title: "計算ミスゼロを目標にした演習習慣を作る",
    body: "基礎問題が中心だからこそ、計算ミスによる失点が命取りになります。数学・物理・化学の演習では必ず検算を行い、ミスのパターンを把握して同じミスを繰り返さない仕組みを作りましょう。本番の試験時間を意識した時間配分の練習も早めに始め、見直しの時間を確保できるようにしておくことが重要です。",
  },
  {
    step: "05",
    title: "面接・小論文は夏前から準備を始める",
    body: "面接と小論文は直前対策では間に合いません。夏以降に本格化する前に、医師志望の動機・愛知医科大学への志望理由・地域医療への関心を言語化しておきましょう。愛知県の医療課題（高齢化社会・地域医療格差）について具体的な知識を持ち、自分の言葉で語れるように準備することが好印象につながります。",
  },
];

const schedule = [
  {
    period: "4〜6月",
    title: "基礎固め期",
    body: "英語は単語帳・文法書を1冊仕上げる。数学は教科書章末問題を完全習得。物理・化学は基礎問題集（物理のエッセンス・化学の新標準演習など）を開始。まずは全科目の基礎を均等に進める。",
  },
  {
    period: "7〜8月",
    title: "標準問題完成期",
    body: "英語は長文読解の演習を毎日1題。数学は標準問題集（基礎問題精講など）を完成させる。物理・化学は基礎問題集を1周し、苦手分野を集中特訓。面接の志望動機を言語化し始める。",
  },
  {
    period: "9〜10月",
    title: "演習・弱点補強期",
    body: "全科目で模試を積極的に受けて弱点を可視化する。数学・理科の頻出分野を重点的に演習。小論文は基本的な書き方（序論・本論・結論）を習得し、月2〜3題書く練習を始める。",
  },
  {
    period: "11〜12月",
    title: "過去問演習期",
    body: "愛知医科大学の過去問5年分を本番形式で解く。時間配分・解答順序を確立する。理科の得意度を確認し、苦手な単元を重点的に最終補強。面接練習を週1回以上行う。",
  },
  {
    period: "1〜2月",
    title: "仕上げ・直前期",
    body: "過去問の類題演習と弱点の最終確認。計算ミスゼロを徹底。面接の想定問答を声に出して練習。体調管理を最優先にし、本番当日に最高のパフォーマンスを発揮できる状態を整える。",
  },
];

const mistakes = [
  {
    title: "難問対策を優先して基礎をおろそかにする",
    body: "愛知医科大学では基礎〜標準問題が合否を決めます。難しい問題集に早期に手を出し、基礎が固まっていない状態で応用問題に取り組んでも定着しません。まず基礎問題集を完璧にし、その上で標準問題に進む順序を守ることが最短ルートです。",
  },
  {
    title: "理科を軽視して英数だけ対策する",
    body: "物理・化学は難易度が低い分、全受験生がある程度の得点を取ってきます。ここで差がつくのは「確実性」です。物理・化学で取りこぼすと、英語・数学でいくら高得点を取っても差が縮まりません。理科を得点の柱として丁寧に仕上げることが重要です。",
  },
  {
    title: "面接・小論文を試験直前まで放置する",
    body: "「筆記ができれば面接は何とかなる」という考えは危険です。面接官は志望動機の具体性・医師としての姿勢・大学への理解度を細かく見ています。直前に考え始めても説得力のある言葉は出てきません。夏ごろから志望動機を言語化する習慣をつけましょう。",
  },
];

const whyMedvance = [
  {
    title: "愛知医科大学の出題傾向に合わせた個別対策",
    body: "Medvanceでは愛知医科大学の過去問を詳細に分析し、頻出分野・出題形式に合わせた学習計画を個別に設計します。基礎固めから過去問演習まで、ムダのないルートで合格に導きます。",
  },
  {
    title: "現役慶應医学部生が弱点を直接指摘",
    body: "1対1の指導により、計算ミスのクセ・読解での思考の詰め方など個人特有の弱点を的確に見つけ出します。塾の授業では気づけない「なぜ間違えたか」の根本原因を一緒に特定します。",
  },
  {
    title: "面接・小論文まで一貫サポート",
    body: "筆記試験の対策だけでなく、面接の想定問答作成・小論文の添削まで一貫してサポートします。愛知医科大学が重視する地域医療への理解を深めるための情報提供も行います。",
  },
];

const faqs = [
  {
    q: "愛知医科大学の入試難易度はどのくらいですか？",
    a: "私立医学部の中では基礎〜標準レベルで、比較的取り組みやすい難易度です。難問はほとんど出題されないため、教科書レベルの基礎を確実に習得することが最も効果的な対策です。偏差値65前後が目安ですが、基礎の完成度で大きく合格可能性が変わります。",
  },
  {
    q: "愛知医科大学は愛知県出身でなくても合格できますか？",
    a: "はい、全国から受験生が集まる大学です。ただし、地域医療への関心を示すことは面接でプラスに働きます。愛知の医療状況や地域医療の課題について少し調べておくことをお勧めします。",
  },
  {
    q: "合格するための得点率の目安はどのくらいですか？",
    a: "1次試験の目安は得点率65〜70%程度とされています。基礎問題を確実に得点することで十分達成できるラインです。特に物理・化学は難易度が低いため、ここで高得点を取ることが重要です。",
  },
  {
    q: "理科は物理と化学のどちらを選ぶべきですか？",
    a: "どちらも難易度は低めですが、得意な方を選ぶのが基本です。両科目とも基礎的な内容が中心なので、高校の授業でより理解が深まっている科目を選択しましょう。どちらか一方のみ受験している場合は、早めに選択を固めて対策を集中させることをお勧めします。",
  },
  {
    q: "小論文のテーマはどのようなものが出ますか？",
    a: "医療倫理・地域医療・高齢化社会・チーム医療などのテーマが多い傾向にあります。時事的な医療ニュースにも目を向けておき、自分の考えを論理的に書けるよう事前に練習しておくことが重要です。",
  },
  {
    q: "何浪までなら合格できますか？",
    a: "愛知医科大学は浪人年数による制限は設けていません。大切なのは「今の学力と合格水準のギャップを埋めること」であり、何浪かよりも現在の学力状態と学習量が合否を決めます。ただし面接では浪人理由を問われることがあるため、前向きな回答を準備しましょう。",
  },
];

export default function AichiIkaPage() {
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
            愛知医科大学
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
              愛知県
            </span>
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              長久手キャンパス
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
            愛知医科大学は愛知県長久手市に位置し、中部圏の医療を支える臨床医の育成を目指す大学です。1971年の開学以来、地域医療への貢献を重視した教育を行っています。入試では英語・数学・理科2科目の筆記試験と面接・小論文が課されます。全科目で基礎〜標準問題が中心のため、基礎力の完成度が合否を直接決めます。附属病院を擁する地域医療の拠点として知られ、中部圏で医師を目指す受験生にとって重要な選択肢の一つです。
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
            愛知医科大学対策の相談はこちら
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
