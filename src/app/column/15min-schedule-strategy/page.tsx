import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "なぜ学習計画を15分という極小単位で区切るのですか？",
    a: "1時間や2時間の単位だと『何から始めようか』と脳が迷う時間が生まれ、勉強開始への心理的障壁が上がります。15分という極小かつ具体的なタスクに細分化することで『今すぐこの数学の公式を1つ理解する』『この15分で英単語を25個暗記する』と行動をミリ単位で指定できるため、脳の着手ハードルが劇的に下がり、サボりようのない環境を作れます。",
  },
  {
    q: "一日の中でどのようなスキマ時間（15分）を活用できますか？",
    a: "通学電車の中の15分（英単語や一問一答）、昼食後の15分（化学公式や前日の復習確認）、お風呂に入る前の15分（模試の間違えノート読み込み）、就寝前の15分（暗記科目の総復習）など、すべてのスキマ時間を合格に必要なタスクに割り振ります。これだけで一日の中で合計60〜90分以上の勉強時間が無意識のうちに純増します。",
  },
  {
    q: "15分単位の計画は自分で作れますか？",
    a: "自分で作成すると、過密すぎる計画を立てて挫折するか、逆に甘すぎる計画になってしまうことが一般的です。Medvanceでは、現在の現在地と第一志望校の合格最低点から逆算した『完璧な合格マイルストーン』に基づき、プロの講師が毎週あなた専用の15分計画を代わりに設計・調整します。",
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

const relatedArticles = [
  { href: "/column/roadmap", title: "医学部受験ロードマップ：いつから・何をすべきか", label: "受験戦略" },
  { href: "/column/yobiko-hybrid-strategy", title: "大手予備校と個別指導を賢く併用する「神併用」の合格戦略", label: "塾・指導" },
  { href: "/for/not-group-school", title: "集団塾が合わない方向けの完全1対1個別管理プログラム", label: "サービス案内" },
];

export const metadata = {
  title: "医学部受験を突破する「15分単位」学習計画の立て方と合格スケジュール",
  description:
    "大雑把な計画ではサボりの原因に。通学や食事の合間などのスキマ時間を15分単位で完全に可視化・管理し、勉強の着手ハードルを極限まで下げる最強の自学自習メソッドを現役慶應医学部生が徹底解説。",
  alternates: {
    canonical: "/column/15min-schedule-strategy",
  },
};

export default function FifteenMinSchedulePage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="15min-schedule-strategy" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema]) }}
      />
      
      {/* Header section */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            受験戦略・学習計画
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)", lineHeight: 1.3 }}>
            医学部受験を突破する『15分単位』学習計画の立て方と合格スケジュール
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            大雑把な「1日10時間勉強」は無意味。一日を96分割し、すべての15分を合格タスクに繋げる極限の自学自習メソッド。
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8 shadow-xs" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              多くの医学部志望生が「毎日10時間勉強する」「数学を3時間やる」という大雑把な計画を立てては挫折しています。なぜ計画通りに進まないのか。それは、本人の意志が弱いからではありません。**「次に何をやればいいか」という脳の迷い時間（着手コスト）が大きいからです。**
            </p>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              医学部受験という膨大な学習量を短期間で完全に消化するには、一日を「96ブロック（15分×96）」に分割し、分刻みでスキマ時間を可視化する「15分単位の計画設計」が圧倒的な力を発揮します。
            </p>
            <p className="text-sm leading-relaxed text-gray-700 font-semibold" style={{ color: "#c9922a" }}>
              本記事では、実際に偏差値を短期間で急上昇させて医学部へと合格した受験生が実践していた、15分計画の設計手順とスキマ時間ルーティンを徹底解説します。
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            大雑把な計画が不合格を引き起こす3つの科学的理由
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "1. 脳の『着手エネルギー（意志力）』の無駄遣い",
                body: "「今から自習室で勉強しよう」と机に向かった際、「さて、数学をやろうか、それとも英語の長文を解こうか」と考えるだけで、脳のエネルギー（ウィルパワー）は著しく消費されます。15分単位で『今から参考書AのP42の問3を解く』とミリ単位で決まっていることで、迷いゼロで即座に集中状態に入ることができます。",
              },
              {
                title: "2. 年間300時間以上の『スキマ時間』の完全ドブ捨て",
                body: "通学電車の15分、ご飯が炊けるまでの15分、お風呂が沸くまでの15分。「まとまった時間ができたら勉強しよう」と考えていると、これら一日の至る所にある15分がすべて無駄になります。この15分が1日4回あれば年間で約365時間。これは大手予備校の授業時間約240回分に匹敵する膨大な時間です。",
              },
              {
                title: "3. 『できた気』になるだけのインプット逃避",
                body: "時間をベースに「数学を2時間やった」と計画を立てると、脳は「2時間机に座っていたこと」で満足し、実際には難しい問題を避けて簡単な参考書をダラダラ読んで理解したつもり（インプット）になる逃避行動を起こします。タスク単位で15分を設計すれば、言い訳が一切通用しません。",
              },
            ].map((reason, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{reason.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600">{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Practical scheduling steps */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            15分単位で学習計画を設計する『3ステップ』
          </h2>
          <div className="space-y-6 mb-12">
            {[
              {
                step: "STEP 01",
                title: "一日の『不動時間』と『スキマ時間』の完全可視化",
                desc: "学校の授業時間、食事、睡眠、入浴、予備校の講義時間など、動かせない時間（不動時間）を一日のタイムスケールにすべて書き出します。これにより、通学電車や食事の前後といった『隠れたスキマ時間（15分〜30分）』が浮き彫りになります。",
              },
              {
                step: "STEP 02",
                title: "すべての課題を『15分で終わる極小タスク』に分解する",
                desc: "「数学のテキストを進める」ではなく、『青チャートP84の例題3と4の解法を完全に暗記する＝15分』『ターゲット1900のNo.400〜450の単語復習＝15分』『金曜日の記述授業の答案の1問解き直し＝15分』のように、15分でやり切れるマイクロタスクに分解して計画表にパズルのように当てはめます。",
              },
              {
                step: "STEP 03",
                title: "毎週末の『定着度二重チェック（確認テスト）』",
                desc: "15分単位で進めたタスクが本当に身についているかを検証するため、週末にランダムでシャッフルした確認テストを実施します。合格点（90%以上）に届かない単元は、翌週の計画に再び15分枠として緊急挿入し、弱点の放置を絶対に許しません。",
              },
            ].map((step) => (
              <div key={step.step} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <span className="text-xs font-bold block mb-2" style={{ color: "#c9922a" }}>{step.step}</span>
                <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{step.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Time table example */}
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            【実例】合格者の「15分スキマ時間」活用タイムスケジュール
          </h2>
          <div className="space-y-3">
            {[
              { time: "07:15〜07:30 (15分)", activity: "通学電車内での英単語（50語）高速反復テスト", detail: "新しい単語ではなく、昨日の間違え単語の最終チェック。" },
              { time: "08:00〜08:15 (15分)", activity: "朝の始業前：数学の公式・定理の証明・導出の再現", detail: "公式をただ覚えるのではなく、なぜ成り立つかを白紙に書いて確認。" },
              { time: "12:45〜13:00 (15分)", activity: "昼休み後半：化学の無機・有機分野の暗記カード確認", detail: "お弁当を食べ終わった後の静かな時間で暗記タスクを消化。" },
              { time: "18:45〜19:00 (15分)", activity: "帰宅後・夕食前：今日の授業テキストの「一番難しかった1問」の解き直し", detail: "夕食前の小腹が空いた時間帯を、あえて最大の頭脳を使う復習に充てる。" },
              { time: "22:00〜22:15 (15分)", activity: "入浴前：今日の物理・化学の確認テスト落ち問題の解き直し", detail: "お風呂が沸くまでの時間を利用し、今日のやり残しを潰す。" },
              { time: "23:30〜23:45 (15分)", activity: "就寝直前：今日解いたすべての英作文答案の音読復習", detail: "睡眠中の記憶定着プロセス（レム睡眠）を最大限に活かすため、ベッドに入る直前に復習。" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl" style={{ border: "1px solid #e5e1d8", backgroundColor: "#fcfbf9" }}>
                <div className="flex-shrink-0 text-xs font-bold pt-0.5" style={{ color: "#c9922a", minWidth: "120px" }}>{item.time}</div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.activity}</p>
                  <p className="text-xs leading-relaxed text-gray-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            学習計画に関するよくある質問
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
          
          <h2 className="text-xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            関連記事
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
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
        heading="あなたの24時間を、合格に向けた15分単位の最強計画に変えませんか？"
        subtext="現在の模試の偏差値、志望校、日々の使えるスケジュールをお知らせください。現役の慶應医学部講師陣が、無駄のない最短の15分計画を無料設計いたします。"
      />
    </div>
  );
}
