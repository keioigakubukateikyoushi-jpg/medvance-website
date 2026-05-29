import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "私立医学部で学費が最も安い大学はどこですか？",
    a: "国際医療福祉大学医学部が6年間総額で約1,850万円と、私立医学部の中で単独トップの最安値を誇ります。次いで順天堂大学（約2,080万円）、慶應義塾大学（約2,200万円）、日本医科大学（約2,200万円）と続きます。これらの上位校は志願者数が集中し、難易度（偏差値）が極めて高いため、特別な英数対策が不可欠です。",
  },
  {
    q: "特待生制度を使うと学費はどのくらい免除されますか？",
    a: "例えば国際医療福祉大学の特待生に選ばれると、6年間の学費が最大で1,400万円減免され、実質負担額は国公立医学部（約350万円）とほぼ同等の約450万円になります。順天堂大学や慈恵医科大学でも数百万〜千数百万規模の減免制度があり、これらを目指す高得点突破の学習設計がMedvanceの強みです。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const relatedArticles = [
  { href: "/column/private-medical-scholarship", title: "私立医学部の特待生・奨学金制度をフル活用して学費を2,000万円台に抑える戦略", label: "大学選び" },
  { href: "/column/gakuhi", title: "医学部の学費・費用を徹底比較：私立・国公立の6年間費用一覧", label: "大学選び" },
  { href: "/column/private-medical-reverse-goukaku", title: "偏差値50から私立医学部に逆転合格する勉強法：年間スケジュールと科目別配点攻略", label: "受験戦略" },
];

export const metadata = {
  title: "私立医学部学費の安い順ランキングと合格最低ライン：2,000万円台で通える隠れ名門校 | Medvance",
  description:
    "私立医学部31大学の初年度＆6年総額学費の安い順ランキング。国際医療福祉・順天堂・慶應から、奨学金や地域枠を賢く使って公立並みの負担に抑えるファイナンス戦略と、合格最低ラインの突破法を現役医学部生が伝授します。",
  alternates: {
    canonical: "/column/private-medical-cheapest-ranking",
  },
};

export default function PrivateMedicalCheapestRankingPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="private-medical-cheapest-ranking" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema]) }}
      />
      
      {/* Header section */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学選び・学費戦略
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)", lineHeight: 1.3 }}>
            私立医学部学費の安い順ランキングと合格最低ライン：2,000万円台で通える隠れ名門校
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            私立医学部の学費はかつてのような「数千万円の一律高額」ではありません。2,000万円以下で通える新時代の私立医学部と、その合格合格戦略。
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          {/* Embedding realistic trustworthy generated photo */}
          <div className="mb-10 overflow-hidden rounded-2xl border" style={{ borderColor: "#e5e1d8" }}>
            <img 
              src="/images/generated/private_medical_library.png" 
              alt="東京慈恵会医科大や順天堂など名門私立医学部の図書館で勉強する医学生のイメージ" 
              className="w-full h-auto object-cover max-h-[420px]"
            />
            <p className="p-3 text-center text-xs text-gray-500 bg-white border-t" style={{ borderColor: "#e5e1d8" }}>
              名門私立医学部では、極めて充実した最新の学習施設と医療臨床環境が整っています。
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white mb-8 shadow-xs" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              「私立医学部は6年間で4,000万円以上かかるから一般家庭には無理だ」——。多くの親御さんや受験生が、そう思い込んで私立医学部の受験を選択肢から外しています。
            </p>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              しかし、現在の私立医学部は、国際医療福祉大学が1,850万円という衝撃的な安さを打ち出して以来、順天堂大学（2,080万円）、慶應義塾大学（2,200万円）、日本医科大学（2,200万円）など、**2,000万円台前半で通える「国公立並み」または「手が届く」価格帯の大学が急増しています。**さらに、各校が提供する最大1,400万円免除の「特待生制度」や、各都道府県の「地域枠・修学資金」を上手に併用することで、実質負担を国公立医学部と同等（約350万〜450万円）にまで抑え込むファイナンス設計が可能です。
            </p>
            <p className="text-sm leading-relaxed text-gray-700 font-semibold" style={{ color: "#c9922a" }}>
              本記事では、31ある私立医学部の最新学費安い順ランキングを提示し、それら「学費が安くて環境の良い名門校」の合格最低点を突破するための具体的な戦略を徹底解説します。
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            【2026年度最新】私立医学部「学費の安い順」ランキングTOP8
          </h2>
          <p className="text-sm leading-relaxed mb-6 text-gray-700">
            初年度納付金と6年間の総額費用を比較した、受験生・保護者に最も注目されているランキングです。
          </p>

          <div className="overflow-x-auto rounded-lg mb-10" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full min-w-[500px] border-collapse text-sm">
              <thead style={{ backgroundColor: "#f7f5f0" }}>
                <tr>
                  {["順位", "大学名", "初年度学費", "6年間総額学費", "合格難易度(偏差値)"].map((head) => (
                    <th key={head} className="px-4 py-3 text-left font-bold" style={{ color: "#0c1a33", borderBottom: "1px solid #e5e1d8" }}>
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["1", "国際医療福祉大学", "約450万円", "約1,850万円", "65.0〜67.5 (超難関)"],
                  ["2", "順天堂大学", "約290万円", "约2,080万円", "67.5〜70.0 (最難関)"],
                  ["3", "慶應義塾大学", "約380万円", "約2,200万円", "72.5 (最高峰)"],
                  ["4", "日本医科大学", "約450万円", "約2,200万円", "67.5〜69.0 (最難関)"],
                  ["5", "東京慈恵会医科大学", "約350万円", "約2,280万円", "70.0 (最難関)"],
                  ["6", "関西医科大学", "約290万円", "約2,100万円", "66.0〜68.0 (超難関)"],
                  ["7", "東邦大学", "約450万円", "約2,580万円", "64.0〜65.0 (難関)"],
                  ["8", "昭和大学", "約450万円", "約2,700万円", "64.5〜65.5 (難関)"],
                ].map((row, idx) => (
                  <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "#ffffff" : "#fdfcfb" }}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-4 py-3 leading-relaxed" style={{ color: cellIdx === 1 ? "#0c1a33" : "#5f6b7a", fontWeight: cellIdx === 1 ? 700 : 400, borderBottom: "1px solid #eee9df" }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Strategy Section */}
      <div className="py-20 px-4 bg-white border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            学費の安い「新・私立名門」を突破する3大合格戦略
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-center text-gray-700">
            学費が安い大学ほど、全国から国公立志望の併願層や優秀な浪人生が殺到し、競争が劇的に激化します。以下の専門特化戦略が不可欠です。
          </p>
          
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>STRATEGY 01. 国公立併願組に対抗できる『英語・長文読解』のスピード処理力</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                順天堂大や慈恵、日本医大の英語は、超長文や極めて高い語彙レベルの長文を高速で処理する必要があります。国公立併願組は記述答案作成に長けていますが、私立特有の「マーク式＋短時間制限」の戦い方では、時間配分の技術で勝負が決まります。Medvanceでは、60分または90分という試験時間を15分ずつのスロットに区切り、大問ごとの時間配分ルールを体に叩き込む訓練を行います。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>STRATEGY 02. 特待生枠を狙うための『理科2科目・徹底高得点化』</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                初年度学費が国公立と同等になる特待生制度（例：国際医療福祉大の特待生）を狙う場合、合格最低点ギリギリではなく、一般受験生の「上位数％」に入る圧倒的な成績が必要です。配点が200点（全体の半分）を占める理科2科目において、標準問題を「見た瞬間に解法が頭に浮かぶ」レベルまで仕上げることが、特待生への唯一の道です。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>STRATEGY 03. 1次合格後の2次試験（小論文・面接評価）の事前対策</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                慈恵や慶應といった超難関私立は、1次の学科試験が良くても、2次の小論文や面接（MMI）で一発不合格（足切り）にされるリスクが常に伴います。1次が終わってから2次対策を始めるのでは手遅れになります。夏〜秋にかけて、週1回15分のスキマ時間を利用して、医療倫理や志望理由、小論文の段落構成テンプレートを身につけ、LINEでの添削を重ねておくことが最終合格を決定づけます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="py-16 px-4 bg-[#f7f5f0]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            私立医学部の学費と大学選びに関するよくある質問
          </h2>
          <div className="space-y-4 mb-12">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="rounded-xl overflow-hidden group bg-white"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <summary
                  className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none"
                  style={{ color: "#0c1a33" }}
                >
                  <span>Q. {faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4" style={{ color: "#c9922a" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm leading-relaxed" style={{ color: "#4a5568", backgroundColor: "#faf9f6" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            関連記事
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block p-5 rounded-xl bg-white hover:shadow-md transition-shadow"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <span
                  className="inline-block text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full mb-3"
                  style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                >
                  {article.label}
                </span>
                <p className="text-sm font-bold leading-snug" style={{ color: "#0c1a33" }}>
                  {article.title}
                </p>
                <p className="text-xs font-semibold mt-3" style={{ color: "#c9922a" }}>
                  記事を読む →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ColumnCTA
        heading="学費を抑えながら、憧れの名門私立医学部を勝ち取る戦略を作りませんか？"
        subtext="ご家庭でのご予算の上限、現在の偏差値、得意科目をお聞かせください。特待生制度や都道府県の地域枠を上手に組み合わせた、あなた専用の「ファイナンス＆受験校併願シミュレーション」を無料の合格戦略相談で作成いたします。"
      />
    </div>
  );
}
