import LongformColumnPage from "@/components/LongformColumnPage";
import {
  aprilColumnArticleMetadata,
  moshiKatsuYoArticle,
} from "@/lib/aprilColumnArticles";

export const metadata = aprilColumnArticleMetadata.moshiKatsuYoArticle;

export default function MoshiKatsuyoPage() {
  return <LongformColumnPage article={moshiKatsuYoArticle} />;
}
