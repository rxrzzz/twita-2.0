import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import comment from "../images/comment.svg";
import styles from "../styles/Posts.module.css";

const PostList = ({ posts, postsError, person }) => {
  return (
    <div>
      {postsError && <p>{postsError}</p>}
      {posts &&
        [...posts].reverse().map((post) => (
          <article key={post.id} className={styles.post}>
            {person.username != post.creator ? (
              <Link to={`/${post.creator}/profile`} className={styles.toplink}>
                <div className={styles.post_header}>
                  <img src={post.creatorDp} width="150px" />

                  <div>
                    <h2>
                      {post.creatorFirstName} {post.creatorLastName}
                    </h2>
                    <p>@{post.creator}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <Link to="/profile" className={styles.toplink}>
                <div className={styles.post_header}>
                  <img src={post.creatorDp} width="150px" />

                  <div>
                    <h2>
                      {post.creatorFirstName} {post.creatorLastName}
                    </h2>
                    <p>@{post.creator}</p>
                  </div>
                </div>
              </Link>
            )}
            <Link to={`/posts/${post.id}`} className={styles.post_content}>
              <div>
                <h2>{post.postContent}</h2>
                <p>{post.dateCreated}</p>
              </div>
            </Link>
            <div className={styles.post_footer}>
              <p>Like</p>
              <Link to={`/posts/${post.id}`} className={styles.comment_link}>
                <img src={comment} alt="Comment" width="20px" />{" "}
                <p>{post.postComments}</p>
              </Link>
              <p>Share</p>
            </div>
          </article>
        ))}
    </div>
  );
};

export default PostList;
