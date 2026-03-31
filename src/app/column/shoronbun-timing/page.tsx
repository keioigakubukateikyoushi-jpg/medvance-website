import LongformColumnPage from "@/components/LongformColumnPage";
import {
  longformColumnArticleMetadata,
  shoronbunTimingArticle,
} from "@/lib/longformColumnArticles";

export const metadata = longformColumnArticleMetadata.shoronbunTimingArticle;

export default function ShoronbunTimingPage() {
  return <LongformColumnPage article={shoronbunTimingArticle} />;
}
