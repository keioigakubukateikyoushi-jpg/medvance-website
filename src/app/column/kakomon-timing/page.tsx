import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ArticleConsultationBox from "@/components/ArticleConsultationBox";

export const metadata = {
  title: "医学部受験の過去問はいつから始めるべきか｜使い方と復習法を解説 | Medvance",
  description:
    "医学部受験の過去問はいつから始めるべきか。高1・高2・高3・浪人それぞれの着手時期、本格演習への移り方、国公立・私立での使い分け、復習の進め方まで現役慶應医学部生が解説します。",
  keywords: [
    "医学部受験 過去問 いつから",
    "医学部 過去問 何年分",
    "医学部受験 過去問 使い方",
    "医学部 過去問 復習",
    "医学部受験 過去問 いつから始める",
  ],
};

const readySignals = [
  {
    title: "志望校が2〜3校まで絞れてきた",
    body:
      "大学ごとの出題形式を見て、今の勉強が本当に志望校に合っているか確認すべきタイミングです。学校群が決まり始めたら、まず1年分だけでも過去問に触れる価値があります。",
  },
  {
    title: "基礎は回しているが、伸び方に不安がある",
    body:
      "英数理の基礎演習を続けているのに、何を優先すべきか見えないなら、過去問でゴールを先に確認した方が軌道修正しやすくなります。基礎の質を上げる材料として使うイメージです。",
  },
  {
    title: "夏以降の計画をそろそろ固めたい",
    body:
      "夏から秋にかけての勉強は、大学別の寄せ方で効率が大きく変わります。夏前に一度触れておけば、秋の本格演習に向けた準備を逆算しやすくなります。",
  },
];

const startGuides = [
  {
    stage: "高校1〜2年生",
    badge: "早期",
    color: "#c9922a",
    title: "「解く」より先に、志望校の問題を知る時期",
    body:
      "高1・高2で過去問を本格的に解き始める必要はありません。ただし、志望校の問題を一度見ておく価値は非常に高いです。英語の長さ、数学の記述量、理科の難度を知るだけで、今やるべき基礎学習の質が変わります。",
    actions: [
      "志望校の英語・数学を1年分だけ眺めて出題レベルを把握する",
      "難しさに圧倒されても気にしない。目的は現状確認ではなくゴール設定",
      "普段の学習では英数の基礎完成を優先する",
    ],
  },
  {
    stage: "高校3年生 春〜夏",
    badge: "診断",
    color: "#3b6cb7",
    title: "傾向把握のために、早めに一度触れる",
    body:
      "高3春〜夏は、志望校を絞る判断材料として過去問に触れる時期です。まだ点数を取りにいく段階ではありません。1〜2年分を使って、どの科目で何が足りないかを洗い出し、夏までの学習計画に反映させるのが目的です。",
    actions: [
      "5〜7月のどこかで志望校の過去問を1年分解く",
      "点数よりも「何の分野で止まったか」を記録する",
      "不足分野を夏の学習テーマに落とし込む",
    ],
  },
  {
    stage: "高校3年生 秋以降",
    badge: "本番",
    color: "#0c1a33",
    title: "ここからが本格演習のスタート",
    body:
      "秋以降は過去問演習が学習の中心になります。夏までに基礎が固まっていれば、過去問で得た課題を短いサイクルで補強し、本番形式に慣れていくことができます。逆にこの時期に基礎が曖昧だと、過去問が『できない確認作業』になってしまいます。",
    actions: [
      "9〜10月から第一志望の過去問を本格的に回す",
      "本番時間で解き、翌日までに必ず復習する",
      "弱点補強と再演習を1セットで回す",
    ],
  },
  {
    stage: "浪人・再受験",
    badge: "逆算",
    color: "#d05050",
    title: "4〜5月から、年間計画の起点として使う",
    body:
      "浪人・再受験では、過去問は秋の仕上げだけに使うものではありません。4〜5月の段階で一度解いて、前年とのギャップを可視化することが重要です。どの大学に寄せるかを早めに決めるほど、1年の学習効率は上がります。",
    actions: [
      "春の段階で第一志望群の過去問を1年分ずつ確認する",
      "去年の失点原因と照らし合わせて年間計画を組み直す",
      "秋は点数調整ではなく、形式慣れと再現力の確認に使う",
    ],
  },
];

const schoolTypePlans = [
  {
    title: "国公立医学部志望",
    body:
      "共通テストと二次の両方を見ながら進める必要があります。春〜夏は二次の傾向把握に軽く触れ、秋以降は共通テストとの配分を見ながら、二次の過去問を本格的に回すのが基本です。",
  },
  {
    title: "私立医学部志望",
    body:
      "英語・数学・理科の出題癖が大学ごとにかなり違うため、国公立より少し早めに形式確認をしておく価値があります。特に時間配分が厳しい大学は、夏前に一度触れるだけでも勉強の方向性が変わります。",
  },
  {
    title: "単科医大・特色の強い大学志望",
    body:
      "記述の重さ、英語の分量、理科の難度、面接や小論文の有無など、大学ごとの差が非常に大きい領域です。『一般的な医学部対策』だけではズレやすいため、志望校が固まったら早めに過去問で確認すべきです。",
  },
];

