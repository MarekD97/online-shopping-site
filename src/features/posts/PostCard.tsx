import React from "react";
import { BsHandThumbsUp } from "react-icons/bs";

interface PostCardProps {
  id: number;
  title: string;
  body: string;
  reactions: number;
  tags: string[];
  minimize?: boolean;
}

const minimizeString = (text: string) =>
  text.length > 128 ? text.slice(0, 127).concat("...") : text;

const PostCard = (props: PostCardProps) => {
  const { id, title, body, reactions, tags, minimize } = props;
  return (
    <div className="flex flex-col border border-gray-300 p-4 gap-2">
      <div className="flex-1 text-lg font-bold">{title}</div>
      <p className="text-gray-500 text-justify">
        {minimize ? minimizeString(body) : body}
      </p>
      <div className="flex items-center gap-2 font-bold">
        <BsHandThumbsUp className="w-4 h-4" />
        {reactions}
      </div>
      <div className="flex gap-2">
        {tags.map((tag: string, i: number) => (
          <span className="px-2 bg-sky-500 rounded text-white" key={i}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
