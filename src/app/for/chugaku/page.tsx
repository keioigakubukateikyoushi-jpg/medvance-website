import ForPageSchemas from "@/components/ForPageSchemas";
import Link from "next/link";
export const metadata = {
  title: "中学生からの医学部受験ロードマップ｜現役慶應医学部生が解説 | Medvance",
  description:
    "中学生のうちから医学部を目指すには何をすべきか。高校選び・英数の先取り・志望理由の育て方まで、現役慶應医学部生が中学生向けに医学部合格への道筋を解説します。",

  alternates: {
    canonical: "/for/chugaku",
  },};

const roadmap = [
  {
    grade: "中学1〜2年生",
    title: "基礎力と学習習慣の確立",
    priority: "最優先",
    items: [
      {
        label: "英語",
        desc: "単語・文法・リスニングの基礎を徹底的に固める。中学英語を完璧にすることが、高校英語・大学受験英語の土台になる。英検準2級〜2級を目標に取り組むと力がつく。",
      },
      {
        label: "数学",
        desc: "計算の正確さとスピードを鍛える。「なぜその式になるのか」を説明できるレベルで理解する習慣をつける。中学数学の概念的理解が高校数学の理解速度に直結する。",
      },
      {
        label: "学習習慣",
        desc: "毎日決まった時間に勉強する習慣を作る。1日1〜2時間の継続が、高校での爆発的な成長を生む土台になる。勉強量より「毎日続けること」が最重要。",
      },
    ],
  },
  {
    grade: "中学3年生",
    title: "高校受験と志望校選び",
    priority: "高校選びが重要",
    items: [
      {
        label: "高校受験",
        desc: "医学部を目指すなら、進学実績のある進学校への進学が有利。ただし無理に偏差値の高い高校を目指すより、入学後に上位でいられる環境の方が重要なケースもある。",
      },
      {
        label: "英数の先取り",
        desc: "高校内容の先取り学習を少しずつ始める。特に英単語の語彙拡張と、数学の因数分解・二次関数などの先取りは高1スタートを有利にする。",
      },
      {
        label: "医師・医学への関心を育てる",
        desc: "なぜ医師になりたいのかを言語化し始める時期。医療系の本を読む、病院見学・医療系ボランティアに参加するなど、動機を育てる経験を積んでおくと面接で語れる言葉が生まれる。",
      },
    ],
  },
];

const highSchoolStrategy = [
  {
    grade: "高1",
    desc: "英数の基礎完成・理科スタート。部活との両立を意識しながら学習習慣を維持。",
    href: "/for/ko1",
  },
  {
    grade: "高2",
    desc: "英数強化・理科2科目の体系的理解。高3に向けた土台づくり。",
    href: "/for/ko2",
  },
  {
    grade: "高3",
    desc: "志望校特化・過去問演習・面接対策。現役合格へ向けラストスパート。",
    href: "/for/ko3",
  },
];

const tips = [
  {
    title: "中学生のうちに「なぜ医師になりたいか」を考え始める",
    body: "医学部の面接では必ず「なぜ医師を目指したか」を問われます。中学生のうちから意識しておくことで、高校・大学受験の時点で本物の動機と言葉が育っています。焦って作った答えは面接官に見透かされます。",
  },
  {
    title: "英語は早ければ早いほど有利",
    body: "医学部英語は難易度が高く、長文の読解量・速度が求められます。中学時代に英語を得意科目にしておくことで、高校以降の理系科目に集中できる時間が生まれます。英検を活用した段階的な実力向上が効果的です。",
  },
  {
    title: "数学の「なぜ」を大切にする",
    body: "医学部入試の数学は思考力・論証力を問う問題が多い。中学数学から「公式の暗記」ではなく「なぜその公式が成り立つか」を理解する習慣を持つことが、高校数学・入試数学での大きな差になります。",
  },
  {
    title: "焦りすぎず、土台をしっかり",
    body: "中学生の段階で医学部を意識することは素晴らしいことですが、無理な先取りや詰め込みは逆効果になる場合があります。最優先は「学習習慣の確立」と「基礎の完全理解」。土台がしっかりしていれば高校での伸びは著しく早くなります。",
  },
];

const faqs = [
  {
    q: "中学生のうちからMedvanceを利用できますか？",
    a: "はい、中学生からのご相談・ご利用も歓迎しています。高校入学後の対策について無料相談でお話しすることも可能です。まずはお気軽にご連絡ください。",
  },
  {
    q: "医学部を目指すなら中高一貫校の方が有利ですか？",
    a: "必ずしもそうではありません。中高一貫校は高2までに高校内容を終えるため時間的余裕が生まれますが、公立高校からでも現役で医学部に合格している生徒は多くいます。重要なのは入学した高校で上位を維持し、正しい戦略で受験に臨むことです。",
  },
  {
    q: "中学生が今からできる一番重要なことは何ですか？",
    a: "「毎日勉強する習慣を作ること」と「英語・数学の基礎を完璧にすること」です。医学部合格者の多くは、高校入学時点ですでに英数の基礎が固まっています。派手な先取りより、地道な基礎固めが最も価値あります。",
  },
  {
    q: "部活をやりながらでも医学部を目指せますか？",
    a: "十分可能です。多くの医学部合格者が部活と受験を両立させています。中学時代は部活を通じた体力・精神力・時間管理能力の育成も受験に活きます。1日1〜2時間の学習継続を心がけましょう。",
  },
];

export default function ChugakuPage() {
  return (
    <>
      <ForPageSchemas slug="chugaku" />
      <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            中学生の方へ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            中学生からの医学部受験ロードマップ
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            今から何をすべきか。現役慶應医学部生が中学生向けに解説します
          </p>
        </div>
      </div>

      {/* ロードマップ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            中学生の学年別ロードマップ
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "#6b7280" }}>
            焦りすぎず、学年に応じたことを着実にやることが最短ルートです
          </p>
          <div className="space-y-8">
            {roadmap.map((section, si) => (
              <div key={si} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                <div className="px-6 py-4 flex items-center gap-4" style={{ backgroundColor: "#0c1a33" }}>
                  <span className="text-white font-bold text-base" style={{ fontFamily: "var(--font-noto-serif)" }}>{section.grade}</span>
                  <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.7)" }}>— {section.title}</span>
                  <span className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: "rgba(201,146,42,0.25)", color: "#c9922a" }}>{section.priority}</span>
                </div>
                <div className="p-6 bg-white">
                  <div className="space-y-4">
                    {section.items.map((item, ii) => (
                      <div key={ii} className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                        <span className="flex-shrink-0 text-xs font-bold pt-0.5 min-w-[48px]" style={{ color: "#c9922a" }}>{item.label}</span>
                        <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 高校での続き */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            高校入学後の流れ
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "#6b7280" }}>
            中学で土台を作れば、高校での加速度が全く違います
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {highSchoolStrategy.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block p-6 rounded-2xl hover:shadow-md transition-shadow group"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <p className="text-lg font-bold mb-2 group-hover:underline" style={{ color: "#0c1a33" }}>{item.grade}</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>{item.desc}</p>
                <p className="text-xs font-semibold" style={{ color: "#c9922a" }}>詳しく見る →</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 今からできること */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            中学生のうちに意識しておくこと
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
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
            「中学生のうちに何をすべきか」「高校選びはどうすればいいか」など、お気軽にご相談ください。
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
