import { getAllPosts } from "@/lib/api";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/constants";
import { parseISO } from "date-fns";

const escape = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const dynamic = "force-static";

export function GET() {
  const items = getAllPosts()
    .map((post) => {
      const url = `${SITE_URL}/posts/${post.slug}`;
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${parseISO(post.date).toUTCString()}</pubDate>
      <description>${escape(post.excerpt || "")}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escape(SITE_DESCRIPTION)}</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
