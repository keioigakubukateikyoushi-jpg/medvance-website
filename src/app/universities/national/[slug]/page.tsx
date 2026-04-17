import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getNationalUniversityBySlug,
  nationalUniversityArticles,
  type NationalUniversityEntry,
} from "../data";

type ContentBlock = {
  title: string;
  body: string;
};

type LinkBlock = {
  href: string;
  title: string;
  description: string;
};

function isUrban(entry: NationalUniversityEntry) {
  return (
    entry.category === "旧帝大" ||
    entry.category === "都市型総合大学" ||
    entry.area === "東京" ||
    entry.area === "大阪" ||
    entry.area === "京都"
  );
}

function buildFeatures(entry: NationalUniversityEntry): ContentBlock[] {
  const base = [
    {
      title: "大学の特色を理解したうえで勉強設計を組み立てる",
      body: `${entry.name}は「${entry.summary}」という特徴を持つ大学です。まずは出題傾向だけでなく、大学が重視する受験生像や学習姿勢まで含めて整理し、どの科目で差をつけるかを明確にすることが重要です。`,
    },
    {
      title: "共通テストと二次力を分けて管理する",
      body: "国公立医学部では共通テストで失点を抑える安定感と、二次試験で合格ラインを超える記述力の両方が必要です。模試ごとに共通テスト換算と二次科目の達成度を切り分けて管理しましょう。",
    },
    {
      title: "面接・小論文は直前対策ではなく早期に触れる",
      body: `${entry.name}に限らず国公立医学部では、人物評価や医療理解が最後の合否を左右することがあります。志望理由、地域医療への理解、学部の特色との接続を早い段階から言語化しておくと本番で崩れにくくなります。`,
    },
  ];

  if (entry.category === "旧帝大") {
    base[0].body =
      `${entry.name}は難関大らしく学力水準の高さに加えて、記述で論理を積み上げる力が問われやすい大学です。単に問題集を回すのではなく、答案の再現性と科目横断の完成度を高い水準で揃える必要があります。`;
    base[2].body =
      "難関校では学力上位層の争いになりやすい分、面接や志望理由の粗さが目立ちやすくなります。研究志向、臨床志向、地域医療志向のどこに自分の軸があるかを明確にしておくと説得力が増します。";
  }

  if (entry.category === "単科医科大学") {
    base[0].body =
      `${entry.name}は医療系の学びに集中しやすい環境が魅力です。そのぶん「医学を学ぶ意思」や現場理解との接続が問われやすいので、学力対策と並行して医療系ニュースや大学の教育方針にも触れておくと差がつきます。`;
    base[2].body =
      "単科医科大学では面接や小論文で医療職への解像度が見られやすい傾向があります。医師像、患者との向き合い方、チーム医療への考え方を自分の言葉で語れる状態を作りましょう。";
  }

  if (entry.category === "防衛医科大学校") {
    return [
      {
        title: "学力だけでなく適性全体で勝負する",
        body: "防衛医科大学校は一般の医学部とは異なり、学力・適性・身体検査・面接を含めて総合的に判断されます。筆記対策に偏りすぎず、規律ある生活や志望動機の明確さまで含めて準備することが重要です。",
      },
      {
        title: "医師としての志と服務への理解を両立させる",
        body: "医学を学びたい理由だけでなく、防衛医官という進路に対する理解と納得感が必要です。医療への関心と公的使命への意識の両方を言葉にできるようにしておきましょう。",
      },
      {
        title: "本番を想定した総合対策を早めに始める",
        body: "筆記、面接、適性、生活管理まで複数要素が絡むため、直前に詰め込む形では仕上がりません。早期から全体像を把握し、弱点を一つずつ潰していく進め方が向いています。",
      },
    ];
  }

  return base;
}

