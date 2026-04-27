import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "医学部受験で一番大切な科目はどれですか？",
    a: "志望校によって異なりますが、英語と数学はどの医学部でも合否に直結する重要科目です。理科（物理・化学・生物）は大学によって出題傾向が異なるため、志望校の傾向に合わせた対策が必要です。まずは英数を早期に固めることを優先しましょう。",
  },
  {
    q: "1日何時間勉強すれば医学部に合格できますか？",
    a: "時間より質が重要です。ただし目安として、高3・浪人期は1日8〜10時間が一般的です。ただし「8時間こなす」ことを目標にするのではなく、「今日何を理解できたか」を毎日確認することの方が重要です。",
  },
  {
    q: "参考書は何冊やれば医学部に合格できますか？",
    a: "冊数より完成度が重要です。1冊を完璧に仕上げる方が、5冊を中途半端にやるより効果的です。数学であれば青チャートを1冊完全に仕上げることが、多くの医学部合格への近道になります。",
  },
  {
    q: "医学部受験で模試はどう活用すればいいですか？",
    a: "模試は「現状把握」と「弱点発見」のためのツールです。結果に一喜一憂せず、模試後の翌日には必ず復習し、次の学習テーマを更新することが重要です。判定が悪くても、その後の改善で合格した受験生は多数います。",
  },
  {
    q: "医学部受験に向けた勉強はいつから始めればいいですか？",
    a: "今すぐ始めることが最善です。高1からが理想ですが、高3からでも正しい戦略と優先順位の設定で合格を目指せます。まず現状の学力を把握し、志望校合格までのギャップを埋める計画を立てることが最初のステップです。",
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
  { href: "/column/kakomon-timing", title: "医学部受験の過去問はいつから始めるべきか", label: "受験戦略" },
  { href: "/column/juken-timing", title: "医学部受験はいつから始めるべきか", label: "受験戦略" },
];

export const metadata = {
  title: "医学部合格のための勉強法｜現役慶應医学部生が解説 | Medvance",
  description:
    "現役慶應医学部生が、医学部受験の正しい勉強法を科目別に解説。英語・数学・物理・化学・生物の効率的な学習法とよくある失敗パターン。",

  alternates: {
    canonical: "/column/study-method",
  },};

const subjectMethods = [
  {
    name: "英語",
    body: "まず文法の本質的理解から始め、構文解析ができるようにします。単語暗記より長文の中で意味を類推する力を養うことが先決です。毎日少量でも継続することが最も効果的です。",
  },
  {
    name: "数学",
    body: "公式の丸暗記は禁物。なぜその公式が成り立つかを理解してから使う習慣をつけます。解けない問題は答えを見る前に最低20分は考える時間を確保し、思考力を育てます。",
  },
  {
    name: "物理",
    body: "「現象を理解する」ことが最優先。公式は現象理解の結果として導出できるようになることを目標にします。問題演習より教科書の丁寧な精読を優先すべき科目です。",
  },
  {
    name: "化学",
    body: "理論・無機・有機をバランスよく進めます。理論化学の計算は数学と同様に論理的思考が必要。有機化学は反応メカニズムの理解を優先し、丸暗記に頼らない学習を徹底します。",
  },
  {
    name: "生物",
    body: "暗記科目と思われがちですが、近年は考察問題の割合が増えています。用語の暗記より「なぜそのメカニズムが起きるか」を理解することが高得点への近道です。",
  },
];

const mistakes = [
  {
    title: "参考書を何冊もやる",
    body: "1冊を完璧に仕上げることの方が、5冊を中途半端にやるより何倍も効果があります。「完璧にやり切った1冊」が本番での自信になります。参考書はまず1冊に絞りましょう。",
  },
  {
    title: "暗記中心の学習",
    body: "医学部入試は理解力を問う問題が多く、暗記だけでは対応できません。「覚える」より「理解する」を意識した学習に切り替えることが成績向上の第一歩です。",
  },
  {
    title: "直前期まで過去問をやらない",
    body: "過去問は仕上げに使うものではなく、学習の方向性を確認するために早期から活用すべきものです。志望校の過去問は受験の半年前には着手し、傾向を把握しておきましょう。",
  },
];

export default function StudyMethodPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="study-method" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            医学部合格のための正しい勉強法
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部受験で一番よく聞く相談が「何を勉強すればいいかわからない」というものです。参考書は山ほどある。YouTube動画も無限にある。でも、何が正解かわからない。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              実は、勉強法に迷っている時間が一番もったいないです。医学部受験で本当に必要なのは「完璧な勉強法」ではなく、「自分に合った方向性を決めて、それを続けること」です。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、科目別の具体的なアプローチと、実際によく見る失敗パターンをまとめました。参考にしてみてください。
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            まず知っておくべきこと：勉強量より勉強の質
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              医学部受験で最も多い失敗パターンは「一生懸命勉強したのに成績が伸びない」というケースです。原因の多くは「量をこなすことに満足している」こと。1日10時間勉強していても、その方法が間違っていれば成績は上がりません。重要なのは「何を、どのように理解するか」という質の問題です。Medvanceの指導では、量より質を最優先に、一つひとつの概念を確実に理解した上で次のステップに進む学習法を徹底しています。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            科目別の勉強法
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectMethods.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#c9922a" }}>{item.name}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            よくある失敗パターン
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mistakes.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>NG {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            1日8時間の使い方例
          </h2>
          <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
            「8時間勉強したけど何もできた気がしない」という声はよく聞きます。時間を「科目ブロック」で区切ると、集中しやすく進捗も確認しやすいです。あくまで一例ですが、参考にしてください。
          </p>
          <div className="space-y-3">
            {[
              { time: "7:00〜9:00", label: "数学（2時間）", note: "脳が冴えている朝は思考力が必要な数学に。解けない問題は最低15分考えてから解答を見る。" },
              { time: "9:00〜11:00", label: "英語（2時間）", note: "長文読解1題＋文法復習。長文は時間を計って読むことで本番感覚を維持する。" },
              { time: "11:00〜12:00", label: "物理 or 化学（1時間）", note: "午前中の最後に理科を少し入れておく。概念の確認や問題演習。" },
              { time: "13:00〜15:00", label: "理科（2時間）", note: "昼食後は暗記より演習向き。物理なら問題を解いて解法を定着させる時間に。" },
              { time: "15:00〜17:00", label: "苦手科目の集中補強（2時間）", note: "その日の模試結果や前日の振り返りから、最も弱いポイントに絞って取り組む。" },
              { time: "夜（1時間）", label: "復習・翌日の準備", note: "その日学んだことを簡単にノートに書き出す。「できた」「まだ不安」を整理する時間。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 text-xs font-bold pt-0.5" style={{ color: "#c9922a", minWidth: "110px" }}>{item.time}</div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            合格するための思考法
          </h2>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              医学部合格者に共通するのは「才能」ではなく「正しい戦略と継続力」です。自分の現在地を正確に把握し、合格までのギャップを埋める最短ルートを設計する。そして、毎日の学習で「理解できたか」を確認しながら積み上げていく。この思考法さえ身につければ、スタートの偏差値は関係ありません。Medvanceでは、合格に向けた思考法から一緒に構築します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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
        heading="あなたに合った勉強法を、一緒に設計しませんか？"
        subtext="現状の学習法を診断し、改善策をお伝えします。Medvanceの無料相談でお気軽にご相談ください。"
      />
    </div>
  );
}
