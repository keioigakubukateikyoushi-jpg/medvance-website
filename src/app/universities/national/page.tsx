import Image from "next/image";
import Link from "next/link";
import { buildBreadcrumbSchema, buildCollectionPageSchema, buildItemListSchema, buildFaqSchema } from "@/lib/seo";
import { nationalUniversityArticles } from "./data";

export const metadata = {
  title: "国公立大学医学部・防衛医科大学校の受験対策・大学一覧 | Medvance",
  description:
    "国公立大学医学部と防衛医科大学校の合格を掴むための総合受験戦略。共通テストと二次試験の配点比率タイプ別の勝ち筋、記述答案の添削指導、地域枠・推薦対策までMedvanceが徹底解説します。",
  alternates: {
    canonical: "/universities/national",
  },
};

const regionOrder = ["北海道", "東北", "関東", "甲信越", "北陸", "東海", "近畿", "中国", "四国", "九州", "沖縄"];

const faqItems = [
  {
    q: "共通テストでボーダー（85%）を下回った場合、出願先はどのように変更すべきですか？",
    a: "共通テストの自己採点後、二次の配点比率が極めて高い大学（例：山梨大学、新潟大学、東北大学など）に変更することで、二次試験の論述実力で大逆転を狙うことが可能です。Medvanceでは、自己採点データを元に全国80近い医学部から足切り予測と二次偏差値から逆転合格の可能性を即座にシミュレーションし、出願締め切りギリギリまで最善の変更戦略を策定します。",
  },
  {
    q: "国公立医学部の推薦入試や地域枠は、一般入試とどう対策が異なりますか？",
    a: "推薦や地域枠では、評定平均の確保に加えて「地域枠への明確な志望動機」「へき地医療への深い理解」を問う面接や小論文が重視されます。学力試験だけでなく、その都道府県の医師偏在の現状や地域医療構想を深く読み込み、将来のキャリアプランと大学側のニーズを言語化して一致させる必要があります。Medvanceでは各都道府県の地域医療計画の分析を踏まえた面接添削を行っています。",
  },
  {
    q: "二次試験の論述記述対策は、いつから本格的に始めるべきですか？",
    a: "共通テスト対策に追われがちですが、国公立医学部の二次記述対策は遅くとも高3の夏から開始すべきです。特に英語の自由英作文、数学の完全証明問題、理科の記述説明は、自己採点では客観的な減点基準が分かりません。Medvanceの完全マンツーマン指導では、週次で記述答案の添削を行い、「減点されない論理構成」を早期に体得させます。",
  },
];

const nationalPageSchemas = [
  buildCollectionPageSchema(
    "国公立大学医学部・防衛医科大学校の対策一覧",
    "国公立大学医学部と防衛医科大学校の対策ページを地域別に一覧し、共通テスト・二次の配点比率から記述答案の作成法まで網羅した受験戦略ページです。",
    "/universities/national",
  ),
  buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "国公立大学医学部・防衛医科大学校の対策一覧", url: "/universities/national" },
  ]),
  buildItemListSchema(
    "国公立大学医学部・防衛医科大学校の対策ページ",
    "/universities/national",
    nationalUniversityArticles.map((entry) => ({
      name: entry.name,
      url: `/universities/national/${entry.slug}`,
    })),
  ),
  buildFaqSchema(faqItems),
];

