import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";
import UniversityHero from "@/components/UniversityHero";

export const metadata = {
  title: "福岡大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description:
    "福岡大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。全科目バランス型の九州圏私立医学部への完全対策ガイドです。",

  alternates: {
    canonical: "/universities/fukuoka",
  },};

const stats = [
  { label: "募集人員", value: "約60名" },
  { label: "競争倍率", value: "約15倍" },
  { label: "1次試験", value: "英・数・理2科目" },
  { label: "2次試験", value: "面接" },
];

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解と文法・語彙問題がバランスよく出題されます。全体的な英語力が均等に問われる標準的な難易度です。",
    tips: [
      "長文読解2〜3題と文法・語彙・整序問題の混在構成。どちらの形式も均等に対策する必要がある。",
      "医療・科学系テーマが頻出。関連する語彙（diagnosis, treatment, genome, treatmentなど）を重点的に習得する。",
      "標準語彙の定着が最優先。難関校レベルの単語は不要だが、標準単語帳1冊は完璧にする。",
      "長文読解は内容一致問題と下線部説明問題が多い。本文に戻って根拠を確認する精読習慣をつける。",
      "文法問題は整序・空所補充が中心。基礎文法（時制・接続詞・関係詞）を正確に使いこなせるよう復習する。",
    ],
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心で、頻出分野をしっかり押さえることで安定した得点が狙えます。",
    tips: [
      "大問4〜5題。微積分・確率・数列が最頻出分野。これら3分野の解法を完全習得することが最優先。",
      "途中式を整理しながら解く練習を重ね、見直ししやすい答案を作る習慣をつける。",
      "難問より解法の安定性と計算精度が重要。標準問題集を1冊完璧にしてから過去問演習に移行する。",
      "時間配分の練習を早めに始める。本番試験時間内に全問に手をつけられるリズムを確立する。",
      "ベクトル・複素数・数学Iの三角関数も出題されることがある。全範囲を均等に仕上げておく。",
    ],
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気を中心とした標準的な問題が出題されます。基礎から応用まで幅広い範囲への対応力が必要です。",
    tips: [
      "力学（運動方程式・運動量保存・エネルギー）と電磁気（コンデンサ・電磁誘導）の配点が高い。",
      "公式を現象理解と結びつけて習得することが重要。丸暗記では応用問題に対応できない。",
      "波動・熱力学も標準的なレベルで出題される。全分野をバランスよく仕上げておく。",
      "計算問題が多いため、有効数字・単位の取り扱いを常に意識した演習を行う。",
      "過去問を解いて出題パターンと難易度を把握し、苦手分野を重点的に強化する。",
    ],
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・理論・無機化学がバランスよく出題されます。全分野の均等な対策と計算問題の精度が合否を分けます。",
    tips: [
      "理論化学（化学平衡・熱化学・電気化学）・有機化学（構造決定・官能基反応）・無機化学（元素の性質）がバランスよく出題。",
      "理論化学の計算問題は特に重要。モル計算・溶液の濃度・電気分解の量的関係を確実に習得する。",
      "有機化学の構造決定問題は出題されやすい。アルコール・エーテル・カルボン酸・エステルの相互変換を体系的に理解する。",
      "無機化学は暗記量が多いが、理論と結びつけて理解することで記憶の定着率が上がる。",
      "過去問5年分で出題傾向を確認し、頻出分野への重点的な演習と苦手分野の補強を並行して行う。",
    ],
  },
  {
    name: "面接",
    level: "★★★☆☆",
    body: "個人面接が実施されます。医師を志す動機の明確さと人間性・コミュニケーション能力が評価されます。",
    tips: [
      "「なぜ医師になりたいのか」「なぜ福岡大学医学部を選んだのか」は具体的なエピソードを交えて答えられるよう準備する。",
      "福岡大学医学部の特徴（七隈キャンパス・附属病院の臨床教育・地域医療への貢献）について調べておく。",
      "医師としての倫理観・患者への姿勢・チーム医療への理解を問われることが多い。",
      "九州・福岡の地域医療課題（高齢化社会・医師不足・福岡市の医療インフラ）への関心を示すと好印象。",
      "模擬面接を複数回行い、想定外の質問にも落ち着いて答えられる練習を積む。",
    ],
  },
];

