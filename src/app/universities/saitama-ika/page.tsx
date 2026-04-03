import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "埼玉医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "埼玉医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。基礎〜標準レベルで地域医療への関心が面接で評価されます。完全個別指導で合格を目指す。",

  alternates: {
    canonical: "/universities/saitama-ika",
  },};

const overviewStats = [
  { label: "募集人員", value: "約120名" },
  { label: "競争倍率", value: "6〜9倍" },
  { label: "1次試験", value: "英・数・理科2科目" },
  { label: "2次試験", value: "小論文・面接" },
];

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解と文法・語彙問題が出題されます。標準的な難易度で、基礎英語力をしっかり固めれば安定した得点が狙えます。",
    tips: [
      "長文読解は2〜3題が典型構成。医療・科学・社会系テーマが頻出で、段落ごとの論旨把握と設問対応力を鍛えることが重要。",
      "文法・語彙は基礎〜標準レベル。英単語帳は1冊を完璧に仕上げたうえで、医療関連語彙を補足すると長文読解での理解度が高まる。",
      "整序・英作文が課される年もある。基本文型と語法を理解として身につけ、知識の抜け漏れを点検しておくこと。",
      "医療系英文に慣れておくと長文の内容把握が格段に楽になる。時事医療ニュースの英語版を週1〜2本読む習慣をつけるとよい。",
    ],
  },
  {
    name: "数学",
    level: "★★☆☆☆",
    body: "標準〜基礎レベルの問題が中心です。微積・確率・数列の典型問題を確実に解ける力が合格の条件です。",
    tips: [
      "大問4〜5題の記述・選択混合形式。難問はほとんどなく、基礎〜標準の典型問題を漏れなく習得することが最優先。",
      "微積分・確率・数列・ベクトルが頻出単元。これらを重点的に演習し、解法パターンを体系的に整理しておこう。",
      "計算ミスによる失点が合否に直結する。普段から検算を習慣化し、単純な計算の精度を上げることを意識する。",
      "過去問で出題パターンを把握すること。埼玉医科大学は出題傾向が比較的安定しており、過去問の反復学習が効果的。",
    ],
  },
  {
    name: "物理",
    level: "★★☆☆☆",
    body: "基礎〜標準レベルの問題が中心です。基本公式を正確に理解していれば十分に対応できる難易度です。",
    tips: [
      "力学・電磁気・波動から基礎〜標準レベルの問題が出題。教科書の基本事項を丁寧に理解することが最も重要。",
      "公式の丸暗記ではなく、現象の仕組みを理解した上で公式を使えるようにすること。問題文の状況をイメージする習慣が重要。",
      "標準問題集を1冊仕上げれば十分な対策になる。難問集に手を出す前に標準問題の精度を上げることを優先しよう。",
      "計算問題は単位管理を徹底し、数値の桁ミスや符号ミスを防ぐこと。見直しの時間を必ず残すよう時間配分を練習する。",
    ],
  },
  {
    name: "化学",
    level: "★★☆☆☆",
    body: "基礎〜標準レベルの出題です。理論化学の計算と有機化学の基礎を着実に身につけることが重要です。",
    tips: [
      "理論化学のモル計算・気体・溶液が中心。計算過程を丁寧に書き、単位を明記する習慣をつけることで失点を防げる。",
      "有機化学は官能基の性質と基本反応を体系的に覚えること。系統別に整理して暗記すると混乱が少なくなる。",
      "無機化学は主要な族の性質と反応式を確認しておくこと。配点は低めだが取りこぼしを防ぐために基礎は押さえる。",
      "難易度が低いため、基礎事項の正確な理解があれば高得点が狙える。ミスのない丁寧な解答を心がけること。",
    ],
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "地域医療への関心と医師としての志望動機が面接で重視されます。埼玉の地域医療に貢献する意志を伝えることが重要です。",
    tips: [
      "個人面接形式。「なぜ医師を志したか」「埼玉の医療にどう貢献したいか」「地域医療の現状をどう思うか」が典型的な質問。",
      "埼玉県の医師不足や地域医療の課題を事前に調べ、自分の言葉で語れるよう準備すること。具体的なデータや事例を交えると説得力が増す。",
      "小論文は医療・社会問題をテーマに論理的な文章力が求められる。序論・本論・結論の構成を守り、主張を明確にすること。",
      "面接練習は一人での想定問答だけでは不十分。声に出して話す練習と、他者からのフィードバックを受ける模擬面接を組み合わせること。",
    ],
  },
];

