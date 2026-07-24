import LongformColumnPage from "@/components/LongformColumnPage";
import {
  oyaIgakubuJukenArticle,
  promoColumnArticleMetadata,
} from "@/lib/promoColumnArticles";

export const metadata = promoColumnArticleMetadata.oyaIgakubuJukenArticle;

export default function OyaIgakubuJukenPage() {
  return <LongformColumnPage article={oyaIgakubuJukenArticle} />;
}
