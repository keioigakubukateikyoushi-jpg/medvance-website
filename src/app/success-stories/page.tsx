import { permanentRedirect } from "next/navigation";

export default function SuccessStoriesPage() {
  permanentRedirect("/contact?from=success-stories-redirect");
}
