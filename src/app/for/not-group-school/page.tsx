import Image from "next/image";
import Link from "next/link";
import { buildFaqSchema, buildForPageSchemas, buildItemListSchema, buildSpeakableSchema } from "@/lib/seo";

export const metadata = {
  title: "【集団塾が合わない医学部受験生へ】完全1対1指導と週次学習管理で立て直す | Medvance",
  description:
    "大人数の集団授業でついていけない、質問ができない、自習が進まない医学部志望生へ。Medvanceは、生徒のつまずきに1対1で向き合い、週次計画と確認テストで『何をやり何を捨てるか』を完全個別設計する戦略伴走塾です。",
  alternates: {
    canonical: "/for/not-group-school",
  },
};

const mismatchItems = [
  {
    title: "1. 消極的質問難民タイプ",
    body: "授業でわからない箇所があっても、『質問ブースが混んでいる』『こんな単純な質問をしたら恥ずかしい』と躊躇し、弱点を放置した結果、数ヶ月で英数理の積み重ねが完全に雪だるま式に崩壊するタイプです。",
  },
  {
    title: "2. わかったフリ消化不良タイプ",
    body: "予備校一流講師の華麗な板書や解説を聞いて『理解したつもり（インプット）』になっているだけで、実際に自分の手でゼロから答案を書く（アウトプット）訓練が圧倒的に不足し、模試や本番で手が動かないタイプです。",
  },
  {
    title: "3. 周囲の比較による自己効力感喪失タイプ",
    body: "優秀な生徒が集団授業で活発に発言する姿や、クラス内の成績上位者貼り出しを目にし、周囲と自分を過度に比較することで『自分には才能がないのではないか』と自信を失い、モチベーションが枯渇してしまうタイプです。",
  },
];

const supportItems = [
  {
    title: "1回90分（45分×2コマ分）の完全1対1個別指導",
    body: "人間の集中力が持続する45分を1コマとし、1回90分（2コマ分）の指導を行います。前半45分でプロの解説（インプット）を行い、後半45分でその場で解き直す完全再現（アウトプット）と記述答案添削を行うため、授業内での定着度が抜群です。",
  },
  {
    title: "分刻みの『15分単位』完全学習計画",
    body: "1時間や2時間の曖昧な計画はサボりの原因です。通学時間、食事の前後、お風呂前の15分といったスキマ時間まで徹底的に可視化し、『今この15分でやるべき具体的なページ数』をミリ単位で設計し、自走力を鍛えます。",
  },
  {
    title: "質問の待ち時間を完全ゼロに",
    body: "自習室や自宅での疑問点は、LINE経由でいつでも質問を送信可能。質問待ちの行列に並ぶ無駄な時間を完全ゼロにし、最も能率の良い自学自習をサポートします（※専任講師が順次丁寧に回答いたします）。",
  },
  {
    title: "科目配点相性を活かした出願ポートフォリオ",
    body: "集団塾のように一律で『慶応・慈恵』を目指させるのではなく、本人の得点バランスから『合格可能性が極めて高い私立・国公立医学部』をピンポイントで厳選し、逆転合格を演出します。",
  },
  {
    title: "ご家庭との週次密着レポート連携",
    body: "毎週の確認テストの点数、15分単位計画の実行状況、学習時間の推移をご家庭に透明性高くレポート。受験の進捗と追加の投資判断などを可視化できるようにします。",
  },
  {
    title: "予備校カリキュラムとのハイブリッド補完",
    body: "すべてをMedvanceに一本化するだけでなく、『この科目の講義部分は東進で受け、復習定着と記述答案指導のみをMedvanceで行う』といった柔軟な併願設計も機能します。",
  },
];

const fitItems = [
  "集団授業のクラスの雰囲気や、周囲の視線・競争が苦痛に感じる",
  "医学部に入りたいという本気はあるが、何から手をつけていいか実行手順がわからない",
  "わからない問題をその場ですぐに解説してもらい、答案の添削まで細かく受けたい",
  "特定の得意科目と著しい苦手科目の差が激しく、一律のカリキュラムが合わない",
  "保護者が本人の学習の遅れや出願戦略のリアルな進捗を密に把握したい",
  "安価な家庭教師ではなく、医学部合格に必要な『戦略・管理・プロ指導』のパッケージを求めたい",
];

