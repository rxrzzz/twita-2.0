import React from "react";

const CommentList = ({ comments, post, error }) => {
  return (
    <div>
      {comments &&
        post &&
        comments.filter((comment) => comment.postCommentedOn == post.id).map((comment) => (
          <article>
            {comment.commentCreator}
            {comment.commentContent}
          </article>
        ))}{" "}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CommentList;
