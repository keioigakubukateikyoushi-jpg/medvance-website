import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "偏差値50からでも1年で私立医学部に間に合いますか？",
    a: "可能です。ただし、全科目を満遍なく平均的に伸ばそうとする計画では物理的に時間が足りません。志望する私立医学部ごとの「極端な科目配点（例：英語と理科2科目の配点が高く、数学の配点が低いなど）」と、受験生の現在の得意科目を戦略的にマッチングさせ、15分単位の超高密度な自学自習管理によって特定科目に学習時間を集中させる必要があります。",
  },
  {
    q: "逆転合格において過去問添削はなぜ重要なのですか？",
    a: "私立医学部の試験問題は大学ごとに出題形式が異なり、独自の強い「癖（超長文読解、記述量、極限計算など）」があります。単に赤本を解くだけでは、自分の記述答案の減点原因や論理プロセスの誤りに気づくことができません。作成した答案をLINEで送信し、即座にプロ講師から添削フィードバックを受けることで、短期間で合格最低点水準を確実に突破できるようになります。",
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
  { href: "/column/15min-schedule-strategy", title: "医学部受験を突破する『15分単位』学習計画の立て方と合格スケジュール", label: "受験戦略" },
  { href: "/column/yobiko-hybrid-strategy", title: "駿台・河合塾・東進など大手予備校と個別指導を賢く併用する「神併用」の合格戦略", label: "塾・指導" },
];

export const metadata = {
  title: "偏差値50から私立医学部に逆転合格する勉強法：年間スケジュールと科目別配点攻略 | Medvance",
  description:
    "偏差値50台・E判定から私立医学部医学科へ合格するための現実的な逆転合格ロードマップ。同じ偏差値でも合否を分ける「配点比率と科目相性のマッチング」、15分単位の圧倒的自学自習管理、過去問とLINE添削のフル活用モデルを解説します。",
  alternates: {
    canonical: "/column/private-medical-reverse-goukaku",
  },
};

export default function PrivateMedicalReverseGoukakuPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="private-medical-reverse-goukaku" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema]) }}
      />
      
      {/* Header section */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            受験戦略・逆転合格
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)", lineHeight: 1.3 }}>
            偏差値50から私立医学部に逆転合格する勉強法：年間スケジュールと科目別配点攻略
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            模試のE判定や偏差値50台から、わずか1年で私立医学部を突破する。科目相性の極限マッチングと「15分単位タスク」による圧倒的自学自習のロードマップ。
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8 shadow-xs" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              「今の模試が偏差値50台前半で、医学部なんて夢のまた夢だ」「予備校の一番下のクラスで授業についていくだけで精一杯」——。
            </p>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              一般的に、医学部受験は偏差値65以上が当たり前の世界だと言われます。しかし、それは「国公立医学部」や「私立の上位校」を満遍なく全方位で狙う場合の基準です。**科目配点が大学ごとに極端に異なり、出題される問題の癖が非常に強い「私立医学部」においては、徹底的な戦略設計と圧倒的な自学自習管理を行うことで、偏差値50台からでも短期間で逆転合格を果たすことが十分に可能です。**
            </p>
            <p className="text-sm leading-relaxed text-gray-700 font-semibold" style={{ color: "#c9922a" }}>
              本記事では、平凡な受験生が最難関の医学部進学の切符を掴むための、戦略的科目配点マッチングと「15分タスク」による自学自習管理の全貌を公開します。
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            逆転合格を果たすための「3大戦略コア」
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-gray-700">
            短期間で15以上の偏差値アップを達成し、私立医学部の合格最低点を確実に超えるための鉄則です。
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                title: "1. 均等学習を捨て、配点比率の『傾斜』をハックする",
                body: "私立医学部は、英語100点・数学100点・理科2科目200点といった配点が多く、理科の重要度が極めて高いのが特徴です。また、大学によっては数学の難易度が高すぎて誰も解けないため、結果として数学で差がつかず『英語と理科2科目の完成度』で合否が決まる大学も多数存在します。苦手な数学に時間を溶かすのをやめ、配点の高い理科や確実に得点源にできる英語に学習資源を極限集中させるのが逆転の第一歩です。",
              },
              {
                title: "2. すべての勉強時間を『15分タスク』にまで完全細分化する",
                body: "「今日は3時間数学をやる」といった大雑把な勉強計画は、集中力の低下や迷う時間を生み、実行量を低下させます。Medvanceでは、日々の計画を通学電車の15分、食事前後の15分まで含めた『15分スロット』の具体的な行動（例：この15分で重要問題集の1題を解く、次の15分で英作文のフレーズを15個暗記する等）にまで分解します。これにより勉強の着手ハードルが下がり、1日の自習量を3倍以上に引き上げます。",
              },
              {
                title: "3. 過去問演習を『解きっぱなし』にせず、LINEで即時添削を受ける",
                body: "私立医学部の過去問は、ただ丸付けをして解説を読むだけでは本質的な記述力や計算ミス防止の技術は身につきません。自分が作成した過去問答案をLINEでプロ講師や慶應医学部生のコーチ陣に直接送信し、客観的に『どのプロセスで何点引かれているか』の減点分析・添削フィードバックを受けることが、最短で合格最低点を超える鍵となります。",
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

      {/* Timeline Section */}
      <div className="py-20 px-4 bg-white border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            偏差値50からの年間「逆転合格」ロードマップ
          </h2>
          
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>【春期：基礎の完全定着（4月〜6月）】</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                焦って難しい過去問や応用問題集に手を出してはいけません。英語の基本単語・英文法、数学の数I・II・A・B・III・Cの標準公式の導入、そして理科2科目の基礎概念のインストールに徹します。この段階では、15分タスクを習慣化し、「自ら学習計画を実行できる脳」を構築します。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>【夏期：標準問題の高速処理＆理科徹底強化（7月〜8月）】</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                私立医学部の成否を分ける「理科（化学・物理・生物）」の標準問題集（例：重要問題集など）の徹底的な反復演習を行います。すべての基本計算問題を「見た瞬間に解法プロセスが頭に浮かぶ」状態まで15分スロットで回します。また、小論文や推薦入試を併願する場合は、自己分析や志望理由書の骨子作成を少しずつ並行して進めます。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>【秋期〜冬期：過去問特化＆LINE添削での得点最大化（9月〜12月）】</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                受験する可能性のある私立医学部（6〜8校）の過去問演習に入ります。解いた答案は必ずその日のうちにLINEで提出し、添削を受けます。得られたフィードバックから「自分の計算ミスのパターン」「記述答案で減点されやすい表現のズレ」を抽出し、Notionの「弱点克服データベース」に記録して徹底的に復習を重ねます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Support system details */}
      <div className="py-16 px-4 bg-[#f7f5f0]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            なぜMedvanceの学習管理で逆転合格ができるのか
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "1. 徹底した15分進捗管理",
                body: "毎日「いつ、何をすればいいか」が完全にスロット化されているため、勉強の開始に一切のエネルギーを必要とせず、勉強へのモチベーションが続かない受験生でも安定して1日10時間以上の自習を実行できます。",
              },
              {
                title: "2. プロと現役医学部生の強力タッグ",
                body: "指導に当たるのは全員が自ら難関を勝ち抜いた慶應医学部生などのプロ講師チーム。科目ごとの効率的な時間配分や、本番の緊張に打ち勝つ心境まで、受験の現場で本当に役立つ実体験に基づいたアドバイスを行います。",
              },
              {
                title: "3. Notionによる透明な学習可視化",
                body: "宿題の達成率、確認テストの結果、現在の合格可能性とのギャップがすべてNotion上で保護者の方とも共有されます。問い詰める必要がなくなり、家族全員が一丸となって合格へ向かう環境を作ります。",
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
            偏差値50からの私立医学部受験に関するよくある質問
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
        heading="偏差値50台・E判定から、今年医学部へ滑り込む戦略を作ってみませんか？"
        subtext="現在受けている模試の結果、得意・不得意科目、これまでの学習量をお聞かせください。あなたの科目相性に完全に一致した「逆転合格ポートフォリオ」と、明日から迷わず勉強を始められる15分単位の計画設計をプロ講師チームが無料で提案します。"
      />
    </div>
  );
}
