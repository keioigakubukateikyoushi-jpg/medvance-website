import ForPageSchemas from "@/components/ForPageSchemas";
import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "高1から始める医学部受験対策｜現役医学部生による完全1対1指導 | Medvance",
  description:
    "高校1年生から医学部を目指す方へ。早期スタートで圧倒的有利に。Medvanceは現役医学部生が完全1対1で、基礎から志望校合格まで長期的にサポートします。",

  alternates: {
    canonical: "/for/ko1",
  },};

const advantages = [
  {
    title: "圧倒的な時間的アドバンテージ",
    body: "高1からスタートすれば、受験本番まで2〜3年の準備期間があります。焦らず基礎を深く固めながら、じっくり実力を積み上げられます。直前の詰め込みとは全く違う「本物の学力」が身につきます。",
  },
  {
    title: "学校の勉強と医学部対策を両立",
    body: "高1は学校の進度に合わせながら、医学部受験に必要な本質的な理解を同時に養う時期。授業の予習・復習を活かした指導で、定期テストも受験対策も一石二鳥です。",
  },
  {
    title: "志望校・志望理由を育てる時間がある",
    body: "医学部受験では面接で「なぜ医師になりたいか」を問われます。高1から意識して取り組むことで、本物の動機と言葉を育てる時間が生まれます。",
  },
];

const schedule = [
  {
    period: "高1前半（4〜9月）",
    title: "基礎の土台づくり",
    desc: "英語・数学の基礎を徹底的に固める時期。学校の授業をしっかり理解することが最優先。わからないまま先に進まない習慣をここで作ります。英語は単語・文法・読解の基礎、数学は計算力と概念理解を中心に進めます。",
  },
  {
    period: "高1後半（10〜3月）",
    title: "学習習慣の確立",
    desc: "毎日コンスタントに勉強できる習慣を作ります。「勉強する日・しない日」の差をなくすことが目標。部活との両立も含め、自分に合った学習リズムをMedvanceの講師と一緒に設計します。",
  },
];

const faqs = [
  {
    q: "高1から始めるのは早すぎませんか？",
    a: "むしろ早ければ早いほど有利です。医学部は倍率が高く、浪人率も高い。高1からスタートすることで、ゆとりを持って深い学力を積み上げられます。焦りではなく余裕が生まれます。",
  },
  {
    q: "部活と両立できますか？",
    a: "できます。週1回からでも始められます。忙しい時期は授業頻度を落とし、部活が落ち着いた時期に増やすなど、柔軟に対応します。「部活を引退してから」では遅い場合も多いため、無理のない範囲で早期スタートを推奨しています。",
  },
  {
    q: "今の成績が悪くても大丈夫ですか？",
    a: "高1の段階では成績よりも「本質を理解できているか」が重要です。今から正しい学習法を身につければ、成績は必ず上がります。まずは無料相談で現状をお聞かせください。",
  },
  {
    q: "何科目から始めればいいですか？",
    a: "高1では英語・数学の2科目に絞るのが最も効果的です。この2科目は医学部受験の根幹であり、早期に基礎を固めることが後の理科学習にも影響します。",
  },
];

export default function Ko1Page() {
  return (
    <>
      <ForPageSchemas slug="ko1" />
      <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            高校1年生の方へ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            高1からのスタートが、医学部合格の最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            時間的アドバンテージを活かし、本物の学力を着実に積み上げます
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            高1から始めるメリット
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4" style={{ backgroundColor: "#c9922a" }}>
                  {i + 1}
                </div>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            高1の学習ロードマップ
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "#6b7280" }}>
            「何をいつ始めるか」を明確にすることで、ブレない1年間を過ごせます
          </p>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#c9922a" }}>{item.period}</span>
                  <span className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.title}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            高1で優先すべき科目
          </h2>
          <p className="text-center text-sm mb-8" style={{ color: "#6b7280" }}>
            欲張らず、まずはこの2科目に集中することが最善です
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                subject: "英語",
                desc: "医学部受験で最も差がつく科目。高1のうちに語彙・文法・読解の基礎を固めることが、高3での爆発的な伸びにつながります。単語帳1冊の完全習得を目指しましょう。",
              },
              {
                subject: "数学",
                desc: "概念の理解が命。計算の速さより「なぜそうなるか」を理解する習慣を高1から作ることが重要です。理科の学習にも直結するため、早期に土台を作っておく価値があります。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="text-lg font-bold mb-3" style={{ color: "#0c1a33" }}>{item.subject}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* ── HIGH QUALITY JAPANESE REALISTIC PHOTO (Tier 4) ── */}
        <section className="bg-white px-4 py-12">
          <div className="mx-auto max-w-3xl relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_rgba(12,26,51,0.12)] border border-white/40 ring-1 ring-[#c9922a]/10 group">
            <div className="absolute inset-0 bg-amber-100/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500 z-10" />
            <Image 
              src="/images/generated/japanese_student_highschool_ko1.png" 
              alt="高1からの医学部合格ルートを視野に入れ、笑顔で数学の学習に取り組む日本の高校1年生" 
              className="w-full h-auto object-cover max-h-[420px] transition-transform duration-700 group-hover:scale-[1.03]"
              width={1024}
              height={1024}
              sizes="(min-width: 1024px) 900px, 100vw"
            />
          </div>
        </section>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>無料相談</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            高1からの学習戦略を一緒に考えます。部活との両立についてもお気軽にご相談ください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
