import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "聖マリアンナ医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "聖マリアンナ医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。キリスト教建学精神に基づく面接重視の選考を徹底解説します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解を中心に文法・語彙問題が出題されます。医療・倫理系テーマの英文への慣れが得点を左右します。",
    detail: "長文読解2〜3題が主体で、医療・倫理系テーマが頻出です。キリスト教的な人間観に関わる文章が出題されることもあります。文法問題は標準レベルです。英単語の基礎〜標準をしっかり身につけ、長文の論旨を正確に把握する読解力を鍛えることが重要です。時間内に全問解き切るペース配分も意識しましょう。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心で、微積・確率・三角関数から頻出です。典型問題の習得が得点の安定につながります。",
    detail: "大問4〜5題構成で、記述式問題では途中式の論理的な記述が求められます。微積分・確率・三角関数・ベクトルを重点的に対策しましょう。難問は少ないため、基本〜標準レベルを確実に解ける力が合否を分けます。過去問演習で出題パターンを把握し、取れる問題を確実に得点する意識を持ちましょう。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気・波動から標準的な問題が出題されます。公式の正確な理解と計算の丁寧さが求められます。",
    detail: "力学（運動方程式・エネルギー保存）と電磁気（コンデンサー・回路）が頻出です。波動・熱力学も毎年出題されます。難問は少なく、標準問題集を完璧にすれば高得点が狙えます。計算ミスが失点につながりやすいため、普段から検算を習慣化しましょう。物理の本質的な理解を重視した学習を心がけましょう。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学が均等に出題されます。計算問題の正確性と有機反応の知識が得点に直結します。",
    detail: "理論化学（モル計算・気体・平衡・電気分解）と有機化学（官能基・反応・構造決定）が特に重要です。無機化学は各族の反応と特性を確実に押さえておきましょう。計算問題は単位換算から丁寧に行い、ケアレスミスを防ぐことが大切です。有機化学の構造決定は毎年出題されるため、典型問題のパターンを繰り返し練習しましょう。",
  },
  {
    name: "面接・小論文",
    level: "★★★★☆",
    body: "聖マリアンナ医科大学は建学精神（キリスト教的人間愛）に基づく面接を非常に重視します。医師としての使命感や倫理観が深く問われます。",
    detail: "面接では「なぜ医師になりたいのか」に加え、「生命の尊厳」「患者への奉仕」「チーム医療における役割」などキリスト教的価値観に関連した質問が多くなっています。ボランティア経験や医療体験など具体的なエピソードを準備しておくことが重要です。小論文は医療倫理・社会問題に関するテーマで、論理的に自分の意見を述べる練習が必要です。",
  },
  {
    name: "総合戦略",
    level: "★★★☆☆",
    body: "筆記試験の基礎固めを前提に、面接・小論文での深い準備こそが他の受験生と差をつける最大の武器です。",
    detail: "聖マリアンナ医科大学は面接の比重が非常に高く、筆記試験をクリアした後の面接・小論文で合否が決まるケースが多いです。筆記試験は基礎〜標準の完成度を高め、余った時間を面接・小論文の準備に充てる戦略が有効です。建学精神への深い共感を自分の言葉で語れるかどうかが合否の鍵を握ります。",
  },
];

const strategies = [
  {
    step: "01",
    title: "建学精神への共感を自分の言葉で語れるようにする",
    body: "聖マリアンナ医科大学は面接の比重が非常に高い大学です。単に「医師になりたい」という気持ちを伝えるだけでなく、建学精神であるキリスト教的な人間愛や奉仕の精神とどのように共鳴しているかを、自分の言葉で具体的に語れるよう準備しましょう。信者でなくても、「命の尊厳」「患者への奉仕」という価値観への共感を真摯に表現することが大切です。",
  },
  {
    step: "02",
    title: "ボランティア・医療体験のエピソードを整理する",
    body: "面接でボランティア活動や病院見学などの具体的な体験を問われることがあります。何を経験したか、そこから何を学んだかを明確に語れるよう、自身の体験を振り返って言語化しておきましょう。体験がまだない受験生は、今からでも積極的に行動し、実際の医療現場の空気に触れておくことをお勧めします。",
  },
  {
    step: "03",
    title: "英語・数学・理科の基礎を確実に固める",
    body: "筆記試験は標準レベル中心のため、基礎〜標準問題を確実に得点できる力が合格の土台になります。各科目の基本事項を漏れなく習得し、典型問題を見た瞬間に解法が浮かぶレベルまで仕上げましょう。難問への過度な対策よりも基礎の完成度を高めることが合格への近道です。",
  },
  {
    step: "04",
    title: "医療倫理・小論文の知識を積み上げる",
    body: "聖マリアンナ医科大学の小論文・面接では医療倫理や生命の尊厳に関するテーマが頻出です。インフォームドコンセント、終末期医療、再生医療といった医療倫理の基本テーマについて、自分の意見と根拠を論理的に述べられるよう準備しましょう。医療ニュースを定期的にチェックする習慣をつけることも有効です。",
  },
  {
    step: "05",
    title: "模擬面接で繰り返し練習する",
    body: "面接は事前の準備量が直接パフォーマンスに影響します。想定質問に対する回答を用意するだけでなく、実際に声に出して答える練習を繰り返しましょう。特に「建学精神への共感」「ボランティア経験から学んだこと」「医師になったら何をしたいか」の3点は必ず自然に話せるよう練習しておくことが重要です。",
  },
];

