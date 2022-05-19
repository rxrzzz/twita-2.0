import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import useFetch from "../useFetch";
import CommentList from "./CommentList";
import styles from "../styles/PostDetails.module.css";
import Comments from "./Comments";
import comment from "../images/comment.svg";
import backbutton from "../images/back-button.png";
import { Link } from "react-router-dom";
import axios from "axios";
const PostDetails = () => {
  const { id } = useParams();
  const personInStorage = JSON.parse(localStorage.getItem("personInStorage"));
  const { data: post, error } = useFetch("http://localhost:7000/posts/" + id);
  const { data: comments, postsError } = useFetch(
    "http://localhost:7000/comments"
  );
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete("http://localhost:7000/posts/" + id)
      .then(navigate(-1))
      .catch((err) => console.log(err));
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  useEffect(() => {
    comments &&
      axios.put(`http://localhost:7000/posts/${post.id}`, {
        ...post,
        postComments: comments.filter(
          (comment) => comment.postCommentedOn == post.id
        ).length,
      });
  }, [comments, post]);
  return (
    <div>
      <div className={styles.topbar}>
        <button onClick={handleNavigate}>
          <img src={backbutton} alt="Go back" />
        </button>
      </div>
      {error && <p>{error}</p>}
      {post && (
        <div className={styles.post}>
          <div className={styles.post_header}>
            <Link to="/:username/profile" className={styles.profilelink}>
              <img src={post.creatorDp} alt={post.creator} />
              <div>
                <h2>
                  {post.creatorFirstName} {post.creatorLastName}
                </h2>
                <p>@{post.creator}</p>
              </div>
            </Link>
          </div>

          <div className={styles.post_content}>
            <h2>{post.postContent}</h2>
            <div>
              <p>{post.dateCreated}</p>
              {personInStorage.username === post.creator && (
                <button onClick={handleDelete} className={styles.delete}>Delete</button>
              )}
            </div>
          </div>
          <div className={styles.post_footer}>
            <p>Like</p>
            <Link to={`/posts/${post.id}`} className={styles.comment_link}>
              <img src={comment} alt="Comment" width="20px" />{" "}
              <p>{post.postComments}</p>
            </Link>
            <p>Share</p>
          </div>
        </div>
      )}

      <Comments />
      <CommentList comments={comments} post={post} error={postsError} />
    </div>
  );
};

export default PostDetails;
