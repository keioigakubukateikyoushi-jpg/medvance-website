import Link from "next/link";
import { buildBreadcrumbSchema, buildItemListSchema, buildSpeakableSchema } from "@/lib/seo";

export const metadata = {
  title: "対象者から探す｜医学部受験の個別指導 Medvance",
  description:
    "学年・受験段階・お悩み別に、Medvanceの医学部受験サポートの入口をまとめました。高校生・浪人生・再受験生・予備校併用・集団塾不適合・保護者まで、状況に近いページからご確認ください。",
  alternates: {
    canonical: "/for",
  },
};

type AudienceCard = { title: string; body: string; href: string };

const stageCards: AudienceCard[] = [
  {
    title: "中学生の方",
    body: "医学部受験を視野に、英語と数学の土台を中学のうちから丁寧に固めます。",
    href: "/for/chugaku?from=for-hub",
  },
  {
    title: "高校1年生の方",
    body: "科目数の多い医学部受験に向け、早い段階で学習の型をつくります。",
    href: "/for/ko1?from=for-hub",
  },
  {
    title: "高校2年生の方",
    body: "部活と両立しながら、高3で仕上げに入れる学力を積み上げます。",
    href: "/for/ko2?from=for-hub",
  },
  {
    title: "高校3年生の方",
    body: "残り期間から逆算し、現役合格に必要な実行量を週単位で設計します。",
    href: "/for/ko3?from=for-hub",
  },
  {
    title: "医学部浪人生の方",
    body: "前年の結果を分析し、同じ失敗を繰り返さない学習計画と志望校戦略を組み直します。",
    href: "/for/ronin?from=for-hub",
  },
  {
    title: "再受験生の方",
    body: "大学生・社会人からの挑戦を、受験校選びから学習設計まで一貫してサポートします。",
    href: "/for/saijuken?from=for-hub",
  },
];

const situationCards: AudienceCard[] = [
  {
    title: "大手予備校と併用したい方",
    body: "予備校授業を活かしながら、復習管理・質問対応・出願戦略をMedvanceで補います。",
    href: "/for/prep-school-plus?from=for-hub",
  },
  {
    title: "集団塾が合わない方",
    body: "授業ペースや質問環境が合わない受験生に、1対1指導と週次管理を設計します。",
    href: "/for/not-group-school?from=for-hub",
  },
  {
    title: "医学部受験の家庭教師を探す方",
    body: "現役医学部生の1対1指導、オンライン家庭教師、訪問指導、保護者共有を比較しながら検討できます。",
    href: "/igakubu-kateikyoushi?from=for-hub",
  },
  {
    title: "私立医学部受験戦略",
    body: "大学別の科目相性、出願日程、学費、面接小論文まで含めて受験校を設計します。",
    href: "/private-medical-strategy?from=for-hub",
  },
  {
    title: "学校の成績を上げたい方",
    body: "定期テスト対策と内申点向上を、医学部受験を見据えた学習設計の中で進めます。",
    href: "/for/seiseki-up?from=for-hub",
  },
  {
    title: "附属校・内部生の方",
    body: "宿題・課題・レポートの伴走から教科別ピンポイント対策まで。成績向上・留年回避・進級を完全1対1で支えます。",
    href: "/for/naibu-seiseki?from=for-hub",
  },
  {
    title: "難関大受験を目指す方",
    body: "東大・京大・早慶・難関国公立に向けて、志望校特化の個別対策を行います。",
    href: "/for/nangandai?from=for-hub",
  },
  {
    title: "推薦・AO入試を目指す方",
    body: "志望理由書、面接、小論文を、一般入試対策と並行して設計します。",
    href: "/for/suisen-ao?from=for-hub",
  },
];

