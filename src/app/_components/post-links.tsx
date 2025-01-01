import React from "react";
import { Button } from "./button";
import Link from "next/link";

interface PostLinksProps {
  links: { title: string; url: string }[];
}

const PostLinks: React.FC<PostLinksProps> = ({ links }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>{link.title}</Button>
        </Link>
      ))}
    </div>
  );
};

export default PostLinks;
