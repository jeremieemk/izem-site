import { PostBody } from "@/app/_components/post-body";
import PostLinks from "@/app/_components/post-links";
import { PostTitle } from "@/app/_components/post-title";
import { getAboutContent } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function About() {
  const about = getAboutContent();
  if (!about) {
    return notFound();
  }
  // keep single line breaks as <br> (blank line = new paragraph)
  const content = await markdownToHtml(
    (about.content || "").replace(/([^\n])\n(?!\n)/g, "$1  \n"),
  );

  return (
    <main>
      <article className="mb-32">
        {about.title && <PostTitle>{about.title}</PostTitle>}
        {about.coverImage && (
          <Image
            src={about.coverImage}
            alt="iZem"
            width={803}
            height={1200}
            sizes="(max-width: 700px) 100vw, 320px"
            priority
            className="float-right mb-4 ml-8 mt-6 w-[320px] rounded-base border-2 border-border dark:border-darkBorder w700:float-none w700:ml-0 w700:w-full"
          />
        )}
        {about.links && <PostLinks links={about.links}></PostLinks>}

        <PostBody content={content} />
      </article>
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const about = getAboutContent();
  if (!about) {
    return notFound();
  }

  const title = `${about.title || "About"} | iZem`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}
