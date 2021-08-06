import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

const Posts = ({ syncPosts }) => {
  return (
    <div>
      <h1>Posts</h1>
      {syncPosts.length &&
        syncPosts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps, null)(Posts);
