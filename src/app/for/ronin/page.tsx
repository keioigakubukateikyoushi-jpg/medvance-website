import ForPageSchemas from "@/components/ForPageSchemas";
import Link from "next/link";
import RelatedColumns from "@/components/RelatedColumns";

export const metadata = {
  title: "医学部浪人生の私立医学部合格戦略｜再浪人を避ける戦略伴走",
  description:
    "医学部受験で浪人し、今年こそ私立医学部に合格したい受験生とご家庭へ。Medvanceは前年度の失敗分析、受験校設計、週次学習管理、個別指導、保護者共有まで一体で伴走します。",
  alternates: {
    canonical: "/for/ronin",
  },
};

const researchStats = [
  {
    label: "私立医学部医学科",
    value: "実質12.58倍",
    body: "令和7年度の私立医学部医学科は、受験者103,595人に対し合格者8,237人。出願校の組み方で結果が大きく変わります。",
  },
  {
    label: "現役・浪人比率",
    value: "浪人生が多数派の大学も",
    body: "2024年度データでは、私立医学部の多くで浪人生比率が過半数。浪人は珍しい失敗ではなく、戦略次第で勝負できる中心層です。",
  },
  {
    label: "私立医学部6年間学費",
    value: "約3,000万円台前半",
    body: "進学後の学費まで含めると、浪人の1年は家庭にとって大きな意思決定です。受験期の戦略ミスを減らす必要があります。",
  },
];

const painPoints = [
  {
    title: "授業は受けているのに、復習と自習が崩れている",
    body: "浪人生は時間がある分、管理されない自習時間が合否を分けます。Medvanceでは授業外の演習量・復習日・確認テストまで週単位で管理します。",
  },
  {
    title: "去年と同じ問題集、同じ予備校、同じ失敗を繰り返しそう",
    body: "現役時代の失敗原因を特定せずに量だけ増やしても、再浪人リスクは下がりません。科目別に“なぜ落としたか”を分解します。",
  },
  {
    title: "志望校へのこだわりと、合格可能性の判断が揺れる",
    body: "医学部は大学ごとに配点・傾向・日程・面接小論文が違います。第一志望だけでなく、本命校・勝負校・現実校を組み直します。",
  },
];

const programSteps = [
  {
    step: "01",
    title: "前年の失敗分析",
    body: "不合格校、一次通過、補欠、模試推移、直前期の学習状況を確認し、失敗の原因を科目・生活・出願に分けます。",
  },
  {
    step: "02",
    title: "私立医学部ポートフォリオ設計",
    body: "偏差値表だけでなく、科目相性、日程、学費、面接小論文、補欠可能性まで含めて受験校を整理します。",
  },
  {
    step: "03",
    title: "週次学習管理",
    body: "大手予備校の授業、自習、個別指導、復習日を1週間単位で接続し、毎週のズレを小さくします。",
  },
  {
    step: "04",
    title: "直前期の意思決定",
    body: "10月以降は過去問、出願校、面接小論文、補欠戦略まで更新し、保護者にも判断材料を共有します。",
  },
];

const supportItems = [
  "大手予備校の授業を活かす前提で、足りない科目だけ個別指導を入れる",
  "英語・数学・理科のどこに時間を寄せるかを毎月更新する",
  "朝型生活、自習時間、スマホ・SNSなど浪人期の崩れやすい要素を可視化する",
  "保護者面談で、費用・受験校・浪人継続可否を早めに判断できる状態にする",
  "面接・小論文・志望理由を直前に詰め込まず、学科対策と並行して進める",
  "模試判定に一喜一憂せず、次の2週間で点になる行動に落とし込む",
];

const mismatchItems = [
  "今年も第一志望だけを見て、現実校を組む気がない",
  "授業は増やしたいが、毎週の課題管理や復習確認は不要だと考えている",
  "保護者が費用や受験校の意思決定に関与できない",
  "模試結果や前年度の受験結果を共有したくない",
];

const faqs = [
  {
    q: "浪人生でも私立医学部に現実的に合格できますか？",
    a: "可能性はあります。実際に医学部入学者には浪人経験者が多く含まれます。ただし、去年と同じやり方を繰り返すのではなく、失敗原因、科目別優先順位、受験校ポートフォリオを組み直すことが前提です。",
  },
  {
    q: "大手予備校に通いながら利用できますか？",
    a: "可能です。むしろ大手予備校の授業を使いながら、自習管理・弱点補強・私立医学部ごとの出願戦略をMedvanceで補う形は相性がよいです。",
  },
  {
    q: "2浪以上や多浪でも相談できますか？",
    a: "相談できます。ただし、浪人回数が増えるほど受験校選定と生活管理の精度が重要になります。診断では、合格可能性を上げるためにどこまで方針転換できるかも確認します。",
  },
  {
    q: "本人だけで申し込めますか？",
    a: "申し込み自体は可能ですが、私立医学部受験は学費・出願校・浪人継続可否など家庭の判断が大きいため、初回診断は保護者同席を推奨しています。",
  },
];

