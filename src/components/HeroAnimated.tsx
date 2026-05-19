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
  { label: "講師", value: "慶應医学部生" },
  { label: "設計", value: "週ごとの課題管理" },
  { label: "対応", value: "全国オンライン" },
];

const heroPersonas = [
  {
    label: "高校3年生の方へ",
    desc: "残り期間から逆算した90日プランを直接設計します",
    href: "/for/ko3?from=hero-persona",
  },
  {
    label: "浪人・再受験の方へ",
    desc: "前年の失敗要因を分解して、伸ばし切る一年に組み直します",
    href: "/for/ronin?from=hero-persona",
  },
  {
    label: "保護者の方へ",
    desc: "学費・受験校・親が陥る不安を、戦略相談で一緒に整理します",
    href: "/for/parents?from=hero-persona",
  },
  {
    label: "慶應医学部 第一志望の方へ",
    desc: "慶應医を全勝した代表が、入試ごとの差を踏まえて指導します",
    href: "/universities/keio?from=hero-persona",
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
          無料相談で90日プラン作成
        </span>
        <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.85)" }}>
          現役慶應医学部生が現在地を確認
        </span>
        <span aria-hidden="true" className="ml-auto text-xs" style={{ color: "#c9922a" }}>
          →
        </span>
      </Link>

      {/* Gold line */}
      <div
        className="w-12 h-0.5 mb-5"
        style={{ backgroundColor: "#c9922a", transformOrigin: "left", ...anim(0.5, 0.05, "scaleInX") }}
      />

      {/* Micro copy */}
      <div
        className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-md text-xs tracking-widest w-fit"
        style={{
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          color: "rgba(255,255,255,0.66)",
          ...anim(0.5, 0.1, "fadeSlideDown"),
        }}
      >
        医学部受験専門 / 1対1個別指導
      </div>

      {/* Headline — single sentence, two lines on mobile */}
      <h1
        className="mb-4 font-bold leading-snug"
        style={{
          fontFamily: "var(--font-noto-serif)",
          fontSize: "clamp(1.78rem, 4.1vw, 3.05rem)",
          color: "#ffffff",
          maxWidth: "calc(100vw - 40px)",
          ...anim(0.65, 0.2),
        }}
      >
        <span className="block">慶應医学部生が、</span>
        <span className="block">医学部受験を</span>
        <span className="block">1対1で支える。</span>
      </h1>

      {/* Sub copy */}
      <p
        className="mb-5 font-semibold"
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
        授業・自習・面接小論文まで、<br className="sm:hidden" />
        志望校から逆算して毎週設計します。
      </p>

      {/* Description */}
      <p
        className="mb-8 leading-relaxed"
        style={{
          color: "rgba(255,255,255,0.62)",
          maxWidth: "calc(100vw - 40px)",
          fontSize: "clamp(0.85rem, 1.35vw, 0.95rem)",
          overflowWrap: "anywhere",
          ...anim(0.65, 0.36),
        }}
      >
        模試結果・志望校・教材から、授業で扱う内容と自習範囲を具体化。
        次の1週間でやることまで一緒に決めます。
      </p>

      {/* CTAs */}
      <div
        className="flex w-[calc(100vw-40px)] max-w-md flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row"
        style={anim(0.65, 0.44)}
      >
        <Link
          href="/contact?from=hero-primary"
          className="inline-flex w-full items-center justify-center rounded-lg px-7 py-3.5 text-center text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90 sm:w-auto"
          style={{ backgroundColor: "#c9922a" }}
        >
          フォームで無料相談
        </Link>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-center text-sm font-bold text-white transition-opacity hover:opacity-90 sm:w-auto"
          style={{ backgroundColor: "#06C755" }}
        >
          <LineIcon />
          LINEで30秒相談
        </a>
      </div>
      <p
        className="mt-3 hidden text-xs sm:block"
        style={{ color: "rgba(255,255,255,0.48)", ...anim(0.65, 0.48) }}
      >
        30分・オンライン対応 / 強引な勧誘はありません
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
          For You — まずは自分に合う入口から
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
          src="/images/hero-japan-tutoring.webp"
          alt="日本の医学部受験に向けて1対1で答案を確認する講師と受験生"
          fill
          sizes="(min-width: 768px) 100vw, 0px"
          className="object-cover object-[64%_center]"
          priority
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(90deg, rgba(12,26,51,0.98) 0%, rgba(12,26,51,0.92) 34%, rgba(12,26,51,0.5) 66%, rgba(12,26,51,0.22) 100%)" }}
        />
        <div className="relative z-10 flex min-h-[70svh] flex-col justify-center px-12 py-10 lg:px-16 xl:px-20">
          <div className="max-w-2xl">
            <HeroText />
          </div>
        </div>
      </div>

      {/* Mobile: keep tutor and student visible above the copy. */}
      <div className="md:hidden relative overflow-hidden" style={{ backgroundColor: "#0c1a33" }}>
        <div className="relative aspect-[16/6.3] w-full overflow-hidden sm:aspect-[16/7]">
          <Image
            src="/images/hero-japan-tutoring-mobile.webp"
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
        <div className="relative z-10 max-w-full overflow-hidden px-5 pb-8 pt-5">
          <HeroText />
        </div>
      </div>

      <HeroPersonas />
    </section>
  );
}