const steps = [
  {
    title: "1. 本番条件で解く",
    body:
      "時間を計らずに解くと、本番で足りない要素が見えません。英語の速さ、数学の記述量、理科の時間配分まで含めて本番条件で解くことで、実戦上の弱点が初めてわかります。",
  },
  {
    title: "2. 点数ではなく失点理由を分類する",
    body:
      "過去問の価値は点数そのものより『なぜ落としたか』にあります。知識不足なのか、典型問題の精度不足なのか、時間不足なのか、設問形式に慣れていないのかを分類しましょう。",
  },
  {
    title: "3. 弱点を単元レベルに落とす",
    body:
      "英語が弱い、数学ができない、では改善できません。例えば『英語長文の設問処理が遅い』『数IIIの微積で記述が雑』など、次の勉強に直結する粒度まで具体化することが重要です。",
  },
  {
    title: "4. 補強してからもう一度解く",
    body:
      "過去問は解きっぱなしが最悪です。単元補強をした後に、同じ年度を時間短めで再演習するか、近い年度で再現性を確認します。『できるようになった』感覚を必ず数字と答案で確かめましょう。",
  },
];

const mistakes = [
  {
    title: "直前期まで一切触れない",
    body:
      "過去問を『最後の仕上げ用』と思い込み、11月や12月まで触れないのは危険です。出題形式を知らないまま夏を終えると、必要な学習の方向がずれてしまいます。",
  },
  {
    title: "早すぎる時期に点数だけで落ち込む",
    body:
      "高2や高3春の段階で低得点でも、それ自体は問題ではありません。早期の過去問は実力判定ではなく、ゴール設定のために使うものです。数字だけで自信を失うのは本末転倒です。",
  },
  {
    title: "過去問ばかり解いて基礎に戻らない",
    body:
      "過去問は弱点発見ツールです。間違えた単元に戻らず、年度だけを消費していくと伸びません。『演習』と『基礎補強』を必ず往復させる必要があります。",
  },
];

const faqItems = [
  {
    q: "医学部受験の過去問は何年分くらいやればいいですか？",
    a: "第一志望は直近5年分を目安に考えるとよいです。併願校は3年分ずつでも十分なことが多いですが、出題形式に癖がある大学は追加で確認しましょう。大切なのは年数より、解いた後に改善まで回せているかです。",
  },
  {
    q: "基礎が終わっていなくても過去問に触れていいですか？",
    a: "はい。ただし目的を分ける必要があります。基礎が未完成の段階では、点数を取りにいくのではなく出題傾向と不足分野を把握するために使います。本格演習は夏以降、基礎が固まってから移行するのが理想です。",
  },
  {
    q: "医学部の過去問は赤本だけで十分ですか？",
    a: "基本は赤本で問題ありません。ただし、解説が薄い場合は学校の先生や個別指導で答案の質まで確認できると効果が高いです。特に記述型の数学や小論文は、自己採点だけではズレが残りやすいです。",
  },
  {
    q: "共通テスト対策と私立医学部の過去問はどう両立すればいいですか？",
    a: "国公立志望なら、夏までは共通テスト基礎力と二次の土台づくりを並行し、秋以降に大学別対策の比重を上げるのが基本です。私立志望なら、志望校の形式に合わせた過去問着手を少し早める方が効果的です。",
  },
  {
    q: "浪人生は去年解いた過去問をもう一度使っていいですか？",
    a: "使って構いません。むしろ『去年なぜ取れなかったか』『今年は何が変わったか』を比較できるため、浪人生にとっては有効です。ただし答えを覚えているだけでは意味がないので、答案再現の質と根拠を重視してください。",
  },
];

