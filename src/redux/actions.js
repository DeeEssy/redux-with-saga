import { CREATE_POST, FETCH_POSTS } from "./types";

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};

export const fetchPosts = () => async (dispatch) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await response.json();
  dispatch({ type: FETCH_POSTS, payload: posts });
};