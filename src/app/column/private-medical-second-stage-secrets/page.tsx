import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";
import Image from "next/image";

const faqItems = [
  {
    q: "MMI（複数ミニ面接）とはどのような形式ですか？",
    a: "通常の1対多の個人面接とは異なり、短い時間（5〜10分程度）の面接を異なる教室で連続して受ける形式です。倫理的なジレンマ、グラフデータの読み取り、突発的なコミュニケーション能力などが試されます。模範解答を用意して暗記する対策では通用せず、その場で『論理的かつ誠実に思考を開示する』訓練が必要です。",
  },
  {
    q: "小論文で一発不合格を避けるためにはどうすればよいですか？",
    a: "医学部の小論文では、高度な文才や独創的なアイデアは必要ありません。求められるのは『設問指示への厳密な準拠』『客観的で論理的な段落構成』『医師としての倫理観からの逸脱がないこと』の3点です。これらが満たされていないと、一発で不合格判定（足切り）になるケースがあります。プロによる事前添削が必須です。",
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
  { href: "/column/mensetu", title: "医学部面接対策の完全ガイド：よく聞かれる質問と回答例、MMI対策まで", label: "入試対策" },
  { href: "/column/suisen-sogotai-strategy", title: "医学部推薦入試（学校推薦型・総合型選抜）の合格戦略と対策スケジュール", label: "入試対策" },
  { href: "/column/private-medical-heigan-strategy", title: "私立医学部の賢い併願パターンと滑り止め校の選び方：連続受験の限界と出願日程設計", label: "受験戦略" },
];

export const metadata = {
  title: "私立医学部2次試験「面接・MMI・小論文」過去問と減点回避の秘密：採点官が見ている境界線 | Medvance",
  description:
    "合否の最終決定打となる私立医学部2次試験の徹底解剖。慈恵・順天堂などのMMI（複数ミニ面接）での高評価の立ち回り、小論文で一発不合格（足切り）を喰らわないための答案構成ルールを公開します。",
  alternates: {
    canonical: "/column/private-medical-second-stage-secrets",
  },
};

export default function PrivateMedicalSecondStageSecretsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="private-medical-second-stage-secrets" articleOnly />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema]) }}
      />
      
      {/* Header section */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            入試対策・二次試験
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)", lineHeight: 1.3 }}>
            私立医学部2次試験「面接・MMI・小論文」過去問と減点回避の秘密：採点官が見ている境界線
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            1次試験の学科合格通知は、あくまでスタートライン。最終合格の合否を決定づけるのは、2次試験（面接・小論文）に潜む「採点基準」と「減点回避」のノウハウです。
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          {/* Embedding realistic trustworthy generated photo */}
          <div className="mb-10 overflow-hidden rounded-2xl border" style={{ borderColor: "#e5e1d8" }}>
            <Image 
              src="/images/generated/medical_interview_setup.png" 
              alt="医学部の面接会場・面接官とのロールプレイ模擬練習イメージ" 
              className="w-full h-auto object-cover max-h-[420px]"
              width={1024}
              height={1024}
              sizes="(min-width: 1024px) 900px, 100vw"
            />
            <p className="p-3 text-center text-xs text-gray-500 bg-white border-t" style={{ borderColor: "#e5e1d8" }}>
              医学部2次試験の面接では、医師としての資質・倫理的判断力・協調性が総合的に審査されます。
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white mb-8 shadow-xs" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              「学科試験で合格最低点を大幅に超えていたはずなのに、なぜか不合格（2次落ち）になった」——。医学部受験では、このような悲劇が珍しくありません。
            </p>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              私立医学部は、医師という「人命を預かる専門職」の養成機関であるため、学力以上に受験生の**人格、協調性、論理的コミュニケーション力、そして医師としての最低限の倫理観**を極めて厳しくチェックします。特に、近年多くの大学が導入している**MMI（複数ミニ面接）**や、テーマの難化が著しい小論文は、「予備校で作ってもらった志望理由」を暗記するだけでは一瞬で見破られ、減点、あるいは一発不合格（足切り）の対象になります。
            </p>
            <p className="text-sm leading-relaxed text-gray-700 font-semibold" style={{ color: "#c9922a" }}>
              本記事では、慈恵・順天堂などの超難関私立校で行われる2次試験の採点実態を解剖し、減点を回避して確実に合格枠に滑り込むための技術と対策を解説します。
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            通常面接 vs MMI vs 小論文：採点基準とリスク要因
          </h2>
          <p className="text-sm leading-relaxed mb-6 text-gray-700">
            2次試験で課される各評価方法の違いと、受験生が最も注意すべき不合格（足切り・大幅減点）リスクを一覧に整理しました。
          </p>

          <div className="overflow-x-auto rounded-lg mb-10" style={{ border: "1px solid #e5e1d8" }}>
            <table className="w-full min-w-[550px] border-collapse text-sm">
              <thead style={{ backgroundColor: "#f7f5f0" }}>
                <tr>
                  {["試験形式", "主な出題校", "評価項目（何を見ているか）", "一発不合格・減点リスク"].map((head) => (
                    <th key={head} className="px-4 py-3 text-left font-bold" style={{ color: "#0c1a33", borderBottom: "1px solid #e5e1d8" }}>
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["個人面接（通常）", "慶應・日医・関西医科など多数", "医師志望動機、調査書の内容、課外活動の主体性", "「親に言われたから」等の受動的動機、不誠実な嘘"],
                  ["MMI（複数ミニ面接）", "東京慈恵・順天堂・昭和・東邦など", "倫理的ジレンマの判断、グラフ分析、対人コミュ力", "独善的な主張、極端な倫理欠如、対話の拒絶"],
                  ["小論文", "順天堂・慶應・昭和・慈恵など", "論理的な構成力、現代社会・医療課題への理解", "設問指示の無視、倫理観の逸脱、時間内の未完成"],
                ].map((row, idx) => (
                  <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "#ffffff" : "#fdfcfb" }}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className="px-4 py-3 leading-relaxed" style={{ color: cellIdx === 0 ? "#0c1a33" : "#5f6b7a", fontWeight: cellIdx === 0 ? 700 : 400, borderBottom: "1px solid #eee9df" }}>
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

      {/* Warning and Strategy Section */}
      <div className="py-20 px-4 bg-white border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            MMI（複数ミニ面接）における採点官の視点と減点回避の技術
          </h2>
          
          <p className="text-sm leading-relaxed mb-6 text-gray-700">
            MMIは、短い制限時間内に異なる課題（シナリオ）に取り組み、複数の面接官から多面的に採点されるシステムです。「模範解答」が存在しない課題も多いため、いかに**「自分の思考プロセスを論理的かつ謙虚に言語化できるか」**が問われます。
          </p>

          <div className="space-y-6 mb-12">
            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h4 className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>
                💡 減点回避の立ち回り 01：他者の立場・視点への配慮を必ず示す
              </h4>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                MMIでよく出題される「倫理的ジレンマ（例：リソースが限られた状況での治療順位）」では、どちらか一方の主張だけを正当化するのは減点対象です。「確かにAさんの〜という立場も理解できますが、医師としての公共性や安全性を考慮すると…」といったように、**「対立する複数の視点をすべて考慮した上で、最も理性的な合意形成を模索するプロセス」**を示すことが、高得点につながります。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h4 className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>
                💡 減点回避の立ち回り 02：想定外の質問に対しても「傾聴と誠実な修正」を行う
              </h4>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                MMIでは、面接官が意図的にあなたの主張を否定したり、反論したりするブースがあります。これは「対立耐性」や「柔軟性」を見るためのテストです。感情的になって反論したり、頑なに自説に固執したりすると致命的な減点となります。「ご指摘の通り、その観点が抜けておりました。その条件を加味すると…」と、**「他者の意見を素直に取り入れ、自説を論理的にアップデートできる柔軟性」**を示しましょう。
              </p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            小論文で「足切り（一発不合格）」を喰らわないための3大原則
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-center text-gray-700">
            医学部の小論文で不合格になる最大の理由は、文才の有無ではなく、ルール違反による減点です。
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#fffcf5] border" style={{ borderColor: "#f3e8c9" }}>
              <h4 className="font-bold text-base mb-2" style={{ color: "#b7791f" }}>
                原則 01. 設問の指示にミリ単位で完全従属する
              </h4>
              <p className="text-xs md:text-sm leading-relaxed text-gray-700">
                「筆者の主張を要約した上で、あなたの意見を述べよ」と指示されている場合、要約が抜けていたり、要約と自身の意見の配分が崩れていたりするだけで、小論文の採点は一律で低評価に落とされます。問われている論点に、ストレートに回答することが最も重要です。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fffcf5] border" style={{ borderColor: "#f3e8c9" }}>
              <h4 className="font-bold text-base mb-2" style={{ color: "#b7791f" }}>
                原則 02. PREP法（主張・理由・具体例・主張）の段落テンプレートで書く
              </h4>
              <p className="text-xs md:text-sm leading-relaxed text-gray-700">
                独自の奇抜なアイデアや文学的表現は一切必要ありません。むしろ客観性を疑われます。「結論（主張）→その理由→具体的な根拠・医療データ→再結論」という、採点官が一目で「論理的だ」と判断できる極めてオーソドックスな構造を厳守してください。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#fffcf5] border" style={{ borderColor: "#f3e8c9" }}>
              <h4 className="font-bold text-base mb-2" style={{ color: "#b7791f" }}>
                原則 03. 医師にふさわしい最低限のプロフェッショナリズム・倫理観を崩さない
              </h4>
              <p className="text-xs md:text-sm leading-relaxed text-gray-700">
                例えば、安楽死や生殖医療などのテーマにおいて、「個人の権利だから完全に自由化すべきだ」といった極端な意見を何の配慮もなく主張すると、医療倫理の観点から深刻な懸念を持たれ、一発で不合格（足切り）にされるリスクがあります。常に多面的な課題が存在することを認める謙虚な筆致を意識しましょう。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Medvance Solution Section */}
      <div className="py-20 px-4 bg-[#f7f5f0] border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvance式・2次試験（面接小論文）マンツーマン必勝伴走
          </h2>
          <p className="text-sm leading-relaxed mb-10 text-center text-gray-700">
            面接や小論文は、「自習だけでは絶対に改善できない」領域です。Medvanceでは、学科試験対策と並行して、以下の2次試験専門カリキュラムを提供しています。
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white shadow-xs" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3 flex items-center" style={{ color: "#0c1a33" }}>
                現役医学部生によるリアルMMI模擬練習
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                実際に慈恵や順天堂の入試を突破した現役医学部生講師が、面接官役を担当して本番と全く同じシナリオでオンラインMMIを実施。表情、声のトーン、倫理的な論拠の示し方までミリ単位でフィードバックします。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-xs" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3 flex items-center" style={{ color: "#0c1a33" }}>
                LINE小論文添削・24時間返却システム
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                過去問やテーマに沿って執筆した小論文原稿を、スマートフォンで撮影してLINEで提出。構成の破綻、設問への逸脱、倫理的懸念点をプロ講師が赤ペンで詳細に添削し、24時間以内に返却します。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            2次試験（面接・小論文）に関するよくある質問
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
        heading="学科合格を最終合格にするための、あなた専用の2次試験対策プランを作りませんか？"
        subtext="「志望理由書の添削をしてほしい」「MMIの練習がしたいけれど身近に指導者がいない」とお悩みの方へ。大学別の出題傾向・採点官が重視するポイントを徹底分析した、あなただけのマンツーマン面接・小論文対策スケジュールを無料の合格戦略相談で提案いたします。"
      />
    </div>
  );
}