const timeline = [
  {
    period: "高2冬〜高3春",
    title: "基礎固めと医師志望動機の深掘り",
    body: "英語・数学・理科の基礎を固める。同時に、なぜ医師になりたいか・聖マリアンナを選ぶ理由を自分の中で深掘りし始める。ボランティア活動や病院見学に積極的に参加する。",
  },
  {
    period: "高3夏（6〜8月）",
    title: "標準問題演習と面接準備のスタート",
    body: "全科目で標準問題集を仕上げる。面接の想定問答を作成し声に出す練習を開始。小論文の基礎として医療倫理の基本テーマを学ぶ。",
  },
  {
    period: "高3秋（9〜10月）",
    title: "過去問演習と面接・小論文強化",
    body: "聖マリアンナ医科大学の過去問演習を開始。面接練習を週1回以上行う。小論文の書き方を習得し、実際に時間を計って論文を書く練習を始める。",
  },
  {
    period: "高3冬（11〜1月）",
    title: "仕上げ演習と面接最終準備",
    body: "筆記試験の最終確認と弱点補強。面接の想定問答をブラッシュアップし、自然体で話せる状態を作る。小論文は医療倫理・建学精神に関するテーマで演習を積む。",
  },
  {
    period: "直前期（1月〜本番）",
    title: "精神面の安定と最終調整",
    body: "筆記試験の苦手分野最終確認。面接では「聖マリアンナらしい医師像」を自然体で語れる状態を確認。体調管理と精神的な安定を最優先にする。",
  },
];

const mistakes = [
  {
    title: "面接対策を筆記試験が終わってから始める",
    body: "聖マリアンナ医科大学は面接の比重が非常に高く、直前対策では間に合いません。建学精神への共感を自分の言葉で深く語れるようになるためには、時間をかけた内面の整理が必要です。高3の春から面接準備を始めることが理想的です。",
  },
  {
    title: "「キリスト教の大学だから自分には合わない」と敬遠する",
    body: "聖マリアンナ医科大学はキリスト教建学ですが、信者でなくても合格できます。大切なのは「命の尊厳を大切にする」「患者に奉仕する」という価値観への共感です。この価値観と自分の医師志望動機が重なる部分を誠実に語ることができれば、十分に評価されます。",
  },
  {
    title: "筆記試験の難問対策に時間をかけすぎて面接準備が不十分になる",
    body: "聖マリアンナ医科大学の筆記試験は標準レベルが中心です。難問への対策に時間をかけすぎると、面接・小論文の準備時間が削られます。筆記試験は基礎〜標準の完成度を高める程度で十分で、余裕を持って面接・小論文対策に時間を使うべきです。",
  },
];

const whyMedvance = [
  {
    title: "建学精神への共感を引き出す面接指導",
    body: "聖マリアンナ医科大学の面接では、建学精神への深い共感と医師としての使命感が問われます。Medvanceでは現役慶應医学部生が受験生の価値観を丁寧に引き出し、「自分の言葉で語れる医師志望動機」を一緒に作り上げます。",
  },
  {
    title: "医療倫理・小論文対策の専門サポート",
    body: "聖マリアンナ医科大学の小論文は医療倫理・生命の尊厳がテーマになりやすいです。Medvanceでは医療倫理の基本知識を体系的に学ぶサポートと、論理的な小論文の書き方指導を行い、面接・小論文での高評価を目指します。",
  },
  {
    title: "筆記試験の効率的な基礎固め",
    body: "聖マリアンナ医科大学の筆記試験は基礎〜標準が中心です。Medvanceでは過去問分析に基づき、最低限押さえるべき頻出分野を明確にし、効率的に筆記試験を突破できる状態を作ります。面接・小論文に十分な時間を確保するためにも、筆記の効率化が重要です。",
  },
];

