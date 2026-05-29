import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { LINE_URL } from "@/lib/links";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "代表メッセージ｜私立医学部合格戦略にこだわる理由",
  description:
    "Medvance代表が、医学部受験で必要な受験校選定・学習管理・保護者共有への考え方と、慶應医学部生代表直下で私立医学部合格を支える理由を語ります。",
  alternates: {
    canonical: "/about/founder",
  },
};

const founderBreadcrumb = buildBreadcrumbSchema([
  { name: "ホーム", url: "/" },
  { name: "Medvanceについて", url: "/about" },
  { name: "代表メッセージ", url: "/about/founder" },
]);

const turningPoints = [
  {
    title: "「才能」ではなく「順序」で詰むと気づいた日",
    body: "高2の夏、英語長文を10時間解いても伸びなかった。原因は文法と語彙が中学レベルで止まっていたこと。順序を間違えると、努力が結果に変換されないと痛感した。",
  },
  {
    title: "1日18時間の勉強で、心が壊れかけた高3夏",
    body: "夏期講習の途中、模試の判定が逆戻りして眠れなくなった。母と話して『量より、次の1週間で何を直すか』に切り替えた瞬間、再び成績が動き始めた。",
  },
  {
    title: "本番直前、慶應医学部の数学で手が震えた",
    body: "1問目で計算ミス。震えで字が書けない瞬間に、過去問を毎日同じ順で解いた『手続き記憶』が体を動かしてくれた。準備が人格を救う、と確信した。",
  },
];

const beliefItems = [
  {
    title: "授業ではなく、合格までの『正しい一手』を売る",
    body: "授業時間で点が伸びるのではなく、次の1週間で何をやるかが伸びを決める。Medvanceは毎週、扱う問題と自習範囲、復習日まで設計します。",
  },
  {
    title: "現役慶應医学部生のみが指導する",
    body: "受験を直近で経験した者にしか分からない『迷い方・心の折れ方・直前期の体感』があります。数の多さではなく、代表の目で品質保証された講師だけを揃えます。",
  },
  {
    title: "親を顧客にする",
    body: "受験は家族の総力戦。学費、メンタル、家庭内の関係まで含めて、保護者にも進捗と次の方針を共有します。親が不安を抱えたまま進む構造を断ち切ります。",
  },
  {
    title: "合わないご家庭にはMedvanceを勧めない",
    body: "初回診断で『他塾のほうが合う』と判断したら、その場で他塾も提案します。塾選びを誤らせないことが、最も大切な誠実さだと考えています。",
  },
];

