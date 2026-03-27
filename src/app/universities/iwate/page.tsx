import Link from "next/link";
export const metadata = { title: "岩手医科大学受験対策｜入試傾向・合格戦略 | Medvance", description: "岩手医科大学の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。東北地方の地域密着型私立医学部への合格ガイド。" };
const subjects = [
  { name: "英語", level: "★★★☆☆", body: "長文読解と文法・語彙問題がバランスよく出題。標準的な難易度で、基礎英語力の完成が合格への鍵です。", detail: "長文読解2題＋文法・語彙・整序問題の構成。医療・科学系テーマが頻出。標準語彙の定着と文法の正確な理解が優先課題。読解のスピードより正確性を重視した学習が有効。" },
  { name: "数学", level: "★★☆☆☆", body: "基礎〜標準レベルの問題が中心。頻出分野を確実に習得することで安定した得点が可能です。", detail: "大問4〜5題。微積分・確率・数列が頻出。難問は少なく、教科書〜標準問題集レベルを確実に解く力が求められる。計算ミスを防ぐ訓練と時間配分の意識が重要。" },
  { name: "物理", level: "★★☆☆☆", body: "力学・電磁気を中心に基礎〜標準レベルの出題。基本公式の正確な理解があれば対応できます。", detail: "力学・電磁気・波動から出題。難問は少なく、基本公式の適用と計算精度が問われる。物理の基礎を丁寧に確認し、標準問題集中心の演習が効果的。" },
  { name: "化学", level: "★★☆☆☆", body: "有機・無機・理論化学がバランスよく出題。基礎知識の定着で対応できるレベルです。", detail: "全分野から出題。難問はほとんどなく、基礎知識の確実な定着が合格条件。化学全体を満遍なく学習し、苦手分野を残さないことが合格への近道。" },
  { name: "面接・小論文", level: "★★★☆☆", body: "個人面接と小論文が実施されます。地域医療への貢献意識が特に重視されます。", detail: "個人面接では志望動機・地域医療への関心・東北の医療課題への理解が問われる。岩手・東北の医療事情を把握した上で自分の言葉で語れるよう準備することが重要。小論文は医療倫理・地域医療テーマが多い。" },
];
const strategies = [
  { step: "01", title: "全科目の基礎を確実に固める", body: "難易度は基礎〜標準レベルが中心。全科目で基礎の抜けをなくし、教科書レベルの問題を完璧に解けるようにすることが最優先課題。" },
  { step: "02", title: "地域医療への理解を深めた面接準備", body: "岩手医科大学は東北地方の地域医療人材育成を担う大学。面接では地域医療への貢献意識が重視されるため、岩手・東北の医療課題や過疎地域医療についての理解を深め、自分の言葉で語れるよう準備する。" },
  { step: "03", title: "小論文の構成力を養う", body: "地域医療・医療倫理テーマへの対応力を養う。「序論・本論・結論」の構成を守り、自分の立場と根拠を明確に述べる訓練を繰り返す。東北の医療ニュースにも目を向けることが重要。" },
  { step: "04", title: "計算ミスゼロを目標にした精度の向上", body: "標準問題が中心だからこそ、計算ミスが命取り。数学・化学・物理では検算の習慣をつけ、本番でも確実に得点できる精度を養う。" },
];
const faqs = [
  { q: "岩手医科大学の地域枠について教えてください。", a: "岩手医科大学には地域枠の募集があります。岩手県内の医療機関で一定期間勤務することを条件に、学費の優遇などが受けられる制度です。詳細は大学の公式情報をご確認ください。" },
  { q: "東北以外から受験する場合のアドバイスはありますか？", a: "全国から受験可能です。ただし面接では地域医療への関心が問われるため、東北・岩手の医療事情への理解を深めた準備が重要です。地域医療に関心があることを具体的に語れるようにしておくとよいです。" },
  { q: "合格するために必要な学力の目安はどのくらいですか？", a: "偏差値55〜60程度が目安とされています。全科目で基礎〜標準問題を確実に解く力が求められます。難問より基礎の完成度が合否を決める傾向があります。" },
];
export default function IwatePage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>大学別対策ガイド</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>岩手医科大学<br />入試対策ガイド</h1>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生による入試傾向・合格戦略の完全解説</p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>私立医学部</span>
            <span className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}>岩手県</span>
          </div>
        </div>
      </div>
      <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Overview</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>岩手医科大学の特徴</h2>
          <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>岩手医科大学は東北地方の地域密着型私立医学部として、地域の医療人材育成を使命としています。入試難易度は標準レベルで、全科目の基礎を確実に固めることが合格の条件。地域枠制度があり、岩手県の医療に貢献したい学生を積極的に受け入れています。面接では地域医療への志望動機が特に重視されます。</p>
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
          <h2 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>岩手医科大学対策の相談はこちら</h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>現役慶應医学部生が個別に対策をアドバイスします。</p>
          <Link href="/contact" className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>無料相談・お問い合わせ</Link>
        </div>
      </div>
    </div>
  );
}
