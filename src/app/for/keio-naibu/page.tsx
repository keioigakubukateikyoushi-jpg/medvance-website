import ForPageSchemas from "@/components/ForPageSchemas";
import Link from "next/link";
import RelatedColumns from "@/components/RelatedColumns";

export const metadata = {
  title: "慶應内部進学で医学部へ｜学校成績を上げる完全1対1指導 | Medvance",
  description:
    "慶應義塾の附属校から医学部への内部進学を目指す方へ。現役慶應医学部生が学校の定期試験・成績向上を完全1対1でサポート。慶應の授業内容を知り尽くした先輩が、評定を上げるための最短戦略を設計します。",
  keywords: [
    "慶應 内部進学 医学部",
    "慶應義塾 内部進学 成績",
    "慶應附属校 医学部 家庭教師",
    "慶應高校 内部進学 対策",
    "慶應医学部 内部進学 家庭教師",
  ],
  alternates: {
    canonical: "/for/keio-naibu",
  },
};

const challenges = [
  {
    title: "「評定が足りず、医学部枠に手が届かない」",
    body: "慶應医学部への内部進学は評定が非常に重要です。「あと少し」という状況で苦しんでいる生徒が多くいます。どの科目でどれだけ点を上げればいいかを数値で明確化し、逆算した対策を立てます。",
  },
  {
    title: "「学校の授業スピードに追いつけない」",
    body: "慶應附属校のカリキュラムは独自性が高く、外部の予備校教材が合わないことがあります。慶應医学部生の講師は同じカリキュラムを経験しており、学校の授業に沿った指導が可能です。",
  },
  {
    title: "「定期試験対策のやり方がわからない」",
    body: "内部進学では定期試験の成績が直接評定に影響します。試験範囲の絞り方・効率的なまとめ方・出題傾向の読み方まで、講師が「慶應の試験で通用する勉強法」を伝授します。",
  },
  {
    title: "「医学部に進む意思はあるが戦略が不明確」",
    body: "「なんとなく医学部に行きたい」という状態では面談・進路選択で弱さが出ます。志望動機の言語化・自己分析・小論文対策まで含めた「医学部進学者として完成する」ための準備を、早期から始めます。",
  },
];

const reasons = [
  {
    num: "01",
    title: "指導するのは現役の慶應医学部生",
    body: "同じ慶應の附属校を経験し、または慶應医学部に合格した先輩が指導します。授業内容・試験の出題傾向・評定の仕組みを熟知しているため、「学校の実態に合った指導」が受けられます。外部の予備校教師には持てないリアルな内部知識があります。",
  },
  {
    num: "02",
    title: "成績・評定を数値で管理",
    body: "「あの科目であと何点取れれば評定がいくつ上がる」という具体的な目標設定を行います。定期試験のたびに結果を分析し、次の試験に向けて戦略を更新。感覚ではなく数字で管理することで、着実に評定を積み上げます。",
  },
  {
    num: "03",
    title: "医学部進学に必要な準備を早期からサポート",
    body: "内部進学の選考では成績だけでなく、志望理由書や面談が課されることがあります。「なぜ医学部か」「なぜ慶應か」を自分の言葉で語れるよう、早期から自己分析と言語化のサポートを行います。",
  },
  {
    num: "04",
    title: "完全1対1・オーダーメイドの学習計画",
    body: "苦手科目・得意科目・残りの学期数・目標評定に応じた、完全個別の学習計画を設計します。週単位でスケジュールを管理し、定期試験前の集中期には指導頻度を増やすことも可能です。",
  },
];

const schoolList = [
  { name: "慶應義塾高校", note: "普通部からの進学者も含む上位校。医学部進学枠は成績上位者が対象。" },
  { name: "慶應義塾女子高校", note: "理系科目の評定向上と志望理由書の準備が重要。" },
  { name: "慶應義塾志木高校", note: "埼玉・全国からの入学者も多く、医学部進学志望者に対応。" },
  { name: "慶應義塾湘南藤沢高校（SFC）", note: "独自カリキュラムに精通した講師が対応。" },
  { name: "慶應義塾普通部", note: "中学生からの早期対策で、高校以降の内部進学を見据えた準備。" },
];

const timeline = [
  {
    period: "中1〜中3（普通部）",
    title: "基礎固め・習慣づくり",
    desc: "内部進学の土台は中学時代の成績から始まります。定期試験で安定した成績を取る習慣を作り、医学部進学への意識を早期から醸成します。",
  },
  {
    period: "高1〜高2",
    title: "評定の積み上げ期",
    desc: "内部進学に使われる評定の多くは高1〜高2の成績です。この時期に主要科目（英語・数学・理科）の評定を確実に上げることが最重要です。",
  },
  {
    period: "高2後半〜高3前半",
    title: "選考準備・志望動機の言語化",
    desc: "志望理由書・面談対策を本格化します。「なぜ医師になりたいか」「慶應医学部で何を学びたいか」を自分の言葉で深く語れるよう、1対1で仕上げます。",
  },
  {
    period: "高3後半",
    title: "最終仕上げ・直前対策",
    desc: "最後の試験・選考に向けて、全体の評定を最終確認し、面談の最終練習を行います。万が一に備えた外部受験の準備も並行して行えます。",
  },
];

