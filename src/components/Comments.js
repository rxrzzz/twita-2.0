import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useParams } from "react-router";
import styles from "../styles/Comment.module.css";

const Comments = ({ post }) => {
  const { id } = useParams();
  const person = JSON.parse(localStorage.getItem("personInStorage"));
  const date = new Date();

  const validate = (values) => {
    const errors = {};
    if (!values.commentContent) {
      errors.commentContent = "Enter a comment";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      commentCreator: person.username,
      dateCommented: date.toLocaleString(),
      commentContent: "",
      postCommentedOn: id,
    },
    onSubmit: () => {
      alert(JSON.stringify(formik.values));
      axios.post("http://localhost:3020/comments", formik.values);
      console.log("Done");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      {post && <h2>Replying to {post.creator}</h2>}
      <input
      className={styles.comment_content}
        name="commentContent"
        placeholder="write a comment"
        value={formik.values.commentContent}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></input>
      {formik.errors.commentContent && formik.touched.commentContent && (
        <p>{formik.errors.commentContent}</p>
      )}
      <button type="submit">Comment</button>
    </form>
  );
};

export default Comments;