const notFitItems = [
  "慶応医学部以外には進学する気がなく、現実的な併願校の検討を一切受け入れられない",
  "学習時間を確保する気がなく、指導の授業さえ聞いていれば魔法のように成績が上がると思っている",
  "保護者が受験に関与することを嫌い、本人の勝手な思い込みだけで全て出願を決定したい",
  "とにかく授業料の安さや無料キャンペーンのみを最優先して塾を選定している",
];

const diagnosisItems = [
  "集団塾（鉄緑会・駿台・河合など）でついていけなくなった根本原因の特定",
  "英語・数学・理科の科目別・単元別の致命的な『穴』の網羅的洗い出し",
  "直近の記述・マーク模試の偏差値と、実際の答案用紙に見る失点癖の分析",
  "自学自習できる実質的な学習時間と、生活リズム・スマホ依存などの環境調査",
  "受験を検討している私立・国公立医学部の優先度とご家庭の費用条件",
  "週次管理テストと完全1対1指導で、まず高3夏・秋までに到達すべきマイルストーン策定",
];

const faqItems = [
  {
    q: "鉄緑会などの超進学校向け集団塾や大手予備校のクラスについていけない場合でも、本当に克服できますか？",
    a: "確実に克服できます。鉄緑会などの集団塾で低迷する原因は、本人の能力不足ではなく、一律かつ超高速な進度による『基礎の抜け』です。Medvanceでは、他の誰とも比較されない完全1対1の環境で、15分単位の計画作成と確認テストを用いて『何を取り、何を捨てるか』を徹底設計します。授業を消化するだけの無駄な時間を完全排除し、最短ルートで偏差値を引き上げます。",
  },
  {
    q: "集団塾で最下位クラスだったのですが、医学部受験に今から間に合いますか？",
    a: "残り期間と現在の実力によりますが、十分に逆転可能です。集団塾の最下位クラスで低迷している生徒様の多くは『頭が悪い』のではなく、『カリキュラムの進度が早すぎて基礎の穴を埋める時間がない』だけです。一度立ち止まって基礎に立ち返り、苦手科目に完全個別最適化した学習を組めば、3〜6ヶ月で偏差値が10以上跳ね上がる事例は数多くあります。",
  },
  {
    q: "本人が『計画を立ててもサボってしまう』性格ですが、管理しきれますか？",
    a: "管理できます。サボってしまうのは『本人の意志が弱い』からではなく、『その日何を何ページやるべきか、難易度が本人に合っているか』が極めて曖昧だからです。Medvanceでは毎日のタスクを『15分単位』でスキマ時間まで可視化して徹底設計し、毎週末の『口頭チェックと確認テスト』で定着度を二重測定するため、ごまかしが効きません。また、実行状況はすべて毎週保護者様にリアルタイム共有します。",
  },
  {
    q: "1回90分（2コマ分）の指導と15分単位の計画はどのように進めますか？",
    a: "通常授業は45分を1コマとして計算し、1回90分（2コマ分）として実施します。前半45分で良質なプロのインプット講義を行い、後半45分でその場での演習アウトプットおよび講師による記述の完全添削（赤ペン指導）を行うため、やりっぱなしをゼロにします。さらに、その授業を完璧にするための自学自習ロードマップは15分単位でスキマ時間まで可視化して設計されます。",
  },
  {
    q: "集団塾をすべて辞めて、Medvance一本にするべきですか？",
    a: "必ずしもすべての授業を辞める必要はありません。例えば『物理の高度な講義は駿台で受け、復習やテストによる定着と数学・英語のマンツーマン指導はMedvanceで行う』といったハイブリッドな活用法も非常に効果的です。初回戦略面談の際に、現在の受講内容を客観的に仕分け、無駄な出費を削減するご提案をします。",
  },
];

