import UniversityPageSchemas from "@/components/UniversityPageSchemas";
import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";
import UniversityHero from "@/components/UniversityHero";

export const metadata = {
  title: "近畿大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description: "近畿大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。近年難化傾向で英語重視。高倍率を突破するための戦略を詳しく解説します。",

  alternates: {
    canonical: "/universities/kindai",
  },};

const overviewStats = [
  { label: "募集人員", value: "約105名" },
  { label: "競争倍率", value: "8〜12倍" },
  { label: "1次試験", value: "英・数・理科2科目" },
  { label: "2次試験", value: "面接・小論文" },
];

const subjects = [
  {
    name: "英語",
    level: "★★★★☆",
    body: "近畿大学医学部の英語は近年難化傾向が顕著で、長文読解の質・量ともにハイレベルです。英語が得意な受験生が有利な構成です。",
    tips: [
      "長文読解は3〜4題で文章量が多く、時間内に全問解くためのスピードが必要。医療・科学・社会問題系テーマが頻出。",
      "語彙は標準的な単語帳の完全習得に加え、医学・生命科学系の専門語彙を補強すること。知らない単語でも文脈から意味を推測する力も訓練する。",
      "文法・語法は細かい知識が問われるやや難レベル。頻出文法事項を演習形式で網羅的に確認し、知識の抜け漏れをなくすこと。",
      "英作文・自由英作文が課される年がある。基本的な表現を正確に使えるよう、例文暗記と英作文演習を繰り返しておくこと。",
      "読解スピードを上げるために毎日の音読を継続する。1日1題の長文を音読することで自然に読解速度と理解度が上がる。",
    ],
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準〜やや難レベルの問題が中心です。微積・確率・数列・ベクトルの典型問題に加え、やや応用的な問題にも対応できる力が必要です。",
    tips: [
      "大問4〜5題の記述式が中心。計算量が多い問題が含まれるため、処理速度と正確性の両方を高める必要がある。",
      "微積分・確率・数列・ベクトルが最重要単元。特に微積分は幅広い形式で出題されるため、多くのパターンを演習しておく。",
      "難問が含まれる年もあるため、基礎〜標準の問題を確実に取りきった上で余裕があれば難問にも取り組む戦略が有効。",
      "記述形式なので解法の論理的な記述も採点対象。答えが正しくても説明が不十分では減点されるため、解法を言語化する練習を積む。",
    ],
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "標準レベルを中心に、やや応用的な問題が含まれます。力学・電磁気を中心に幅広い分野への対応力が求められます。",
    tips: [
      "力学（特に運動方程式・エネルギー・運動量）と電磁気（回路・コンデンサ・電磁誘導）が最頻出。この2分野は徹底的に仕上げること。",
      "波動・熱力学・原子物理も出題される。苦手な受験生が多い分野のため、ここでの得点がライバルとの差になる。",
      "実験・グラフ問題が含まれる年もある。グラフの読み取りと物理現象の定性的な理解力が問われる問題に慣れておく。",
      "難問は深追いせず、標準問題で確実に得点することを優先する。物理で大きく失点するリスクを管理することが重要。",
    ],
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "理論・有機・無機がバランスよく出題されます。計算の精度と有機化学の構造決定力が得点源となります。",
    tips: [
      "理論化学（モル計算・気体・溶液・平衡・電気分解）が高配点。計算問題は単位管理を徹底し、答えの桁や符号のミスを防ぐ。",
      "有機化学は構造決定問題が頻出。官能基の性質・主要反応・異性体の数え方を体系的に習得し、論理的に構造を絞り込む訓練をする。",
      "無機化学は主要な族の性質と反応を確実に押さえること。丸暗記より反応の原理を理解することで応用問題にも対応できる。",
      "有機化学の配点が高い傾向がある。有機化学を早い段階から重点的に学習し、本番で高得点を狙えるよう準備する。",
    ],
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "2次試験では面接と小論文が課されます。医師としての志望動機・医療への理解・倫理観を具体的に伝える力が求められます。",
    tips: [
      "面接は個人面接形式。「なぜ医師を志したか」「近畿大学医学部を選んだ理由」「将来の専門分野・研究への関心」などが典型的な質問。",
      "近畿大学は医学・医療研究への取り組みが活発な大学。大学の研究分野や先端医療への取り組みを事前に調べ、志望理由に盛り込む。",
      "小論文は医療倫理・社会問題・医師の在り方をテーマに600〜800字程度で論述する形式が多い。自分の意見を論理的かつ明確に述べること。",
      "倍率が高いため2次試験で差がつきやすい。筆記試験同様に2次試験の準備にも十分な時間を確保すること。",
    ],
  },
];

