import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";
import UniversityHero from "@/components/UniversityHero";

export const metadata = {
  title: "関西医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "関西医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。英語の比重が高い関西圏難関私立。英語力強化が合格の鍵。完全個別指導で対策。",

  alternates: {
    canonical: "/universities/kansai-ika",
  },};

const overviewStats = [
  { label: "募集人員", value: "約102名" },
  { label: "競争倍率", value: "6〜9倍" },
  { label: "1次試験", value: "英・数・理科2科目" },
  { label: "2次試験", value: "面接・小論文" },
];

const subjects = [
  {
    name: "英語",
    level: "★★★★☆",
    body: "関西医科大学の英語は比重が高く難易度も高めです。長文読解の速読力と精読力の両立が合否を分ける最重要科目です。",
    tips: [
      "長文読解は3〜4題が典型構成。医療・生命科学・社会問題をテーマにした長めの英文が多く、内容の速い把握と設問への正確な対応が必要。",
      "英単語は標準的な単語帳に加え、医学・生物系の専門語彙も補強すること。英語の得点が合否に直結するため、語彙力の底上げが優先事項。",
      "文法・語法問題は標準〜やや難レベル。文法の細かい用法まで理解しておく必要がある。問題演習で頻出文法事項を網羅的に確認しよう。",
      "英作文・和文英訳が出題される年もある。基本的な英語表現を正確に使う練習を積み、減点されにくい答案の書き方を身につけること。",
      "時間内に全問解ける速読力が必要。音読を毎日行い、英文を日本語に変換せず英語のまま理解するトレーニングを継続すること。",
    ],
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心です。微積・確率・数列・ベクトルの典型問題を安定して解ける力が求められます。",
    tips: [
      "大問4〜5題の記述式。論理的な解法の記述と計算の正確性が求められる。典型問題のパターンを体系的に習得することが最優先。",
      "微積分・確率・数列・ベクトルが頻出。この4単元を中心に演習量を確保し、どのような形で出題されても対応できる応用力をつける。",
      "難問よりも標準問題の精度を上げることが合格への近道。1問あたりの得点率を意識し、解ける問題を確実に取りきる練習をすること。",
      "英語が高配点のため数学での致命的な失点は避けたい。安定して6〜7割を確保できる状態を目標にする。",
    ],
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "標準レベルの出題が中心です。力学・電磁気の基本をしっかり固め、典型問題への対応力を養いましょう。",
    tips: [
      "力学（運動方程式・エネルギー・運動量）と電磁気（回路・コンデンサ・電磁誘導）が最重要分野。この2分野だけで出題の大半を占める。",
      "波動と熱力学も毎年出題される。波の干渉・屈折と気体の状態変化は基礎からしっかり理解しておくこと。",
      "問題文の物理的状況を正確にイメージする力が重要。図を描いて状況を整理する習慣をつけることで解法の見通しが立ちやすくなる。",
      "計算過程を丁寧に記述すること。部分点がある場合も多く、途中まで正しく解いていれば得点できる。",
    ],
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "理論・有機・無機がバランスよく出題されます。計算問題の精度と有機化学の構造決定力が得点源となります。",
    tips: [
      "理論化学（モル計算・気体・溶液・平衡・電気分解）は毎年出題される最重要分野。計算問題は単位管理を徹底し、丁寧な処理を心がける。",
      "有機化学は構造決定問題が頻出。官能基の性質と主要反応を体系的に覚え、与えられたデータから構造を絞り込む論理的な思考訓練が必要。",
      "無機化学は典型反応と族ごとの性質を確実に押さえること。計算はないが知識問題で確実に得点できるよう暗記を徹底する。",
      "化学は暗記量が多く後回しにすると直前に焦りやすい。早い段階から少しずつ知識を積み上げることが安定した得点につながる。",
    ],
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "2次試験では面接と小論文が課されます。医師としての志望動機と医療倫理への理解を論理的に表現する力が問われます。",
    tips: [
      "面接は個人面接形式。「なぜ医師を志したか」「関西医科大学を選んだ理由」「将来どのような医師になりたいか」が典型的な質問。",
      "小論文は医療・倫理・社会問題をテーマに600〜800字程度で論述する形式が多い。序論・本論・結論の構成を守り、論旨を明確にすること。",
      "関西医科大学の特徴（枚方キャンパス・附属病院の充実・先進医療研究）を事前に調べ、志望理由と結びつけた回答を準備する。",
      "小論文は高3の夏から書く練習を始め、添削を繰り返すことで文章力を高めること。面接は声に出す練習と模擬面接を複数回受けること。",
    ],
  },
];

