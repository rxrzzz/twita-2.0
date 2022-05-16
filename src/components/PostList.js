import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Posts.module.css";

const PostList = ({ posts, postsError }) => {
  return (
    <div>
      {postsError && <p>{postsError}</p>}
      {posts &&
        posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <div className={styles.post_header}>
              <img src={post.creatorDp} width="150px" />
              <p>@{post.creator}</p>
            </div>
            <Link to={`/posts/${post.id}`} className={styles.post_content}>
              <div>
                {post.postContent}
                {post.dateCreated}
              </div>
            </Link>
            <div className={styles.post_footer}>
              <p>Like</p>
              <p>Comment</p>
              <p>Share</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
