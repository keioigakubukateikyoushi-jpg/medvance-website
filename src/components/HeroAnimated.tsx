import Link from "next/link";
import Image from "next/image";
import { LINE_URL } from "@/lib/links";

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

function anim(duration: number, delay: number, name = "fadeUpIn"): React.CSSProperties {
  return {
    animation: `${name} ${duration}s ${ease} ${delay}s both`,
  };
}

const heroProofItems = [
  { label: "対象", value: "国公立・私立医学部志望" },
  { label: "指導", value: "1対1個別指導 + 週次学習管理" },
  { label: "戦略", value: "共通テスト・二次・出願・面接小論文" },
];

const heroPersonas = [
  {
    label: "国公立医学部を目指す方へ",
    desc: "共通テスト・二次試験・面接まで、科目別に学習計画を組みます",
    href: "/universities/national?from=hero-persona",
  },
  {
    label: "私立医学部を目指す方へ",
    desc: "大学別の科目相性、出願日程、面接小論文まで設計します",
    href: "/private-medical-strategy?from=hero-persona",
  },
  {
    label: "大手予備校と併用したいご家庭へ",
    desc: "授業後の復習管理、質問対応、志望校別対策を補完します",
    href: "/for/prep-school-plus?from=hero-persona",
  },
  {
    label: "集団塾が合わない医学部志望生へ",
    desc: "1対1指導と週次管理で、本人に合う受験体制を作ります",
    href: "/for/not-group-school?from=hero-persona",
  },
];

function LineIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M18 3C9.716 3 3 8.476 3 15.224c0 6.03 5.327 11.08 12.525 12.03.487.104 1.15.32 1.318.735.15.377.098.967.049 1.347l-.212 1.276c-.065.377-.302 1.478 1.294.805 1.596-.673 8.618-5.076 11.76-8.691C31.95 20.267 33 17.87 33 15.224 33 8.476 26.284 3 18 3zm-6.18 14.36h-3.4c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484.266 0 .483.217.483.484v5.005h2.916c.266 0 .483.216.483.484 0 .267-.217.485-.483.485zm1.935-.484c0 .267-.217.485-.484.485-.267 0-.484-.218-.484-.485v-5.49c0-.267.217-.484.484-.484.267 0 .484.217.484.484v5.49zm6.35 0c0 .208-.133.393-.33.46-.05.015-.102.023-.154.023-.155 0-.3-.07-.393-.191l-2.82-3.86v3.568c0 .267-.217.485-.484.485-.266 0-.482-.218-.482-.485v-5.49c0-.207.132-.392.33-.459.05-.017.103-.024.153-.024.15 0 .297.07.39.192l2.826 3.86v-3.569c0-.267.216-.484.483-.484.267 0 .484.217.484.484v5.49zm3.922-3.228c.267 0 .484.218.484.485 0 .267-.217.485-.484.485h-1.938v.76h1.938c.266 0 .484.217.484.484s-.217.484-.484.484h-2.42c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484h2.42c.266 0 .483.217.483.484 0 .268-.217.485-.484.485h-1.938v.76h1.938z"
      />
    </svg>
  );
}

