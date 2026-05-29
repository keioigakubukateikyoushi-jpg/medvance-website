import Link from "next/link";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildItemListSchema,
  buildServiceSchema,
  buildSpeakableSchema,
} from "@/lib/seo";

export const metadata = {
  title: "私立医学部に何としてでも合格したいご家庭へ｜受験校戦略と週次管理",
  description:
    "私立医学部に何としてでも合格したい受験生・保護者へ。Medvanceは受験校ポートフォリオ、前年度の失敗分析、週次自習管理、大手予備校併用、面接小論文、保護者共有まで一体で設計します。",
  alternates: {
    canonical: "/private-medical-strategy",
  },
};

const marketFacts = [
  {
    label: "令和7年度 私立医学部医学科",
    value: "実質12.58倍",
    body: "文科省公表値では、受験者103,595人に対し合格者8,237人。複数校をどう組むかが結果を左右します。",
  },
  {
    label: "2026年度速報",
    value: "志願は底堅い",
    body: "予備校集計では私立医学部一般選抜の志願者は前年を上回る見方。競争は緩んだ前提で考えないほうが安全です。",
  },
  {
    label: "浪人生比率",
    value: "過半数の大学も多い",
    body: "私立医学部は大学ごとに現役・浪人比率が大きく異なります。浪人生に合う大学を見極める必要があります。",
  },
  {
    label: "初年度納付金",
    value: "医学部平均 約684万円",
    body: "文科省の令和7年度調査では、医学部の初年度総計平均は6,841,248円。保護者の意思決定が欠かせません。",
  },
];

const segments = [
  {
    title: "医師・開業医家庭",
    body: "医学部受験の高額さと難しさは理解している。子どもが本気で動かない、大手任せでいいのか、どの大学なら現実的かを不安視している家庭。",
    cta: "出願戦略を相談",
    href: "/contact?from=private-medical-ishi",
  },
  {
    title: "大手予備校に通っているが不安な家庭",
    body: "授業料を払っているのに成果が見えにくい。復習管理・弱点補強・受験校選定がすべて本人任せになっていると感じている家庭。",
    cta: "予備校併用プランへ",
    href: "/for/prep-school-plus?from=private-medical-segment",
  },
  {
    title: "医学部浪人生家庭",
    body: "去年の全落ち、一次落ち、補欠止まりを分析し、今年の受験校・学習量・生活管理を組み直したい家庭。",
    cta: "合格戦略診断",
    href: "/for/ronin?from=private-medical-segment",
  },
  {
    title: "集団塾・予備校が合わない家庭",
    body: "授業のペース、質問できない環境、自習管理の欠如に限界を感じ、1対1の個別指導と週次管理に切り替えたい家庭。",
    cta: "個別戦略ページへ",
    href: "/for/not-group-school?from=private-medical-segment",
  },
  {
    title: "高3の私立医学部専願・併願家庭",
    body: "夏以降に私立医学部を現実的に考え始め、何校受けるべきか、どの大学なら相性がよいか迷っている家庭。",
    cta: "出願戦略を相談",
    href: "/contact?from=private-medical-ko3",
  },
  {
    title: "保護者主導で判断したい家庭",
    body: "予備校費・学費・受験校・浪人継続可否を、本人任せではなく見える材料で判断したい家庭。",
    cta: "保護者向けへ",
    href: "/for/parents?from=private-medical-segment",
  },
];

const strategySteps = [
  {
    step: "01",
    title: "現在地を分解する",
    body: "模試判定だけでなく、科目別偏差値、失点単元、復習量、生活リズム、前年度の出願結果まで確認します。",
  },
  {
    step: "02",
    title: "受験校ポートフォリオを作る",
    body: "第一志望、本命校、勝負校、現実校を分け、日程・科目相性・学費・面接小論文まで含めて組みます。",
  },
  {
    step: "03",
    title: "大手予備校と自習を接続する",
    body: "授業を増やす前に、授業後の復習日、過去問、個別指導、確認テストを週単位でつなぎます。",
  },
  {
    step: "04",
    title: "保護者に判断材料を共有する",
    body: "学習量、次の課題、受験校候補、費用感を共有し、家庭としていつ何を決めるべきかを明確にします。",
  },
];

