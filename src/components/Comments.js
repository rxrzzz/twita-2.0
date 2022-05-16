import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router";
import styles from "../styles/Comment.module.css";

const Comments = () => {
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
      commentCreatorDp: person.dpUrl,
      dateCommented: date.toLocaleString(),
      commentContent: "",
      postCommentedOn: id,
    },
    onSubmit: async () => {
      if (formik.errors.length > 0) {
        void 0;
      } else {
        await axios
          .post("http://localhost:3020/comments", formik.values)
          .catch((err) => console.log(err));
      }
      window.location.reload()
    },validate
    
  });



  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <textarea
        className={styles.comment_content}
        name="commentContent"
        placeholder="write a comment"
        value={formik.values.commentContent}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></textarea>

      <button type="submit">Comment</button>
      {formik.errors.commentContent && formik.touched.commentContent && (
        <p>{formik.errors.commentContent}</p>
      )}
    </form>
  );
};

export default Comments;
