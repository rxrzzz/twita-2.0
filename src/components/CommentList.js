import React from "react";

const CommentList = ({ comments, post, error }) => {
  return (
    <div>
      {comments &&
        comments.filter((comment) => comment.postCommentedOn == post.id).map(comment => (
            <article key={comment.id}>
                {comment.commentContent}
            </article>
        ))}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CommentList;
