import type { Metadata } from "next";

export type LongformCard = {
  title: string;
  body: string;
};

export type LongformSection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  cards?: LongformCard[];
  bullets?: string[];
  background?: "white" | "sand";
};

export type LongformFaq = {
  q: string;
  a: string;
};

export type LongformRelatedArticle = {
  href: string;
  title: string;
  label: string;
};

export type LongformColumnArticle = {
  slug: string;
  category: string;
  title: string;
  description: string;
  heroSubtitle: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  introParagraphs: string[];
  keyPoints: LongformCard[];
  sections: LongformSection[];
  consultation: {
    title: string;
    description: string;
    points: string[];
    source: string;
  };
  consultationAfterSection?: number;
  faqs: LongformFaq[];
  relatedArticles: LongformRelatedArticle[];
  cta: {
    heading: string;
    subtext: string;
    concerns: string[];
    benefits: string[];
    source: string;
  };
};

const publishDate = "2026-04-01";

function buildArticleMetadata(article: LongformColumnArticle): Metadata {
  const ogImageUrl = `https://medvance-edu.com/api/og?title=${encodeURIComponent(article.title)}&cat=${encodeURIComponent(article.category)}`;
  return {
    title: `${article.title} | Medvance`,
    description: article.description,
    alternates: {
      canonical: `/column/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://medvance-edu.com/column/${article.slug}`,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: ["Medvance編集部"],
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [ogImageUrl],
    },
    keywords: article.keywords,
  };
}

type SubjectArticleConfig = {
  slug: string;
  title: string;
  description: string;
  heroSubtitle: string;
  subject: string;
  keywords: string[];
  focusCards: LongformCard[];
  studyOrderBullets: string[];
  progressBullets: string[];
  mistakeCards: LongformCard[];
  relatedArticles: LongformRelatedArticle[];
  concerns: string[];
  benefits: string[];
};

function createSubjectArticle({
  slug,
  title,
  description,
  heroSubtitle,
  subject,
  keywords,
  focusCards,
  studyOrderBullets,
  progressBullets,
  mistakeCards,
  relatedArticles,
  concerns,
  benefits,
}: SubjectArticleConfig): LongformColumnArticle {
  return {
    slug,
    category: "勉強法",
    title,
    description,
    heroSubtitle,
    keywords,
    datePublished: publishDate,
    dateModified: publishDate,
    introParagraphs: [
      `${subject}は医学部受験の合否を大きく左右する科目です。ただ問題集をこなすだけでは伸びにくく、志望校の出題形式に合った順番で積み上げる必要があります。`,
      `${subject}で伸び悩む受験生の多くは、「基礎が曖昧なのに難問へ進む」「解いた数は多いのに復習が浅い」「志望校に必要な力と今やっている勉強がずれている」のどれかに当てはまります。`,
      `この記事では、医学部受験で${subject}を伸ばすために必要な到達点、勉強の順番、ありがちな失敗、相談すると整理しやすいポイントまで実践的にまとめます。`,
    ],
    keyPoints: [focusCards[0], focusCards[1], focusCards[2]],
    sections: [
      {
        title: `医学部受験の${subject}で差がつくポイント`,
        intro: `${subject}は「知っている」だけでなく、「制限時間の中で使える」状態まで仕上げることが大切です。`,
        cards: focusCards,
        background: "white",
      },
      {
        title: `${subject}の勉強順を間違えない`,
        paragraphs: [
          `${subject}は最初から難問演習に入ると、手応えのない時間が長くなります。まずは基礎事項と典型処理を固め、そのあとで標準問題、最後に大学別対策へ進む流れが基本です。`,
          `特に医学部受験では、模試で見える弱点と実際の入試で問われる力がずれることがあります。だからこそ、参考書の進度だけでなく、過去問や大学別問題で必要な力を逆算して順番を決めることが重要です。`,
        ],
        bullets: studyOrderBullets,
        background: "sand",
      },
      {
        title: `${subject}で伸びる人の週間ルーティン`,
        paragraphs: [
          `成績が伸びる人は、${subject}を「気分でやる科目」にしていません。毎週の中で復習、演習、見直しの位置が固定されていて、苦手分野の放置が起きにくい設計になっています。`,
          `大切なのは、1回ごとの勉強時間よりも、同じ形式の振り返りを繰り返せることです。ノートの作り方や復習タイミングを固定すると、実力の伸びが安定しやすくなります。`,
        ],
        bullets: progressBullets,
        background: "white",
      },
      {
        title: `${subject}でやってはいけない失敗`,
        intro: `${subject}は努力量がそのまま点数に直結しにくい科目です。やり方を間違えると、時間の割に伸びません。`,
        cards: mistakeCards,
        background: "sand",
      },
      {
        title: `成績が止まったときの見直し方`,
        paragraphs: [
          `${subject}で成績が止まるときは、単純な勉強量不足よりも、「どこで失点しているかが見えていない」ことが多いです。正答率の低い単元、時間をかけすぎている設問、復習しても再現できない問題を分けて見直す必要があります。`,
          `自分では順調に進んでいるつもりでも、答案の雑さや解法選択のズレには気づきにくいものです。模試や過去問の復習を誰かと一緒に言語化すると、${subject}の伸びは大きく変わります。`,
        ],
        background: "white",
      },
    ],
    consultation: {
      title: `${subject}の勉強法を、志望校に合わせて整理しませんか？`,
      description: `医学部受験では、${subject}の勉強法も志望校で変わります。Medvanceの無料相談では、今の学力、志望校、残り期間に合わせて、次にやるべきことを具体化します。`,
      points: [
        `今の${subject}の弱点が、知識不足なのか、処理力不足なのか、答案の質なのか整理できる`,
        `参考書と問題集の優先順位を、志望校に合わせて組み直せる`,
        `過去問に入る時期と、${subject}の復習サイクルを具体的に決められる`,
      ],
      source: `column-${slug}-mid`,
    },
    consultationAfterSection: 1,
    faqs: [
      {
        q: `医学部受験の${subject}はいつから本格的に対策すべきですか？`,
        a: `高1・高2の段階では基礎の完成を優先しつつ、志望校の出題傾向を早めに把握しておくのが有効です。本格的な大学別対策は高3夏以降が一般的ですが、何をもって「基礎完成」とするかは志望校次第で変わります。`,
      },
      {
        q: `${subject}が苦手でも医学部合格は可能ですか？`,
        a: `可能です。ただし、苦手のまま放置するのではなく、「どこで失点しているか」を細かく分解する必要があります。知識なのか、典型処理なのか、時間配分なのかを分けて対処すると、苦手科目でも十分巻き返せます。`,
      },
      {
        q: `${subject}の参考書は何冊も必要ですか？`,
        a: `多くの場合は必要ありません。大事なのは冊数よりも、基礎から標準までを一貫した流れで仕上げられるかどうかです。参考書を増やしすぎると復習が浅くなり、かえって非効率になりやすいです。`,
      },
      {
        q: `${subject}は集団授業と個別指導のどちらが向いていますか？`,
        a: `基礎のインプットには集団授業も有効ですが、答案のズレや志望校別の対策まで詰めるなら個別の方が相性がいいことが多いです。特に医学部受験では、同じ${subject}でも大学ごとの差が大きいので、個別最適化が効きやすい科目です。`,
      },
      {
        q: `${subject}の勉強法を相談すると、どこまで具体的に決まりますか？`,
        a: `参考書の優先順位、1週間の回し方、模試や過去問の復習方法、大学別対策へ移るタイミングまで具体的に整理できます。独学だと曖昧になりやすい部分を言語化することが相談の価値です。`,
      },
    ],
    relatedArticles,
    cta: {
      heading: `${subject}の勉強法まで含めて、受験戦略を組み直したい方へ`,
      subtext: `Medvanceは現役慶應医学部生による完全1対1の伴走型指導です。${subject}の勉強法も、志望校・現在地・残り期間に合わせて個別に設計します。`,
      concerns,
      benefits,
      source: `column-${slug}-bottom`,
    },
  };
}

