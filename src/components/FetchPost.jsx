import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";

const FetchPost = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const asyncPosts = useSelector((state) => state.posts.fetchedPosts);
  return (
    <div>
      <h1>FetchPost</h1>
      {asyncPosts?.length ? (
        asyncPosts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <button
          onClick={() => dispatch(fetchPosts())}
          className="btn btn-primary"
        >
          Загрузить
        </button>
      )}
    </div>
  );
};

export default FetchPost;
