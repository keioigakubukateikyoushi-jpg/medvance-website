import Link from "next/link";
import type { Metadata } from "next";
import { LINE_URL } from "@/lib/links";
import { buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "代表メッセージ｜偏差値40から慶應医学部に全勝した代表が、Medvanceを作った理由",
  description:
    "Medvance代表 医学部受験コーチが、偏差値40から慶應医学部含む受験校全勝までに辿り着いた道のりと、現役慶應医学部生のみで医学部受験塾を立ち上げた理由を語ります。",
  alternates: {
    canonical: "/about/founder",
  },
};

const founderBreadcrumb = buildBreadcrumbSchema([
  { name: "ホーム", url: "/" },
  { name: "Medvanceについて", url: "/about" },
  { name: "代表メッセージ", url: "/about/founder" },
]);

const moshiTimeline = [
  { stage: "高2 春", hensachi: "40", note: "英数の基礎が抜けたまま、模試は判定E。志望校どころではなかった。" },
  { stage: "高2 夏", hensachi: "47", note: "中学範囲まで戻して、英文法と数IAを基礎から組み直した。" },
  { stage: "高2 冬", hensachi: "55", note: "数IIBが追いつき、英語長文が読めるようになった。" },
  { stage: "高3 春", hensachi: "60", note: "理科を本格化。化学・物理を並行で進めた。" },
  { stage: "高3 夏", hensachi: "65", note: "夏に過去問へ着手。記述で落としていた癖を直した。" },
  { stage: "高3 秋", hensachi: "68", note: "慶應医・慈恵・順天堂の傾向別に、解く順を固定。" },
  { stage: "高3 直前期", hensachi: "70", note: "毎日同じ順序で過去問を回し、本番の心拍を下げた。" },
  { stage: "本番", hensachi: "全勝", note: "慶應医学部・東京医科歯科大・慈恵医大・順天堂・日本医大に合格。" },
];

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
    body: "無料相談で『他塾のほうが合う』と判断したら、その場で他塾を提案します。塾選びを誤らせないことが、最も大切な誠実さだと考えています。",
  },
];

const passedSchools = [
  "慶應義塾大学医学部",
  "東京医科歯科大学医学部",
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
            偏差値40から慶應医学部に全勝した、ひとりの受験生が、
            <br />
            Medvanceを作った理由。
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            Medvance代表 医学部受験コーチ（慶應義塾大学医学部）が、自身の受験体験と、現役慶應医学部生だけで医学部受験塾を立ち上げた背景を、
            包み隠さずお伝えします。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "受験当時の最低偏差値", value: "40" },
              { label: "本番での偏差値", value: "70" },
              { label: "受験校", value: "慶應医を含む全勝" },
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

      {/* 模試推移 */}
      <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
            Track Record
          </p>
          <h2
            className="mb-8 text-2xl font-bold leading-snug md:text-3xl"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            偏差値40 → 70の模試推移
          </h2>
          <div className="overflow-hidden rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full text-sm">
              <thead style={{ backgroundColor: "#0c1a33", color: "#fff" }}>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold tracking-widest">時期</th>
                  <th className="px-4 py-3 text-left text-xs font-bold tracking-widest">偏差値</th>
                  <th className="px-4 py-3 text-left text-xs font-bold tracking-widest">そのとき直したこと</th>
                </tr>
              </thead>
              <tbody>
                {moshiTimeline.map((row, idx) => (
                  <tr
                    key={row.stage}
                    style={{
                      backgroundColor: idx % 2 === 0 ? "#ffffff" : "#faf9f6",
                      borderTop: "1px solid #e5e1d8",
                    }}
                  >
                    <td className="px-4 py-3 font-semibold" style={{ color: "#0c1a33" }}>
                      {row.stage}
                    </td>
                    <td className="px-4 py-3 font-bold" style={{ color: "#c9922a" }}>
                      {row.hensachi}
                    </td>
                    <td className="px-4 py-3 leading-relaxed" style={{ color: "#3d3d3d" }}>
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs leading-relaxed" style={{ color: "#6b7280" }}>
            ※ 偏差値は記述模試（駿台・河合）を基準にした自己申告値です。模試の解き直しと使用教材は、
            希望者には無料相談で具体的にお見せします。
          </p>

          <div className="mt-8 rounded-xl bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
              受験校（全勝）
            </p>
            <ul className="grid gap-2 text-sm sm:grid-cols-2">
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
            無料相談で、あなたの『正しい順序』を一緒に作ります。
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
              LINEで30秒・無料相談
            </a>
            <Link
              href="/contact?from=founder-cta"
              className="inline-flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
              style={{ backgroundColor: "#c9922a" }}
            >
              フォームで無料戦略相談
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
