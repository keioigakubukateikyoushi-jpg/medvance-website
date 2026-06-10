import UniversityPageSchemas from "@/components/UniversityPageSchemas";
import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";
import UniversityHero from "@/components/UniversityHero";

export const metadata = {
  title: "東海大学医学部受験対策｜入試傾向・合格戦略",
  description: "東海大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。全科目バランス型・地域医療重視の伊勢原キャンパスの試験を徹底攻略します。",

  alternates: {
    canonical: "/universities/tokai",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解を中心に文法・語彙問題が出題される標準レベルの試験です。医療・科学系テーマの長文への慣れが求められます。",
    detail: "長文読解2〜3題が中心で、医療・環境・科学系のテーマが頻出です。文法問題では整序作文・語句補充が出題されます。標準的な単語帳1冊と文法書を完成させた上で、医療英語の語彙を補強すると有利です。長文は段落ごとの論旨をつかむ練習を積み、設問の正誤判断を素早く行う訓練をしましょう。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準〜やや難しい問題が出題されます。微積分・確率・ベクトルが頻出で、正確な計算力と答案を整理して書く力が重要です。",
    detail: "大問4〜5題で構成され、微積分・確率・数列・ベクトル・複素数平面が頻出です。計算量が多い問題もあるため、正確かつ素早い計算力が必要です。青チャートから1対1対応の演習レベルまで仕上げ、途中式を整理して書く練習を重ねましょう。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気・熱力学を中心に標準レベルの問題が出題されます。基本法則の深い理解と正確な計算が求められます。",
    detail: "力学（運動方程式・エネルギー保存・衝突）、電磁気（コンデンサー・電磁誘導）、熱力学が頻出です。一部やや難しい設定の問題も含まれますが、基本を深く理解していれば対応できます。物理のエッセンス〜良問の風レベルを丁寧にこなし、物理現象を図を書いて考える習慣を身につけましょう。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "理論・有機・無機がバランスよく出題されます。有機化学の構造決定問題が頻出で、論理的な推論力が問われます。",
    detail: "理論化学（計算問題・平衡）、有機化学（構造決定・合成経路）、無機化学（元素の性質・反応）がバランスよく出題されます。有機の構造決定は複数の条件を整理して系統的に推論する練習が必須です。重要問題集レベルまで仕上げれば十分対応できます。",
  },
  {
    name: "面接",
    level: "★★★☆☆",
    body: "地域医療への関心と医師としての使命感が問われます。東海大学の地域医療重視の理念に共感した志望動機が求められます。",
    detail: "個人面接形式で「なぜ医師か」「地域医療についてどう考えるか」「東海大学を選んだ理由」が頻出質問です。東海大学は伊勢原キャンパスを拠点に、神奈川県の地域医療に深く関与しています。その具体的な取り組みを調べた上で、自分の志望動機と結びつけて語れるよう準備しましょう。",
  },
  {
    name: "総合戦略",
    level: "★★★☆☆",
    body: "東海大学は全科目がバランスよく出題される総合型の試験です。どの科目でも一定以上のスコアを出せる安定した得点力が合格の鍵です。",
    detail: "英語・数学・理科のいずれも標準〜やや難しいレベルが出題されるため、全科目でバランスよく得点できる総合力が求められます。苦手科目があると合計点で大きく差がつきます。過去問で各科目の頻出分野を把握し、重点的に仕上げる戦略が有効です。",
  },
];

