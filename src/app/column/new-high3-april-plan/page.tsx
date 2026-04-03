import LongformColumnPage from "@/components/LongformColumnPage";
import {
  aprilColumnArticleMetadata,
  newHigh3AprilArticle,
} from "@/lib/aprilColumnArticles";

export const metadata = aprilColumnArticleMetadata.newHigh3AprilArticle;

export default function NewHigh3AprilPlanPage() {
  return <LongformColumnPage article={newHigh3AprilArticle} />;
}
