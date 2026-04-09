import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ArticleConsultationBox from "@/components/ArticleConsultationBox";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/seo";

export const metadata = {
  title: "医学部面接対策はいつから始めるべきか｜高1・高2・高3・浪人別に解説 | Medvance",
  description:
    "医学部面接対策はいつから始めるべきか。高1・高2・高3・浪人・再受験それぞれの始め方、自己分析・医療知識・模擬面接の進め方、大学ごとの面接形式の違いまで現役慶應医学部生が解説します。",
  alternates: {
    canonical: "/column/mensetu-timing",
  },
  openGraph: {
    title: "医学部面接対策はいつから始めるべきか｜高1・高2・高3・浪人別に解説",
    description:
      "医学部面接対策はいつから始めるべきか。高1・高2・高3・浪人・再受験それぞれの始め方、自己分析・医療知識・模擬面接の進め方、大学ごとの面接形式の違いまで解説します。",
    type: "article",
    url: "https://medvance-edu.com/column/mensetu-timing",
  },
  keywords: [
    "医学部 面接対策 いつから",
    "医学部 面接 いつから",
    "医学部 MMI いつから",
    "医学部 面接 練習 時期",
    "医学部 面接対策 高3",
  ],
};

const startSignals = [
  {
    title: "志望理由を1分で話せない",
    body:
      "『なぜ医師なのか』『なぜその大学なのか』を短く説明できないなら、着手時期です。面接対策は暗記ではなく、軸を言語化する作業なので、早く始めるほど深さが出ます。",
  },
  {
    title: "大学ごとの差をまだ把握していない",
    body:
      "個人面接なのか、MMIなのか、グループ形式なのかで準備は大きく変わります。形式と大学の特色を知らないまま秋に入ると、準備が浅くなりがちです。",
  },
  {
    title: "医療テーマに自分の意見が持てていない",
    body:
      "地域医療、終末期医療、AI医療、医師の働き方などへの考えは、一夜漬けでは深まりません。高3春〜夏のうちに論点整理を始めると、秋の模擬面接で伸びやすくなります。",
  },
];

const startGuides = [
  {
    stage: "高校1〜2年生",
    badge: "準備",
    color: "#c9922a",
    title: "答えを作るより、土台を作る時期",
    body:
      "高1・高2では、面接の模範解答を作り込む必要はありません。ただし、志望理由の種になる経験を増やし、医療に関心を持つ習慣を作っておくと、高3以降に一気に差がつきます。",
    actions: [
      "医療ニュースや書籍に月1〜2本触れる",
      "部活・ボランティア・学校行事で自分の経験を増やす",
      "『なぜ医師なのか』をノートに断片的でも書き留める",
    ],
  },
  {
    stage: "高校3年生 春〜夏",
    badge: "着手",
    color: "#3b6cb7",
    title: "自己分析と大学研究を始める時期",
    body:
      "検索意図として最も多いのは『いつから始めるべきか』ですが、結論としては高3春〜夏に着手しておくのが最も安全です。秋から慌てて始めると、学科対策と重なって準備が浅くなります。",
    actions: [
      "志望動機・自己PR・医師志望理由の骨子を作る",
      "志望校の教育方針・特色・面接形式を調べる",
      "医療倫理や時事テーマへの自分の考えを整理し始める",
    ],
  },
  {
    stage: "高校3年生 秋",
    badge: "実戦",
    color: "#0c1a33",
    title: "模擬面接を回して仕上げる時期",
    body:
      "秋以降は『考える準備』から『話す練習』へ移行します。医学部面接は内容だけでなく、話し方、視線、反応の自然さも見られます。ここからは一人で完結しない対策が必要です。",
    actions: [
      "10〜11月に模擬面接を最低3〜5回実施する",
      "想定質問に対して暗記ではなく自分の言葉で答える",
      "小論文や出願書類と整合する回答に整える",
    ],
  },
  {
    stage: "浪人・再受験",
    badge: "戦略",
    color: "#d05050",
    title: "前年との差分を早めに作る",
    body:
      "浪人・再受験では、学科だけでなく人物面の改善も大きな差になります。特に再受験生は、経歴をどう医学部受験につなげるかを早めに整理しておく必要があります。春から骨子を作り、秋に洗練させる進め方が有効です。",
    actions: [
      "去年の面接で弱かった点を言語化する",
      "経歴や浪人経験を前向きに説明できる構成を作る",
      "年齢・再受験理由に関する質問を深掘り想定で練習する",
    ],
  },
];

