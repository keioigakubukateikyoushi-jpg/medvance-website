import LongformColumnPage from "@/components/LongformColumnPage";
import {
  ishiMezasuRiyuuArticle,
  promoColumnArticleMetadata,
} from "@/lib/promoColumnArticles";

export const metadata = promoColumnArticleMetadata.ishiMezasuRiyuuArticle;

export default function IshiMezasuRiyuuPage() {
  return <LongformColumnPage article={ishiMezasuRiyuuArticle} />;
}
