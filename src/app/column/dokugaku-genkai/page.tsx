import LongformColumnPage from "@/components/LongformColumnPage";
import {
  aprilColumnArticleMetadata,
  dokugakuGenkaiArticle,
} from "@/lib/aprilColumnArticles";

export const metadata = aprilColumnArticleMetadata.dokugakuGenkaiArticle;

export default function DokugakuGenkaiPage() {
  return <LongformColumnPage article={dokugakuGenkaiArticle} />;
}