export default function RoninPage() {
  return (
    <>
      <ForPageSchemas slug="ronin" />
      <div className="min-h-screen bg-white">
        <section style={{ backgroundColor: "#0c1a33" }} className="px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              Private Medical Ronin Strategy
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-snug text-white md:text-4xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              浪人した医学部受験を、今年で終わらせるために。
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
              何としてでも私立医学部に入りたい浪人生へ。Medvanceは、前年の失敗分析・受験校設計・週次学習管理・個別指導・保護者共有まで、再浪人を避けるための1年を設計します。
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact?from=ronin-hero"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#c9922a" }}
              >
                浪人生向け合格可能性診断を申し込む
              </Link>
              <Link
                href="/pricing?from=ronin-hero"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
                style={{ border: "1px solid rgba(255,255,255,0.28)" }}
              >
                料金と伴走内容を見る
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                Research
              </p>
              <h2 className="text-2xl font-bold leading-snug md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                浪人は例外ではなく、医学部受験の現実です。
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                問題は、浪人したことではありません。去年の失敗原因を分析せず、同じ生活・同じ教材・同じ出願方針で1年を始めてしまうことです。
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {researchStats.map((item) => (
                <div key={item.label} className="h-full rounded-lg bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
                  <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>{item.label}</p>
                  <p className="mb-4 text-3xl font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                    {item.value}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                Pain Points
              </p>
              <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                浪人生が再び失敗しやすい3つの理由
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {painPoints.map((item) => (
                <div key={item.title} className="rounded-lg p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <p className="mb-3 text-base font-bold" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" style={{ backgroundColor: "#0c1a33" }}>
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                Program
              </p>
              <h2 className="text-2xl font-bold leading-snug text-white md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
                今年で決めるための、浪人生専用の戦略伴走。
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>
                授業を足す前に、失敗原因・受験校・週次実行をつなぎ直します。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              {programSteps.map((item) => (
                <div key={item.step} className="h-full rounded-lg p-5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <p className="mb-4 text-sm font-bold" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>{item.step}</p>
                  <p className="mb-3 text-base font-bold text-white">{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.68)" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                What We Manage
              </p>
              <h2 className="mb-4 text-2xl font-bold leading-snug md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                浪人の1年は、学力だけでなく生活と判断の管理です。
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                大手予備校に通っていても、自習時間・復習・出願校・保護者判断が分断されると、1年はすぐに過ぎます。Medvanceはそこを接続します。
              </p>
              
              {/* Embedding realistic Japanese ronin study coaching photo */}
              <div className="mt-8 overflow-hidden rounded-xl border bg-white" style={{ borderColor: "#e5e1d8" }}>
                <img 
                  src="/images/generated/ronin_study_management.png" 
                  alt="15分単位の計画表を使いながら講師と学習計画を確認する日本人の浪人生" 
                  className="w-full h-auto object-cover max-h-[300px]"
                />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {supportItems.map((item) => (
                <div key={item} className="flex min-h-[86px] gap-3 rounded-lg p-4" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full" style={{ backgroundColor: "#c9922a" }} />
                  <p className="text-sm font-semibold leading-relaxed" style={{ color: "#0c1a33" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                Fit Check
              </p>
              <h2 className="text-2xl font-bold leading-snug md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                本気の浪人生を優先します。
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                「今年で決める」ためには、本人の覚悟と家庭の判断が必要です。次の条件に当てはまる場合は、診断の優先度が下がります。
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {mismatchItems.map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-lg bg-white p-5" style={{ border: "1px solid #e5e1d8" }}>
                  <span className="mt-0.5 text-sm font-bold" style={{ color: "#c9922a" }}>{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              よくあるご質問
            </h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-lg p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <p className="mb-2 text-sm font-bold" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>A. {item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedColumns hub="for/ronin" heading="浪人生におすすめの関連コラム" subheading="年間計画・過去問・塾選び・再受験リスクを整理しています。" />

        <section className="px-4 py-20" style={{ backgroundColor: "#0c1a33" }}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              Diagnosis
            </p>
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              まず、去年の失敗原因と今年の勝ち筋を診断します。
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.66)" }}>
              前年度の受験結果、模試、志望校、学習時間をもとに、今年の私立医学部合格に必要な受験校設計と伴走量を整理します。
            </p>
            <Link
              href="/contact?from=ronin-final"
              className="inline-flex items-center justify-center rounded-lg px-9 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#c9922a" }}
            >
              浪人生向け合格可能性診断を申し込む
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
