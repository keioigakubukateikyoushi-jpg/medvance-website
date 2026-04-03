import LongformColumnPage from "@/components/LongformColumnPage";
import {
  aprilColumnArticleMetadata,
  roninAprilPlanArticle,
} from "@/lib/aprilColumnArticles";

export const metadata = aprilColumnArticleMetadata.roninAprilPlanArticle;

export default function RoninAprilPlanPage() {
  return <LongformColumnPage article={roninAprilPlanArticle} />;
}
