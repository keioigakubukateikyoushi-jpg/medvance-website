import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "獨協医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "獨協医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。標準問題中心で小論文あり。基礎完成と小論文対策が合否を決める戦略を詳しく紹介します。",

  alternates: {
    canonical: "/universities/dokkyo",
  },};

const overviewStats = [
  { label: "募集人員", value: "52名" },
  { label: "競争倍率", value: "約26倍" },
  { label: "1次試験", value: "英・数・理科2科目" },
  { label: "2次試験", value: "小論文・面接" },
];

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解と文法・語彙問題がバランスよく出題されます。標準的な難易度で、基礎英語力を固めることが最優先です。",
    tips: [
      "長文読解は2〜3題が典型的な構成。医療・科学・社会系テーマが頻出で、段落ごとの論旨を素早くつかむ訓練が必要。",
      "文法・語彙問題は基礎〜標準レベル。英単語帳は1冊を完璧に仕上げることを目標に、医学系の専門語も補足しておくと有利。",
      "整序・英作文が出題される年もある。基本的な文型と語法を丸暗記でなく理解として定着させること。",
      "時間管理が合否に直結する。長文1題あたりの目安時間を決め、過去問で反復練習することで本番の感覚を掴もう。",
    ],
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心です。微積・確率・数列・ベクトルの典型問題を習得することで安定した得点が可能です。",
    tips: [
      "大問4〜5題の記述式が中心。答えだけを急がず、途中式を整理して書く訓練を重ねておくと本番で見直ししやすくなる。",
      "微積分・確率・数列・ベクトルは毎年出題される最重要単元。これらの典型問題のパターンを完全に習得することが合格への近道。",
      "難問はほとんど出題されない。標準問題集を1〜2冊仕上げれば十分な得点力がつく。奇問より頻出問題の精度を上げることを優先しよう。",
      "計算ミスが合否を直接左右する。普段の演習から必ず検算を習慣化し、本番で安定した答案を作れるようにすること。",
    ],
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気・波動から標準的な問題が出題されます。基本公式の確実な理解と計算の正確性が重要です。",
    tips: [
      "力学は運動方程式・エネルギー保存・運動量保存が毎年の頻出。現象のイメージを持った上で公式を使えるようにすること。",
      "電磁気は回路・コンデンサ・電磁誘導が重要分野。基本回路の解き方をパターンとして習得し、応用問題にも対応できる地力をつけよう。",
      "波動と熱力学も毎年出題される。波の重ね合わせ・干渉・屈折、および気体の状態変化は基本問題を確実に解けるようにしておくこと。",
      "難問はほとんどないため、計算ミスで落とさないことが最優先。単位確認と検算を問題ごとに徹底すること。",
    ],
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題されます。計算問題の正確性と有機反応の知識が得点につながります。",
    tips: [
      "理論化学のモル計算・気体の状態方程式・溶液の濃度・化学平衡は毎年必出。計算過程で単位を明記する習慣をつけ、失点を防ごう。",
      "有機化学は官能基の性質と主要反応を系統的に整理すること。構造決定問題は論理的に選択肢を絞る訓練が必要で、演習量が直接得点に反映される。",
      "無機化学は族ごとの性質と主要な反応式を確実に暗記すること。出題数は多くないが、ここで失点するとライバルとの差が広がる。",
      "有機と理論の配点が高い傾向。時間配分を意識して、配点の高い問題から着手する戦略を過去問演習で身につけよう。",
    ],
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "小論文と個人面接が課されます。医療への志望動機と社会問題への見解を論理的に述べる力が問われます。",
    tips: [
      "小論文は600〜800字程度で医療倫理・社会問題・医師の在り方に関するテーマが頻出。序論・本論・結論の構成を守り、自分の主張を明確に述べること。",
      "日頃から医療ニュースや生命倫理の話題に触れ、自分なりの見解を持つ習慣をつけること。書けるネタのストックが小論文の質を大きく左右する。",
      "面接では「なぜ医師を志したか」「獨協医科大学を選んだ理由」「栃木県の地域医療への関心」などが問われる。地域医療の現状と課題を事前に調べ、自分の言葉で語れる準備をすること。",
      "小論文は独学での改善に限界がある。複数回書いて指導者に添削してもらうサイクルを繰り返すことで、短期間で大きく伸ばせる。",
    ],
  },
];

