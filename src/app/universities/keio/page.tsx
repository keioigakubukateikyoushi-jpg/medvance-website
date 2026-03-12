import Link from "next/link";

export const metadata = {
  title: "慶應義塾大学医学部対策｜現役慶應医学部生が入試を徹底解説 | Medvance",
  description:
    "慶應義塾大学医学部の入試対策を現役慶應医学部生が指導。英語・数学・物理・化学・小論文・面接の傾向と対策。偏差値40台からの慶應医学部合格実績あり。",
};

const subjects = [
  {
    name: "英語",
    body: "長文読解中心で医療・科学系テーマが頻出。スピードと正確性が求められます。英作文では論理的な記述力が問われるため、文章構成力を丁寧に鍛えます。",
  },
  {
    name: "数学",
    body: "記述式で思考力・論証力が問われます。単なる計算力ではなく、解法の根拠を説明できる力が必要。基礎概念の深い理解から積み上げる指導を行います。",
  },
  {
    name: "物理・化学",
    body: "難易度が高く、本質的な理解がないと解けない問題が多い。公式の丸暗記ではなく、なぜその公式が成り立つかを理解する指導を行います。",
  },
  {
    name: "小論文",
    body: "医療倫理・生命科学・社会問題に関するテーマが出題されます。単なる意見の羅列ではなく、論理的な構成と深い考察が評価されます。",
  },
  {
    name: "面接",
    body: "グループ面接・個人面接の両形式があります。志望動機・医師としての倫理観・社会問題への意見など、思考の深さを問う質問が多い傾向です。",
  },
];

const reasons = [
  {
    title: "講師が現役慶應医学部生",
    body: "実際に慶應医学部の入試を突破した現役生が指導します。試験の雰囲気・傾向・当日の戦略まで、体験者だからこそ語れるリアルな情報を提供します。",
  },
  {
    title: "慶應医学部の過去問を完全分析",
    body: "過去10年以上の過去問を分析し、頻出テーマ・問われやすい思考パターンを体系的に把握。効率的な対策を行います。",
  },
  {
    title: "偏差値40台からの合格実績",
    body: "スタート時点の偏差値に関係なく、正しい学習法と戦略で慶應医学部合格を実現した実績があります。諦めずにご相談ください。",
  },
];

const faqs = [
  {
    q: "慶應医学部はどのくらい難しいですか？",
    a: "私立医学部の中でも最難関に位置する大学です。しかし、正しい対策と十分な準備があれば手が届かない大学ではありません。まずは現状の学力をヒアリングし、合格までの道筋をお伝えします。",
  },
  {
    q: "慶應医学部対策はいつから始めればいいですか？",
    a: "早ければ早いほどいいですが、高3からでも間に合ったケースがあります。まず現状を把握し、必要な準備期間を逆算します。",
  },
  {
    q: "慶應医学部専願で対策できますか？",
    a: "はい。慶應医学部に特化した対策プランを組むことが可能です。他の医学部と並行して受験する場合のプランもご提案できます。",
  },
];

export default function KeioPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            慶應義塾大学医学部
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            慶應医学部合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生だからこそ語れる、リアルな入試対策
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            慶應義塾大学医学部の入試概要と特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              慶應義塾大学医学部の一般選抜は、1次試験（英語・数学・物理または化学）と2次試験（小論文・面接）の二段階選抜です。1次試験では高い学力が問われ、特に英語・数学は思考力・記述力重視の出題スタイルが特徴的です。2次試験の面接では医師としての適性・倫理観・社会問題への視点が問われ、単なる学力以上の準備が必要になります。私立医学部の中でも最難関と位置付けられていますが、Medvanceでは現役慶應医学部生の講師が自身の合格体験をもとに、戦略的な対策を提供しています。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            科目別対策のポイント
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
            なぜMedvanceが慶應医学部合格に強いか
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
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            合格者の声
          </h2>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「高2の終わりに偏差値50程度の状態から慶應医学部を目指し始めました。周囲からは無謀と言われましたが、Medvanceの先生が最初から戦略を立ててくれたので、ブレずに勉強できました。特に数学の論証力と英語の読解速度が大きく伸び、本番でも自信をもって臨めました。面接の準備も何度も模擬練習をしていただき、本番は緊張しませんでした。」
            </p>
            <p className="text-sm font-bold" style={{ color: "#0c1a33" }}>A.T.さん｜慶應義塾大学医学部合格</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
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
            慶應医学部合格への道筋を、一緒に考えます。
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
