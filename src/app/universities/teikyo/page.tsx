import UniversityPageSchemas from "@/components/UniversityPageSchemas";
import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "帝京大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description: "帝京大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。マークシート中心・受験者数最多レベルの試験で勝ち抜く戦略を紹介します。",

  alternates: {
    canonical: "/universities/teikyo",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "マークシート形式で文法・語彙・長文読解が出題されます。正確さよりも処理スピードが合否を分ける重要な要素です。",
    detail: "マーク式が中心で、文法・語彙・長文読解がバランスよく出題されます。時間内に全問処理できるスピードが合否に直結します。標準的な単語帳（システム英単語・DUOなど）と文法書を1冊ずつ完璧にした上で、必ず時間を計りながら問題演習を繰り返しましょう。長文は読みながら設問に答えていく「設問先読み」の戦略が時間短縮に有効です。",
  },
  {
    name: "数学",
    level: "★★☆☆☆",
    body: "典型問題が中心のマーク式試験です。解法パターンの習得と処理速度の両立が合否を分けます。",
    detail: "マーク式で微積分・確率・数列・ベクトルの典型問題が頻出です。難問より典型問題の解法を素早く正確に適用する力が重要です。青チャートレベルの典型解法を完璧に習得し、時間を計った演習で処理スピードを高めましょう。帝京大学の数学は他の私立医学部より難易度が低めなので、確実な得点源にすることを目標にしてください。",
  },
  {
    name: "物理",
    level: "★★☆☆☆",
    body: "典型的な物理問題がマーク式で出題されます。基本法則を正確に理解し、素早く処理する力が必要です。",
    detail: "力学・電磁気・波動・熱力学から出題されます。マーク式なので途中の思考過程より最終的な数値の正確さが重要です。基本公式を素早く適用できるよう、物理のエッセンスレベルを完璧にしてから反復演習を積みましょう。計算ミスはマーク式でも致命的なので、見直しのルーティンを必ず設けること。",
  },
  {
    name: "化学",
    level: "★★☆☆☆",
    body: "マーク式で有機・無機・理論化学が出題されます。典型問題の解法を素早く処理する力が鍵です。",
    detail: "有機・無機・理論化学の典型問題がマーク式で出題されます。構造決定・モル計算・酸塩基反応などを素早く処理できるよう練習が必要です。難問は少なく、新標準演習レベルまで習得することで十分対応できます。特に有機化学の官能基と反応を素早く判断できるよう繰り返し練習しましょう。",
  },
  {
    name: "面接",
    level: "★★★☆☆",
    body: "帝京大学は1次試験通過後に課題作文と面接（2次試験）があります。受験者数が多い分、2次選考で自分の考えを簡潔に伝える力も重要です。",
    detail: "志望動機・医師としての考え・医療問題への意見が問われます。帝京大学は附属病院での臨床実習が充実しており、実践的な医師教育を重視しています。その点に共感した具体的な志望動機を準備しましょう。2次選考では課題作文も課されるため、短い字数で論点をまとめる練習も必要です。",
  },
  {
    name: "総合対策",
    level: "★★★☆☆",
    body: "受験者数が私立医学部最多クラスの帝京大学では、全問処理できるスピードと正確性の両立が最も重要です。",
    detail: "帝京大学はマークシート方式のため、時間内に全問題を処理できるスピードが合否に直結します。日頃から時間を計って演習し、本番のペースに慣れることが不可欠です。難問に時間を取られず、確実に解ける問題を素早くこなす戦略的なペース配分を身につけましょう。",
  },
];

