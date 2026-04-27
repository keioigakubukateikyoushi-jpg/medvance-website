import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "医学部面接の対策はいつから始めればいいですか？",
    a: "遅くとも11月には始めることをお勧めします。理想は受験の半年前（夏頃）から自己分析と医療知識のインプットを始め、秋以降に模擬面接を繰り返す流れです。ぶっつけ本番が最も危険なパターンです。",
  },
  {
    q: "医学部面接で落とされるパターンはどんなものですか？",
    a: "最多のパターンは「準備した模範解答を丸暗記して話す」ことです。面接官はプロのため、暗記した回答はすぐにわかります。また、志望動機が抽象的すぎる・大学への理解が浅いことも落とされる原因になります。",
  },
  {
    q: "MMI（多面的面接）はどう対策すればいいですか？",
    a: "倫理的問題について普段から考える習慣をつけることが最も効果的です。医療ニュースを読む・生命倫理に関する本を1冊読む・ロールプレイの練習をするなどが有効です。正解を求めるのではなく「どう考え、どう伝えるか」を意識してください。",
  },
  {
    q: "面接で「医師を目指した理由」はどう答えればいいですか？",
    a: "具体的なエピソード（家族の入院体験、ボランティア活動、医療現場との接点など）を交えて話すことが重要です。「患者に寄り添いたい」という言葉は多くの受験生が使うため、あなた自身の経験から語られる言葉で表現することが評価につながります。",
  },
  {
    q: "面接の練習は一人でできますか？",
    a: "自己分析や答えの準備は一人でできますが、実際に話す練習は第三者に面接官役をしてもらうことが効果的です。録画して見返すことで、話し方・目線・表情などの改善点を確認できます。Medvanceでは模擬面接と個別フィードバックを提供しています。",
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

export const metadata = {
  title: "医学部面接対策の完全ガイド | Medvance",
  description:
    "医学部面接でよく聞かれる質問と回答例、MMI対策、落とされるパターンまで解説。配点が高い面接で確実に合格点を取る準備法。",

  alternates: {
    canonical: "/column/mensetu",
  },};

const commonQuestions = [
  {
    q: "なぜ医師を目指そうと思ったのですか？",
    point: "回答のポイント",
    answer:
      "「漠然と医師に憧れた」だけでは評価されません。具体的なエピソード（家族の入院体験、ボランティア活動、医療現場での経験など）と、それがどのように医師を志す動機につながったかを論理的に話せるよう準備します。「患者に寄り添いたい」という言葉は多くの受験生が使うため、あなた自身の言葉で表現することが重要です。",
  },
  {
    q: "自己PRをしてください",
    point: "回答のポイント",
    answer:
      "医師として役立つ資質（粘り強さ・コミュニケーション能力・問題解決力など）と結びつけて話しましょう。勉強の話だけでなく、部活・ボランティア・課外活動など具体的なエピソードを交えると説得力が増します。「自分はこういう人間だ」という軸を一つ明確にして、そこから話を展開するのが伝わりやすい構成です。",
  },
  {
    q: "チーム医療についてどう思いますか？",
    point: "回答のポイント",
    answer:
      "医師・看護師・薬剤師・理学療法士など多職種が連携する重要性を理解していることを示します。単に「大切だと思います」で終わらず、なぜ重要か（患者の全人的ケア、ミス防止など）を説明し、自分が将来どのようにチームに貢献したいかを加えると深みが出ます。",
  },
  {
    q: "医療問題について何か関心を持っていることはありますか？",
    point: "回答のポイント",
    answer:
      "高齢化社会・地域医療の偏在・医師の働き方改革・AI医療など、現代の医療が抱える課題のうち一つを深く調べておきましょう。表面的な知識だけでなく「自分はどう思うか」という意見を持つことが重要です。面接官は正解を求めているのではなく、あなたが自分の頭で考えられる人物かどうかを見ています。",
  },
  {
    q: "本学を選んだ理由を教えてください",
    point: "回答のポイント",
    answer:
      "「受かりやすいから」「家から近いから」は絶対に言ってはいけません。その大学の教育方針・カリキュラム・附属病院の特色・地域との連携など、具体的な理由を示します。オープンキャンパスや大学説明会への参加経験があれば積極的に触れましょう。大学への熱意と、その大学でなければならない理由を準備してください。",
  },
];

const mmiInfo = [
  {
    title: "MMIとは何か",
    body: "MMI（Multiple Mini Interview：多面的面接）は、複数の短い面接ステーションを順番に回る形式です。各ステーションで異なる課題（倫理的ジレンマ・ロールプレイ・グループディスカッションなど）に取り組み、それぞれ別の面接官が評価します。導入している大学が増えており、対策が必要です。",
  },
  {
    title: "MMIで問われること",
    body: "正解のない倫理的な問い（「末期がん患者に真実を伝えるべきか」など）に対して、自分の考えを論理的に述べる力が問われます。また、状況判断力・コミュニケーション能力・共感力なども評価対象です。「正しい答え」を求めるのではなく「どう考え、どう伝えるか」のプロセスが重要です。",
  },
  {
    title: "MMIの対策方法",
    body: "倫理的問題について普段から考える習慣をつけることが最も効果的です。医療ニュースを読む・生命倫理に関する本を1冊読む・ロールプレイの練習をするなどが有効。本番では焦らず、まず「自分はどう考えるか」を整理してから話し始めることが大切です。",
  },
];

const failPatterns = [
  {
    title: "準備した「模範解答」を丸暗記して話す",
    body: "面接官はプロです。暗記した答えは話し方や目線に表れます。大切なのはキーワードを覚えることではなく、自分の言葉で自然に話せるようになること。繰り返し練習して「自分の考えとして話せる状態」にしましょう。",
  },
  {
    title: "志望動機が曖昧・抽象的すぎる",
    body: "「患者さんの役に立ちたい」「人が好きだから」という抽象的な動機は、医師でなくても言えます。具体的なエピソード＋その経験から学んだこと＋それが医師という職業とどう結びつくか、という構造で話せるよう準備しましょう。",
  },
  {
    title: "大学への理解が浅い",
    body: "その大学の特色を把握していないまま「御校を選んだ理由」を答えようとすると、どうしても表面的な回答になります。大学のウェブサイト・パンフレット・オープンキャンパスで具体的な情報を仕入れておくことが必須です。",
  },
  {
    title: "非言語コミュニケーションへの無頓着",
    body: "面接は話す内容だけでなく、声のトーン・目線・表情・姿勢も評価されます。緊張から声が小さくなったり、目線が泳いだりしやすいため、模擬面接で体を通じた練習が必要です。録画して見返すことも効果的です。",
  },
];

export default function MensetsuPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="mensetu" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c9922a" }}
          >
            コラム
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            医学部面接対策の完全ガイド
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            よく聞かれる質問・MMI対策・落とされるパターンまで
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="p-8 rounded-2xl bg-white mb-8"
            style={{ border: "1px solid #e5e1d8" }}
          >
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#3d3d3d" }}
            >
              医学部入試において、面接は軽視されがちですが、実は合否を左右する重要な要素です。特に私立医学部では面接の配点が高く、筆記試験でボーダーライン上にいる受験生の合否が面接で決まるケースも珍しくありません。
            </p>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "#3d3d3d" }}
            >
              面接対策で最も重要なのは「正しい答えを覚えること」ではありません。自分の考えを自分の言葉で伝えられるかどうか、そして医師という職業への理解と覚悟があるかどうかを示すことです。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、よく聞かれる質問の回答ポイント、MMIへの対策、そして面接で落とされやすいパターンを解説します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold mb-10"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            よく聞かれる質問と回答のポイント
          </h2>
          <div className="space-y-6">
            {commonQuestions.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <div
                  className="px-6 py-4"
                  style={{ backgroundColor: "#0c1a33" }}
                >
                  <p className="text-sm font-bold text-white">Q. {item.q}</p>
                </div>
                <div className="px-6 py-5" style={{ backgroundColor: "#f7f5f0" }}>
                  <p
                    className="text-xs font-semibold mb-2"
                    style={{ color: "#c9922a" }}
                  >
                    {item.point}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            MMI（多面的面接）とは
          </h2>
          <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
            近年、MMI形式を採用する大学が増えています。従来の個人面接とは異なる形式のため、専用の対策が必要です。
          </p>
          <div className="space-y-4">
            {mmiInfo.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <p
                  className="font-bold text-sm mb-3"
                  style={{ color: "#c9922a" }}
                >
                  {String(i + 1).padStart(2, "0")}. {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            面接で落とされる人のパターン
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {failPatterns.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <p
                  className="font-bold text-sm mb-3"
                  style={{ color: "#0c1a33" }}
                >
                  NG {i + 1}. {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            面接対策の進め方
          </h2>
          <div className="space-y-3">
            {[
              {
                step: "Step 1",
                label: "自己分析",
                note: "なぜ医師を目指すのか、自分の強みは何か、どんな医師になりたいかを言語化する。医師を志したエピソードは特に詳しく整理する。",
              },
              {
                step: "Step 2",
                label: "志望大学の研究",
                note: "大学の教育方針・カリキュラム・附属病院・特色を調べ、「なぜその大学か」を具体的に説明できるようにする。",
              },
              {
                step: "Step 3",
                label: "医療・社会問題のインプット",
                note: "医師の働き方改革・高齢化・地域医療・AIなど、現代の医療課題について自分なりの意見を持つ。",
              },
              {
                step: "Step 4",
                label: "模擬面接の実施",
                note: "第三者に面接官役をしてもらい、実際に声に出して話す練習を繰り返す。録画して改善点を確認する。",
              },
              {
                step: "Step 5",
                label: "フィードバックと改善",
                note: "練習後に「何が伝わったか」「どこが弱かったか」を確認して改善する。本番前に最低3〜5回は実施したい。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 rounded-xl bg-white"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <div
                  className="flex-shrink-0 text-xs font-bold pt-0.5"
                  style={{ color: "#c9922a", minWidth: "60px" }}
                >
                  {item.step}
                </div>
                <div>
                  <p
                    className="font-bold text-sm mb-1"
                    style={{ color: "#0c1a33" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#6b7280" }}
                  >
                    {item.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <ColumnCTA
        heading="面接練習・小論文対策もMedvanceにお任せください"
        subtext="模擬面接から志望動機の磨き方まで、完全1対1で個別サポートします。"
      />
    </div>
  );
}
