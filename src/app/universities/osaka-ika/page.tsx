import Link from "next/link";

export const metadata = {
  title: "大阪医科薬科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "大阪医科薬科大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。関西圏名門で全体的に難易度が高い対策を詳しく紹介します。",

  alternates: {
    canonical: "/universities/osaka-ika",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★★☆",
    body: "大阪医科薬科大学の英語は難易度が高く、長文読解の質・量ともに私立医学部トップクラスです。高い読解力と語彙力が不可欠です。",
    detail: "長文読解3〜4題と文法・語彙・英作文で構成。医療・科学・哲学系テーマの英文が頻出で、内容が高度。英文和訳や内容説明記述が含まれることがある。英検準1級以上の語彙力と、長文全体の論旨を素早く把握する読解力が必要。英語を得点源にするためには、高3春から集中的な英語強化が必要。",
  },
  {
    name: "数学",
    level: "★★★★☆",
    body: "標準〜難レベルの問題が出題され、関西圏私立医学部の中でも数学の難易度は高い部類に入ります。応用力と論述力が求められます。",
    detail: "大問4〜5題の記述式。微積分・確率・ベクトル・数列が頻出。標準問題に加えて難問も含まれ、解法の発想力が問われる場面がある。部分点を確実に取るために、途中式の論理的な記述を意識した練習が重要。難問で焦らず、取れる問題から確実に解く判断力も必要。",
  },
  {
    name: "物理",
    level: "★★★★☆",
    body: "力学・電磁気から難易度の高い問題が出題されます。物理現象の本質的理解と、応用問題への対応力が必要です。",
    detail: "力学（運動量・エネルギー・円運動）と電磁気（電磁誘導・回路の応用）が特に難しい。単純な公式当てはめでは対応できない融合問題が出題されることがある。物理現象を数式で表現する力と、グラフや図を読み取る力が求められる。標準問題集を完璧にした後、難問演習を取り入れて応用力を養うこと。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学が出題されます。化学の中ではやや標準寄りですが、他科目が難しいため、化学での得点が重要です。",
    detail: "理論化学（平衡・電気化学・熱化学）と有機化学（構造決定・高分子）が重要分野。化学は他科目に比べて標準問題の割合が高いため、確実に得点したい科目。有機化学の構造決定は毎年出題されており、論理的な解法パターンを身につけること。無機化学は反応の仕組みから理解する。",
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "高い倫理観と医師としての明確なビジョンが面接で求められます。大阪医科薬科大学の研究・薬学との連携教育への理解も評価されます。",
    detail: "個人面接形式。志望動機・医師像・医療倫理に関する質問が中心。大阪医科薬科大学は医学部と薬学部を持ち、チーム医療の観点から薬剤師との協働についても問われることがある。研究への関心や探究心を持つ学生を歓迎する傾向があり、具体的な興味分野を語れると好印象。",
  },
];

const strategies = [
  {
    step: "01",
    title: "英語・数学・物理の3科目を難関レベルまで引き上げる",
    body: "大阪医科薬科大学は英語・数学・物理の難易度が関西圏私立医学部の中でも高い水準にあります。早い段階から各科目の難問演習に取り組み、応用力を養うことが必要です。基礎固めを迅速に終わらせ、難問対策に十分な時間を確保しましょう。",
  },
  {
    step: "02",
    title: "化学を得点源として固める",
    body: "相対的に難易度が低めの化学を確実な得点源にすることが合格戦略として重要です。化学では基礎〜標準問題を全問正解に近い状態に仕上げ、英語・数学・物理の難問で生まれる点数差を化学で補う戦略が有効です。",
  },
  {
    step: "03",
    title: "過去問で出題傾向と難易度を把握する",
    body: "大阪医科薬科大学は出題傾向が一定しているため、過去問分析が非常に有効です。過去5〜10年分の過去問を解き、頻出分野・出題形式・時間配分を徹底的に研究しましょう。本番で初見の問題に対しても落ち着いて対応できる準備が整います。",
  },
  {
    step: "04",
    title: "医学と薬学の連携について理解し面接に備える",
    body: "大阪医科薬科大学は2021年に医科大学と薬科大学が統合した大学です。医薬連携・チーム医療の観点から医師と薬剤師の協働について自分の考えを持っておくことが面接対策として重要です。医療チームにおける医師の役割を具体的に語れるよう準備しましょう。",
  },
];

const faqs = [
  {
    q: "大阪医科薬科大学の難易度はどのくらいですか？",
    a: "関西圏の私立医学部の中でも難易度が高い大学です。英語・数学・物理は特に難しく、関西医科大学と並んで関西圏難関私立医学部の一つに数えられます。早めから難問演習を取り入れた対策が必要です。",
  },
  {
    q: "大阪医科薬科大学は2021年に統合されましたが、入試への影響はありますか？",
    a: "大阪医科大学と大阪薬科大学が統合し大阪医科薬科大学となりました。入試形式自体は統合前と大きくは変わっていませんが、医薬連携やチーム医療への理解を問う質問が面接で増えている可能性があります。",
  },
  {
    q: "大阪医科薬科大学の合格に向けた学習はいつから始めるべきですか？",
    a: "難易度が高いため、高2の終わりまでに基礎を固め、高3の春から標準〜難問演習に取り組むのが理想的です。英語は特に早期から取り組む必要があります。現在の学力状況に合わせた個別プランは無料相談でご確認ください。",
  },
];

export default function OsakaIkaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            大阪医科薬科大学<br />入試対策ガイド
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              大阪府
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            大阪医科薬科大学の特徴
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            大阪医科薬科大学は2021年に大阪医科大学と大阪薬科大学が統合して誕生した大学で、大阪府高槻市に位置します。医学部と薬学部を一体的に持ち、医薬連携教育が特色です。入試では英語・数学・物理の難易度が高く、関西圏の私立医学部の中でも難関に位置します。全体的に高い学力が求められるため、早期からの計画的な対策が必要です。研究への関心を持つ学生に向いた大学環境です。
          </p>
        </div>
      </div>

      {/* Subjects */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Subject Analysis</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>科目別出題傾向</h2>
          <div className="space-y-6">
            {subjects.map((s) => (
              <div key={s.name} className="p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-base" style={{ color: "#0c1a33" }}>{s.name}</h3>
                  <span className="text-sm" style={{ color: "#c9922a" }}>{s.level}</span>
                </div>
                <p className="text-sm mb-2" style={{ color: "#374151" }}>{s.body}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategy */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Strategy</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>合格するための戦略</h2>
          <div className="space-y-5">
            {strategies.map((s) => (
              <div key={s.step} className="flex gap-5 p-6 bg-white rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>FAQ</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {f.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>A. {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-noto-serif)" }}>
            大阪医科薬科大学対策の相談はこちら
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が個別に対策をアドバイスします。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
