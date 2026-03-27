import Link from "next/link";
export const metadata = { title: "久留米大学医学部受験対策｜入試傾向・合格戦略 | Medvance", description: "久留米大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。九州圏の私立医学部合格への完全ガイド。" };
const subjects = [
  { name: "英語", level: "★★★☆☆", body: "長文読解中心で医療・科学系テーマが頻出。標準的な難易度で、語彙力と読解スピードが合否を分けます。", detail: "大問3〜4題。長文読解が中心で、内容一致・内容説明問題が多い。医療系テーマへの慣れが有利。標準〜やや難の語彙が問われるため、単語力の強化が必要。" },
  { name: "数学", level: "★★★☆☆", body: "標準〜やや難レベルの問題が中心。微積・確率・数列が頻出で、解法の正確な習得が重要です。", detail: "大問4〜5題。記述式と選択式が混在。微積分・確率・数列・ベクトルが頻出。難問より標準問題を確実に解く力が求められる。時間配分を意識した演習が重要。" },
  { name: "物理", level: "★★★☆☆", body: "力学・電磁気を中心に標準的な問題が出題されます。基本概念の正確な理解が合格への鍵です。", detail: "力学・電磁気・波動・熱力学から出題。基本公式の正確な適用と計算力が問われる。計算ミスで失点するリスクがあるため、検算の習慣が重要。" },
  { name: "化学", level: "★★★☆☆", body: "有機・無機・理論化学がバランスよく出題。基礎知識の正確な定着と計算問題の精度が重要です。", detail: "有機・無機・理論化学が均等に出題。標準問題が中心で、基礎知識の確実な定着が合格条件。計算問題での正確性を特に重視した練習が有効。" },
  { name: "面接・小論文", level: "★★★☆☆", body: "個人面接と小論文が課されます。医師としての志望動機と地域医療への関心が評価されます。", detail: "個人面接では志望動機・医師としての倫理観が問われる。九州の地域医療への理解を示すと好印象。小論文は医療倫理・社会問題系テーマが多く、論理的な構成が求められる。" },
];
const strategies = [
  { step: "01", title: "英語の読解スピードと語彙力を強化", body: "長文読解中心の出題に対応するため、医療・科学系英文への慣れと読解スピードの向上が最優先課題。単語帳を標準レベルまで仕上げ、過去問形式の長文演習を繰り返す。" },
  { step: "02", title: "数学・理科の標準問題を完璧に習得", body: "標準レベルが中心だからこそ、頻出分野の解法を確実に習得することが合格の条件。微積・確率・数列は特に重点的に演習し、理科は基本公式の正確な適用を徹底する。" },
  { step: "03", title: "計算ミスゼロを目標にした演習", body: "標準問題での計算ミスが命取りになる。数学・化学・物理では検算の習慣をつけ、本番の時間配分を意識した模擬演習を繰り返す。" },
  { step: "04", title: "面接・小論文の準備を早めに着手", body: "九州の地域医療課題への理解を深め、自分の言葉で語れるよう準備する。小論文は構成の型を身につけた上で、医療ニュースへのアンテナを常に張っておく。" },
];
const faqs = [
  { q: "久留米大学医学部の難易度はどのくらいですか？", a: "標準〜やや難レベルで、全科目の基礎〜標準問題を確実に解く力が求められます。難問より基礎の完成度で合否が決まるため、基礎固めを優先した学習計画が有効です。" },
  { q: "関東や関西からでも受験できますか？", a: "もちろん受験できます。全国からの受験者が多い大学です。ただし面接では地域医療への関心が問われることがあるため、九州・福岡の医療事情への理解は深めておくとよいです。" },
  { q: "何科目受験ですか？", a: "英語・数学・理科2科目（物理または化学）の計4科目が基本です。面接と小論文も実施されます。詳細は各年度の募集要項をご確認ください。" },
];
export default function KurumePage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>大学別対策ガイド</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>久留米大学医学部<br />入試対策ガイド</h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生による入試傾向・合格戦略の完全解説</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>私立医学部</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>福岡県</span>
          </div>
        </div>
      </div>
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>久留米大学医学部の特徴</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>久留米大学医学部は九州圏の私立医学部として長い歴史を持ちます。入試は標準〜やや難レベルで、英語の読解力と理科の基礎力が合否を分けます。全科目バランスよく仕上げることが合格の条件で、特定科目に頼った戦略は通用しません。附属病院の臨床実績が豊富で、臨床医を目指す学生に人気があります。</p>
        </div>
      </div>
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
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Strategy</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>合格するための戦略</h2>
          <div className="space-y-5">
            {strategies.map((s) => (
              <div key={s.step} className="flex gap-5 p-6 bg-white rounded-2xl" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>{s.step}</div>
                <div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
      <div className="py-16 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>久留米大学医学部対策の相談はこちら</h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生が個別に対策をアドバイスします。</p>
          <Link href="/contact" className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>無料相談・お問い合わせ</Link>
        </div>
      </div>
    </div>
  );
}
