import LongformColumnPage from "@/components/LongformColumnPage";
import {
  longformColumnArticleMetadata,
  nationalKakomonYearsArticle,
} from "@/lib/longformColumnArticles";

export const metadata = longformColumnArticleMetadata.nationalKakomonYearsArticle;

export default function NationalKakomonYearsPage() {
  return <LongformColumnPage article={nationalKakomonYearsArticle} />;
}