const strategies = [
  {
    step: "01",
    title: "マーク式に特化した演習を徹底する",
    body: "帝京大学の入試はマークシート中心です。記述式と異なり、解法の論証より最終答えの正確さが問われます。マーク式専用の問題集を活用し、毎回必ず時間を計って演習する習慣をつけましょう。答えが合っていても時間内に終わらなければ意味がありません。本番と同じ時間制限で演習することで、ペース感覚を体に染み込ませることが大切です。",
  },
  {
    step: "02",
    title: "処理スピードと正確性を同時に高める",
    body: "マーク式試験では制限時間内に全問処理できるかどうかが合否を大きく左右します。普段の演習から時間を計り、時間切れで未解答が出ないようにペース配分を練習しましょう。スピードを上げると正確性が落ちる受験生が多いため、「スピードを維持しながら正確に解く」という練習を意識的に積み重ねることが重要です。",
  },
  {
    step: "03",
    title: "典型問題の解法パターンを完全習得する",
    body: "帝京大学は典型問題の比率が高いため、各科目の頻出問題を素早く正確に解ける状態を作ることが最も効率的な対策です。難問集より標準問題集を繰り返し解く方が合格に直結します。各科目の解法パターンを「見た瞬間に解法が浮かぶ」状態まで反復練習することが目標です。",
  },
  {
    step: "04",
    title: "他の私立医学部と効率的に併願戦略を組む",
    body: "帝京大学はマーク式試験で面接があるものの試験形式がシンプルなため、他の私立医学部との受験スケジュールを組みやすいです。1月後半〜2月に複数の私立医学部を受験する際、帝京大学の対策は他の大学とも共通する部分が多く、効率的に対策を積み上げることができます。",
  },
  {
    step: "05",
    title: "倍率の高さに臆せず、確実な得点力を磨く",
    body: "帝京大学は受験者数が私立医学部最多クラスで、2025年度の一般選抜倍率は46.2倍でした。しかし高倍率でも、典型問題で確実に得点できる状態を作れば十分に合格圏内に入れます。倍率の数字に過度に緊張せず、自分の学力を着実に積み上げることに集中しましょう。",
  },
];

const timeline = [
  {
    period: "高2冬〜高3春",
    title: "基礎固めと典型解法の習得",
    body: "英語は単語・文法の基礎を固める。数学は教科書レベルを完全理解し青チャートの例題を習得。理科は教科書の基本概念を丁寧に理解する段階。",
  },
  {
    period: "高3夏（6〜8月）",
    title: "標準問題演習とスピード強化",
    body: "英語はマーク式長文を時間計測で毎日1題。数学は典型解法を素早く使えるよう反復演習。理科は標準問題を確実に解ける状態に引き上げる。",
  },
  {
    period: "高3秋（9〜10月）",
    title: "過去問演習と弱点克服",
    body: "帝京大学の過去問を含む私立医学部過去問演習を開始。時間を計って解き、スピードと正確性のバランスを確認。苦手分野を徹底的に補強。",
  },
  {
    period: "高3冬（11〜1月）",
    title: "帝京大学形式の集中演習",
    body: "帝京大学の過去問を5年分以上演習。全問処理できる時間配分を身につける。模試の結果で最終的な弱点を確認し集中的に対策。",
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    body: "得意科目の維持と苦手科目の最終確認。面接練習を重ねて自然体で話せる状態を作る。睡眠と体調管理を最優先にした生活リズムを整える。",
  },
];

const mistakes = [
  {
    title: "難問演習に時間をかけすぎて典型問題の精度が落ちる",
    body: "帝京大学はマーク式の典型問題が中心です。難問集ばかりやって典型問題の処理精度が落ちると、本番で確実に取れるはずの問題を落とす結果になります。標準問題集で100点近くが取れる状態を先に作ることが最優先です。",
  },
  {
    title: "時間管理の練習をせずに本番で時間切れになる",
    body: "マーク式試験では全問処理できるかどうかが合否を左右します。普段の演習で時間を計らずにのんびり解いていると、本番で時間が足りなくなります。必ず本番と同じ時間制限を設けて演習する習慣をつけましょう。",
  },
  {
    title: "倍率の高さに萎縮して受験を諦める",
    body: "帝京大学の2025年度一般選抜倍率46.2倍という数字は非常に高く見えますが、典型問題を確実に得点できる状態を作れば十分に合格圏内に入れます。倍率の数字に過度に萎縮せず、自分の学力を着実に積み上げることに集中してください。",
  },
];

