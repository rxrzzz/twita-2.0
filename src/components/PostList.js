import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Posts.module.css";

const PostList = ({ posts, postsError }) => {
  return (
    <div>
      {postsError && <p>{postsError}</p>}
      {posts &&
        [...posts].reverse().map((post) => (
          <article key={post.id} className={styles.post}>
            <div className={styles.post_header}>
              <Link to={`/${post.creator}/profile`}>
              <img src={post.creatorDp} width="150px" />
              </Link>
              <div>
                <h2>{post.creatorFirstName} {post.creatorLastName}</h2>
                <p>@{post.creator}</p>
              </div>
            </div>
            <Link to={`/posts/${post.id}`} className={styles.post_content}>
              <div>
                <h2>{post.postContent}</h2>
                <p>{post.dateCreated}</p>
              </div>
            </Link>
            <div className={styles.post_footer}>
              <p>Like</p>
              <Link to={`/posts/${post.id}`} >
              <p>Comment</p>
              </Link>
              <p>Share</p>
            </div>
          </article>
        ))}
    </div>
  );
};

export default PostList;
