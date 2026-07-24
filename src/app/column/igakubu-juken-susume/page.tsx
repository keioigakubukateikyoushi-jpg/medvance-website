import LongformColumnPage from "@/components/LongformColumnPage";
import {
  igakubuJukenSusumeArticle,
  promoColumnArticleMetadata,
} from "@/lib/promoColumnArticles";

export const metadata = promoColumnArticleMetadata.igakubuJukenSusumeArticle;

export default function IgakubuJukenSusumePage() {
  return <LongformColumnPage article={igakubuJukenSusumeArticle} />;
}