const comparisonRows = [
  ["主な役割", "授業と教材の提供", "弱点科目の解説", "何をやるか・何を捨てるかまで一緒に決める"],
  ["受験校設計", "全体説明はあるが個別最適は薄くなりやすい", "担当者次第", "科目相性・日程・学費・面接負荷まで個別設計"],
  ["自習管理", "本人任せになりやすい", "授業外は見えにくい", "週次計画、確認テスト、弱点補強まで接続"],
  ["保護者共有", "定期面談中心", "少ないことが多い", "進捗・受験校リスク・費用判断を毎月レポート"],
  ["投資配分", "授業・教材の提供が中心", "指導内容の範囲内", "年間の受験投資を、合格可能性に効く順番で配分"],
];

const diagnosisItems = [
  "前年度の受験校と結果",
  "直近模試の科目別偏差値",
  "1週間の学習時間と生活リズム",
  "大手予備校・個別指導の利用状況",
  "受けたい大学・受けられる大学・避けたい条件",
  "保護者同席と費用判断の方針",
];

const articleIdeas = [
  { title: "私立医学部は何校受けるべきか", href: "/column/private-nyuushiyasui" },
  { title: "医学部浪人生が今年変えるべきこと", href: "/for/ronin" },
  { title: "私立医学部の学費をどう考えるか", href: "/column/gakuhi" },
  { title: "面接・小論文はいつから始めるべきか", href: "/column/mensetu-timing" },
];

const faqs = [
  {
    q: "私立医学部に何校出願すべきですか？",
    a: "一律の正解はありません。現在地、科目相性、日程、学費、面接小論文の負荷、前年度の結果によって変わります。診断では本命校・勝負校・現実校に分けて考えます。",
  },
  {
    q: "大手予備校に通っていても利用できますか？",
    a: "利用できます。大手予備校の授業を活かしながら、自習管理、弱点補強、出願戦略、保護者共有をMedvanceで補う設計ができます。",
  },
  {
    q: "保護者だけで相談できますか？",
    a: "可能です。ただし最終的な学習計画には本人の意思と実行量が必要です。初回は保護者だけで現状整理し、その後本人同席に進む形も対応できます。",
  },
  {
    q: "合格保証はありますか？",
    a: "合格保証はしていません。Medvanceが行うのは、前年度の失敗分析、受験校設計、週次実行管理によって、現実的な合格可能性を高めるための伴走です。",
  },
];

const schemas = [
  buildServiceSchema(
    "私立医学部 受験校戦略診断",
    "私立医学部に何としてでも合格したい受験生・保護者向けに、受験校選定、前年度分析、週次学習管理、保護者共有まで設計する診断サービスです。",
    "/private-medical-strategy",
    "Private medical school admissions strategy",
  ),
  buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "私立医学部受験戦略", url: "/private-medical-strategy" },
  ]),
  buildItemListSchema(
    "私立医学部受験戦略で確認する項目",
    "/private-medical-strategy",
    diagnosisItems.map((name) => ({ name, url: "/private-medical-strategy" })),
  ),
  buildFaqSchema(faqs),
  buildSpeakableSchema("/private-medical-strategy"),
];

