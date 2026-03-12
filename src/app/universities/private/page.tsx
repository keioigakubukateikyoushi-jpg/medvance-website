import Link from "next/link";

export const metadata = {
  title: "私立医学部受験対策｜慈恵・順天堂・日医など私立医学部に強い個別指導 | Medvance",
  description:
    "私立医学部（慈恵・順天堂・日本医科大学など）の受験対策を現役慶應医学部生が1対1で指導。私立医学部の傾向に合わせたオーダーメイド対策。合格実績あり。",
};

const universities = [
  {
    name: "慶應義塾大学医学部",
    point: "思考力・論証力重視の英数理。小論文・面接の比重が高く、医師としての人間性が問われます。",
  },
  {
    name: "東京慈恵会医科大学",
    point: "英語の難度が高く、医学系長文読解への対応が必須。面接では「慈恵の医師像」への共感が重要です。",
  },
  {
    name: "順天堂大学医学部",
    point: "バランスのよい出題で、基礎力の完成度が問われます。面接・小論文を重視する傾向があります。",
  },
  {
    name: "日本医科大学",
    point: "数学・理科の難易度が高め。記述問題では解法の論理性が評価されます。面接は複数回実施されます。",
  },
  {
    name: "昭和大学医学部",
    point: "基礎力を重視した出題スタイル。受験者数が多く、確実に基礎を固めることで安定した得点が狙えます。",
  },
  {
    name: "東京医科大学",
    point: "英語・数学・理科2科目の計4科目受験。全体的に標準〜やや難の問題で、正確な知識と速度が問われます。",
  },
];

const features = [
  {
    title: "大学ごとの出題傾向を熟知",
    body: "私立医学部は大学によって出題スタイルが大きく異なります。各大学の過去問を分析し、合格に最も直結する対策を実施します。",
  },
  {
    title: "複数校を効率的に対策",
    body: "複数の私立医学部を受験する場合でも、共通する学力基盤を固めながら大学ごとの特徴に合わせた対策を並行して進めます。",
  },
  {
    title: "面接・小論文まで一貫対策",
    body: "私立医学部は面接・小論文の配点が高い傾向があります。各大学の面接スタイルに合わせた模擬練習と小論文添削を行います。",
  },
];

const faqs = [
  {
    q: "複数の私立医学部を受験したいのですが対応できますか？",
    a: "はい、複数校受験のプランも得意としています。共通する基盤を作りながら、各大学の傾向に合わせた対策を効率よく進めます。",
  },
  {
    q: "偏差値がまだ低いのですが私立医学部を目指せますか？",
    a: "現状の偏差値は関係ありません。まず現在の学力を正確に診断し、合格に必要な学力をどう積み上げるかを設計します。偏差値40台からの合格実績もあります。",
  },
  {
    q: "どの私立医学部が自分に合っているか分かりません",
    a: "無料相談の中で、ご状況・ご希望をヒアリングしたうえで、志望校選びのアドバイスも行います。出願戦略も含めてサポートします。",
  },
  {
    q: "私立医学部の学費が心配なのですが",
    a: "学費の高い私立医学部ですが、奨学金・特待生制度を設けている大学もあります。受験校選びの際に費用面も含めたアドバイスをします。",
  },
];

export default function PrivatePage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            私立医学部対策
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            私立医学部合格は、大学別戦略で決まる。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            各大学の出題傾向を熟知した現役慶應医学部生が指導します
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            私立医学部受験の特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              私立医学部は各大学によって出題傾向が大きく異なります。同じ医学部受験であっても、慶應医学部の思考力重視の問題と、基礎力を問う大学とでは、求められる力が異なります。また、私立医学部では面接・小論文の比重が高い傾向があり、学力だけでなく医師としての適性・人間性が問われます。複数校を受験する際は、各大学の特性を理解した上で効率的に対策を組む「戦略的な受験計画」が合格の鍵になります。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            主な対策大学と各校のポイント
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {universities.map((item, i) => (
              <div key={i} className="p-5 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#c9922a" }}>{item.name}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            Medvanceの私立医学部対策の特徴
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
            志望校に合わせた合格戦略を、一緒に考えます。
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
