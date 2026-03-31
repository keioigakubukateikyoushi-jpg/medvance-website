import LongformColumnPage from "@/components/LongformColumnPage";
import {
  longformColumnArticleMetadata,
  mathStudyMethodArticle,
} from "@/lib/longformColumnArticles";

export const metadata = longformColumnArticleMetadata.mathStudyMethodArticle;

export default function MathStudyMethodPage() {
  return <LongformColumnPage article={mathStudyMethodArticle} />;
}
