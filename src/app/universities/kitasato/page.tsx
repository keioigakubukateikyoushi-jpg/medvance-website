import Link from "next/link";

export const metadata = {
  title: "北里大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description: "北里大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。理科がやや難で、基礎固め後に理科強化が合格への近道です。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解中心の標準的な出題構成です。医療・生命科学系のテーマが多く、専門用語への慣れが得点を左右します。",
    detail: "大問3〜4題で長文読解が主体。文法・語彙問題も含まれるが配点は読解が大きい。医療系英単語（anatomy, diagnosisなど）が本文中に登場するため、医療英語の基礎知識があると有利。読解スピードと内容把握力を重点的に鍛えること。標準的な単語帳を仕上げた後、医療系長文演習を追加するのが効率的。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心で、微積・確率・数列から頻出です。難問は少なく、基礎の徹底が合否を決めます。",
    detail: "大問4〜5題構成。記述式の問題もあり、途中のプロセスを丁寧に書く力が必要。微積分・確率・数列・ベクトルの4分野を重点的に対策すること。難問より典型問題の解法パターンを確実に習得する方が得点につながる。時間配分を意識した演習で本番の安定感を養おう。",
  },
  {
    name: "物理",
    level: "★★★★☆",
    body: "北里大学の物理はやや難易度が高く、力学・電磁気の応用問題が多く出題されます。公式の深い理解と応用力が必要です。",
    detail: "力学（運動量・エネルギー保存）と電磁気（回路・電磁誘導）から難易度の高い融合問題が出題されることがある。単純な公式当てはめでは対応できず、物理現象の本質的な理解が必要。波動・熱力学も抜かりなく対策すること。標準問題集を完璧にした後、難問演習に進む段階的な学習が有効。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題されます。計算問題の精度と有機化学の知識量が得点に直結します。",
    detail: "有機化学の構造決定問題が毎年出題されており、ベンゼン環・官能基の反応性をしっかり理解しておく必要がある。理論化学では気体・溶液・化学平衡の計算問題が頻出。無機化学は暗記事項が多いが、反応の仕組みを理解した上で暗記すると効率よく定着する。全体的に標準レベルで、丁寧な基礎固めで対応可能。",
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "医師を志す動機と医療への姿勢を問う面接が実施されます。北里大学の建学精神への理解も示すと好印象です。",
    detail: "個人面接形式で、志望動機・医師像・医療倫理に関する質問が中心。北里柴三郎を創立者とする歴史ある大学であり、研究や感染症医学への関心を示すと評価される。小論文は医療・社会問題に関するテーマで600〜800字程度。論理的な構成と自分の意見を明確に述べる力が問われる。",
  },
];

const strategies = [
  {
    step: "01",
    title: "理科（物理・化学）を最優先で強化する",
    body: "北里大学の物理はやや難易度が高く、理科での失点が合否を左右します。英語・数学の基礎が固まったら、理科の強化に集中的に時間を投入しましょう。特に物理は応用問題まで対応できるレベルを目指すことが重要です。",
  },
  {
    step: "02",
    title: "英語は医療系長文に慣れる",
    body: "北里大学の英語は医療・生命科学系テーマの長文が多く出題されます。標準的な英語力を身につけた後は、医療系英語の長文演習を積極的に取り入れましょう。専門用語に慣れることで、本番での読解スピードと正確性が格段に上がります。",
  },
  {
    step: "03",
    title: "数学は典型問題を完璧にする",
    body: "北里大学の数学は標準レベルが中心のため、基礎〜標準の典型問題を完全に習得することが最も効率的な対策です。難問を追い求めるよりも、解けるはずの問題を確実に得点できる安定感を養いましょう。記述問題では論理の流れを意識した答案作成練習も行ってください。",
  },
  {
    step: "04",
    title: "面接・小論文は北里大学の特色を理解して準備する",
    body: "北里大学は北里柴三郎の研究精神を建学の理念に持つ大学です。感染症研究や地域医療への貢献に関心があることを、具体的なエピソードを交えて伝えられるよう準備しましょう。小論文は医療倫理・社会問題について自分の意見を論理的に述べる練習を繰り返すことが大切です。",
  },
];

const faqs = [
  {
    q: "北里大学医学部の物理はどのくらい難しいですか？",
    a: "私立医学部の中ではやや難しめです。標準問題集を完璧にした上で、難問演習に進む段階的な対策が必要です。力学と電磁気の応用問題への対応力を特に重点的に鍛えましょう。",
  },
  {
    q: "北里大学医学部の合格に必要な得点率はどのくらいですか？",
    a: "1次試験の目安として得点率70〜75%程度が合格ラインとされています。理科での失点をどれだけ抑えられるかが重要で、英語・数学で安定した得点を確保しつつ、理科でも平均以上を狙うバランスが求められます。",
  },
  {
    q: "北里大学医学部の面接で特に重視されることは何ですか？",
    a: "医師を志す動機の明確さと、医療倫理・医療問題に関する基本的な知識が評価されます。北里大学の歴史や北里柴三郎の業績について理解しておくと、志望理由に深みが出ます。",
  },
];

export default function KitasatoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            大学別対策ガイド
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            北里大学医学部<br />入試対策ガイド
          </h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生による入試傾向・合格戦略の完全解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
              私立医学部
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>
              神奈川県
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            北里大学医学部の特徴
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
            北里大学医学部は神奈川県相模原市に位置し、近代細菌学の父・北里柴三郎の精神を受け継ぐ研究志向の強い医学部です。附属病院との密接な連携による臨床教育と、感染症・免疫分野に強みを持つ研究教育が特徴です。入試では英語・数学・理科2科目（物理または化学）の1次試験と、面接・小論文の2次試験が課されます。理科がやや難しめで、特に物理は応用問題まで対応できる力が求められます。全科目でバランスよく得点しながら、理科での失点を最小限に抑えることが合格への近道です。
          </p>
        </div>
      </div>

      {/* Subjects */}
      <div className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Subject Analysis</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>科目別出題傾向</h2>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>合格するための戦略</h2>
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
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>よくある質問</h2>
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
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            北里大学医学部対策の相談はこちら
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
