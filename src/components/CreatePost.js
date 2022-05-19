import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import styles from "../styles/CreatePost.module.css";
import backbutton from "../images/back-button.png";

const CreatePost = () => {
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};
    if (!values.postContent || values.postContent.length < 1) {
      errors.postContent = "Enter what you want to post";
    }
  };
  const person = JSON.parse(localStorage.getItem("personInStorage"));
  const date = new Date();

  const formik = useFormik({
    initialValues: {
      creator: person.username,
      creatorFirstName: person.firstName,
      creatorLastName: person.lastName,
      creatorDp: person.dpUrl,
      dateCreated: date.toLocaleString(),
      postContent: "",
      likes: 0,
      postComments: 0,
      
    },
    onSubmit: () => {
      axios
        .post("http://localhost:3010/posts", formik.values)
        .then(navigate(-1))
        .catch((err) => console.log(err));
    },
    validate,
    validateOnBlur: false,
    validateOnChange: false,
  });
  return (
    <div>
      <div className={styles.topbar}>
        <img src={backbutton} alt="Go back" onClick={() => navigate(-1)}/>
      </div>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <textarea
          type="text"
          className={styles.input}
          name="postContent"
          value={formik.values.postContent}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
