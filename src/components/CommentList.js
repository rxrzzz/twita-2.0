import React from "react";
import styles from "../styles/CommentList.module.css";
const CommentList = ({ comments, post, error }) => {

  return (
    <div>
      {comments &&
        comments
          .filter((comment) => comment.postCommentedOn == post.id)
          .map((comment) => (
            <article key={comment.id} className={styles.comment}>
              <div className={styles.comment_header}>
                <img src={comment.commentCreatorDp} alt={comment.commentCreator} width='50px' />
                @{comment.commentCreator}
              </div>
              <p>Replying to @{post.creator}</p>
              <div className={styles.comment_content}>
                {comment.commentContent}
                {comment.dateCommented}
              </div>
            </article>
          ))}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CommentList;
