import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CommentList.module.css";
const CommentList = ({ comments, post, error }) => {
  return (
    <div>
      {comments &&
        [...comments]
          .reverse()
          .filter((comment) => comment.postCommentedOn == post.id)
          .map((comment) => (
            <article key={comment.id} className={styles.comment}>
              <Link to={`/${comment.commentCreator}/profile`}>
                <div className={styles.comment_header}>
                  <p>@{comment.commentCreator}</p>
                </div>
              </Link>
              <div className={styles.comment_content}>
                <p className={styles.p}>Replying to @{post.creator}</p>
                <h2>{comment.commentContent}</h2>
                <p>{comment.dateCommented}</p>
              </div>
            </article>
          ))}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CommentList;
