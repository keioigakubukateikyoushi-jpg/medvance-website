import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "慶應医学部への内部進学に家庭教師は効果がありますか？",
    a: "非常に効果的です。内部進学では学校の評定が直接選考に影響するため、定期試験ごとの対策が不可欠です。集団塾では学校のカリキュラムに合わせた指導が難しいですが、家庭教師なら学校の授業内容に沿って1対1でピンポイントに対策できます。",
  },
  {
    q: "慶應附属校の内部進学向け家庭教師の選び方は？",
    a: "最重要ポイントは「慶應の授業内容・試験傾向を理解しているか」です。外部の講師では慶應独自のカリキュラムに対応できないことがあります。現役の慶應医学部生が指導するサービスなら、同じカリキュラムを実際に経験した先輩として的確にアドバイスできます。",
  },
  {
    q: "内部進学と一般受験対策を同時にお願いできますか？",
    a: "できます。内部進学がうまくいかなかった場合の保険として一般受験の準備もしておきたいというニーズは多いです。Medvanceでは内部進学対策をメインにしつつ、学科力を上げることで一般受験にも対応できる力を同時に養います。",
  },
  {
    q: "慶應医学部生に教わることで内部進学に有利になりますか？",
    a: "大きく有利になります。単に成績を上げるだけでなく、「慶應医学部で学ぶとはどういうことか」「医師として何を大切にしているか」というリアルな情報を先輩から直接聞けます。志望動機の深化・選考書類の質の向上につながります。",
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
  { href: "/for/keio-naibu", title: "慶應内部進学で医学部へ｜Medvanceの指導内容", label: "内部進学対策" },
  { href: "/column/keio-kateikyoushi", title: "慶應医学部の家庭教師｜現役慶應医学部生が指導", label: "慶應医学部" },
  { href: "/column/mensetu-shoronbun-kateikyoushi", title: "医学部の面接・小論文対策に家庭教師が最適な理由", label: "面接対策" },
];

const naibuProcess = [
  {
    step: "01",
    title: "評定・成績の現状分析",
    body: "各科目の現在の評定・テストの点数を共有していただき、「どの科目でどれだけ上げれば医学部進学枠が見えるか」を数値で明確化します。",
  },
  {
    step: "02",
    title: "定期試験に合わせた個別カリキュラム",
    body: "学校のシラバス・試験日程に合わせて、試験前の集中対策と平常時の基礎固めを設計。慶應の授業内容に即した指導で確実に点数を上げます。",
  },
  {
    step: "03",
    title: "志望動機・選考準備の早期スタート",
    body: "内部進学の選考では成績だけでなく志望理由書・面談が課されることがあります。「なぜ医師か」「なぜ慶應医学部か」を早期から言語化し、選考で本質を語れる状態を作ります。",
  },
  {
    step: "04",
    title: "万が一の一般受験対策も並行",
    body: "内部進学が叶わなかった場合のリスクヘッジとして、学科力を一般受験にも対応できる水準まで高めます。どちらに転んでも対応できる準備が最大の安心感につながります。",
  },
];

export const metadata = {
  title: "慶應医学部への内部進学に家庭教師が最適な理由",
  description:
    "慶應附属校から医学部への内部進学を目指す方に家庭教師が効果的な理由を解説。評定管理・定期試験対策・選考準備を現役慶應医学部生が1対1でサポート。",
  keywords: [
    "慶應医学部 内部進学 家庭教師",
    "慶應附属校 内部進学 対策",
    "慶應 内部進学 成績 家庭教師",
    "慶應高校 医学部 内部進学",
    "慶應 内部進学 評定",
  ],
  alternates: {
    canonical: "/column/keio-naibu-kateikyoushi",
  },
};

export default function KeioNaibuKateikyoushiPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="keio-naibu-kateikyoushi" articleOnly />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>慶應内部進学</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            慶應医学部への内部進学に<br />家庭教師が最適な理由
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            評定を上げ、選考を突破するための個別戦略を現役慶應医学部生が設計する
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              慶應義塾大学医学部への内部進学は、日本でも最難関の進学ルートのひとつです。附属校からの進学枠は限られており、学校の評定（内申点）が非常に重要な役割を果たします。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「どの科目でどれだけ上げれば進学枠が見えるか」「定期試験をどう攻略するか」「選考で何が問われるか」——これらは、慶應の内部を知らない一般の家庭教師や予備校では正確に答えられません。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              Medvanceでは、実際に慶應の附属校・医学部を経験した現役学生が、内部進学に特化した戦略を立てます。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            内部進学対策の流れ
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            成績向上から選考準備まで、一貫してサポートします
          </p>
          <div className="space-y-4">
            {naibuProcess.map((item) => (
              <div key={item.step} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="text-2xl font-bold flex-shrink-0" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)", minWidth: "40px" }}>{item.step}</div>
                <div>
                  <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慶應医学部生に教わることの意味
          </h2>
          <div className="space-y-4">
            {[
              { title: "授業・試験の出題傾向を知っている", body: "慶應附属校のカリキュラムや定期試験の特性を実際に経験した先輩として、「どこを重点的に対策するか」のアドバイスが的確です。" },
              { title: "内部進学の選考プロセスを知っている", body: "志望理由書に何を書けばいいか、面談でどんなことが聞かれるか——内部の実態を知る先輩だからこそ、選考準備の精度が上がります。" },
              { title: "医学部の生活・やりがいをリアルに伝えられる", body: "「慶應医学部に入ったらどんな生活が待っているか」を具体的に伝えられる先輩の存在は、受験生のモチベーション維持にも直結します。" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>
                  <span style={{ color: "#c9922a" }}>✓ </span>{item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
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
        heading="慶應附属校から医学部への内部進学、Medvanceで準備しませんか"
        subtext="評定管理・定期試験対策・選考準備まで、現役慶應医学部生が一貫サポート。まずは無料相談から。"
      />
    </div>
  );
}