const timeline = [
  {
    period: "4〜6月",
    title: "自己分析・大学研究",
    body:
      "医師志望理由、これまでの経験、自分の強みと弱みを書き出します。同時に、志望校ごとの面接形式、建学理念、附属病院の特色を調べておきます。",
  },
  {
    period: "7〜9月",
    title: "医療テーマの整理",
    body:
      "地域医療、AI医療、医師の働き方改革、高齢化社会など、頻出テーマについて『自分はどう考えるか』を短く話せるようにします。正解暗記ではなく論点整理が重要です。",
  },
  {
    period: "10〜11月",
    title: "模擬面接を複数回",
    body:
      "第三者を相手に実際に話す練習を行います。録画して見返し、内容だけでなく声量、姿勢、視線、受け答えの自然さまで確認します。",
  },
  {
    period: "出願後〜直前",
    title: "大学別に最終調整",
    body:
      "提出書類と回答の整合を確認し、大学ごとの特色に合わせて答え方を微調整します。新しい答えを増やすより、軸をぶらさないことが重要です。",
  },
];

const formatGuides = [
  {
    title: "個人面接",
    body:
      "最も一般的な形式です。志望理由、医師志望理由、高校生活、長所短所、医療テーマへの考えを深掘りされます。表面的な答えより、一貫性と人柄が見られます。",
  },
  {
    title: "MMI",
    body:
      "複数の短いステーションを回り、その場で考えて答える形式です。暗記した回答では対応しづらく、普段から論点を整理し、自分の言葉で話す訓練が必要です。",
  },
  {
    title: "グループ面接・討論",
    body:
      "自分だけが話せばよい試験ではありません。相手の発言を受けて整理する力や、場を壊さずに意見を言う姿勢まで見られます。個人面接とは別の練習が必要です。",
  },
];

const mistakes = [
  {
    title: "秋まで何もしない",
    body:
      "秋に学科対策が重くなると、面接準備は後回しになりやすいです。医師志望理由や大学理解は一夜漬けで作れないため、遅いスタートはそのまま浅い回答につながります。",
  },
  {
    title: "模範解答を丸暗記する",
    body:
      "『正しそうな答え』を暗記しても、深掘りされると崩れます。面接官が見ているのは完成された文章ではなく、本人の考え方と一貫性です。",
  },
  {
    title: "大学ごとの差を調べない",
    body:
      "MMI、個人面接、小グループ面接では必要な準備が変わります。大学の形式と特色を無視して同じ対策を流用すると、志望理由や受け答えが浅く見えます。",
  },
];

const faqItems = [
  {
    q: "医学部面接対策はいつから始めればいいですか？",
    a: "理想は高3の春〜夏です。遅くとも秋には模擬面接に入れる状態を作っておくのが安全です。高1・高2では医療への関心や経験の蓄積を意識し、高3で言語化と実戦練習に移る流れが効果的です。",
  },
  {
    q: "高3の秋から始めても間に合いますか？",
    a: "間に合うことはありますが、準備の浅さが出やすくなります。特に志望動機と大学理解は短期間で作ると抽象的になりがちです。秋から始める場合は、自己分析と模擬面接を最優先で進める必要があります。",
  },
  {
    q: "MMI対策も同じ時期から始めるべきですか？",
    a: "はい。MMIは『その場で考えて話す力』が必要なので、むしろ早めの着手が有利です。普段から医療テーマについて考える習慣を作り、秋にロールプレイで仕上げるのが理想です。",
  },
  {
    q: "面接対策は一人でもできますか？",
    a: "自己分析や回答の骨子づくりは一人でもできますが、仕上げは第三者との練習が必須です。自分では自然に話しているつもりでも、声の小ささや視線、答えの長さのズレに気づきにくいためです。",
  },
  {
    q: "再受験生はいつから面接対策を始めるべきですか？",
    a: "春から始めることを勧めます。再受験では学科対策に意識が寄りがちですが、経歴や進路変更理由をどう説明するかは早い段階から整理しておいた方が説得力が出ます。",
  },
];

const relatedArticles = [
  { href: "/column/mensetu", title: "医学部面接対策の完全ガイド", label: "入試対策" },
  { href: "/column/kakomon-timing", title: "医学部受験の過去問はいつから始めるべきか", label: "受験戦略" },
  { href: "/column/roadmap", title: "医学部受験ロードマップ：いつから・何をすべきか", label: "受験戦略" },
];

