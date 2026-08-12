import { siteUrl } from "./seo";

export type Testimonial = {
  slug: string;
  /** 属性表記は「受講生」「受講生の保護者」までに留める（個人特定を避けるため） */
  author: "受講生" | "受講生の保護者";
  headline: string;
  body: string;
  datePublished: string;
};

/**
 * サイト掲載中の声。
 *
 * 出典は Classroom 記録の本人投稿・保護者投稿で、氏名・学校歴・居住地・家族の健康情報・
 * 講師名・特定大学名を削除したうえで整文したもの。原文にない成果（合格した、成績が上がった等）は
 * 一切加えていないため、星評価・AggregateRating は出力しない。
 * 本人・保護者双方から掲載同意を取得済み（2026-08-12 確認）。
 */
export const testimonials: Testimonial[] = [
  {
    slug: "parent-honnin-no-henka",
    author: "受講生の保護者",
    headline: "本人の変化",
    body: "受講を始めてから、本人に自覚と責任感が芽生え、以前より落ち着いて学習に取り組めるようになりました。",
    datePublished: "2026-08-12",
  },
  {
    slug: "student-gakushu-no-henka",
    author: "受講生",
    headline: "学習の変化",
    body: "基礎問題集を繰り返す中で、「分かる」と「できる」の違いを実感しました。苦手な部分も何度も解き直し、少しずつ自信がついてきました。",
    datePublished: "2026-08-11",
  },
  {
    slug: "student-shido-no-kachi",
    author: "受講生",
    headline: "指導の価値",
    body: "先生方と勉強することで、医学部合格に必要な考え方を身につけられそうです。",
    datePublished: "2026-08-05",
  },
  {
    slug: "student-jugyo-de-eta-shiten",
    author: "受講生",
    headline: "授業で得た視点",
    body: "先生方から医学部合格に向けた考え方を共有してもらえることが、とても勉強になります。",
    datePublished: "2026-08-11",
  },
  {
    slug: "parent-bansou-eno-kitai",
    author: "受講生の保護者",
    headline: "伴走への期待",
    body: "家庭だけで学習を支えることに限界を感じていました。これからは、専門的な視点を持つ先生方を頼りながら、本人の学習を支えていきたいと思っています。",
    datePublished: "2026-08-12",
  },
];

/** トップページ用の抜粋（保護者1件・受講生1件）。全件は /success-stories に掲載。 */
export const featuredTestimonialSlugs = [
  "parent-honnin-no-henka",
  "student-gakushu-no-henka",
] as const;

export const featuredTestimonials: Testimonial[] = featuredTestimonialSlugs
  .map((slug) => testimonials.find((t) => t.slug === slug))
  .filter((t): t is Testimonial => Boolean(t));

/**
 * 未掲載の下書き。サイトのどこからも描画していない。
 *
 * 合格実績を伴う内容で、/success-stories の編集方針
 * 「代表本人の合格実績以外の合格者数は、まだここに掲載できる段階にありません」と整合しないため、
 * 本人の同意と一次情報の確認が取れるまで表示しない。
 */
export const draftTestimonials: (Omit<Testimonial, "author"> & {
  author: string;
  authorRole: string;
  rating: 1 | 2 | 3 | 4 | 5;
})[] = [
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

/**
 * Review 構造化データ。
 * 原文に評価点の記載がないため reviewRating は付けず、AggregateRating も出力しない。
 */
export function buildReviewSchemas() {
  return testimonials.map((t) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${siteUrl}/#review-${t.slug}`,
    itemReviewed: {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
    },
    author: {
      "@type": "Person",
      name: t.author,
    },
    name: t.headline,
    reviewBody: t.body,
    datePublished: t.datePublished,
  }));
}
