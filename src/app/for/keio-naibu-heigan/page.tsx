import ForPageSchemas from "@/components/ForPageSchemas";
import Link from "next/link";
import TutorProfiles from "@/components/TutorProfiles";
import LineButton from "@/components/LineButton";
import KeioHeiganSimulator from "@/components/KeioHeiganSimulator";
import Image from "next/image";

export const metadata = {
  title: "慶應内部進学＆外部一般受験ダブル対策｜医学部推薦と併願合格を両立 | Medvance",
  description:
    "【慶應医学部推薦＆一般受験両立専門】系列校（塾高・志木・女子・SFC）での医学部内部進学枠の死守と、万が一推薦枠から漏れた場合に備えた国公立・私立医学部（慈恵・順天堂・日本医大等）一般入試のダブル対策。現役慶應医学部生が完全伴走指導。",
  keywords: [
    "慶應 内部進学 外部受験",
    "慶應 内部推薦 一般併願",
    "塾高 医学部 外部受験",
    "慶應志木 医学部 外部",
    "慶應女子 医学部 一般",
    "医学部 推薦 併願 両立",
    "医学部ダブル対策"
  ],
  alternates: {
    canonical: "/for/keio-naibu-heigan",
  },
};

const GOLD = "#c9922a";
const GOLD_SOFT = "#b88a26";
const NAVY = "#0c1a33";
const NAVY_LIGHT = "#162540";
const CREAM = "#f7f5f0";

const heiganStrategies = [
  {
    title: "① カリキュラムの一貫化：『学内プリント』を『一般受験の基礎』に昇華する",
    body: "慶應附属校の理系定期試験は極めてレベルが高く、大学受験の標準〜発展レベルの問題がそのまま出題されます。学校のプリントを丸暗記するだけの勉強では、内部進学にしか通用しません。Medvanceでは、プリントの背後にある解法の原理（一般入試で通用する本質的な数学・理科の論理）を徹底指導。学校成績を上げながら、外部一般入試で戦える圧倒的土台を同時に完成させます。"
  },
  {
    title: "② 時間配分の黄金比率：『15分単位の計画表』による徹底管理",
    body: "『学校の宿題やレポート』と『一般受験用の過去問・問題集演習』を個人で両立しようとすると、どちらかが必ず崩壊します。Medvanceは、高1〜高3の各時期における『内部対策8割・外部対策2割』といった最適な比率から逆算し、1日24時間を『15分単位のタスク計画表』に落とし込んで週間管理。自学自習のムダを極限まで排除します。"
  },
  {
    title: "③ セーフティネットの構築：高3秋〜冬の選考確定から即座に一般直前対策へ",
    body: "内部推薦の枠が正式に確定するのは高3の秋〜冬。もしボーダーに届かなかった場合、そこから一般受験対策を始めたのでは絶対に間に合いません。Medvanceでは、最初から『両方の網』を張って指導を進めます。常に模試や志望校過去問での得点力を並行して磨き続けるため、推薦枠から万が一外れたとしても、1日のタイムラグもなく超難関私立医学部（慈恵・順天堂・日医）の直前対策へとシフトできます。"
  }
];

const targetRoadmaps = [
  {
    period: "高1 〜 高2前半",
    ratio: "内部推薦対策：80% ｜ 外部一般対策：20%",
    aim: "とにかく学校成績（GPA）の最大化に集中します。数学・英語の基礎を圧倒的スピードで先取りし、定期試験で学年上位グループを確定させます。残りの20%の時間で、一般受験の記述の基礎力や英語長文の速読をアドオンします。"
  },
  {
    period: "高2後半 〜 高3前半",
    ratio: "内部推薦対策：60% ｜ 外部一般対策：40%",
    aim: "内部評定の死守を継続しつつ、一般受験模試（駿台・河合）でのA・B判定をターゲットに設定します。数Ⅲの記述答案作成力や、難関大化学・物理の典型難問の処理スピードを高め、内部推薦と一般合格ラインの『二兎』を確実に追いかけます。"
  },
  {
    period: "高3後半（推薦確定期）",
    ratio: "推薦ボーダークリアなら推薦特化 ｜ 僅差のボーダーなら50%:50%で最終直前演習",
    aim: "内部推薦会議に向けた志望理由書・面接・小論文の仕上げ（推薦対策）と、併願する慈恵・順天堂等の過去問演習（一般対策）の配分を、現在の評定確定状況に基づいてシビアに判断。最も安全かつ勝率の高いハイブリッド出願戦略を実行します。"
  }
];

