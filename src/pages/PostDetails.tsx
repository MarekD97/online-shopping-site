import React, { useEffect, useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";
import PostCard from "../features/posts/PostCard";
import { addPost, PostState } from "../features/posts/postsSlice";

const PostDetails = (): JSX.Element => {
  const { id } = useParams();

  const post = useAppSelector((state) =>
    state.posts.posts.find((post: PostState) => post.id === Number(id))
  );
  const dispatch = useAppDispatch();

  const [comments, setComments] = useState<any>();

  useEffect(() => {
    if (post === undefined) {
      fetch(`https://dummyjson.com/posts/${id}`)
        .then((res) => res.json())
        .then((res) => dispatch(addPost(res)));
    }
  }, [dispatch]);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then(setComments);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 my-8">
        {post === undefined ? (
          <div className="grid mx-auto">
            <CircularLoadingIndicator />
          </div>
        ) : (
          <div>
            <PostCard
              id={post.id}
              title={post.title}
              body={post.body}
              reactions={post.reactions}
              tags={post.tags}
            />
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
