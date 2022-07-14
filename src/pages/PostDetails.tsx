import React, { useEffect, useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import { useParams } from "react-router-dom";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";
import { PostState } from "../features/posts/postsSlice";

const PostDetails = (): JSX.Element => {
  const { id } = useParams();

  const [post, setPost] = useState<PostState>();
  const [comments, setComments] = useState<any>();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then(setPost);

    return () => {
      setPost(undefined);
    };
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then(setComments);

    return () => {
      setComments(undefined);
    };
  }, []);

  console.log(comments?.comments);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 my-8">
        {post === undefined ? (
          <div className="grid mx-auto">
            <CircularLoadingIndicator />
          </div>
        ) : (
          <div>
            <div className="flex flex-col border border-gray-300 p-4 gap-2">
              <div className="flex-1 text-lg font-bold hover:underline">
                {post.title}
              </div>
              <p className="text-gray-500 text-justify">{post.body}</p>
              <div className="flex items-center gap-2 font-bold">
                <BsHandThumbsUp className="w-4 h-4" />
                {post.reactions}
              </div>
              <div className="flex gap-2">
                {post.tags.map((tag: string, i: number) => (
                  <span className="px-2 bg-sky-500 rounded text-white" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="uppercase">Comments:</div>
      {comments === undefined || comments.comments.length === 0 ? (
        <div className="grid mx-auto">
          <CircularLoadingIndicator />
        </div>
      ) : (
        <div>
          <div className="flex flex-col border border-gray-300 p-4 gap-2">
            {comments.comments.map((comment: any) => (
              <div key={comment.id}>
                <div className="font-bold">{comment.user.username}</div>
                <div>{comment.body}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
