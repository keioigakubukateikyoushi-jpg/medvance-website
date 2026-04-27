import { buildServiceSchema, buildBreadcrumbSchema, buildFaqSchema, siteUrl } from "@/lib/seo";

type FaqItem = { q: string; a: string };

type AudienceSpec = {
  educationalRole: string;
  description: string;
  /** 学齢の最小値・最大値 (years old) — 任意 */
  suggestedMinAge?: number;
  suggestedMaxAge?: number;
};

const audienceBySlug: Record<string, AudienceSpec> = {
  chugaku: { educationalRole: "middle school student", description: "中学生（医学部受験を視野に入れている）", suggestedMinAge: 12, suggestedMaxAge: 15 },
  ko1: { educationalRole: "high school student (year 1)", description: "高校1年生", suggestedMinAge: 15, suggestedMaxAge: 16 },
  ko2: { educationalRole: "high school student (year 2)", description: "高校2年生", suggestedMinAge: 16, suggestedMaxAge: 17 },
  ko3: { educationalRole: "high school student (year 3)", description: "高校3年生（現役医学部受験生）", suggestedMinAge: 17, suggestedMaxAge: 19 },
  ronin: { educationalRole: "post-secondary student (gap-year applicant)", description: "浪人生（医学部受験経験者）", suggestedMinAge: 18, suggestedMaxAge: 25 },
  saijuken: { educationalRole: "adult re-applicant", description: "大学生・社会人の医学部再受験者", suggestedMinAge: 19 },
  parents: { educationalRole: "parent of high school student", description: "受験生の保護者" },
  "keio-naibu": { educationalRole: "Keio affiliated school student", description: "慶應義塾内部進学希望者", suggestedMinAge: 15, suggestedMaxAge: 18 },
  "keio-fuzoku": { educationalRole: "Keio affiliated school student", description: "慶應附属校生（中等部・普通部・高校・SFC含む）", suggestedMinAge: 12, suggestedMaxAge: 18 },
  "seiseki-up": { educationalRole: "high school student (grade improvement)", description: "学校成績の向上を目指す高校生", suggestedMinAge: 15, suggestedMaxAge: 18 },
  nangandai: { educationalRole: "competitive university applicant", description: "東大・京大・早慶などの難関大学志望者", suggestedMinAge: 16, suggestedMaxAge: 19 },
  "suisen-ao": { educationalRole: "recommendation / AO applicant", description: "総合型選抜・推薦入試出願予定者", suggestedMinAge: 16, suggestedMaxAge: 19 },
};

export const forPageMeta: Record<
  string,
  { name: string; description: string; serviceType: string; label: string; faq?: FaqItem[] }
