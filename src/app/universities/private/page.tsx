import Link from "next/link";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildFaqSchema,
  buildItemListSchema,
} from "@/lib/seo";

export const metadata = {
  title: "【私立医学部受験】合格への受験校選定と大学別対策一覧",
  description:
    "私立医学部受験を突破するための総合合格戦略。1月・2月の連続受験スケジュール設計、学費・特待生制度の活用（最大2,000万円減免）、補欠繰り上がりの仕組みから、私立大学別の傾向と対策まで解説します。",
  alternates: {
    canonical: "/universities/private",
  },
};

const universitiesList = [
  { name: "慶應義塾大学医学部", desc: "思考力・論証力重視の最難関。英数理と小論文・面接の全方位対策が必要。", href: "/universities/keio", advice: "難問を解ききる記述思考力と面接での高い人間性が求められます。" },
  { name: "東京慈恵会医科大学", desc: "英語が私立医学部トップクラスの難易度。「慈恵の医師像」重視の面接対策。", href: "/universities/jikei", advice: "医学系長文の精読力と、独自スタイルのMMI面接への慣れが必須です。" },
  { name: "順天堂大学医学部", desc: "一般選抜A方式では小論文を一次日に実施し、二次で面接。配点に沿った総合対策が必要。", href: "/universities/juntendo", advice: "標準〜やや難問題を高速処理する完成度が合格を決めます。" },
  { name: "日本医科大学", desc: "数学・理科の記述式難問と2回面接。記述力と論証力が最重要。", href: "/universities/nippon-medical", advice: "計算量が多く論理的飛躍が許されない記述答案作成能力を鍛えます。" },
  { name: "昭和大学医学部", desc: "基礎力と正確性を最重視。ミスゼロで標準問題を取り切ることが合格条件。", href: "/universities/showa", advice: "英数の同時受験時間配分など、制限時間内の得点最大化が鍵。" },
  { name: "東京医科大学", desc: "全科目バランス型で近年は思考力重視に変化。標準問題の確実な習得が必須。", href: "/universities/tokyo-ika", advice: "マーク式と記述式が混在。満遍なく得点できるバランス設計が有効。" },
  { name: "日本大学医学部", desc: "全科目標準レベル。基礎〜標準問題を確実に取る完成度が合否を決める。", href: "/universities/nihon", advice: "一問のイージーミスが命取りになるため、見直し習慣を徹底化します。" },
  { name: "東邦大学医学部", desc: "英語の長文量が多く読解スピードが鍵。計算ミスが合否を分ける。", href: "/universities/toho", advice: "独特のスピード勝負。英語の多読訓練と速算力を週次で強化。" },
  { name: "杏林大学医学部", desc: "比較的取り組みやすい問題構成。基礎の完成が最重要。", href: "/universities/kyorin", advice: "英語の文法・読解バランスが良く、穴のない基礎固めで得点が安定。" },
  { name: "帝京大学医学部", desc: "マークシート中心。スピードと正確性の両立が求められる。", href: "/universities/teikyo", advice: "3科目選択制度を活用し、得意科目に集中投資する特殊戦略が機能します。" },
  { name: "東海大学医学部", desc: "英語長文と数学計算力が重要。全科目バランスよく仕上げることが鍵。", href: "/universities/tokai", advice: "数学の小問集合で確実に稼ぎ、大問での失点を減らす丁寧な解法。" },
  { name: "北里大学医学部", desc: "理科の難易度がやや高め。基礎固め後に理科を重点強化する戦略が有効。", href: "/universities/kitasato", advice: "時間制限が厳しい理科2科目で、解くべき順序の判断力が合否を分けます。" },
  { name: "聖マリアンナ医科大学", desc: "建学の精神に基づく面接が特徴。ボランティア経験や医療への動機が重視される。", href: "/universities/marianna", advice: "一次通過後の徹底した志望理由書添削とMMI面接練習が最大の武器。" },
  { name: "東京女子医科大学", desc: "女子大唯一の専門校。女性医師としての覚悟と将来像が問われる。", href: "/universities/joshi-ika", advice: "医療倫理問題に対応する小論文の論理構成力をマンツーマンで指導。" },
  { name: "国際医療福祉大学医学部", desc: "英語重視のグローバル教育。英語力が特に重要で十分な対策が必須。", href: "/universities/iuhw", advice: "英語配点が高く、医療英語や長文速読に強みがあれば大逆転も現実的。" },
  { name: "獨協医科大学", desc: "英語・数学の基礎固めが合否を分ける。小論文も課される。", href: "/universities/dokkyo", advice: "典型問題が多く、予備校テキストレベルの解法暗記を完全管理。" },
  { name: "埼玉医科大学", desc: "標準レベル中心。地域医療への関心が面接で評価される。", href: "/universities/saitama-ika", advice: "後期試験や地域枠を含め、複数回の受験機会を活かす出願設計。" },
  { name: "関西医科大学", desc: "関西圏の難関私立医学部。英語の読解力が特に重要。", href: "/universities/kansai-ika", advice: "記述量が多く英数理ともに高い水準での完成度が求められます。" },
  { name: "近畿大学医学部", desc: "近年難化傾向あり。英語長文読解力が鍵。", href: "/universities/kindai", advice: "数学の記述力・図示能力が重視され、答案構成力の個別訓練が効きます。" },
  { name: "大阪医科薬科大学", desc: "関西圏の名門。全体的に難易度が高く、英数理とも高い実力が必要。", href: "/universities/osaka-ika", advice: "京大・阪大など国公立難関大との併願者が多く、高度な論証力が合否線。" },
  { name: "兵庫医科大学", desc: "標準レベル。全科目バランスよく仕上げることが合格への近道。", href: "/universities/hyogo", advice: "苦手科目の「底上げ」が最優先。D〜E判定からの逆転実績が豊富な大学。" },
  { name: "藤田医科大学", desc: "中部圏最大規模。比較的取り組みやすく基礎〜標準力の完成が条件。", href: "/universities/fujita", advice: "総受験者数が多く、スピード勝負のマーク対策と時間配分設計が生命線。" },
  { name: "愛知医科大学", desc: "標準問題中心。基礎力の完成度が合否を直接左右する。", href: "/universities/aichi-ika", advice: "大問ごとの詰まりを排除し、解ける問題から確実に仕留める戦略。" },
  { name: "金沢医科大学", desc: "北陸唯一の私立医学部。標準レベルで理科のバランスよい対策が重要。", href: "/universities/kanazawa-ika", advice: "二次面接の集団討論・グループ面談での役割立ち回りを個別サポート。" },
  { name: "久留米大学医学部", desc: "九州圏。英語の読解力と理科の基礎が合否を分ける。", href: "/universities/kurume", advice: "英語の設問数が多く、解くべき設問の取捨選択スキルを養います。" },
  { name: "福岡大学医学部", desc: "九州圏。全科目バランス型で標準問題を落とさない完成度が求められる。", href: "/universities/fukuoka", advice: "英語の文法問題で失点を極小化し、記述で部分点をコツコツ稼ぎます。" },
  { name: "川崎医科大学", desc: "独自の出題スタイル。学費が高水準のため、家庭のファイナンス計画とセットで受験戦略が必要。", href: "/universities/kawasaki-ika", advice: "基礎事項の徹底反復と、面接での素直な適性表現を最大化します。" },
  { name: "岩手医科大学", desc: "東北地方の地域密着型医学部。地域医療への志望動機が重視される。", href: "/universities/iwate", advice: "東北エリアの地域医療ニーズへの深い共感と、基礎記述の徹底指導。" },
  { name: "東北医科薬科大学", desc: "2016年新設。東北の医療人材育成を目的。英数理の基礎力が重要。", href: "/universities/tohoku-ika", advice: "修学資金枠（奨学金制度）の倍率が高く、共テ併用を含めた出願シミュレーション。" },
];