const relatedArticles = [
  { href: "/column/roadmap", title: "医学部受験ロードマップ：いつから・何をすべきか", label: "受験戦略" },
  { href: "/column/juken-timing", title: "医学部受験はいつから始めるべきか", label: "受験戦略" },
  { href: "/column/study-method", title: "医学部合格のための正しい勉強法", label: "勉強法" },
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

export default function KakomonTimingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            医学部受験の過去問はいつから始めるべきか
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            着手時期、使い方、復習法まで現役慶應医学部生が解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「過去問は秋からでいいですか？」「まだ基礎が終わっていないのに解いても意味ありますか？」という相談は、医学部受験では非常に多いです。特に難関大学を目指すほど、過去問をいつから使うかで学習の効率が変わります。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              結論から言うと、過去問は「本格的に解く時期」と「早めに触れておく時期」を分けて考えるべきです。早すぎても遅すぎても非効率ですが、正しく使えば受験勉強の方向性を決める最強の材料になります。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、学年別の始め方、今すぐ触れるべきサイン、国公立・私立での使い分け、1年分の回し方まで実践的に整理します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            こんな状態なら、今すぐ一度過去問に触れるべき
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {readySignals.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                  {item.title}
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            学年・状況別の過去問スタートガイド
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {startGuides.map((item) => (
              <div key={item.stage} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: item.color }}>
                    {item.badge}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.stage}</p>
                    <p className="text-xs font-semibold" style={{ color: item.color }}>{item.title}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>{item.body}</p>
                <ul className="space-y-1">
                  {item.actions.map((action) => (
                    <li key={action} className="flex items-start gap-2 text-xs" style={{ color: "#3d3d3d" }}>
                      <span style={{ color: "#c9922a" }}>→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            目安は「早めに見る、秋から本格的に回す」
          </h2>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              多くの受験生にとって最もバランスがいいのは、高3春〜夏に一度触れて、秋から本格演習に入る流れです。これなら、過去問の傾向を知らずに勉強がズレることも、基礎が曖昧なまま年度だけ消費することも避けやすくなります。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              逆に、秋まで完全に封印すると「志望校に必要な力」が曖昧なまま夏を終えやすくなります。医学部入試は大学ごとの差が大きいので、ゴールを見ないまま走るのは危険です。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              重要なのは、過去問を早く解くことそのものではなく、見つかった課題をその後の学習計画に反映することです。過去問は実力テストではなく、軌道修正の材料として使うと最も効果が高くなります。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            国公立・私立で、過去問の回し方は少し変わる
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {schoolTypePlans.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-4 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <ArticleConsultationBox
            title="過去問をいつから始めるか迷うなら、先に設計を固めた方が安全です"
            description="過去問の時期は、学力と志望校次第で正解が変わります。Medvanceの無料相談では、単に『秋から』と一般論で答えるのではなく、今の状況に合わせた回し方を具体化します。"
            points={[
              "今の学力で、どの大学の過去問にいつ触れるべきか整理できる",
              "過去問で見えた弱点を、夏以降の学習計画にどう落とすか明確になる",
              "国公立と私立の併願バランスまで含めた年間戦略を相談できる",
              "独学だと難しい答案の質や復習の深さも相談できる",
            ]}
            source="column-kakomon-timing-mid"
          />
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            過去問1年分の正しい使い方
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.title} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{step.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            やってはいけない失敗パターン
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mistakes.map((item, i) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>NG {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            「過去問を始める時期」より大切なこと
          </h2>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              本当に重要なのは、過去問を解いたあとに勉強が変わることです。解いた年度数が多くても、弱点補強につながっていなければ意味はありません。逆に、2〜3年分でも丁寧に分析し、復習と再演習まで回せていれば大きく伸びます。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              過去問は「終盤の確認作業」ではなく、「合格までの距離を測る道具」として使うのが正解です。今の自分にとって早いか遅いかを判断できないなら、まずは一度、第三者と一緒に戦略を整理する方が遠回りを防げます。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくある質問
          </h2>
          <div className="space-y-4 mb-12">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="rounded-xl overflow-hidden group"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <summary
                  className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none bg-white"
                  style={{ color: "#0c1a33" }}
                >
                  <span>Q. {faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4" style={{ color: "#c9922a" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm leading-relaxed" style={{ color: "#4a5568", backgroundColor: "#faf9f6" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            関連記事
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block p-5 rounded-xl bg-white hover:shadow-md transition-shadow"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <span
                  className="inline-block text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full mb-3"
                  style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                >
                  {article.label}
                </span>
                <p className="text-sm font-bold leading-snug" style={{ color: "#0c1a33" }}>
                  {article.title}
                </p>
                <p className="text-xs font-semibold mt-3" style={{ color: "#c9922a" }}>
                  記事を読む →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ColumnCTA
        heading="過去問の使い方まで含めて、受験戦略を整理しませんか？"
        subtext="志望校、現在地、残り期間に合わせて、過去問に触れる時期と復習の回し方まで個別に設計します。"
        concerns={[
          "基礎演習はしているのに、志望校との差がどこにあるか見えない",
          "国公立と私立のどちらにどれだけ寄せるべきか迷っている",
          "過去問を解いても、復習の深さや優先順位に自信がない",
        ]}
        benefits={[
          "今の時点で触れるべき大学と年数が明確になる",
          "夏から秋にかけての学習配分と過去問スケジュールが整理できる",
          "答案の作り方や弱点補強の進め方まで具体的に相談できる",
        ]}
        source="column-kakomon-timing-bottom"
      />
    </div>
  );
}