const strategies = [
  {
    step: "01",
    title: "英語を最優先で難化に対応できるレベルまで鍛える",
    body: "近畿大学医学部は近年英語が難化しており、英語の得点力が合否を大きく左右します。語彙・文法・長文読解のすべてを標準以上のレベルに仕上げることが最優先課題です。英語が苦手な受験生はまず語彙と基礎文法の徹底固めから始め、読解演習へと段階的にステップアップしてください。英語を得意科目にすることが近畿大学医学部合格への最短ルートです。",
  },
  {
    step: "02",
    title: "高倍率を意識した「落とさない」答案作りを徹底する",
    body: "競争倍率8〜12倍という高倍率の近畿大学医学部では、解ける問題で取りこぼさないことが非常に重要です。難問で得点を狙うより、標準問題を確実に得点する安定性の方が合格に直結します。普段の演習から「解ける問題は必ず全問正解する」という意識で取り組み、ケアレスミスを徹底的に排除する習慣を身につけましょう。",
  },
  {
    step: "03",
    title: "近畿大学医学部固有の出題パターンを過去問で習得する",
    body: "近畿大学医学部は大学固有の出題傾向があり、過去問の徹底分析が非常に重要です。特に英語と数学は問題の形式・量・時間配分が独特なため、過去問演習で本番の感覚を体に覚え込ませることが必要です。少なくとも5〜7年分を時間を測って解き、科目ごとの時間配分戦略を確立しましょう。",
  },
  {
    step: "04",
    title: "2次試験の準備を夏から1次試験と並行して進める",
    body: "高倍率の近畿大学医学部では2次試験でも差がつきます。1次試験の筆記対策に集中するあまり2次試験の準備が後手に回ることは危険です。高3の夏から小論文を書く練習と面接の想定問答の準備を並行して進め、1次試験通過後すぐに最終調整できる状態を作っておきましょう。",
  },
  {
    step: "05",
    title: "関西圏の複数大学と効率よく併願する",
    body: "近畿大学医学部は倍率が高いため、関西医科大学・大阪医科薬科大学・兵庫医科大学などと適切に組み合わせた併願戦略が重要です。各大学の試験日程・出題傾向・難易度を考慮した受験計画を立て、複数の合格可能性を確保しましょう。効率的な複数校対策のためには、各大学に共通する学習内容を中心に取り組み、大学固有の部分を上乗せする形が最も効率的です。",
  },
];

const schedule = [
  {
    period: "高1〜高2",
    title: "英語を中心とした本格的な基礎固め",
    body: "英語は文法・語彙・読解の基礎を特に重点的に強化する。数学は教科書から標準問題集へ段階的に進める。理科は概念理解を丁寧に積み上げる。英語の読書量を増やし、難易度の高い長文にも慣れる下地を作る。",
  },
  {
    period: "高3・4〜7月",
    title: "英語の難化対応と全科目の標準〜応用レベル完成",
    body: "英語は長文読解演習を毎日行い、やや難しい問題にも対応できる力をつける。数学は標準〜応用問題まで演習範囲を広げる。理科は全範囲を仕上げ、応用問題にも取り組む。小論文対策を開始。",
  },
  {
    period: "高3・8〜9月",
    title: "弱点補強と近畿大学の過去問演習開始",
    body: "弱点科目を夏期講習で集中補強。8月末から近畿大学医学部の過去問を解き始め、英語の時間配分と問題形式に慣れる。面接の想定質問と志望理由の整理を開始。",
  },
  {
    period: "高3・10〜11月",
    title: "過去問中心の実戦演習",
    body: "過去問を時間を測って繰り返し解く。特に英語は時間配分の感覚を徹底的に体に覚え込ませる。小論文は週1本を継続。模擬面接を複数回受けてフィードバックを得る。",
  },
  {
    period: "高3・12〜本番",
    title: "総復習と本番への心理的準備",
    body: "既存教材の総復習を徹底する。英語は毎日長文を読み感覚を落とさない。体調管理と精神的な準備を最優先にし、本番のシミュレーションを行う。",
  },
];

const failurePatterns = [
  {
    title: "英語の難化に対応できずに本番で時間が足りなくなる",
    body: "近畿大学医学部の英語は近年難化・長文化しており、事前に時間配分の練習をしておかないと本番で最後まで解けないケースが多い。過去問演習で必ず時間を測り、英語の時間感覚を本番前に徹底的に養うことが必要。",
  },
  {
    title: "高倍率を見て萎縮し、受験前から諦めムードになる",
    body: "倍率8〜12倍という数字に怖気づいて受験を諦める受験生がいるが、実際には適切な対策で合格できる試験。倍率は分母に多くの対策不足の受験生が含まれており、しっかりと準備した受験生には十分勝算がある。",
  },
  {
    title: "2次試験の準備を筆記試験後に始める",
    body: "1次試験通過後の数日間で小論文と面接を仕上げようとするのは非現実的。小論文は書く練習の積み重ねが不可欠で、面接は声に出す練習なしに本番でうまく話せるものではない。夏から並行して準備することが合格の条件。",
  },
];

