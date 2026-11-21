import { SITE_URL } from "@/lib/constants";
import type { MetadataRoute } from "next";

// open to every crawler, including AI assistants (GPTBot, ClaudeBot, PerplexityBot...)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