export default function NationalPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nationalPageSchemas) }}
      />
      
      {/* Hero Section */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#c9922a_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#c9922a" }}>
            National University Medical School Guide
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-noto-serif)" }}>
            国公立大学医学部・防衛医大<br className="md:hidden" />合格の合格戦略
          </h1>
          <p className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
            共通テストでの1点に泣くか、二次の記述記述力で大逆転を果たすか。国公立医学部受験は「圧倒的なバランス管理」と「大学ごとの配点比率を活かした戦略」が合否のすべてを決定します。
          </p>
        </div>
      </div>

      {/* Intro visual banner */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 overflow-hidden rounded-[32px] bg-white p-3" style={{ border: "1px solid #e5e1d8" }}>
            <Image
              src="/images/generated/national-guide-hero.webp"
              alt="日本地図と学習要素をモチーフにした国公立医学部一覧ページのキービジュアル"
              width={1600}
              height={1067}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="w-full h-auto rounded-[24px]"
              priority
              fetchPriority="high"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              {
                title: "01. 配点比率による志望校の厳選",
                body: "国公立医学部は、共通テスト配点比率が30%〜70%と極めて多岐にわたります。得意・不得意科目の偏りに合わせて最適な受験校を選定することが、努力を無駄にしないための大前提です。",
              },
              {
                title: "02. 共通テストの『足切り』徹底回避",
                body: "第一段階選抜（足切り）に引っかかれば二次試験を受験することすらできません。倍率のリアルタイム予測と、志願動向を踏まえたギリギリの併願マネジメントを行います。",
              },
              {
                title: "03. 減点を防ぐ『超・論述記述力』",
                body: "標準問題を取りこぼさない基礎力に加え、二次の記述試験で採点官に「減点させない論理的答案」を書ききる訓練が必須です。独学では不可能な客観的添削を週次で実施します。",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#5f6b7a" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* In-depth Strategy Content (SEO Powerhouse addition) */}
      <div className="py-20 px-4 bg-white border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            国公立医学部受験における「配点比率タイプ別」合格戦略
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-10 text-gray-700">
            国公立大学医学部は、大学によって共通テストと二次試験の配点比率が大きく異なります。ご自身の得点特性（バランス型か、特定科目特化型か）を冷静に分析し、勝ち筋の多いタイプに属する大学を出願先に選ぶ必要があります。
          </p>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
              <div className="inline-block px-3 py-1 rounded text-xs font-bold text-white mb-4" style={{ backgroundColor: "#c9922a" }}>
                TYPE A: 共通テスト重視型
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0c1a33" }}>共通テストの配点比率が高い大学</h3>
              <p className="text-xs text-gray-400 mb-4">（例：弘前大学、旭川医科大学、徳島大学、佐賀大学など）</p>
              <p className="text-sm leading-relaxed text-gray-600 mb-4">
                共通テストの得点が合否の半分以上、あるいはそれに準ずる大きな比率を占めます。1点のミスが命取りになるため、英語・数学・理科だけでなく、国語（現代文・古文・漢文）や社会（地理・日本史・倫政等）での高得点が合格必須条件となります。
              </p>
              <ul className="text-xs space-y-2 text-gray-700 font-medium">
                <li>✔ 共通テストの目標ライン：87%〜90%以上</li>
                <li>✔ 二次試験が比較的解きやすく、差がつきにくい傾向</li>
                <li>✔ 全教科の完成度を徹底的に高める学習設計が有効</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
              <div className="inline-block px-3 py-1 rounded text-xs font-bold text-white mb-4" style={{ backgroundColor: "#0c1a33" }}>
                TYPE B: 二次記述重視型
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0c1a33" }}>二次試験の配点比率が高い大学</h3>
              <p className="text-xs text-gray-400 mb-4">（例：東京大学、京都大学、千葉大学、名古屋大学、山梨大学など）</p>
              <p className="text-sm leading-relaxed text-gray-600 mb-4">
                一次試験（共通テスト）の配点を圧縮し、二次記述試験（英数理）の実力差で一気に合格者を決めます。共通テストで多少失敗したとしても、二次の記述で大きな論理答案を紡ぎ出すことで大逆転が可能です。
              </p>
              <ul className="text-xs space-y-2 text-gray-700 font-medium">
                <li>✔ 二次記述試験の難易度が高く、高度な記述論証が要求される</li>
                <li>✔ 自己採点が難しい数学の完全論証・英作文・実験考察問題が中心</li>
                <li>✔ 早期から質の高い個別添削を受け、減点を防ぐ答案力を磨くことが鍵</li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-2xl text-center mb-8" style={{ border: "2px dashed #c9922a", backgroundColor: "rgba(201,146,42,0.04)" }}>
            <h4 className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>
              【重要】国公立医学部と「私立医学部」の併用戦略
            </h4>
            <p className="text-xs md:text-sm leading-relaxed text-gray-600 mb-4">
              国公立本命の受験生であっても、私立医学部の試験日程や科目の相性（特に数学の記述量や英語の長文難易度）を分析して併願校を精査することで、本命試験に向けた「最大のメンタル安定」と「実践慣れ」を両立させることができます。
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/universities/private" className="text-xs font-bold transition-colors hover:underline" style={{ color: "#c9922a" }}>
                私立医学部の併願戦略を見る →
              </Link>
              <Link href="/for/prep-school-plus" className="text-xs font-bold transition-colors hover:underline" style={{ color: "#c9922a" }}>
                大手予備校との併用パターンを見る →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* School Directory section */}
      <div className="py-20 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>
                All National & Defense Medical Schools
              </p>
              <h2 className="text-2xl md:text-4xl font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                全大学の入試傾向・対策一覧
              </h2>
              <p className="text-sm mt-2 text-gray-500">
                全国の国公立医学部および防衛医科大学校の、エリア別対策情報です。
              </p>
            </div>
            
            <form action="/search" className="flex gap-2 w-full md:w-auto md:min-w-[380px]">
              <input
                type="text"
                name="q"
                placeholder="例: 東大 / 東北 / 千葉 / 防衛医科"
                className="flex-1 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#c9922a]"
                style={{ border: "1px solid #d6d1c7", color: "#0c1a33", backgroundColor: "#fff" }}
              />
              <button
                type="submit"
                className="rounded-xl px-6 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity whitespace-nowrap"
                style={{ backgroundColor: "#0c1a33" }}
              >
                大学別対策を検索
              </button>
            </form>
          </div>

          <div className="space-y-12">
            {regionOrder.map((region) => {
              const schools = nationalUniversityArticles.filter((entry) => entry.region === region);

              if (schools.length === 0) {
                return null;
              }

              return (
                <section key={region} className="bg-white p-6 md:p-8 rounded-[24px]" style={{ border: "1px solid #e5e1d8" }}>
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-lg font-bold min-w-fit px-4 py-1 rounded" style={{ backgroundColor: "#0c1a33", color: "#white" }}>
                      <span className="text-white">{region}エリア</span>
                    </h3>
                    <div className="h-px flex-1" style={{ backgroundColor: "#e5e1d8" }} />
                  </div>
                  
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {schools.map((entry) => (
                      <Link
                        key={entry.slug}
                        href={`/universities/national/${entry.slug}`}
                        className="rounded-2xl bg-white p-6 hover:-translate-y-1 hover:shadow-md transition-all flex flex-col justify-between"
                        style={{ border: "1px solid #e5e1d8", backgroundColor: "#fcfbf9" }}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-3 mb-4">
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: "rgba(201,146,42,0.12)", color: "#c9922a" }}
                            >
                              {entry.category}
                            </span>
                            <span className="text-xs" style={{ color: "#9ca3af" }}>{entry.area}キャンパス</span>
                          </div>
                          <h4 className="font-bold text-lg mb-3" style={{ color: "#0c1a33" }}>
                            {entry.name}
                          </h4>
                          <p className="text-xs leading-relaxed mb-4 text-gray-500">
                            {entry.summary}
                          </p>
                        </div>
                        
                        <div className="pt-3 border-t border-dashed" style={{ borderColor: "#e5e1d8" }}>
                          <p className="text-[11px] font-bold text-gray-700">
                            🎯 向いている志望者：
                          </p>
                          <p className="text-xs leading-relaxed mt-1" style={{ color: "#c9922a", fontStyle: "normal" }}>
                            {entry.fit}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-4 bg-white border-t" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <p className="mb-3 text-center text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>FAQ</p>
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            国公立医学部受験のよくある質問
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="mb-3 text-sm md:text-base font-bold flex gap-2" style={{ color: "#0c1a33" }}>
                  <span style={{ color: "#c9922a" }}>Q.</span> {item.q}
                </p>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600 flex gap-2 pl-1 border-t pt-3 border-dashed" style={{ borderColor: "#d6d1c7" }}>
                  <span className="font-bold" style={{ color: "#0c1a33" }}>A.</span> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4 text-white relative overflow-hidden" style={{ backgroundColor: "#0c1a33" }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#c9922a_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Medvance Medical Strategy Diagnosis
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            あなたの現状と志望校の「配点ギャップ」を埋めます
          </h2>
          <p className="text-xs md:text-sm mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.72)" }}>
            模試偏差値、科目別の弱点、共通テストの得点シミュレーションを踏まえ、どの国公立医学部であれば最短かつ確実に合格可能性を引き上げられるか、1対1で完全診断いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?from=national-universities"
              className="inline-block px-8 py-4 text-white font-bold text-sm rounded-lg shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
            >
              無料の医学部合格戦略診断に申し込む
            </Link>
            <Link
              href="/for/not-group-school"
              className="inline-block px-8 py-4 text-white font-bold text-sm rounded-lg hover:bg-white/10 transition-colors border border-white/20"
            >
              集団塾が合わないと感じる方へ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
