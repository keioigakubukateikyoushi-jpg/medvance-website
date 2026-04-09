import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "杏林大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description: "杏林大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。三鷹キャンパス・基礎力重視の出題傾向を徹底分析し、合格への最短ルートを紹介します。",

  alternates: {
    canonical: "/universities/kyorin",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解と文法問題が中心で、私立医学部の中では標準的な難易度です。基礎的な語彙・文法を固めれば安定した高得点が狙えます。",
    detail: "長文読解2〜3題と文法・語彙・整序問題で構成されます。医療系テーマの英文が出題されることもありますが、難解な専門用語は少なく基本的な読解力で対応できます。単語帳はシステム英単語や鉄壁など1冊を完璧にし、文法は英文法・語法のトレーニングで体系的に固めること。長文は段落ごとに主張を把握する練習を積み、設問に素早くアクセスできる読解習慣を作りましょう。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "大問4〜5題で標準レベルの問題が中心です。解法パターンを習得して確実に得点できる状態を作ることが最優先です。",
    detail: "微積分・確率・数列・ベクトルが頻出分野です。難問は少なく、青チャートや1対1対応の演習などの標準問題集を丁寧に仕上げることで合格点に達せます。試験中は解ける問題から着手し、難問に時間をかけすぎないペース管理が重要。計算ミスを防ぐため、検算の習慣を普段から身につけておきましょう。",
  },
  {
    name: "物理",
    level: "★★★☆☆",
    body: "力学・電磁気・熱力学を中心に基本〜標準レベルの問題が出題されます。難問は少なく、基礎知識の正確な理解が得点に直結します。",
    detail: "難易度は私立医学部の中では標準的です。力学では運動方程式・エネルギー保存、電磁気ではコンデンサー・電磁誘導が頻出。物理のエッセンスや良問の風レベルの問題集を丁寧にこなすことで対応できます。公式を「なぜその式が成り立つか」まで理解した上で使えるようにしておくと、見慣れない問題設定にも対応できます。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題されます。標準問題集レベルまでこなせれば十分に対応できます。",
    detail: "理論化学ではモル計算・酸塩基・酸化還元、無機化学では各元素の性質と反応、有機化学では官能基の性質と構造決定が頻出です。重要問題集や化学の新標準演習レベルまで仕上げれば合格点に届きます。有機化学の構造決定問題では、官能基の特徴を素早く整理する練習を積むと得点が安定します。",
  },
  {
    name: "面接",
    level: "★★★☆☆",
    body: "個人面接形式で、志望動機・医師像・医療問題への見解が問われます。自分の経験と結びつけた誠実な回答が評価されます。",
    detail: "「なぜ医師になりたいか」「なぜ杏林大学を選んだか」「医療の現場で大切だと思うことは何か」といった質問が頻出です。杏林大学は附属病院（三鷹・杉並・高井戸）を持ち、地域密着型の医療を実践している大学です。その理念に共感した具体的なエピソードを準備しておくと説得力が増します。事前に声に出す練習を繰り返し、自然体で話せるようにしましょう。",
  },
  {
    name: "総合戦略",
    level: "★★★☆☆",
    body: "全科目で標準レベルまでバランスよく仕上げることが杏林大学合格の鍵です。特定科目の得意不得意が大きいと足を引っ張られます。",
    detail: "杏林大学は特定科目で突出したスコアを出すより、全科目でまんべんなく得点することが合格への近道です。過去問を3〜5年分解いて出題傾向を把握し、各科目で苦手分野を早期に発見・克服することが重要です。11月以降は本番を意識した時間管理の演習を徹底しましょう。",
  },
];