const strategies = [
  {
    step: "01",
    title: "全科目を標準レベルまで均等に仕上げる",
    body: "東海大学は英語・数学・物理・化学のすべてで標準〜やや難しいレベルが出題されるため、特定科目に偏った学習では合格できません。全科目で標準問題集を1冊仕上げることを第一目標にしましょう。科目ごとの得点バランスが合否を大きく左右します。苦手科目を早期に発見し、重点的に補強する計画を立てることが重要です。",
  },
  {
    step: "02",
    title: "地域医療への関心を深めて面接に備える",
    body: "東海大学は地域医療重視の教育方針を持っており、面接でも地域医療への関心が問われます。日頃から医療ニュースや地域医療の現状に関心を持ち、自分の医師志望動機と結びつけて考える習慣をつけましょう。神奈川県の医療事情や東海大学病院の特色を事前に調べておくと面接で非常に有利です。",
  },
  {
    step: "03",
    title: "数学・理科の計算力と論理展開を鍛える",
    body: "東海大学の数学・理科は計算量が多く、正確で素早い計算力が求められます。普段から途中式を整理して書く習慣をつけ、計算ミスを防ぐための検算ルーティンを確立しましょう。",
  },
  {
    step: "04",
    title: "英語で医療・科学系テーマの長文に慣れる",
    body: "東海大学の英語は医療・科学系のテーマが頻出です。医療英語の専門用語に慣れておくことで、読解スピードと正確性が大きく向上します。医療系の英語長文集を使った演習を秋以降に重点的に行いましょう。基本的な語彙・文法の習得は夏までに完成させておくことが前提です。",
  },
  {
    step: "05",
    title: "過去問を活用して出題パターンを完全把握する",
    body: "東海大学の入試は出題傾向が比較的安定しています。過去問を5年分以上解くことで、各科目の頻出分野と出題形式を把握し、効率的な対策が可能になります。過去問演習では時間配分も意識し、本番に近い状態でのシミュレーションを繰り返しましょう。",
  },
];

const timeline = [
  {
    period: "高2冬〜高3春",
    title: "基礎固めの徹底",
    body: "英語は単語・文法の基礎を完成。数学は教科書レベルを総復習し青チャート例題を習得。理科は教科書精読で基本概念を正確に理解する。",
  },
  {
    period: "高3夏（6〜8月）",
    title: "標準問題演習",
    body: "英語は医療・科学系長文の演習を開始。数学は1対1対応レベルで典型解法を体系化。理科は重要問題集で標準〜応用問題をこなす。",
  },
  {
    period: "高3秋（9〜10月）",
    title: "過去問演習と弱点克服",
    body: "東海大学の過去問演習を開始し出題傾向を把握。各科目の弱点を特定して集中補強。面接対策も並行してスタートし志望動機を深める。",
  },
  {
    period: "高3冬（11〜1月）",
    title: "仕上げ演習と時間管理",
    body: "過去問5年分以上を時間を計って演習。全科目でバランスのとれた得点ができているか確認。面接練習を重ね、地域医療への理解を深める。",
  },
  {
    period: "直前期（1月〜本番）",
    title: "最終確認と体調管理",
    body: "苦手分野の最終確認と得意科目の維持。面接の想定問答を声に出して繰り返し練習。体調を最優先にした規則正しい生活リズムを確立。",
  },
];

const mistakes = [
  {
    title: "得意科目頼りで苦手科目を放置する",
    body: "東海大学は全科目バランス型の試験です。英語が得意だからといって数学や理科の対策を怠ると、合計点で大きく失点します。苦手科目を早期に特定し、全科目で一定水準以上の得点ができる状態を作ることが最優先です。",
  },
  {
    title: "地域医療への関心・準備なしに面接に臨む",
    body: "東海大学は地域医療を重視した教育方針を持っており、面接でもその理解が問われます。「地域医療とは何か」「東海大学がなぜ地域医療に力を入れているか」を事前に調べずに面接に臨むと、薄い回答になってしまいます。",
  },
  {
    title: "過去問演習を直前期まで先送りにする",
    body: "東海大学の出題傾向は比較的安定しているため、過去問から多くの情報が得られます。直前期まで先送りにすると傾向把握が遅れ、重点対策が間に合わなくなります。秋から過去問演習を始め、余裕を持って傾向分析をしましょう。",
  },
];