const keioCards: AudienceCard[] = [
  {
    title: "慶應内部進学を目指す方",
    body: "慶應附属校から医学部・難関学部への内部進学に向けた評定対策を行います。",
    href: "/for/keio-naibu?from=for-hub",
  },
  {
    title: "内部進学＆外部受験 併願の方",
    body: "系列校内の推薦枠確保と、万が一に備えた国公立・私立医学部一般受験のダブル対策を両立させます。",
    href: "/for/keio-naibu-heigan?from=for-hub",
  },
  {
    title: "慶應附属校生の方",
    body: "義塾高校・女子高・志木・SFC・普通部・中等部の定期テスト対策と評定向上に対応します。",
    href: "/for/keio-fuzoku?from=for-hub",
  },
];

const allAudiences = [...stageCards, ...situationCards, ...keioCards];

const schemas = [
  buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "対象者から探す", url: "/for" },
  ]),
  buildItemListSchema(
    "Medvanceの対象者別サポート",
    "/for",
    allAudiences.map((item) => ({ name: item.title, url: item.href.split("?")[0] })),
  ),
  buildSpeakableSchema("/for"),
];

function AudienceGrid({ cards }: { cards: AudienceCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex h-full flex-col rounded-lg p-6 transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
        >
          <p className="mb-3 text-base font-bold" style={{ color: "#0c1a33" }}>{item.title}</p>
          <p className="mb-5 flex-1 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{item.body}</p>
          <span className="text-xs font-bold" style={{ color: "#c9922a" }}>詳しく見る →</span>
        </Link>
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>{eyebrow}</p>
      <h2
        className="text-2xl font-bold leading-snug md:text-3xl"
        style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
      >
        {title}
      </h2>
      {body && (
        <p className="mt-4 text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>{body}</p>
      )}
    </div>
  );
}

export default function ForHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

      <section className="px-4 py-20 md:py-24" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>
            対象者から探す
          </p>
          <h1
            className="mb-5 max-w-3xl text-3xl font-bold leading-snug text-white md:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            ご家庭の状況に近い入口から、医学部受験の進め方を確認できます。
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed md:text-base" style={{ color: "rgba(255,255,255,0.72)" }}>
            学年・受験段階、今お困りの状況によって、必要な指導と戦略は変わります。近いページを選んでいただくと、Medvanceがそのケースで何を担うかを具体的にご確認いただけます。
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="学年・受験段階から探す"
            title="今の学年・受験段階に合わせて選ぶ"
            body="中学生から再受験生まで、それぞれの段階で優先すべき学習と戦略は異なります。"
          />
          <AudienceGrid cards={stageCards} />
        </div>
      </section>

      <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="状況・志望から探す"
            title="今の状況や志望に合わせて選ぶ"
            body="予備校併用、集団塾が合わない、私立医学部志望など、ケースごとの設計をご確認いただけます。"
          />
          <AudienceGrid cards={situationCards} />
        </div>
      </section>

      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="慶應内部進学・附属校"
            title="慶應に関するご相談"
            body="慶應附属校からの内部進学、附属校の定期テスト対策に対応しています。"
          />
          <AudienceGrid cards={keioCards} />
        </div>
      </section>

      <section className="px-4 py-16" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>保護者の方へ</p>
            <h2
              className="mb-4 text-2xl font-bold leading-snug text-white md:text-3xl"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              保護者にも、受験判断に必要な情報を共有します。
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.66)" }}>
              医学部受験は、学費・受験校・追加指導など、ご家庭の判断が多い受験です。Medvanceは、その判断材料を保護者にも届く形で整理します。
            </p>
          </div>
          <div className="flex lg:justify-end">
            <Link
              href="/for/parents?from=for-hub"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#c9922a" }}
            >
              保護者の方へのページを見る
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="mb-4 text-2xl font-bold leading-snug md:text-3xl"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            どの入口か迷う場合も、まず一度ご相談ください。
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
            学年、模試結果、現在の塾・予備校をうかがい、合格戦略診断で必要な指導体制を整理します。
          </p>
          <Link
            href="/contact?from=for-hub-final"
            className="inline-flex items-center justify-center rounded-lg px-9 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#c9922a" }}
          >
            合格戦略診断を申し込む
          </Link>
        </div>
      </section>
    </div>
  );
}
