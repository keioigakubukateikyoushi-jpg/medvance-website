"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease, delay },
});

export default function HeroAnimated() {
  return (
    <section style={{ backgroundColor: "#0c1a33" }} className="relative overflow-hidden">
      {/* Desktop: full-height split layout */}
      <div className="grid md:grid-cols-[55%_45%]" style={{ minHeight: "100svh" }}>

        {/* Left: text panel */}
        <div className="flex flex-col justify-center py-28 px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
          {/* Gold accent line */}
          <motion.div
            className="w-10 h-0.5 mb-8"
            style={{ backgroundColor: "#c9922a" }}
            initial={{ opacity: 0, scaleX: 0, originX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, ease }}
          />

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs tracking-widest w-fit"
            style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.6)" }}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
          >
            医学部受験専門塾 Medvance
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Noto Serif JP', serif", fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            {...fadeUp(0.2)}
          >
            才能は、<br />
            <span style={{ color: "#c9922a" }}>関係ない。</span>
          </motion.h1>

          {/* Sub headline */}
          <motion.p
            className="font-semibold mb-6"
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", fontFamily: "'Noto Serif JP', serif", lineHeight: 1.7 }}
            {...fadeUp(0.35)}
          >
            医学部合格を決めるのは、才能でも運でもない。<br />
            正しい方法と、それを実行する環境だけだ。
          </motion.p>

          {/* Sub */}
          <motion.p
            className="text-base leading-relaxed mb-10"
            style={{ color: "rgba(255,255,255,0.65)", maxWidth: "440px" }}
            {...fadeUp(0.45)}
          >
            現役慶應医学部生が、あなただけの最短合格ルートを設計します。完全1対1・全国オンライン対応の医学部受験専門塾Medvance。
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-col sm:flex-row gap-4 mb-10" {...fadeUp(0.55)}>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 font-bold text-base rounded-lg text-white shadow-lg hover:opacity-90 transition-opacity text-center"
              style={{ backgroundColor: "#c9922a" }}
            >
              無料相談・お問い合わせ
            </Link>
            <Link
              href="/about"
              className="inline-block px-8 py-4 font-semibold text-base rounded-lg text-white transition-colors text-center"
              style={{ border: "1px solid rgba(255,255,255,0.28)" }}
            >
              Medvanceとは？
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div className="flex flex-wrap gap-x-6 gap-y-2" {...fadeUp(0.65)}>
            {["慶應義塾大学医学部在籍", "完全1対1制", "全国対応（オンライン）"].map((badge) => (
              <span key={badge} className="text-xs flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.42)" }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: "#c9922a" }} />
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: hero image fills full panel — desktop only */}
        <motion.div
          className="hidden md:block relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
        >
          <Image
            src="/images/hero.png"
            alt="Medvance 医学部受験専門塾"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient: left edge bleeds into dark panel */}
          <div
            className="absolute inset-y-0 left-0 pointer-events-none"
            style={{ width: "220px", background: "linear-gradient(to right, #0c1a33, transparent)" }}
          />
        </motion.div>
      </div>

      {/* Mobile: image below text */}
      <div className="md:hidden px-6 pb-14">
        <div className="relative rounded-2xl overflow-hidden" style={{ height: "300px" }}>
          <Image
            src="/images/hero.png"
            alt="Medvance 医学部受験専門塾"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Top fade into dark background */}
          <div
            className="absolute inset-x-0 top-0 pointer-events-none"
            style={{ height: "80px", background: "linear-gradient(to bottom, #0c1a33, transparent)" }}
          />
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