type TimingArticleConfig = {
  slug: string;
  title: string;
  description: string;
  heroSubtitle: string;
  category: string;
  keywords: string[];
  target: string;
  startCards: LongformCard[];
  stageCards: LongformCard[];
  actionBullets: string[];
  mistakeCards: LongformCard[];
  relatedArticles: LongformRelatedArticle[];
  concerns: string[];
  benefits: string[];
};

function createTimingArticle({
  slug,
  title,
  description,
  heroSubtitle,
  category,
  keywords,
  target,
  startCards,
  stageCards,
  actionBullets,
  mistakeCards,
  relatedArticles,
  concerns,
  benefits,
}: TimingArticleConfig): LongformColumnArticle {
  return {
    slug,
    category,
    title,
    description,
    heroSubtitle,
    keywords,
    datePublished: publishDate,
    dateModified: publishDate,
    introParagraphs: [
      `${target}は、直前期だけやればよいと思われがちですが、実際には早めに着手しておいた方が伸びやすい分野です。特に医学部受験では、一般学科の勉強と並行して準備しないと、秋以降に時間が足りなくなりやすいです。`,
      `とはいえ、早すぎる段階で重い対策を始めても非効率です。大切なのは「今やるべきこと」と「まだやらなくてよいこと」を分けることです。`,
      `この記事では、${target}をいつから始めるべきか、学年や状況ごとの目安、始めたら何をやるべきか、避けたい失敗まで整理します。`,
    ],
    keyPoints: [startCards[0], startCards[1], startCards[2]],
    sections: [
      {
        title: `今すぐ${target}に触れるべきサイン`,
        intro: `「まだ早い」と思っていても、次のような状態なら一度は着手した方が安全です。`,
        cards: startCards,
        background: "white",
      },
      {
        title: `学年・状況別の${target}スタートガイド`,
        intro: `同じ医学部受験でも、高1・高2、高3、浪人・再受験では準備の重さが変わります。`,
        cards: stageCards,
        background: "sand",
      },
      {
        title: `${target}を始めたら何をやるべきか`,
        paragraphs: [
          `${target}は、情報を集めるだけでは伸びません。自分の言葉で考え、他人に伝え、フィードバックで修正する工程が必要です。`,
          `特に医学部受験では、志望理由、医療への関心、自己理解、社会課題への視点などがつながっているかが見られます。だからこそ、単発ではなく継続的な準備が有効です。`,
        ],
        bullets: actionBullets,
        background: "white",
      },
      {
        title: `やってはいけない${target}の失敗`,
        intro: `${target}は勉強時間をかけても、やり方がずれていると成果が出ません。`,
        cards: mistakeCards,
        background: "sand",
      },
      {
        title: `開始時期より大切なのは、準備の質です`,
        paragraphs: [
          `${target}は、早く始めること自体が目的ではありません。学科の勉強と両立しながら、少しずつ材料を積み上げていくことに意味があります。`,
          `開始時期が適切でも、対策の中身が浅ければ本番では通用しません。逆に、短期間でも軸のある準備ができれば十分戦えます。迷うなら、今の学力と志望校に合わせて、どの粒度で始めるべきかを一度整理するのが得策です。`,
        ],
        background: "white",
      },
    ],
    consultation: {
      title: `${target}の始め方を、今の状況に合わせて整理しませんか？`,
      description: `Medvanceの無料相談では、学科との両立も含めて、${target}にいつからどこまで取り組むべきかを具体化します。`,
      points: [
        `${target}を重く始めるべきか、軽く触れるべきかを判断できる`,
        `志望校ごとの形式差を踏まえて、優先順位を決められる`,
        `独学で準備しにくい部分を、どこまでサポートに頼るべきか整理できる`,
      ],
      source: `column-${slug}-mid`,
    },
    consultationAfterSection: 1,
    faqs: [
      {
        q: `${target}は高1・高2から始めた方がいいですか？`,
        a: `高1・高2では重い対策までは不要ですが、志望校の形式や評価軸を知っておく価値はあります。本格的な準備は高3以降でも間に合うことが多いものの、何も知らないまま直前期に入るのは危険です。`,
      },
      {
        q: `${target}は独学でもできますか？`,
        a: `独学でも可能ですが、自分のズレに気づきにくい点が難しさです。模擬練習や第三者からのフィードバックが入ると、短期間でも質が上がりやすくなります。`,
      },
      {
        q: `学科がまだ不安でも${target}を始めるべきですか？`,
        a: `はい。ただし、学科を圧迫しない軽さで始めるのが原則です。材料集めや自己分析、形式理解など、学科と両立できる部分から先に進めると負担が少なくなります。`,
      },
      {
        q: `${target}は直前期だけでも間に合いますか？`,
        a: `直前期だけでも一定の準備はできますが、質を高めるには不利です。特に医学部受験では、考えの深さや一貫性を問われるため、早めに材料をためておく方が有利です。`,
      },
      {
        q: `${target}を相談すると、どこまで具体的に決まりますか？`,
        a: `着手時期、頻度、優先順位、必要な練習量、志望校ごとの差まで具体的に決められます。一般論ではなく、今の状況に合わせて設計できるのが相談の価値です。`,
      },
    ],
    relatedArticles,
    cta: {
      heading: `${target}まで含めて、医学部受験全体を整えたい方へ`,
      subtext: `学科だけでなく、${target}まで一貫して整えると、受験全体の迷いが大きく減ります。Medvanceでは現在地と志望校に合わせて、対策の始め方を個別に設計します。`,
      concerns,
      benefits,
      source: `column-${slug}-bottom`,
    },
  };
}

type YearsArticleConfig = {
  slug: string;
  title: string;
  description: string;
  heroSubtitle: string;
  keywords: string[];
  target: string;
  yearCards: LongformCard[];
  startBullets: string[];
  methodCards: LongformCard[];
  mistakeCards: LongformCard[];
  relatedArticles: LongformRelatedArticle[];
  concerns: string[];
  benefits: string[];
};

