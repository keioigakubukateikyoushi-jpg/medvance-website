import LongformColumnPage from "@/components/LongformColumnPage";
import {
  longformColumnArticleMetadata,
  shiboriyushoWritingArticle,
} from "@/lib/longformColumnArticles";

export const metadata = longformColumnArticleMetadata.shiboriyushoWritingArticle;

export default function ShiboriyushoWritingPage() {
  return <LongformColumnPage article={shiboriyushoWritingArticle} />;
}
