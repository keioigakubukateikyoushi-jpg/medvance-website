import LongformColumnPage from "@/components/LongformColumnPage";
import {
  promoColumnArticleMetadata,
  videoGakushuKatsuyoArticle,
} from "@/lib/promoColumnArticles";

export const metadata = promoColumnArticleMetadata.videoGakushuKatsuyoArticle;

export default function VideoGakushuKatsuyoPage() {
  return <LongformColumnPage article={videoGakushuKatsuyoArticle} />;
}