const mensetuTimingSchemas = [
  buildArticleSchema({
    headline: "医学部面接対策はいつから始めるべきか",
    description:
      "医学部面接対策はいつから始めるべきか。高1・高2・高3・浪人・再受験それぞれの始め方、自己分析・医療知識・模擬面接の進め方、大学ごとの面接形式の違いまで解説します。",
    path: "/column/mensetu-timing",
    datePublished: "2026-03-31",
    dateModified: "2026-03-31",
    articleSection: "受験戦略",
    keywords: metadata.keywords,
  }),
  buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "コラム", url: "/column" },
    { name: "医学部面接対策はいつから始めるべきか", url: "/column/mensetu-timing" },
  ]),
  buildFaqSchema(faqItems),
];

export default function MensetsuTimingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mensetuTimingSchemas) }}
      />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部面接対策はいつから始めるべきか
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            高1・高2・高3・浪人別に、始め方と仕上げ方を解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              Search Console では「医学部 面接対策 いつから」のような検索が早い段階から発生しやすく、実際に多くの受験生がこのタイミングで悩みます。学科に比べて後回しにされやすい一方で、短期間で差が出る領域でもあります。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              結論から言うと、面接対策は高3の春〜夏に着手し、秋から模擬面接で仕上げる流れが最も安全です。面接は「直前に答えを覚える試験」ではなく、志望理由と人物像を時間をかけて磨く試験だからです。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、学年別の始め方、月ごとの流れ、形式ごとの違い、やってはいけない失敗まで整理します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            こんな状態なら、面接対策はもう始めるべき
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {startSignals.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            学年・状況別の始め方
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {startGuides.map((item) => (
              <div key={item.stage} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: item.color }}>
                    {item.badge}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.stage}</p>
                    <p className="text-xs font-semibold" style={{ color: item.color }}>{item.title}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>{item.body}</p>
                <ul className="space-y-1">
                  {item.actions.map((action) => (
                    <li key={action} className="flex items-start gap-2 text-xs" style={{ color: "#3d3d3d" }}>
                      <span style={{ color: "#c9922a" }}>→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            いつから何をすべきか
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {timeline.map((item) => (
              <div key={item.period} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>{item.period}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            大学ごとに、求められる面接はかなり違う
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {formatGuides.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-4 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ArticleConsultationBox
            title="面接は、独学のまま秋に入るとズレが残りやすい領域です"
            description="面接対策は『何を答えるか』だけでなく、『どう伝わるか』まで見られます。Medvanceの無料相談では、着手時期だけでなく、志望校ごとの対策順序まで整理できます。"
            points={[
              "志望理由・医師志望理由の骨子が弱い部分を具体的に洗い出せる",
              "個人面接・MMI・グループ面接のどれに重点を置くべきか明確になる",
              "学科対策と両立できる現実的な面接スケジュールを作れる",
              "模擬面接を入れるべき時期や回数の目安まで整理できる",
            ]}
            source="column-mensetu-timing-mid"
          />
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            やってはいけない失敗
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mistakes.map((item, i) => (
              <div key={item.title} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>NG {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            面接対策で本当に差がつくポイント
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部面接で差がつくのは、立派な言葉を並べることではありません。志望理由、これまでの経験、大学理解、医療テーマへの考え方が、ひとつの人物像としてつながっているかどうかです。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              そのためには、直前に答えを暗記するより、早めに考え始めて、秋に第三者との練習で磨く方が圧倒的に有利です。時期に迷っているなら、迷っている今が着手のサインだと考えてよいです。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            よくある質問
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
          <div className="grid md:grid-cols-3 gap-4">
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
        heading="面接対策の始め方から、模擬面接まで一緒に設計します"
        subtext="志望校の形式に合わせて、いつから何を準備するかを個別に整理します。面接・小論文対策の無料相談も可能です。"
        concerns={[
          "志望理由はあるつもりだが、深掘りされると不安が残る",
          "面接形式が大学ごとに違い、何を優先すべきかわからない",
          "学科対策と面接対策をどう両立すべきか迷っている",
        ]}
        benefits={[
          "志望理由・自己PR・医師志望理由の骨子が整理できる",
          "大学別に必要な面接対策の順番と時期が明確になる",
          "模擬面接を入れるべき回数やタイミングまで相談できる",
        ]}
        source="column-mensetu-timing-bottom"
      />
    </div>
  );
}
