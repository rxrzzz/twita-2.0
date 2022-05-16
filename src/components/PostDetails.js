import React from "react";
import { useParams } from "react-router";
import useFetch from "../useFetch";
import CommentList from "./CommentList";
import styles from "../styles/Home.module.css";
import Comments from "./Comments";

const PostDetails = () => {
  const { id } = useParams();
  const personInStorage = JSON.parse(localStorage.getItem("personInStorage"));
  const { data: post, error } = useFetch("http://localhost:3010/posts/" + id);
  const {data: comments, postsError} = useFetch('http://localhost:3020/comments')
  return (
    <div>
      {error && <p>{error}</p>}
      {post && (
        <div >
          {post.postContent} {post.creatorDp}
        </div>
      )}
      {personInStorage.username == post.creator && <button>Delete</button>}
      <Comments post={post}/>
      <CommentList comments={comments} post={post} error={postsError}/>
    </div>
  );
};

export default PostDetails;