const strategies = [
  {
    step: "01",
    title: "全科目の基礎を徹底的に固める",
    body: "獨協医科大学は全科目で標準問題が中心のため、基礎の完成度が合否を決定的に左右します。各科目の基本事項を漏れなく理解し、典型問題を安定して解ける力を最優先で身につけましょう。難問への対策は基礎が完成してから始めるのが正しい順序で、難問ばかり追って基礎をおろそかにすることが最も危険な失敗パターンです。まず教科書レベルの内容を完璧に理解し、標準問題集1冊を確実に仕上げることを目標にしてください。",
  },
  {
    step: "02",
    title: "計算ミスゼロの習慣を徹底する",
    body: "標準問題が中心の獨協医科大学では、解けるはずの問題でのケアレスミスが合否に直結します。数学・理科の普段の演習から必ず検算する習慣をつけ、答案を書き終えた後に単位確認と計算のチェックを行うルーティンを確立しましょう。本番では焦りから計算ミスが増えやすいため、演習中から「絶対にミスしない」という意識で問題に向かうことが大切です。試験時間を計って過去問を解く練習を重ね、時間的余裕を持った解答ペースを身につけてください。",
  },
  {
    step: "03",
    title: "小論文対策を高3の夏から開始する",
    body: "獨協医科大学では小論文が課されます。医療倫理・社会問題に関する自分の見解を論理的に文章化する力は、短期間では身につきません。高3の夏頃から実際に書く練習を始め、添削指導を繰り返すことで文章の質を高めましょう。テーマ知識の蓄積も重要で、終末期医療・臓器移植・医師不足・AIと医療など頻出トピックについて自分の意見を整理しておくことが、試験本番での対応力につながります。",
  },
  {
    step: "04",
    title: "地域医療への関心を面接で具体的に伝える",
    body: "獨協医科大学は栃木県壬生町に位置し、地域医療への貢献を重視しています。「なぜ栃木の獨協医科大学なのか」という質問に答えられるよう、栃木県の医師不足の現状や地域医療の課題について調べ、自分なりの医師像と結びつけて語れる準備をしましょう。地元の受験生でなくても、地域医療への真剣な関心があることを示す具体的なエピソードがあれば非常に好印象です。面接練習は一人での想定問答だけでなく、模擬面接を複数回受けることで自信と対応力が身につきます。",
  },
  {
    step: "05",
    title: "過去問を10年分遡って出題傾向を把握する",
    body: "獨協医科大学の入試は出題傾向が比較的安定しているため、過去問の徹底分析が非常に有効です。各科目の頻出単元・問題形式・難易度レンジを把握することで、何を優先的に学習すべきかが明確になります。過去問は単に解くだけでなく、間違えた問題の原因を分析し、弱点を確実につぶすPDCAサイクルで取り組むことが合格への最短ルートです。特に直近3〜5年分は本番直前に時間を測って解き、本番のシミュレーションをしっかり行いましょう。",
  },
];

const schedule = [
  {
    period: "高1〜高2",
    title: "基礎固めと学習習慣の確立",
    body: "英語は文法と単語の基礎を徹底する。数学は教科書レベルを完全理解し、青チャートなどの標準問題集に着手。理科は教科書の概念理解を優先し、丸暗記に頼らない学習スタイルを作る。医療への関心を広げるため、医療ニュースや書籍に触れ始める。",
  },
  {
    period: "高3・4〜7月",
    title: "標準レベル完成と全範囲の仕上げ",
    body: "全科目の標準問題集を1冊ずつ仕上げる。特に数学は頻出単元（微積・確率・数列・ベクトル）を重点的に演習。英語は長文読解の演習量を増やし、1日1題のペースで速読・精読の両方を鍛える。小論文対策をこの時期から開始し、月2〜3本を書いて添削を受ける。",
  },
  {
    period: "高3・8〜9月",
    title: "弱点補強と過去問演習の開始",
    body: "夏期講習で弱点科目を集中的に補強する。8月末から獨協医科大学の過去問を解き始め、出題傾向を把握する。各科目の頻出単元を確認し、学習の優先順位を再調整。面接の想定質問を作成し、声に出して答える練習を始める。",
  },
  {
    period: "高3・10〜11月",
    title: "過去問中心の実戦演習",
    body: "過去問を時間を測って解き、本番と同じ条件での演習を積む。間違えた問題を必ず復習し、同種の問題で再度失点しないよう対策する。小論文は週1本のペースで書き続け、テーマのバリエーションを広げる。模擬面接を受け、面接官からのフィードバックを改善に活かす。",
  },
  {
    period: "高3・12〜本番",
    title: "仕上げと体調管理",
    body: "新しい問題集に手を出さず、これまで使ってきた教材の総復習を徹底する。体調管理を最優先にし、睡眠と食事の規則正しいリズムを維持。面接の最終確認と本番への心理的準備を整える。試験当日の動き（持ち物・会場までのルート・時間配分）をシミュレーションしておく。",
  },
];

