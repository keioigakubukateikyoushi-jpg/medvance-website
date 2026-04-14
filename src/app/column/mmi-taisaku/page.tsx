import LongformColumnPage from "@/components/LongformColumnPage";
import {
  aprilColumnArticleMetadata,
  mmiTaisakuArticle,
} from "@/lib/aprilColumnArticles";

export const metadata = aprilColumnArticleMetadata.mmiTaisakuArticle;

export default function MmiTaisakuPage() {
  return <LongformColumnPage article={mmiTaisakuArticle} />;
}
