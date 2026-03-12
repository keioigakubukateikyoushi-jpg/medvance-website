import Link from "next/link";

export const metadata = {
  title: "オンライン医学部受験指導｜全国どこからでも現役慶應医学部生に習える | Medvance",
  description:
    "全国対応のオンライン医学部受験専門指導。現役慶應医学部生が1対1でオンライン指導。北海道から沖縄まで、地方在住でも最高レベルの医学部受験対策が受けられます。無料相談実施中。",
};

const features = [
  {
    title: "対面と変わらない指導クオリティ",
    body: "画面共有・ホワイトボード機能を活用。問題を解く過程・思考プロセスをリアルタイムで確認・指導します。「画面越し」でも深い理解につながる指導を行います。",
  },
  {
    title: "全国どこからでも受講可能",
    body: "北海道から沖縄まで、地方在住でも現役慶應医学部生の指導を受けられます。地方にいることで受験情報が不足しがちな方も、最新の入試傾向に基づいた対策が可能です。",
  },
  {
    title: "柔軟なスケジュール設定",
    body: "通学・通塾時間が不要。自宅から効率的に学習できます。部活・予備校との両立も容易です。朝・夜・週末など、ご自身のペースに合わせた受講が可能です。",
  },
  {
    title: "セキュリティ・プライバシー配慮",
    body: "個室からの指導で周囲に聞かれる心配なし。プライバシーに配慮した環境でご受講いただけます。使用するオンラインツールはセキュリティ面でも安心の環境を整えています。",
  },
];

const steps = [
  {
    step: "01",
    title: "無料相談",
    body: "まずはオンラインで無料相談。現在の学力・志望校・悩みをお聞きし、指導プランのご提案をします。",
  },
  {
    step: "02",
    title: "担当講師のマッチング",
    body: "ご状況に最も合った現役慶應医学部生の講師をご紹介。相性確認のための初回授業も設けています。",
  },
  {
    step: "03",
    title: "オーダーメイド計画でスタート",
    body: "学習計画を設計し、毎週の授業を通じて合格へ向けて進みます。進捗に応じて計画を随時調整します。",
  },
];

const recommended = [
  "地方在住で近くに医学部専門塾がない方",
  "通塾の時間・交通費を節約したい方",
  "部活や習い事と並行して勉強したい方",
  "対面が少し恥ずかしい・緊張するという方",
  "夜間・週末しか時間が取れない社会人の方",
  "海外在住で医学部受験を目指している方",
];

const faqs = [
  {
    q: "どんなツールを使って指導しますか？",
    a: "ZoomまたはGoogle Meetを使用します。ホワイトボード機能・画面共有機能を活用しながら、対面と同様の指導を行います。事前に使い方をご案内しますのでご安心ください。",
  },
  {
    q: "通信環境が不安です",
    a: "安定したWi-Fi環境があれば問題なく受講できます。万が一接続が途切れた場合も、すぐに再接続して授業を継続します。",
  },
  {
    q: "対面指導に切り替えることはできますか？",
    a: "関東圏にお住まいの方は、対面指導（訪問）への切り替えも可能です。ご状況に合わせて柔軟に対応します。",
  },
  {
    q: "体験授業はありますか？",
    a: "無料相談後に担当講師との初回授業をご用意しています。実際の指導を体験していただいたうえで継続をご判断いただけます。",
  },
];

export default function OnlinePage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            オンライン指導
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            全国どこからでも、最高の医学部受験指導を。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による完全1対1のオンライン指導
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            オンライン指導の特徴
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            オンライン指導の流れ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="text-3xl font-bold mb-3" style={{ color: "#c9922a" }}>{item.step}</p>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            こんな方に特にオススメ
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {recommended.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <span className="mt-0.5 text-base" style={{ color: "#c9922a" }}>✓</span>
                <p className="text-sm" style={{ color: "#3d3d3d" }}>{item}</p>
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
            全国どこからでもオンラインで相談できます。お気軽にどうぞ。
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