const strategies = [
  {
    step: "01",
    title: "基礎を完全に固めることを最優先にする",
    body: "埼玉医科大学は全科目で基礎〜標準問題が中心です。教科書レベルの内容を完全に理解し、典型問題を確実に解ける力を最初に身につけましょう。基礎が固まれば、その後の演習で急速に得点力が上がります。難問演習は基礎が完成した後に取り組む順序を守ることが、効率的な成績向上の鍵です。まず各科目の教科書・基礎問題集を完璧に仕上げることを目標にしてください。",
  },
  {
    step: "02",
    title: "全科目でバランスよく得点する",
    body: "難問が少ない分、どの科目でも大きな差がつきにくい入試です。1科目で大きく失点することを避け、全科目でバランスよく得点することが合格の条件になります。苦手科目を早めに把握し、重点的に補強する学習計画を立てましょう。科目ごとの得点率を定期的に確認し、低い科目に優先的に時間を配分する自己管理力が合否を分けます。",
  },
  {
    step: "03",
    title: "地域医療・埼玉の医療課題を学ぶ",
    body: "埼玉医科大学は地域に根ざした医師の育成を重視しており、面接では地域医療への関心が評価されます。埼玉県の医師不足の状況、地域医療の課題、プライマリケアの重要性などについて学び、自分の言葉で語れるよう準備しましょう。単なる知識の暗記ではなく、「なぜそれが問題なのか」「自分はどう関わりたいか」まで考えを深めることが面接での評価につながります。",
  },
  {
    step: "04",
    title: "面接の想定質問を念入りに準備する",
    body: "埼玉医科大学の面接では志望動機と地域医療への関心が深く問われます。「なぜ埼玉医科大学か」という問いに対して、大学の特徴（総合病院の充実、地域医療への取り組みなど）と自分の目標を結びつけた回答を準備しましょう。回答は簡潔かつ具体的に。抽象的な「医師になりたい」だけでなく、具体的な動機やエピソードを交えることで面接官に印象を残せます。",
  },
  {
    step: "05",
    title: "過去問で出題パターンを把握し演習を積む",
    body: "埼玉医科大学の出題傾向は比較的安定しているため、過去問の徹底分析が非常に有効です。少なくとも5〜7年分の過去問を解き、各科目の頻出単元・問題形式・難易度を把握しましょう。解いた問題は全て丁寧に復習し、間違えた問題の原因（知識不足か、理解不足か、計算ミスか）を分析することで効率的に弱点を補強できます。",
  },
];

const schedule = [
  {
    period: "高1〜高2",
    title: "基礎固めと学習習慣の確立",
    body: "英語は文法と単語の基礎を徹底する。数学は教科書レベルを完全理解し、標準問題集に着手。理科は教科書の概念理解を優先する。地域医療への関心を広げるため、医療に関する書籍やニュースに触れ始める。",
  },
  {
    period: "高3・4〜7月",
    title: "標準レベル完成と全範囲の仕上げ",
    body: "全科目の標準問題集を仕上げる。数学は頻出単元（微積・確率・数列）を重点演習。英語は長文読解の演習量を増やし速読・精読を鍛える。小論文対策をこの時期から開始し、月2〜3本書いて添削を受ける。",
  },
  {
    period: "高3・8〜9月",
    title: "弱点補強と過去問演習の開始",
    body: "夏期講習で弱点科目を集中補強。8月末から過去問を解き始め、出題傾向を把握する。面接の想定質問を作成し、声に出す練習を開始。埼玉の地域医療について調べてノートにまとめる。",
  },
  {
    period: "高3・10〜11月",
    title: "過去問中心の実戦演習",
    body: "過去問を時間を測って解き、本番と同じ条件での演習を積む。小論文は週1本のペースで継続。模擬面接を受けてフィードバックを改善に活かす。苦手単元の最終補強を行う。",
  },
  {
    period: "高3・12〜本番",
    title: "仕上げと体調管理",
    body: "新しい教材に手を出さず、既存教材の総復習を徹底。体調管理を最優先にし、睡眠と食事のリズムを維持。試験当日のシミュレーションを行い、精神的な準備も整える。",
  },
];