export default function PrivateMedicalStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <section className="px-4 py-20" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
            私立医学部専門の個別指導
          </p>
          <h1 className="mx-auto mb-5 max-w-4xl text-3xl font-bold leading-snug text-white md:text-5xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
            私立医学部に何としてでも合格したいご家庭へ。
          </h1>
          <p className="mx-auto mb-9 max-w-3xl text-sm leading-relaxed md:text-base" style={{ color: "rgba(255,255,255,0.72)" }}>
            偏差値表だけで受験校を決めるのではなく、科目相性・日程・学費・面接小論文・週次実行量まで含めて、今年の合格可能性を高める戦略を設計します。
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact?from=private-medical-hero"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#c9922a" }}
            >
              合格戦略診断を申し込む
            </Link>
            <Link
              href="/for/ronin?from=private-medical-hero"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ border: "1px solid rgba(255,255,255,0.28)" }}
            >
              浪人生向けページを見る
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              受験の実態
            </p>
            <h2 className="text-2xl font-bold leading-snug md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              私立医学部受験は、出願設計のミスがそのまま結果に響きます。
            </h2>
          </div>

          {/* Embedding professional strategy visual */}
          <div className="mb-10 overflow-hidden rounded-2xl border bg-white" style={{ borderColor: "#e5e1d8" }}>
            <img 
              src="/images/generated/private_medical_strategy_hero.png" 
              alt="私立医学部受験における戦略計画・スケジュール選定のイメージ" 
              className="w-full h-auto object-cover max-h-[380px]"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {marketFacts.map((item) => (
              <div key={item.label} className="rounded-lg bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
                <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>{item.label}</p>
                <p className="mb-4 text-2xl font-bold leading-tight" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                  {item.value}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed" style={{ color: "#7b8492" }}>
            参照: 文部科学省 令和7年度医学部医学科入学状況・令和7年度私立大学初年度学生納付金等、富士学院現浪比データ、2026年度入試の予備校速報。
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              こんな方に
            </p>
            <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              こういったご家庭のお役に立てます。
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {segments.map((item) => (
              <div key={item.title} className="flex h-full flex-col rounded-lg p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="mb-3 text-base font-bold" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="mb-6 flex-1 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
                <Link href={item.href} className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#0c1a33" }}>
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              指導の内容
            </p>
            <h2 className="text-2xl font-bold leading-snug text-white md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              授業を足す前に、勝ち筋を設計します。
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
              医学部受験では、同じ偏差値でも大学相性で結果が変わります。Medvanceは、学習と出願を分断せずに管理します。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {strategySteps.map((item) => (
              <div key={item.step} className="rounded-lg p-5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <p className="mb-4 text-sm font-bold" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>{item.step}</p>
                <p className="mb-3 text-base font-bold text-white">{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              他との違い
            </p>
            <h2 className="text-2xl font-bold leading-snug md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              Medvanceは、大手予備校を否定するサービスではありません。
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
              大手の授業を使いながら、個別の受験校設計と週次管理を補う。ここが私立医学部受験層への一番強い届け方です。
            </p>
          </div>
          <div className="overflow-x-auto rounded-lg" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead style={{ backgroundColor: "#f7f5f0" }}>
                <tr>
                  {["比較軸", "大手予備校", "一般的な個別指導", "Medvance"].map((head) => (
                    <th key={head} className="px-5 py-4 text-left font-bold" style={{ color: "#0c1a33", borderBottom: "1px solid #e5e1d8" }}>
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td key={cell} className="px-5 py-4 align-top leading-relaxed" style={{ color: index === 0 ? "#0c1a33" : "#5f6b7a", borderBottom: "1px solid #eee9df", fontWeight: index === 0 ? 700 : 400 }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              初回相談について
            </p>
            <h2 className="mb-4 text-2xl font-bold leading-snug md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              診断では、契約前に判断材料をそろえます。
            </h2>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
              受験校の選定・指導体制・費用感まで、ご家庭として判断するのに必要な情報を整理する場として設けています。
            </p>
            <Link href="/contact?from=private-medical-diagnosis" className="inline-flex items-center justify-center rounded-lg px-7 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#c9922a" }}>
              私立医学部の受験戦略を相談する
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {diagnosisItems.map((item) => (
              <div key={item} className="rounded-lg bg-white p-4 text-sm font-bold" style={{ color: "#0c1a33", border: "1px solid #e5e1d8" }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              あわせて読む
            </p>
            <h2 className="text-2xl font-bold leading-snug md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              私立医学部受験で次に読むべきページ
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {articleIdeas.map((item) => (
              <Link key={item.title} href={`${item.href}?from=private-medical-next`} className="rounded-lg p-5 transition-opacity hover:opacity-80" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="text-sm font-bold leading-relaxed" style={{ color: "#0c1a33" }}>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-center text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
            FAQ
          </p>
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-lg bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
                <p className="mb-2 text-sm font-bold" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
            まず相談する
          </p>
          <h2 className="mb-4 text-2xl font-bold leading-snug text-white md:text-4xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
            私立医学部の受験校戦略を、家庭で抱え込まない。
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.66)" }}>
            今年どの大学を狙い、何を捨て、どこに時間を投じるべきか。まずは現在地から整理します。
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact?from=private-medical-final" className="inline-flex items-center justify-center rounded-lg px-9 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#c9922a" }}>
              合格戦略診断を申し込む
            </Link>
            <Link href="/pricing?from=private-medical-final" className="inline-flex items-center justify-center rounded-lg px-9 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90" style={{ border: "1px solid rgba(255,255,255,0.28)" }}>
              料金と伴走内容を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
