import LongformColumnPage from "@/components/LongformColumnPage";
import {
  chemistryStudyMethodArticle,
  longformColumnArticleMetadata,
} from "@/lib/longformColumnArticles";

export const metadata = longformColumnArticleMetadata.chemistryStudyMethodArticle;

export default function ChemistryStudyMethodPage() {
  return <LongformColumnPage article={chemistryStudyMethodArticle} />;
}
