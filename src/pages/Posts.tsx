import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import CircularLoadingIndicator from "../components/CircularLoadingIndicator";
import { clearPosts, setPosts, PostState } from "../features/posts/postsSlice";

import { BsHandThumbsUp } from "react-icons/bs";
import Pagination from "../components/Pagination";
import PostCard from "../features/posts/PostCard";

const Posts = () => {
  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const skip = (currentPage - 1) * 24;
    fetch(`https://dummyjson.com/posts?skip=${skip}&limit=24`)
      .then((res) => res.json())
      .then((res) => dispatch(setPosts(res)));
  }, [currentPage]);

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
                <Link
                  className="flex hover:bg-gray-200"
                  key={post.id}
                  to={`/posts/${post.id}`}
                >
                  <PostCard
                    id={post.id}
                    title={post.title}
                    body={post.body}
                    reactions={post.reactions}
                    tags={post.tags}
                    minimize={true}
                  />
                </Link>
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