const strategies = [
  {
    step: "01",
    title: "英語を最重要科目として最優先で強化する",
    body: "関西医科大学は英語の比重が高く、英語の得点力が合否に直結します。単語・文法・読解の全てを標準以上のレベルに引き上げることを最優先の課題とし、他科目と比べて英語に多くの学習時間を配分してください。英語が苦手な受験生は、まず語彙と文法の基礎固めから始め、読解演習へと段階的にレベルを上げていくことが重要です。",
  },
  {
    step: "02",
    title: "数学・理科でも安定した得点力を確保する",
    body: "英語重視とはいえ、数学・理科で大きく失点すると英語の貯金が吹き飛びます。数学と理科は標準問題を確実に解ける精度を確保することが目標です。難問への過度な対策は不要ですが、頻出単元の典型問題を安定して解けるレベルを維持することが求められます。全科目で6〜7割を確保できる状態を常に意識してください。",
  },
  {
    step: "03",
    title: "関西医科大学の過去問を徹底分析する",
    body: "関西医科大学は出題傾向が比較的安定しており、過去問の徹底分析が非常に有効です。各科目の頻出単元・問題形式・時間配分を過去問演習で掴み、本番のシミュレーションを重ねましょう。特に英語は過去問の英文テーマや問題形式に慣れることで本番での対応速度が格段に上がります。少なくとも5〜7年分を繰り返し解くことをお勧めします。",
  },
  {
    step: "04",
    title: "小論文・面接の準備を夏から計画的に進める",
    body: "2次試験の小論文と面接は、筆記試験の勉強に追われて後回しにしがちです。しかし小論文は短期間で急激に改善するものではなく、継続的な練習と添削が不可欠です。高3の夏頃から週1〜2本のペースで書く練習を始め、面接の想定質問も声に出して答える練習を繰り返しましょう。医療系ニュースや倫理問題への継続的なインプットも欠かせません。",
  },
  {
    step: "05",
    title: "関西圏の他大学と併願戦略を立てる",
    body: "関西医科大学は関西圏の難関私立医学部の一つです。近畿大学・大阪医科薬科大学など関西圏の大学と適切に組み合わせた併願戦略を立てることが重要です。各大学の入試日程を確認し、複数校を効率よく対策できる学習計画を立てましょう。Medvanceでは志望校選定から個別の対策プランまで一貫してサポートします。",
  },
];

const schedule = [
  {
    period: "高1〜高2",
    title: "英語を中心とした基礎固め",
    body: "英語は文法と単語の基礎を特に重点的に固める。数学は教科書レベルを完全理解し標準問題集に着手。理科は概念理解を優先。英語の読書量を増やし長文に慣れる習慣をつけること。",
  },
  {
    period: "高3・4〜7月",
    title: "英語の本格強化と他科目の標準レベル完成",
    body: "英語は長文読解演習を毎日行い、速読・精読の両方を鍛える。数学は頻出単元（微積・確率・数列・ベクトル）を集中演習。理科は全範囲を仕上げる。小論文対策を開始し月2〜3本書いて添削を受ける。",
  },
  {
    period: "高3・8〜9月",
    title: "弱点補強と過去問演習開始",
    body: "弱点科目を夏期講習で集中補強。8月末から関西医科大学の過去問を解き始め出題傾向を掴む。面接の想定質問を作成し声に出す練習を開始。大学の特徴を調べて志望理由を整理する。",
  },
  {
    period: "高3・10〜11月",
    title: "過去問中心の実戦演習と仕上げ",
    body: "過去問を時間を測って解き本番と同じ条件での演習を積む。英語は特に時間配分の練習を重点的に行う。小論文は週1本を継続しテーマのバリエーションを広げる。模擬面接を複数回受ける。",
  },
  {
    period: "高3・12〜本番",
    title: "総復習と本番への精神的準備",
    body: "新しい教材に手を出さず既存教材の総復習を徹底。特に英語の長文を毎日読み続け感覚を維持する。体調管理を最優先にし本番のシミュレーションを行う。",
  },
];

const failurePatterns = [
  {
    title: "英語の対策が手薄なまま受験する",
    body: "関西医科大学は英語の比重が高く、英語が苦手なままでは他科目でカバーするのに限界がある。英語が弱点なら真っ先に強化すべきであり「数学で稼いで英語をごまかす」戦略は通用しにくい大学の一つ。",
  },
  {
    title: "2次試験対策を1次試験直後に始める",
    body: "1次試験合格発表後から小論文・面接の準備を始めるのでは時間が圧倒的に不足する。小論文は書く量を積み重ねることで初めて改善するため夏以前から計画的に準備することが不可欠。面接も同様で直前の突貫準備では本番で自信を持って話すことができない。",
  },
  {
    title: "大学固有の出題傾向を把握せずに受験する",
    body: "関西医科大学は英語重視傾向が強く、他の私立医学部と同じ感覚で対策していると英語の問題量・難易度に面食らって本番で時間が足りなくなるケースが多い。大学固有の出題傾向を事前に過去問で把握しておくことが重要。",
  },
];