function createYearsArticle({
  slug,
  title,
  description,
  heroSubtitle,
  keywords,
  target,
  yearCards,
  startBullets,
  methodCards,
  mistakeCards,
  relatedArticles,
  concerns,
  benefits,
}: YearsArticleConfig): LongformColumnArticle {
  return {
    slug,
    category: "受験戦略",
    title,
    description,
    heroSubtitle,
    keywords,
    datePublished: publishDate,
    dateModified: publishDate,
    introParagraphs: [
      `${target}の過去問は、やみくもに年数を増やしても効果が出るとは限りません。第一志望なのか、併願校なのか、出題形式が安定しているかで、必要な年数は変わります。`,
      `年数だけを目標にすると、復習が浅くなったり、基礎補強が後回しになったりしがちです。大切なのは、必要な年数を見極めた上で、1年分ずつ丁寧に回すことです。`,
      `この記事では、${target}の過去問を何年分やるべきか、着手時期、回し方、避けたい失敗まで整理します。`,
    ],
    keyPoints: [yearCards[0], yearCards[1], yearCards[2]],
    sections: [
      {
        title: `${target}の過去問は何年分やるべきか`,
        intro: `必要な年数は、大学の位置づけと出題の安定度で考えると判断しやすくなります。`,
        cards: yearCards,
        background: "white",
      },
      {
        title: `いつから着手するか`,
        paragraphs: [
          `過去問の年数は、着手時期とセットで考える必要があります。年数だけ決めても、着手が遅すぎれば復習が間に合わず、早すぎれば基礎が固まっていないまま消費してしまいます。`,
          `基本は、高3春〜夏に形式確認として触れ、秋から本格演習に入る流れです。浪人・再受験では、4〜5月に一度解いて年間計画の基準にする方が効率的です。`,
        ],
        bullets: startBullets,
        background: "sand",
      },
      {
        title: `1年分の回し方`,
        intro: `過去問は「解いた回数」より、「解いたあと何を変えたか」が重要です。`,
        cards: methodCards,
        background: "white",
      },
      {
        title: `よくある失敗`,
        intro: `年数を増やすことが目的になると、実力は伸びません。`,
        cards: mistakeCards,
        background: "sand",
      },
      {
        title: `年数より大切なのは再現性です`,
        paragraphs: [
          `同じ形式で安定して得点できる状態になっているかが、最終的には最も重要です。第一志望なら5年分前後を丁寧に回す、併願校なら3年分前後を軸にする、という考え方が基本になります。`,
          `迷うなら、志望校の位置づけと残り期間から逆算して決めるのが安全です。独学だと年数を盛りすぎたり、逆に足りなくなったりしやすいので、一度戦略を整理すると無駄が減ります。`,
        ],
        background: "white",
      },
    ],
    consultation: {
      title: `${target}の過去問を、何年分・いつから回すか整理しませんか？`,
      description: `過去問の年数は、志望校の序列と学力次第で正解が変わります。Medvanceの無料相談では、必要な年数と復習の深さまで具体化します。`,
      points: [
        `第一志望と併願校で、どの大学にどれだけ時間をかけるべきか整理できる`,
        `過去問演習と基礎補強のバランスを設計できる`,
        `年数をこなすだけで終わらない復習サイクルを作れる`,
      ],
      source: `column-${slug}-mid`,
    },
    consultationAfterSection: 1,
    faqs: [
      {
        q: `${target}の過去問は少ないと不利ですか？`,
        a: `必要な年数を丁寧に回せていれば問題ありません。むしろ、年数を増やしすぎて復習が浅くなる方が不利です。第一志望と併願校で配分を変えるのが基本です。`,
      },
      {
        q: `基礎が終わっていなくても${target}の過去問に触れていいですか？`,
        a: `はい。本格演習ではなく、形式確認や不足分野の洗い出しとして使うなら有効です。高3春〜夏に1年分だけ触れる使い方は、学習の方向修正に役立ちます。`,
      },
      {
        q: `赤本の解説が薄い場合はどうすればよいですか？`,
        a: `解説だけで理解しきれないときは、学校や塾で答案の質まで確認すると効果的です。特に記述や時間配分の改善は、第三者の視点があると進みやすいです。`,
      },
      {
        q: `年度をさかのぼりすぎる必要はありますか？`,
        a: `出題形式が大きく変わっていない大学なら、直近5年前後を優先すれば十分なことが多いです。古い年度は、余力がある場合に形式理解の補助として使う程度で問題ありません。`,
      },
      {
        q: `${target}の過去問を相談すると、どこまで具体的に決まりますか？`,
        a: `大学ごとの年数配分、着手時期、復習方法、答案の見直し方まで具体的に整理できます。一般論ではなく、志望校と残り期間に合わせて設計できるのが相談の価値です。`,
      },
    ],
    relatedArticles,
    cta: {
      heading: `過去問の年数まで含めて、受験戦略を最適化したい方へ`,
      subtext: `${target}の過去問は、やればやるほど良いわけではありません。Medvanceでは、志望校と現在地に合わせて、必要な年数と回し方まで個別に設計します。`,
      concerns,
      benefits,
      source: `column-${slug}-bottom`,
    },
  };
}

export const shoronbunTimingArticle = createTimingArticle({
  slug: "shoronbun-timing",
  title: "医学部小論文対策はいつから始めるべきか",
  description:
    "医学部小論文対策はいつから始めるべきか。高1・高2・高3・浪人それぞれの始め方、頻出テーマの押さえ方、添削の入れ方まで現役慶應医学部生が解説します。",
  heroSubtitle: "開始時期、やるべきこと、失敗しない準備法まで整理",
  category: "入試対策",
  keywords: [
    "医学部 小論文 いつから",
    "医学部小論文 対策 時期",
    "医学部 小論文 始め方",
    "医学部 小論文 添削",
  ],
  target: "小論文対策",
  startCards: [
    {
      title: "志望校で小論文の比重が高い",
      body: "小論文の配点が高い大学や、足切り後に差がつきやすい大学を志望するなら、学科だけでなく小論文の準備も早めに進める必要があります。",
    },
    {
      title: "文章を書くことに苦手意識がある",
      body: "小論文は短期で急に上手くなるものではありません。書くことに慣れていないなら、材料集めと短いアウトプットを早めに始めた方が安全です。",
    },
    {
      title: "医療ニュースや社会課題に触れていない",
      body: "テーマ理解が浅いままだと、文章の型だけ覚えても本番で弱くなります。知識の蓄積には時間がかかるため、早めの着手が有効です。",
    },
  ],
  stageCards: [
    {
      title: "高1・高2: 読む習慣を作る",
      body: "この時期は本格的な答案作成よりも、医療・社会課題に触れ、自分の意見を短く言語化する習慣づけが重要です。",
    },
    {
      title: "高3春〜夏: 型を覚えて書き始める",
      body: "頻出テーマを把握し、段落構成と論の流れを学ぶ時期です。月2〜3本でもよいので、実際に書いて添削を受ける形に入りましょう。",
    },
    {
      title: "高3秋: 志望校形式に寄せる",
      body: "制限字数、テーマ傾向、時間配分を踏まえ、大学別に書き分ける段階です。一般論ではなく志望校別の答案に調整していきます。",
    },
    {
      title: "浪人・再受験: 春から材料蓄積",
      body: "学科と並行して、春からテーマ理解と添削を進めると秋が楽になります。社会人経験や再受験理由をどう文章化するかも早めに整理すべきです。",
    },
  ],
  actionBullets: [
    "頻出テーマを3〜5領域に絞り、ニュースや論点を整理する",
    "序論・本論・結論の型を固定して、毎回同じ手順で書く",
    "最初は字数を短めにして、論理の通り方を優先する",
    "添削を受けて、自分では気づけない論理の飛躍を修正する",
    "志望校が固まったら、大学別のテーマ傾向と字数に寄せていく",
  ],
  mistakeCards: [
    {
      title: "知識を集めるだけで書かない",
      body: "読むだけでは本番で使えません。短くてもよいので、定期的に書いてフィードバックを受ける必要があります。",
    },
    {
      title: "型だけ覚えて中身が薄い",
      body: "構成は大切ですが、論点理解が浅いと内容が空疎になります。医療や社会課題への具体的な視点が必要です。",
    },
    {
      title: "直前期にまとめて詰め込む",
      body: "小論文は短期間で急に安定しにくい分野です。時間がないほど、早めに軽く始めておく価値があります。",
    },
  ],
  relatedArticles: [
    { href: "/column/shobun", title: "医学部小論文の書き方・完全対策ガイド", label: "入試対策" },
    { href: "/column/shiboriyusho-writing", title: "医学部志望理由書の書き方", label: "入試対策" },
    { href: "/column/mmi-timing", title: "医学部MMI対策はいつから始めるべきか", label: "入試対策" },
  ],
  concerns: [
    "学科は進めているが、小論文だけ何から始めればよいか分からない",
    "添削を受けた方がよいのは分かるが、どの段階から必要か判断できない",
    "志望校ごとの小論文形式の違いまで追い切れていない",
  ],
  benefits: [
    "小論文にいつからどの重さで着手すべきか整理できる",
    "書く練習とテーマ理解をどう並行するか決められる",
    "志望校別の形式に合わせた準備の優先順位が明確になる",
  ],
});

