import { headers } from "next/headers";
import { buildServiceSchema, buildBreadcrumbSchema, siteUrl } from "@/lib/seo";

// Mapping from slug → service metadata for schema injection
const forPageMeta: Record<
  string,
  { name: string; description: string; serviceType: string; label: string }
> = {
  chugaku: {
    name: "中学生向け医学部受験個別指導",
    description: "中学生から始める医学部受験対策。現役慶應医学部生が完全1対1でサポート。",
    serviceType: "医学部受験個別指導",
    label: "中学生の方へ",
  },
  ko1: {
    name: "高校1年生向け医学部受験個別指導",
    description: "高1から始める医学部受験の早期対策。現役慶應医学部生が完全1対1で指導。",
    serviceType: "医学部受験個別指導",
    label: "高校1年生の方へ",
  },
  ko2: {
    name: "高校2年生向け医学部受験個別指導",
    description: "高2からの医学部受験対策。部活との両立・高3準備を現役慶應医学部生がサポート。",
    serviceType: "医学部受験個別指導",
    label: "高校2年生の方へ",
  },
  ko3: {
    name: "高校3年生向け医学部受験個別指導",
    description: "現役合格を目指す高3向け医学部受験対策。現役慶應医学部生が完全1対1で指導。",
    serviceType: "医学部受験個別指導",
    label: "高校3年生の方へ",
  },
  ronin: {
    name: "浪人生向け医学部受験個別指導",
    description: "浪人生専用の医学部受験対策。失敗分析から合格戦略まで現役慶應医学部生がサポート。",
    serviceType: "医学部受験個別指導",
    label: "浪人生の方へ",
  },
  saijuken: {
    name: "再受験生向け医学部受験個別指導",
    description: "社会人・大学生からの医学部再受験対策。現役慶應医学部生が完全1対1で指導。",
    serviceType: "医学部受験個別指導",
    label: "再受験生の方へ",
  },
  parents: {
    name: "保護者向け医学部受験サポート情報",
    description: "お子様の医学部受験を支える保護者の方へ。定期報告・保護者面談・料金情報を提供。",
    serviceType: "医学部受験保護者サポート",
    label: "保護者の方へ",
  },
  "keio-naibu": {
    name: "慶應内部進学対策（医学部）個別指導",
    description: "慶應附属校から医学部への内部進学対策。評定管理・選考準備を現役慶應医学部生がサポート。",
    serviceType: "慶應内部進学対策",
    label: "慶應内部進学を目指す方へ",
  },
  "keio-fuzoku": {
    name: "慶應附属校生向け成績向上・定期テスト対策",
    description: "慶應附属校（義塾高校・女子高・志木・SFC・普通部・中等部）の定期テスト対策・評定向上。",
    serviceType: "定期テスト対策・成績向上",
    label: "慶應附属校生の方へ",
  },
  "seiseki-up": {
    name: "学校の成績向上・定期テスト対策個別指導",
    description: "定期テスト対策・内申点向上・推薦入試準備を現役慶應医学部生が完全1対1でサポート。",
    serviceType: "定期テスト対策・成績向上",
    label: "学校の成績を上げたい方へ",
  },
  nangandai: {
    name: "難関大受験（東大・京大・早慶）個別指導",
    description: "東大・京大・早慶・難関国公立を目指す受験生向け完全1対1家庭教師。現役慶應医学部生が指導。",
    serviceType: "難関大受験個別指導",
    label: "難関大受験を目指す方へ",
  },
  "suisen-ao": {
    name: "推薦・AO入試対策（志望理由書・面接・小論文）",
    description: "推薦・総合型選抜（AO）入試の志望理由書・面接・小論文対策。現役慶應医学部生が完全1対1で指導。",
    serviceType: "推薦・AO入試対策",
    label: "推薦・AO入試を目指す方へ",
  },
};

export default async function ForLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const slug = pathname.replace(/^\/for\//, "").split("/")[0];
  const meta = forPageMeta[slug];

  const schemas: object[] = [];
  if (meta && slug) {
    const path = `/for/${slug}`;
    schemas.push(buildServiceSchema(meta.name, meta.description, path, meta.serviceType));
    schemas.push(
      buildBreadcrumbSchema([
        { name: "ホーム", url: "/" },
        { name: meta.label, url: path },
      ])
    );
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  );
}