const whyMedvance = [
  {
    title: "英語強化に特化した個別指導",
    body: "関西医科大学合格のカギとなる英語を最重点科目として、語彙・文法・読解・英作文を段階的かつ体系的に指導します。現役慶應医学部生の英語学習ノウハウを直接学べる環境を提供します。",
  },
  {
    title: "2次試験の一貫サポート",
    body: "小論文の定期添削と面接の模擬練習を一貫して提供します。医療倫理・社会問題への理解を深めるインプット指導から、実際に書く・話すアウトプット練習まで継続的にサポートします。",
  },
  {
    title: "大学別傾向分析に基づく学習計画",
    body: "関西医科大学の過去問を分析した上で、何を優先的に学習すべきかを明確にした個別学習計画を作成します。一般的な医学部対策ではなく、この大学の合格に特化したカリキュラムを提供します。",
  },
];

const faqs = [
  {
    q: "関西医科大学の英語はなぜ難しいと言われるのですか？",
    a: "長文の文章量が多く読解スピードが要求されること、文法・語法問題の難易度が標準よりやや高いこと、英作文が課される年があることが主な理由です。また英語の配点比率が他科目より高いとされており、英語の得点が合否に直結しやすい構造になっています。",
  },
  {
    q: "関西医科大学の競争倍率はどのくらいですか？",
    a: "年度によって変動しますが6〜9倍程度が目安です。関西圏の私立医学部の中では上位グループに位置し、しっかりとした準備が必要です。英語力が高い受験生が有利な傾向があるため、英語の強化が合否を分ける最重要ポイントです。",
  },
  {
    q: "関西医科大学の1次試験合格ラインはどのくらいですか？",
    a: "年度によって変動しますが、英語で高得点を取りつつ数学・理科でも6〜7割程度の得点率が目安とされています。英語で特に高い得点を確保し、他科目で安定した得点を積み上げる戦略が有効です。",
  },
  {
    q: "枚方キャンパスまでのアクセスはどうですか？",
    a: "大阪府枚方市に位置し、京阪電車の樟葉駅または牧野駅からアクセスできます。大阪市内からも比較的アクセスしやすい立地です。受験時には事前にルートを確認し、試験当日に余裕を持って到着できる準備をしておきましょう。",
  },
  {
    q: "関西医科大学と近畿大学・大阪医科薬科大学との違いは何ですか？",
    a: "関西医科大学は3大学の中で英語重視傾向が最も強く、英語が得意な受験生に有利です。近畿大学は倍率が高めで英語・理科ともにやや難しい問題が出ます。大阪医科薬科大学は全体的に難易度が高く、特に数学と物理の難易度が高い点が特徴です。志望順位と自分の得意科目を照らし合わせて戦略を立てましょう。",
  },
  {
    q: "Medvanceで関西医科大学対策を始めるのに最適な時期はいつですか？",
    a: "できるだけ早い時期が理想的ですが、高3の夏（7〜8月）には本格的な大学別対策を開始することをお勧めします。英語は特に積み上げに時間がかかるため早期開始が有効です。現在の学力に応じた個別プランを無料相談でご提案します。",
  },
];

export default function KansaiIkaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <UniversityHero slug="kansai-ika">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            関西医科大学<br />入試対策ガイド
          </h1>
          <p className="text-base mb-2" style={{ color: "rgba(255,255,255,0.85)" }}>
            英語の比重が高い関西圏難関私立。英語力が合否を決める
          </p>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              大阪府・枚方キャンパス
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              英語重視
            </span>
          </div>
        </div>
      </UniversityHero>

      {/* 入試概要 */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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
            関西医科大学は大阪府枚方市に位置し、関西圏の有力私立医学部の一つです。1928年の前身から続く長い歴史を持ち、高度な医療研究と充実した附属病院による臨床教育が特徴です。入試では英語の比重が高く、長文読解の速度と精度が合否に直結します。数学・理科は標準レベルですが英語での差がつきやすいため、英語力の強化が合格戦略の中心となります。2次試験の面接・小論文では医師としての志望動機と医療倫理への理解が問われます。
          </p>
        </div>
      </div>

      {/* 合格のための戦略 */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Strategy</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>合格のための戦略</h2>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>科目別対策</h2>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>合格までのスケジュール</h2>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある失敗パターン</h2>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>なぜMedvanceか</h2>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
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
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-noto-serif)" }}>
            関西医科大学対策の相談はこちら
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
