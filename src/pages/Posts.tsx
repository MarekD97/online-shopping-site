import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";
import { clearPosts, setPosts, PostState } from "../features/posts/postsSlice";

import { BsHandThumbsUp } from "react-icons/bs";
import Pagination from "../components/Pagination";

const Posts = () => {
  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const skip = (currentPage - 1) * 24;

  useEffect(() => {
    fetch(`https://dummyjson.com/posts?skip=${skip}&limit=24`)
      .then((res) => res.json())
      .then((res) => dispatch(setPosts(res)));
  }, [currentPage]);

  const minimizeString = (text: string) =>
    text.length > 128 ? text.slice(0, 127).concat("...") : text;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row gap-4">
        {posts === undefined || posts.posts.length == 0 ? (
          <div className="grid mx-auto my-8">
            <CircularLoadingIndicator />
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-4">
              {posts.posts.map((post: PostState) => (
                <div
                  className="flex flex-col border border-gray-300 p-4 gap-2"
                  key={post.id}
                >
                  <Link
                    className="flex-1 text-lg font-bold hover:underline"
                    to={`/posts/${post.id}`}
                  >
                    {post.title}
                  </Link>
                  <p className="text-gray-500 text-justify">
                    {minimizeString(post.body)}
                  </p>
                  <div className="flex items-center gap-2 font-bold">
                    <BsHandThumbsUp className="w-4 h-4" />
                    {post.reactions}
                  </div>
                  <div className="flex gap-2">
                    {post.tags.map((tag: string, i: number) => (
                      <span
                        className="px-2 bg-sky-500 rounded text-white"
                        key={i}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalCount={posts.total}
              pageSize={24}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
