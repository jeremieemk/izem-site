import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-6 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>

      <div className="text-lg leading-[18px] pt-2">
        <DateFormatter dateString={date} />
      </div>
    </>
  );
}
