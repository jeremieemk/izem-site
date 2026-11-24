import { JsonLd, artistJsonLd } from "@/app/_components/json-ld";
import { PostBody } from "@/app/_components/post-body";
import PostLinks from "@/app/_components/post-links";
import { PostTitle } from "@/app/_components/post-title";
import { getAboutContent } from "@/lib/api";
import { ARTIST_REAL_NAME, SITE_URL } from "@/lib/constants";
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: `${SITE_URL}/about`,
          mainEntity: artistJsonLd,
        }}
      />
      <article className="mb-32">
        {about.title && <PostTitle>{about.title}</PostTitle>}
        {about.coverImage && (
          <figure className="float-right mb-4 ml-8 mt-6 w-[320px] w700:float-none w700:ml-0 w700:w-full">
            <Image
              src={about.coverImage}
              alt="iZem in the studio"
              width={803}
              height={1200}
              sizes="(max-width: 700px) 100vw, 320px"
              priority
              className="w-full rounded-base border-2 border-border dark:border-darkBorder"
            />
            {about.photoCredit && (
              <figcaption className="mt-1 text-right text-[10px] opacity-60">
                photo:{" "}
                <a
                  href={`https://www.instagram.com/${about.photoCredit}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @{about.photoCredit}
                </a>
              </figcaption>
            )}
          </figure>
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

  // real name in the page title so a search for it surfaces the music side
  const title = `About ${ARTIST_REAL_NAME} (iZem)`;
  const description = `${ARTIST_REAL_NAME}, aka iZem, is a French-born beatmaker and producer who left France at 25 and made music across Spain, Brazil, Argentina, Ireland and Portugal.`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: "/about" },
    openGraph: {
      type: "profile",
      title,
      description,
      url: "/about",
    },
  };
}
