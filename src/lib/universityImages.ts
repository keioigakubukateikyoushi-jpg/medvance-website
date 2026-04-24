export type UniversityImage = {
  src: string;
  alt: string;
  credit?: string;
  objectPosition?: string;
};

export const universityImages: Record<string, UniversityImage> = {
  keio: {
    src: "/images/universities/keio.webp",
    alt: "慶應義塾大学信濃町キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  jikei: {
    src: "/images/universities/jikei.webp",
    alt: "東京慈恵会医科大学本院",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  juntendo: {
    src: "/images/universities/juntendo.webp",
    alt: "順天堂大学本郷キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  showa: {
    src: "/images/universities/showa.webp",
    alt: "昭和医科大学旗の台キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  nihon: {
    src: "/images/universities/nihon.webp",
    alt: "日本大学医学部板橋キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  "nippon-medical": {
    src: "/images/universities/nippon-medical.webp",
    alt: "日本医科大学千駄木キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  toho: {
    src: "/images/universities/toho.webp",
    alt: "東邦大学大森キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  kyorin: {
    src: "/images/universities/kyorin.webp",
    alt: "杏林大学三鷹キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  kitasato: {
    src: "/images/universities/kitasato.webp",
    alt: "北里大学相模原キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  tokai: {
    src: "/images/universities/tokai.webp",
    alt: "東海大学伊勢原キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  kindai: {
    src: "/images/universities/kindai.webp",
    alt: "近畿大学医学部キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  "osaka-ika": {
    src: "/images/universities/osaka-ika.webp",
    alt: "大阪医科薬科大学本部キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  "kansai-ika": {
    src: "/images/universities/kansai-ika.webp",
    alt: "関西医科大学枚方キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  fukuoka: {
    src: "/images/universities/fukuoka.webp",
    alt: "福岡大学医学部七隈キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  teikyo: {
    src: "/images/universities/teikyo.webp",
    alt: "帝京大学板橋キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  "tohoku-ika": {
    src: "/images/universities/tohoku-ika.webp",
    alt: "東北医科薬科大学小松島キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  fujita: {
    src: "/images/universities/fujita.webp",
    alt: "藤田医科大学豊明キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  "aichi-ika": {
    src: "/images/universities/aichi-ika.webp",
    alt: "愛知医科大学長久手キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  hyogo: {
    src: "/images/universities/hyogo.webp",
    alt: "兵庫医科大学西宮キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  "kawasaki-ika": {
    src: "/images/universities/kawasaki-ika.webp",
    alt: "川崎医科大学倉敷キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  kurume: {
    src: "/images/universities/kurume.webp",
    alt: "久留米大学医学部旭町キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  iwate: {
    src: "/images/universities/iwate.webp",
    alt: "岩手医科大学矢巾キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  dokkyo: {
    src: "/images/universities/dokkyo.webp",
    alt: "獨協医科大学壬生キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  "joshi-ika": {
    src: "/images/universities/joshi-ika.webp",
    alt: "東京女子医科大学河田町キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  "kanazawa-ika": {
    src: "/images/universities/kanazawa-ika.webp",
    alt: "金沢医科大学内灘キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  iuhw: {
    src: "/images/universities/iuhw.webp",
    alt: "国際医療福祉大学成田キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  "saitama-ika": {
    src: "/images/universities/saitama-ika.webp",
    alt: "埼玉医科大学毛呂山キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  marianna: {
    src: "/images/universities/marianna.webp",
    alt: "聖マリアンナ医科大学宮前キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
  "tokyo-ika": {
    src: "/images/universities/tokyo-ika.webp",
    alt: "東京医科大学新宿キャンパス",
    credit: "Photo: Wikimedia Commons",
    objectPosition: "center",
  },
};

export function getUniversityImage(slug: string): UniversityImage | null {
  return universityImages[slug] ?? null;
}