export const mmiTimingArticle = createTimingArticle({
  slug: "mmi-timing",
  title: "医学部MMI対策はいつから始めるべきか",
  description:
    "医学部MMI対策はいつから始めるべきか。高1・高2・高3・浪人それぞれの始め方、頻出テーマ、模擬練習の入れ方まで現役慶應医学部生が解説します。",
  heroSubtitle: "MMIの特徴、着手時期、練習法まで分かる実践ガイド",
  category: "入試対策",
  keywords: [
    "医学部 MMI いつから",
    "医学部 MMI 対策",
    "MMI 始め方",
    "医学部 面接 MMI",
  ],
  target: "MMI対策",
  startCards: [
    {
      title: "MMI実施校を志望している",
      body: "MMIは通常面接と評価軸が異なります。大学の形式を知っているだけで、夏以降の準備内容がかなり変わります。",
    },
    {
      title: "瞬発的に答えるのが苦手",
      body: "MMIは短時間で考えを整理し、話す力が問われます。普段から思考を言語化する練習をしておくと有利です。",
    },
    {
      title: "倫理・医療テーマに自信がない",
      body: "MMIでは医療倫理やコミュニケーション判断が問われやすく、知識と視点の両方が必要です。直前だけでは準備が浅くなりやすいです。",
    },
  ],
  stageCards: [
    {
      title: "高1・高2: 形式理解と材料集め",
      body: "MMIを本格練習する必要はありませんが、医療倫理や社会課題に触れ、自分ならどう考えるかを言葉にする習慣は役立ちます。",
    },
    {
      title: "高3春〜夏: 考え方の型を作る",
      body: "よくあるテーマに対して、結論、理由、配慮点の順で整理する練習を始めると、秋以降の模擬練習がスムーズになります。",
    },
    {
      title: "高3秋: 模擬練習を重ねる",
      body: "時間制限つきで答える練習を増やし、表現の簡潔さや問いへのズレを修正していく時期です。",
    },
    {
      title: "浪人・再受験: 春から言語化の習慣化",
      body: "再受験では経歴の強みがある一方で、説明の一貫性がより見られます。春から軽く始めると、秋の完成度が上がります。",
    },
  ],
  actionBullets: [
    "MMIの評価軸を知り、通常面接との違いを把握する",
    "医療倫理、チーム医療、患者対応などの頻出テーマを整理する",
    "結論、理由、配慮点の3点で短く答える練習をする",
    "実際に時間を区切って模擬練習し、話し方より内容のズレを修正する",
    "志望校が固まったら、その大学特有の形式や傾向に寄せる",
  ],
  mistakeCards: [
    {
      title: "通常面接の延長で考える",
      body: "MMIは自己紹介よりも思考のプロセスを問われる場面が多く、通常面接と同じ準備だけでは不足しやすいです。",
    },
    {
      title: "正解を探そうとしすぎる",
      body: "MMIでは唯一の正解よりも、どう考えたか、何に配慮したかが見られます。結論の正しさだけに固執すると浅くなります。",
    },
    {
      title: "模擬練習をせずに本番へ行く",
      body: "時間制限と初見性が強い形式なので、頭の中だけの準備では対応しにくいです。実際に声に出す練習が必要です。",
    },
  ],
  relatedArticles: [
    { href: "/column/mensetu", title: "医学部面接対策の完全ガイド", label: "入試対策" },
    { href: "/column/mensetu-timing", title: "医学部面接対策はいつから始めるべきか", label: "受験戦略" },
    { href: "/column/shoronbun-timing", title: "医学部小論文対策はいつから始めるべきか", label: "入試対策" },
  ],
  concerns: [
    "MMIと通常面接の違いが曖昧なまま対策している",
    "時間制限のある面接で、考えを短くまとめるのが苦手",
    "医療倫理テーマへの答え方に自信がない",
  ],
  benefits: [
    "MMIにいつから着手すべきか、今の状況に合わせて判断できる",
    "頻出テーマごとの考え方の型を整理できる",
    "通常面接との準備の違いが明確になり、無駄が減る",
  ],
});