const strategies = [
  {
    step: "01",
    title: "全科目バランス重視で苦手を完全になくす",
    body: "福岡大学医学部は「全科目バランス型」の入試です。得意科目で稼ぐ作戦より、苦手科目をなくして全科目で安定した得点を取ることが合格への最短ルートです。定期的に模試で各科目の得点を確認し、最も遅れている科目の補強を優先する学習計画を維持しましょう。倍率は約15倍と高いため、1科目の大きな失点が命取りになります。",
  },
  {
    step: "02",
    title: "数学・理科の頻出分野を完全習得する",
    body: "微積分・確率・数列（数学）、力学・電磁気（物理）、理論・有機化学（化学）はいずれも毎年高頻度で出題されます。これらの頻出分野を完全に習得することが合格への最も効率的な対策です。基礎問題集で解法を定着させ、標準問題集で応用力を鍛え、過去問で出題形式に慣れる3ステップを着実に進めましょう。",
  },
  {
    step: "03",
    title: "英語は語彙力と読解スピードを同時に鍛える",
    body: "英語の長文読解では語彙力・読解スピード・内容把握力がすべて問われます。毎日英文を読む習慣をつけ、医療・科学系テーマへの親しみを高めましょう。文法問題も出題されるため、基礎文法の穴をなくすことも同様に重要です。英語は他の受験生との差がつきやすい科目のため、英語での高得点を合格戦略の柱に据えましょう。",
  },
  {
    step: "04",
    title: "計算精度を高める演習習慣を徹底する",
    body: "数学・物理・化学の計算問題では、精度の高い計算力が直接得点に影響します。普段の演習から検算を必ず行い、計算ミスのパターンを把握して繰り返さないよう対策しましょう。本番を想定した時間管理の練習も早期から行い、見直し時間を確保できる解答リズムを確立することが重要です。",
  },
  {
    step: "05",
    title: "面接は具体的なエピソードで医師志望動機を語る準備をする",
    body: "福岡大学医学部の面接では、医師を志す動機の具体性と人間性が評価されます。「医師になりたい」という一般論だけでなく、自分の具体的な体験と結びつけた志望動機を語れるよう準備しましょう。福岡大学医学部ならではの特徴（教育方針・附属病院・地域医療活動）を事前に調べ、「なぜここなのか」を明確に伝えられるようにすることが重要です。",
  },
];

const schedule = [
  {
    period: "4〜6月",
    title: "全科目基礎固め期",
    body: "英語は単語帳と文法書を1冊ずつ完成させる。数学は教科書全範囲を復習し典型問題を習得。物理・化学は基礎問題集を開始。全科目を均等に進め、弱点科目を早期に把握する。",
  },
  {
    period: "7〜8月",
    title: "標準問題完成期",
    body: "英語は長文読解演習を毎日1〜2題。数学・物理・化学は標準問題集を完成させる。模試を活用して全科目の弱点を可視化し、夏休み中に重点補強を行う。面接の志望動機を言語化し始める。",
  },
  {
    period: "9〜10月",
    title: "演習・弱点補強期",
    body: "全科目で模試を定期的に受けて習熟度を確認する。数学・理科の頻出分野（微積・力学・有機化学）を中心に演習量を増やす。福岡の地域医療課題についてリサーチし、面接用の回答を整理する。",
  },
  {
    period: "11〜12月",
    title: "過去問演習・総仕上げ",
    body: "福岡大学医学部の過去問5年分を本番形式で解く。時間配分・解答順序を確立。弱点分野の最終補強を行う。面接練習を週1〜2回実施し、想定問答を洗練させる。",
  },
  {
    period: "1〜2月",
    title: "直前仕上げ期",
    body: "過去問類題と弱点の最終確認。英語の語彙確認と長文演習を継続。計算ミスゼロを意識した精度訓練。面接の想定問答を声に出して反復練習。体調管理を最優先に整える。",
  },
];

