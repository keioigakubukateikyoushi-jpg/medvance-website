import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "北里大学医学部受験対策｜入試傾向・合格戦略 | Medvance",
  description: "北里大学医学部の入試傾向・科目別対策・合格戦略を現役慶應医学部生が解説。2026年度の公式Q&Aと出題意図をもとに、学力検査と論文・面接の総合判定を整理します。",

  alternates: {
    canonical: "/universities/kitasato",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★☆☆",
    body: "長文読解中心の標準的な出題構成です。医療・生命科学系のテーマが多く、専門用語への慣れが得点を左右します。",
    detail: "大問3〜4題で長文読解が主体です。文法・語彙問題も含まれますが配点は読解が大きいです。医療系英単語（anatomy, diagnosis, pathogenなど）が本文中に登場するため、医療英語の基礎知識があると有利です。標準的な単語帳を仕上げた後、医療系長文演習を追加するのが効率的な対策です。読解スピードと内容把握力を重点的に鍛えましょう。",
  },
  {
    name: "数学",
    level: "★★★☆☆",
    body: "標準レベルの問題が中心で、微積・確率・数列から頻出です。記述式問題では論理的な解法展開が評価されます。",
    detail: "大問4〜5題構成で記述式の問題が含まれます。途中のプロセスを丁寧に書く力が必要です。微積分・確率・数列・ベクトルの4分野を重点的に対策しましょう。難問より典型問題の解法パターンを確実に習得する方が得点につながります。時間配分を意識した演習で本番の安定感を養いましょう。",
  },
  {
    name: "物理",
    level: "★★★★☆",
    body: "北里大学の物理はやや難易度が高く、力学・電磁気の応用問題が多く出題されます。公式の深い理解と応用力が必要です。",
    detail: "力学（運動量・エネルギー保存）と電磁気（回路・電磁誘導）から難易度の高い融合問題が出題されることがあります。単純な公式当てはめでは対応できず、物理現象の本質的な理解が必要です。波動・熱力学も抜かりなく対策しましょう。標準問題集を完璧にした後、名問の森レベルの難問演習に進む段階的な学習が有効です。",
  },
  {
    name: "化学",
    level: "★★★☆☆",
    body: "有機・無機・理論化学がバランスよく出題されます。計算問題の精度と有機化学の知識量が得点に直結します。",
    detail: "有機化学の構造決定問題が毎年出題されており、ベンゼン環・官能基の反応性をしっかり理解しておく必要があります。理論化学では気体・溶液・化学平衡の計算問題が頻出です。無機化学は暗記事項が多いですが、反応の仕組みを理解した上で暗記すると効率よく定着します。全体的に標準レベルで、重要問題集レベルまで仕上げれば対応可能です。",
  },
  {
    name: "面接・小論文",
    level: "★★★☆☆",
    body: "一般選抜の最終判定は、1次試験の学力検査と2次試験の論文・面接・調査書等を総合して行われます。論文と面接だけでなく、提出書類まで含めた準備が必要です。",
    detail: "医学部Q&Aでは、一般選抜の最終的な合否判定は1次試験の学力検査の結果と2次試験の論文、面接、調査書等による総合判定と明記されています。面接方法はグループ面接、個人面接、またはその複合型など複数方式があり得るため、形式を決め打ちせず準備するのが安全です。",
  },
  {
    name: "総合戦略",
    level: "★★★☆☆",
    body: "英語・数学を安定させながら、物理の応用力を重点強化するバランス戦略が合格への最短ルートです。",
    detail: "北里大学は物理の難易度がやや高いため、英語・数学を早期に安定させて、理科（特に物理）の強化に十分な時間を確保することが重要です。化学は標準レベルまで仕上げれば安定した得点が期待できます。全体でバランスよく得点できる状態を目指しましょう。",
  },
];

const strategies = [
  {
    step: "01",
    title: "物理を最優先で強化する",
    body: "北里大学の物理はやや難易度が高く、理科での失点が合否を左右します。英語・数学の基礎が固まったら、物理の強化に集中的に時間を投入しましょう。特に力学と電磁気の応用問題まで対応できるレベルを目指すことが重要です。標準問題集を完璧にした後、難問演習に進む段階的なアプローチが有効です。",
  },
  {
    step: "02",
    title: "英語は医療系長文に慣れる",
    body: "北里大学の英語は医療・生命科学系テーマの長文が多く出題されます。標準的な英語力を身につけた後は、医療系英語の長文演習を積極的に取り入れましょう。専門用語に慣れることで本番での読解スピードと正確性が格段に上がります。感染症・免疫関連の英語表現は特に押さえておきましょう。",
  },
  {
    step: "03",
    title: "数学は典型問題を完璧にする",
    body: "北里大学の数学は標準レベルが中心のため、基礎〜標準の典型問題を完全に習得することが最も効率的な対策です。難問を追い求めるよりも、解けるはずの問題を確実に得点できる安定感を養いましょう。記述問題では論理の流れを意識した答案作成練習も行ってください。",
  },
  {
    step: "04",
    title: "化学の有機化学・計算問題を確実に仕上げる",
    body: "化学は標準レベルが中心ですが、有機化学の構造決定は毎年出題されます。構造決定の典型的なアプローチ（元素分析→分子式→官能基の特定→構造の決定）を繰り返し練習し、素早く系統的に推論できる力を身につけましょう。理論化学の計算問題も取りこぼしのないよう練習することが大切です。",
  },
  {
    step: "05",
    title: "北里大学の建学精神を理解して面接・小論文を準備する",
    body: "北里大学は北里柴三郎の研究精神を建学の理念に持つ大学です。感染症研究や地域医療への貢献に関心があることを、具体的なエピソードを交えて伝えられるよう準備しましょう。小論文は医療倫理・社会問題について自分の意見を論理的に述べる練習を繰り返すことが大切です。",
  },
];

