import LongformColumnPage from "@/components/LongformColumnPage";
import {
  aprilColumnArticleMetadata,
  aprilYearPlanArticle,
} from "@/lib/aprilColumnArticles";

export const metadata = aprilColumnArticleMetadata.aprilYearPlanArticle;

export default function AprilYearPlanPage() {
  return <LongformColumnPage article={aprilYearPlanArticle} />;
}