const faqs = [
  {
    q: "聖マリアンナ医科大学の面接はどのような形式ですか？",
    a: "個人面接形式で、複数の面接官による質問が行われます。志望動機・医師としての理念・医療倫理に関する質問が中心で、建学精神であるキリスト教的な人間愛や奉仕の精神との関連を問われることがあります。事前に自分の医師像を深く掘り下げて準備することが重要です。",
  },
  {
    q: "キリスト教信者でなくても合格できますか？",
    a: "はい、信者でなくても合格できます。大切なのは建学精神への共感と理解です。「人の命を大切にする」「患者に寄り添う医療」という価値観を自分なりの言葉で語れるかどうかが評価のポイントです。",
  },
  {
    q: "募集人員と倍率を教えてください。",
    a: "一般選抜の募集人員は約90名で、競争倍率は年度によって6〜10倍程度です。筆記試験と面接の両方で高い評価を得る必要があります。",
  },
  {
    q: "聖マリアンナ医科大学の筆記試験の難易度はどのくらいですか？",
    a: "私立医学部の中では標準的な難易度です。基礎〜標準問題が中心のため、難問への対策より基礎の完成度を高めることが重要です。面接の比重が高い大学のため、筆記試験の対策は効率的に行いましょう。",
  },
  {
    q: "ボランティア経験がない場合はどうすればいいですか？",
    a: "今からでも始めることをお勧めします。病院見学、福祉施設でのボランティア、地域の医療関連イベントへの参加など、医療・福祉に関わる体験を積む機会は多くあります。体験の量より「そこから何を学んだか」を深く考えて言語化することが面接での説得力につながります。",
  },
  {
    q: "聖マリアンナ医科大学の学費はどのくらいですか？",
    a: "6年間の総学費は約2,000万円前後とされています（年度によって変動）。私立医学部の中では標準的な水準です。奨学金制度も用意されていますので、入学後の活用も検討してください。",
  },
];

export default function MariannaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            聖マリアンナ医科大学 — 神奈川県川崎市
          </p>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "'Noto Serif JP', serif", lineHeight: "1.3" }}
          >
            奉仕の心を持つ医師を育てる。<br />聖マリアンナ医科大学合格戦略。
          </h1>
          <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            現役慶應医学部生が面接重視の選考を突破する戦略を完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["キリスト教建学", "面接重視", "約90名募集", "倍率6〜10倍"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Overview</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            聖マリアンナ医科大学の入試概要
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              聖マリアンナ医科大学は神奈川県川崎市宮前区に位置するカトリック精神に基づく医科大学です。「生命の尊厳」と「人間愛」を基本とする教育理念のもと、患者に寄り添う医師の育成を重視しています。
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d3d3d" }}>
              入試では筆記試験（英語・数学・理科2科目）に加え、面接・小論文の比重が非常に高く、医師としての姿勢や倫理観が厳しく評価されます。ボランティア経験や医療体験などの具体的なエピソードを持ち、建学精神への共感を自分の言葉で語れる受験生が評価される傾向があります。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "募集人員", value: "約90名" },
                { label: "競争倍率", value: "6〜10倍" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "2次試験", value: "面接・小論文" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center p-4 rounded-xl"
                  style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                >
                  <p className="text-xs mb-1 font-medium" style={{ color: "#c9922a" }}>{item.label}</p>
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 合格戦略 */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Strategy</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            合格のための戦略
          </h2>
          <div className="space-y-6">
            {strategies.map((item) => (
              <div
                key={item.step}
                className="flex gap-5 p-6 rounded-2xl"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: "#c9922a" }}
                >
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
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Subjects</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            科目別対策のポイント
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-base" style={{ color: "#0c1a33" }}>{item.name}</p>
                  <p className="text-sm" style={{ color: "#c9922a" }}>{item.level}</p>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#3d3d3d" }}>{item.body}</p>
                <p
                  className="text-xs leading-relaxed p-3 rounded-lg"
                  style={{ color: "#6b7280", backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* スケジュール */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Schedule</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            合格までのスケジュール
          </h2>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div
                  className="flex-shrink-0 px-3 py-1 rounded-lg text-xs font-bold text-white h-fit"
                  style={{ backgroundColor: "#0c1a33" }}
                >
                  {item.period}
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* よくある失敗パターン */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Mistakes</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            よくある失敗パターン
          </h2>
          <div className="space-y-4">
            {mistakes.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: "#c9922a" }}
                  >
                    !
                  </span>
                  <div>
                    <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* なぜMedvanceか */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Why Medvance</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            聖マリアンナ合格にMedvanceが選ばれる理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyMedvance.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  {i + 1}
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>FAQ</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
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

      {/* MedvanceBanner */}
      <MedvanceBanner />

      {/* CTA */}
      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Free Consultation
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            聖マリアンナ医科大学合格への道筋を、現役慶應医学部生と一緒に考えます。
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