export const shiboriyushoWritingArticle: LongformColumnArticle = {
  slug: "shiboriyusho-writing",
  category: "入試対策",
  title: "医学部志望理由書の書き方",
  description:
    "医学部志望理由書の書き方を、構成、書くべき内容、避けたい表現、添削の使い方まで現役慶應医学部生が解説します。",
  heroSubtitle: "薄い志望動機で終わらせないための構成と具体化のコツ",
  keywords: [
    "医学部 志望理由書 書き方",
    "医学部 志望理由書 例",
    "医学部 志望動機",
    "医学部 出願書類",
  ],
  datePublished: publishDate,
  dateModified: publishDate,
  introParagraphs: [
    "医学部受験の志望理由書は、単なる提出書類ではありません。面接で深掘りされる土台にもなり、書類の時点で一貫性や本気度が見られています。",
    "よくある失敗は、「医師になりたいです」で止まることです。どの経験を通じてそう考えたのか、なぜその大学なのか、入学後に何を学びたいのかまでつながっていないと、説得力が弱くなります。",
    "この記事では、医学部志望理由書の基本構成、書くべき内容、避けたい表現、添削を入れるタイミングまで整理します。",
  ],
  keyPoints: [
    {
      title: "経験と志望動機をつなぐ",
      body: "体験談を並べるだけではなく、その経験がなぜ医師志望につながったのかを説明できることが重要です。",
    },
    {
      title: "大学ごとの理由を書く",
      body: "どの医学部にも当てはまる内容では弱く見えます。その大学を選ぶ理由を、教育方針や特色と結びつける必要があります。",
    },
    {
      title: "面接まで見据えて書く",
      body: "志望理由書は提出して終わりではありません。面接で深掘りされても一貫して話せる内容にしておくことが大切です。",
    },
  ],
  sections: [
    {
      title: "志望理由書の基本構成",
      intro: "構成が定まっていないと、内容が良くても伝わりにくくなります。",
      cards: [
        {
          title: "1. 医師を志す理由",
          body: "体験や価値観をもとに、なぜ医師を目指すのかを具体化します。抽象論だけでは弱くなります。",
        },
        {
          title: "2. その大学を志望する理由",
          body: "大学の教育方針、地域医療、研究環境など、志望先の特色と自分の関心を結びつけます。",
        },
        {
          title: "3. 入学後に何を学びたいか",
          body: "将来像が曖昧でも、学びたい分野や姿勢を言語化しておくと説得力が上がります。",
        },
      ],
      background: "white",
    },
    {
      title: "何を書けば説得力が出るのか",
      paragraphs: [
        "説得力が出るのは、派手な経験がある人ではなく、経験と考えのつながりを丁寧に説明できる人です。病気や医療との接点が少なくても、自分が何に関心を持ち、どう考えてきたかが見える文章なら十分戦えます。",
        "逆に、きれいな言葉だけを並べると、どこかで借り物の文章に見えてしまいます。志望理由書では、完成度よりも本人の思考が見えることの方が大切です。",
      ],
      bullets: [
        "体験そのものより、その体験から何を考えたかを書く",
        "志望動機と大学選びの理由をつなげる",
        "将来像は断定しすぎず、興味関心の方向性として表現する",
        "面接で聞かれたときに補足できる程度の具体性を持たせる",
      ],
      background: "sand",
    },
    {
      title: "避けたい表現",
      intro: "よくある定型表現は、悪くはなくても差がつきにくいです。",
      cards: [
        {
          title: "『人の役に立ちたい』だけで終わる",
          body: "医師志望としては自然な表現ですが、それだけでは浅く見えます。なぜその思いを持つようになったかまで必要です。",
        },
        {
          title: "大学名だけ変えれば通る文章",
          body: "どの大学にも使い回せる内容は、志望度が低く見えます。その大学固有の理由が必要です。",
        },
        {
          title: "盛りすぎた将来像",
          body: "無理に立派な目標を書こうとすると不自然になります。今の関心の方向性が一貫していれば十分です。",
        },
      ],
      background: "white",
    },
    {
      title: "添削はいつ入れるべきか",
      paragraphs: [
        "最初から完璧な文章を書こうとすると手が止まりやすくなります。まずはたたき台を作り、次に構成、論理、表現の順で直していく方が進みやすいです。",
        "添削は、書き始めの段階から入れると効果的です。書き終わった後で表現だけ直すより、論理の組み立て自体を早めに修正した方が、面接との一貫性も取りやすくなります。",
      ],
      bullets: [
        "最初の一稿は完成度より、材料を出し切ることを優先する",
        "二稿目で構成と論理の流れを整える",
        "三稿目以降で語尾や表現を調整する",
        "面接で深掘りされても崩れないかを最後に確認する",
      ],
      background: "sand",
    },
    {
      title: "志望理由書は面接対策でもある",
      paragraphs: [
        "志望理由書で書いたことは、面接で必ずと言ってよいほど確認されます。だからこそ、面接で説明できない内容は書かない方が安全です。",
        "逆に、志望理由書を丁寧に作ると、面接で話す軸も自然に整理されます。書類と面接を切り離さず、同じ材料を深めていく感覚が重要です。",
      ],
      background: "white",
    },
  ],
  consultation: {
    title: "志望理由書を、面接までつながる形で整えませんか？",
    description:
      "Medvanceの無料相談では、志望理由書を『書類だけ通ればよいもの』ではなく、面接まで一貫する受験材料として整理します。",
    points: [
      "自分の経験をどう志望動機につなげるか整理できる",
      "その大学を選ぶ理由をどう具体化するか分かる",
      "面接で深掘りされても崩れない軸を作れる",
    ],
    source: "column-shiboriyusho-writing-mid",
  },
  consultationAfterSection: 1,
  faqs: [
    {
      q: "医学部志望理由書に特別な医療体験は必要ですか？",
      a: "必須ではありません。大切なのは、限られた経験の中でも何を感じ、どう考えたかを具体化することです。派手な体験より、思考の一貫性が重要です。",
    },
    {
      q: "志望理由書はいつから書き始めるべきですか？",
      a: "高3夏頃までには材料出しを始めておくと安全です。秋以降は学科や過去問が重くなるため、書類準備を後回しにすると負担が集中しやすくなります。",
    },
    {
      q: "ネットの例文を参考にしてもいいですか？",
      a: "構成の参考にはなりますが、そのままの表現を使うと本人の言葉になりません。例文は型を見る程度にとどめ、自分の経験と言葉に落とし込むことが大切です。",
    },
    {
      q: "志望理由書と面接の内容は同じでよいですか？",
      a: "軸は同じで問題ありません。ただし、面接では書類に書いた内容をさらに深く説明できる必要があります。書類と面接は連動していると考えるべきです。",
    },
    {
      q: "志望理由書を相談すると、どこまで見てもらえますか？",
      a: "構成、論理、大学ごとの書き分け、面接との一貫性まで整理できます。自分では気づきにくい薄さやズレを明確にできるのが相談の価値です。",
    },
  ],
  relatedArticles: [
    { href: "/column/mensetu", title: "医学部面接対策の完全ガイド", label: "入試対策" },
    { href: "/column/shobun", title: "医学部小論文の書き方・完全対策ガイド", label: "入試対策" },
    { href: "/column/mmi-timing", title: "医学部MMI対策はいつから始めるべきか", label: "入試対策" },
  ],
  cta: {
    heading: "書類と面接を一貫した軸で整えたい方へ",
    subtext:
      "Medvanceは現役慶應医学部生による完全1対1の伴走型指導です。志望理由書だけでなく、面接でどう話すかまで一貫して整理します。",
    concerns: [
      "志望理由書を書こうとしても、内容が薄く感じて手が止まる",
      "どの大学にも使い回せそうな文章になってしまう",
      "面接で深掘りされたときにどう答えるか不安がある",
    ],
    benefits: [
      "志望動機と大学選びの理由を、一貫した形に整理できる",
      "書類と面接を別々ではなく、同じ軸で準備できる",
      "自分では気づきにくいズレや薄さを修正できる",
    ],
    source: "column-shiboriyusho-writing-bottom",
  },
};