> = {
  chugaku: {
    name: "中学生向け医学部受験個別指導",
    description: "中学生から始める医学部受験対策。現役慶應医学部生が完全1対1でサポート。",
    serviceType: "医学部受験個別指導",
    label: "中学生の方へ",
    faq: [
      { q: "中学生から医学部受験の準備を始めるメリットは何ですか？", a: "最大のメリットは「基礎を丁寧に固める時間がある」ことです。数学・英語の基礎が中学段階で盤石であれば、高校での学習がスムーズになります。焦りなく本質的な学力を積み上げられるため、現役合格の可能性が大幅に高まります。" },
      { q: "中学生のうちにやるべきことは何ですか？", a: "英語・数学の基礎固めが最優先です。英単語・文法・数学の計算力と論理思考を中学段階で完成させると、高校の内容に余裕を持って取り組めます。医師を志望する明確な動機づくりも、長期の受験を乗り越えるために重要です。" },
      { q: "中学生が家庭教師をつける場合の頻度はどのくらいが良いですか？", a: "週1〜2回が一般的です。学校の授業の予習・復習サポートと並行して、高校数学・英語の先取りを少しずつ進めるペースが効果的です。" },
    ],
  },
  ko1: {
    name: "高校1年生向け医学部受験個別指導",
    description: "高1から始める医学部受験の早期対策。現役慶應医学部生が完全1対1で指導。",
    serviceType: "医学部受験個別指導",
    label: "高校1年生の方へ",
    faq: [
      { q: "高1から医学部受験の準備を始めるのは早すぎますか？", a: "早すぎることはありません。医学部は科目数が多く、高1からの積み上げが現役合格率を大きく左右します。特に数学・英語は高1の段階から基礎を固めると、高3での仕上げに余裕が生まれます。" },
      { q: "高1のうちに特に力を入れるべき科目はどれですか？", a: "数学と英語を最優先してください。医学部受験で最も差がつく科目がこの2つです。理科（化学・物理・生物）は高2以降でも間に合いますが、数英の土台がないと後の巻き返しが難しくなります。" },
      { q: "部活と受験勉強は両立できますか？", a: "できます。高1〜高2は部活動に打ち込みながら週1〜2回の指導で基礎を積み上げ、高3の部活引退後に本格的に受験モードに切り替えるプランが一般的です。" },
    ],
  },
  ko2: {
    name: "高校2年生向け医学部受験個別指導",
    description: "高2からの医学部受験対策。部活との両立・高3準備を現役慶應医学部生がサポート。",
    serviceType: "医学部受験個別指導",
    label: "高校2年生の方へ",
    faq: [
      { q: "高2から始めても医学部に現役合格できますか？", a: "十分可能です。高2の段階で戦略的に動けば、現役合格の可能性は十分あります。まず英数の基礎を固め、理科を並行して積み上げ、高3で演習・過去問に集中するプランが標準的です。" },
      { q: "高2で優先すべき科目・範囲はどこですか？", a: "数学ⅡBの完成と英語の長文読解力の向上が最優先です。理科は化学の理論分野を高2のうちに固めておくと高3が楽になります。文系科目は高3で短期集中でも対応できます。" },
      { q: "高2から医学部専門の家庭教師をつけるメリットは何ですか？", a: "「何を・いつ・どの順番で」学べばいいかを設計できることです。医学部受験の全体スケジュールを把握した指導者が伴走することで、高3での追い込みを効率化できます。" },
    ],
  },
  ko3: {
    name: "高校3年生向け医学部受験個別指導",
    description: "現役合格を目指す高3向け医学部受験対策。現役慶應医学部生が完全1対1で指導。",
    serviceType: "医学部受験個別指導",
    label: "高校3年生の方へ",
    faq: [
      { q: "高3から医学部受験の対策を始めても間に合いますか？", a: "基礎力の状況によりますが、高3の春から正しい戦略で取り組めば現役合格は十分可能です。重要なのは残り期間を最大化する学習設計です。まず現状分析を行い、弱点から優先的に取り組む計画を立てることが大切です。" },
      { q: "現役生と浪人生では指導内容が違いますか？", a: "異なります。現役生は学校の授業と並行するため、授業との連携・テスト対策も含めた設計が必要です。浪人生は受験に専念できる分、演習量と弱点補強のバランスを重視した指導になります。" },
      { q: "高3の夏休みはどのように過ごすべきですか？", a: "夏休みは受験の天王山です。基礎が固まっている科目は応用・演習に移行し、苦手科目の底上げに集中します。1日8〜10時間の学習を維持しながら、過去問を意識した演習を進めることが理想です。" },
    ],
  },
  ronin: {
    name: "浪人生向け医学部受験個別指導",
    description: "浪人生専門の医学部受験対策。現役慶應医学部生が完全1対1で指導・戦略設計。",
    serviceType: "医学部受験個別指導",
    label: "浪人生の方へ",
    faq: [
      { q: "浪人して医学部に合格できる可能性はありますか？", a: "十分あります。浪人生は学習時間が確保しやすく、正しい戦略で取り組めば偏差値を大幅に伸ばせます。Medvanceでは浪人経験のある慶應医学部生が、自身の経験を踏まえたリアルな指導を行います。" },
      { q: "医学部浪人と大学予備校の違いは何ですか？", a: "予備校は集団授業が中心で、自分のペースに合わせた指導が難しいことがあります。Medvanceは完全1対1なので、現在の弱点・志望校・残り期間に特化した個別戦略を立てられます。" },
      { q: "浪人生はいつから指導をスタートするのが良いですか？", a: "受験が終わったらすぐ（3〜4月）のスタートが理想です。早期に現状分析と年間計画を立て、4〜6月の基礎固め期に最大限の効果を発揮できます。" },
    ],
  },
  saijuken: {
    name: "再受験生向け医学部受験個別指導",
    description: "社会人・大学生からの医学部再受験を現役慶應医学部生が完全1対1でサポート。",
    serviceType: "医学部受験個別指導",
    label: "再受験生の方へ",
    faq: [
      { q: "社会人・大学生から医学部に再受験することはできますか？", a: "可能です。ただし年齢制限を設けている私立医学部も存在するため、受験校選びが重要になります。Medvanceでは再受験に寛容な大学の選定から、学習戦略の設計まで一貫してサポートします。" },
      { q: "働きながら医学部再受験の勉強はできますか？", a: "週の指導時間と自習時間の確保が鍵です。週1〜2回の指導でも、効率的な学習計画があれば着実に力をつけられます。無理のないスケジュールを一緒に設計します。" },
      { q: "再受験生が特に注意すべき点は何ですか？", a: "年齢に対して不寛容な大学へは出願しないことと、学力のブランクを早期に補うことが重要です。特に理科（物理・化学・生物）は内容を忘れている場合があるため、基礎からの見直しを優先します。" },
    ],
  },
  parents: {
    name: "保護者向け医学部受験サポート情報",
    description: "お子様の医学部合格を支える保護者の方へ。費用・サポート体制・進捗報告について詳しく説明します。",
    serviceType: "医学部受験個別指導",
    label: "保護者の方へ",
    faq: [
      { q: "指導の進捗はどのように報告されますか？", a: "指導後に担当講師からレポートを送付します。学習内容・課題・次回の方針を毎回お伝えし、必要に応じて保護者面談も実施します。お子様の状況をリアルタイムで把握できる体制を整えています。" },
      { q: "費用はどのくらいかかりますか？", a: "指導頻度・科目・期間によって異なります。無料相談でお子様の状況をお伺いしたうえで、最適なプランと費用をご提案します。まずはお気軽にご相談ください。" },
      { q: "講師との相性が合わない場合、変更できますか？", a: "はい、変更可能です。担当講師とのマッチングには慎重を期していますが、指導開始後に相性の問題が生じた場合は速やかに対応します。" },
    ],
  },
  "keio-naibu": {
    name: "慶應義塾内部進学（評定向上・成績対策）個別指導",
    description: "慶應義塾附属校から医学部・難関学部への内部進学を目指す方の成績向上・評定対策。",
    serviceType: "慶應内部進学対策",
    label: "慶應内部進学を目指す方へ",
    faq: [
      { q: "慶應義塾医学部への内部進学に必要な評定はどのくらいですか？", a: "医学部は慶應内部でも最難関で、評定平均4.5〜5.0程度が求められる傾向があります。ただし評定だけでなく、試験・面接・課外活動も総合的に評価されます。早い段階から高い評定を維持することが重要です。" },
      { q: "慶應内部進学と一般受験の両立は可能ですか？", a: "可能ですが、内部推薦を活用しつつ一般受験も視野に入れる場合は早期の計画立案が必要です。MedvanceではAO・内部推薦対策と並行した指導プランも提供しています。" },
      { q: "慶應内部進学の対策はいつから始めるべきですか？", a: "遅くとも高1から評定管理を意識することをお勧めします。特に高1・高2の評定が累積されるため、早期のスタートが有利に働きます。" },
    ],
  },
  "keio-fuzoku": {
    name: "慶應附属校生向け成績向上・定期テスト対策",
    description: "慶應附属校（義塾高校・女子高・志木・SFC・普通部・中等部）の定期テスト対策・評定向上。",
    serviceType: "定期テスト対策・成績向上",
    label: "慶應附属校生の方へ",
    faq: [
      { q: "慶應附属校の定期テスト対策はどうすれば良いですか？", a: "授業プリント・過去問を中心に、試験3〜4週間前から計画的に取り組むことが基本です。慶應附属校は学校・学年によって出題傾向が異なるため、傾向を把握した上で重点的に対策することが重要です。" },
      { q: "慶應附属校生の家庭教師はどこに頼めばいいですか？", a: "慶應の試験傾向を把握した指導者に依頼することが最も効果的です。Medvanceでは現役慶應医学部生が担当するため、附属校の試験内容・難易度感を熟知した実践的な指導が受けられます。" },
      { q: "慶應附属校から大学に内部進学する際の注意点は何ですか？", a: "希望する学部によって必要な評定のハードルが大きく異なります。医学部・薬学部は特に競争率が高いため早めの対策が必要です。また、成績だけでなく出欠・課外活動も選考に影響する場合があります。" },
    ],
  },
  "seiseki-up": {
    name: "学校の成績向上・定期テスト対策個別指導",
    description: "定期テスト対策・内申点向上・推薦入試準備を現役慶應医学部生が完全1対1でサポート。",
    serviceType: "定期テスト対策・成績向上",
    label: "学校の成績を上げたい方へ",
    faq: [
      { q: "学校の成績を短期間で上げることはできますか？", a: "定期テストは範囲が限定されているため、正しいアプローチで3〜4週間集中すれば1回のテストで大幅な点数アップが可能です。まず苦手科目を特定し、優先度をつけて取り組むことが重要です。" },
      { q: "内申点を上げるために何が効果的ですか？", a: "①定期テストの点数向上②提出物の期限厳守③授業態度——の3つが内申に直結します。特に定期テストが最も配点が高いため、テスト対策への集中投資が内申点向上の近道です。" },
      { q: "推薦入試に向けて成績対策はいつから始めるべきですか？", a: "推薦・総合型選抜を目指す場合、高1の段階から内申を意識した学習が理想です。評定は高校3年間の累積で決まるため、早い段階から戦略的に取り組むことが有利に働きます。" },
    ],
  },
  nangandai: {
    name: "難関大受験（東大・京大・早慶）個別指導",
    description: "東大・京大・早慶・難関国公立を目指す受験生向け完全1対1家庭教師。現役慶應医学部生が指導。",
    serviceType: "難関大受験個別指導",
    label: "難関大受験を目指す方へ",
    faq: [
      { q: "東大・早慶など難関大受験に家庭教師は必要ですか？", a: "必須ではありませんが、弱点補強と志望校特化の対策に非常に効果的です。難関大は出題の癖が強く、傾向に合わせた対策が得点を大きく左右します。特に小論文・英語の記述・数学の記述式を個別添削してもらうことが有効です。" },
      { q: "難関大受験向けの家庭教師はどの科目を頼めますか？", a: "数学・英語・理科（物理・化学）を中心に対応しています。Medvanceでは現役慶應医学部生が担当するため、難関大の出題レベルに対応した本質的な指導が受けられます。" },
      { q: "難関大受験の家庭教師の料金はいくらですか？", a: "指導頻度や対象科目によって異なります。詳細は無料相談時にご案内しますので、まずはお気軽にご相談ください。" },
    ],
  },
  "suisen-ao": {
    name: "推薦・AO入試対策（志望理由書・面接・小論文）",
    description: "推薦・総合型選抜（AO）入試の志望理由書・面接・小論文対策。現役慶應医学部生が完全1対1で指導。",
    serviceType: "推薦・AO入試対策",
    label: "推薦・AO入試を目指す方へ",
    faq: [
      { q: "推薦・AO入試対策はいつから始めれば良いですか？", a: "高3の4〜5月には準備を開始することをおすすめします。出願書類（志望理由書・活動報告書）の作成に1〜2ヶ月、面接・小論文練習にさらに1〜2ヶ月必要です。夏休み明けの出願に間に合うよう逆算して準備しましょう。" },
      { q: "志望理由書はどうやって書けばいいですか？", a: "①なぜその大学・学部か（具体的な理由）②自分の経験・強みとの結びつき③入学後のビジョン——の3軸が基本構成です。「医師になりたい」だけでなく、自分独自のエピソードと志望校への具体的な関心を盛り込むことが重要です。" },
      { q: "推薦・AO入試で落ちた場合の一般入試との両立はできますか？", a: "できます。推薦・AOは出願時期が早いため、一般入試の勉強と並行して準備することが可能です。MedvanceではAO対策と一般入試対策を同時並行でサポートするプランも提供しています。" },
    ],
  },
};

export function buildForPageSchemas(slug: string): object[] {
  const meta = forPageMeta[slug];
  if (!meta) return [];
  const path = `/for/${slug}`;

  const baseService = buildServiceSchema(meta.name, meta.description, path, meta.serviceType);
  const aud = audienceBySlug[slug];
  const serviceWithAudience = aud
    ? {
        ...baseService,
        audience: {
          "@type": "EducationalAudience",
          educationalRole: aud.educationalRole,
          description: aud.description,
          ...(aud.suggestedMinAge !== undefined ? { suggestedMinAge: aud.suggestedMinAge } : {}),
          ...(aud.suggestedMaxAge !== undefined ? { suggestedMaxAge: aud.suggestedMaxAge } : {}),
        },
      }
    : baseService;

  const schemas: object[] = [
    serviceWithAudience,
    buildBreadcrumbSchema([
      { name: "ホーム", url: "/" },
      { name: meta.label, url: path },
    ]),
  ];
  if (meta.faq && meta.faq.length > 0) {
    schemas.push(buildFaqSchema(meta.faq));
  }
  return schemas;
}