function buildStrategies(entry: NationalUniversityEntry) {
  return [
    {
      step: "01",
      title: "共通テスト目標を先に決める",
      body: `${entry.name}では共通テストでの安定感が出願戦略と最終合否の両方に大きく影響します。夏までに科目ごとの目標点を置き、秋以降は「どの科目で取り切るか」「どの科目で落とさないか」を明確にしておくと失速しにくくなります。`,
    },
    {
      step: "02",
      title: "二次試験は答案の質で差をつける",
      body: "国公立医学部では知識量だけでなく、答案の構成、計算の安定感、途中式や説明の自然さが点差になります。演習量を増やすだけでなく、採点される答案を作る意識で復習することが重要です。",
    },
    {
      step: "03",
      title: "面接・小論文は大学の教育方針と結びつける",
      body: `${entry.name}の特色、立地、教育方針、地域との関わりを踏まえて、自分がなぜその大学で学びたいのかを整理しましょう。テンプレート的な志望理由より、大学理解がにじむ受け答えの方が評価されやすくなります。`,
    },
    {
      step: "04",
      title: "直前期は併願校も含めて本番シミュレーションを回す",
      body: `${entry.area}エリアの移動や試験日程も見ながら、本番と同じ時間配分で過去問や予想演習を回すと失点が減ります。共通テスト後は出願判断も含めて、数日単位でやることを固定するとブレません。`,
    },
  ];
}

function buildSubjectFocus(entry: NationalUniversityEntry): ContentBlock[] {
  const english = isUrban(entry)
    ? "長文の情報処理量が多くても崩れない読解力と、記述で減点されない表現力を磨くのが基本です。和訳・要約・説明型の設問を意識して復習しましょう。"
    : "共通テストでの安定得点に加え、二次では読解の正確性と語彙の運用力を求められます。標準問題を落とさず、記述で確実に点を取り切る練習が有効です。";
  const math =
    entry.category === "旧帝大"
      ? "難問に見えても典型解法の組み合わせで崩す力が必要です。途中式の整合性、場合分けの整理、記述の論理を最後まで通す練習を重視しましょう。"
      : "国公立医学部では数学の安定感が合否を左右しやすいです。典型問題の処理速度を上げたうえで、記述で部分点を拾える答案作成を徹底するのが効果的です。";
  const science =
    entry.category === "単科医科大学"
      ? "理科は医学志向の受験生同士で差がつきにくい科目だからこそ、知識の抜けと計算ミスを徹底的に潰すことが大切です。実験考察やグラフ処理にも慣れておきましょう。"
      : "理科は計算系と知識系の両輪で仕上げるのが基本です。物理・化学・生物の選択科目ごとに、取り切る分野と時間をかけない分野を整理して得点最大化を狙います。";
  const interview =
    entry.category === "防衛医科大学校"
      ? "面接では志望動機に加えて、防衛医官という進路への理解と覚悟が問われます。制度や役割を調べ、自分の価値観とどうつながるかまで言語化しておく必要があります。"
      : "面接・小論文では医療倫理、地域医療、チーム医療、大学の特色への理解が問われやすいです。頻出テーマの暗記ではなく、自分の考えを筋道立てて話す訓練を積みましょう。";

  return [
    { title: "英語", body: english },
    { title: "数学", body: math },
    { title: "理科", body: science },
    { title: "面接・小論文", body: interview },
  ];
}

function buildActionPlan(entry: NationalUniversityEntry): ContentBlock[] {
  return [
    {
      title: "この大学に向いている人",
      body: entry.fit,
    },
    {
      title: "併願の考え方",
      body: isUrban(entry)
        ? "本命校の難度に合わせて、私立医学部や同エリアの国公立も含めた現実的な併願設計を早めに固めるのがおすすめです。共通テスト後に慌てないよう、秋までに候補を絞っておきましょう。"
        : "地域性や移動負担も含めて、出願のしやすさと学習負荷のバランスを見るのが重要です。本命対策を崩さない範囲で、同系統の大学を比較して併願を設計すると準備しやすくなります。",
    },
    {
      title: "今すぐやるべきこと",
      body: `${entry.name}を目指すなら、まずは共通テスト換算の現状把握、二次の苦手分野の洗い出し、大学理解の3つを同時に進めるのが効果的です。抽象的な「頑張る」ではなく、科目・週単位の行動に落として管理しましょう。`,
    },
  ];
}

