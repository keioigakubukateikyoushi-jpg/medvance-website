import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "駿台や河合塾のテキストだけでは医学部合格には足りませんか？",
    a: "授業の質もテキストの網羅性も極めて高く、合格に必要な要素はすべて揃っています。問題はテキストの質ではなく、『それを何周解き直して100%暗記・再現できたか』という定着の質です。ほとんどの受験生が授業を聞くだけで満足し、テキストの半分以上を未消化にして不合格になります。",
  },
  {
    q: "無駄な『講習オプション』を提案された時、どうやって見破れば良いですか？",
    a: "『本当に自分が弱点としている極小の単元（例：化学の電解平衡のみ、数学の確率漸化式のみ）』に絞られていない、大雑把な「医学部総合英語」「直前数学」といった講座は不要です。新しい問題集や講習を追加するくらいなら、前期・後期の予備校通常テキストを白紙から完璧に再現する自習時間を確保したほうが合格率は跳ね上がります。",
  },
  {
    q: "個別指導（オンライン）を併用すると逆に忙しくなりませんか？",
    a: "新しい宿題を増やす個別指導であれば忙しくなり、破綻します。Medvanceの併用指導では、独自の宿題を大量に出すのではなく、『予備校の授業後の復習スケジュール（15分単位）』を管理し、その予備校テキストの問題が本当に解けるかをテスト・添削することに時間を使うため、むしろ学習効率が上がって時間に余裕が生まれます。",
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
  { href: "/column/15min-schedule-strategy", title: "医学部受験を突破する『15分単位』学習計画の立て方と合格スケジュール", label: "受験戦略" },
  { href: "/column/juku-erabi", title: "医学部受験の塾・予備校の選び方：大手・専門塾の比較", label: "塾・指導" },
  { href: "/for/prep-school-plus", title: "大手予備校と併用したい方向けの合格戦略プログラム", label: "サービス案内" },
];

export const metadata = {
  title: "駿台・河合塾・東進など大手予備校と個別指導を賢く併用する「神併用」の合格戦略",
  description:
    "駿台・河合塾・東進などの大手予備校に通う医学部志望生へ。授業の消化不良を防ぐ復習管理、無駄な夏期・冬期オプション講習の削り方、1対1による徹底的な週次復習添削モデルを現役慶應医学部生が解説。",
  alternates: {
    canonical: "/column/yobiko-hybrid-strategy",
  },
};

export default function YobikoHybridStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="yobiko-hybrid-strategy" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema]) }}
      />
      
      {/* Header section */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            予備校併用・塾指導活用法
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)", lineHeight: 1.3 }}>
            駿台・河合塾・東進など大手予備校と個別指導を賢く併用する「神併用」の合格戦略
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            授業を増やすほど不合格へ近づく。予備校の一流テキストを「完璧な定着」へ変え、無駄な講習を完全シャットアウトする最強ハイブリッドメソッド。
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8 shadow-xs" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              「駿台の最上位クラスに通っているのに、模試の判定がE判定から動かない」「東進で映像授業を大量に取っているが、確認テストだけで終わり自分の実力になっていない」——。このような、大手予備校に通う医学部受験生からご家庭への悲鳴が毎年数多く寄せられます。
            </p>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              大手予備校の授業は極めて高品質で、テキストも完璧です。しかし、一方通行の集団講義はインプットが過剰になりやすく、授業を受けただけで『満足（わかったフリ）』し、自走して解き直すアウトプット自習時間が奪われる**「授業消化不良（予備校難民）」**を発生させます。
            </p>
            <p className="text-sm leading-relaxed text-gray-700 font-semibold" style={{ color: "#c9922a" }}>
              本記事では、高額な予備校の投資を確実に「医学部合格」という果実に繋げるため、予備校のテキストを完全に血肉化する「個別指導との神併用戦略（週次の復習管理・答案添削）」を徹底的に体系化しました。
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            なぜ、予備校の一流授業を受けても不合格になるのか？
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-gray-700">
            予備校の授業に追われて破滅する「予備校難民」の多くは、以下の『不合格スパイラル』に例外なくハマっています。
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                title: "❌ インプット過剰による『アウトプット時間の完全消失』",
                body: "週に15コマ〜20コマ近くの授業を受け、自習時間はすべて『次の予備校授業の予習』だけに消える。この状態になると、過去に習った重要単元を『白紙から解き直す自習時間』がゼロになり、授業の受けっ放しから数ヶ月後に偏差値が急降下します。",
              },
              {
                title: "❌ 質問ブースの長い待ち時間と『自己解決の先送り』",
                body: "予備校の放課後、わからない問題の質問をするために質問ブースの前に1時間並ぶ。これは受験生にとって致命的な時間のドブ捨てです。結局、質問できずにわからない疑問が積み重なり、1ヶ月後の授業についていけなくなります。",
              },
              {
                title: "❌ 担任面談による『無駄なオプション講習の大量提案』",
                body: "夏期講習や冬期講習の面談で、チューターから『この講座を取らないと合格しない』と10〜15講座（何十万円分も）提案され、言われるがままに受講する。授業量がさらに倍増し、完全に自習時間が崩壊して不合格が確定します。",
              },
            ].map((reason, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{reason.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hybrid combined model */}
      <div className="py-20 px-4 bg-white border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            予備校テキストを100%完璧にする「神併用」3大ルール
          </h2>
          
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>RULE 01. 授業後48時間以内の『15分タスク復習』の徹底</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                予備校で受けた一流の講義は、脳が内容を覚えている『授業後48時間以内』に復習しなければ、思い出すのに授業と同じ時間がかかります。Medvanceでは、予備校の授業ごとに『どの問題を、いつの15分間で解き直すか』をオーダーメイドで完全設計し、毎日のLINE報告で実行を徹底します。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>RULE 02. 1回90分（2コマ分）指導による『完全再現アウトプット』</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                併用する個別指導では、新しい参考書や独自の宿題をたくさん増やすべきではありません。週に1回90分（45分×2コマ）のMedvance指導では、前半45分で予備校の疑問点を解説し、後半45分で**「本当にその問題が白紙から解けるか」のその場での完全再現テストと論理記述の添削**に充てます。「先生の解説を聞いて分かった」で終わらせません。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>RULE 03. 季節講習を最大2〜3講座に絞る『家庭の投資防衛』</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                予備校から提案される季節講習をそのまま取るのは家計的にも、受験生の合格率にとっても有害です。Medvanceは第三者の客観的なプロの立場として、受験生の本当に苦手な単元（例：数学の複素数平面、化学の熱化学方程式など）に絞り込んだ必要最小限（2〜3講座）の講習だけを厳選。余った時間は全て予備校テキストの徹底反復と、過去問記述演習に投資させます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            予備校併用に関するよくある質問
          </h2>
          <div className="space-y-4 mb-12">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="rounded-xl overflow-hidden group"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <summary
                  className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none bg-white"
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
        heading="今の予備校（集団授業・講習）が本当にあなたに効いているか、無料で診断しませんか？"
        subtext="現在受講している予備校のクラス、模試偏差値、使用テキストをお知らせください。授業の消化不良を即座に特定し、合格に必要な併用計画を完全マンツーマンで無料立案いたします。"
      />
    </div>
  );
}
