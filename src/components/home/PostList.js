import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, postsError }) => {
  return (
    <div>
      {postsError && <p>{postsError}</p>}
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.creatorFirstName} <img src={post.creatorDp} width="150px" />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList;
