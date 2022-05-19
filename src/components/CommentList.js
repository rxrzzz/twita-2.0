import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CommentList.module.css";
const CommentList = ({ comments, post, error }) => {
  useEffect(() => {
    comments &&
      axios.put(`http://localhost:3010/posts/${post.id}`, {
        ...post,
        postComments: comments.filter(
          (comment) => comment.postCommentedOn == post.id
        ).length,
      });
  }, [comments]);
  return (
    <div>
      {comments &&
        [...comments]
          .reverse()
          .filter((comment) => comment.postCommentedOn == post.id)
          .map((comment) => (
            <article key={comment.id} className={styles.comment}>
              <div className={styles.comment_header}>
                <Link
                  to={`/${comment.commentCreator}/profile`}
                  className={styles.profilelink}
                >
                  <img
                    src={comment.commentCreatorDp}
                    alt={comment.commentCreator}
                    width="55px"
                    height="55px"
                  />
                  <p>@{comment.commentCreator}</p>
                </Link>
              </div>

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