const failurePatterns = [
  {
    title: "苦手科目を後回しにして直前に焦る",
    body: "基礎〜標準問題が中心の埼玉医科大学では、苦手科目でも一定の得点が必要。1科目が大きく足を引っ張ると合格が難しくなる。苦手科目は早い段階から優先的に補強し、全科目でバランスよく得点できる状態を作ること。",
  },
  {
    title: "地域医療への関心が薄いまま面接に臨む",
    body: "埼玉医科大学の面接では地域医療への関心が明確に評価される。「特に考えたことがない」「一般論しか言えない」状態で面接に臨むと大きな失点につながる。事前に埼玉の医療状況を調べ、自分なりの考えを持って面接に臨むことが不可欠。",
  },
  {
    title: "過去問を解くだけで復習をしない",
    body: "過去問を解いて終わりにするのは最も非効率な勉強法。間違えた問題の原因を丁寧に分析し、同じミスを繰り返さないための対策を取らなければ過去問の価値が半減する。解いた後の復習時間を必ず確保するスケジュールを組むこと。",
  },
];

const whyMedvance = [
  {
    title: "基礎から丁寧な個別指導",
    body: "埼玉医科大学の合格に必要な基礎〜標準レベルの力を確実につけるため、現状の学力に合わせた完全個別カリキュラムを作成します。苦手科目を重点的に補強し、全科目でバランスのとれた得点力を養います。",
  },
  {
    title: "面接・小論文の一貫サポート",
    body: "地域医療への関心の育て方から小論文の添削、面接の模擬練習まで一貫してサポートします。面接で評価される回答の作り方を指導し、本番で自信を持って話せる状態を作ります。",
  },
  {
    title: "現役医学部生の実体験アドバイス",
    body: "Medvanceの指導担当は現役慶應医学部生です。私立医学部の入試を実際に経験した立場から、効率的な学習法と時間の使い方をリアルにアドバイスします。受験期の不安や疑問にも親身に対応します。",
  },
];

const faqs = [
  {
    q: "埼玉医科大学の入試難易度はどのくらいですか？",
    a: "私立医学部の中では基礎〜標準レベルです。難問はほとんど出題されないため、基礎を徹底的に固めることが最も効果的な対策です。教科書の内容を完全に理解し、典型問題を確実に解ける力を身につけましょう。",
  },
  {
    q: "埼玉医科大学は地元の受験生が有利ですか？",
    a: "地域医療への関心を持つ受験生を歓迎する傾向がありますが、他県の受験生でも「埼玉の地域医療に貢献したい」という明確な意志と具体的な理由を伝えれば評価されます。大学の特徴や地域医療への取り組みを事前に調べておくことが重要です。",
  },
  {
    q: "埼玉医科大学のキャンパスはどこにありますか？",
    a: "埼玉県毛呂山町に本院があります。複数の附属病院を有し、豊富な臨床実習環境が特徴です。地域に密着した医師育成を重視しており、卒業後も埼玉で働く医師を多く輩出しています。",
  },
  {
    q: "理科は物理と化学どちらが有利ですか？",
    a: "どちらも基礎〜標準レベルの出題なので、高校での学習状況や得意不得意で選ぶのが最善です。物理は計算中心で得点が安定しやすい一方、化学は暗記と計算の両方が必要です。苦手意識の少ない科目を選んで確実に得点できる状態を作ることが重要です。",
  },
  {
    q: "小論文の準備はいつから始めるべきですか？",
    a: "高3の夏（7〜8月）には始めることをお勧めします。小論文は短期間で急激に伸ばすことが難しいため、継続的に書いて添削を受けるサイクルが重要です。医療・社会問題への知識のインプットと、実際に書くアウトプット練習を同時並行で進めましょう。",
  },
  {
    q: "Medvanceで埼玉医科大学対策を始めるタイミングはいつが最適ですか？",
    a: "早ければ早いほど有利です。高3の夏までには本格的な大学別対策を開始することをお勧めします。それ以前は全科目の基礎固めを優先し、夏以降に過去問演習と面接・小論文対策にシフトするスケジュールが理想的です。現在の学力状況を踏まえた個別プランを無料相談でご提案します。",
  },
];