const mistakes = [
  {
    title: "得意科目に偏った学習で苦手を放置する",
    body: "福岡大学医学部は全科目バランス型の入試です。「英語は得意だから数学を頑張れば合格できる」という考えでは、約15倍の中で合格水準に達しません。どの科目も全受験生が一定レベルを満たしてきます。苦手科目での大幅な失点が不合格の直接原因になるため、全科目を均等に仕上げる学習計画を維持することが重要です。",
  },
  {
    title: "化学の3分野を均等に対策しない",
    body: "化学では有機・無機・理論化学がバランスよく出題されます。「理論化学の計算は得意だが有機化学が苦手」という状態では、有機分野で大きく失点します。3分野を均等に仕上げることが安定した得点の条件です。苦手分野があれば夏以降に集中補強の時間を作り、入試までに全分野を一定水準まで引き上げましょう。",
  },
  {
    title: "面接で大学への理解なしに抽象的な志望動機を話す",
    body: "「患者さんを助けたいから医師になりたい」という抽象的な答えは、面接官に何の印象も残りません。福岡大学医学部の教育方針・附属病院・地域医療への取り組みについて具体的に調べ、「なぜ他の大学でなく福岡大学医学部なのか」を明確に語れることが重要です。自分の体験と大学の特徴を結びつけた具体的な志望動機を準備しましょう。",
  },
];

const whyMedvance = [
  {
    title: "全科目バランス対策の個別プランニング",
    body: "Medvanceでは福岡大学医学部の全科目出題傾向を分析し、バランスよく得点できる個別学習計画を設計します。苦手科目の特定と重点補強から、得意科目のさらなる伸ばし方まで、最適なロードマップを提供します。",
  },
  {
    title: "現役慶應医学部生による密度の高い指導",
    body: "1対1の個別指導で、各科目の解法の理解度・計算ミスのクセ・読解の弱点を直接指摘します。集団授業では見えない個人の弱点を明確にし、効率的な改善につなげます。",
  },
  {
    title: "面接対策まで一貫してサポート",
    body: "筆記試験の対策だけでなく、面接の想定問答作成・模擬面接まで一貫してサポートします。福岡大学医学部のアドミッションポリシーに合わせた志望動機の磨き上げも行います。",
  },
];

const faqs = [
  {
    q: "福岡大学医学部の難易度はどのくらいですか？",
    a: "私立医学部の中では標準的な難易度です。全科目で基礎〜標準問題が中心ですが、2025年度の系統別日程は14.5倍と高倍率でした。各科目で着実に得点することが求められるため、全科目バランスよく仕上げることが合格への最重要条件です。",
  },
  {
    q: "九州以外の出身でも受験・合格できますか？",
    a: "もちろん受験できます。全国からの受験者が多い大学です。ただし面接では地域医療への関心が問われることがあるため、福岡・九州の医療状況について調べておくとよいでしょう。",
  },
  {
    q: "競争倍率が高いですが合格するにはどうすればよいですか？",
    a: "倍率の高さは受験者数の多さを反映しています。重要なのは「合格ラインに達しているかどうか」であり、倍率そのものより自分の学力と合格水準のギャップを埋めることに集中することが大切です。全科目でバランスよく得点できる実力をつけることが合格への道です。",
  },
  {
    q: "理科は物理と化学のどちらを選ぶべきですか？",
    a: "どちらも難易度は同程度です。得意な方を選ぶのが基本ですが、どちらが点数を取りやすいかは個人の得意不得意によります。両科目ともバランスよく出題されるため、一方が著しく苦手な場合は早めに補強しておくことをお勧めします。",
  },
  {
    q: "合格に必要な得点率の目安はありますか？",
    a: "1次試験は得点率65〜70%程度が目安とされています。全科目でこの水準を達成することが合格条件です。特定の1科目が突出しても、他の科目で大きく失点すると合格は難しくなります。",
  },
  {
    q: "浪人生でも合格できますか？",
    a: "浪人年数による明示的な不利はありません。現役・浪人を問わず、学力と準備の充実度が合否を決めます。面接では浪人した理由を問われることがあるため、前向きで誠実な回答を準備しておきましょう。",
  },
];

export default function FukuokaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <UniversityHero slug="fukuoka">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            福岡大学医学部
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
              福岡県
            </span>
            <span
              className="px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              全科目バランス型
            </span>
          </div>
        </div>
      </UniversityHero>

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
            福岡大学医学部は福岡市城南区七隈に位置し、九州圏の私立医学部として豊富な臨床実習環境を誇る大学です。附属病院は1,300床以上を有し、多様な診療科での早期臨床教育が特徴です。入試は英語・数学・理科2科目の筆記試験と面接で構成されます。全科目でバランスよく得点することが求められる「全科目バランス型」の入試であり、特定科目への偏りがある受験生は苦戦しやすい傾向があります。競争倍率が高めのため、基礎〜標準問題の確実な得点が合否を決めます。
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
            福岡大学医学部対策の相談はこちら
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
