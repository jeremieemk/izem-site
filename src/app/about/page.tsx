import { PostBody } from "@/app/_components/post-body";
import { getAboutContent } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export default async function About() {
  const about = getAboutContent();
  if (!about) {
    return notFound();
  }
  const content = await markdownToHtml(about.content || "");

  return (
    <main>
      <PostBody content={content} />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const about = getAboutContent();
  if (!about) {
    return notFound();
  }

  const title = `About`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}
