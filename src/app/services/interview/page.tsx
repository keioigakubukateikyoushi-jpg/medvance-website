import Link from "next/link";

export const metadata = {
  title: "医学部面接・小論文対策｜現役慶應医学部生が実践的に指導 | Medvance",
  description:
    "医学部入試の面接・小論文対策を現役慶應医学部生が1対1で指導。実際の試験で問われる質問への回答作り、小論文の書き方、志望理由書の作成まで徹底サポート。",
};

const interviewItems = [
  {
    title: "頻出質問への回答作成",
    body: "「なぜ医師を目指しますか」「あなたの長所・短所は」「医療の問題点は何だと思いますか」など、医学部面接の頻出質問に対して、自分の言葉で答えられる回答を一緒に作ります。",
  },
  {
    title: "模擬面接の実施",
    body: "実際の面接を想定した模擬練習を繰り返し行います。言葉づかい・態度・間の取り方まで細かくフィードバックし、本番に強い受験生を育てます。",
  },
  {
    title: "志望動機・自己PRの磨き上げ",
    body: "曖昧な動機を具体的なエピソードで裏付け、面接官に刺さる志望動機に仕上げます。「医師になりたい理由」が本質から語れるよう、深掘りをサポートします。",
  },
  {
    title: "大学別の傾向と対策",
    body: "慶應・慈恵・順天堂・昭和・日本医科など、各大学の面接スタイル・質問傾向を熟知した上で対策します。MMI形式にも対応しています。",
  },
];

const essayItems = [
  {
    title: "医療倫理・時事問題の解説",
    body: "医学部小論文で頻出の医療倫理・生命倫理・社会問題のテーマについて、正確な知識と多角的な視点を習得します。「知らなかった」を事前になくします。",
  },
  {
    title: "論理的文章構成の習得",
    body: "「序論・本論・結論」の基本から、具体的な根拠の示し方まで指導します。採点者に伝わる論理の通った文章を書く力を系統的に養います。",
  },
  {
    title: "過去問演習・添削指導",
    body: "志望校の過去問を使った演習と丁寧な添削を繰り返すことで、合格水準の答案を書く力を確実に身につけます。毎回の添削でどう改善するかも明確に示します。",
  },
  {
    title: "大学別テーマ分析",
    body: "志望校がこれまでどのようなテーマを出題してきたかを分析し、出る可能性の高いテーマを重点的に対策します。効率よく合格答案を書く準備を整えます。",
  },
];

const faqs = [
  {
    q: "面接・小論文だけの指導を受けることはできますか？",
    a: "はい、学科試験の指導と組み合わせずに、面接・小論文のみのご依頼も可能です。まずは無料相談でご状況をお聞かせください。",
  },
  {
    q: "面接指導はいつから始めればいいですか？",
    a: "出願が近づいてからでは間に合わないケースもあります。できれば受験の3〜4か月前から始めることをお勧めします。ただし、直前でもできることはありますのでご相談ください。",
  },
  {
    q: "小論文が全く書けないのですが大丈夫ですか？",
    a: "問題ありません。文章の書き方・構成の作り方から丁寧に指導します。書けない理由を分析し、一歩一歩積み上げていきます。",
  },
  {
    q: "再受験・多浪生の面接対策もできますか？",
    a: "はい、再受験・多浪生特有の面接対策に強みがあります。経歴・年齢に関する質問への答え方を一緒に準備し、強みに変える指導を行います。",
  },
];

export default function InterviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            面接・小論文対策
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            医学部の面接・小論文は、準備で決まる。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が、実際の入試を知り尽くした指導を行います
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            なぜ医学部受験に面接・小論文対策が必要か
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              医学部入試において、面接・小論文の配点は決して小さくありません。学力試験で差がつかない僅差の局面では、面接・小論文の出来が合否を左右することがあります。また、近年は「医師としての適性・倫理観」を重視する大学が増えており、単なる知識ではなく、医師を目指す動機や思考力が問われます。準備なしに臨むと、どれだけ学力が高くても不合格になるケースがあります。Medvanceでは、現役慶應医学部生が自身の入試経験をもとに、実践的な指導を行います。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            Medvanceの面接対策
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {interviewItems.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            Medvanceの小論文対策
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {essayItems.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくあるご質問
          </h2>
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

      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            面接・小論文の不安をお気軽にご相談ください。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
