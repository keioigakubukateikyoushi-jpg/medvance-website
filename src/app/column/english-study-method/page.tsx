import LongformColumnPage from "@/components/LongformColumnPage";
import {
  englishStudyMethodArticle,
  longformColumnArticleMetadata,
} from "@/lib/longformColumnArticles";

export const metadata = longformColumnArticleMetadata.englishStudyMethodArticle;

export default function EnglishStudyMethodPage() {
  return <LongformColumnPage article={englishStudyMethodArticle} />;
}
