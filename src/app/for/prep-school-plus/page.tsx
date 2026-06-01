import Image from "next/image";
import Link from "next/link";
import { buildFaqSchema, buildForPageSchemas, buildItemListSchema, buildSpeakableSchema } from "@/lib/seo";

export const metadata = {
  title: "大手予備校と併用したい医学部志望生へ｜個別指導・復習管理で予備校を活かす | Medvance",
  description:
    "駿台・河合塾・東進などの大手予備校に通う医学部志望生へ。授業の消化不良を防ぐ復習管理、弱点単元の1対1指導、私立医学部の出願戦略まで、予備校授業の投資対効果を最大化するMedvanceの併用プランです。",
  alternates: {
    canonical: "/for/prep-school-plus",
  },
};

const proofItems = [
  { label: "Position", value: "大手予備校を活かす個別戦略" },
  { label: "Target", value: "私立・国公立医学部に本気で投資するご家庭" },
  { label: "Design", value: "授業、復習、出願、保護者共有を接続" },
];

const gapItems = [
  {
    title: "1. 授業は受けているが、復習の実行精度が低い",
    body: "大手予備校の授業は業界最高峰のクオリティです。しかし、授業の後に『どの類題を解き、どの弱点を潰すか』は完全に生徒自身の裁量に任されるため、やりっぱなしの『授業消化不良』に陥りやすいのが実情です。",
  },
  {
    title: "2. 質問ブースの行列で、貴重な自習時間が奪われる",
    body: "分からない問題の解説を聞くために予備校の質問ブースに1時間並ぶ。こうした時間のロスは医学部受験では致命傷です。即座に、かつ本質的な理解まで導く1対1のマンツーマン質問対応枠が必要です。",
  },
  {
    title: "3. 担任面談だけでは、超複雑な私立医学部出願をカバーしきれない",
    body: "大手予備校の担任面談は大人数を捌くため、一般的な模試偏差値での判定が中心です。科目相性、日程、地域枠、面接小論文の負荷までを一人ひとり個別に設計することは仕組み上困難です。",
  },
];

const supportSteps = [
  {
    step: "01",
    title: "現状の受講カリキュラムの完全棚卸し",
    body: "予備校で受講している全講座、模試結果、過去問演習の進捗、未消化のテキストを全て確認。新しい講座や家庭教師を追加する前に、『ボトルネック』となっている原因を特定します。",
  },
  {
    step: "02",
    title: "『15分単位』の復習計画と1回90分（2コマ）での再現補強",
    body: "予備校授業後48時間以内の復習タスクを『15分単位』でスキマ時間まで可視化して設計。さらに週1回90分（45分×2コマ分）の完全個別指導で、プロ講師がインプットの解説と、その場での完全再現アウトプット演習・添削を行うことで、授業内容の完全定着を保証します。",
  },
  {
    step: "03",
    title: "私立・国公立医学部の一致出願校ポートフォリオ設計",
    body: "本人の強み（英語長文が強い、数学の記述が得意など）を踏まえ、日程の重なり、学費制限、奨学金や特待生制度の活用可能性まで精査し、合格率が最大化する併願パターンを設計します。",
  },
  {
    step: "04",
    title: "ご家庭（保護者様）への月次・週次進捗レポート",
    body: "予備校にどれだけの授業料を払っていても、進捗が見えなければ投資判断ができません。学習時間、確認テストの合格率、志望校判定の推移、追加指導の必要性を透明性高く共有します。",
  },
];

const comparisonRows = [
  ["主な役割", "講義とテキストで最大公約数的に引き上げる", "分からない問題の解説（その場しのぎになりやすい）", "何を徹底し、何を捨てるかまで併せて決定する"],
  ["復習の完全管理", "本人の自走・意志力に依存しやすい", "担当回の単発質問対応に留まりやすい", "週次の学習計画、確認テスト、弱点類題補強まで一気通貫"],
  ["医学部出願戦略", "全体方針説明と偏差値機械判定が中心", "担当講師個人の主観・知見に依存", "科目配点相性、日程移動制限、学費特待制度まで個別設計"],
  ["保護者様との連携", "年数回の定期面談時にまとめて共有", "ほとんど無い、または連絡が少ない", "進捗・受験校リスク・追加投資の要不要を毎月密にレポート"],
];

