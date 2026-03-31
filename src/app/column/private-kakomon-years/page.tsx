import LongformColumnPage from "@/components/LongformColumnPage";
import {
  longformColumnArticleMetadata,
  privateKakomonYearsArticle,
} from "@/lib/longformColumnArticles";

export const metadata = longformColumnArticleMetadata.privateKakomonYearsArticle;

export default function PrivateKakomonYearsPage() {
  return <LongformColumnPage article={privateKakomonYearsArticle} />;
}