export const privateKakomonYearsArticle = createYearsArticle({
  slug: "private-kakomon-years",
  title: "私立医学部の過去問は何年分やるべきか",
  description:
    "私立医学部の過去問は何年分やるべきか。第一志望・併願校ごとの目安、着手時期、復習の深さまで現役慶應医学部生が解説します。",
  heroSubtitle: "第一志望・併願校で変わる年数の目安と回し方",
  keywords: [
    "私立医学部 過去問 何年分",
    "私立医学部 赤本 何年分",
    "医学部 過去問 私立",
    "私立医学部 過去問 時期",
  ],
  target: "私立医学部",
  yearCards: [
    {
      title: "第一志望は5年分前後が目安",
      body: "直近の出題傾向を把握し、時間配分と答案の再現性まで確認するには、5年分前後を丁寧に回すのが基本です。",
    },
    {
      title: "併願校は3年分前後でも十分なことが多い",
      body: "出題形式が安定している大学なら、3年分程度でも傾向把握には十分です。年数より復習の深さを優先すべきです。",
    },
    {
      title: "特色が強い大学は追加で確認",
      body: "時間制限、英語の長さ、理科の難度など癖が強い大学は、直近に加えて数年さかのぼって確認する価値があります。",
    },
  ],
  startBullets: [
    "高3春〜夏に1年分だけ触れて、形式と不足分野を確認する",
    "秋から第一志望群の本格演習に入る",
    "併願校は出願校が固まった段階で3年分を目安に進める",
    "浪人・再受験では春に一度解いて、年間計画の基準にする",
  ],
  methodCards: [
    {
      title: "本番時間で解く",
      body: "私立医学部は時間配分の差が大きいので、必ず本番条件で解くことが重要です。",
    },
    {
      title: "失点理由を分類する",
      body: "知識不足なのか、時間不足なのか、形式慣れの不足なのかを分けて見ると、復習の質が上がります。",
    },
    {
      title: "再演習で再現性を確認する",
      body: "補強した後にもう一度解くか、近い年度で確認することで、伸びが本物かどうかを確かめられます。",
    },
  ],
  mistakeCards: [
    {
      title: "併願校まで5年分ずつ回そうとする",
      body: "時間が分散しすぎて、第一志望の復習が浅くなる危険があります。大学の位置づけで配分を変えるべきです。",
    },
    {
      title: "年数をこなして満足する",
      body: "私立医学部は大学ごとの差が大きいので、ただ解くだけでは伸びません。復習まで含めて意味があります。",
    },
    {
      title: "基礎補強を止める",
      body: "過去問で弱点が見えたら、単元に戻る必要があります。演習だけで押し切ろうとすると頭打ちになりやすいです。",
    },
  ],
  relatedArticles: [
    { href: "/column/kakomon-timing", title: "医学部受験の過去問はいつから始めるべきか", label: "受験戦略" },
    { href: "/column/private-top5", title: "私立医学部トップ5の特徴と対策", label: "大学選び" },
    { href: "/column/gakuhi", title: "医学部の学費・費用を徹底比較", label: "大学選び" },
  ],
  concerns: [
    "第一志望と併願校の過去問配分が決めきれない",
    "私立医学部ごとの差が大きく、どこまで寄せるべきか迷っている",
    "年度をこなしているのに、復習が浅い気がする",
  ],
  benefits: [
    "大学ごとに必要な年数の目安が分かる",
    "第一志望と併願校の優先順位を整理できる",
    "私立医学部に合った過去問の回し方が明確になる",
  ],
});

export const nationalKakomonYearsArticle = createYearsArticle({
  slug: "national-kakomon-years",
  title: "国公立医学部の過去問は何年分やるべきか",
  description:
    "国公立医学部の過去問は何年分やるべきか。共通テストとの両立、第一志望の年数目安、復習の回し方まで現役慶應医学部生が解説します。",
  heroSubtitle: "二次対策と共通テストの配分まで含めた年数設計",
  keywords: [
    "国公立医学部 過去問 何年分",
    "国公立医学部 赤本 何年分",
    "医学部 過去問 国公立",
    "国公立医学部 二次 過去問",
  ],
  target: "国公立医学部",
  yearCards: [
    {
      title: "第一志望は5年分前後が基本",
      body: "国公立でも第一志望は直近5年分前後を軸にして、記述の質と時間配分まで確認するのが基本です。",
    },
    {
      title: "共通テストとの配分を前提に考える",
      body: "国公立は二次だけに偏れないため、過去問の年数は共通テスト対策とのバランスで決める必要があります。",
    },
    {
      title: "大学ごとの形式差が大きい学部は厚めに",
      body: "数学や英語の記述量、理科の癖が強い大学は、やや厚めに年度を確認した方が安全です。",
    },
  ],
  startBullets: [
    "高3春〜夏に二次の形式を1年分だけ見て、必要な力を逆算する",
    "夏までは共通テストの土台と二次基礎を並行して進める",
    "秋から第一志望の二次過去問を本格的に回す",
    "共通テスト直前は二次の量を絞り、形式維持だけにする",
  ],
  methodCards: [
    {
      title: "共通テストと二次を分断しない",
      body: "国公立医学部では、二次の過去問を解くことで基礎の穴が見え、共通テスト対策にも返ってきます。切り離しすぎないことが大切です。",
    },
    {
      title: "答案の質を確認する",
      body: "国公立は記述の質で差がつきやすいので、自己採点だけで済ませず、答案の論理や表現も見直す必要があります。",
    },
    {
      title: "冬は量より維持を優先する",
      body: "共通テスト前に二次を重く回しすぎるとバランスが崩れます。冬は形式維持と弱点確認に絞るのが安全です。",
    },
  ],
  mistakeCards: [
    {
      title: "共通テストがあるから二次は後回しにする",
      body: "二次の形式を知らないまま夏を終えると、必要な力の方向がずれやすくなります。軽くでも早めに触れる価値があります。",
    },
    {
      title: "記述答案を見直さない",
      body: "正誤だけでは国公立の本当の差は見えません。どこまで書けば点になるかを意識して復習する必要があります。",
    },
    {
      title: "冬まで年数だけを増やす",
      body: "共通テストとの両立があるため、国公立では量を増やしすぎると逆効果になることもあります。必要な年数に絞って丁寧に回す方が安全です。",
    },
  ],
  relatedArticles: [
    { href: "/column/kakomon-timing", title: "医学部受験の過去問はいつから始めるべきか", label: "受験戦略" },
    { href: "/column/shigaku-vs-kokuritsu", title: "私立医学部と国公立医学部、どちらを目指すべきか", label: "大学選び" },
    { href: "/column/roadmap", title: "医学部受験ロードマップ", label: "受験戦略" },
  ],
  concerns: [
    "共通テストと二次の配分で迷っている",
    "国公立の過去問をどのくらい重く回すべきか決めきれない",
    "記述の復習方法が自己流で不安",
  ],
  benefits: [
    "共通テストと二次を両立した年数設計ができる",
    "第一志望にどれだけ寄せるべきか判断できる",
    "国公立特有の復習ポイントが明確になる",
  ],
});

