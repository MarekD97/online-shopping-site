import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface PostState {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

export interface PostsState {
  posts: PostState[];
  total: number;
  skip: number;
  limit: number;
}

const initialPostsState: PostState[] = [];

const initialState = {
  posts: initialPostsState,
  total: 0,
  skip: 0,
  limit: 0,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state: PostsState, action: PayloadAction<PostsState>) => {
      const { posts, total, skip, limit } = action.payload;
      state.posts = posts;
      state.total = total;
      state.skip = skip;
      state.limit = limit;
    },
    clearPosts: (state: PostsState, action: PayloadAction) => {
      return initialState;
    },
    addPost: (state: PostsState, action: PayloadAction<PostState>) => {
      const newPost = action.payload;
      state.posts.push(newPost);
    },
    deletePost: (state: PostsState, action: PayloadAction<PostState>) => {
      state.posts = state.posts.filter(
        ({ id }: PostState) => id !== action.payload.id
      );
    },
  },
});

export const { setPosts, clearPosts, addPost, deletePost } = postsSlice.actions;

export const getPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
