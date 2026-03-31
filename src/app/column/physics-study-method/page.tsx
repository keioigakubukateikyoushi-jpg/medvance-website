import LongformColumnPage from "@/components/LongformColumnPage";
import {
  longformColumnArticleMetadata,
  physicsStudyMethodArticle,
} from "@/lib/longformColumnArticles";

export const metadata = longformColumnArticleMetadata.physicsStudyMethodArticle;

export default function PhysicsStudyMethodPage() {
  return <LongformColumnPage article={physicsStudyMethodArticle} />;
}
