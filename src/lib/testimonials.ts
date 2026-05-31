import { siteUrl } from "./seo";

export type Testimonial = {
  slug: string;
  author: string;
  authorRole: string;
  rating: 1 | 2 | 3 | 4 | 5;
  headline: string;
  body: string;
  datePublished: string;
};

export const testimonials: Testimonial[] = [
  {
    slug: "keio-naibu-h-k",
    author: "H.Kさん（塾高OB）",
    authorRole: "慶應義塾高校から医学部推薦進学",
    rating: 5,
    headline: "塾高独自の高難度定期テスト対策に完全同調し、医学部推薦を死守！",
    body: "慶應義塾高校の定期試験は大学教養レベルの物理・化学や、学内プリントに完全に沿った数学など、市販の予備校教材が通用しませんでした。Medvanceでは、同じ塾高を突破して医学部に入った先輩講師が、授業ノートや過去の傾向から『出るポイント』をピンポイントで解説してくれました。結果、評定8.8を維持し、激戦の上位22名枠を無事突破して医学部への内部推薦を勝ち取ることができました。",
    datePublished: "2025-03-10",
  },
  {
    slug: "jikei-goukaku-s-m",
    author: "S.Mさん（現役生）",
    authorRole: "大手予備校併用で東京慈恵会医科大現役合格",
    rating: 5,
    headline: "大手予備校の授業を『15分タスク』で完全定着、慈恵医大現役合格！",
    body: "大手予備校（駿台）に通っていましたが、インプットの授業を受けるだけで満足してしまい、記述の復習がおろそかになっていました。Medvanceの先生は、予備校のテキストや模試の復習スケジュールを15分単位の隙間時間タスクに分解して自習を徹底管理してくれました。授業後半での『逆授業（解法の口頭再現）』により曖昧さが一切排除され、偏差値が1年で52から61へ急上昇。志望理由書や模擬面接まで一貫して対策していただき、東京慈恵会医科大学に現役合格できました。",
    datePublished: "2025-03-12",
  },
  {
    slug: "ronin-kokuritsu-y-t",
    author: "Y.Tさん（浪人生・オンライン指導）",
    authorRole: "1浪から偏差値58→65、地方国公立医学部合格",
    rating: 5,
    headline: "オンラインで毎日リアルタイム添削。記述スピードが劇的向上！",
    body: "地方在住のため近くに医学部専門の塾がなく、オンラインで受講しました。画面共有を用いた先生のリアルタイム答案添削は対面指導以上の圧倒的な密度でした。特に数学と物理の『減点されない論理記述の型』と『時間配分の取捨選択ルール』を叩き込まれ、共通テスト模試では760点から820点へアップ。メンタル面でも慶應医学部の先生が毎日のLINEで温かく伴走してくださり、孤独な浪人生活を乗り越え、第一志望の国公立医学部に合格できました。",
    datePublished: "2025-03-15",
  },
];

export function buildReviewSchemas() {
  if (testimonials.length === 0) return [];

  const reviews = testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${siteUrl}/#review-${t.slug}`,
    itemReviewed: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: t.author,
    },
    name: t.headline,
    reviewBody: t.body,
    datePublished: t.datePublished,
  }));

  const ratingValues = testimonials.map((t) => t.rating);
  const avg = ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length;

  const aggregate = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "@id": `${siteUrl}/#aggregate-rating`,
    itemReviewed: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
    },
    ratingValue: avg.toFixed(1),
    bestRating: "5",
    worstRating: "1",
    ratingCount: testimonials.length.toString(),
    reviewCount: testimonials.length.toString(),
  };

  return [...reviews, aggregate];
}