const whyMedvance = [
  {
    title: "マーク式試験に特化した演習指導",
    body: "帝京大学のマーク式試験では、処理スピードと正確性の両立が鍵です。Medvanceでは本番と同じ形式・時間制限での演習を繰り返し、ペース感覚と正確性を同時に高める指導を行います。",
  },
  {
    title: "高倍率を突破する戦略的な学習計画",
    body: "2025年度一般選抜で46.2倍だった帝京大学を突破するには、典型問題で確実に得点できる状態を早期に作ることが重要です。現役慶應医学部生が学習の優先順位と弱点補強のタイミングを個別にサポートします。",
  },
  {
    title: "他の私立医学部との効率的な併願サポート",
    body: "帝京大学は多くの受験生が他の私立医学部と並行して受験します。Medvanceでは複数校の入試傾向を把握した上で、効率的な併願戦略と学習計画を一緒に組み立てます。",
  },
];

const faqs = [
  {
    q: "帝京大学医学部の難易度はどのくらいですか？",
    a: "私立医学部の中では標準的な難易度です。マークシート中心のため記述力より処理スピードが重要で、典型問題を素早く正確に解ける力を養えば合格圏内に入れます。ただし受験者数が非常に多いため、確実な得点力が必要です。",
  },
  {
    q: "募集人員と倍率を教えてください。",
    a: "一般選抜の募集人員は77名です。2025年度の一般選抜倍率は46.2倍でした。私立医学部の中でも非常に高倍率なので、典型問題を落とさない得点力づくりが重要です。",
  },
  {
    q: "帝京大学医学部に面接はありますか？",
    a: "2次試験として課題作文と面接があります。1次試験（筆記）を通過した後に実施され、志望動機・医師を目指す理由・医療問題への意見などが問われます。",
  },
  {
    q: "帝京大学医学部はマーク式のみですか？",
    a: "1次試験はマークシート式が中心です。記述式と異なり途中の論証は不要で、最終的な答えの正確さが評価されます。2次試験は課題作文と面接です。",
  },
  {
    q: "帝京大学医学部の合格に必要な得点率はどのくらいですか？",
    a: "おおよそ70〜75%の得点率が合格ラインの目安です。典型問題を取りこぼさないことで達成できるレベルです。科目間で大きな差が出ないよう全科目でバランスよく得点することが重要です。",
  },
  {
    q: "帝京大学医学部の対策はいつから始めるべきですか？",
    a: "高2冬から基礎固めを始め、高3夏から標準問題演習とスピード強化に移行するのが理想です。高倍率の試験ですが、早期から着実に準備することで十分に突破できます。まずは無料相談で現状を診断してもらいましょう。",
  },
];

export default function TeikyoPage() {
  return (
    <>
      <UniversityPageSchemas name="帝京大学医学部" slug="teikyo" breadcrumbLabel="帝京大医学部対策" />
          <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            帝京大学医学部 — 東京都板橋区
          </p>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "1.3" }}
          >
            最多受験者数を突破する。<br />帝京大学医学部合格戦略。
          </h1>
          <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            現役慶應医学部生がマーク式入試の攻略法・科目別対策を完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["マークシート中心", "受験者数最多レベル", "77名募集", "倍率約46倍"].map((tag) => (
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
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            帝京大学医学部の入試概要
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              帝京大学医学部は東京都板橋区に位置し、私立医学部の中でも受験者数が多い大学です。一般選抜の最大の特徴はマークシート方式が中心であること。英語（必須）＋数学・物理・化学・生物・国語から2科目選択の筆記試験に加え、2次選考では課題作文と面接が課されます。
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d3d3d" }}>
              典型問題が多く、処理スピードと正確性が合否を左右します。難問への対策より、頻出の典型問題を素早く正確に解ける力を養うことが最も効率的な合格戦略です。倍率の高さに圧倒されず、確実な得点力の構築に集中することが大切です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "募集人員", value: "77名" },
                { label: "競争倍率", value: "約46倍" },
                { label: "1次試験", value: "英語＋選択2科目" },
                { label: "2次試験", value: "課題作文・面接" },
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
            帝京大学合格にMedvanceが選ばれる理由
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
            帝京大学医学部合格への道筋を、現役慶應医学部生と一緒に考えます。
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