const faqs = [
  {
    q: "私立医学部の連続受験は何日までが体力・メンタルの限界ですか？",
    a: "医学部受験生のパフォーマンス維持の観点から、「最大でも3日連続（3連戦）」が限界です。私立医学部は朝から夕方まで丸一日の試験が多く、脳の疲労が翌日に大きく残ります。Medvanceでは、本命校の前日にあえて「空き日（移動・休養日）」を設けるか、実力適正校を前々日においてメンタルを落ち着かせるなど、一人ひとりの体力・移動負荷（新幹線・ホテル移動）を計算したオーダーメイドの受験カレンダーをご家庭と作成します。",
  },
  {
    q: "奨学金や特待生制度（学費減免）を利用して私立医学部に通うことは現実的ですか？",
    a: "極めて現実的です。近年、私立医学部は優秀な学生を集めるために大規模な特待生・奨学金制度を拡充しています。例えば、順天堂大学の特待生枠（最大2,080万円免除）や国際医療福祉大学の特待生（最大1,400万円免除）、東邦大学や日本医科大学の各種減免を利用すれば、国公立医学部とほぼ同等の負担で通うことも可能です。Medvanceでは「学費負担を最大2,000万円台に抑えるための特待目標戦略」を逆算したカリキュラムを設計します。",
  },
  {
    q: "私立医学部の「補欠合格（繰り上がり）」はいつ頃、どのように回ってきますか？",
    a: "補欠合格の繰り上がりは、2月中旬の一次合格発表から始まり、国公立大学の前期合格手続きが締め切られる「3月上旬〜3月後半」にかけてピークを迎えます。大学によっては順位が公表される場合と非公表の場合があります。Medvanceでは、過年度の膨大な繰り上がりデータから「補欠○位なら○月○日頃までに連絡が来る可能性が高い」といった予測を立て、他大学への入学金二重払い（ダブルマネー）を防ぐためのデッドライン決済のアドバイスを行います。",
  },
  {
    q: "模試でE判定でも、出願戦略と過去問対策で逆転合格は可能ですか？",
    a: "私立医学部は「大学ごとの出題の偏り（相性）」が非常に大きいため、記述総合偏差値が低くても十分に合格可能です。例えば「数学が極めて難解で全員が2割しか取れないが、英語長文は標準的で8割狙える慈恵」や、「理科の制限時間が厳しく、解く順番で差がつく順天堂」など、自分の得点力と大学の傾向が噛み合えば、E判定からでも逆転できます。Medvanceは徹底した相性診断で勝てる戦いだけを選び抜きます。",
  },
];

