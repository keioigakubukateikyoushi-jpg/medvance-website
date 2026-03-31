import LongformColumnPage from "@/components/LongformColumnPage";
import {
  biologyStudyMethodArticle,
  longformColumnArticleMetadata,
} from "@/lib/longformColumnArticles";

export const metadata = longformColumnArticleMetadata.biologyStudyMethodArticle;

export default function BiologyStudyMethodPage() {
  return <LongformColumnPage article={biologyStudyMethodArticle} />;
}