const diagnosisItems = [
  "現在利用している予備校（駿台・河合・東進等）と全受講講座",
  "消化できていないテキストと復習の遅れ度合い",
  "直近模試の科目別・大問別成績と失点傾向の分析",
  "今年度予定している医学部受験校数と併願の優先度",
  "ご家庭のファイナンス計画と特待生制度活用の可能性",
  "Medvanceでピンポイント指導すべき苦手科目・単元",
];

const fitItems = [
  "大手予備校の最上位クラスにいるが、復習が追いついていない",
  "授業の内容は理解できるが、自分で模試や過去問を解くと得点できない",
  "予備校の大人数環境で、講師に気軽に質問できず悩んでいる",
  "私立医学部を複数校受験するが、出願スケジュールに不安がある",
  "保護者が学習の進捗と受験校の意思決定プロセスを正確に把握したい",
  "安価な個別指導ではなく、合格可能性に直結する専門戦略を優先したい",
];

const faqItems = [
  {
    q: "鉄緑会や駿台・河合塾などの大手予備校と、Medvanceを併用する価値は何ですか？",
    a: "鉄緑会や大手予備校の授業は極めて高品質ですが、最大の課題は『受け身の授業消化不良』です。毎週の膨大な課題をこなすだけで精一杯になり、実質的な学力定着に至らない生徒が非常に多いのが実態です。Medvanceは、それらの授業テキストを『15分単位の計画』で完全に復習管理し、1回90分（2コマ分）の完全個別指導で答案添削と完全再現アウトプットを保証します。これにより、高額な予備校費用を無駄にせず、投資対効果を数倍に引き上げます。",
  },
  {
    q: "今の予備校（駿台や河合塾など）を辞めずに、Medvanceを追加することはできますか？",
    a: "はい、可能です。多くの生徒様が大手予備校の質の高い授業をベースに活用しつつ、その『復習不足』『記述答案の添削不足』『質問できない環境』を補うためにMedvanceを併用されています。無駄に教材を増やすのではなく、今お手元にある予備校のテキストを100%完璧に定着させるための管理指導を行います。",
  },
  {
    q: "予備校の担任から『夏期・冬期講習』を大量に提案されて迷っています。どう判断すべきですか？",
    a: "大手予備校のビジネスモデル上、大量の講習受講を提案されることが一般的です。しかし、授業時間を増やしすぎると復習する時間が奪われ、結果として秋以降の成績低下を招きます。Medvanceでは、本当に受講価値のある『弱点単元に特化した極少の講習』だけを選定し、残りの時間は全て定着のための演習と添削に充てるよう客観的な助言を行います。",
  },
  {
    q: "個別指導（オンライン）のみの依頼も可能ですか？",
    a: "はい、指導のみのプランもございます。ただし、医学部受験においては、科目知識の習得だけでなく『学習進捗の週次チェック』と『出願校の戦略設計』を掛け合わせることで合格確率が数倍に跳ね上がるため、基本的には週次の戦略伴走を含んだプランをお勧めしております。初回診断にてご状況に合わせてご提案します。",
  },
];

const schemas = [
  ...buildForPageSchemas({
    name: "大手予備校併用・医学部合格戦略伴走",
    description:
      "大手予備校（駿台・河合塾・東進など）の最高峰講義を活かしきるための、復習定着管理、記述答案添削、私立・国公立医学部出願戦略、保護者共有を提供するMedvanceの併用個別コーチングサービスです。",
    slug: "prep-school-plus",
    serviceType: "Private/National medical school coaching with prep school support",
    breadcrumbLabel: "大手予備校と併用したい方",
  }),
  buildItemListSchema(
    "大手予備校併用の合格戦略診断で確認する6項目",
    "/for/prep-school-plus",
    diagnosisItems.map((name) => ({ name, url: "/for/prep-school-plus" })),
  ),
  buildFaqSchema(faqItems),
  buildSpeakableSchema("/for/prep-school-plus"),
];

