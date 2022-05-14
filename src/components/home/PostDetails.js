import React from "react";
import { useNavigate, useParams } from "react-router";
import useFetch from "../../useFetch";
import Comments from "./Comments";

const PostDetails = () => {
  const { id } = useParams();
  const personInStorage = JSON.parse(localStorage.getItem("personInStorage"));
  const { data: post, error } = useFetch("http://localhost:3010/posts/" + id);

  return (
    <div>
      {error && <p>{error}</p>}
      {post && (
        <div>
          {post.postContent} {post.creatorDp}
        </div>
      )}
      {personInStorage.username == post.creator && <button>Delete</button>}
      <Comments post={post}/>
    </div>
  );
};

export default PostDetails;
