import { getAllPosts } from "@/lib/api";
import {
  ARTIST_BIO,
  ARTIST_PROFILES,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/lib/constants";

// llms.txt: a plain-text summary of the site for AI assistants (https://llmstxt.org)
export const dynamic = "force-static";

export function GET() {
  const posts = getAllPosts()
    .map(
      (post) =>
        `- [${post.title}](${SITE_URL}/posts/${post.slug}): ${post.excerpt || ""}`,
    )
    .join("\n");

  const text = `# iZem

> ${SITE_DESCRIPTION}

${ARTIST_BIO}

## About

- [About iZem](${SITE_URL}/about)

## Profiles

${ARTIST_PROFILES.map((url) => `- ${url}`).join("\n")}

## Posts (releases, remixes, collaborations)

${posts}
`;

  return new Response(text, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
