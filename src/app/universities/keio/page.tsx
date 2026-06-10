import UniversityPageSchemas from "@/components/UniversityPageSchemas";
import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";
import UniversityHero from "@/components/UniversityHero";

export const metadata = {
  title: "【慶應医学部受験】受かるには？入試傾向・配点対策と合格戦略",
  description:
    "現役慶應医学部生が完全1対1で教える慶應医学部受験の合格戦略。英語超長文の速読法、記述数学の論証・減点されない答案作成術、理科（物理・化学・生物）の選択方針から、二次試験（面接・小論文）の徹底対策まで解説。",

  alternates: {
    canonical: "/universities/keio",
  },
};

const subjects = [
  {
    name: "英語",
    level: "★★★★★",
    body: "1次試験は90分・150点です。配点が高く、限られた時間で安定して得点する力が必要です。",
    detail: "2026年度一般選抜の出題範囲は「英語コミュニケーションI・II・III」「論理・表現I・II・III」です。数学・理科と合わせて500点満点のうち150点を占めるため、読解と記述の精度を早い段階から整えておきましょう。",
  },
  {
    name: "数学",
    level: "★★★★★",
    body: "1次試験は100分・150点です。数III・Cまで含むため、典型解法の再現力と答案の安定感が重要です。",
    detail: "2026年度一般選抜の出題範囲は数学I・II・III・A・B・Cで、Bは数列、Cはベクトル・平面上の曲線と複素数平面が指定されています。1科目150点と配点が高いため、苦手単元を残さず仕上げる必要があります。",
  },
  {
    name: "理科（2科目選択）",
    level: "★★★★★",
    body: "1次試験は120分・200点です。物理・化学・生物から2科目を選ぶ形式で、合否への影響が大きい科目です。",
    detail: "2026年度一般選抜では「物理基礎・物理」「化学基礎・化学」「生物基礎・生物」から2科目選択です。理科だけで200点あるため、英数だけでなく理科2科目をセットで完成させる設計が必要です。",
  },
  {
    name: "小論文",
    level: "★★★★☆",
    body: "2次試験で課され、1次試験通過者のみ受験します。60分で自分の考えを整理して書く準備が必要です。",
    detail: "2026年度一般選抜要項では、2次試験当日の9:00〜10:00が小論文です。テーマ詳細は公表されていないため、医療・社会課題について論点を整理して書く練習を事前に積んでおくのが安全です。",
  },
  {
    name: "面接",
    level: "★★★★☆",
    body: "小論文後に面接調査書記入と面接が行われます。志望理由や医学部で学ぶ目的を一貫して説明できる状態にしておく必要があります。",
    detail: "2026年度一般選抜要項では、小論文の後に面接調査書記入があり、その後に面接が実施されます。受験番号順で進むため終了時刻は個人差があり、要項上は17:00まで予定されています。長い1日を見据えて準備しましょう。",
  },
];

