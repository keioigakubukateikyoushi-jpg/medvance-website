import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

const faqItems = [
  {
    q: "医学部受験のオンライン家庭教師は効果がありますか？",
    a: "十分な効果があります。医学部受験においてオンライン指導は「どこに住んでいても最高の講師に指導してもらえる」という大きなメリットがあります。映像越しでも模擬面接・小論文添削・学習管理は問題なく実施でき、対面と遜色ない効果が期待できます。",
  },
  {
    q: "オンライン医学部家庭教師の料金はいくらですか？",
    a: "現役医学部生によるオンライン指導の場合、1コマ（80〜90分）1万〜2万円が相場です。対面指導と料金が変わらないサービスがほとんどです。Medvanceでは週1回コース月8万円（授業4回＋コーチング込み）でご提供しています。",
  },
  {
    q: "地方在住でも慶應医学部生に指導してもらえますか？",
    a: "はい、Medvanceはオンラインで全国どこからでも受講できます。Zoom・Google Meetを使用し、北海道から沖縄まで対応しています。地方在住で「慶應医学部生に教わりたい」という受験生に最適なサービスです。",
  },
  {
    q: "オンラインで面接の練習はできますか？",
    a: "できます。ビデオ通話を使った模擬面接は、実際の本番に向けた練習として非常に有効です。Zoomの録画機能を活用して自分の様子を振り返ることができ、むしろ対面より客観的に自分を見られる側面もあります。",
  },
  {
    q: "オンラインで小論文の添削を受けられますか？",
    a: "できます。書いた答案を写真撮影またはPDFで送り、画面共有しながら添削を受けます。コメントをリアルタイムで入れながら解説するため、対面と変わらない質の添削が可能です。",
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
  { href: "/column/kateikyoushi", title: "医学部受験に家庭教師は効果的か？選び方と活用法", label: "家庭教師" },
  { href: "/column/keio-kateikyoushi", title: "慶應医学部の家庭教師｜現役慶應医学部生が1対1で指導", label: "慶應医学部" },
  { href: "/services/online", title: "オンライン指導について", label: "オンライン" },
];

const onlineMerits = [
  {
    title: "全国どこからでも慶應医学部生に指導してもらえる",
    body: "かつては「慶應医学部生の家庭教師は首都圏でしか受けられない」という壁がありました。オンライン指導により、北海道・九州・海外在住の受験生でも、最高水準の指導を受けられます。",
  },
  {
    title: "移動時間ゼロで効率的に学べる",
    body: "対面指導では講師の移動・交通費が発生し、スケジュール調整も複雑になります。オンラインなら指定の時間にパソコン・タブレット1台で開始でき、その分の時間を自習に充てられます。",
  },
  {
    title: "録画・録音で復習できる",
    body: "Zoomなどで授業を録画しておくことで、後から見返して復習できます。「あの説明のやり方が理解できなかった」という場合も、繰り返し確認できる環境が整います。",
  },
  {
    title: "画面共有で解説・添削がリアルタイムで完結する",
    body: "問題を画面共有しながら解説、書いた答案をカメラで映して添削——対面と同等の指導が実現できます。タブレットとペンシルを使えば、手書きで書き込みながらの指導も可能です。",
  },
  {
    title: "予備校との両立が容易",
    body: "対面指導は場所の制約から時間帯が限られますが、オンラインなら予備校の授業後・夜間・週末など柔軟に組み合わせられます。学校行事や模試前後のスケジュール調整も簡単です。",
  },
];

export const metadata = {
  title: "医学部受験のオンライン家庭教師｜全国対応・慶應医学部生が指導 | Medvance",
  description:
    "医学部受験専門のオンライン家庭教師サービス。現役慶應医学部生が全国どこからでも完全1対1で指導。面接・小論文・学習管理まで対応。無料相談受付中。",
  keywords: [
    "医学部受験 オンライン家庭教師",
    "医学部 オンライン個別指導",
    "医学部 家庭教師 オンライン",
    "慶應医学部生 オンライン 家庭教師",
    "医学部受験 オンライン 全国",
  ],
  alternates: {
    canonical: "/column/igakubu-kateikyoushi-online",
  },
};

export default function IgakubuKateikyoushiOnlinePage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>オンライン指導</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部受験のオンライン家庭教師
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が全国どこからでも完全1対1で指導
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「慶應医学部生に指導してもらいたいが、地方在住で難しい」「予備校との両立で対面の時間が取れない」——そんな受験生のために、Medvanceはオンラインによる全国対応の医学部受験専門家庭教師サービスを提供しています。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              学科指導はもちろん、面接の模擬練習・小論文の添削・願書の添削まで、すべてオンラインで完結します。対面指導と変わらないサポート密度を、日本全国どこからでも受けられます。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            オンライン家庭教師を選ぶ5つのメリット
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            「対面じゃないと不安」という方にも知ってほしい、オンラインならではの優位性
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlineMerits.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-1" style={{ color: "#c9922a" }}>0{i + 1}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceのオンライン指導の仕組み
          </h2>
          <div className="space-y-3">
            {[
              { step: "01", title: "ツール", desc: "Zoom または Google Meet を使用。PC・タブレット・スマートフォンから参加可能。" },
              { step: "02", title: "教材の共有", desc: "問題集・テキストは画面共有またはカメラで映して使用。デジタル教材にも対応。" },
              { step: "03", title: "小論文・答案の添削", desc: "手書き答案はカメラで映す、またはPDF送付。リアルタイムでコメントを入れながら解説。" },
              { step: "04", title: "模擬面接", desc: "ビデオ通話をオンにして実施。録画して振り返りに活用できます。" },
              { step: "05", title: "授業外の質問・管理", desc: "LINEまたはメッセージアプリで24時間質問対応。毎日の学習記録も確認します。" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="text-lg font-bold flex-shrink-0" style={{ color: "#c9922a", minWidth: "32px" }}>{item.step}</div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>料金</h2>
          <div className="space-y-3 mb-6">
            {[
              { label: "週1回コース", price: "月8万円〜", note: "月4回授業（80分）＋コーチング込み。入塾金2万円（初回のみ）。" },
              { label: "週2回コース", price: "月14万円〜", note: "月8回授業＋コーチング込み。" },
              { label: "週3回以上", price: "月20万円〜", note: "直前期・浪人生の短期集中向け。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 text-xs font-bold pt-0.5" style={{ color: "#0c1a33", minWidth: "110px" }}>{item.label}</div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#c9922a" }}>{item.price}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
          <div className="space-y-4 mb-12">
            {faqItems.map((faq, i) => (
              <details key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none bg-white" style={{ color: "#0c1a33" }}>
                  <span>Q. {faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4" style={{ color: "#c9922a" }}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm leading-relaxed" style={{ color: "#4a5568", backgroundColor: "#faf9f6" }}>{faq.a}</div>
              </details>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedArticles.map((article) => (
              <Link key={article.href} href={article.href} className="block p-5 rounded-xl bg-white hover:shadow-md transition-shadow" style={{ border: "1px solid #e5e1d8" }}>
                <span className="inline-block text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>{article.label}</span>
                <p className="text-sm font-bold leading-snug" style={{ color: "#0c1a33" }}>{article.title}</p>
                <p className="text-xs font-semibold mt-3" style={{ color: "#c9922a" }}>記事を読む →</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ColumnCTA
        heading="全国どこからでも慶應医学部生の指導を受けられます"
        subtext="オンラインで医学部受験を完全サポート。学科から面接・小論文まで一貫対応。まずは無料相談から。"
      />
    </div>
  );
}