const failurePatterns = [
  {
    title: "基礎をおろそかにして難問に取り組む",
    body: "獨協医科大学は標準問題が中心なのに、難問演習に時間を使いすぎて基礎的な問題を取りこぼすパターンが非常に多い。基礎が9割、応用・難問は1割という比率を意識し、典型問題を確実に解ける精度を上げることが最優先。",
  },
  {
    title: "小論文・面接対策を後回しにする",
    body: "筆記試験の勉強を優先するあまり、小論文と面接対策を入試直前まで放置するのは危険。小論文は1〜2ヶ月での劇的な改善が難しく、面接は話す練習なしに本番でうまく話せるものではない。夏から計画的に取り組むことが不可欠。",
  },
  {
    title: "本番の時間配分を練習していない",
    body: "普段の演習で時間を計らずに解く習慣がついていると、本番で時間切れになりやすい。獨協医科大学の試験時間と問題数を確認し、各問題にかけられる時間の目安を決めて過去問演習で繰り返し体に覚え込ませること。",
  },
];

const whyMedvance = [
  {
    title: "大学別傾向の完全把握",
    body: "獨協医科大学の過去問を徹底分析し、各科目の頻出単元・問題形式・難易度レンジを把握した指導が可能です。一般的な受験対策ではなく、この大学の合格に特化した学習計画を提供します。",
  },
  {
    title: "小論文・面接の一貫サポート",
    body: "筆記試験の対策だけでなく、小論文の添削指導と面接の模擬練習まで一貫してサポートします。医療倫理や社会問題に関する知識のインプットから、実際に書く・話すアウトプット練習まで継続的に指導します。",
  },
  {
    title: "現役医学部生による実体験ベースの指導",
    body: "Medvanceの指導を担当するのは現役慶應医学部生です。私立医学部の入試を実際に経験した視点から、「何を、どの順番で、どれだけ」学べばよいかを具体的にアドバイスします。受験生の不安や疑問に寄り添った個別対応が可能です。",
  },
];

const faqs = [
  {
    q: "獨協医科大学の入試難易度はどのくらいですか？",
    a: "私立医学部の中では標準的なレベルです。全科目で基礎〜標準問題が中心のため、基礎の完成度を高めることが最も効果的な対策です。難問への対策よりも、解けるはずの問題を確実に得点する安定性が合否を分けます。",
  },
  {
    q: "獨協医科大学の小論文はどのようなテーマが出ますか？",
    a: "医療倫理・社会問題・医師の在り方に関するテーマが頻出です。600〜800字程度で自分の意見を論理的に述べる形式が多いです。終末期医療、臓器移植、地域医療、医師の働き方改革などのトピックについて日頃から考えを整理しておくことが重要です。",
  },
  {
    q: "獨協医科大学は地元（栃木）の受験生が有利ですか？",
    a: "地域医療への貢献意識を持っていることはプラスに働きます。ただし、他地域の受験生でも「なぜ獨協医科大学で学びたいか」「地域医療にどう貢献したいか」を具体的に語れれば、十分に評価されます。地域への関心の深さが重要で、居住地は決定的な要因ではありません。",
  },
  {
    q: "理科は物理と化学のどちらを選ぶべきですか？",
    a: "どちらも標準的な難易度なので、高校での学習状況や得意不得意で判断してください。物理は計算中心で得点が安定しやすい一方、化学は暗記と計算の両方が必要です。どちらの科目も基礎が固まっていれば十分に対応できるため、苦手意識の少ない方を選ぶのが合理的です。",
  },
  {
    q: "獨協医科大学の1次試験の合格ラインはどのくらいですか？",
    a: "年度によって変動しますが、概ね各科目60〜70％程度の得点率が1次通過の目安とされています。満点を目指すより、全科目でまんべんなく6〜7割を確実に取る安定性の方が重要です。1科目で大きく失点するリスクを減らす学習計画を立てましょう。",
  },
  {
    q: "Medvanceで獨協医科大学対策を始めるベストなタイミングはいつですか？",
    a: "早ければ早いほど有利ですが、高3の夏（7〜8月）までには本格的な大学別対策を開始することをお勧めします。それ以前は全科目の基礎固めを優先し、夏以降に過去問演習と大学特有の対策（小論文・面接）にシフトするスケジュールが理想的です。現在の学力状況に合わせた個別の学習計画を無料相談でご提案します。",
  },
];

export default function DokkyoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            獨協医科大学<br />入試対策ガイド
          </h1>
          <p className="text-base mb-2" style={{ color: "rgba(255,255,255,0.85)" }}>
            基礎完成・小論文・地域医療への関心が合否を決める
          </p>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              栃木県・壬生キャンパス
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              小論文あり
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
            獨協医科大学は栃木県下都賀郡壬生町に位置し、1973年の開学以来、地域に根ざした臨床医の育成を重視してきた大学です。入試は英語・数学・理科2科目の筆記試験に加え、小論文と面接が課されます。全科目で標準問題が中心のため、難問より基礎の完成度が合否を決定します。総合病院として高い評価を持つ附属病院を有し、充実した臨床実習環境が特徴です。地域医療への貢献意識を持つ受験生を歓迎する大学であり、面接と小論文では地域医療への関心や医師としての姿勢が問われます。
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
            獨協医科大学対策の相談はこちら
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
