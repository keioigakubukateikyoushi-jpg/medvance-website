import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "親が過干渉になってしまい、子供と喧嘩が絶えません。どうすれば良いですか？",
    a: "親が「勉強しなさい」「今日の勉強計画は終わったの？」と直接進捗を問い詰めると、受験生は強い反発を覚えます。進捗管理や指導といった『悪役・管理役』はすべてMedvanceなどの外部のプロに一任し、親は家庭での居心地の良さや食事・健康管理といった『安全基地』に徹するのが最も効果的です。",
  },
  {
    q: "受験勉強の進み具合が全く見えず不安です。親として把握しておくべきですか？",
    a: "子供に直接聞くのではなく、客観的な報告システムを通じて状況を把握すべきです。Medvanceでは、毎週の確認テスト結果や15分単位の学習進捗、授業ごとの理解度をまとめた詳細レポートを保護者の皆様に共有しています。これにより、家庭内の無用な衝突を避けながら、受験生の現在地を完全に把握できます。",
  },
  {
    q: "志望校選びで子供と意見が対立した時、親はどう意見を伝えるべきですか？",
    a: "親御さんが「学費が高いから私立はダメ」「偏差値が高いからこの国立にしなさい」と一方的に押し付けると、子供は心を閉ざしてしまいます。まずはお互いの前提（経済的な上限、子供のやりたい専門医療など）を整理し、客観的な偏差値や過去問の相性、出願戦略については、Medvanceの合格診断などの第三者の専門的な見解を挟むことを強く推奨します。",
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
  { href: "/column/gakuhi", title: "医学部の学費・費用を徹底比較：私立・国公立の6年間費用一覧", label: "大学選び" },
  { href: "/for/parents", title: "保護者の方へ：定期報告・三者面談と学習管理サポート体制", label: "サービス案内" },
];

export const metadata = {
  title: "医学部受験における『親の役割』と『保護者のかかわり方』：合格・不合格を分ける境界線",
  description:
    "「過干渉で子供と喧嘩してしまう」「何もしないと不安」といった医学部受験生の親御さんへ。医学部受験を成功に導く親の適切な関わり方、LINEによる進捗管理の共有方法、面接・志望理由書の親子連携、家庭でできるメンタルケアを現役慶應医学部生が解説。",
  alternates: {
    canonical: "/column/parents-support-strategy",
  },
};

