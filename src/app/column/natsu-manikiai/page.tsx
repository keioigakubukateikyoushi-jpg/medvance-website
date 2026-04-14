import LongformColumnPage from "@/components/LongformColumnPage";
import {
  aprilColumnArticleMetadata,
  natsuManikiaiArticle,
} from "@/lib/aprilColumnArticles";

export const metadata = aprilColumnArticleMetadata.natsuManikiaiArticle;

export default function NatsuManikiaiPage() {
  return <LongformColumnPage article={natsuManikiaiArticle} />;
}