const strategies = [
  {
    step: "01",
    title: "基礎の完成を最優先にする",
    body: "杏林大学医学部は基礎〜標準問題が中心の出題構成です。難問に時間を費やすより、基礎的な問題を確実に得点できる状態を先に作ることが最も効率的な対策です。各科目の教科書レベルを完全に理解し、標準問題集を1冊仕上げることを第一目標にしましょう。基礎が固まっていない状態で難問演習をしても定着しません。まず基礎を盤石にしてから応用に移ることが結果的に最速の道です。",
  },
  {
    step: "02",
    title: "全科目でまんべんなく得点できる総合力を養う",
    body: "杏林大学では特定科目で突出したスコアよりも、英語・数学・理科を含めて全科目でバランスよく得点することが合格への近道です。合計点で合否が決まる以上、1科目の苦手が命取りになります。苦手科目を放置せず、定期的に模試を利用して弱点を発見・克服する習慣を早期につけましょう。週単位で全科目のバランスを確認しながら学習計画を調整する意識が重要です。",
  },
  {
    step: "03",
    title: "英語は標準的な語彙・文法から固める",
    body: "杏林大学の英語は比較的取り組みやすいレベルですが、語彙・文法の基礎が不十分だと読解問題で大きく失点します。標準的な単語帳1冊と文法書1冊を完璧にすることが、安定した英語得点の土台になります。長文読解では医療・科学系の英文に慣れておくことも有効で、夏以降は過去問や私立医学部の長文問題集を使って演習量を積みましょう。",
  },
  {
    step: "04",
    title: "理科は物理・化学どちらも標準問題集レベルまで完成させる",
    body: "杏林大学の理科は難問の割合が低く、基礎〜標準問題をしっかり解けることが高得点に直結します。物理・化学ともに教科書の内容を正確に理解した上で、標準問題集（重要問題集など）を1冊丁寧に仕上げましょう。秋以降は本番を意識した時間配分で過去問演習を行い、得点が安定する感覚を身につけることが大切です。",
  },
  {
    step: "05",
    title: "面接で杏林大学の特色と自分の志望動機を結びつける",
    body: "杏林大学の面接では、志望動機と医師としての考え方が重視されます。杏林大学は三鷹・杉並・高井戸に附属病院を持ち、地域密着型の総合医療を担う医師の育成を重視している大学です。この大学の特色と自分が医師を目指す動機を具体的に結びつけて、自分の言葉で自然に話せるよう事前に何度も練習しておきましょう。",
  },
];

const timeline = [
  {
    period: "高2冬〜高3春",
    title: "基礎固めの徹底",
    body: "英語は単語・文法の基礎を完成。数学は教科書レベルを総復習し青チャートの例題を習得。理科は教科書を精読して基本概念を理解する段階。",
  },
  {
    period: "高3夏（6〜8月）",
    title: "標準問題演習",
    body: "英語は長文読解演習を毎日1題。数学は1対1対応・標準問題集で典型解法を体系化。理科は重要問題集などで標準レベルまで引き上げる。",
  },
  {
    period: "高3秋（9〜10月）",
    title: "実戦演習・弱点克服",
    body: "私立医学部の過去問演習を開始。模試の結果を分析し、科目ごとの弱点を徹底的に潰す時期。面接対策も並行してスタートする。",
  },
  {
    period: "高3冬（11〜1月）",
    title: "杏林大学の過去問演習",
    body: "杏林大学の過去問を5年分以上解いて出題傾向を把握。時間を計って本番に近い状態で解き、時間配分と得点安定を確認する。",
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと面接最終準備",
    body: "得意科目の維持と苦手科目の最終確認。面接では想定問答を声に出して練習し、自然体で話せる状態を作る。体調管理も最優先。",
  },
];

const mistakes = [
  {
    title: "難問ばかりに時間をかけて基礎問題を落とす",
    body: "杏林大学は基礎〜標準問題が多く出題されます。難問集ばかりやって基礎の確認を怠ると、本番で解けるはずの問題を落とすことになります。標準問題で満点近くを取れる状態を作ることが最優先です。",
  },
  {
    title: "特定の得意科目に偏って他科目を放置する",
    body: "英語だけ・数学だけ得意でも、理科や他の科目で大きく失点すると合格は難しくなります。全科目でバランスよく得点できる状態を目指し、定期的に全科目の学習時間のバランスを見直しましょう。",
  },
  {
    title: "面接対策を後回しにして本番で焦る",
    body: "杏林大学の面接は合否に影響します。「自分はちゃんと話せる」と思っていても、緊張した本番では頭が真っ白になることがあります。秋以降から定期的に声に出して練習し、自然に話せる状態を本番前に作り上げましょう。",
  },
];

