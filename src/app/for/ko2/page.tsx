import ForPageSchemas from "@/components/ForPageSchemas";
import Link from "next/link";
import RelatedColumns from "@/components/RelatedColumns";

export const metadata = {
  title: "高2から始める医学部受験対策｜現役慶應医学部生による完全1対1指導 | Medvance",
  description:
    "高校2年生から医学部を目指す方へ。受験まで残り2年。今から本気で動けば十分間に合います。Medvanceは現役慶應医学部生が完全1対1で、合格まで戦略的にサポートします。",

  alternates: {
    canonical: "/for/ko2",
  },};

const challenges = [
  {
    title: "「まだ時間があると思っていたら高3になっていた」",
    body: "高2は「準備の1年」として最も重要な時期です。何もしないまま高3を迎えると、基礎固めと応用演習を同時にこなす羽目になります。今動くことが、来年の余裕に直結します。",
  },
  {
    title: "「理科をいつから本格的に始めればいい？」",
    body: "高2は理科（物理・化学・生物）の本格スタートに最適な時期。学校の授業と連動しながら、受験レベルの理解を先取りしておくことで、高3での負担が大きく減ります。",
  },
  {
    title: "「部活が忙しくて受験勉強に手が回らない」",
    body: "部活引退は多くの場合、高3の夏。だからこそ高2のうちから「週数時間でも英数を継続する」ことが合否を分けます。少ない時間でも最大効果を出す学習法を一緒に設計します。",
  },
];

const schedule = [
  {
    period: "高2前半（4〜9月）",
    title: "英数の強化と理科スタート",
    desc: "英語・数学の基礎を完成させながら、理科1科目の学習を本格始動する時期。特に数学は「解き方の暗記」から「考え方の理解」へシフトすることが重要です。理科は学校の授業ペースより少し先を行く意識で進めます。",
  },
  {
    period: "高2後半（10〜3月）",
    title: "理科2科目の体系的理解",
    desc: "理科2科目（物理・化学、または化学・生物）の基礎を体系的に理解する時期。この時期に概念を正確に理解しておくことが、高3の演習期に爆発的に伸びるための準備になります。英語の長文読解量も増やしていきます。",
  },
];

const reasons = [
  {
    title: "高2専用の戦略設計",
    body: "「部活と両立しながら何をどこまで進めるか」を、学校のカリキュラムと照らし合わせて設計します。やみくもに量を増やすのではなく、高2で押さえるべき優先事項を明確にします。",
  },
  {
    title: "理科の先取り指導",
    body: "学校の授業では理科の深い理解が追いつかないケースが多い。Medvanceでは受験レベルの視点から理科を再整理し、学校の授業も受験対策も同時に効率化します。",
  },
  {
    title: "高3に備えた学力の土台",
    body: "高3になったとき、英数理の基礎がすでに固まっている状態を作ることが目標。高3は演習と志望校対策に集中できるよう、高2のうちに「負債ゼロ」の状態を作ります。",
  },
];

const faqs = [
  {
    q: "高2の今から始めて間に合いますか？",
    a: "十分間に合います。高2のスタートは決して遅くありません。ただし「まだ高2だから」と先延ばしにし続けると、高3で取り返しのつかない差が生まれます。今すぐ始めることが最善です。",
  },
  {
    q: "理科はいつから本格的に勉強すべきですか？",
    a: "高2後半から本格スタートが理想です。学校の授業の進度に合わせながら、受験レベルの深い理解を並行して進めます。高3になってから理科を一から始めるのでは時間が足りません。",
  },
  {
    q: "部活引退まで待った方がいいですか？",
    a: "待つ必要はありません。週1〜2回の指導から始めて、部活引退後に頻度を上げる形で進めます。引退後に一気に追い上げるためにも、高2のうちに基礎を固めておくことが重要です。",
  },
  {
    q: "志望校はまだ決まっていないのですが大丈夫ですか？",
    a: "問題ありません。高2の段階では志望校が絞れていなくても、英数理の基礎固めはどの大学を目指す場合でも共通です。学習を進めながら志望校を考えていきましょう。",
  },
];

export default function Ko2Page() {
  return (
    <>
      <ForPageSchemas slug="ko2" />
      <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            高校2年生の方へ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            高2の今が、合否を分ける分岐点。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            部活と両立しながら、高3に備えた本物の基礎を築きます
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            高2が直面するリアルな課題
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
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
            高2の学習ロードマップ
          </h2>
          <p className="text-center text-sm mb-10" style={{ color: "#6b7280" }}>
            高2の1年間で「高3に向けた土台」を完成させます
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceが高2に選ばれる理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4" style={{ backgroundColor: "#c9922a" }}>
                  {i + 1}
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
            高2からの学習戦略・部活との両立プランを無料でご提案します。
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