const privatePageSchemas = [
  buildCollectionPageSchema(
    "私立医学部受験対策一覧",
    "私立医学部の大学別対策ページ一覧と、連続受験スケジュール、学費特待生対策、繰り上がり合格予測など、私立医学部受験で勝つための実践的出願戦略をまとめたポータルページです。",
    "/universities/private",
  ),
  buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "私立医学部対策", url: "/universities/private" },
  ]),
  buildItemListSchema(
    "私立医学部の大学別対策ページ",
    "/universities/private",
    universitiesList.map((uni) => ({ name: uni.name, url: uni.href })),
  ),
  buildFaqSchema(faqs),
];

export default function PrivatePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privatePageSchemas) }}
      />
      
      {/* Hero Section */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#c9922a_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#c9922a" }}>
            Private Medical School Premium Strategy
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-noto-serif)" }}>
            私立医学部合格は、<br className="md:hidden" />「受験校の組み合わせ」で決まる。
          </h1>
          <p className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
            単なる「合格可能性」の数字だけで出願していませんか？ 日程、学費、特待制度、試験科目の配点相性、そして補欠繰り上がり予測。これらを完全にコントロールするご家庭だけが、毎年無駄のない最短合格を勝ち取っています。
          </p>
        </div>
      </div>

      {/* Intro section */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            私立医学部受験の「真の障壁」とは
          </h2>
          <div className="p-8 rounded-[24px] bg-white leading-relaxed text-sm text-gray-700" style={{ border: "1px solid #e5e1d8" }}>
            私立医学部は各大学によって出題傾向・科目配点・面接小論文・学費・日程が極めて異質です。同じ「偏差値65」であっても、慶應医学部のような記述思考力重視の試験と、昭和大学のような標準問題のスピード処理能力を問う試験とでは、必要となる学習設計が全く別物になります。
            複数校を受験する際は、「受けられる大学を増やす」だけではなく、**本人の得点傾向**と**ご家庭のファイナンス計画（特待生・奨学金）**、さらには**3月の追加合格タイミング**までを網羅した「受験校ポートフォリオ」をあらかじめ組み立てておくことが、合否を大きく左右します。
          </div>
        </div>
      </div>

      {/* In-depth strategy columns (SEO content expansion) */}
      <div className="py-20 px-4 bg-white border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceが実践する「私立医学部受験」3大核心戦略
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "1月・2月の『連続受験カレンダー』の最適化",
                desc: "私立医学部は試験期間中、連日の受験スケジュールが組めます。しかし、移動負荷やホテルの手配、前日の精神状態を無視した『4連戦・5連戦』は合格率を著しく下げます。Medvanceは受験生の体力を計算し、本命前の調整校と移動日を交互に織り交ぜた、科学的な受験スケジュールを立案します。",
              },
              {
                step: "02",
                title: "最大2,000万円を浮かせる『特待生・奨学金』の戦略獲得",
                desc: "「私立医学部は高すぎて出願できない」というのは昔の話です。順天堂や国際医療福祉など、近年は国公立医学部の併願先として超優秀層を囲い込むための特待生枠が激増しています。各大学の特待判定基準（一次順位、面接内容）をハックし、家計への負担を最小限に抑える志望校選定を提案します。",
              },
              {
                step: "03",
                title: "『ダブルマネー（入学金二重払い）』を防ぐ決済マネジメント",
                desc: "3月後半まで続く追加・補欠合格の連絡。他大学の入学手続き締め切りと、本命校の繰り上がり状況を緻密に照らし合わせなければ、入学金（約100万〜200万円）を無駄に捨てることになります。過去の繰り上がり予測値と決済期限日を徹底シミュレートし、無駄な支払いを防ぎます。",
              },
            ].map((strategy) => (
              <div key={strategy.step} className="p-6 rounded-2xl bg-white border transition-all hover:shadow-md" style={{ borderColor: "#e5e1d8", backgroundColor: "#fcfbf9" }}>
                <p className="text-xl font-bold mb-4" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>{strategy.step}</p>
                <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{strategy.title}</h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600">{strategy.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 rounded-2xl text-center" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-xs md:text-sm font-bold text-gray-800">
              💡 集団授業の画一的なカリキュラムに縛られず、自分だけの相性で戦いたい方へ
            </p>
            <div className="mt-3 flex justify-center gap-4">
              <Link href="/for/not-group-school" className="text-xs font-bold transition-colors hover:underline" style={{ color: "#c9922a" }}>
                集団塾が合わない方向けの1対1指導はこちら →
              </Link>
              <Link href="/pricing" className="text-xs font-bold transition-colors hover:underline" style={{ color: "#c9922a" }}>
                個別特化プランの料金表を見る →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Directory Grid */}
      <div className="py-20 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>
              Private Medical Schools Database
            </p>
            <h2 className="text-2xl md:text-4xl font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              全国29私立医学部 大学別対策
            </h2>
            <p className="text-sm mt-3 text-gray-500 max-w-2xl mx-auto">
              各私立医学部を完全攻略するための入試傾向・科目別対策・合格スケジュール・現役プロ講師のワンポイントアドバイスです。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universitiesList.map((item) => (
              <div key={item.name} className="p-6 rounded-[24px] bg-white flex flex-col justify-between" style={{ border: "1px solid #e5e1d8" }}>
                <div>
                  <h3 className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                </div>
                
                <div className="pt-4 border-t border-dashed" style={{ borderColor: "#e5e1d8" }}>
                  <p className="text-[10px] font-bold text-gray-800">✍ プロ講師のアドバイス：</p>
                  <p className="text-xs leading-relaxed text-gray-600 mt-1 mb-4 italic">
                    「{item.advice}」
                  </p>
                  <Link href={item.href} className="text-xs font-bold transition-opacity hover:opacity-80 block text-right" style={{ color: "#c9922a" }}>
                    この大学の徹底対策を見る →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-4 bg-white border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-3xl mx-auto">
          <p className="mb-3 text-center text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>FAQ</p>
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            私立医学部受験のよくある質問
          </h2>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="mb-3 text-sm md:text-base font-bold flex gap-2" style={{ color: "#0c1a33" }}>
                  <span style={{ color: "#c9922a" }}>Q.</span> {item.q}
                </p>
                <p className="text-xs md:text-sm leading-relaxed text-gray-600 flex gap-2 pl-1 border-t pt-3 border-dashed" style={{ borderColor: "#d6d1c7" }}>
                  <span className="font-bold" style={{ color: "#0c1a33" }}>A.</span> {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4 text-white relative overflow-hidden" style={{ backgroundColor: "#0c1a33" }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#c9922a_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Private Medical Strategy Consultation
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            志望校合格を100%引き上げる受験カレンダーを作成します
          </h2>
          <p className="text-xs md:text-sm mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.72)" }}>
            偏差値・得意科目だけでなく、ご家庭の学費方針や連続受験の移動限界を考慮し、最も合格可能性が高まる「私立医学部出願ポートフォリオ」を完全オーダーメイドで設計します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?from=private-universities-bottom"
              className="inline-block px-8 py-4 text-white font-bold text-sm rounded-lg shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
            >
              無料の合格戦略診断に申し込む
            </Link>
            <Link
              href="/universities/national"
              className="inline-block px-8 py-4 text-white font-bold text-sm rounded-lg hover:bg-white/10 transition-colors border border-white/20"
            >
              国公立・防衛医大の対策を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