export default function ParentsSupportStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="parents-support-strategy" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema]) }}
      />
      
      {/* Header section */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            受験戦略・保護者支援
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)", lineHeight: 1.3 }}>
            医学部受験における『親の役割』と『保護者のかかわり方』：合格・不合格を分ける境界線
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            過干渉でも無関心でもない。「悪役（指導・進捗管理）」を外部に預け、家庭内を「安全基地」にするための家族の医学部受験戦略。
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8 shadow-xs" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              「子供が自室に引きこもって何を勉強しているか分からず不安」「勉強の進み具合を聞くと不機嫌になり、最後は怒鳴り合いの喧嘩になる」——。これは、医学部受験を控える多くのご家庭で、毎日繰り返されている光景です。
            </p>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              医学部受験の難易度はかつてないほど高騰しており、プレッシャーに押しつぶされそうな受験生と、数千万単位の学費負担や子供の将来を心配する保護者の双方に、強いストレスがかかります。しかし、**親の焦りから生じる「過干渉（指示・監視）」は、受験生のパフォーマンスを著しく低下させ、不合格を引き起こす最大の要因になり得ます。**
            </p>
            <p className="text-sm leading-relaxed text-gray-700 font-semibold" style={{ color: "#c9922a" }}>
              本記事では、親子関係の崩壊による不合格を回避し、家庭を「最強の合格サポート環境」に変えるための、保護者の正しい立ち位置とかかわり方の極意を解説します。
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            親の焦りが引き起こす「不合格スパイラル」の罠
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-gray-700">
            良かれと思ってかけた言葉や行動が、受験生の脳を萎縮させ、学習効率を下げてしまう典型例が以下の3つです。
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                title: "❌ 進捗の問い詰めによる『脳の防衛モード化』",
                body: "「今日の計画は進んだの？」「模試の判定がこれでは間に合わないよ」といった言葉は、受験生の脳の扁桃体を刺激し、恐怖やストレス物質（コルチゾール）を分泌させます。この状態になると、思考力や記憶力が低下し、自習室に行くフリをして遊ぶといった『隠蔽・逃避行動』が始まります。",
              },
              {
                title: "❌ 予備校選びや受験戦略への『素人の介入』",
                body: "保護者自身の受験知識（数十年前の古い常識）や、ネットの信憑性の低い噂をもとに、「この予備校に行きなさい」「志望校はここにすべき」と介入するケースです。現在の医学部受験は多様化しており、大学ごとの配点や出願資格の戦略なしには突破できません。",
              },
              {
                title: "❌ 『完璧主義の押し付け』による本番の過緊張",
                body: "「医学部に行くなら1回で合格しないとダメ」「高額な塾代を払っているのだから」といった無言のプレッシャーです。本番が近づくにつれて「落ちたら親に申し訳ない」という過度の恐怖に変わり、共通テストや二次試験の本番で頭が真っ白になる悲劇を生みます。",
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

      {/* Parents Rules */}
      <div className="py-20 px-4 bg-white border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            家庭を合格の推進力に変える「保護者3大戦略」
          </h2>
          
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>STRATEGY 01. 家庭内を徹底的に「安全基地（リラックス空間）」にする</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                受験生にとって、外の自習室や予備校は張り詰めた緊張の場です。せめて家の中だけは、勉強のことを一切聞かれず、心身を完全に休められる「安全基地」であるべきです。温かい食事の用意、十分な睡眠環境の確保、そして『どんな成績であってもあなたの価値は変わらない』という無条件の受容の姿勢が、何よりも受験生のメンタルを強く支えます。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>STRATEGY 02. 進捗管理・勉強の「悪役」はすべて外部プロにアウトソーシングする</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                「今日は10時間やったか」「確認テストで何点取ったか」といった管理・監視の役割は、親がやるべきではありません。これらはすべてMedvanceの15分単位の学習進捗設計と、毎日のLINE報告システムにお任せください。親御さんは「塾の先生に任せているから」と一歩引き、子供には「体調は大丈夫？」という労いの声かけだけに絞ることで、親子喧嘩は激減します。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>STRATEGY 03. 客観的で透明な「報告共有ライン」の構築</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                子供に状況を聞けないと親の不安が募ります。それを解消するため、Medvanceでは**保護者様への毎週の完全透明な指導レポート共有**を徹底しています。確認テストの点数、自習時間の進捗（15分計画通りに進んでいるか）、講師からの課題分析を毎週レポート化し、親御さんに直接お届けします。子供に問い詰めなくても、現在地がリアルタイムで可視化されます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Parents-specific support details */}
      <div className="py-16 px-4 bg-[#f7f5f0]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            保護者とMedvanceの連携サイクル
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-center text-gray-700">
            Medvanceでは、指導・管理をプロに任せていただくことで、ご家庭内の平穏と確実な実力向上を同時に実現します。
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "1. 毎週の指導報告書",
                body: "指導終了後、その週の学習状況、確認テストの得点率、来週の15分単位計画の実行見込みを網羅した詳細レポートをご家庭にお送りします。",
              },
              {
                title: "2. 保護者面談・三者面談",
                body: "隔月〜直前期には、志望校決定や学費計画（奨学金等）のすり合わせを含め、保護者様・生徒・当塾の三者で定期的な相談・すり合わせを行います。",
              },
              {
                title: "3. 緊急時のLINE相談窓口",
                body: "「最近子供の元気がなくて不安」「このままの計画で大丈夫か」など、親御さん単体からのLINE相談も常時受け付け、現役慶應医学部生のアドバイザーが即座に回答します。",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-xs leading-relaxed text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            医学部受験生の親のかかわり方に関するよくある質問
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
        heading="家庭内の緊張をなくし、プロの15分計画・徹底管理に任せてみませんか？"
        subtext="現在のご家庭での学習上の悩み、志望校、模試判定などをお知らせください。現在の親子間でのコミュニケーションの課題を整理し、受験生が自ら勉強し始める「学習管理・保護者連携モデル」をご提案いたします。"
      />
    </div>
  );
}