function buildFaqs(entry: NationalUniversityEntry) {
  return [
    {
      q: `${entry.name}では共通テストと二次試験のどちらを重視すべきですか？`,
      a: "どちらか一方ではなく、両方を切り分けて管理するのが前提です。共通テストで大きく崩れると出願や戦略に影響しやすく、二次試験では記述の完成度が最終的な差になります。模試や過去問演習では、共通テスト換算と二次得点力を別々に追うのがおすすめです。",
    },
    {
      q: `${entry.name}の対策はいつから始めるべきですか？`,
      a: "高2までに英語・数学・理科の土台を固め、高3では共通テスト対策と二次対策を並行できる状態を作るのが理想です。浪人生や再受験生は、現状を把握したうえで年間設計を立て、どの時期に何を仕上げるかを最初に決めましょう。",
    },
    {
      q: `${entry.name}に向いている受験生はどんなタイプですか？`,
      a: entry.fit,
    },
    {
      q: "面接や小論文はどこまで対策が必要ですか？",
      a: "国公立医学部では学力が並んだ受験生同士の比較になったとき、面接や小論文の完成度が差になることがあります。大学の教育方針、地域との関わり、医療ニュースへの自分なりの考えを整理し、第三者に見てもらいながら改善するのが効果的です。",
    },
  ];
}

function buildRelatedUniversities(entry: NationalUniversityEntry): LinkBlock[] {
  const related = nationalUniversityArticles
    .filter((candidate) => candidate.slug !== entry.slug)
    .map((candidate) => {
      let score = 0;
      if (candidate.region === entry.region) score += 3;
      if (candidate.category === entry.category) score += 2;
      if (candidate.area === entry.area) score += 1;
      return { candidate, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ candidate }) => ({
      href: `/universities/national/${candidate.slug}`,
      title: candidate.name,
      description: candidate.summary,
    }));

  return related;
}

function buildRelatedArticles(entry: NationalUniversityEntry): LinkBlock[] {
  const articles: LinkBlock[] = [
    {
      href: "/column/shigaku-vs-kokuritsu",
      title: "私立医学部と国公立医学部の違い",
      description: "学費、出題傾向、学習配分の違いを比較しながら整理した記事です。",
    },
    {
      href: "/column/gakuhi",
      title: "医学部の学費と費用感",
      description: "国公立と私立の費用差や、受験期に必要な出費をまとめています。",
    },
    {
      href: "/column/mensetu",
      title: "医学部面接対策ガイド",
      description: "国公立医学部でも差がつきやすい面接の考え方を整理した記事です。",
    },
  ];

  if (entry.category === "旧帝大" || isUrban(entry)) {
    articles[0] = {
      href: "/subjects/math",
      title: "医学部数学の対策",
      description: "難関校で差がつきやすい数学の記述対策と復習法をまとめています。",
    };
  }

  if (entry.category === "単科医科大学") {
    articles[2] = {
      href: "/column/shobun",
      title: "小論文・課題作文対策ガイド",
      description: "医療理解を問う記述対策を早めに進めたい人向けの記事です。",
    };
  }

  if (entry.category === "防衛医科大学校") {
    return [
      {
        href: "/column/mensetu",
        title: "医学部面接対策ガイド",
        description: "面接で見られる視点を整理し、事前準備を進めるための記事です。",
      },
      {
        href: "/column/roadmap",
        title: "医学部受験ロードマップ",
        description: "年間の進め方と直前期までの学習計画の立て方をまとめています。",
      },
      {
        href: "/subjects/math",
        title: "医学部数学の対策",
        description: "筆記対策の軸として数学をどう安定させるかを整理した記事です。",
      },
    ];
  }

  return articles;
}

