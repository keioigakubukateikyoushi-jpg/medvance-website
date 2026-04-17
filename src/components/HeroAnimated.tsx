import Link from "next/link";
import Image from "next/image";

const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

function anim(duration: number, delay: number, name = "fadeUpIn"): React.CSSProperties {
  return {
    animation: `${name} ${duration}s ${ease} ${delay}s both`,
  };
}

/* ── Shared text content ── */
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
        医学部受験専門塾 Medvance
      </div>

      {/* Headline */}
      <h1
        className="font-bold leading-snug mb-4"
        style={{
          fontFamily: "var(--font-noto-serif)",
          fontSize: "clamp(1.75rem, 5vw, 3.6rem)",
          color: "#ffffff",
          ...anim(0.65, 0.2),
        }}
      >
        医学部合格に、<br />
        才能は<span style={{ color: "#c9922a" }}>関係ない。</span>
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
        必要なのは、正しい方法だけだ。
      </p>

      {/* Description */}
      <p
        className="leading-relaxed mb-9"
        style={{
          color: "rgba(255,255,255,0.58)",
          maxWidth: "420px",
          fontSize: "clamp(0.8125rem, 1.3vw, 0.9rem)",
          ...anim(0.65, 0.42),
        }}
      >
        現役慶應医学部生が、あなただけの最短合格ルートを設計します。完全1対1・全国オンライン対応。
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8" style={anim(0.65, 0.52)}>
        <Link
          href="/contact"
          className="inline-block px-7 py-3.5 font-bold rounded-lg text-white shadow-lg hover:opacity-90 transition-opacity text-center text-sm"
          style={{ backgroundColor: "#c9922a" }}
        >
          無料相談・お問い合わせ
        </Link>
        <Link
          href="/about"
          className="inline-block px-7 py-3.5 font-semibold rounded-lg text-white transition-opacity hover:opacity-80 text-center text-sm"
          style={{ border: "1px solid rgba(255,255,255,0.28)" }}
        >
          Medvanceとは？
        </Link>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap gap-x-5 gap-y-2" style={anim(0.65, 0.6)}>
        {["慶應義塾大学医学部在籍", "完全1対1制", "全国オンライン対応", "無料相談あり"].map((badge) => (
          <span key={badge} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.42)" }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: "#c9922a" }} />
            {badge}
          </span>
        ))}
      </div>
    </>
  );
}

export default function HeroAnimated() {
  return (
    <section style={{ backgroundColor: "#0c1a33" }}>

      {/* ── Desktop: split layout ── */}
      <div className="hidden md:grid md:grid-cols-[55%_45%]" style={{ minHeight: "100svh" }}>
        {/* Text */}
        <div className="flex flex-col justify-center px-12 lg:px-16 xl:px-20 py-28 relative z-10">
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
      <div className="md:hidden relative" style={{ minHeight: "100svh" }}>
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
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-7 py-24">
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