const whyMedvance = [
  {
    title: "杏林大学の出題傾向を熟知した個別指導",
    body: "杏林大学の過去問を徹底分析し、各科目で何が問われるかを把握した上で指導します。基礎〜標準問題をどこまで完成させるべきかの判断を、現役慶應医学部生が個別にサポートします。",
  },
  {
    title: "全科目バランスを保った学習計画の管理",
    body: "特定科目に偏ることなく全科目でバランスよく得点できるよう、週単位で学習計画を見直します。模試や演習の結果をもとに弱点を素早く発見・補強する仕組みが整っています。",
  },
  {
    title: "面接・志望動機の深掘りサポート",
    body: "杏林大学の面接では「なぜ医師か」「なぜ杏林か」を問われます。面接練習だけでなく、自分の経験と医師志望動機を深掘りして言語化するプロセスを現役医学部生と一緒に作り上げます。",
  },
];

const faqs = [
  {
    q: "杏林大学医学部の難易度はどのくらいですか？",
    a: "私立医学部の中では標準的な難易度です。基礎〜標準問題が中心のため、基礎を徹底的に固めれば合格圏内に入ることができます。難問対策より基礎の完成度を高めることが効率的です。",
  },
  {
    q: "募集人員と倍率を教えてください。",
    a: "年度で変動するため、最新の募集人員や入試結果は杏林大学の学生募集要項・入試データで確認してください。公式ページでは一般選抜1次試験の過去問題として英語・数学・理科、2次試験資料として小論文テーマが公開されています。",
  },
  {
    q: "杏林大学医学部に合格するために最も重要なことは何ですか？",
    a: "全科目での基礎の完成度が最も重要です。難問への対策より、英語・数学・物理・化学すべてで基礎〜標準問題を確実に得点できる状態を作ることを優先してください。",
  },
  {
    q: "杏林大学医学部の対策はいつから始めるべきですか？",
    a: "高2冬から基礎固めを始め、高3の夏から標準問題演習に移行するのが理想的なスケジュールです。現状の学力によってプランが変わりますので、まずは無料相談でご確認ください。",
  },
  {
    q: "杏林大学医学部の面接はどのような形式ですか？",
    a: "個人面接形式が基本です。志望動機・大学選択の理由・医療問題への意見などが問われます。丸暗記した回答ではなく、自分の考えを自然に話せる準備が大切です。杏林大学の地域医療への取り組みを事前に調べておくことを強くお勧めします。",
  },
  {
    q: "附属病院が複数あると聞きましたが、教育にどう影響しますか？",
    a: "杏林大学は三鷹・杉並・高井戸に附属病院を持ち、多様な臨床現場での実習が可能です。地域の多様な患者層に触れる機会が多く、総合的な臨床能力を身につけやすい環境です。面接では「地域医療への貢献」という観点で志望動機を語ると説得力が増します。",
  },
];

export default function KyorinPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            杏林大学医学部 — 東京都三鷹市
          </p>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "1.3" }}
          >
            基礎を極めた者が勝つ。<br />杏林大学医学部合格戦略。
          </h1>
          <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            現役慶應医学部生が入試傾向・科目別対策・合格スケジュールを完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["基礎〜標準の出題", "1次は英・数・理", "2次は小論文・面接", "過去問資料が充実"].map((tag) => (
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
            杏林大学医学部の入試概要
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              杏林大学医学部は東京都三鷹市に位置し、三鷹・杉並・高井戸に附属病院を持つ総合的な医療教育機関です。公式の入試データでは、一般選抜1次試験の過去問題として英語・数学・理科が公開され、2次試験資料として小論文テーマが公開されています。一般選抜は英語・数学・理科の1次試験と、小論文・面接の2次試験で整理するのが安全です。
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d3d3d" }}>
              出題難易度は私立医学部の中では基礎〜標準レベルが中心です。難問への対応力よりも、全科目でバランスよく得点できる総合力が問われます。特定科目で突出したスコアを出すより、全科目で安定して得点できる状態を目指すことが合格への近道です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "1次試験", value: "英・数・理" },
                { label: "2次試験", value: "小論文・面接" },
                { label: "過去問公開", value: "1次=英・数・理" },
                { label: "2次資料", value: "小論文テーマ" },
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
            杏林大学合格にMedvanceが選ばれる理由
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
            杏林大学医学部合格への道筋を、現役慶應医学部生と一緒に考えます。
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