export default function SaitamaIkaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            埼玉医科大学<br />入試対策ガイド
          </h1>
          <p className="text-base mb-2" style={{ color: "rgba(255,255,255,0.85)" }}>
            基礎完成と地域医療への関心が合否を決める
          </p>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              埼玉県・毛呂山キャンパス
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              地域医療重視
            </span>
          </div>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            入試概要
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {overviewStats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 text-center" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs mb-2" style={{ color: "#6b7280" }}>{stat.label}</p>
                <p className="text-lg font-bold" style={{ color: "#0c1a33" }}>{stat.value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            埼玉医科大学は埼玉県毛呂山町に位置し、地域医療への貢献を建学の理念に掲げる医学部です。複数の附属病院を持ち、充実した臨床教育環境が特徴です。入試では英語・数学・理科2科目の筆記試験と面接・小論文が課されます。全科目で基礎〜標準レベルの出題が中心のため、基礎の完成度が合否を決めます。面接では地域医療への関心や志望動機が重視されており、埼玉の医療課題に対する理解と関心を示すことが評価につながります。
          </p>
        </div>
      </div>

      {/* 合格のための戦略 */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Strategy</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>合格のための戦略</h2>
          <div className="space-y-5">
            {strategies.map((s) => (
              <div key={s.step} className="flex gap-5 p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 科目別対策 */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Subject Analysis</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>科目別対策</h2>
          <div className="space-y-6">
            {subjects.map((s) => (
              <div key={s.name} className="bg-white p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-base" style={{ color: "#0c1a33" }}>{s.name}</h3>
                  <span className="text-sm" style={{ color: "#c9922a" }}>{s.level}</span>
                </div>
                <p className="text-sm mb-4" style={{ color: "#374151" }}>{s.body}</p>
                <ul className="space-y-2">
                  {s.tips.map((tip, i) => (
                    <li key={i} className="flex gap-2 text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                      <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "rgba(201,146,42,0.15)", color: "#c9922a" }}>
                        {i + 1}
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

      {/* 合格までのスケジュール */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Schedule</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>合格までのスケジュール</h2>
          <div className="space-y-4">
            {schedule.map((s, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: "#c9922a" }} />
                  {i < schedule.length - 1 && <div className="w-0.5 flex-1 mt-1" style={{ backgroundColor: "#e5e1d8" }} />}
                </div>
                <div className="pb-6">
                  <p className="text-xs font-bold mb-1" style={{ color: "#c9922a" }}>{s.period}</p>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* よくある失敗パターン */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Common Mistakes</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>よくある失敗パターン</h2>
          <div className="space-y-4">
            {failurePatterns.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8", borderLeft: "4px solid #c9922a" }}>
                <h3 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* なぜMedvanceか */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Why Medvance</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>なぜMedvanceか</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {whyMedvance.map((w, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-4" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>
                  {i + 1}
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{w.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>FAQ</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>よくある質問</h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {f.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>A. {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <MedvanceBanner />

      {/* CTA */}
      <div className="py-16 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            埼玉医科大学対策の相談はこちら
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が個別に合格戦略をアドバイスします。無料相談受付中。
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
