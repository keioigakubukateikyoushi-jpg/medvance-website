import LongformColumnPage from "@/components/LongformColumnPage";
import {
  igakubuGenzaiKaraArticle,
  promoColumnArticleMetadata,
} from "@/lib/promoColumnArticles";

export const metadata = promoColumnArticleMetadata.igakubuGenzaiKaraArticle;

export default function IgakubuGenzaiKaraPage() {
  return <LongformColumnPage article={igakubuGenzaiKaraArticle} />;
}
