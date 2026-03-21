import Link from "next/link";

export const metadata = {
  title: "私立医学部と国公立医学部、どちらを目指すべきか | Medvance",
  description:
    "私立医学部と国公立医学部の学費・難易度・環境の違いを徹底比較。自分のタイプ別にどちらを目指すべきかアドバイスします。",
};

const comparisonPoints = [
  {
    label: "学費（6年間）",
    national: "約350万円",
    private: "約2,000万〜4,000万円",
    note: "国公立は授業料が年間約53万円。私立は大学によって大きく異なる。",
  },
  {
    label: "入試難易度",
    national: "共通テスト高得点が必須（85〜90%以上）",
    private: "大学によって幅広い。偏差値60台から75前後まで",
    note: "国公立は共通テストの比重が高い。私立は大学ごとに傾向が異なる。",
  },
  {
    label: "受験科目数",
    national: "7〜8科目（共通テスト）＋二次試験",
    private: "3〜4科目（英・数・理科2科目）",
    note: "私立は受験科目が絞られるため、集中して対策しやすい面もある。",
  },
  {
    label: "出願できる大学数",
    national: "基本的に1校のみ（前期・後期）",
    private: "複数校に同時出願可能",
    note: "私立は受験機会が多く、戦略的な受験が可能。",
  },
];

const typicalPrivateSchools = [
  {
    name: "産業医科大学",
    tuition: "約1,500万円",
    note: "卒業後一定期間の産業医業務が条件。実質負担は大幅に減る場合あり。",
  },
  {
    name: "自治医科大学",
    tuition: "実質ほぼ無償",
    note: "卒後9年間の僻地医療勤務が義務付けられる。私立だが公的性格が強い。",
  },
  {
    name: "防衛医科大学校",
    tuition: "無償（給与支給）",
    note: "自衛隊医官として勤務することが前提。一般の医学部とは異なる。",
  },
  {
    name: "順天堂大学",
    tuition: "約2,100万円",
    note: "私立の中では比較的学費が抑えられており、教育環境も充実。",
  },
  {
    name: "東京医科大学",
    tuition: "約2,200万円",
    note: "都内立地で附属病院も充実。私立医大の中では知名度が高い。",
  },
  {
    name: "昭和大学",
    tuition: "約2,200万円",
    note: "特待生制度が充実しており、成績優秀者は学費が大幅に減額される。",
  },
];

const typeAdvice = [
  {
    type: "国公立向きのタイプ",
    icon: "国",
    points: [
      "全科目を高水準で仕上げられる自信がある",
      "6年間の学費を抑えることが最優先",
      "地方大学でも構わない（旧帝大以外も視野に入れられる）",
      "共通テストでミスが少ない安定型の受験生",
    ],
  },
  {
    type: "私立向きのタイプ",
    icon: "私",
    points: [
      "科目を絞って集中的に対策したい",
      "東京・大阪など大都市圏の大学を希望している",
      "複数校に出願して合格の可能性を広げたい",
      "学費は家族と相談済みで問題ない",
    ],
  },
];

export default function ShigakuVsKokuritsuPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c9922a" }}
          >
            コラム
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            私立医学部と国公立医学部、
            <br className="hidden md:block" />
            どちらを目指すべきか
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            学費・難易度・環境の違いをもとにタイプ別に解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="p-8 rounded-2xl bg-white mb-8"
            style={{ border: "1px solid #e5e1d8" }}
          >
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#3d3d3d" }}
            >
              医学部受験で最初に悩むのが「私立にするか、国公立にするか」という問題です。この選択は受験戦略の根幹に関わるため、早い段階で方向性を決めておくことが重要です。
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#3d3d3d" }}
            >
              結論から言うと、どちらが「正解」かは受験生の状況によって異なります。学費の問題だけでなく、得意科目・現在の学力・目標とする大学の場所なども総合的に判断する必要があります。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは両者の違いを具体的に比較し、タイプ別に「どちらを選ぶべきか」の判断基準を整理します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            国公立 vs 私立：主な違いの比較
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
              <thead>
                <tr style={{ backgroundColor: "#0c1a33" }}>
                  <th className="text-left p-4 text-white font-semibold rounded-tl-xl" style={{ width: "22%" }}>項目</th>
                  <th className="text-left p-4 text-white font-semibold" style={{ width: "30%", color: "#c9922a" }}>国公立医学部</th>
                  <th className="text-left p-4 text-white font-semibold rounded-tr-xl" style={{ width: "48%" }}>私立医学部</th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor: i % 2 === 0 ? "#f7f5f0" : "#ffffff",
                      borderBottom: "1px solid #e5e1d8",
                    }}
                  >
                    <td className="p-4 font-semibold" style={{ color: "#0c1a33" }}>{row.label}</td>
                    <td className="p-4" style={{ color: "#3d3d3d" }}>{row.national}</td>
                    <td className="p-4" style={{ color: "#3d3d3d" }}>
                      {row.private}
                      <br />
                      <span className="text-xs" style={{ color: "#9ca3af" }}>{row.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-4"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            私立医学部の学費比較（主な大学）
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            6年間の合計学費の目安。入学金・施設費なども含む総額ベースの概算です。
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {typicalPrivateSchools.map((school, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <p
                  className="font-bold text-base mb-1"
                  style={{ color: "#0c1a33" }}
                >
                  {school.name}
                </p>
                <p
                  className="font-bold text-lg mb-3"
                  style={{ color: "#c9922a" }}
                >
                  {school.tuition}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>
                  {school.note}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-6" style={{ color: "#9ca3af" }}>
            学費は年度によって変更される場合があります。最新情報は各大学の公式サイトでご確認ください。
          </p>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            カリキュラム・環境の違い
          </h2>
          <div className="space-y-6">
            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
            >
              <p
                className="font-bold text-base mb-3"
                style={{ color: "#0c1a33" }}
              >
                国公立医学部の特徴
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                旧帝大を中心に研究実績が豊富で、基礎医学・研究医を目指す人には魅力的な環境が整っています。地方大学であっても附属病院の規模が大きく、多様な症例を経験できます。学費が低いため経済的な余裕が生まれ、留学や研究活動に充てやすい点も特長です。
              </p>
            </div>
            <div
              className="p-8 rounded-2xl"
              style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
            >
              <p
                className="font-bold text-base mb-3"
                style={{ color: "#0c1a33" }}
              >
                私立医学部の特徴
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                都市部に多いため、実習先や卒後の就職先として都内・大都市圏の病院にアクセスしやすい傾向があります。少人数制で面倒見が良い大学も多く、国家試験合格率が高い大学もあります。大学ごとに個性があり、入試の傾向や面接の雰囲気も異なるため、自分に合った大学を選びやすいことも利点です。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            タイプ別：どちらを選ぶべきか
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {typeAdvice.map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white"
                style={{ border: "2px solid #e5e1d8" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-base"
                    style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                  >
                    {item.icon}
                  </span>
                  <p
                    className="font-bold text-base"
                    style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
                  >
                    {item.type}
                  </p>
                </div>
                <ul className="space-y-3">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                        style={{ backgroundColor: "#f7f5f0", color: "#c9922a" }}
                      >
                        {j + 1}
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}
          >
            どちらか迷っているなら、両方を視野に入れた戦略を
          </h2>
          <div
            className="p-8 rounded-2xl"
            style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
          >
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#3d3d3d" }}
            >
              実は、国公立と私立の両方を受験する戦略も有効です。共通テストを受けつつ私立も並行して対策することで、受験のチャンスを増やすことができます。ただし科目数が増えるため、スケジュール管理と優先順位の設計が重要になります。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              どちらを軸にするか、またどの大学を受験するかは、現在の学力・残り時間・家庭の状況によって最適解が変わります。Medvanceでは一人ひとりの状況をヒアリングしたうえで、受験校の設計もサポートしています。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div
          className="max-w-3xl mx-auto rounded-2xl p-8 text-center"
          style={{ backgroundColor: "#0c1a33" }}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c9922a" }}
          >
            Free Consultation
          </p>
          <h2
            className="text-xl font-bold text-white mb-3"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            国公立・私立、どちらを狙うか一緒に考えます
          </h2>
          <p
            className="text-sm mb-6"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            現在の学力と目標をもとに、最適な受験戦略を提案します。
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
