import Link from "next/link";
import Image from "next/image";
import TutorProfiles from "@/components/TutorProfiles";
import LineButton from "@/components/LineButton";
import { buildBreadcrumbSchema } from "@/lib/seo";

const GOLD = "#c9922a";
const GOLD_SOFT = "#b88a26";
const NAVY = "#0c1a33";
const NAVY_LIGHT = "#162540";
const TEXT_BODY = "#3d3d3d";
const CREAM = "#f7f5f0";

export const metadata = {
  title: "慶應医学部受験専門の家庭教師型指導塾｜Medvance",
  description:
    "【慶應医学部 家庭教師】現役の慶應義塾大学医学部生による完全1対1の個別指導型受験塾。学科（英数理）対策から面接・小論文・願書対策まで全て慶應医学部生講師が一貫サポート。オンライン全国対応・無料合格戦略診断受付中。",
  keywords: [
    "慶應医学部 家庭教師",
    "慶應医学部受験 家庭教師",
    "慶應医学部 対策",
    "慶應医学部 個別指導",
    "慶應義塾大学医学部 家庭教師",
    "医学部受験 家庭教師",
    "慶應医学生 家庭教師"
  ],
  alternates: {
    canonical: "/keio-medical-kateikyoushi",
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "ホーム", url: "/" },
  { name: "慶應医学部生による家庭教師型指導塾", url: "/keio-medical-kateikyoushi" },
]);

const keioStrategies = [
  {
    subject: "英語対策",
    focus: "圧倒的な超長文読解と自由英作文の論理設計",
    body: "慶應医学部の英語は、私立大トップクラスの長文量と論理記述力を要求します。単なる英文和訳ではなく、パラグラフ単位で筆者の意図を掴む速読力と、自由英作文で減点されない論理構成（パラグラフライティング）が必要です。慶應医学部の入試を実際に突破した講師が、あなたの弱点や英文構築のクセを1対1でリアルタイム添削し、合格答案へと磨き上げます。"
  },
  {
    subject: "数学対策",
    focus: "合格点をもぎ取る部分点最大化のための精緻な論理記述",
    body: "計算ミスが一つの大問すべての崩壊を招く一方で、難度の高い証明問題や記述式の問題が並びます。完答できない難問でも、合格ラインを超えるための「部分点の拾い方」と「減点されない記述論理」が合否を分けます。現役の慶應医学生講師が、あなたの解答プロセスを1行ずつチェックし、採点官に響く答案作成術を叩き込みます。"
  },
  {
    subject: "物理・化学対策",
    focus: "制限時間内に難問を見極めて解く「取捨選択力」と「高精度計算」",
    body: "膨大な計算量と難解な状況設定が出題される理科は、時間との戦いです。すべての問題を解き切ることは不可能なため、瞬時に『捨てるべき難問』と『確実に取るべき標準問題』を見極める戦術的視点が必須です。実際に本番のプレッシャーの中で時間配分を最適化して合格した講師が、実戦的な時間短縮テクニックと計算ミス排除ルーティンを伝授します。"
  },
  {
    subject: "面接・小論文対策",
    focus: "アドミッションポリシーを体現する「慶應医師像」への同調",
    body: "慶應医学部の二次試験（面接・小論文）は、学科試験と同等に重視される総合戦です。単なるマニュアル的な回答ではなく、アドミッションポリシーを理解した上で「研究・臨床の両面で世界をリードする医師像」を自己の体験と結びつけて表現する必要があります。模擬面接やテーマ別小論文の添削を、二次試験を自ら経験した講師が徹底指導し、揺るぎない自信を持たせます。"
  }
];