const backupUniversities = [
  {
    rank: "超難関併願ターゲット",
    names: "東京慈恵会医科大 / 順天堂大 / 日本医科大",
    desc: "慶應医学部と並び、私立医学部御三家・新御三家とされる最難関校。出題形式に癖がありますが、慶應附属校のハイレベルな数学・英語レジュメを本質的に理解している生徒であれば、志望校特化の過去問演習を行うことで極めて高い合格シナジーを発揮します。"
  },
  {
    rank: "難関併願セーフティ",
    names: "昭和大 / 東京医科大 / 東邦大 / 杏林大",
    desc: "出題の標準性が高く、ケアレスミスを防ぎ標準問題を完璧に処理する力が問われます。Medvanceの『独自データベース×AI』で公式や典型パターンの定着度を色分け管理しているため、抜け漏れのない盤石な得点力を発揮し、高確率で合格枠を押さえます。"
  },
  {
    rank: "国公立医学部ルート",
    names: "千葉大 / 横浜市立大 / 東京医科歯科大",
    desc: "共通テストの全教科（国語・社会含む）を両立させる国公立ルート。内部評定のための全教科対策が、そのまま共通テストの得点源に結びつくため、計画的に社会・国語を15分タスクに組み込むことで、現役での国公立併願合格を強力に後押しします。"
  }
];

const faqs = [
  {
    q: "内部推薦を狙いながら一般受験の勉強もすると、中途半端になりませんか？",
    a: "中途半端になる最大の原因は『無計画』です。学校の宿題に追われるだけ、あるいは一般用の問題集をただ解くだけの状態だから崩壊するのです。Medvanceでは、日々の学校カリキュラムが一般受験のどの範囲の何に該当するかを完全に紐付けし、同一パッケージとして学習を整理します。計画を『15分単位』で徹底的に仕分けするため、学習の重複やムダを排除し、両方の実力をシナジー的に高めることができます。"
  },
  {
    q: "いつからダブル対策をスタートすべきですか？",
    a: "高校2年生の春からスタートするのが最も理想的です。高1の評定状況を見て、医学部推薦のボーダー（上位数％）に対して『少しでも不安がある』『ボーダーの当落線上にいる』と判断した場合は、その瞬間から一般受験の防波堤（セーフティネット）を並行して構築し始めるべきです。高3の秋からでは外部一般受験の演習量が絶対に足りなくなります。"
  },
  {
    q: "推薦から一般受験に完全に切り替えるべきタイミングはありますか？",
    a: "高3の1学期終了時点（多くの系列校で評定算出の大枠が決まるタイミング）で、医学部推薦枠の可能性が極めて低い（例えば塾高で順位が50位以下など）と確定した場合は、完全に一般受験対策（過去問演習や併願校対策）へシフトします。しかし、Medvanceの生徒は最初から並行して一般受験の学力を磨いているため、『切り替えによる学力ギャップ』で挫折するリスクが一切ありません。"
  },
  {
    q: "一般受験の面接・小論文対策と、内部推薦用の対策は異なりますか？",
    a: "本質は同じですが、推薦では『系列校でどのような活動をし、それをどう慶應医学部に還元するか』という縦のつながりが重視されます。一般入試の面接では『医師としての倫理観や適性』がより厳しく見られます。Medvanceは両方の選考パターンに対応した専門の模擬面接と書類添削を提供するため、どちらのルートに転んでも最高の評価を得られます。"
  }
];