export default function PrepSchoolPlusPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 md:py-28" style={{ backgroundColor: "#0c1a33" }}>
        <Image
          src="/images/hero-japan-tutoring.webp"
          alt="医学部受験の個別戦略を確認する講師と受験生"
          fill
          sizes="100vw"
          className="object-cover object-[65%_center] opacity-40"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(12,26,51,0.98) 0%, rgba(12,26,51,0.92) 48%, rgba(12,26,51,0.48) 100%)" }} />
        <div className="relative mx-auto max-w-6xl z-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>
              Prep School Support Program
            </p>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              大手予備校だけでは埋まらない、<br />医学部合格への「復習・出願」個別戦略。
            </h1>
            <p className="mb-8 max-w-2xl text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.84)" }}>
              駿台・河合塾・東進などの授業は強力です。しかし、授業の後に『本当に身についたか』の確認と、超複雑な出願ポートフォリオ設計は本人・ご家庭任せになりがちです。Medvanceは、高額な予備校への投資を確実に合格へと接続します。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?from=prep-school-plus-hero" className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#c9922a" }}>
                現在の予備校利用状況を相談する
              </Link>
              <Link href="/universities/private" className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ border: "1px solid rgba(255,255,255,0.28)" }}>
                私立医学部の合格戦略を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Highlight items */}
      <section className="py-6 border-b" style={{ backgroundColor: "#f7f5f0", borderColor: "#e5e1d8" }}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {proofItems.map((item) => (
              <div key={item.label} className="py-2">
                <span className="text-[10px] font-bold block uppercase tracking-wider text-gray-400">{item.label}</span>
                <span className="text-sm font-bold text-gray-800 mt-1 block" style={{ color: "#0c1a33" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Bottleneck (Lecturer Overload Analysis) */}
      <section className="px-4 py-20" style={{ backgroundColor: "#white" }}>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>Why Prep School Fails Alone</p>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              良質な授業を『受けるだけ』で不合格になる、<br className="hidden md:block" />インプット過多のメカニズム
            </h2>
          </div>
          
          <div className="space-y-6">
            {gapItems.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 md:p-8" style={{ border: "1px solid #e5e1d8", backgroundColor: "#fcfbf9" }}>
                <h3 className="mb-3 text-base md:text-lg font-bold" style={{ color: "#0c1a33" }}>{item.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-[24px] bg-[#0c1a33] text-white relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
              <span className="text-9xl font-bold">INFO</span>
            </div>
            <h4 className="font-bold text-base md:text-lg mb-3" style={{ color: "#c9922a" }}>
              ⚠️ 冬期・夏期講習の大量提案に騙されないでください
            </h4>
            <p className="text-xs md:text-sm leading-relaxed text-gray-300">
              予備校の面談では『この10講座を受講しないと志望校に届かない』と勧められるケースが後を絶ちません。しかし、授業が増えるほど『自分で考える演習時間』が奪われ、成績は下降線に入ります。Medvanceはご家庭の側に立ち、本当に受講すべき1〜2講座だけに絞り込む『無駄なオプション排除戦略』を徹底指導します。
            </p>
          </div>
        </div>
      </section>

      {/* Weekly combined schedule example (Brand new UX component) */}
      <section className="px-4 py-20" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>Weekly combined routine</p>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              大手予備校 × Medvance の黄金併用モデル（一週間の流れ）
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-2">
              予備校の集団講義を受けながら、どのようにMedvanceで復習と定着を図るかの一週間のスケジュールルーティン例です。
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl bg-white p-4 md:p-6 shadow-sm" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full min-w-[800px] border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: "#e5e1d8" }}>
                  <th className="py-3 px-4 font-bold" style={{ color: "#0c1a33" }}>曜日</th>
                  <th className="py-3 px-4 font-bold text-gray-500">予備校での活動</th>
                  <th className="py-3 px-4 font-bold text-gray-500">自習・復習ルーティン</th>
                  <th className="py-3 px-4 font-bold" style={{ color: "#c9922a" }}>Medvanceによる補強と管理</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 px-4 font-bold">月曜日〜水曜日</td>
                  <td className="py-4 px-4">前期・後期の本科授業に出席（インプット）</td>
                  <td className="py-4 px-4">15分単位のスキマ時間を活用した『予備校授業の復習・テキスト解き直し』</td>
                  <td className="py-4 px-4" style={{ color: "#c9922a", fontWeight: 600 }}>毎日LINEでの『復習進捗』報告と質問対応</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">木曜日</td>
                  <td className="py-4 px-4">予備校自習室で発展問題の演習</td>
                  <td className="py-4 px-4">過去問・マーク式模試の予習</td>
                  <td className="py-4 px-4" style={{ color: "#c9922a", fontWeight: 600 }}>理解が不十分な単元をあらかじめ抽出</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">金曜日</td>
                  <td className="py-4 px-4">予備校の弱点科目授業</td>
                  <td className="py-4 px-4">今週の全授業テキストの最終見直し</td>
                  <td className="py-4 px-4" style={{ color: "#c9922a", fontWeight: 600 }}>プロ講師による1回90分（2コマ分）の完全1対1個別指導・答案添削</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold" style={{ backgroundColor: "rgba(201,146,42,0.03)" }}>土曜日（調整日）</td>
                  <td className="py-4 px-4" style={{ backgroundColor: "rgba(201,146,42,0.03)" }}>予備校の公開模試受験</td>
                  <td className="py-4 px-4" style={{ backgroundColor: "rgba(201,146,42,0.03)" }}>模試の『当日中』自己採点と弱点書き出し</td>
                  <td className="py-4 px-4 font-bold" style={{ backgroundColor: "rgba(201,146,42,0.03)", color: "#c9922a" }}>
                    週次の個別コーチング（15分単位の計画微調整、定着口頭チェック）
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold">日曜日（完全定着）</td>
                  <td className="py-4 px-4">授業なし（休校）</td>
                  <td className="py-4 px-4">苦手単元・確認テスト落ち単元の『徹底解き直し』</td>
                  <td className="py-4 px-4" style={{ color: "#c9922a", fontWeight: 600 }}>次週の『やるべき課題』が完全に確定</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── HIGH QUALITY JAPANESE REALISTIC PHOTO (Tier 4) ── */}
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-4xl relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_rgba(12,26,51,0.12)] border border-white/40 ring-1 ring-[#c9922a]/10 group">
          <div className="absolute inset-0 bg-amber-100/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500 z-10" />
          <img 
            src="/images/generated/japanese_yobiko_active_discussion.png" 
            alt="大手予備校の教材を使いながらプロ講師とマンツーマンで復習計画を立てる医学部受験生" 
            className="w-full h-auto object-cover max-h-[450px] transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </section>

      {/* Medvance Core Pillars */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>Our Combined Solutions</p>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              予備校を活かしきる、Medvanceの4つのサポート領域
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-4">
            {supportSteps.map((item) => (
              <div key={item.step} className="rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-sm" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="mb-4 text-base font-bold" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>{item.step}</p>
                <h3 className="mb-3 text-base font-bold text-gray-800" style={{ color: "#0c1a33" }}>{item.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table Section */}
      <section className="px-4 py-20" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>Pillar Comparison</p>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug text-white" style={{ fontFamily: "var(--font-noto-serif)" }}>
              他教育サービスとMedvanceの違い
            </h2>
          </div>
          
          <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(255,255,255,0.12)" }}>
            <table className="w-full min-w-[780px] border-collapse text-xs md:text-sm">
              <thead style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
                <tr className="border-b" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  {["比較項目", "大手予備校（集団）", "一般的な補習個別指導", "Medvance（プロ併用プラン）"].map((head) => (
                    <th key={head} className="px-6 py-4 text-left font-bold text-white">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                    {row.map((cell, index) => (
                      <td key={cell} className="px-6 py-4 align-top leading-relaxed" style={{ color: index === 0 ? "#fff" : "rgba(255,255,255,0.72)", fontWeight: index === 0 || index === 3 ? 700 : 400 }}>
                        {index === 3 && cell.includes("レポート") ? (
                          <span style={{ color: "#c9922a" }}>{cell}</span>
                        ) : (
                          cell
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Target Audience checklist */}
      <section className="px-4 py-20" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
          <div>
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>Best Fitness Checklist</p>
            <h2 className="mb-4 text-2xl md:text-3xl font-bold leading-snug" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              このような課題を抱える方に、<br className="hidden md:block" />併用プログラムは最適です
            </h2>
            <p className="mb-6 text-xs md:text-sm leading-relaxed text-gray-500">
              Medvanceは、単に『わからない問題を教える』だけの家庭教師やアルバイト個別塾ではありません。合格可能性を高めるための予備校活用設計を行います。
            </p>
            <Link href="/contact?from=prep-school-plus-fit" className="inline-flex items-center justify-center rounded-lg px-7 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#c9922a" }}>
              現在の模試成績で相談する
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {fitItems.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-xl bg-white p-5 transition-all hover:shadow-sm" style={{ border: "1px solid #e5e1d8" }}>
                <span className="text-sm font-bold" style={{ color: "#c9922a" }}>{String(index + 1).padStart(2, "0")}</span>
                <p className="text-xs md:text-sm leading-relaxed text-gray-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy check items on first consul */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>Strategy Audit details</p>
            <h2 className="mb-4 text-2xl md:text-3xl font-bold leading-snug" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              初回無料の『合格戦略診断』で<br />チェックする6大項目
            </h2>
            <p className="text-xs md:text-sm leading-relaxed text-gray-500">
              安易に追加費用を払って塾や授業を増やす前に、まず現在のボトルネック（何が原因で復習が追いついていないか）を完全に分析し、合格に必要なロードマップを作ります。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {diagnosisItems.map((item, idx) => (
              <div key={item} className="rounded-xl p-4 text-xs md:text-sm font-bold flex gap-2 items-center" style={{ color: "#0c1a33", backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <span className="w-5 h-5 rounded-full text-white text-[10px] flex items-center justify-center font-bold" style={{ backgroundColor: "#0c1a33" }}>{idx + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Component */}
      <section className="px-4 py-20 bg-white border-t" style={{ borderColor: "#e5e1d8" }}>
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>FAQ</p>
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            大手予備校併用に関してよくあるご質問
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, idx) => (
              <div key={idx} className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="mb-3 text-sm md:text-base font-bold flex gap-2" style={{ color: "#0c1a33" }}>
                  <span style={{ color: "#c9922a" }}>Q.</span> {item.q}
                </p>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600 flex gap-2 pl-1 border-t pt-3 border-dashed" style={{ borderColor: "#d6d1c7" }}>
                  <span className="font-bold" style={{ color: "#0c1a33" }}>A.</span> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-24 text-white relative overflow-hidden" style={{ backgroundColor: "#0c1a33" }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#c9922a_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="mx-auto max-w-3xl text-center relative z-10">
          <h2 className="mb-4 text-2xl font-bold leading-snug text-white md:text-4xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
            予備校の良質な授業を、<br />本物の医学部合格実績に接続する。
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xs md:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            現在の予備校のテキスト進捗、直近の模試偏差値、志望医学部の候補をご用意ください。どう役割分担をすれば今年確実に合格できるか、徹底した個別戦略をご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?from=prep-school-plus-final" className="inline-flex items-center justify-center rounded-lg px-9 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#c9922a" }}>
              無料の併用戦略シミュレーションを申し込む
            </Link>
            <Link href="/for/not-group-school" className="inline-flex items-center justify-center rounded-lg px-9 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90 border border-white/20 hover:bg-white/10">
              集団塾自体が合わないと感じる方はこちら
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
