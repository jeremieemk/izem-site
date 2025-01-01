import { getAllPosts } from "@/lib/api";
import { PostList } from "./_components/post-list";
import { Button } from "./_components/button";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <PostList posts={allPosts} />
    </main>
  );
}
