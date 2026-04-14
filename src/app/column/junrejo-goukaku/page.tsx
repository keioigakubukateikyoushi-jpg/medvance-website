import LongformColumnPage from "@/components/LongformColumnPage";
import {
  aprilColumnArticleMetadata,
  junrejoGoukakuArticle,
} from "@/lib/aprilColumnArticles";

export const metadata = aprilColumnArticleMetadata.junrejoGoukakuArticle;

export default function JunrejoGoukakuPage() {
  return <LongformColumnPage article={junrejoGoukakuArticle} />;
}
