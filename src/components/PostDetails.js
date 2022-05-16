import React from "react";
import { useParams } from "react-router";
import useFetch from "../useFetch";
import CommentList from "./CommentList";
import styles from "../styles/PostDetails.module.css";
import Comments from "./Comments";
import backbutton from '../images/back-button.png'
import { Link } from "react-router-dom";
const PostDetails = () => {
  const { id } = useParams();
  const personInStorage = JSON.parse(localStorage.getItem("personInStorage"));
  const { data: post, error } = useFetch("http://localhost:3010/posts/" + id);
  const { data: comments, postsError } = useFetch(
    "http://localhost:3020/comments"
  );
  return (
    <div>
      <div className={styles.topbar}>
        <Link to='/'><img src={backbutton} alt="Go back" /></Link>
      </div>
      {error && <p>{error}</p>}
      {post && (
        <div className={styles.post}>
          <div className={styles.post_header}>
            <img src={post.creatorDp} alt={post.creator} />
            <div>
              <h2>
                {post.creatorFirstName} {post.creatorLastName}
              </h2>
              <p>@{post.creator}</p>
            </div>
          </div>
          <div className={styles.post_content}>
            <h2>{post.postContent}</h2>
            <div>
              <p>{post.dateCreated}</p>
              {personInStorage.username === post.creator && <button>Delete</button>}
            </div>
          </div>
          <div className={styles.post_footer}>
            <p>Like</p>
            <p>Comment</p>
            <p>Share</p>
          </div>
        </div>
      )}

      <Comments/>
      <CommentList comments={comments} post={post} error={postsError} />
    </div>
  );
};

export default PostDetails;
