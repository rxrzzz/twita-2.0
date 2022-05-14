import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import useFetch from "../useFetch";

const Login = () => {
  const { data: persons, error } = useFetch("http://localhost:7000/people");
  const navigate =useNavigate()

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Please enter your username";
    } else if (!values.password) {
      errors.password = "Please enter your password";
    }

    if (values.username) {
      let personFound = persons.some(
        (person) => person.username === values.username
      );
      if (!personFound) {
        errors.username = "Invalid username";
      }
    } else if (values.password) {
      let personFound = persons.some(
        (person) => person.password === values.password
      );
      if (!personFound) {
        errors.password = "Invalid password";
      }
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      if (formik.errors.length > 0) {
        void 0;
      } else {
        for (let i of persons){
          if  (values.username === i.username && values.password === i.password){
            localStorage.setItem("personInStorage", JSON.stringify(i))
            navigate('/')
          }
        }
      }
    },
    validate,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.username && formik.touched.username && (
            <div>{formik.errors.username}</div>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.username && formik.touched.username && (
            <div>{formik.errors.username}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