const schemas = [
  ...buildForPageSchemas({
    name: "集団塾不適合・医学部受験逆転戦略伴走プラン",
    description:
      "集団授業や一律のカリキュラムについていけない、質問ができない、自習が進まない医学部志望生向けに、完全1対1の記述答案個別指導、LINEでの迅速な質問対応、週次の確認テスト管理、保護者密着共有を提供するMedvanceの個別戦略伴走サービスです。",
    slug: "not-group-school",
    serviceType: "Private/National medical school coaching for students incompatible with group environments",
    breadcrumbLabel: "集団塾が合わない方",
  }),
  buildItemListSchema(
    "集団塾が合わない医学部志望生の初回戦略診断6項目",
    "/for/not-group-school",
    diagnosisItems.map((name) => ({ name, url: "/for/not-group-school" })),
  ),
  buildFaqSchema(faqItems),
  buildSpeakableSchema("/for/not-group-school"),
];

export default function NotGroupSchoolPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-24 md:py-28" style={{ backgroundColor: "#0c1a33" }}>
        <Image
          src="/images/japan-medical-exam-desk.webp"
          alt="医学部受験の教材と学習計画を広げた机"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(12,26,51,0.98) 0%, rgba(12,26,51,0.92) 50%, rgba(12,26,51,0.5) 100%)" }} />
        <div className="relative mx-auto max-w-6xl z-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>
              Tailored Individual Strategy
            </p>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              集団塾・集団予備校が<br />合わない医学部志望生へ。
            </h1>
            <p className="mb-8 max-w-2xl text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.84)" }}>
              医学部に絶対合格したい。でも、周りのペースに流されるだけの集団講義、質問待ちの長い列、何から勉強すれば良いか曖昧な自習管理に疲れていませんか？ Medvanceは、あなたの『わからない』を徹底的に個別最適化するマンツーマン戦略塾です。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?from=not-group-school-hero" className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#c9922a" }}>
                1対1の学習戦略シミュレーションを申し込む
              </Link>
              <Link href="/for/parents" className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90 border border-white/20 hover:bg-white/10">
                保護者様向け戦略を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Mismatch Types Analysis (Expert Content) */}
      <section className="px-4 py-20" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>The 3 Mismatch Archetypes</p>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              集団授業で成績が伸び止まる『3つのミスマッチ』
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-2">
              私たちは、集団環境で伸び悩む生徒様を3つのタイプに科学的に分類し、それぞれの認知の歪み・つまづきを解消します。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {mismatchItems.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 md:p-8 hover:-translate-y-1 transition-all hover:shadow-sm" style={{ border: "1px solid #e5e1d8" }}>
                <h3 className="mb-3 text-base font-bold" style={{ color: "#c9922a" }}>{item.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGH QUALITY JAPANESE REALISTIC PHOTO (Tier 4) ── */}
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-4xl relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_rgba(12,26,51,0.12)] border border-white/40 ring-1 ring-[#c9922a]/10 group">
          <div className="absolute inset-0 bg-amber-100/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500 z-10" />
          <img 
            src="/images/generated/japanese_student_despair_resolved.png" 
            alt="集団授業での伸び悩みを解消し、自分専用の学習習慣を手に入れて明るい表情で勉強に取り組む生徒" 
            className="w-full h-auto object-cover max-h-[420px] transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </section>

      {/* 1to1 vs Group Velocity comparison (Brand new UX component) */}
      <section className="px-4 py-20 bg-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>Tutoring Velocity</p>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              なぜ完全1対1指導は『集団授業の3倍』高速なのか？
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-2">
              単に黒板の講義を聞く受け身の時間をゼロにし、最短時間で『自分の弱点を突く』フィードバックループの仕組みです。
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-[24px] grid gap-8 md:grid-cols-2" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <div>
              <h3 className="font-bold text-base mb-4 flex items-center gap-2" style={{ color: "#0c1a33" }}>
                ❌ 一般的な集団予備校の進度サイクル
              </h3>
              <ul className="text-xs md:text-sm space-y-4 text-gray-600 font-medium">
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">1.</span> 
                  <span>一律週1回の講義出席（わかったフリになる）</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">2.</span> 
                  <span>宿題・復習（自走できずに途中で挫折）</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">3.</span> 
                  <span>月1回の模試で記述ミス発覚（もう手遅れ）</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-500 font-bold">4.</span> 
                  <span>質問ブースの列に並び時間を浪費</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-base mb-4 flex items-center gap-2" style={{ color: "#c9922a" }}>
                ✨ Medvanceの超高速弱点克服ループ
              </h3>
              <ul className="text-xs md:text-sm space-y-4 text-gray-700 font-semibold">
                <li className="flex gap-2">
                  <span style={{ color: "#c9922a" }}>1.</span> 
                  <span>生徒が自ら書いた答案をプロ講師がその場で論理チェック（完全1対1）</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "#c9922a" }}>2.</span> 
                  <span>つまづき単元の関連類題をその場で『完全再現』するまで演習</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "#c9922a" }}>3.</span> 
                  <span>週末にその単元の『シャッフル確認テスト』で二重チェック</span>
                </li>
                <li className="flex gap-2">
                  <span style={{ color: "#c9922a" }}>4.</span> 
                  <span>LINEでの質問回答サポートで、日々のつまずきを速やかに解消し翌日に持ち越さない（※専任講師が順次丁寧に回答）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Support Areas */}
      <section className="bg-white px-4 py-20 border-t" style={{ borderColor: "#e5e1d8" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>Our Strategic Features</p>
            <h2 className="text-2xl md:text-4xl font-bold leading-snug" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              授業だけで終わらない、Medvanceの『6つの伴走アプローチ』
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {supportItems.map((item) => (
              <div key={item.title} className="rounded-2xl p-6 md:p-8 transition-all hover:shadow-sm" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <h3 className="mb-3 text-base md:text-lg font-bold" style={{ color: "#0c1a33" }}>{item.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit vs Not Fit Section (EEAT Trust indicator) */}
      <section className="px-4 py-20 text-white" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>Ideal Candidate</p>
              <h2 className="mb-6 text-2xl font-bold leading-snug" style={{ fontFamily: "var(--font-noto-serif)" }}>
                Medvanceがお役に立てるご家庭
              </h2>
              <div className="space-y-4">
                {fitItems.map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}>
                    <span className="text-sm font-bold" style={{ color: "#c9922a" }}>{String(index + 1).padStart(2, "0")}</span>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.76)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>Incompatible Cases</p>
              <h2 className="mb-6 text-2xl font-bold leading-snug" style={{ fontFamily: "var(--font-noto-serif)" }}>
                ご期待に沿えないケース
              </h2>
              <div className="space-y-4">
                {notFitItems.map((item) => (
                  <div key={item} className="rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnosis Details */}
      <section className="px-4 py-20" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div>
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>Initial Assessment</p>
            <h2 className="mb-4 text-2xl md:text-3xl font-bold leading-snug" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              初回『学習・環境診断』で<br />つまづきの真因を徹底解剖します
            </h2>
            <p className="text-xs md:text-sm leading-relaxed text-gray-500 mb-6">
              集団塾でついていけなくなった原因は、決して本人の学力不足だけではありません。学習習慣、生活動線、受験校の科目配点ミスマッチなど、あらゆる阻害要因を取り除きます。
            </p>
            <Link href="/contact?from=not-group-school-assessment" className="inline-flex items-center justify-center rounded-lg px-7 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#c9922a" }}>
              無料のつまづき診断に申し込む
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {diagnosisItems.map((item) => (
              <div key={item} className="rounded-xl bg-white p-5 text-xs md:text-sm font-bold flex items-center shadow-xs" style={{ color: "#0c1a33", border: "1px solid #e5e1d8" }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Component */}
      <section className="bg-white px-4 py-20 border-t" style={{ borderColor: "#e5e1d8" }}>
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>FAQ</p>
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            集団塾が合わない方に関してよくあるご質問
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.q} className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
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
            あなただけの『勝てる受験環境』を、<br />今ここから一緒に作りましょう。
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xs md:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            集団の競争に疲弊し、受験を諦める前にご相談ください。1対1の最高峰プロ講師陣が、あなたの個性と本気に向き合います。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?from=not-group-school-final" className="inline-flex items-center justify-center rounded-lg px-9 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#c9922a" }}>
              無料の1対1合格戦略診断を申し込む
            </Link>
            <Link href="/for/prep-school-plus" className="inline-flex items-center justify-center rounded-lg px-9 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90 border border-white/20 hover:bg-white/10">
              大手予備校と併用したい方はこちら
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