const strategies = [
  {
    step: "01",
    title: "理科2科目を前提に年間計画を組む",
    body: "慶應の1次試験は理科が200点で、物理・化学・生物から2科目選択です。英数だけ先行して理科を後回しにすると、秋以降に一気に苦しくなります。高2終了までに1科目、高3前半で2科目目まで形にする設計が現実的です。",
  },
  {
    step: "02",
    title: "英語150点・数学150点を落とさない",
    body: "英語と数学はどちらも150点で、理科と並ぶ主戦場です。数学は範囲を残さないこと、英語は90分で失点を抑えることが重要です。高3の春からは、公式の試験時間に合わせた演習を定期的に入れてください。",
  },
  {
    step: "03",
    title: "2次試験は小論文と面接をセットで準備する",
    body: "慶應の2次試験は、小論文だけ、面接だけを分けて考えるよりも、志望理由と医療への関心を同じ軸で整理したほうが効率的です。秋以降は医療・社会テーマへの自分の立場を文章と口頭の両方で表現する練習を重ねましょう。",
  },
  {
    step: "04",
    title: "公式要項どおりの時間割で本番シミュレーションをする",
    body: "1次試験は理科120分、数学100分、英語90分です。配点だけでなく時間の使い方も合否を左右します。秋以降はこの順番と時間で通し演習を行い、午後まで集中が落ちないかも含めて確認してください。",
  },
  {
    step: "05",
    title: "過去問は出題範囲と配点に沿って分析する",
    body: "慶應の過去問は、感覚的に難しい・易しいで終わらせず、どの科目で何点取りたいかまで落とし込むことが重要です。理科2科目の選択方針、数学の残単元、2次試験対策の開始時期を、要項の配点と日程に合わせて決めてください。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "基礎力の徹底構築",
    tasks: [
      "英語：高2までに長文読解を安定させ、時間を測って読む習慣をつける",
      "数学：数III・Cまでの基礎を順次固め、苦手単元を残さない",
      "理科：まず1科目を完成させ、高2後半から2科目目へ着手する",
      "医療への関心：ニュースや書籍を通じて小論文・面接の材料を貯める",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "1次試験の主力科目を完成に近づける",
    tasks: [
      "英語：90分を意識した演習を始め、失点パターンを洗い出す",
      "数学：数III・Cを含めた総復習を進め、答案の安定感を上げる",
      "理科：2科目目まで含めて標準問題演習に移る",
      "2次試験準備：医療・社会テーマについて自分の意見を文章化し始める",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "配点どおりに得点する訓練へ移る",
    tasks: [
      "英語：90分での通し演習を増やし、時間配分を固定する",
      "数学：100分での演習を重ね、解く順番と捨て問判断を決める",
      "理科：120分で2科目を処理する演習を始める",
      "2次試験準備：小論文と面接を並行して準備する",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "慶應医学部の過去問を科目別に分析し、得点目標を固める",
      "理科2科目の選択方針を固定し、苦手分野を集中的に補強する",
      "小論文は時間を測って書き、面接は模擬練習で受け答えを整える",
      "他の私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと体調管理",
    tasks: [
      "過去問の最終確認と弱点の最終チェック",
      "理科120分・数学100分・英語90分の本番シミュレーションを維持",
      "2次試験を見据え、小論文と面接の最終確認を行う",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const reasons = [
  {
    title: "講師が現役慶應医学部生",
    body: "実際に慶應医学部の入試を突破した現役生が指導します。試験の雰囲気・傾向・当日の戦略まで、体験者だからこそ語れるリアルな情報を提供します。参考書や予備校では教えてくれない「合格者の思考プロセス」が学べます。",
  },
  {
    title: "慶應医学部の過去問を完全分析",
    body: "過去10年以上の過去問を分析し、頻出テーマ・問われやすい思考パターンを体系的に把握。やみくもに問題を解くのではなく、出題傾向に合わせた効率的な対策を行います。",
  },
  {
    title: "合格者の視点からの指導",
    body: "慶應医学部を実際に突破した講師だからこそ、本番で何が求められるかを正確に理解しています。「なぜこの科目でこの点数が必要か」「どこで差がつくか」を根拠をもって指導します。",
  },
];

const faqs = [
  {
    q: "慶應医学部に受かるには、どのくらいの学力が必要ですか？",
    a: "一般的に東大理科I類・II類合格レベルの学力が目安とされています。ただし「現時点の学力」よりも「いつから始めるか」と「何をどう対策するか」が重要です。高2から始めれば十分な準備期間があります。現状の学力を把握してから合格までの道筋を逆算する方法が最も現実的です。",
  },
  {
    q: "慶應医学部の1次試験はどの科目ですか？",
    a: "2026年度一般選抜では、1次試験は理科2科目（物理・化学・生物から2つ）200点、数学150点、英語150点の合計500点です。理科は1科目ではないため、英数だけでなく理科2科目を前提に計画を立てる必要があります。",
  },
  {
    q: "慶應医学部の理科は1科目ですか？",
    a: "いいえ。2026年度一般選抜要項では、理科は物理・化学・生物から2科目選択です。現ページで理科1科目のように読める記述があると誤解を招くため、理科2科目選択が分かる形に直しています。",
  },
  {
    q: "慶應医学部に小論文はありますか？",
    a: "あります。2026年度一般選抜要項では、2次試験当日の3月1日（日）9:00〜10:00が小論文、その後に面接調査書記入と面接が予定されています。小論文がない前提で準備すると2次試験で崩れやすいので注意が必要です。",
  },
  {
    q: "慶應医学部の面接対策はどうすればいいですか？",
    a: "2次試験では小論文のあとに面接があるため、文章で書ける内容をそのまま口頭でも説明できる状態にしておくのが効率的です。志望理由、医学部で学びたいこと、医療や社会のテーマへの考えを、秋以降に模擬練習で固めていきましょう。",
  },
  {
    q: "理科はどの科目を選べますか？",
    a: "2026年度一般選抜では、物理・化学・生物から2科目選択です。どの2科目を選ぶかで年間計画が大きく変わるため、高2のうちに得意不得意と学校進度を踏まえて決めておくのが現実的です。",
  },
];

export default function KeioPage() {
  return (
    <>
      <UniversityPageSchemas name="慶應義塾大学医学部" slug="keio" breadcrumbLabel="慶應義塾大学医学部対策"  faq={faqs} />
          <div className="min-h-screen bg-white">
      {/* Hero */}
      <UniversityHero slug="keio">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            慶應義塾大学医学部
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            慶應医学部合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生だからこそ語れる、リアルな入試対策
          </p>
        </div>
      </UniversityHero>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慶應義塾大学医学部の入試概要と特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              慶應義塾大学医学部の一般選抜は、1次試験（理科2科目・数学・英語）と2次試験（小論文・面接）の二段階選抜です。2026年度要項では、1次試験は理科200点・数学150点・英語150点の合計500点で、理科は物理・化学・生物から2科目を選択します。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              2次試験では、小論文のあとに面接調査書記入と面接が行われます。現ページで誤りやすかったのは理科1科目という理解ですが、実際は理科2科目選択です。1次の学力勝負と2次の表現力の両方を見据えて準備する必要があります。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "一般約66名" },
                { label: "1次試験", value: "理科2科目・数・英" },
                { label: "2次試験", value: "小論文・面接" },
                { label: "試験日", value: "1次 2/9・2次 3/1" },
              ].map((item) => (
                <div key={item.label} className="text-center p-3 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <p className="text-xs mb-1" style={{ color: "#c9922a" }}>{item.label}</p>
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 慶應医学部に受かるには */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慶應医学部に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            慶應医学部を実際に突破した現役生の視点から、合否を分ける戦略を解説します。「難しいから対策も難しいはず」ではありません。合格者には共通した考え方と行動パターンがあります。
          </p>
          <div className="space-y-6">
            {strategies.map((item) => (
              <div key={item.step} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#c9922a" }}>
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
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            科目別対策のポイント
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            各科目の出題傾向と、現役慶應医学部生が実践した具体的な対策を解説します。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-base" style={{ color: "#c9922a" }}>{item.name}</p>
                  <p className="text-xs" style={{ color: "#c9922a" }}>{item.level}</p>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#3d3d3d" }}>{item.body}</p>
                <p className="text-xs leading-relaxed p-3 rounded-lg" style={{ color: "#6b7280", backgroundColor: "#f7f5f0" }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 合格までのスケジュール */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慶應医学部合格までのスケジュール
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            いつ、何を、どのくらいやるべきか。合格者の勉強ロードマップを公開します。
          </p>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-4 px-6 py-4" style={{ backgroundColor: i % 2 === 0 ? "#0c1a33" : "#1a3a72" }}>
                  <span className="text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>{item.period}</span>
                  <span className="font-bold text-sm text-white">{item.title}</span>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {item.tasks.map((task, j) => (
                      <li key={j} className="flex gap-3 text-sm" style={{ color: "#6b7280" }}>
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: "#c9922a" }} />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 入試データ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慶應義塾大学医学部の入試データ
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            ここでは2026年度一般選抜要項に基づく基本情報を整理しています。細かな日程変更や結果は、受験年度の大学公式発表を必ず確認してください。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                label: "募集人員",
                value: "一般選抜：66名",
                note: "2026年度要項では、一般選抜66名のうち1名が栃木県地域枠です。",
              },
              {
                label: "1次試験科目",
                value: "理科2科目・数学・英語",
                note: "理科は物理・化学・生物から2科目選択で200点、数学150点、英語150点です。理科1科目ではありません。",
              },
              {
                label: "2次試験",
                value: "小論文60分・面接",
                note: "2次試験は1次通過者のみ受験可能で、小論文の後に面接調査書記入と面接が行われます。",
              },
              {
                label: "試験日程",
                value: "1次 2026/2/9・2次 2026/3/1",
                note: "2026年度要項では、1次試験会場は三田、2次試験会場は日吉です。2次試験は終了が17:00予定です。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-bold tracking-wide uppercase mb-1" style={{ color: "#c9922a" }}>{item.label}</p>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.value}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 失敗パターン */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慶應医学部を目指す上で多くの受験生が陥る失敗
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            慶應医学部は「難しいから対策も難しいはず」と思いがちですが、実際に受験した立場から見ると、合格した人と落ちた人の間には共通した失敗パターンがあります。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "英語の速度不足で時間切れ",
                body: "慶應医学部の英語は文量が多く、読解スピードが合否を分けます。「読めるけど時間が足りない」という状態のまま本番を迎える受験生が毎年います。日頃から時間を計って長文を読む訓練が不可欠です。",
              },
              {
                title: "数学を答えだけで終わらせる",
                body: "記述式の数学では、途中式を含めて読みやすく答案をまとめる練習が必要です。「解けたから終わり」にしていると、本番で途中の流れが崩れやすくなります。早い段階から記述答案を仕上げる練習を重ねましょう。",
              },
              {
                title: "2次試験を直前まで後回しにする",
                body: "慶應の2次試験は面接だけでなく小論文もあります。1次試験後にまとめて始めると、文章と口頭の両方を短期間で整えなければならず負荷が高くなります。秋以降に小論文と面接を並行して準備しておくほうが安全です。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>落とし穴 {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* なぜMedvanceか */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            なぜMedvanceが慶應医学部合格に強いか
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4" style={{ backgroundColor: "#c9922a" }}>
                  {i + 1}
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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

      <MedvanceBanner />

      {/* CTA */}
      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            慶應医学部合格への道筋を、一緒に考えます。
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