import React from "react";
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
              <div className={styles.comment_header}>
                <p>@{comment.commentCreator}</p>
              </div>
              <p className={styles.p}>Replying to @{post.creator}</p>
              <div className={styles.comment_content}>
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
