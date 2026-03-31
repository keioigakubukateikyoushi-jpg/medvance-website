export type NationalUniversityEntry = {
  slug: string;
  name: string;
  region: string;
  area: string;
  category: "旧帝大" | "都市型総合大学" | "地方国立" | "単科医科大学" | "防衛医科大学校";
  summary: string;
  campus: string;
  fit: string;
  keywords: string[];
};

export const nationalUniversityArticles: NationalUniversityEntry[] = [
  { slug: "hokkaido", name: "北海道大学医学部", region: "北海道", area: "札幌", category: "旧帝大", summary: "旧帝大らしい総合力勝負で、英数理の高い完成度と落ち着いた面接対応が求められる大学です。", campus: "札幌キャンパス", fit: "記述型の総合力をじっくり積み上げたい受験生向け", keywords: ["北海道大学", "北大", "札幌"] },
  { slug: "asahikawa-medical", name: "旭川医科大学", region: "北海道", area: "旭川", category: "単科医科大学", summary: "単科医科大学らしく医学志向の明確さと基礎学力の安定感が問われる大学です。", campus: "旭川医科大学キャンパス", fit: "地域医療志向を持ち、堅実に得点を積みたい受験生向け", keywords: ["旭川医科大学", "旭川医大"] },
  { slug: "hirosaki", name: "弘前大学医学部", region: "東北", area: "青森", category: "地方国立", summary: "地方国立の中でも基礎学力と地域医療への理解をバランスよく示したい大学です。", campus: "弘前キャンパス", fit: "共通テストと二次の両立を丁寧に進めたい受験生向け", keywords: ["弘前大学", "弘前"] },
  { slug: "tohoku", name: "東北大学医学部", region: "東北", area: "宮城", category: "旧帝大", summary: "東北大らしい高い学術志向に対応するため、記述精度と論理性を磨きたい大学です。", campus: "星陵キャンパス", fit: "難関大向けの深い思考力を伸ばしたい受験生向け", keywords: ["東北大学", "東北大", "仙台"] },
  { slug: "akita", name: "秋田大学医学部", region: "東北", area: "秋田", category: "地方国立", summary: "安定した学力と医療への理解を丁寧に示したい、堅実型の国立医学部です。", campus: "本道キャンパス", fit: "基礎を崩さず着実に仕上げたい受験生向け", keywords: ["秋田大学", "秋田"] },
  { slug: "yamagata", name: "山形大学医学部", region: "東北", area: "山形", category: "地方国立", summary: "共通テストと二次のバランス管理が重要で、過不足ない学習設計が効く大学です。", campus: "飯田キャンパス", fit: "計画的に得点バランスを整えたい受験生向け", keywords: ["山形大学", "山形"] },
  { slug: "fukushima-medical", name: "福島県立医科大学", region: "東北", area: "福島", category: "地方国立", summary: "公立医学部として地域貢献意識と堅実な学力を両立して示したい大学です。", campus: "福島駅周辺キャンパス", fit: "地域医療への志望理由を明確に語りたい受験生向け", keywords: ["福島県立医科大学", "福島医大"] },
  { slug: "tsukuba", name: "筑波大学医学群医学類", region: "関東", area: "茨城", category: "都市型総合大学", summary: "独自色のある大学で、思考力と柔軟性、大学理解をセットで求められやすい大学です。", campus: "筑波キャンパス", fit: "論理性と大学適性を両方出したい受験生向け", keywords: ["筑波大学", "筑波", "医学類"] },
  { slug: "gunma", name: "群馬大学医学部", region: "関東", area: "群馬", category: "地方国立", summary: "地方中核大として基礎学力の安定感と医療志向を素直に示したい大学です。", campus: "昭和キャンパス", fit: "共通テストの失点を抑えたい受験生向け", keywords: ["群馬大学", "群馬"] },
  { slug: "chiba", name: "千葉大学医学部", region: "関東", area: "千葉", category: "都市型総合大学", summary: "難関国立らしく、共通テストと二次のどちらも高水準でまとめたい大学です。", campus: "亥鼻キャンパス", fit: "高い総合点を安定して出したい受験生向け", keywords: ["千葉大学", "千葉大"] },
  { slug: "tokyo", name: "東京大学理科三類", region: "関東", area: "東京", category: "旧帝大", summary: "最難関水準の思考力と記述力が必要で、全科目を極限まで磨く設計が必要な進路です。", campus: "駒場・本郷キャンパス", fit: "最高難度の記述型演習を積みたい受験生向け", keywords: ["東京大学", "東大", "理科三類", "理三"] },
  { slug: "tokyo-science", name: "東京科学大学医学部", region: "関東", area: "東京", category: "都市型総合大学", summary: "医歯系の強みを持つ大学として、理系思考力と医療職理解を丁寧に示したい大学です。", campus: "湯島キャンパス", fit: "難関大向けの理数系記述を強化したい受験生向け", keywords: ["東京科学大学", "医科歯科", "科学大"] },
  { slug: "niigata", name: "新潟大学医学部", region: "甲信越", area: "新潟", category: "地方国立", summary: "バランス良く得点しながら、地域医療や大学理解も押さえたい大学です。", campus: "旭町キャンパス", fit: "共通テストと二次の総合設計を重視する受験生向け", keywords: ["新潟大学", "新潟"] },
  { slug: "toyama", name: "富山大学医学部", region: "北陸", area: "富山", category: "地方国立", summary: "標準問題を確実に積みながら、差がつく論点を取りこぼさないことが大切な大学です。", campus: "杉谷キャンパス", fit: "基礎から応用まで抜けなく整えたい受験生向け", keywords: ["富山大学", "富山"] },
  { slug: "kanazawa", name: "金沢大学医薬保健学域医学類", region: "北陸", area: "石川", category: "地方国立", summary: "旧帝大に近い学術色もあり、英数理の完成度を高めたい地方難関国立です。", campus: "宝町・鶴間キャンパス", fit: "難関寄りの地方国立を狙う受験生向け", keywords: ["金沢大学", "金沢", "医学類"] },
  { slug: "fukui", name: "福井大学医学部", region: "北陸", area: "福井", category: "地方国立", summary: "地方国立らしい安定感に加え、医療への姿勢も素直に伝えたい大学です。", campus: "松岡キャンパス", fit: "基礎学力を大きく崩さず伸ばしたい受験生向け", keywords: ["福井大学", "福井"] },
  { slug: "yamanashi", name: "山梨大学医学部", region: "甲信越", area: "山梨", category: "地方国立", summary: "共通テストの安定と二次の論理性を両立したい、堅実型の医学部です。", campus: "玉穂キャンパス", fit: "総合点を堅くまとめたい受験生向け", keywords: ["山梨大学", "山梨"] },
  { slug: "shinshu", name: "信州大学医学部", region: "甲信越", area: "長野", category: "地方国立", summary: "自然科学への理解と地域医療への視点を合わせて示しやすい大学です。", campus: "松本キャンパス", fit: "地方国立志望でバランス型の対策を進めたい受験生向け", keywords: ["信州大学", "信州", "長野"] },
  { slug: "gifu", name: "岐阜大学医学部", region: "東海", area: "岐阜", category: "地方国立", summary: "標準からやや発展までを安定して取り切る設計が効く地方国立です。", campus: "柳戸キャンパス", fit: "典型問題の完成度を上げたい受験生向け", keywords: ["岐阜大学", "岐阜"] },
  { slug: "hamamatsu-medical", name: "浜松医科大学", region: "東海", area: "静岡", category: "単科医科大学", summary: "単科医科大らしく医学志向や適性まで含めて丁寧に準備したい大学です。", campus: "浜松医科大学キャンパス", fit: "医学部適性と基礎学力を両方整えたい受験生向け", keywords: ["浜松医科大学", "浜松医大"] },
  { slug: "nagoya", name: "名古屋大学医学部", region: "東海", area: "愛知", category: "旧帝大", summary: "旧帝大らしい高い思考力と安定した答案作成力が求められる難関大です。", campus: "鶴舞キャンパス", fit: "難問寄りの記述演習を重ねたい受験生向け", keywords: ["名古屋大学", "名大"] },
  { slug: "mie", name: "三重大学医学部", region: "東海", area: "三重", category: "地方国立", summary: "共通テストの安定と二次での取り切りが重要な、堅実に狙いたい大学です。", campus: "江戸橋キャンパス", fit: "得点バランスを整えたい受験生向け", keywords: ["三重大学", "三重"] },
  { slug: "shiga-medical", name: "滋賀医科大学", region: "近畿", area: "滋賀", category: "単科医科大学", summary: "単科医科大として医学への志望理由や学習の一貫性を示したい大学です。", campus: "滋賀医科大学キャンパス", fit: "志望理由と人物面も丁寧に準備したい受験生向け", keywords: ["滋賀医科大学", "滋賀医大"] },
  { slug: "kyoto", name: "京都大学医学部医学科", region: "近畿", area: "京都", category: "旧帝大", summary: "最難関級の記述力と深い思考力が必要で、答案の質で差がつく大学です。", campus: "吉田・聖護院周辺", fit: "超難関大向けに本質理解を深めたい受験生向け", keywords: ["京都大学", "京大", "医学科"] },
  { slug: "osaka", name: "大阪大学医学部医学科", region: "近畿", area: "大阪", category: "旧帝大", summary: "阪大らしい理系総合力が求められ、スピードと精度を両立したい大学です。", campus: "吹田キャンパス", fit: "難関国立向けに理数を強くしたい受験生向け", keywords: ["大阪大学", "阪大", "医学科"] },
  { slug: "kobe", name: "神戸大学医学部医学科", region: "近畿", area: "兵庫", category: "都市型総合大学", summary: "都市型難関国立として、学力の高さとバランスの良さを示したい大学です。", campus: "楠キャンパス", fit: "記述型の完成度を高めたい受験生向け", keywords: ["神戸大学", "神戸", "医学科"] },
  { slug: "tottori", name: "鳥取大学医学部", region: "中国", area: "鳥取", category: "地方国立", summary: "地方国立の中でも医学志向と安定した得点力を丁寧に整えたい大学です。", campus: "米子キャンパス", fit: "堅実な国立対策を進めたい受験生向け", keywords: ["鳥取大学", "鳥取", "米子"] },
  { slug: "shimane", name: "島根大学医学部", region: "中国", area: "島根", category: "地方国立", summary: "地域医療への理解と、標準問題を確実に取る力が大切な大学です。", campus: "出雲キャンパス", fit: "地域医療志向を明確にしたい受験生向け", keywords: ["島根大学", "島根", "出雲"] },
  { slug: "okayama", name: "岡山大学医学部医学科", region: "中国", area: "岡山", category: "地方国立", summary: "中国地方の難関国立として、英数理の総合点を高く保ちたい大学です。", campus: "鹿田キャンパス", fit: "地方難関国立で上位を狙う受験生向け", keywords: ["岡山大学", "岡山", "医学科"] },
  { slug: "hiroshima", name: "広島大学医学部医学科", region: "中国", area: "広島", category: "地方国立", summary: "共通テストと二次を高めにそろえ、面接まで含めて完成度を上げたい大学です。", campus: "霞キャンパス", fit: "総合力を高水準でまとめたい受験生向け", keywords: ["広島大学", "広島", "医学科"] },
  { slug: "yamaguchi", name: "山口大学医学部", region: "中国", area: "山口", category: "地方国立", summary: "標準問題を安定して取り切り、面接で大学理解を伝えたい大学です。", campus: "小串キャンパス", fit: "基礎から応用まで丁寧に積みたい受験生向け", keywords: ["山口大学", "山口"] },
  { slug: "tokushima", name: "徳島大学医学部医学科", region: "四国", area: "徳島", category: "地方国立", summary: "理系基礎力と医療への素直な志望理由をそろえて示したい大学です。", campus: "蔵本キャンパス", fit: "堅実に国立医学部を狙いたい受験生向け", keywords: ["徳島大学", "徳島", "医学科"] },
  { slug: "kagawa", name: "香川大学医学部", region: "四国", area: "香川", category: "地方国立", summary: "標準問題中心でも油断せず、基礎の抜けをなくしたい大学です。", campus: "三木町医学部キャンパス", fit: "得点の底上げを大切にする受験生向け", keywords: ["香川大学", "香川"] },
  { slug: "ehime", name: "愛媛大学医学部", region: "四国", area: "愛媛", category: "地方国立", summary: "地方国立らしい総合バランスに加え、人物面の準備も丁寧にしたい大学です。", campus: "重信キャンパス", fit: "面接も含めて抜けなく整えたい受験生向け", keywords: ["愛媛大学", "愛媛"] },
  { slug: "kochi", name: "高知大学医学部", region: "四国", area: "高知", category: "地方国立", summary: "地域医療との接続を意識しつつ、共通テストの安定感を重視したい大学です。", campus: "岡豊キャンパス", fit: "地域志向と基礎力を両立したい受験生向け", keywords: ["高知大学", "高知"] },
  { slug: "kyushu", name: "九州大学医学部医学科", region: "九州", area: "福岡", category: "旧帝大", summary: "九大らしい難関水準の思考力と記述力が問われる、総合力勝負の大学です。", campus: "馬出キャンパス", fit: "上位難関国立を狙う受験生向け", keywords: ["九州大学", "九大", "医学科"] },
  { slug: "saga", name: "佐賀大学医学部", region: "九州", area: "佐賀", category: "地方国立", summary: "基礎学力を安定させつつ、地域医療への理解も伝えたい大学です。", campus: "鍋島キャンパス", fit: "共通テストを大切に積みたい受験生向け", keywords: ["佐賀大学", "佐賀"] },
  { slug: "nagasaki", name: "長崎大学医学部医学科", region: "九州", area: "長崎", category: "地方国立", summary: "歴史ある医学部として、学問志向と医療への視野の広さを示したい大学です。", campus: "坂本キャンパス", fit: "大学理解を深めて臨みたい受験生向け", keywords: ["長崎大学", "長崎", "医学科"] },
  { slug: "kumamoto", name: "熊本大学医学部医学科", region: "九州", area: "熊本", category: "地方国立", summary: "九州エリアの難関国立として、英数理の完成度を高く保ちたい大学です。", campus: "本荘キャンパス", fit: "難関寄りの地方国立を目指す受験生向け", keywords: ["熊本大学", "熊本", "医学科"] },
  { slug: "oita", name: "大分大学医学部", region: "九州", area: "大分", category: "地方国立", summary: "共通テストと標準〜発展の二次を堅実に取り切りたい大学です。", campus: "挾間キャンパス", fit: "失点を減らして安定合格を狙う受験生向け", keywords: ["大分大学", "大分"] },
  { slug: "miyazaki", name: "宮崎大学医学部", region: "九州", area: "宮崎", category: "地方国立", summary: "地域医療志向と医学部適性を丁寧に示しながら、基礎を崩さず進めたい大学です。", campus: "清武キャンパス", fit: "人物面も丁寧に整えたい受験生向け", keywords: ["宮崎大学", "宮崎"] },
  { slug: "kagoshima", name: "鹿児島大学医学部", region: "九州", area: "鹿児島", category: "地方国立", summary: "九州南部の国立医学部として、総合点の高さと地域医療理解を示したい大学です。", campus: "桜ヶ丘キャンパス", fit: "共通テストも二次も高めにそろえたい受験生向け", keywords: ["鹿児島大学", "鹿児島"] },
  { slug: "ryukyu", name: "琉球大学医学部", region: "沖縄", area: "沖縄", category: "地方国立", summary: "地域特性の理解や医療への姿勢を含めて、大学との相性を示したい医学部です。", campus: "西普天間キャンパス", fit: "地域医療への関心を強く持つ受験生向け", keywords: ["琉球大学", "琉球", "沖縄"] },
  { slug: "ndmc", name: "防衛医科大学校", region: "関東", area: "埼玉", category: "防衛医科大学校", summary: "学費や進路の特徴が大きく異なり、学力だけでなく使命感や適性も重要な進路です。", campus: "所沢キャンパス", fit: "医師としての使命感や規律ある生活に納得して進みたい受験生向け", keywords: ["防衛医科大学校", "防衛医大", "所沢"] },
];

export function getNationalUniversityBySlug(slug: string) {
  return nationalUniversityArticles.find((entry) => entry.slug === slug);
}