export const englishStudyMethodArticle = createSubjectArticle({
  slug: "english-study-method",
  title: "医学部英語の勉強法",
  description:
    "医学部英語の勉強法を、単語・文法・長文・英作文の優先順位、志望校別の対策、伸びないときの見直し方まで現役慶應医学部生が解説します。",
  heroSubtitle: "単語、長文、英作文をどう積み上げるかが分かる",
  subject: "英語",
  keywords: [
    "医学部 英語 勉強法",
    "医学部 英語 対策",
    "医学部 英語 長文",
    "医学部 英作文",
  ],
  focusCards: [
    { title: "語彙と文法を土台にする", body: "医学部英語は長文が難しくても、土台が弱いと読解以前で止まります。語彙と文法の精度は最優先です。" },
    { title: "長文は速さより処理の質", body: "医学部英語は長文量が多い大学もありますが、ただ速く読むだけでは足りません。設問処理まで含めた精度が重要です。" },
    { title: "英作文は後回しにしすぎない", body: "記述や英作文がある大学では、直前だけでは伸びにくいです。短いアウトプットを早めに始めると安定します。" },
  ],
  studyOrderBullets: [
    "単語と文法を毎日固定で回し、土台を崩さない",
    "標準長文で段落ごとの論理を追う練習をする",
    "設問ごとに根拠の取り方を明確にする",
    "記述・英作文がある大学は短文英作文から早めに始める",
    "秋以降は志望校の長文量と設問形式に寄せる",
  ],
  progressBullets: [
    "毎週1回は制限時間つきの長文演習を入れる",
    "語彙・文法の復習を短時間でも毎日切らさない",
    "英作文や要約は添削前提で進める",
    "過去問復習では『なぜその選択肢を切るか』まで言語化する",
  ],
  mistakeCards: [
    { title: "単語帳だけで安心する", body: "覚えた語彙を文脈の中で処理できないと、医学部英語では得点につながりません。" },
    { title: "長文を読むだけで終える", body: "設問の根拠、読み違えた原因、時間配分まで見直さないと、点数は安定しません。" },
    { title: "英作文を直前まで放置する", body: "書く力は短期で安定しにくい分野です。志望校に英作文があるなら早めに着手すべきです。" },
  ],
  relatedArticles: [
    { href: "/column/study-method", title: "医学部合格のための正しい勉強法", label: "勉強法" },
    { href: "/column/kakomon-timing", title: "医学部受験の過去問はいつから始めるべきか", label: "受験戦略" },
    { href: "/subjects/english", title: "医学部受験の英語対策ページ", label: "科目別対策" },
    { href: "/academy/subject/english-exam", title: "高校英語の動画・PDF教材", label: "動画・PDF教材" },
  ],
  concerns: [
    "単語や文法はやっているのに、長文になると点が安定しない",
    "英作文をどのタイミングで始めるべきか迷っている",
    "志望校に合わせて何を優先すべきか決めきれない",
  ],
  benefits: [
    "英語の勉強順と優先順位を整理できる",
    "長文、記述、英作文のどこが弱いか切り分けられる",
    "志望校別にどの形式へ寄せるべきか明確になる",
  ],
});

export const mathStudyMethodArticle = createSubjectArticle({
  slug: "math-study-method",
  title: "医学部数学の勉強法",
  description: "医学部数学の勉強法を、基礎固め、典型問題、記述力、志望校別対策まで現役慶應医学部生が解説します。",
  heroSubtitle: "典型処理、記述の質、時間配分の整え方が分かる",
  subject: "数学",
  keywords: ["医学部 数学 勉強法", "医学部 数学 対策", "医学部 数学 記述", "医学部 数学 参考書"],
  focusCards: [
    { title: "典型問題の再現力", body: "医学部数学は難問より、標準〜やや難レベルを確実に取り切る再現力が重要です。" },
    { title: "記述の筋道", body: "答えだけではなく、どの方針でどこまで書くかが問われます。記述の質が差になります。" },
    { title: "時間配分の判断", body: "医学部数学は完答主義で考えると崩れやすいです。部分点を取りながら進める判断力が必要です。" },
  ],
  studyOrderBullets: [
    "教科書レベルと基礎例題で定義・公式の使い方を固める",
    "典型分野ごとに標準問題で解法の型を増やす",
    "途中式と方針を言語化しながら答案を書く",
    "数IIIを含む志望校は微積と複素数平面を早めに安定させる",
    "秋以降は大学別の時間配分と部分点の取り方に寄せる",
  ],
  progressBullets: [
    "週に1回は時間を測って記述答案を作る",
    "間違えた問題は『解けなかった理由』を分類して残す",
    "解法暗記ではなく、なぜその方針を選ぶかを確認する",
    "過去問は答案の質と時間配分をセットで見直す",
  ],
  mistakeCards: [
    { title: "難問ばかり追う", body: "医学部数学では、典型を確実に取る力の方が点数に直結します。難問偏重は非効率になりやすいです。" },
    { title: "答えが合えば良しとする", body: "記述では途中の論理が甘いと失点します。過程まで含めて再現できるかが大切です。" },
    { title: "1問に固執しすぎる", body: "時間配分を崩すと全体点が落ちます。見切る判断まで含めて数学力です。" },
  ],
  relatedArticles: [
    { href: "/column/study-method", title: "医学部合格のための正しい勉強法", label: "勉強法" },
    { href: "/column/kakomon-timing", title: "医学部受験の過去問はいつから始めるべきか", label: "受験戦略" },
    { href: "/subjects/math", title: "医学部受験の数学対策ページ", label: "科目別対策" },
    { href: "/academy/subject/math1-exam", title: "高校数学Iの動画・PDF教材", label: "動画・PDF教材" },
  ],
  concerns: [
    "基礎問題は解けるのに、医学部数学になると止まってしまう",
    "記述答案のどこで点を落としているか分からない",
    "難問と標準問題のバランスが決められない",
  ],
  benefits: [
    "数学で今優先すべき分野とレベルが明確になる",
    "記述力と時間配分の見直しポイントが分かる",
    "志望校別にどの分野へ寄せるべきか整理できる",
  ],
});

export const chemistryStudyMethodArticle = createSubjectArticle({
  slug: "chemistry-study-method",
  title: "医学部化学の勉強法",
  description: "医学部化学の勉強法を、理論・無機・有機の優先順位、計算問題の進め方、志望校別対策まで現役慶應医学部生が解説します。",
  heroSubtitle: "理論、無機、有機をどう積み上げるかが分かる",
  subject: "化学",
  keywords: ["医学部 化学 勉強法", "医学部 化学 対策", "医学部 化学 理論", "医学部 化学 有機"],
  focusCards: [
    { title: "理論化学の理解", body: "医学部化学は理論の理解が曖昧だと、計算も記述も不安定になります。最優先で整えるべき土台です。" },
    { title: "無機・有機の整理", body: "暗記量は多いですが、表や反応系統で整理すれば再現しやすくなります。丸暗記だけでは崩れやすいです。" },
    { title: "計算と記述の接続", body: "計算だけ、知識だけでは不十分です。条件整理から立式まで一貫して考える力が必要です。" },
  ],
  studyOrderBullets: [
    "理論化学の基本法則と頻出計算を最優先で固める",
    "無機は性質を分類しながら整理する",
    "有機は反応の流れをストーリーで覚える",
    "計算問題は途中式まで含めて再現できるようにする",
    "秋以降は志望校の理論比重や記述量に寄せる",
  ],
  progressBullets: [
    "理論、無機、有機を毎週偏らず回す",
    "計算問題は答えだけでなく立式の理由まで確認する",
    "無機・有機は表にまとめて定期的に見返す",
    "過去問復習では『知識不足』と『処理不足』を分けて記録する",
  ],
  mistakeCards: [
    { title: "無機・有機を後回しにしすぎる", body: "理論ばかり進めて暗記事項を溜めると、秋以降の負担が一気に重くなります。" },
    { title: "計算問題をパターン暗記だけで処理する", body: "問題条件が少し変わると崩れやすくなります。原理理解がないと応用が利きません。" },
    { title: "知識の抜けを放置する", body: "医学部化学では小さな抜けが大きな失点になります。暗記事項の定期確認が不可欠です。" },
  ],
  relatedArticles: [
    { href: "/column/study-method", title: "医学部合格のための正しい勉強法", label: "勉強法" },
    { href: "/column/kakomon-timing", title: "医学部受験の過去問はいつから始めるべきか", label: "受験戦略" },
    { href: "/subjects/chemistry", title: "医学部受験の化学対策ページ", label: "科目別対策" },
    { href: "/academy/subject/chemistry-exam", title: "高校化学の動画・PDF教材", label: "動画・PDF教材" },
  ],
  concerns: [
    "理論化学の計算で止まり、有機や無機まで手が回らない",
    "暗記事項が抜けやすく、模試で不安定になりやすい",
    "化学をどの順番で仕上げればよいか曖昧",
  ],
  benefits: [
    "理論・無機・有機の優先順位を整理できる",
    "化学で失点しやすい原因を分解できる",
    "志望校に合わせた化学の寄せ方が分かる",
  ],
});

