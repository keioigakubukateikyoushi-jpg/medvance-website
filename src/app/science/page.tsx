import Link from "next/link";
import Image from "next/image";
import ScientificMethod from "@/components/ScientificMethod";
import LineButton from "@/components/LineButton";
import { buildBreadcrumbSchema, siteUrl } from "@/lib/seo";

const NAVY = "#0c1a33";
const NAVY_LIGHT = "#162540";
const GOLD = "#c9922a";

export const metadata = {
  title: "医学・脳科学エビデンスに基づく学習メソッド｜医学部受験専門塾 Medvance",
  description:
    "Medvanceが実践する、医学・脳科学的エビデンス（能動的想起、分散学習、交互学習、二重符号化）に基づいた超効率的学習メソッド。忘却曲線を科学的に制御し、確実な合格力を養成します。",
  alternates: {
    canonical: "/science",
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "ホーム", url: "/" },
  { name: "脳科学メソッド", url: "/science" },
]);

export default function SciencePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* ── 1. HERO ───────────────────────────── */}
      <section style={{ backgroundColor: NAVY }} className="relative py-24 px-4 text-white overflow-hidden">
        {/* Subtle glow effect */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#c9922a]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span
            className="inline-block text-xs font-bold tracking-[0.35em] uppercase mb-4 text-[#c9922a]"
          >
            Science & Evidence
          </span>
          <h1
            className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-wide"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            感覚や根性論に頼らない、<br className="hidden md:block" />
            <span style={{ color: GOLD }}>脳科学エビデンス</span>による学習法
          </h1>
          <div className="w-16 h-1 bg-[#c9922a] mx-auto mb-6"></div>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto text-slate-300">
            最難関医学部の膨大な出題範囲を力づくで覚えるのには限界があります。
            合格者自身が実践し、医学的に効果が立証された科学的メソッドで、勉強の効率を極限まで引き上げます。
          </p>
        </div>
      </section>

      {/* ── 2. MAIN COMPONENT (ScientificMethod Section with Simulator) ──────────────── */}
      <ScientificMethod />

      {/* ── 3. DETAILED IMPLEMENTATION IN MEDVANCE ────────────────── */}
      <section className="py-24 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
              Medvance System
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              脳科学を日々のルーティンに溶け込ませる「4つの実践方法」
            </h2>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
              科学的な正しさを頭で理解するだけでは意味がありません。
              Medvanceは、受験生が意識せずとも毎日「科学的学習」を実践できるよう、指導体制に組み込んでいます。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex gap-5">
              <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg, #0c1a33 0%, #1e3a6c 100%)" }}>
                <span className="font-extrabold text-sm text-[#c9922a]">01</span>
              </div>
              <div>
                <h3 className="font-bold text-base mb-2" style={{ color: NAVY }}>
                  15分単位の「復習自動スケジュール化」
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  毎週作成されるオーダーメイド計画の中に、脳科学的に最適なタイミングでの「復習タスク」を15分単位で自動的に配置します。これにより、『何をいつ復習すべきか』の迷いを完全に排除し、毎日の着手ハードルを極限まで下げます。
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex gap-5">
              <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg, #0c1a33 0%, #1e3a6c 100%)" }}>
                <span className="font-extrabold text-sm text-[#c9922a]">02</span>
              </div>
              <div>
                <h3 className="font-bold text-base mb-2" style={{ color: NAVY }}>
                  アウトプット特化型の「90分指導」
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  インプットだけの授業は無駄です。Medvanceでは、前半45分で『プロ講師による徹底インプット』を行い、後半45分で『その場での完全再現・アウトプット演習（アクティブリコール）』を徹底。シナプス結合（LTP）を授業内で直接引き起こします。
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex gap-5">
              <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg, #0c1a33 0%, #1e3a6c 100%)" }}>
                <span className="font-extrabold text-sm text-[#c9922a]">03</span>
              </div>
              <div>
                <h3 className="font-bold text-base mb-2" style={{ color: NAVY }}>
                  Notionと連動した定着率トラッキング
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  生徒一人ひとりに構築されるNotion学習空間上で、理解度や模試結果、各種必須公式の定着度を一元管理。データベースに記録された『記憶の強さ』に基づいて、個々の弱点や復習期間をリアルタイムで再調整します。
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs flex gap-5">
              <div className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center text-white" style={{ background: "linear-gradient(135deg, #0c1a33 0%, #1e3a6c 100%)" }}>
                <span className="font-extrabold text-sm text-[#c9922a]">04</span>
              </div>
              <div>
                <h3 className="font-bold text-base mb-2" style={{ color: NAVY }}>
                  LINEによる「即時疑問解決システム」
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  学習における疑問を放置することは、不正確なスキーマ（記憶の歪み）の構築に繋がります。Medvanceでは、自習中に発生した疑問をLINEから即時質問可能。慶應医学部生のアドバイザー陣が、論理 of 歪みをその日のうちに解消します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. VISUAL PROMO OF NOTION DATABASE WORKSPACE ─────────────── */}
      <section className="py-24 px-4 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
                Notion Database & Workspace
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                データベースによる学習管理を実現する、<br className="hidden md:block" />
                Medvance独自の「Notion学習空間」
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Notionを『学習管理データベース』としてフル活用し、医学部受験に必要な日々の学習タスク、必須公式の自動配信、そして定着度データを完全に一元管理。
                毎週の確認テスト結果から『長期記憶化された知識』と『まだ短期記憶に留まる知識』をデータベース上で色分け管理し、客観的なデータに基づいて苦手克服プランを完全に可視化します。
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "学習計画（15分タスク）が学習管理データベース（Notion）上に自動で連携・構築されます",
                  "英語・数学・理科の『医学部必須公式』やオリジナル解説テキストがデータベースに蓄積",
                  "保護者様用のアカウントも提供され、データベース内の進捗状況をいつでもリアルタイムに共有可能"
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3 text-xs text-slate-600 font-semibold">
                    <span className="text-[#c9922a] mt-0.5 font-bold">✓</span>
                    {point}
                  </div>
                ))}
              </div>
              <Link
                href="/about?from=science-page-notion"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-xs font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: NAVY }}
              >
                Medvanceの学習管理システムを詳しく見る →
              </Link>
            </div>
            
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img 
                src="/images/generated/medvance_notion_workspace_ui.png" 
                alt="Medvance独自のNotion学習計画・必須公式連携・保護者共有管理画面UI" 
                className="w-full h-auto object-cover max-h-[380px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FINAL CALL TO ACTION ───────────────────────────── */}
      <section style={{ backgroundColor: NAVY }} className="py-24 px-4 text-white relative overflow-hidden text-center">
        {/* Dynamic decorative circles */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-[#0c1a33] to-[#0c1a33] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#c9922a] uppercase mb-4">
            Start Scientific Journey
          </span>
          <h2
            className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            あなただけの「科学的合格ロードマップ」を<br className="hidden md:block" />
            無料相談で作ってみませんか？
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-10 text-slate-300 max-w-2xl mx-auto">
            現状の学力、苦手教科、志望校とのギャップから、どの問題集をどのような復習ペースで回すべきか、プロの現役医学生アドバイザーがその場でお教えします。強引な勧誘は一切ありません。
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact?from=science-cta"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white transition-opacity hover:opacity-90 w-full sm:w-auto shadow-md"
              style={{ backgroundColor: GOLD }}
            >
              合格戦略診断（無料）を申し込む
            </Link>
            <LineButton label="LINEで気軽に相談する" size="lg" className="!rounded-xl !py-4 !px-8 w-full sm:w-auto" />
          </div>

          <p className="text-[10px] mt-4 text-slate-400">
            ※保護者様のみのご参加、またお子様と同席でのオンラインご相談も大歓迎です。
          </p>
        </div>
      </section>
    </div>
  );
}
