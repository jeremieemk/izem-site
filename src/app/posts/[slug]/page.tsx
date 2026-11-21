import { ARTIST_ID, JsonLd } from "@/app/_components/json-ld";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import PostLinks from "@/app/_components/post-links";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { SITE_URL } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import { parseISO } from "date-fns";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: `${SITE_URL}${post.coverImage}`,
          datePublished: parseISO(post.date).toISOString(),
          url: `${SITE_URL}/posts/${post.slug}`,
          author: { "@id": ARTIST_ID },
          publisher: { "@id": ARTIST_ID },
        }}
      />
      <article className="mb-32">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
        />
        {post.links && <PostLinks links={post.links}></PostLinks>}

        <PostBody content={content} />
      </article>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const url = `/posts/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: parseISO(post.date).toISOString(),
      images: [{ url: post.coverImage, alt: post.title }],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
