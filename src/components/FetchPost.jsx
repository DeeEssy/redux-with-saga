import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";

const FetchPost = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const asyncPosts = useSelector((state) => state.posts.fetchedPosts);
  // @ts-ignore
  const isLoading = useSelector((state) => state.app.loading);

  if (isLoading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  if (asyncPosts.length) {
    return asyncPosts.map((post) => <Post key={post.id} post={post} />);
  }

  return (
    <div>
      <h1>FetchPost</h1>
      <button
        onClick={() => dispatch(fetchPosts())}
        className="btn btn-primary"
      >
        Загрузить
      </button>
    </div>
  );
};

export default FetchPost;