const passedSchools = [
  "慶應義塾大学医学部",
  "国立医学部",
  "防衛医科大学校",
  "東京慈恵会医科大学",
  "順天堂大学医学部",
  "日本医科大学",
];

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderBreadcrumb) }}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#0c1a33" }} className="px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold tracking-widest uppercase" style={{ color: "#c9922a" }}>
            Founder Message
          </p>
          <h1
            className="mb-6 text-3xl font-bold leading-snug text-white md:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            医学部受験を、努力論ではなく戦略として設計したい。
            <br />
            それがMedvanceを作った理由です。
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            Medvance代表 医学部受験コーチ（慶應義塾大学医学部）が、自身の受験体験をもとに、なぜ受験校選定・週次管理・保護者共有まで見る塾にしたのかをお伝えします。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "原点", value: "順序と戦略" },
              { label: "現在", value: "慶應医学部在籍" },
              { label: "方針", value: "私立医学部合格に集中" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-md p-4"
                style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,146,42,0.3)" }}
              >
                <p className="text-[11px] font-semibold tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal note */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <Image
              src="/images/founder.webp"
              alt="Medvance代表"
              width={128}
              height={128}
              className="h-32 w-32 shrink-0 rounded-full object-cover"
              style={{ border: "1px solid #e5e1d8", objectPosition: "50% 20%" }}
            />
            <div>
              <p className="text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
                Medvance代表
              </p>
              <p className="mt-1 text-base font-bold" style={{ color: "#0c1a33" }}>
                医学部受験コーチ
              </p>
              <p className="text-xs" style={{ color: "#6b7280" }}>
                慶應義塾大学医学部 在籍
              </p>
            </div>
          </div>
          <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
            Personal
          </p>
          <h2
            className="mb-6 text-2xl font-bold leading-snug md:text-3xl"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            「才能で受かった」と言われたくない。
          </h2>
          <div className="space-y-5 text-sm leading-relaxed md:text-base" style={{ color: "#3d3d3d" }}>
            <p>
              はじめまして、Medvance代表の医学部受験コーチです。慶應義塾大学医学部に在籍しています。
            </p>
            <p>
              医学部に合格すると、必ず聞かれる質問があります。「もともと頭が良かったんでしょう？」 ──
              この一言を聞くたびに、ずっと違和感を抱えていました。
              なぜなら高2の春、私の偏差値は40。志望校どころか、医学部を口にすることすら恥ずかしかったからです。
            </p>
            <p>
              そこから2年弱、私が手にしたものは「才能」ではなく「<strong>正しい順序</strong>」と「<strong>毎週の設計</strong>」でした。
              何をいつ、どの順番で解くか。次の1週間で、どこを必ず直すか。これを設計し続けた結果、慶應医学部を含む受験校すべてに合格できました。
            </p>
            <p>
              Medvanceは、当時の私が喉から手が出るほど欲しかった「<strong>合格まで一緒に設計してくれる現役医学部生</strong>」を、
              いまの受験生に届けるためにつくりました。
            </p>
          </div>
        </div>
      </section>

      {/* 全勝合格 */}
      <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
            Track Record
          </p>
          <h2
            className="mb-6 text-2xl font-bold leading-snug md:text-3xl"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            先取り教育を捨て、医学部合格へ一直線。
          </h2>
          <p className="mb-8 text-sm leading-relaxed md:text-base" style={{ color: "#3d3d3d" }}>
            代表は、学年を超えて先へ進む“先取り型”の学習方針をあえて手放しました。医学部合格だけを見据え、合格に直結する範囲を最短距離で固める勉強法へ切り替えた結果、受験したすべての医学部に<strong style={{ color: "#0c1a33" }}>全勝で合格</strong>しています。
          </p>

          <div className="rounded-xl bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
            <p className="mb-4 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              受験校（全勝）
            </p>
            <ul className="grid gap-2.5 text-sm sm:grid-cols-2">
              {passedSchools.map((school) => (
                <li key={school} className="flex items-center gap-2" style={{ color: "#0c1a33" }}>
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "#c9922a" }}
                  />
                  <span className="font-semibold">{school}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Turning points */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
            Turning Points
          </p>
          <h2
            className="mb-8 text-2xl font-bold leading-snug md:text-3xl"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            心が折れた瞬間と、立ち直った日
          </h2>
          <div className="space-y-5">
            {turningPoints.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-xl p-6"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                  Episode {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 text-base font-bold" style={{ color: "#0c1a33" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="px-4 py-16" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
            Beliefs
          </p>
          <h2
            className="mb-8 text-2xl font-bold leading-snug text-white md:text-3xl"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            Medvanceで守る、4つの約束
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {beliefItems.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-xl p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,146,42,0.25)" }}
              >
                <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
                  Promise {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-2 text-base font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl p-8" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
          <h2 className="mb-4 text-xl font-bold leading-snug md:text-2xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            合格戦略診断で、ご家庭に合う『正しい順序』を一緒に作ります。
          </h2>
          <p className="mb-6 text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
            模試結果、志望校、残り期間、家庭の事情を見て、次の3ヶ月で何をどの順番で解くべきかを30分でお伝えします。
            Medvanceが合わないご家庭にはその場で他塾も提案します。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: "#06C755" }}
            >
              LINEで相談
            </a>
            <Link
              href="/contact?from=founder-cta"
              className="inline-flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: "#c9922a" }}
            >
              合格戦略診断を申し込む
            </Link>
          </div>
        </div>
      </section>

      {/* Pen name disclosure */}
      <section className="bg-white px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
            ※「医学部受験コーチ」はペンネームです。本名は
            <Link href="/tokushoho" className="underline" style={{ color: "#6b7280" }}>
              特定商取引法に基づく表示
            </Link>
            にて、ご請求いただいた方に開示いたします。
          </p>
        </div>
      </section>
    </div>
  );
}
