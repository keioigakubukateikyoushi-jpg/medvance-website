import Link from "next/link";
import Image from "next/image";
import { LINE_URL } from "@/lib/links";

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

function anim(duration: number, delay: number, name = "fadeUpIn"): React.CSSProperties {
  return {
    animation: `${name} ${duration}s ${ease} ${delay}s both`,
  };
}

/* ── Shared text content ── */
const proofPoints = [
  { label: "代表実績", value: "偏差値40→慶應医全勝" },
  { label: "指導体制", value: "完全1対1" },
  { label: "計画管理", value: "週次で見直し" },
];

const segmentLinks = [
  { label: "高3生", href: "/for/ko3", note: "残り期間から逆算" },
  { label: "浪人生", href: "/for/ronin", note: "失敗原因を再設計" },
  { label: "保護者", href: "/for/parents", note: "費用と進捗を確認" },
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
      {/* Gold line */}
      <div
        className="w-10 h-0.5 mb-7"
        style={{ backgroundColor: "#c9922a", transformOrigin: "left", ...anim(0.5, 0, "scaleInX") }}
      />

      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full text-xs tracking-widest w-fit"
        style={{
          backgroundColor: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.14)",
          color: "rgba(255,255,255,0.6)",
          ...anim(0.5, 0.1, "fadeSlideDown"),
        }}
      >
        現役慶應医学部生による医学部受験戦略
      </div>

      {/* Headline */}
      <h1
        className="font-bold leading-snug mb-4"
        style={{
          fontFamily: "var(--font-noto-serif)",
          fontSize: "clamp(1.65rem, 4.5vw, 3.25rem)",
          color: "#ffffff",
          ...anim(0.65, 0.2),
        }}
      >
        偏差値40から慶應医学部に全勝した現役医学生が、
        <br className="hidden lg:block" />
        あなただけの合格戦略を設計します
      </h1>

      {/* Sub headline */}
      <p
        className="font-semibold mb-6"
        style={{
          color: "rgba(255,255,255,0.65)",
          fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
          fontFamily: "var(--font-noto-serif)",
          lineHeight: 1.7,
          ...anim(0.65, 0.32),
        }}
      >
        医学部合格は、戦略が9割。
      </p>

      {/* Description */}
      <p
        className="leading-relaxed mb-9"
        style={{
          color: "rgba(255,255,255,0.58)",
          maxWidth: "560px",
          fontSize: "clamp(0.8125rem, 1.3vw, 0.9rem)",
          ...anim(0.65, 0.42),
        }}
      >
        学力、志望校、残り期間をもとに、科目別の優先順位から面接・小論文まで完全1対1で逆算。全国オンラインで、今日から動ける学習計画に落とし込みます。
      </p>

      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6" style={anim(0.65, 0.48)}>
        {proofPoints.map((item) => (
          <div
            key={item.label}
            className="rounded-lg px-3 py-3"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <dt className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.46)" }}>
              {item.label}
            </dt>
            <dd className="mt-1 text-sm font-bold" style={{ color: "#ffffff" }}>
              {item.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6" style={anim(0.65, 0.56)}>
        <Link
          href="/contact?from=hero-primary"
          className="inline-flex items-center justify-center px-7 py-3.5 font-bold rounded-lg text-white shadow-lg hover:opacity-90 transition-opacity text-center text-sm"
          style={{ backgroundColor: "#c9922a" }}
        >
          無料で合格戦略診断を受ける
        </Link>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold rounded-lg text-white transition-opacity hover:opacity-90 text-center text-sm"
          style={{ backgroundColor: "#06C755" }}
        >
          <LineIcon />
          LINEで質問してみる
        </a>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-2 max-w-xl" style={anim(0.65, 0.64)}>
        {segmentLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-3 py-3 text-center transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.13)",
            }}
          >
            <span className="block text-sm font-bold" style={{ color: "#ffffff" }}>
              {item.label}
            </span>
            <span className="mt-1 block text-[10px] leading-snug" style={{ color: "rgba(255,255,255,0.48)" }}>
              {item.note}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default function HeroAnimated() {
  return (
    <section style={{ backgroundColor: "#0c1a33" }}>

      {/* ── Desktop: split layout ── */}
      <div className="hidden md:grid md:grid-cols-[58%_42%]" style={{ minHeight: "88svh" }}>
        {/* Text */}
        <div className="flex flex-col justify-center px-12 lg:px-16 xl:px-20 py-20 relative z-10">
          <HeroText />
        </div>
        {/* Image */}
        <div className="relative">
          <Image
            src="/images/hero.webp"
            alt="Medvance 医学部受験専門塾"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover object-center"
            priority
            fetchPriority="high"
          />
          <div
            className="absolute inset-y-0 left-0 pointer-events-none"
            style={{ width: "200px", background: "linear-gradient(to right, #0c1a33, transparent)" }}
          />
        </div>
      </div>

      {/* ── Mobile: image as full background ── */}
      <div className="md:hidden relative" style={{ minHeight: "86svh" }}>
        {/* Background image */}
        <Image
          src="/images/hero.webp"
          alt="Medvance 医学部受験専門塾"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          fetchPriority="high"
        />
        {/* Dark overlay — strong at top/bottom, lighter in middle */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, #0c1a33 0%, rgba(12,26,51,0.82) 45%, rgba(12,26,51,0.88) 100%)" }}
        />
        {/* Text content */}
        <div className="relative z-10 flex flex-col justify-center min-h-[86svh] px-5 py-20">
          <HeroText />
        </div>
      </div>

      {/* Scroll indicator — desktop */}
      <div className="hidden md:flex flex-col items-center gap-2 absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <span className="text-xs tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>scroll</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)" }} />
      </div>
    </section>
  );
}