export const physicsStudyMethodArticle = createSubjectArticle({
  slug: "physics-study-method",
  title: "医学部物理の勉強法",
  description: "医学部物理の勉強法を、典型現象の理解、立式、時間配分、志望校別対策まで現役慶應医学部生が解説します。",
  heroSubtitle: "立式と現象理解を軸に物理を伸ばす方法が分かる",
  subject: "物理",
  keywords: ["医学部 物理 勉強法", "医学部 物理 対策", "医学部 物理 立式", "医学部 物理 参考書"],
  focusCards: [
    { title: "典型現象の理解", body: "物理は公式暗記だけでは伸びません。どの現象で何が起きているかを理解することが出発点です。" },
    { title: "立式の一貫性", body: "医学部物理は立式で差がつきます。条件整理から式の意味まで説明できることが重要です。" },
    { title: "図とグラフの処理", body: "波動、電磁気、力学では、図やグラフを使って状況を整理できるかが得点に直結します。" },
  ],
  studyOrderBullets: [
    "力学と電磁気の典型現象を図で理解する",
    "公式を覚える前に、使う条件と意味を確認する",
    "立式の理由を言葉で説明できるようにする",
    "標準問題で処理手順を固定する",
    "秋以降は志望校の頻出分野と記述量に寄せる",
  ],
  progressBullets: [
    "解説を読んだ後に、白紙から図と式を再現する",
    "波動や電磁気はグラフを書いて整理する習慣を持つ",
    "計算ミスと立式ミスを別で記録する",
    "過去問では時間不足か理解不足かを分けて振り返る",
  ],
  mistakeCards: [
    { title: "公式暗記で押し切ろうとする", body: "条件が少し変わるだけで対応できなくなります。現象理解がないと医学部物理では頭打ちになります。" },
    { title: "図を書かずに解く", body: "状況整理が曖昧なまま進めると、立式のズレに気づけません。図は省略しない方が安全です。" },
    { title: "力学ばかりで他分野を放置する", body: "得意分野に偏ると、波動や電磁気が秋以降に重く残ります。全分野を定期的に触れる必要があります。" },
  ],
  relatedArticles: [
    { href: "/column/study-method", title: "医学部合格のための正しい勉強法", label: "勉強法" },
    { href: "/column/kakomon-timing", title: "医学部受験の過去問はいつから始めるべきか", label: "受験戦略" },
    { href: "/subjects/physics", title: "医学部受験の物理対策ページ", label: "科目別対策" },
    { href: "/academy/subject/physics-exam", title: "高校物理の動画・PDF教材", label: "動画・PDF教材" },
  ],
  concerns: [
    "公式は覚えているのに、初見問題で立式が止まる",
    "物理を感覚で解いていて、答案が安定しない",
    "波動や電磁気が後回しになっている",
  ],
  benefits: [
    "物理をどういう順番で理解すべきか整理できる",
    "立式と時間配分のズレを見直せる",
    "志望校で頻出の分野にどう寄せるか分かる",
  ],
});

export const biologyStudyMethodArticle = createSubjectArticle({
  slug: "biology-study-method",
  title: "医学部生物の勉強法",
  description: "医学部生物の勉強法を、知識の整理、記述対策、資料読解、志望校別対策まで現役慶應医学部生が解説します。",
  heroSubtitle: "知識量と記述力をどう両立するかが分かる",
  subject: "生物",
  keywords: ["医学部 生物 勉強法", "医学部 生物 記述", "医学部 生物 対策", "医学部 生物 資料問題"],
  focusCards: [
    { title: "知識の正確さ", body: "医学部生物は用語暗記だけでなく、定義の正確さと概念のつながりが重要です。" },
    { title: "記述で説明できる力", body: "知っている内容を短く論理的に書けるかで差がつきます。特に難関校では記述の質が重要です。" },
    { title: "資料読解への対応", body: "グラフや実験考察は知識だけでは解けません。資料から何を読み取るかの訓練が必要です。" },
  ],
  studyOrderBullets: [
    "教科書レベルの概念と用語を整理する",
    "単元ごとの因果関係を図や表でまとめる",
    "短い記述問題で説明の型を作る",
    "実験・考察問題で資料読解に慣れる",
    "秋以降は志望校の記述量とテーマに合わせて調整する",
  ],
  progressBullets: [
    "知識暗記と記述練習を別日に分けず、同じ週で回す",
    "間違えた用語は定義まで言えるか確認する",
    "資料問題では『どこを根拠にしたか』を必ず言語化する",
    "過去問では、記述の採点基準を意識して見直す",
  ],
  mistakeCards: [
    { title: "用語暗記だけで終える", body: "用語を知っていても、説明できなければ記述では点になりません。定義と因果関係まで押さえる必要があります。" },
    { title: "資料問題を勘で解く", body: "資料のどこを根拠にしたかが曖昧だと、初見問題で崩れやすくなります。" },
    { title: "記述練習を後回しにする", body: "知識が入ってから書こうとすると、最後まで書く練習が不足しがちです。短い記述から早めに始める方が安定します。" },
  ],
  relatedArticles: [
    { href: "/column/study-method", title: "医学部合格のための正しい勉強法", label: "勉強法" },
    { href: "/column/kakomon-timing", title: "医学部受験の過去問はいつから始めるべきか", label: "受験戦略" },
    { href: "/subjects/biology", title: "医学部受験の生物対策ページ", label: "科目別対策" },
    { href: "/academy/subject/biology-exam", title: "高校生物の動画・PDF教材", label: "動画・PDF教材" },
  ],
  concerns: [
    "知識は覚えているのに、記述問題で点が安定しない",
    "資料読解で何を根拠にすべきか迷いやすい",
    "生物の暗記と記述をどう両立するか分からない",
  ],
  benefits: [
    "生物の知識整理と記述練習の順番が分かる",
    "資料読解での失点原因を分解できる",
    "志望校ごとの記述量に合わせた対策ができる",
  ],
});

export const longformColumnArticleMetadata = {
  shoronbunTimingArticle: buildArticleMetadata(shoronbunTimingArticle),
  mmiTimingArticle: buildArticleMetadata(mmiTimingArticle),
  shiboriyushoWritingArticle: buildArticleMetadata(shiboriyushoWritingArticle),
  privateKakomonYearsArticle: buildArticleMetadata(privateKakomonYearsArticle),
  nationalKakomonYearsArticle: buildArticleMetadata(nationalKakomonYearsArticle),
  englishStudyMethodArticle: buildArticleMetadata(englishStudyMethodArticle),
  mathStudyMethodArticle: buildArticleMetadata(mathStudyMethodArticle),
  chemistryStudyMethodArticle: buildArticleMetadata(chemistryStudyMethodArticle),
  physicsStudyMethodArticle: buildArticleMetadata(physicsStudyMethodArticle),
  biologyStudyMethodArticle: buildArticleMetadata(biologyStudyMethodArticle),
};
