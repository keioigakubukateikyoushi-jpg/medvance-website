import LongformColumnPage from "@/components/LongformColumnPage";
import {
  longformColumnArticleMetadata,
  mmiTimingArticle,
} from "@/lib/longformColumnArticles";

export const metadata = longformColumnArticleMetadata.mmiTimingArticle;

export default function MmiTimingPage() {
  return <LongformColumnPage article={mmiTimingArticle} />;
}
