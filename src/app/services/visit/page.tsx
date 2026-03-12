import Link from "next/link";

export const metadata = {
  title: "訪問・対面医学部受験指導｜東京・関東で慶應医学部生が自宅に来て指導 | Medvance",
  description:
    "東京・神奈川・千葉・埼玉などの関東エリアで、現役慶應医学部生が自宅に来て医学部受験を指導。完全1対1の訪問家庭教師。まずは無料相談から。",
};

const features = [
  {
    title: "自宅でリラックスして受講",
    body: "慣れた環境で授業を受けることで、緊張せず自分のペースで質問・理解ができます。外に出るストレスなく、集中して学習に取り組めます。",
  },
  {
    title: "移動時間ゼロで効率アップ",
    body: "通塾の時間が不要なため、その分だけ学習・休息に充てられます。忙しい受験生にとって、移動時間の節約は大きな強みになります。",
  },
  {
    title: "自分の教材・参考書で指導",
    body: "お手持ちの参考書・問題集をそのまま使って指導します。「この問題がわからない」という即時対応も可能。自分の学習に完全に寄り添った指導を実現します。",
  },
  {
    title: "集中しやすい1対1環境",
    body: "他の生徒の目を気にせず、わからないことを遠慮なく聞ける環境です。授業のテンポ・難易度も生徒に完全合わせ。最も集中できる環境で学べます。",
  },
];

const areas = [
  { pref: "東京都", detail: "23区・多摩地区など都内全域" },
  { pref: "神奈川県", detail: "横浜・川崎・相模原・湘南エリアなど" },
  { pref: "千葉県", detail: "千葉市・船橋・柏・松戸・市川など" },
  { pref: "埼玉県", detail: "さいたま・川口・所沢・川越など" },
  { pref: "茨城県", detail: "つくば・水戸など（応相談）" },
];

const recommended = [
  "自宅で集中して取り組める方",
  "通塾の時間を節約したい方",
  "関東圏にお住まいの方",
  "お気に入りの参考書を使いたい方",
  "対面でのリアルなコミュニケーションを重視する方",
  "保護者の方が指導の様子を確認したい方",
];

const faqs = [
  {
    q: "対応エリア外でも訪問してもらえますか？",
    a: "関東圏外にお住まいの方はオンライン指導をご利用ください。全国どこからでも対面と変わらない質の指導を提供しています。",
  },
  {
    q: "途中でオンラインに切り替えることはできますか？",
    a: "はい、可能です。引越し・生活環境の変化などに伴い、対面からオンラインへ、またはその逆への切り替えに柔軟に対応します。",
  },
  {
    q: "訪問指導の頻度はどのくらいですか？",
    a: "週1〜複数回まで、ご状況に合わせて設定できます。まずは週1回から始めて、必要に応じて増やしていく形が多いです。",
  },
  {
    q: "家に来てもらうのですが、準備は必要ですか？",
    a: "特別な準備は不要です。机・椅子・ご自身の教材があれば授業を行えます。プリント・問題集はこちらで用意することも可能です。",
  },
];

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            訪問・対面指導
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            慶應医学部生が、あなたの自宅で1対1指導。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            東京・神奈川・千葉・埼玉など関東エリア対応
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            訪問指導の特徴
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            対応エリア
          </h2>
          <div className="space-y-3">
            {areas.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <span className="font-bold text-sm min-w-[80px]" style={{ color: "#0c1a33" }}>{item.pref}</span>
                <span className="text-sm" style={{ color: "#6b7280" }}>{item.detail}</span>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4 text-center" style={{ color: "#6b7280" }}>
            ※上記以外のエリアもご相談ください。交通状況によってはお断りする場合がございます。
          </p>
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
                <span className="mt-0.5" style={{ color: "#c9922a" }}>✓</span>
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
            訪問エリアの確認・指導プランのご提案まで、無料でお話しします。
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
