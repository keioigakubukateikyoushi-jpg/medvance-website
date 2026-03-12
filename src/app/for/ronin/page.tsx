import Link from "next/link";

export const metadata = {
  title: "浪人生の医学部受験対策｜現役慶應医学部生による完全1対1指導 | Medvance",
  description:
    "浪人して医学部を目指している方へ。Medvanceは現役慶應医学部生が完全1対1で指導。浪人生の悩みに寄り添ったオーダーメイド学習計画で最短合格を目指します。全国オンライン対応・無料相談受付中。",
};

const challenges = [
  {
    title: "「何をどう勉強すればいいかわからない」",
    body: "現役時代と同じ勉強を繰り返しても結果は変わりません。正しい戦略と方法論が必要です。Medvanceでは、なぜ伸びなかったかを徹底的に分析し、新しい学習の軸を作ります。",
  },
  {
    title: "「時間はあるのに成績が伸びない」",
    body: "量より質。本質を理解しない暗記型の学習では、医学部の入試は突破できません。何をどう理解すれば得点につながるかを、講師が丁寧に示します。",
  },
  {
    title: "「精神的プレッシャーが大きい」",
    body: "一人で抱え込まないでください。Medvanceでは学習面だけでなく、メンタル面もサポートします。週次での振り返りを通じて、孤独な浪人生活を支えます。",
  },
];

const reasons = [
  {
    title: "浪人経験者の講師も在籍",
    body: "多浪経験者も含む慶應医学部生が、リアルな体験をもとに指導。「同じ立場から合格した人間」が教えるから説得力が違います。失敗の経験も学びに変える指導を行います。",
  },
  {
    title: "完全オーダーメイドの1年計画",
    body: "現在の学力と志望校から逆算した、浪人生専用のスケジュールを設計。無駄のない1年間を過ごせます。模試の結果をもとに計画を随時アップデートします。",
  },
  {
    title: "弱点を根本から潰す指導",
    body: "「なぜできないか」を徹底分析し、つまずきの根本原因を解消します。同じミスを繰り返さない指導を行います。理解の穴を可視化し、確実に埋めていきます。",
  },
];

const faqs = [
  {
    q: "浪人してどのくらいで成績が上がりますか？",
    a: "個人差はありますが、正しい学習方法を実践すれば早ければ2〜3か月で変化が現れます。まずは無料相談でご状況をお聞かせください。現状を診断したうえで、現実的な見通しをお伝えします。",
  },
  {
    q: "多浪生でも受け入れてもらえますか？",
    a: "はい、2浪・3浪の方も歓迎しています。年齢や浪人回数を問わず、医学部合格を目指す方であれば誰でも対応可能です。多浪経験のある講師も在籍しており、状況に共感した指導を行います。",
  },
  {
    q: "予備校と並行して利用できますか？",
    a: "可能です。予備校の授業を補完する形でのご利用も多くいただいています。指導スケジュールは柔軟に対応しますので、まずはご相談ください。",
  },
  {
    q: "オンラインでも受講できますか？",
    a: "はい、全国どこからでもオンラインで受講できます。画面共有・ホワイトボード機能を活用し、対面と変わらない質の指導を提供しています。",
  },
];

export default function RoninPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            浪人生の方へ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            浪人生の医学部合格を、本気でサポートします。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が1対1で、あなたの課題を根本から解決します
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            浪人生が医学部受験で直面する課題
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            Medvanceが浪人生に選ばれる理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4" style={{ backgroundColor: "#c9922a" }}>
                  {i + 1}
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            合格者の声
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「現役時代は独学で何とかしようとしていましたが、どれだけ時間を使っても成績が伸びず、気づいたら受験が終わっていました。Medvanceで初めて、自分の学習のどこに問題があるかを言語化してもらい、勉強の仕方が根本から変わりました。講師の先生が同じ浪人経験を持っているので、焦りや不安を話せる存在でもありました。一浪で順天堂大学医学部に合格できたのは、Medvanceなしでは考えられません。」
            </p>
            <p className="text-sm font-bold" style={{ color: "#0c1a33" }}>S.Y.さん｜一浪・順天堂大学医学部合格</p>
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

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            浪人1年間のスケジュール例
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            Medvanceでは、4月の入塾時から12月の直前期まで、時期に応じた学習テーマを設定しています。闇雲に勉強するのではなく、「今この時期に何をすべきか」を常に明確にしながら進めます。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                period: "4月〜6月",
                title: "基礎固め期",
                desc: "まず現役時の失敗を分析します。どの科目で点を落としたか、なぜ落としたかを丁寧に整理し、弱点の根本原因を特定。この時期に基礎を再構築しないと、夏以降の演習が意味を持ちません。「わかったつもり」をなくすことに集中します。",
              },
              {
                period: "7月〜9月",
                title: "応用演習期",
                desc: "固めた基礎を問題演習で試す時期。模試を積極的に活用し、本番形式での戦い方を鍛えます。ここで大切なのは「点数」より「分析」。模試後に何を改善すべきかを講師と一緒に整理することが、この時期の最重要作業です。",
              },
              {
                period: "10月〜11月",
                title: "志望校特化期",
                desc: "過去問演習を本格化し、志望校の出題傾向にピンポイントで対応できる力をつけます。大学によって「何が問われるか」は大きく違います。慶應なら論証力、慈恵なら英語の速度、といった具合に、大学別の仕上げをこの時期に行います。",
              },
              {
                period: "12月〜1月",
                title: "直前期",
                desc: "新しいことには手を出しません。これまでの学習を確認・定着させることに集中する時期です。直前期に陥りがちな「不安から新しい参考書に手を出す」という行動は厳禁。メンタル管理も含めて、講師と二人三脚で本番を迎えます。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
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

      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            現状のヒアリングから合格戦略の提案まで、無料でお話しします。
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