export async function generateStaticParams() {
  return nationalUniversityArticles.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getNationalUniversityBySlug(slug);

  if (!entry) {
    return {};
  }

  return {
    title: `${entry.name}の受験対策ガイド | Medvance`,
    description: `${entry.name}の特徴、向いている受験生、共通テストと二次の勉強方針、面接・小論文対策までまとめた受験対策ガイドです。現役慶應医学部生が1対1で指導。`,
    alternates: {
      canonical: `/universities/national/${slug}`,
    },
    openGraph: {
      title: `${entry.name}の受験対策ガイド | Medvance`,
      description: `${entry.name}の入試対策を現役慶應医学部生が1対1でサポート。出題傾向・配点・面接対策まで。`,
      url: `/universities/national/${slug}`,
      type: "article",
    },
  };
}

export default async function NationalUniversityArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getNationalUniversityBySlug(slug);

  if (!entry) {
    notFound();
  }

  const features = buildFeatures(entry);
  const strategies = buildStrategies(entry);
  const subjectFocus = buildSubjectFocus(entry);
  const actionPlan = buildActionPlan(entry);
  const faqs = buildFaqs(entry);
  const relatedUniversities = buildRelatedUniversities(entry);
  const relatedArticles = buildRelatedArticles(entry);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            National University Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            {entry.name}の受験対策ガイド
          </h1>
          <p className="text-base max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            {entry.summary}
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-4">
          {[
            { label: "エリア", value: entry.region },
            { label: "地域", value: entry.area },
            { label: "カテゴリ", value: entry.category },
            { label: "キャンパス", value: entry.campus },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white p-5" style={{ border: "1px solid #e5e1d8" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>
                {item.label}
              </p>
              <p className="text-sm font-semibold leading-relaxed" style={{ color: "#0c1a33" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-[28px] p-8 mb-10" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
              Fit
            </p>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              {entry.name}に向いている人
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d3d3d" }}>
              {entry.fit}
            </p>
            <div className="flex flex-wrap gap-2">
              {entry.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: "rgba(12,26,51,0.08)", color: "#0c1a33" }}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            {entry.name}を目指すうえで押さえたいポイント
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item) => (
              <div key={item.title} className="rounded-2xl p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
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
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            合格までの進め方
          </h2>
          <div className="space-y-4">
            {strategies.map((item) => (
              <div key={item.step} className="rounded-2xl bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: "#c9922a" }}>
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            科目別に意識したいこと
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {subjectFocus.map((item) => (
              <div key={item.title} className="rounded-2xl p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            出願と学習計画の考え方
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {actionPlan.map((item, index) => (
              <div key={item.title} className="rounded-2xl bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4" style={{ backgroundColor: "#c9922a" }}>
                  {index + 1}
                </div>
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

      <div className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                比較して見たい近い大学
              </h2>
              <div className="space-y-4">
                {relatedUniversities.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl p-6 hover:shadow-md transition-shadow"
                    style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                  >
                    <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                あわせて読みたい記事
              </h2>
              <div className="space-y-4">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-2xl p-6 hover:shadow-md transition-shadow"
                    style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
                  >
                    <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl overflow-hidden bg-white"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <summary
                  className="cursor-pointer list-none px-6 py-5 text-sm font-semibold"
                  style={{ color: "#0c1a33" }}
                >
                  Q. {item.q}
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  A. {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Free Consultation
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            {entry.name}に合わせた学習計画を一緒に整理します
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.68)" }}>
            共通テストの目標設定、二次試験の勉強方針、面接・小論文まで含めて、今の状況に合わせた対策を無料相談で整理できます。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
            >
              無料相談を申し込む
            </Link>
            <Link
              href="/universities/national"
              className="inline-block px-8 py-4 font-bold text-base rounded-lg text-center hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              国公立医学部一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
