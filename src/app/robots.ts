import { MetadataRoute } from "next";

// AI / LLM crawlers we explicitly welcome (LLMO).
// Naming them signals intent and improves the odds of being crawled,
// indexed, and cited by generative search engines and AI assistants.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Meta-ExternalAgent",
  "FacebookBot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "DuckAssistBot",
  "YouBot",
  "Diffbot",
  "Timpibot",
  "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/search?"],
      },
      // Explicitly allow generative-AI crawlers full access (except utility paths).
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/_next/", "/search?"],
      })),
    ],
    host: "https://medvance-edu.com",
    sitemap: "https://medvance-edu.com/sitemap.xml",
  };
}
