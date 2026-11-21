import { getAllPosts } from "@/lib/api";
import { SITE_TITLE } from "@/lib/constants";
import { PostList } from "./_components/post-list";
import { JsonLd, artistJsonLd, websiteJsonLd } from "./_components/json-ld";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <JsonLd data={artistJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <h1 className="sr-only">{SITE_TITLE}</h1>
      <PostList posts={allPosts} />
    </main>
  );
}
