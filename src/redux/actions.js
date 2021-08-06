import { CREATE_POST, REQUEST_POSTS, HIDE_LOADER, SHOW_LOADER } from "./types";

export const createPost = (post) => {
  return {
    type: CREATE_POST,
    payload: post,
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};
export const fetchPosts = () => {
  return {
    type: REQUEST_POSTS,
  };
};
