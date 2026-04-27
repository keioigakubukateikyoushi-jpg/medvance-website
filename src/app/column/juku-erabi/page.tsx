import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";
import { buildHowToSchema } from "@/lib/seo";

const faqItems = [
  {
    q: "医学部受験に大手予備校と個別指導塾、どちらがいいですか？",
    a: "志望校・現状の学力・費用の三点から判断するのが最善です。基礎が固まっていない場合は個別指導で弱点を潰すほうが効率的です。大手予備校の集団授業は優秀な講師の授業を安く受けられる反面、自分のペースに合わせられない点がデメリットです。両者を組み合わせる受験生も多くいます。",
  },
  {
    q: "医学部専門塾と一般的な医学部コースの違いは何ですか？",
    a: "医学部専門塾は医学部受験に特化した指導・情報・面接対策が充実している点が最大の違いです。一般的な大手予備校の医学部コースは、医学部受験に特化した指導というより「理系上位大学コース」の延長線上にある場合が多く、医学部特有の面接・小論文・学校別傾向への対応が手薄なことがあります。",
  },
  {
    q: "医学部受験の塾選びで一番重要なポイントは何ですか？",
    a: "「指導者が医学部受験の実態を知っているか」が最重要です。特に面接対策・志望校別の傾向分析・医学部特有の入試情報（MMIや小論文テーマ）については、実際に医学部に在籍しているか、医学部受験を突破した人間が指導する塾・家庭教師が圧倒的に有利です。",
  },
  {
    q: "医学部受験の塾代は年間いくらかかりますか？",
    a: "大手予備校の医学部コースは年間80〜150万円程度が一般的です。個別指導塾や家庭教師は1コマあたりの単価は高めですが、必要な科目・コマ数だけ取れるため総費用を抑えられる場合もあります。Medvanceでは月額8〜32万円（コマ数により異なる）で授業＋コーチングを提供しています。",
  },
  {
    q: "オンライン指導と対面指導どちらが医学部受験に向いていますか？",
    a: "学習効果に大きな差はありませんが、自己管理が得意でない場合は対面のほうが集中しやすい傾向があります。オンラインは全国どこからでも受講でき、移動時間を節約できるメリットがあります。最近は高品質なオンライン指導が増えており、医学部合格者もオンラインのみで学習したケースが多数あります。",
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

const howToSchema = buildHowToSchema({
  name: "医学部受験の塾・予備校を失敗なく選ぶ手順",
  description:
    "大手予備校・個別指導・医学部専門塾・家庭教師から自分に合う選択肢を選ぶための5ステップ。",
  path: "/column/juku-erabi",
  steps: [
    {
      name: "現状の学力と志望校のギャップを整理する",
      text: "現在の模試偏差値・苦手科目・志望校の難易度を書き出し、合格までに埋めるべき差を定量化する。差の大きさで必要な指導スタイルが変わる。",
    },
    {
      name: "指導形式を比較する",
      text: "大手予備校（集団）・個別指導塾・医学部専門塾・家庭教師それぞれの長所短所を自分の状況に当てはめて評価する。基礎が弱い場合は個別系が有利。",
    },
    {
      name: "医学部受験の実態を知る指導者かを確認する",
      text: "MMI・小論文・学校別傾向など医学部固有の入試知識があるかを面談で確認。現役医学部生または医学部受験突破者が指導するかをチェック。",
    },
    {
      name: "無料相談と体験授業を利用する",
      text: "契約前に無料相談・体験授業を必ず受ける。相性・指導品質・コーチングの具体性を自分で確かめる。急かす塾は避ける。",
    },
    {
      name: "費用対効果で最終判断する",
      text: "年間総額だけでなく、必要な科目・時間・オプションを含めた実質コストで比較。安さで選ばず、合格から逆算した最短ルートが最安という視点で判断する。",
    },
  ],
});

const relatedArticles = [
  { href: "/column/study-method", title: "医学部合格のための正しい勉強法", label: "勉強法" },
  { href: "/column/roadmap", title: "医学部受験ロードマップ：いつから・何をすべきか", label: "受験戦略" },
  { href: "/column/difference", title: "医学部に受かる人・落ちる人の違い", label: "合格分析" },
];

export const metadata = {
  title: "医学部受験の塾・予備校の選び方｜失敗しない選択基準を解説 | Medvance",
  description:
    "医学部受験専門塾・大手予備校・個別指導・家庭教師の違いを徹底比較。自分に合った塾を選ぶための基準と、よくある失敗パターンを現役慶應医学部生が解説します。",

  alternates: {
    canonical: "/column/juku-erabi",
  },};

const comparison = [
  {
    type: "大手予備校（集団授業）",
    pros: ["授業の質が一定水準以上", "価格が比較的安い（集団ゆえ）", "仲間と切磋琢磨できる"],
    cons: ["個人のペースに合わせられない", "質問しにくい環境", "医学部面接・小論文が手薄な場合がある"],
    best: "自己管理ができる・基礎がある程度ある生徒",
  },
  {
    type: "個別指導塾",
    pros: ["1対1〜1対2で自分のペースで進める", "弱点に集中した授業ができる", "質問しやすい環境"],
    cons: ["大手予備校より費用が高め", "講師の質にばらつきがある", "集団の雰囲気・刺激はない"],
    best: "弱点が明確・自分のペースで進めたい生徒",
  },
  {
    type: "医学部専門塾",
    pros: ["医学部受験に特化した情報・対策", "面接・小論文の専門指導", "医学部合格者の実績が豊富"],
    cons: ["費用が高い場合がある", "数が少なく地域が限られることも"],
    best: "医学部一本に絞って戦略的に進めたい生徒",
  },
  {
    type: "家庭教師",
    pros: ["完全1対1で最も個別対応できる", "自宅・オンラインで学べる", "講師を自由に選べる"],
    cons: ["講師の質の見極めが必要", "自己管理力が求められる"],
    best: "完全個別対応・フレキシブルなスケジュールを求める生徒",
  },
];

const checkPoints = [
  {
    num: "01",
    title: "指導者が医学部受験の実態を知っているか",
    body: "医学部受験は「上位理系」とは全く異なる戦略が必要です。共通テストの配点設計・私立医学部特有の小論文テーマ・MMI面接など、医学部固有の入試を知らない講師に指導を任せることはリスクです。現役医学部生または医学部受験を突破した人間が指導してくれるかを確認しましょう。",
  },
  {
    num: "02",
    title: "コーチング（学習管理）が含まれているか",
    body: "授業だけ受けていても成績が伸びない受験生は多くいます。授業と授業の間に「何を・どのくらい・どの順番で勉強するか」を管理してもらえるかが合否を分けます。コーチングや進捗管理が含まれているかを必ず確認しましょう。",
  },
  {
    num: "03",
    title: "面接・小論文対策が充実しているか",
    body: "医学部入試では面接・小論文の配点が無視できません。特に私立上位校（慶應・慈恵など）では面接が合否に直結します。「筆記試験対策だけ」の塾では、試験直前に面接・小論文で詰まるリスクがあります。",
  },
  {
    num: "04",
    title: "志望校別の対策ができるか",
    body: "慶應・慈恵・順天堂・日医など、医学部はそれぞれ出題傾向が大きく異なります。「医学部全般」ではなく「あなたの志望校」に特化した情報と対策が提供されるかを確認しましょう。",
  },
  {
    num: "05",
    title: "無料相談・体験授業があるか",
    body: "入塾前に無料相談や体験授業を設けている塾・家庭教師サービスは信頼の証です。実際に話してみて「この人に任せられる」と感じるかどうかが、最終的には最も重要な判断基準です。",
  },
];

const mistakes = [
  {
    title: "有名だから・大きいからで決める",
    body: "ブランド力は重要ですが、「大手だから安心」は危険な思い込みです。医学部受験に特化した指導を受けられるかが最優先です。名前の知らない塾でも、医学部合格実績が豊富で1対1で丁寧に指導してもらえる環境が理想です。",
  },
  {
    title: "体験もせず即入塾を決める",
    body: "塾選びは「相性」が非常に重要です。どれだけ評判が良くても、自分と合わない場合は効果が半減します。必ず無料相談・体験授業を利用してから判断しましょう。",
  },
  {
    title: "費用だけで比較する",
    body: "安さで選ぶのはリスクです。医学部受験に不向きな指導を安く受け続けるより、質の高い指導を適切な量受けるほうが合格への近道です。費用対効果を正確に評価することが大切です。",
  },
];

export default function JukuErabiPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="juku-erabi" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部受験の塾・予備校の選び方
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            失敗しない塾選びの基準を現役慶應医学部生が解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「どの塾・予備校を選ぶか」は、医学部受験の合否に大きな影響を与えます。しかし、塾の数は多く、それぞれが「医学部合格実績◯名」をアピールしており、何を基準に選べばいいか分からないという相談をよく受けます。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              このページでは、大手予備校・個別指導塾・医学部専門塾・家庭教師の特徴を比較しながら、自分に合った選択肢を選ぶための具体的な判断基準を解説します。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              「どれが正解」という答えはありません。あなたの現状・志望校・費用の状況によって、最適な選択は変わります。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            塾・指導形式の種類と比較
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {comparison.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-4" style={{ color: "#0c1a33" }}>{item.type}</p>
                <div className="mb-3">
                  <p className="text-xs font-semibold mb-2" style={{ color: "#c9922a" }}>メリット</p>
                  <ul className="space-y-1">
                    {item.pros.map((p, j) => (
                      <li key={j} className="text-xs flex gap-2" style={{ color: "#3d3d3d" }}>
                        <span style={{ color: "#c9922a" }}>◎</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-semibold mb-2" style={{ color: "#6b7280" }}>デメリット</p>
                  <ul className="space-y-1">
                    {item.cons.map((c, j) => (
                      <li key={j} className="text-xs flex gap-2" style={{ color: "#6b7280" }}>
                        <span>△</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3" style={{ borderTop: "1px solid #e5e1d8" }}>
                  <p className="text-xs font-semibold" style={{ color: "#0c1a33" }}>向いている受験生</p>
                  <p className="text-xs mt-1" style={{ color: "#6b7280" }}>{item.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            塾を選ぶ前に確認すべき5つのポイント
          </h2>
          <p className="text-sm mb-10" style={{ color: "#6b7280" }}>
            「良い塾かどうか」より「自分に合っているか」を見極めることが重要です。以下のチェックポイントを参考にしてください。
          </p>
          <div className="space-y-4">
            {checkPoints.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold flex-shrink-0" style={{ color: "#c9922a" }}>{item.num}</span>
                  <div>
                    <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            よくある塾選びの失敗パターン
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mistakes.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>NG {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            よくある質問
          </h2>
          <div className="space-y-4 mb-12">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="rounded-xl overflow-hidden"
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
        heading="Medvanceは「現役医学部生×完全1対1」の医学部専門塾です"
        subtext="塾選びに迷ったら、まずは無料相談でお気軽にご相談ください。あなたの状況に合った学習プランをご提案します。"
      />
    </div>
  );
}