function HeroText() {
  return (
    <>
      {/* Authority bar — founder credibility upfront */}
      <Link
        href="/about/founder?from=hero-authority"
        className="mb-5 hidden w-full max-w-md items-center gap-3 rounded-md px-3 py-2 transition-colors hover:opacity-95 sm:inline-flex"
        style={{
          backgroundColor: "rgba(201,146,42,0.12)",
          border: "1px solid rgba(201,146,42,0.4)",
          ...anim(0.55, 0, "fadeSlideDown"),
        }}
      >
        <span
          className="rounded-sm px-2 py-0.5 text-[10px] font-bold tracking-widest"
          style={{ backgroundColor: "#c9922a", color: "#0c1a33" }}
        >
          医学部 合格戦略診断
        </span>
        <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.85)" }}>
          国公立・私立に対応する個別戦略
        </span>
        <span aria-hidden="true" className="ml-auto text-xs" style={{ color: "#c9922a" }}>
          →
        </span>
      </Link>

      {/* Gold line */}
      <div
        className="mb-4 h-0.5 w-12 sm:mb-5"
        style={{ backgroundColor: "#c9922a", transformOrigin: "left", ...anim(0.5, 0.05, "scaleInX") }}
      />

      {/* Micro copy */}
      <div
        className="mb-4 inline-flex w-fit items-center gap-2 rounded-md px-3 py-1.5 text-xs tracking-widest sm:mb-5"
        style={{
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "rgba(255,255,255,0.66)",
          ...anim(0.5, 0.1, "fadeSlideDown"),
        }}
      >
        医学部受験専門 / 1対1伴走
      </div>

      {/* Catch copy */}
      <p
        className="mb-4 font-bold leading-snug sm:mb-5"
        style={{
          fontFamily: "var(--font-noto-serif)",
          fontSize: "clamp(1.15rem, 2.7vw, 1.75rem)",
          color: "#c9922a",
          maxWidth: "calc(100vw - 40px)",
          ...anim(0.6, 0.16),
        }}
      >
        <span className="block">医学部合格に、</span>
        <span className="block">才能は関係ない。</span>
      </p>

      {/* Headline — single sentence, two lines on mobile */}
      <h1
        className="mb-3 font-bold leading-snug sm:mb-4"
        style={{
          fontFamily: "var(--font-noto-serif)",
          fontSize: "clamp(1.62rem, 4.1vw, 3.05rem)",
          color: "#ffffff",
          maxWidth: "calc(100vw - 40px)",
          ...anim(0.65, 0.2),
        }}
      >
        <span className="block">医学部受験塾 Medvance｜</span>
        <span className="block">完全1対1個別指導と</span>
        <span className="block">合格戦略</span>
      </h1>

      {/* Sub copy */}
      <p
        className="mb-4 font-semibold sm:mb-5"
        style={{
          color: "#c9922a",
          fontFamily: "var(--font-noto-serif)",
          fontSize: "clamp(0.95rem, 1.8vw, 1.25rem)",
          lineHeight: 1.7,
          maxWidth: "calc(100vw - 40px)",
          overflowWrap: "anywhere",
          ...anim(0.65, 0.28),
        }}
      >
        国公立・私立医学部を目指す受験生へ。<br className="sm:hidden" />
        予備校併用・1対1指導・志望校別戦略まで一緒に進めます。
      </p>

      {/* Description */}
      <p
        className="mb-7 hidden leading-relaxed sm:block"
        style={{
          color: "rgba(255,255,255,0.62)",
          maxWidth: "calc(100vw - 40px)",
          fontSize: "clamp(0.85rem, 1.35vw, 0.95rem)",
          overflowWrap: "anywhere",
          ...anim(0.65, 0.36),
        }}
      >
        集団塾が合わない方、予備校に通っていても復習・質問・志望校別対策が不安なご家庭へ。共通テスト、二次試験、私立医学部の大学別対策まで、毎週の実行に落とし込みます。
      </p>

      {/* CTAs */}
      <div
        className="flex w-full max-w-md flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row"
        style={anim(0.65, 0.44)}
      >
        <Link
          href="/contact?from=hero-primary"
          className="inline-flex w-full items-center justify-center rounded-lg px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90 sm:w-auto"
          style={{ backgroundColor: "#c9922a" }}
        >
          合格戦略診断を申し込む
        </Link>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-center text-sm font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
          style={{ backgroundColor: "#06C755" }}
        >
          <LineIcon />
          LINEで相談する
        </a>
      </div>
      <p
        className="mt-3 text-xs"
        style={{ color: "rgba(255,255,255,0.48)", ...anim(0.65, 0.48) }}
      >
        保護者同席推奨 / 全国オンライン対応 / 国公立・私立医学部に対応
      </p>

    </>
  );
}

function HeroPersonas() {
  return (
    <section
      className="relative px-4 pt-10 pb-12"
      style={{ backgroundColor: "#0c1a33", borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="mx-auto max-w-6xl">
        <dl className="mb-8 grid gap-3 sm:grid-cols-3">
          {heroProofItems.map((item) => (
            <div
              key={item.label}
              className="rounded-lg px-4 py-3"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <dt className="text-[10px] font-semibold tracking-widest" style={{ color: "rgba(255,255,255,0.42)" }}>
                {item.label}
              </dt>
              <dd className="mt-1 text-sm font-bold leading-snug text-white">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mb-4 text-xs font-semibold tracking-widest" style={{ color: "#c9922a" }}>
          ご家庭の状況に近い入口から
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {heroPersonas.map((persona) => (
            <Link
              key={persona.href}
              href={persona.href}
              className="group flex h-full flex-col rounded-lg p-5 transition-colors hover:bg-white/5"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <p className="mb-2 text-sm font-bold text-white">{persona.label}</p>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {persona.desc}
              </p>
              <span
                className="mt-auto pt-3 text-xs font-bold transition-colors"
                style={{ color: "#c9922a" }}
              >
                詳しく見る →
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
          当てはまる入口がない場合は{" "}
          <Link href="/for?from=hero-personas" className="font-bold underline-offset-2 hover:underline" style={{ color: "#c9922a" }}>
            対象者ページ一覧
          </Link>
          {" "}からお探しください。
        </p>
      </div>
    </section>
  );
}

export default function HeroAnimated() {
  return (
    <section style={{ backgroundColor: "#0c1a33" }}>

      {/* ── Desktop: full image background ── */}
      <div className="hidden md:block relative" style={{ minHeight: "70svh" }}>
        <Image
          src="/images/hero-teaching.webp"
          alt="日本の医学部受験に向けて1対1で答案を確認する講師と受験生"
          fill
          sizes="(min-width: 768px) 100vw, 0px"
          className="object-cover object-[64%_center]"
          priority
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(90deg, rgba(12,26,51,0.95) 0%, rgba(12,26,51,0.75) 30%, rgba(12,26,51,0.2) 60%, rgba(12,26,51,0) 100%)" }}
        />
        <div className="relative z-10 flex min-h-[70svh] flex-col justify-center px-12 py-10 lg:px-16 xl:px-20">
          <div className="max-w-2xl">
            <HeroText />
          </div>
        </div>
      </div>

      {/* Mobile: keep tutor and student visible above the copy. */}
      <div className="md:hidden relative overflow-hidden" style={{ backgroundColor: "#0c1a33" }}>
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
          <Image
            src="/images/hero-teaching.webp"
            alt="日本の医学部受験に向けて1対1で答案を確認する講師と受験生"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            fetchPriority="high"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(12,26,51,0) 0%, #0c1a33 100%)" }}
          />
        </div>
        <div className="relative z-10 max-w-full overflow-hidden px-5 pb-7 pt-4">
          <HeroText />
        </div>
      </div>

      <HeroPersonas />
    </section>
  );
}
