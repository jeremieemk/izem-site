import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";
import CoverImage from "./cover-image";
import Date from "./date";

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-6 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>

      <div className="text-lg leading-[18px] pt-2">
        <Date dateString={date} />
      </div>
    </>
  );
}
