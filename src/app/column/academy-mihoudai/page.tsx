import LongformColumnPage from "@/components/LongformColumnPage";
import {
  academyMihoudaiArticle,
  promoColumnArticleMetadata,
} from "@/lib/promoColumnArticles";

export const metadata = promoColumnArticleMetadata.academyMihoudaiArticle;

export default function AcademyMihoudaiPage() {
  return <LongformColumnPage article={academyMihoudaiArticle} />;
}