const timeline = [
  {
    period: "高2冬〜高3春",
    title: "基礎固めの徹底",
    body: "英語は単語・文法の基礎を完成。数学は教科書レベルを総復習。物理は教科書を精読し基本法則を深く理解する段階。化学は理論・有機・無機の基礎を一通り固める。",
  },
  {
    period: "高3夏（6〜8月）",
    title: "標準問題演習と物理強化",
    body: "英語は医療系長文演習を毎日1題。数学は1対1対応レベルの典型解法を体系化。物理は良問の風レベルまで引き上げる。化学は重要問題集で標準問題を完成させる。",
  },
  {
    period: "高3秋（9〜10月）",
    title: "物理応用演習と過去問開始",
    body: "物理は名問の森レベルの応用問題に挑戦。北里大学の過去問演習を開始し出題傾向を把握。面接・小論文対策も並行してスタート。",
  },
  {
    period: "高3冬（11〜1月）",
    title: "仕上げと弱点補強",
    body: "過去問5年分以上を時間を計って演習。物理の応用問題への対応力を最終確認。各科目の弱点を集中的に補強する。面接練習を重ねる。",
  },
  {
    period: "直前期（1月〜本番）",
    title: "最終調整と体調管理",
    body: "苦手分野の最終確認と得意科目の維持。面接の想定問答を声に出して繰り返し練習。体調管理を最優先にした規則正しい生活リズムを確立。",
  },
];

const mistakes = [
  {
    title: "物理の応用問題対策を後回しにして本番で失点する",
    body: "北里大学の物理はやや難しく、標準問題集だけでは足りない場合があります。秋になってから慌てて難問演習を始めても時間が足りません。夏のうちから段階的に物理の難度を上げる計画を立て、余裕を持って応用問題に対応できる状態を作りましょう。",
  },
  {
    title: "北里大学の建学精神を調べずに面接に臨む",
    body: "北里大学は北里柴三郎という偉大な医科学者を創立者に持つ大学です。「なぜ北里大学か」という質問に答える際、この建学精神への理解と共感を語れないと志望度の低さが透けて見えます。感染症研究への関心や北里柴三郎の業績を事前に調べておきましょう。",
  },
  {
    title: "英語・数学を固めるだけで理科対策が不十分になる",
    body: "英語・数学が得意な受験生が理科を後回しにしがちです。北里大学は物理の難度が高く、理科での失点が合否を分けることがあります。英語・数学の仕上がりを確認しながら、理科（特に物理）への学習時間を確保するバランスが重要です。",
  },
];

const whyMedvance = [
  {
    title: "物理の難問に対応できる専門指導",
    body: "北里大学の物理はやや難しく、独学での対策に限界があります。Medvanceでは現役慶應医学部生が物理の応用問題の解法を丁寧に指導し、力学・電磁気の融合問題にも対応できる深い理解を作ります。",
  },
  {
    title: "医療系英語と面接対策の一体的サポート",
    body: "北里大学の英語は医療・感染症系テーマが頻出で、面接でも北里大学の研究理念への理解が問われます。Medvanceでは医療英語の習得と面接準備を同時並行で進め、試験全体への総合力を高めます。",
  },
  {
    title: "北里大学に特化した過去問分析と重点指導",
    body: "過去問を徹底分析し、北里大学で頻出の分野を重点的に指導します。物理の応用問題・有機化学の構造決定・医療系英語という北里大学特有の出題に対して、最も効率的な対策ルートを個別に設計します。",
  },
];