const whyMedvance = [
  {
    title: "全科目バランスを保った個別学習管理",
    body: "東海大学は全科目で安定した得点が求められます。Medvanceでは毎週の学習状況を確認し、科目間の得点バランスが崩れないよう個別に学習計画を調整します。苦手科目の早期発見と重点補強が東海大学合格への最短ルートです。",
  },
  {
    title: "地域医療・面接対策の徹底サポート",
    body: "東海大学の面接では地域医療への理解と志望動機の深さが問われます。Medvanceでは現役慶應医学部生が面接練習だけでなく、医療問題への理解を深めるディスカッションも行い、説得力のある回答を一緒に作り上げます。",
  },
  {
    title: "東海大学の出題傾向を踏まえた重点指導",
    body: "過去問分析に基づき、東海大学で頻出の分野を重点的に指導します。数学の計算力強化・理科の論理展開・医療系英語の語彙強化など、東海大学の試験形式に特化した対策で効率的に得点力を高めます。",
  },
];

const faqs = [
  {
    q: "東海大学医学部の難易度はどのくらいですか？",
    a: "私立医学部の中では標準的な難易度です。全科目でバランスよく標準〜やや難しいレベルが出題されます。特定科目に突出した実力がなくても、全科目で安定した得点ができれば合格圏内に入れます。",
  },
  {
    q: "募集人員と倍率を教えてください。",
    a: "一般選抜の募集人員は60名です。2025年度の一般選抜倍率は23.0倍でした。年度差はありますが、高倍率を前提に早めに準備しておくのが安全です。",
  },
  {
    q: "東海大学医学部が地域医療重視というのはどういう意味ですか？",
    a: "東海大学医学部は神奈川県伊勢原市に位置し、地域の医療機関と連携した実習・研究を重視しています。附属の東海大学病院は高度医療から地域医療まで幅広く対応しており、学生時代から地域に根ざした医療を実践的に学べる環境が整っています。",
  },
  {
    q: "東海大学医学部の面接ではどのような質問をされますか？",
    a: "「なぜ医師になりたいか」「地域医療についてどう思うか」「東海大学を選んだ理由」が頻出です。地域医療への関心と具体的な東海大学の特色への理解を示すことが評価されます。",
  },
  {
    q: "東海大学医学部の対策はいつから始めるべきですか？",
    a: "高2冬から基礎固めを始め、高3夏から標準問題演習に移行するのが理想です。全科目でバランスよく仕上げる必要があるため、早期からの計画的な学習が特に重要な大学です。",
  },
  {
    q: "伊勢原キャンパスは都内から遠いですが、通学は大変ですか？",
    a: "伊勢原市は神奈川県西部に位置し、都内からの通学には1〜1.5時間程度かかります。多くの学生は近隣に下宿するか、1〜2年次の教養課程では大学の寮を利用します。キャンパスライフも含めた志望理由を面接で語れると大学への本気度が伝わります。",
  },
];

export default function TokaiPage() {
  return (
    <>
      <UniversityPageSchemas name="東海大学医学部" slug="tokai" breadcrumbLabel="東海大医学部対策"  faq={faqs} />
          <div className="min-h-screen bg-white">
      {/* Hero */}
      <UniversityHero slug="tokai">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            東海大学医学部 — 神奈川県伊勢原市
          </p>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "1.3" }}
          >
            全科目の総合力で勝つ。<br />東海大学医学部合格戦略。
          </h1>
          <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            現役慶應医学部生が全科目バランス型入試の攻略法を完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["全科目バランス型", "地域医療重視", "60名募集", "倍率約23倍"].map((tag) => (
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
      </UniversityHero>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Overview</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            東海大学医学部の入試概要
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              東海大学医学部は神奈川県伊勢原市に位置し、地域医療への貢献を重視した医師教育を行っています。一般選抜は学科試験と書類審査による1次選考、続いて小論文・面接による2次選考です。理科は物理・化学・生物から2科目を選択します。
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d3d3d" }}>
              出題の特徴は全科目でバランスよく標準レベルが問われることです。特定科目が飛び抜けて難しいわけではありませんが、どの科目でも一定以上の得点が求められます。全科目で安定した総合力を持つ受験生が合格する傾向があります。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "募集人員", value: "60名" },
                { label: "競争倍率", value: "約23倍" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "2次試験", value: "小論文・面接" },
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
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
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
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
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
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
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
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
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
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            東海大学合格にMedvanceが選ばれる理由
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
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
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
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            東海大学医学部合格への道筋を、現役慶應医学部生と一緒に考えます。
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
    </>
  );
}