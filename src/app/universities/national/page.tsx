import Link from "next/link";

export const metadata = {
  title: "国公立医学部受験対策｜東大・東京医科歯科など国立医学部の個別指導 | Medvance",
  description:
    "国公立医学部（東大・東京医科歯科・京大など）の受験対策を現役慶應医学部生が1対1で指導。共通テスト対策から二次試験まで一貫サポート。",
};

const subjects = [
  {
    name: "英語",
    body: "国公立二次の英語は記述・自由英作文が中心。東大・東京医科歯科はさらに要約・和訳の精度も問われます。論理的な英文構成力を重点的に鍛えます。",
  },
  {
    name: "数学",
    body: "記述式で論証の正確さが厳しく採点されます。東大・京大は発想力も問われる高難易度問題が出題。基礎から丁寧に積み上げ、論述力を強化します。",
  },
  {
    name: "物理・化学",
    body: "国公立医学部の理科は深い理解が問われる記述問題が多い。「なぜそうなるか」を説明できるレベルまで理解を深める指導を行います。",
  },
  {
    name: "国語",
    body: "共通テストの国語で高得点が必要です。現代文の読解・古文・漢文をバランスよく対策し、安定した得点源に仕上げます。",
  },
  {
    name: "社会",
    body: "共通テストの社会では選択科目を戦略的に選ぶことが重要です。得点効率を最大化する科目選択のアドバイスも行います。",
  },
];

const features = [
  {
    title: "共通テストから二次試験まで一貫指導",
    body: "国公立医学部は共通テストと二次試験の両方で高得点が必要です。共通テスト対策と二次対策を並行して進める、一貫した計画を設計します。",
  },
  {
    title: "大学別の二次試験対策",
    body: "東大・東京医科歯科・京大・大阪大学など、各大学の二次試験の出題スタイルに合わせた対策を行います。志望校のパターンを熟知した指導です。",
  },
  {
    title: "理科・数学の記述力強化",
    body: "国公立二次試験では答えだけでなく解答の論理性が採点されます。「なぜその式が成り立つか」を説明できる深い理解と記述力を育てます。",
  },
];

const faqs = [
  {
    q: "国公立医学部と私立医学部の両方を目指せますか？",
    a: "はい、国公立・私立の併願戦略も得意としています。共通する学力基盤を効率よく固めながら、各大学の特性に合わせた対策を並行して行います。",
  },
  {
    q: "共通テストで失敗してしまいました。まだ間に合いますか？",
    a: "ご状況によりますが、出願戦略を見直しながら残りの期間で最善を尽くす対策が可能です。まずはご相談ください。",
  },
  {
    q: "東大医学部を目指していますが対応できますか？",
    a: "はい、東大医学部対策も可能です。現役慶應医学部生の中には東大入試にも精通した講師が在籍しています。",
  },
  {
    q: "地方国公立医学部も対象ですか？",
    a: "はい、全国の国公立医学部に対応しています。志望校の過去問分析と大学別の傾向に合わせた対策を行います。",
  },
];

export default function NationalPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            国公立医学部対策
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            国公立医学部合格には、全科目の完成が必要。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            共通テストから二次試験まで、一貫した対策を行います
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            国公立医学部受験の特徴と難しさ
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              国公立医学部の受験は、共通テストで高い得点率（多くの大学で85〜90%以上）が求められる上、二次試験では深い思考力と記述力が問われます。科目数が多く、英語・数学・物理・化学に加え、国語・社会でも安定した得点が必要なため、バランスよく全科目を仕上げることが合格の前提条件となります。また、東大・東京医科歯科・京大など最難関では、問題の質も極めて高く、本質的な理解なしには解けない問題が出題されます。Medvanceでは一人ひとりの弱点を分析し、全科目を効率よく仕上げる計画を設計します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            科目別の国公立対策ポイント
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#c9922a" }}>{item.name}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            MedvanceAの国公立対策
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item, i) => (
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
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
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
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            国公立医学部合格への最短ルートを、一緒に考えます。
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
  );
}
