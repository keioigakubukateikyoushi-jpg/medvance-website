import Link from "next/link";

export const metadata = {
  title: "金沢医科大学受験対策｜入試傾向・合格戦略 | Medvance",
  description: "金沢医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。北陸唯一の私立医学部への合格を目指す方への完全ガイド。",
};

const subjects = [
  { name: "英語", level: "★★☆☆☆", body: "長文読解と文法・語彙問題が中心。難易度は標準〜基礎レベルで、基本的な英文読解力があれば高得点が狙えます。", detail: "大問構成は長文読解2題＋文法・語彙・整序問題。基礎単語・熟語の徹底と文法の正確な理解が優先。読解速度より正確性を重視した学習が有効。" },
  { name: "数学", level: "★★☆☆☆", body: "標準〜基礎レベルの問題が中心。頻出分野を確実に押さえることで安定した得点が期待できます。", detail: "大問4題。微積分・確率・数列が頻出。難問はほとんど出題されず、教科書レベルの問題を確実に解く力が求められる。計算ミスを防ぐ正確性の訓練が重要。" },
  { name: "物理", level: "★★☆☆☆", body: "力学・電磁気を中心に基礎〜標準レベルの出題。公式の正確な理解と基本問題の演習で対応できます。", detail: "力学・電磁気・波動から出題。難問は少なく、基本公式の正確な適用と計算力が合否を分ける。物理の基礎概念を丁寧に確認しながら標準問題集を中心に演習を積むことが有効。" },
  { name: "化学", level: "★★☆☆☆", body: "有機・無機・理論化学がバランスよく出題。基礎から標準レベルの問題で、知識の正確な定着が重要です。", detail: "難問はほとんどなく、基礎知識の確実な定着と計算問題の正確性が求められる。化学の全分野を満遍なく学習し、苦手分野を残さないことが合格への近道。" },
  { name: "面接・小論文", level: "★★★☆☆", body: "個人面接と小論文が課されます。地域医療への貢献意識と医師としての志望動機が重視されます。", detail: "個人面接では志望動機・医師への動機・地域医療への関心が問われる。北陸の医療課題への理解を示すと評価が高い。小論文は医療倫理系テーマが多く、論理的な構成が求められる。" },
];

const strategies = [
  { step: "01", title: "全科目の基礎を徹底的に固める", body: "難問が少なく、基礎〜標準問題を確実に取ることが合格の絶対条件。全科目で基礎の抜けをなくし、教科書レベルの問題は完璧に解けるようにする。" },
  { step: "02", title: "計算ミスゼロを目標にした演習", body: "標準問題が中心だからこそ、ケアレスミスが命取りになる。数学・化学・物理では計算ミスを防ぐための検算習慣と、素早く正確に解く演習を繰り返す。" },
  { step: "03", title: "地域医療への理解を深めた面接準備", body: "北陸唯一の私立医学部として、地域の医療人材育成という役割を担っている。面接では地域医療への関心・貢献意欲が問われるため、石川・北陸の医療事情を把握した上で自分の言葉で語れるよう準備する。" },
  { step: "04", title: "小論文の構成力を鍛える", body: "医療倫理・社会問題系のテーマへの対応力を養う。「序論・本論・結論」の構成を守りながら、自分の立場と根拠を明確に述べる訓練を繰り返す。医療ニュースを日頃から追うことで引き出しを増やす。" },
];

const faqs = [
  { q: "金沢医科大学は難易度が低いと聞きましたが、対策は簡単ですか？", a: "難易度が標準〜基礎レベルであることは事実ですが、それは「基礎が完璧でなければ落とされる」ということを意味します。基礎の取りこぼしが直接不合格につながるため、徹底した基礎固めが必要です。" },
  { q: "地方の医学部ですが、関東からでも受験できますか？", a: "もちろん受験できます。全国からの受験者が多い大学です。ただし地域医療への関心は面接で問われるため、その点の準備は必要です。" },
  { q: "学費が高いと聞きましたが、奨学金制度はありますか？", a: "金沢医科大学には特待生制度や奨学金制度があります。成績優秀者への学費減免制度も設けられているため、入学後の成績次第で費用負担を軽減できる可能性があります。" },
];

export default function KanazawaIkaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>大学別対策ガイド</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>金沢医科大学<br />入試対策ガイド</h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生による入試傾向・合格戦略の完全解説</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>私立医学部</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>石川県</span>
          </div>
        </div>
      </div>
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>金沢医科大学の特徴</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>金沢医科大学は北陸唯一の私立医学部として、地域の医療人材育成を担っています。入試の難易度は標準〜基礎レベルで、全科目の基礎を確実に固めることが合格の最短ルートです。面接では地域医療への貢献意識が重視されるため、石川・北陸の医療事情への理解を深めた準備が効果的です。</p>
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
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>金沢医科大学対策の相談はこちら</h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生が個別に対策をアドバイスします。</p>
          <Link href="/contact" className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>無料相談・お問い合わせ</Link>
        </div>
      </div>
    </div>
  );
}
