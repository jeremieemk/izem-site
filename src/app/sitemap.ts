import { getAllPosts } from "@/lib/api";
import { SITE_URL } from "@/lib/constants";
import { parseISO } from "date-fns";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    {
      url: SITE_URL,
      lastModified: posts[0] ? parseISO(posts[0].date) : undefined,
    },
    { url: `${SITE_URL}/about` },
    ...posts.map((post) => ({
      url: `${SITE_URL}/posts/${post.slug}`,
      lastModified: parseISO(post.date),
    })),
  ];
}
