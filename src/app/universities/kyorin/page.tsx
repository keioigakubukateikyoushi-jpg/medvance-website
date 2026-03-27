import Link from "next/link";

export const metadata = {
  title: "杏林大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description: "杏林大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。基礎完成を最優先にした合格戦略を詳しく紹介します。",
};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解と文法問題が中心。比較的取り組みやすいレベルで、基礎力をしっかり固めれば高得点が狙えます。",
    detail: "長文読解2題＋文法・語彙・整序問題の構成。医療系テーマの出題もあるが難解ではない。標準的な英単語と文法知識で対応可能。読解問題では段落ごとの論旨をつかむ練習が有効。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準的な問題が中心。教科書レベルから標準問題集レベルまで丁寧に仕上げれば高得点が期待できます。",
    detail: "大問4〜5題。微積分・確率・数列・ベクトルが頻出。比較的解きやすい問題も含まれるため、解ける問題を確実に得点することが重要。難問に時間を取られず、取れる問題を優先する戦略が有効。",
  },
  {
    name: "物理",
    level: "★★☆☆☆",
    body: "比較的取り組みやすい問題が多く、基礎をしっかり固めれば高得点が狙えます。",
    detail: "力学・電磁気・熱力学を中心に出題。難問は少なく、基本公式の正確な理解と適用で対処できる。計算ミスだけ注意すれば安定した得点が可能。教科書レベルの問題の完成度を高めることが最優先。",
  },
  {
    name: "化学",
    level: "★★☆☆☆",
    body: "基礎から標準レベルの問題が中心。有機・無機・理論のバランスよい対策が重要です。",
    detail: "有機・無機・理論化学がバランスよく出題される。標準問題集レベルまで仕上げれば対応可能。モル計算・酸塩基・有機の基本反応を確実にマスターすることが合格への近道。",
  },
  {
    name: "面接",
    level: "★★★☆☆",
    body: "志望動機・医師を目指す理由・医療問題への意見などが問われます。自分の言葉で誠実に話せる準備が必要です。",
    detail: "個人面接形式。「なぜ医師になりたいか」「杏林大学を選んだ理由」「現在の医療課題についてどう思うか」などが一般的な質問。事前に自分の考えを整理し、自然に話せるよう練習しておくこと。",
  },
  {
    name: "総合戦略",
    level: "★★★☆☆",
    body: "杏林大学は基礎〜標準問題が中心のため、全科目でまんべんなく得点できる総合力が合否を決めます。",
    detail: "特定科目に極端な苦手を作らず、全科目を標準レベルまで引き上げることが最も効率的な合格戦略。難問への対策より基礎の完成度を高めることを優先する。",
  },
];

const strategies = [
  {
    step: "01",
    title: "基礎の完成を最優先にする",
    body: "杏林大学医学部は基礎〜標準問題が中心の出題です。難問に時間を費やすより、基礎的な問題を確実に得点できる状態を先に作ることが最も効率的な対策です。各科目の基礎を丁寧に積み上げましょう。",
  },
  {
    step: "02",
    title: "全科目でまんべんなく得点できる力を養う",
    body: "杏林大学では特定科目で突出したスコアを出すより、全科目でバランスよく得点することが合格への近道です。苦手科目を放置せず、弱点を早めに発見・克服する習慣をつけましょう。",
  },
  {
    step: "03",
    title: "英語は標準的な語彙・文法から固める",
    body: "杏林大学の英語は比較的取り組みやすいレベルですが、語彙・文法の基礎が不十分だと失点します。標準的な単語帳1冊と文法書1冊を完璧にすることが、安定した得点の基盤になります。",
  },
  {
    step: "04",
    title: "面接で自分の医師志望の動機を明確にする",
    body: "杏林大学の面接では志望動機と医師としての考え方が重視されます。「なぜ医師か」「なぜ杏林大学か」を自分の言葉で自然に説明できるよう、事前に自分の考えを整理しておきましょう。",
  },
];

const faqs = [
  {
    q: "杏林大学医学部の難易度はどのくらいですか？",
    a: "私立医学部の中では比較的取り組みやすいレベルです。基礎〜標準問題が中心のため、基礎を徹底的に固めれば合格圏内に入ることができます。",
  },
  {
    q: "杏林大学医学部に合格するために最も重要なことは何ですか？",
    a: "基礎の完成度が最も重要です。難問への対策より、全科目で基礎〜標準問題を確実に得点できる状態を作ることを優先してください。",
  },
  {
    q: "杏林大学医学部の対策はいつから始めるべきですか？",
    a: "高2から基礎固めを始め、高3の春から標準問題演習に移行するのが理想です。現状の学力によってプランが変わりますので、まずは無料相談でご確認ください。",
  },
  {
    q: "杏林大学医学部の面接はどのような形式ですか？",
    a: "個人面接形式が一般的です。志望動機・大学選択の理由・医療問題への意見などが問われます。丸暗記した答えではなく、自分の考えを自然に話せる準備が大切です。",
  },
];

export default function KyorinPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>杏林大学医学部</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>杏林大学医学部合格への最短ルート。</h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生が入試傾向と対策を解説</p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>杏林大学医学部の入試概要</h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              杏林大学医学部は、東京都三鷹市に位置する私立医学部です。一般選抜では英語・数学・理科2科目の筆記試験と面接が課されます。出題難易度は比較的取り組みやすいレベルで、基礎力の完成度が最も重要とされています。
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d3d3d" }}>
              全科目でまんべんなく得点できる総合力が求められます。難問に時間を費やすより、基礎〜標準問題を確実に得点する戦略が合格への近道です。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "募集人員", value: "約100名" },
                { label: "競争倍率", value: "4〜6倍" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "2次試験", value: "面接" },
              ].map((item) => (
                <div key={item.label} className="text-center p-3 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <p className="text-xs mb-1" style={{ color: "#c9922a" }}>{item.label}</p>
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 合格戦略 */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>杏林大学医学部合格のための戦略</h2>
          <div className="space-y-6">
            {strategies.map((item) => (
              <div key={item.step} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#c9922a" }}>{item.step}</div>
                <div>
                  <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 科目別対策 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>科目別対策のポイント</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-base" style={{ color: "#c9922a" }}>{item.name}</p>
                  <p className="text-xs" style={{ color: "#c9922a" }}>{item.level}</p>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#3d3d3d" }}>{item.body}</p>
                <p className="text-xs leading-relaxed p-3 rounded-lg" style={{ color: "#6b7280", backgroundColor: "#f7f5f0" }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>よくあるご質問</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>まずは無料相談から</h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>杏林大学医学部合格への道筋を、一緒に考えます。</p>
          <Link href="/contact" className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