export default function KeioNaibuHeiganPage() {
  return (
    <>
      <ForPageSchemas slug="keio-naibu-heigan" />
      <div className="min-h-screen bg-white">
        {/* ── HERO SECTION ───────────────────────────── */}
        <section style={{ backgroundColor: NAVY }} className="relative py-28 px-4 text-white overflow-hidden">
          {/* Glow Effects */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#c9922a]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span 
              className="inline-block text-[10px] font-black tracking-[0.35em] uppercase mb-6 px-4 py-1.5 rounded-full border border-[#c9922a]/30"
              style={{ color: GOLD, backgroundColor: "rgba(201,146,42,0.08)" }}
            >
              Keio Medical Hybrid Strategy
            </span>
            
            <h1 
              className="text-3xl md:text-5xl lg:text-[3.25rem] font-black mb-8 leading-tight tracking-wide"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              慶應医学部 内部推薦枠死守<br />
              <span style={{ color: GOLD }}>＆ 外部一般受験</span>同時攻略プログラミング
            </h1>
            
            <div className="w-20 h-1 bg-[#c9922a] mx-auto mb-8"></div>
            
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-slate-300 font-medium mb-12">
              「医学部推薦枠に入りたい、けれど万が一の時も浪人は絶対にしたくない。」<br className="hidden md:block" />
              塾高・志木・女子・SFCの学校評定対策と、国公立・併願私立医学部合格のための一般受験対策を両立する唯一のシステム。
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact?from=keio-naibu-heigan-hero"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white transition-opacity hover:opacity-90 w-full sm:w-auto shadow-md"
                style={{ backgroundColor: GOLD }}
              >
                内部・外部ダブル合格戦略診断（80分）を申し込む
              </Link>
              <LineButton label="LINEで気軽に相談する" size="lg" className="!rounded-xl !py-4 !px-8 w-full sm:w-auto" />
            </div>
          </div>
        </section>

        {/* ── INTERACTIVE SIMULATOR ───────────────────────────── */}
        <section className="py-16 px-4 bg-slate-100 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <KeioHeiganSimulator />
          </div>
        </section>

        {/* ── THE SYSTEM (両立の極意) ───────────────────────────── */}
        <section className="py-24 px-4 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
                Hybrid System Mechanics
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                推薦と一般一般受験を『両立』させる3つの絶対原則
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto">
                個人や通常の個別指導では不可能なダブル対策を、Medvanceの緻密な管理が現実のものにします
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {heiganStrategies.map((strat, i) => (
                <div 
                  key={i} 
                  className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-extrabold text-base mb-4 text-slate-900 leading-snug" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                      {strat.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-[#c9922a] mb-4"></div>
                    <p className="text-xs leading-relaxed text-slate-500">
                      {strat.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ROADMAP ───────────────────────────── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
                Phase Control Roadmap
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                内部進学と一般受験の「時間配分ロードマップ」
              </h2>
              <p className="text-sm text-slate-500">
                学年に応じて学習比率を細かくコントロールし、合格可能性を最大化します
              </p>
            </div>

            <div className="space-y-8">
              {targetRoadmaps.map((map, i) => (
                <div 
                  key={i} 
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4 border-b pb-3 border-slate-300/40">
                    <span className="text-xs font-black tracking-widest uppercase text-slate-900" style={{ color: GOLD }}>
                      ■ {map.period}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-md text-slate-100 bg-[#0c1a33]">
                      配分比率：{map.ratio}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600 font-semibold">
                    {map.aim}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BACKUP TARGETS ───────────────────────────── */}
        <section className="py-24 px-4 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
                Safety Net Targets
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                推薦漏れを完全に防ぐ「一般受験併願・志望校パッケージ」
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto">
                慶應医学部を狙える実力を持つ生徒のための、合格難易度とカリキュラム相性から厳選した併願ルート
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {backupUniversities.map((uni, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <span className="text-[10px] font-black text-amber-800 bg-amber-500/10 px-2.5 py-1 rounded-md mb-3 inline-block">
                      {uni.rank}
                    </span>
                    <h3 className="font-extrabold text-base mb-3 text-slate-900" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                      {uni.names}
                    </h3>
                    <div className="w-12 h-0.5 bg-[#c9922a] mb-4"></div>
                    <p className="text-xs leading-relaxed text-slate-500">
                      {uni.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TUTOR PROFILES ───────────────────────────── */}
        <TutorProfiles />

        {/* ── HIGH QUALITY JAPANESE REALISTIC PHOTO (Tier 4) ── */}
        <section className="bg-white px-4 py-12">
          <div className="mx-auto max-w-3xl relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_rgba(12,26,51,0.12)] border border-white/40 ring-1 ring-[#c9922a]/10 group">
            <div className="absolute inset-0 bg-amber-100/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500 z-10" />
            <Image 
              src="/images/generated/japanese_student_keio_heigan.png" 
              alt="慶應内部推薦の維持と他大一般一般受験の両立に向け、赤本や計画表を開き集中して取り組む受験生" 
              className="w-full h-auto object-cover max-h-[420px] transition-transform duration-700 group-hover:scale-[1.03]"
              width={1024}
              height={1024}
              sizes="(min-width: 1024px) 900px, 100vw"
            />
          </div>
        </section>

        {/* ── FAQ ACCORDION ───────────────────────────── */}
        <section className="py-24 px-4 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                ダブル対策（内部＆外部）に関するよくある質問
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-xs transition-shadow duration-300"
                >
                  <summary
                    className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-sm select-none list-none text-slate-900 bg-white"
                  >
                    <span>Q. {faq.q}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4 text-[#c9922a]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-xs md:text-sm leading-relaxed text-slate-500 bg-slate-50/50 border-t border-slate-100">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CALL TO ACTION ───────────────────────────── */}
        <section style={{ backgroundColor: NAVY }} className="py-24 px-4 text-white relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-[#0c1a33] to-[#0c1a33] pointer-events-none"></div>

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#c9922a] uppercase mb-4">
              Secure Both Pathways Now
            </span>
            <h2
              className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              内部進学の推薦枠も、外部受験の合格通知も。<br className="hidden md:block" />
              両方を手に入れるロードマップを個別に無料作成します
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-10 text-slate-300 max-w-2xl mx-auto">
              現状の学内評定と、外部模試の得点力ギャップから、今どの教科にどの比率で時間を使うべきか、現役の慶應医学生受験アドバイザーがその場でお教えします。強引な勧誘等は一切ありません。
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact?from=keio-naibu-heigan-cta"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white transition-opacity hover:opacity-90 w-full sm:w-auto shadow-md"
                style={{ backgroundColor: GOLD }}
              >
                内部・外部ダブル合格戦略診断（80分）を申し込む
              </Link>
              <LineButton label="LINEで相談する" size="lg" className="!rounded-xl !py-4 !px-8 w-full sm:w-auto" />
            </div>

            <p className="text-[10px] mt-4 text-slate-400">
              ※保護者様のみ、あるいは親子ご同席での参加も大歓迎です。オンラインにて全国からご相談可能です。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