const faqs = [
  {
    q: "北里大学医学部の物理はどのくらい難しいですか？",
    a: "私立医学部の中ではやや難しめです。標準問題集を完璧にした上で、難問演習に進む段階的な対策が必要です。力学と電磁気の応用問題への対応力を特に重点的に鍛えましょう。",
  },
  {
    q: "募集人員と倍率を教えてください。",
    a: "年度で変動するため、最新の募集人員や出願・受験・合格者数は北里大学の『入試状況・結果』で確認してください。公式Q&Aでは一般選抜の最終合否判定を、1次試験の学力検査と2次試験の論文・面接・調査書等による総合判定としています。",
  },
  {
    q: "北里大学医学部の合格に必要な得点率はどのくらいですか？",
    a: "1次試験の目安として得点率70〜75%程度が合格ラインとされています。物理での失点をどれだけ抑えられるかが重要で、英語・数学で安定した得点を確保しつつ、理科でも平均以上を狙うバランスが求められます。",
  },
  {
    q: "感染症研究が有名とのことですが、受験対策にどう活かせますか？",
    a: "北里大学は感染症・免疫研究の分野で国内トップクラスの実績を持ちます。英語の長文でも感染症・免疫系のテーマが出題されることがあり、日頃から感染症関連のニュースに触れておくと長文理解に役立ちます。また、面接で研究への関心を語る際にも具体的なエピソードになります。",
  },
  {
    q: "北里大学医学部の面接で特に重視されることは何ですか？",
    a: "医師を志す動機の明確さと、医療倫理・医療問題に関する基本的な知識が評価されます。北里大学の歴史や北里柴三郎の業績について理解しておくと、志望理由に深みが出ます。感染症研究への関心を具体的に語れるとさらに好印象です。",
  },
  {
    q: "北里大学医学部の対策はいつから始めるべきですか？",
    a: "物理の対策に時間がかかるため、高2冬から基礎固めを始め、高3夏から標準→応用と段階的に物理の難度を上げていく計画が理想です。早めのスタートが北里大学合格の鍵です。",
  },
];

export default function KitasatoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            北里大学医学部 — 神奈川県相模原市
          </p>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "var(--font-noto-serif)", lineHeight: "1.3" }}
          >
            物理の壁を越えた者が合格する。<br />北里大学医学部合格戦略。
          </h1>
          <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            現役慶應医学部生が物理難度の高い入試の完全攻略法を解説
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["1次は学力検査", "2次は論文・面接", "調査書等も総合判定", "理科は物・化・生"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-xs font-semibold"
                style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Overview</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            北里大学医学部の入試概要
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              北里大学医学部は神奈川県相模原市に位置し、近代細菌学の父・北里柴三郎の精神を受け継ぐ研究志向の強い医学部です。感染症・免疫分野に強みを持つ研究教育と、附属病院との密接な連携による臨床教育が特徴です。
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d3d3d" }}>
              公式Q&Aでは、一般選抜の最終合否判定は1次試験の学力検査と2次試験の論文・面接・調査書等による総合判定と明記されています。理科は物理・化学・生物の出題意図が公表されており、英語・数学と合わせて学力検査の完成度を高めたうえで、論文と面接にも早めに備える必要があります。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "1次試験", value: "英・数・理" },
                { label: "2次判定", value: "論文・面接・調査書等" },
                { label: "理科出題", value: "物・化・生" },
                { label: "合否判定", value: "総合判定" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center p-4 rounded-xl"
                  style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                >
                  <p className="text-xs mb-1 font-medium" style={{ color: "#c9922a" }}>{item.label}</p>
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 合格戦略 */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Strategy</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            合格のための戦略
          </h2>
          <div className="space-y-6">
            {strategies.map((item) => (
              <div
                key={item.step}
                className="flex gap-5 p-6 rounded-2xl"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 科目別対策 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Subjects</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            科目別対策のポイント
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-base" style={{ color: "#0c1a33" }}>{item.name}</p>
                  <p className="text-sm" style={{ color: "#c9922a" }}>{item.level}</p>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#3d3d3d" }}>{item.body}</p>
                <p
                  className="text-xs leading-relaxed p-3 rounded-lg"
                  style={{ color: "#6b7280", backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* スケジュール */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Schedule</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            合格までのスケジュール
          </h2>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div
                  className="flex-shrink-0 px-3 py-1 rounded-lg text-xs font-bold text-white h-fit"
                  style={{ backgroundColor: "#0c1a33" }}
                >
                  {item.period}
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* よくある失敗パターン */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Mistakes</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            よくある失敗パターン
          </h2>
          <div className="space-y-4">
            {mistakes.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: "#c9922a" }}
                  >
                    !
                  </span>
                  <div>
                    <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* なぜMedvanceか */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>Why Medvance</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            北里大学合格にMedvanceが選ばれる理由
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whyMedvance.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  {i + 1}
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-2" style={{ color: "#c9922a" }}>FAQ</p>
          <h2
            className="text-2xl md:text-3xl font-bold text-center mb-8"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MedvanceBanner */}
      <MedvanceBanner />

      {/* CTA */}
      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Free Consultation
          </p>
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            北里大学医学部合格への道筋を、現役慶應医学部生と一緒に考えます。
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