const medvanceFeatures = [
  {
    title: "1. 講師は全員「現役の慶應医学部生」",
    body: "指導を担当するのは、難関慶應医学部の試験を実際に突破した現役学生のみ。予備校の一般講師では持ち得ない「最新の入試現場の肌感覚」や「合格者しか知らない本番の攻略法」を受験生へダイレクトに継承します。"
  },
  {
    title: "2. 15分単位のオーダーメイド計画",
    body: "志望校合格から逆算したカリキュラムを「15分単位のタスク」に細分化。何を、いつ、どの順番でやるべきかの迷いを完全にゼロにし、毎日の自学自習の効率を極限まで引き上げます。"
  },
  {
    title: "3. 独自データベース×AIによる進捗管理",
    body: "模試データや日々の確認テストの進捗状況を、専用の学習管理データベースで一元集約。さらにAIによる模試の弱点自動分析とトラッキングにより、個人の定着度を客観的な数値で管理します。"
  },
  {
    title: "4. 二次試験（面接・小論文・願書）も完全網羅",
    body: "大手予備校の集団指導では後回しにされがちな願書作成の自己PRや、記述型小論文、模擬面接まで。ひとりの担当講師が一貫してトータルサポートするため、一貫したアピール構築が可能です。"
  }
];

const comparisonItems = [
  {
    metric: "講師の質",
    medvance: "100%現役の慶應医学部生のみ（再現性のある合格メソッドを完全共有して1対1指導）",
    yobiko: "集団のプロ講師（※鉄緑会は東大・慶應医講師がメインだが集団授業形式）",
    center: "我流の一般大学生（非医学部中心・授業料の高額な中抜きによる指導品質低下）"
  },
  {
    metric: "指導システム（自習管理）",
    medvance: "完全1対1 ＋ 15分単位の計画管理 ＋ 脳科学復習自動配分（自律が苦手でも伴走して脱落させない）",
    yobiko: "集団授業のみ。自己管理・自律的な勉強が前提（できないと即脱落する）",
    center: "指導計画がなく、その場しのぎの宿題指示と質問対応のみ"
  },
  {
    metric: "進捗管理と共有",
    medvance: "保護者へのリアルタイム進捗共有 ＋ AI×データベースでの定着度徹底分析による『完全オーダーメイド学習計画』",
    yobiko: "学期ごとの懇談会や紙の成績表送付のみ（日常の学習進捗は不明）",
    center: "授業報告書が月に一度届くのみで日常の定着率はブラックボックス化"
  },
  {
    metric: "年間費用目安",
    medvance: "約80万〜200万円（1コマ7,500円の完全定額制。中抜きや追加料金は一切なし）",
    yobiko: "約120万〜250万円（鉄緑会）/ 年400万〜1000万円（医学部専門予備校）",
    center: "約100万円〜（高額な授業料の中抜き・中間マージンが発生）"
  }
];

const faqList = [
  {
    q: "本当に全ての講師が慶應義塾大学医学部の現役生なのですか？",
    a: "はい、Medvanceの講師陣は全員が現在慶應義塾大学医学部に籍を置く現役の学生です。代表自身も慶應医学部に在籍しており、在籍・素性が明確な厳選された講師のみが直接指導を行います。"
  },
  {
    q: "オンライン指導だけで慶應医学部のような超難関校に対策できますか？",
    a: "十分に可能です。むしろ、オンライン指導により全国どこからでも慶應医学部生の生の指導をマンツーマンで受講できるメリットがあります。画面共有を用いたリアルタイムの記述答案添削や、LINEでの即時質問対応などを通じて、対面授業以上の学習密度と効率的なコミュニケーションを実現しています。もちろん、関東近郊では対面・家庭教師訪問のハイブリッド指導も対応可能です。"
  },
  {
    q: "現在、他学部の合格ラインにも届いていない状態ですが受講できますか？",
    a: "大歓迎です。受験対策において最も重要なのは現在の偏差値ではなく、現在の学力と慶應医学部の合格最低点とのギャップを正しく分析し、埋めていくプロセスです。Medvanceでは、初期学力に合わせて基礎の基礎から「慶應医学部に受かるための正しい順序」で計画を再設計します。"
  },
  {
    q: "他予備校や集団塾（駿台・河合・鉄緑会など）と併用は可能ですか？",
    a: "非常に多くの方が併用されています。大手予備校の集団授業でインプットした知識を、Medvanceの1対1指導で「本質的な解法再現アウトプット（逆授業）」に変え、予備校の膨大な宿題を15分単位の計画に落とし込んで確実に処理する、という強力な補完関係を作ることができます。"
  },
  {
    q: "無料の合格戦略診断では具体的に何をしてもらえますか？",
    a: "無料相談では、現在の模試結果や志望校、日々の勉強時間・方法を徹底的にヒアリングした上で、「慶應医学部合格までにどの参考書を、どのようなスケジュールで進めるべきか」の初期ロードマップをその場で作成してお渡しします。無理な勧誘等は一切ございませんので、お気軽にお申し込みください。"
  }
];

export default function KeioMedicalKateikyoushiPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── 1. PREMIUM HERO SECTION ───────────────────────────── */}
      <section style={{ backgroundColor: NAVY }} className="relative py-24 px-4 text-white overflow-hidden">
        {/* Subtle decorative gold glowing mesh */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#c9922a]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span 
            className="inline-block text-[11px] font-black tracking-[0.35em] uppercase mb-5 px-4 py-1.5 rounded-full border border-[#c9922a]/30"
            style={{ color: GOLD, backgroundColor: "rgba(201,146,42,0.06)" }}
          >
            Keio University School of Medicine Specialize
          </span>
          
          <h1 
            className="text-3xl md:text-5xl lg:text-[3.25rem] font-black mb-8 leading-tight tracking-wide"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            慶應医学部生による<br className="sm:hidden" />
            <span style={{ color: GOLD }}>家庭教師型</span>指導塾
          </h1>
          
          <div className="w-20 h-1 bg-[#c9922a] mx-auto mb-8"></div>
          
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-slate-300 font-medium mb-12">
            学科（英語・数学・理科）から、合否を大きく分ける二次試験（面接・小論文・願書）まで。<br className="hidden md:block" />
            慶應医学部入試を「全勝突破」した現役生講師陣が、完全マンツーマンの1対1で合格戦略を伝授します。
          </p>

          {/* Quick Badges */}
          <div className="flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto">
            {[
              "講師は全員・現役慶應医学部生",
              "15分単位の完全オーダーメイド計画",
              "独自データベース×AIによる徹底管理",
              "面接・小論文・願書も一気通貫対策",
              "オンライン全国対応 / 関東対面訪問対応"
            ].map((badge) => (
              <span key={badge} className="text-xs font-bold px-4 py-2.5 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. INTRO SPEECH: WHY BEYOND GENERIC TUTORS ───────────────────────────── */}
      <section className="py-20 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
              The Challenge
            </span>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              なぜ、一般的な家庭教師や予備校では<br className="hidden sm:block" />
              慶應医学部に歯が立たないのか？
            </h2>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm leading-relaxed text-sm md:text-base space-y-6" style={{ color: TEXT_BODY }}>
            <p>
              慶應義塾大学医学部は、私立医学部の中で頂点に君臨する最難関校です。
              その難易度は東京大学理科二類や地方国公立医学部の中堅以上をも凌ぐレベルであり、生半可な対策では太刀打ちできません。
            </p>
            <p>
              一般的な家庭教師センターの「登録制大学生講師（指導実績があまりない、他大学・他学部生講師）」や、医学部専門予備校の「一方通行の集団授業」では、以下のような慶應医学部特有のハードルをクリアすることは不可能です。
            </p>
            <div className="grid gap-4 py-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-200/50">
                <strong className="text-sm block mb-1 text-slate-800">⚠️ 他大学と次元の異なる英語＆数学記述</strong>
                <span className="text-xs text-slate-500 block leading-relaxed">
                  慶應の英語は圧倒的な速読精読力とハイレベルな自由英作文、数学は一歩間違えれば連鎖崩壊を招く精緻な記述証明力が問われます。
                </span>
              </div>
              <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-200/50">
                <strong className="text-sm block mb-1 text-slate-800">⚠️ 二次試験（面接・小論文）の極めて高い比重</strong>
                <span className="text-xs text-slate-500 block leading-relaxed">
                  学科試験で優秀な成績を収めていても、二次試験で慶應のアドミッションポリシーから外れた回答をして不合格になる受験生が毎年後を絶ちません。
                </span>
              </div>
            </div>
            <p className="font-semibold" style={{ color: NAVY }}>
              Medvanceでは、これらすべての課題を「慶應医学部受験を自らの戦略で全勝突破した現役慶應医学生講師」が、生徒一人ひとりの学力に合わせて完全オーダーメイドで解決します。
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. ACADEMIC STRATEGY: HOW MEDVANCE BEATS KEIO ───────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
              Medvance Strategy
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              慶應医学部特化・科目別「合格奪取」戦略
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              合格者しか知らない「実戦的な解法プロセス」をそのまま伝授します
            </p>
          </div>

          <div className="grid gap-6">
            {keioStrategies.map((item, i) => (
              <div 
                key={i} 
                className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 grid md:grid-cols-[220px_1fr] gap-6 items-start"
              >
                <div>
                  <span 
                    className="inline-block text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-md text-white mb-2"
                    style={{ backgroundColor: GOLD }}
                  >
                    {item.subject}
                  </span>
                  <h3 className="font-bold text-lg text-slate-900 leading-snug mt-1" style={{ fontFamily: "var(--font-noto-serif)" }}>
                    {item.focus}
                  </h3>
                </div>
                <p className="text-xs md:text-sm leading-relaxed text-slate-500 pt-1">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MEDVANCE'S 4 ADVANTAGES ───────────────────────────── */}
      <section className="py-24 px-4 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
              The Medvance Way
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              他の家庭教師サービスとは次元が異なる「4つの強み」
            </h2>
            <p className="text-sm text-slate-500">
              単にわからない問題を教えるだけの家庭教師は終わりです
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {medvanceFeatures.map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300">
                <h3 className="font-bold text-base mb-3 text-slate-900" style={{ fontFamily: "var(--font-noto-serif)" }}>
                  {item.title}
                </h3>
                <div className="w-10 h-0.5 bg-[#c9922a] mb-4"></div>
                <p className="text-xs md:text-sm leading-relaxed text-slate-500">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. COMPARISON BOARD (対比ボード) ───────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
              Comparison
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              指導サービスの徹底比較
            </h2>
            <p className="text-sm text-slate-500">
              慶應医学部受験において、何が本当に合格に結びつくかをご確認ください
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] font-bold tracking-widest uppercase text-white" style={{ backgroundColor: NAVY }}>
                  <th className="p-5 w-[15%]">比較指標</th>
                  <th className="p-5 w-[35%] bg-amber-500/5 text-[#c9922a] border-l border-r border-[#c9922a]/30">Medvance（慶應医学部特化・データ管理型）</th>
                  <th className="p-5 w-[25%] opacity-80">大手・医学部専門予備校（※鉄緑会は東大慶應医メイン）</th>
                  <th className="p-5 w-[25%] opacity-80">一般家庭教師・中抜き型</th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-slate-200">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">{item.metric}</td>
                    <td className="p-5 font-semibold text-slate-800 bg-amber-500/5 border-l border-r border-[#c9922a]/10">
                      <div className="flex items-start gap-2">
                        <span className="text-[#c9922a] font-bold">✓</span>
                        <span>{item.medvance}</span>
                      </div>
                    </td>
                    <td className="p-5 text-slate-500">{item.yobiko}</td>
                    <td className="p-5 text-slate-500">{item.center}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Grid View */}
          <div className="md:hidden space-y-6">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <p className="font-extrabold text-sm mb-3 text-slate-900 border-b pb-2">{item.metric}</p>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-xl border border-[#c9922a]/20">
                    <p className="text-[10px] font-bold text-[#c9922a] mb-1">Medvance</p>
                    <p className="text-xs text-slate-800 leading-relaxed font-medium">{item.medvance}</p>
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-bold text-slate-400 mb-1">大手・医学部予備校</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.yobiko}</p>
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-bold text-slate-400 mb-1">一般家庭教師・中抜き型</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.center}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. COURSES & PRICING ───────────────────────────── */}
      <section className="py-24 px-4 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
              Pricing & Courses
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              明瞭でプレミアムな指導料金・コース
            </h2>
            <p className="text-sm text-slate-500">
              指導時間外の15分単位の計画管理、独自データベースの共有、LINEサポートがすべて含まれます
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {[
              {
                title: "週1回コース［月4回（8コマ）］＋ 徹底コーチング",
                price: "月額 80,000円",
                target: "他予備校と併用したい方、苦手な1科目を徹底的に慶應医学部生に対策してほしい方"
              },
              {
                title: "週2回コース［月8回（16コマ）］＋ 徹底コーチング",
                price: "月額 140,000円",
                target: "英語・数学の2枚看板を強化したい方、自習計画と記述答案の添削を完全に任せたい方"
              },
              {
                title: "週3回〜コース［月12回（24コマ）以上］＋ 徹底コーチング",
                price: "月額 200,000円〜",
                target: "浪人生・再受験生の方で全科目の指導管理を依頼したい方、または直前期の模擬面接・小論文対策を短期間で仕上げたい方（割引あり）"
              }
            ].map((course, i) => (
              <div 
                key={i} 
                className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 hover:border-[#c9922a] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-4 border-b border-slate-100 pb-4">
                  <h3 className="font-extrabold text-base text-slate-900" style={{ fontFamily: "var(--font-noto-serif)" }}>
                    {course.title}
                  </h3>
                  <span className="text-base font-black text-[#c9922a] whitespace-nowrap">{course.price}</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">
                  <strong className="text-slate-700">対象:</strong> {course.target}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs leading-relaxed text-center text-slate-400">
            ※授業は1コマ45分 7,500円（1回の授業90分 = 15,000円）＋コーチング月20,000円のシンプルな構成です。<br />
            ※入塾金：20,000円（初回入塾時のみ）。オンライン指導および対面派遣指導で料金は共通です。<br />
            ※生徒の状況や志望併願校に応じて週次計画をカスタマイズいたします。
          </p>
        </div>
      </section>

      {/* ── 7. TUTOR PROFILES SECTION ───────────────────────────── */}
      <TutorProfiles />

      {/* ── 8. FAQ ACCORDION SECTION ───────────────────────────── */}
      <section className="py-24 px-4 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, i) => (
              <details
                key={i}
                className="rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-xs transition-shadow duration-300"
              >
                <summary
                  className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-sm select-none list-none text-slate-900"
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

      {/* ── 9. FINAL CALL TO ACTION ───────────────────────────── */}
      <section style={{ backgroundColor: NAVY }} className="py-24 px-4 text-white relative overflow-hidden text-center">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-[#0c1a33] to-[#0c1a33] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#c9922a] uppercase mb-4">
            Free Consultation
          </span>
          <h2
            className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            慶應医学部に特化した<br className="hidden md:block" />
            「あなただけの合格戦略」を無料で作ります
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-10 text-slate-300 max-w-2xl mx-auto">
            現状の学力、併願校、合格に必要なギャップを詳細にヒアリングし、どの参考書・過去問をどのような順序で進めるべきか、慶應医学部に全勝した現役アドバイザーが直接個別設計します。強引な勧誘等は一切ありません。
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact?from=keio-medical-cta"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white transition-opacity hover:opacity-90 w-full sm:w-auto shadow-md"
              style={{ backgroundColor: GOLD }}
            >
              無料合格戦略診断（80分）を申し込む
            </Link>
            <LineButton label="LINEで気軽に相談する" size="lg" className="!rounded-xl !py-4 !px-8 w-full sm:w-auto" />
          </div>

          <p className="text-[10px] mt-4 text-slate-400">
            ※保護者様のみ、あるいはお子様と同席でのご参加も大歓迎です。オンライン（全国対応）にて実施いたします。
          </p>
        </div>
      </section>
    </div>
  );
}