const whyMedvance = [
  {
    title: "英語の難化対応を最重点に指導",
    body: "近畿大学医学部の近年の英語難化傾向を踏まえ、語彙・文法・読解・英作文の全てを標準以上に引き上げる指導を行います。英語が苦手な段階から着実にステップアップできる個別カリキュラムを提供します。",
  },
  {
    title: "高倍率突破のための得点戦略",
    body: "解ける問題を確実に得点し、難問での余計な失点をなくす「安定した答案作り」を徹底的に指導します。普段の演習から本番を意識した取り組み方を習慣化させます。",
  },
  {
    title: "2次試験まで一貫したサポート",
    body: "小論文の定期添削と面接の模擬練習を筆記試験対策と並行して提供します。近畿大学医学部の面接で評価される回答の構成と、医療倫理への理解の深め方を丁寧に指導します。",
  },
];

const faqs = [
  {
    q: "近畿大学医学部の入試は近年どのくらい難化しましたか？",
    a: "特に英語が顕著に難化しており、5〜10年前と比較すると長文の量と語彙の難易度が上がっています。数学でもやや応用的な問題が増える傾向があります。過去問は直近3〜5年分を重点的に分析し、最新の難易度に対応した準備が必要です。",
  },
  {
    q: "近畿大学医学部の倍率は実際どのくらい高いですか？",
    a: "年度によって変動しますが8〜12倍程度が目安です。ただし、この倍率には準備不足で受験する層も多く含まれています。適切な対策を積んだ受験生であれば、倍率から受ける印象ほど高い壁ではありません。まず英語と数学を標準以上に仕上げることが第一条件です。",
  },
  {
    q: "近畿大学医学部の大阪狭山キャンパスはどのような環境ですか？",
    a: "大阪府大阪狭山市に位置し、近畿大学病院を附属病院として持つキャンパスです。先端医療研究が活発で、充実した臨床実習環境が特徴です。南海高野線の金剛駅またはNakamozuからバスでアクセス可能です。",
  },
  {
    q: "近畿大学医学部と関西医科大学はどちらが難しいですか？",
    a: "難易度はほぼ同等ですが、近畿大学医学部の方が倍率が高い傾向があります。英語重視という点では両大学に共通点があります。関西医科大学が英語の読解重視なのに対し、近畿大学医学部は英語・数学ともにやや難化している点が異なります。",
  },
  {
    q: "物理と化学、どちらを選ぶべきですか？",
    a: "どちらも標準〜やや難レベルなので、高校での学習状況と得意不得意で判断してください。物理は論理的思考と計算が中心で得点が安定しやすい傾向があります。化学は暗記と計算の両方が必要ですが、しっかり準備すれば高得点が狙えます。苦手意識の少ない方を選ぶのが賢明です。",
  },
  {
    q: "Medvanceで近畿大学医学部対策を始めるのに最適な時期はいつですか？",
    a: "できるだけ早い時期が有利です。倍率が高いため、ライバルより早く始めることが差をつける一番の方法です。高3の夏（7〜8月）には大学別対策を開始することをお勧めします。現在の学力に応じた個別プランを無料相談でご提案します。",
  },
];

export default function KindaiPage() {
  return (
    <>
      <UniversityPageSchemas name="近畿大学医学部" slug="kindai" breadcrumbLabel="近畿大医学部対策"  faq={faqs} />
          <div className="min-h-screen bg-white">
      {/* Hero */}
      <UniversityHero slug="kindai">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            近畿大学医学部<br />入試対策ガイド
          </h1>
          <p className="text-base mb-2" style={{ color: "rgba(255,255,255,0.85)" }}>
            近年難化傾向・高倍率。英語力と安定した答案作りが鍵
          </p>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              大阪府・大阪狭山キャンパス
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              近年難化・英語重視
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
            近畿大学医学部は大阪府大阪狭山市に位置し、近畿大学病院を附属病院とする関西圏の有力私立医学部です。近年は入試難易度が上昇傾向にあり、特に英語の難化が顕著です。競争倍率は8〜12倍と関西圏私立医学部の中でも高く、しっかりとした準備が必要です。先端医療研究が活発な大学で、充実した研究・臨床環境が特徴です。入試では英語が重視されており、英語の得点力が合否に直結します。
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
            近畿大学医学部対策の相談はこちら
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
    </>
  );
}