const faqs = [
  {
    q: "慶應の附属校以外でも内部進学対策を受けられますか？",
    a: "Medvanceのメインサービスは慶應附属校からの内部進学対策ですが、他の附属校（早稲田・明治など）からの内部進学相談も承っています。まずは無料相談でご状況をお聞かせください。",
  },
  {
    q: "内部進学対策と一般受験対策を同時にお願いできますか？",
    a: "はい、可能です。内部進学がうまくいかなかった場合に備えて、一般受験の準備も並行して行いたいという方も多くいます。内部進学対策をメインにしながら、学科力も同時に高めるプランを設計できます。",
  },
  {
    q: "定期試験直前だけお願いすることはできますか？",
    a: "はい、単発での試験対策指導も受け付けています。ただし、継続的に指導を受けることで評定の安定的な向上が期待できるため、月単位での継続指導を推奨しています。",
  },
  {
    q: "料金はいくらですか？",
    a: "週1回コース月8万円（月4回80分授業＋コーチング込み）からです。入塾金は初回2万円のみ。定期試験前など指導頻度を増やす場合は週2回コース（月14万円〜）も選べます。まずは無料相談でご状況をお聞かせください。",
  },
  {
    q: "オンラインでも受けられますか？",
    a: "はい、全国どこからでもオンラインで受講できます。関東圏にお住まいの方は対面指導も選べます。",
  },
];


export default function KeioNaibuPage() {
  return (
    <>
      <ForPageSchemas slug="keio-naibu" />
      <div className="min-h-screen bg-white">

      {/* HERO */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            慶應附属校から医学部へ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            慶應内部進学で医学部へ。<br />評定を上げる完全1対1指導。
          </h1>
          <p className="text-base mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            同じ慶應を歩んだ現役医学部生が、学校の成績向上から選考準備まで徹底サポート
          </p>
          <Link
            href="/contact?from=keio-naibu"
            className="inline-block px-8 py-4 font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a", color: "#fff" }}
          >
            無料相談に申し込む →
          </Link>
        </div>
      </div>

      {/* STATS */}
      <div className="bg-white py-10 px-4" style={{ borderBottom: "1px solid #e5e1d8" }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "講師は全員", sub: "現役慶應医学部生" },
            { label: "慶應附属校の", sub: "カリキュラムに精通" },
            { label: "学科から", sub: "選考準備まで対応" },
            { label: "全国", sub: "オンライン対応" },
          ].map((s) => (
            <div key={s.sub}>
              <p className="text-base md:text-lg font-bold mb-0.5" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>{s.label}</p>
              <p className="text-sm font-semibold" style={{ color: "#0c1a33" }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CHALLENGES */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慶應内部進学で医学部を目指す生徒が<br className="hidden md:block" />抱えている課題
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            これらの悩みをMedvanceは1対1で解決します
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#c9922a" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY MEDVANCE */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceが慶應内部進学対策に選ばれる理由
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((item) => (
              <div key={item.num} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#c9922a" }}>{item.num}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCHOOLS */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            対応している慶應附属校
          </h2>
          <div className="space-y-3">
            {schoolList.map((school, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0">
                  <span className="inline-block w-2 h-2 rounded-full mt-1.5" style={{ backgroundColor: "#c9922a" }} />
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{school.name}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{school.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            学年別・内部進学準備のロードマップ
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            早く始めるほど、選択肢が広がります
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {timeline.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ backgroundColor: "#c9922a" }}>{item.period}</span>
                  <span className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.title}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            料金・指導コース
          </h2>
          <div className="space-y-3 mb-6">
            {[
              { label: "週1回コース", price: "月8万円〜", note: "月4回授業（80分）＋コーチング・評定管理込み。入塾金2万円（初回のみ）。" },
              { label: "週2回コース", price: "月14万円〜", note: "定期試験対策を強化したい方。試験前の集中期に増やす方も多い。" },
              { label: "試験前集中コース", price: "都度相談", note: "試験2〜3週間前から短期集中で対策。継続コース生の試験前増枠にも対応。" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.label}</p>
                  <p className="font-bold text-base" style={{ color: "#c9922a" }}>{item.price}</p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.note}</p>
              </div>
            ))}
          </div>
          <div className="p-5 rounded-xl" style={{ backgroundColor: "#0c1a33" }}>
            <p className="text-sm font-semibold text-white mb-2">全コース共通で含まれるもの</p>
            <ul className="space-y-1">
              {[
                "評定・成績の数値管理",
                "定期試験対策（試験範囲に合わせた指導）",
                "志望動機・選考書類のサポート",
                "24時間LINEでの質問対応",
                "保護者への定期報告",
              ].map((item) => (
                <li key={item} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,255,255,0.8)" }}>
                  <span style={{ color: "#c9922a" }}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none bg-white" style={{ color: "#0c1a33" }}>
                  <span>Q. {faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4" style={{ color: "#c9922a" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm leading-relaxed" style={{ color: "#4a5568", backgroundColor: "#faf9f6" }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>無料相談</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            評定の現状・残りの学期数・目標をヒアリングし、最短で医学部進学枠を確保するための戦略をご提案します。
          </p>
          <Link
            href="/contact?from=keio-naibu-cta"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}