import ForPageSchemas from "@/components/ForPageSchemas";
import Link from "next/link";

export const metadata = {
  title: "保護者の方へ｜私立医学部合格のための戦略伴走",
  description:
    "私立医学部に何としても合格させたい保護者の方へ。Medvanceは受験校選定、学習管理、保護者報告、面接小論文まで一体で支える医学部受験専門塾です。",
  alternates: {
    canonical: "/for/parents",
  },
};

const parentConcerns = [
  {
    title: "どの私立医学部なら現実的なのか分からない",
    body: "偏差値表だけでは判断できません。科目相性、日程、学費、面接小論文、補欠繰り上がりまで含めて候補校を整理します。",
  },
  {
    title: "大手予備校に通わせているのに、日々の実行が見えない",
    body: "授業を受けているだけで進んでいるように見えても、自習量・復習日・弱点補強が曖昧なままでは伸びません。",
  },
  {
    title: "費用をかけるなら、何に効いているか知りたい",
    body: "私立医学部受験は大きな教育投資です。Medvanceは、保護者が判断できるように進捗と次の方針を共有します。",
  },
];

const supportItems = [
  {
    title: "月次保護者面談",
    body: "成績、学習量、科目別課題、受験校方針を定期的に確認し、家庭の意思決定に必要な情報を整理します。",
  },
  {
    title: "週次学習計画",
    body: "授業で扱う内容、自習範囲、復習日、次回までの確認事項を具体化し、曖昧な努力を減らします。",
  },
  {
    title: "受験校ポートフォリオ",
    body: "本命校・勝負校・現実校を分け、複数校受験の戦略を家庭と共有できる形にします。",
  },
  {
    title: "面接・小論文まで一体管理",
    body: "私立医学部では学科だけでなく人物評価も重要です。志望理由や医師像の言語化も早めに進めます。",
  },
];

const fitItems = [
  "私立医学部を本命または併願として複数校受験する予定がある",
  "保護者が初回診断や月次面談に参加できる",
  "大手予備校だけでは学習管理が足りないと感じている",
  "志望校へのこだわりと合格可能性のバランスを見直せる",
  "年間の指導投資を、合格可能性への投資として判断できる",
];

const faqItems = [
  {
    q: "保護者だけで相談できますか？",
    a: "可能です。ただし、最終的な学習計画には本人の学習時間と意思も関わるため、初回または2回目以降で本人同席の場を作ることをおすすめします。",
  },
  {
    q: "大手予備校と併用できますか？",
    a: "できます。大手予備校の授業を活かしながら、個別に弱点補強・進捗管理・出願戦略を行う形は、Medvanceと相性がよい使い方です。",
  },
  {
    q: "子どもがまだ本気になりきれていません",
    a: "まずは学習時間、科目別の穴、志望校との距離を可視化します。本人の気合だけに頼らず、毎週の実行単位まで落とし込むことで動きやすくします。",
  },
  {
    q: "医学部受験にどのくらい費用をかけるべきか迷います",
    a: "私立医学部は進学後の学費も大きいため、受験期の指導費も家庭の投資判断になります。診断では、どの科目・どの期間に投資すべきかを整理します。",
  },
];

export default function ParentsPage() {
  return (
    <>
      <ForPageSchemas slug="parents" />
      <div className="min-h-screen bg-white">
        <section style={{ backgroundColor: "#0c1a33" }} className="px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              For Parents
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-snug text-white md:text-4xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              私立医学部合格は、保護者の戦略判断でも決まります。
            </h1>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.66)" }}>
              学費、受験校、浪人可否、指導体制。私立医学部受験では、家庭として決めることが多くあります。Medvanceは、保護者が判断できる材料を見える形で共有します。
            </p>
          </div>
        </section>

        <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>Parent Concerns</p>
              <h2 className="text-2xl font-bold md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                保護者の方からよく聞かれる不安
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {parentConcerns.map((item) => (
                <div key={item.title} className="rounded-lg bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
                  <p className="mb-3 text-base font-bold" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                Visibility
              </p>
              <h2 className="mb-4 text-2xl font-bold leading-snug md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                お子さまの努力を、家庭の判断材料に変える。
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                「頑張っています」では判断できません。どの科目で何点足りないのか、どの大学なら相性が良いのか、次の1週間で何をやるのか。Medvanceはそこまで保護者に共有します。
              </p>
              
              {/* Embedding realistic Japanese parent consultation photo */}
              <div className="mt-8 relative overflow-hidden rounded-[20px] md:rounded-[24px] shadow-[0_15px_40px_rgba(12,26,51,0.1)] border border-white/40 ring-1 ring-[#c9922a]/10 group">
                <div className="absolute inset-0 bg-amber-100/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500 z-10" />
                <img 
                  src="/images/generated/japanese_parents_anxious_smiling.png" 
                  alt="面談で保護者に学習計画と進捗レポートを説明する日本人のプロ講師" 
                  className="w-full h-auto object-cover max-h-[300px] transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {supportItems.map((item) => (
                <div key={item.title} className="rounded-lg p-5" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <p className="mb-2 text-sm font-bold" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" style={{ backgroundColor: "#0c1a33" }}>
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                Good Fit
              </p>
              <h2 className="text-2xl font-bold leading-snug text-white md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
                Medvanceと相性がよいご家庭
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {fitItems.map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-lg p-5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  <span className="mt-0.5 text-sm font-bold" style={{ color: "#c9922a" }}>{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.76)" }}>{item}</p>
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
              {faqItems.map((item) => (
                <div key={item.q} className="rounded-lg p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <p className="mb-2 text-sm font-bold" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>A. {item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20" style={{ backgroundColor: "#0c1a33" }}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              Diagnosis
            </p>
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              まずは保護者同席で、合格戦略を診断します。
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.66)" }}>
              現状の模試結果・志望校・学習時間をもとに、家庭としてどこに投資すべきかを整理します。
            </p>
            <Link
              href="/contact?from=parents-page"
              className="inline-flex items-center justify-center rounded-lg px-9 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#c9922a" }}
            >
              合格戦略診断を申し込む
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
