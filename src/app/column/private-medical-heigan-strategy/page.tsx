import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import ColumnArticleSchemas from "@/components/ColumnArticleSchemas";

const faqItems = [
  {
    q: "私立医学部は何校受けるのが一般的で安全ですか？",
    a: "一般的には6〜8校程度に出願する受験生が多いですが、単に出願数を増やすだけでは「連続受験による心身の疲労」を引き起こし、本命校のパフォーマンスを著しく低下させます。体力的・精神的な限界を考慮し、最大でも「3連戦（3日連続受験）」以内に抑え、間に移動日や完全休養日を挟む日程設計が絶対に必要です。また、実力相応校・チャレンジ校・安全校（滑り止め）を科目相性を踏まえてバランスよく配置します。",
  },
  {
    q: "一次試験と二次試験のバッティング（重複）はどのように回避すればよいですか？",
    a: "私立医学部の多くは、一次試験（学科）合格発表後に二次試験（面接・小論文）の具体的な受験日程が大学側から一方的に指定されます。複数の一次に合格した際の日程重複を見越し、あらかじめ「出願手続き時に面接日を複数の候補から選択・変更できる大学」を把握しておくか、出願日程のシミュレーション表を作っておくことが重要です。Medvanceでは、これを1枚の表にまとめた受験校ポートフォリオを生徒個別に作成し、出願計画を完全サポートしています。",
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
  { href: "/column/gakuhi", title: "医学部の学費・費用を徹底比較：私立・国公立の6年間費用一覧", label: "大学選び" },
  { href: "/column/private-nyuushiyasui", title: "私立医学部で比較的入りやすい穴場大学と合格の現実", label: "受験情報" },
  { href: "/calendar", title: "医学部入試日程カレンダー＆1次・2次試験対比バッティング表", label: "受験情報" },
];

export const metadata = {
  title: "私立医学部の賢い併願パターンと滑り止め校の選び方：連続受験の限界と出願日程設計 | Medvance",
  description:
    "受験料やスケジュールの破綻を防ぎ、合格率を最大化する私立医学部併願戦略。体力的・精神的に安全な受験日数、一次試験・二次試験の日程重複（バッティング）回避のチェックポイント、滑り止め校の決定基準を徹底解説します。",
  alternates: {
    canonical: "/column/private-medical-heigan-strategy",
  },
};

export default function PrivateMedicalHeiganStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      <ColumnArticleSchemas slug="private-medical-heigan-strategy" articleOnly />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema]) }}
      />
      
      {/* Header section */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            受験戦略・出願日程
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)", lineHeight: 1.3 }}>
            私立医学部の賢い併願パターンと滑り止め校の選び方：連続受験の限界と出願日程設計
          </h1>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
            出願校の決定は、合否を決める最大の「投資判断」です。複数校の併願で陥る体力的破綻や、1次・2次日程のバッティング（重複）を回避するプロの併願設計術。
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8 shadow-xs" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              「とりあえず受けられるだけ出願しよう」「偏差値順に並べて上から8校選べば大丈夫だろう」——。
            </p>
            <p className="text-sm leading-relaxed mb-4 text-gray-700">
              私立医学部受験において、このような無計画な出願ほど危険なものはありません。私立医学部の一般入試は1月下旬から2月中旬にかけての過密日程で行われ、各大学の試験会場は全国に点在します。**無計画な併願は、5連戦・6連戦といった極限のスケジュールを招き、移動負荷と疲労から本命校の試験で実力を半分も発揮できなくなる「出願の自滅」を引き起こします。**
            </p>
            <p className="text-sm leading-relaxed text-gray-700 font-semibold" style={{ color: "#c9922a" }}>
              本記事では、受験生の体力を守りながら合格率を最大化する「黄金の併願パターン」と、1次合格後に高確率で発生する「2次試験日程のバッティング」の完全防衛策を徹底解説します。
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            私立医学部併願で絶対守るべき「3つの鉄則」
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-gray-700">
            スケジュール倒れを防ぎ、確実に「進学できる1枚の合格切符」を勝ち取るための出願設計ルールです。
          </p>
          <div className="space-y-4 mb-10">
            {[
              {
                title: "1. 限界受験数は『3連戦まで』。必ず中1日の休養・移動日を挟む",
                body: "医学部の一般入試は、朝から夕方まで丸1日を費やす極限の集中力を要する試験です。2連戦でも心身の消耗は激しく、3連戦目になるとケアレスミスが激増します。4連戦以上は絶対に避けてください。遠方（東京、関西、地方など）への移動を伴う場合は、必ず前日または中1日の移動日・休養日を挟むことで、本命校に万全のコンディションで挑めるようにスケジュールを整えます。",
              },
              {
                title: "2. 『科目相性』を最優先し、偏差値表だけの滑り止め選定をやめる",
                body: "「偏差値が一番低いからここが滑り止め（安全校）」という判断は私立医学部では通用しません。例えば、英語の記述量が膨大で配点比率が高い大学は、英語が苦手な受験生にとっては偏差値が低くても『全く合格できない難関校』に化けます。配点、大問構成、マーク式か記述式か、といった過去問の相性分析をもとに、客観的に点数が取れる大学を滑り止めとして配置します。",
              },
              {
                title: "3. 1次合格後の『2次試験（面接・小論文）の重複』を完全シミュレーションする",
                body: "私立医学部の2次試験日は、1次の合格通知が届いてから指定されることが多く、日程が被りやすい最大の罠です。出願する時点で、各大学の2次試験日候補が複数あるか、また『一次手続き時の先着順で面接日を選択・変更できるか』をすべて洗い出し、バッティングが発生した際の優先順位（本命校への出席）を決めておく必要があります。",
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

      {/* Recommended Portfolio Section */}
      <div className="py-20 px-4 bg-white border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            合格率を最大化する「受験校ポートフォリオ」の標準設計
          </h2>
          <p className="text-sm leading-relaxed mb-8 text-gray-700">
            Medvanceでは、受験する大学を以下の3つのグループに分類し、バランスの取れた出願校リストを作成しています。
          </p>
          
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>【グループA：チャレンジ校・本命校（2〜3校）】</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                自分の実力・偏差値と同等、またはやや上の第一志望・本命校です。英語の記述対策や、志望度の高い大学の特殊な過去問（例：慈恵、順天堂、慶應など）に夏以降から15分単位の計画で特化対策を行います。日程的にベストなコンディションで受けられるように前後の受験を薄く配置します。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>【グループB：実力相応校・勝負校（3〜4校）】</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                模試でC判定〜B判定が出ている、現在の実力で十分に合格が狙える大学群です。科目相性（例：理科2科目の配点比率が高い等）が最も一致している大学をここから複数選定し、得点期待値を最大化させます。この層の大学から確実に1次合格を取り、2次へ駒を進めます。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>【グループC：安全校・滑り止め校（1〜2校）】</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                模試でA判定またはB判定であり、過去問を初見で解いても合格最低点を安定して超えられる大学です。ここで確実に「合格発表を1月中に手元に持つ（例：共通テスト利用や1月下旬の超早期一般）」ことが、2月本番期におけるメンタルの安定と他校への強気なチャレンジにつながります。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlap calendar check */}
      <div className="py-16 px-4 bg-[#f7f5f0]">
        <div className="max-w-3xl mx-auto border rounded-2xl bg-white p-8" style={{ borderColor: "#e5e1d8" }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            🗓️ 1次・2次試験対比バッティングカレンダーの活用
          </h2>
          <p className="text-sm leading-relaxed text-gray-700 mb-6">
            Medvanceのウェブサイト内には、私立医学部の試験日程や、一次・二次試験がどう重複（バッティング）するのかを縦に並べて一目で確認できる便利なカレンダーページを常時設置しています。
          </p>
          <p className="text-sm leading-relaxed text-gray-700 mb-8">
            「自分が併願する大学の日程がどう重なっているか」を瞬時に視覚化し、体力を温存した最適な出願スケジュールを組むことが可能です。
          </p>
          <div className="text-center">
            <Link
              href="/calendar"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0c1a33" }}
            >
              入試日程カレンダー＆対比表を見る
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            私立医学部併願・滑り止め選びに関するよくある質問
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
        heading="受験料や体力を無駄にしない、あなたに最適な『併願プラン』を作ってみませんか？"
        subtext="現在検討している受験予定校や、得意・不得意科目、予算の上限などをお知らせください。志望校合格に向け、体力を温存しながら一次合格を最大化し、日程重複リスクを完全に排除した「出願シミュレーション表」をプロ講師が作成いたします。"
      />
    </div>
  );
}
