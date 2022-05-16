import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";

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
      comments: {}
    },
    onSubmit: () => {
      axios
        .post("http://localhost:3010/posts", formik.values)

        .then(navigate("/"))
        .catch((err) => console.log(err));
    },validate,
    validateOnBlur: false,
    validateOnChange: false,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <textarea
          name="postContent"
          value={formik.values.postContent}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
