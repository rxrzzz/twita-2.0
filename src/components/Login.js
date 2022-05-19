import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import styles from "../styles/Login.module.css";

const Login = () => {
  const { data: persons, error } = useFetch("http://localhost:7000/people");
  const navigate = useNavigate();

  /*Check Out the Register section of the codebase to understand the validate function and the Formik library */
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Please enter your username";
    } else if (!values.password) {
      errors.password = "Please enter your password";
    }

    if (values.username) {
      let personFound = persons.some(
        (person) => person.username == values.username
      );
      if (!personFound) {
        errors.username = "Invalid username";
      }
    } else if (values.password) {
      let personFound = persons.some(
        (person) => person.password == values.password
      );
      if (!personFound) {
        errors.password = "Invalid password";
      }
    }
    return errors;
  };

  const data = {
    firstName: "Maki",
    lastName: "Zenin",
    dateOfBirth: "2022-04-30",
    username: "maki",
    password: "maki",
    confirmPassword: "maki",
    dpUrl: "https://avatars.dicebear.com/api/croodles-neutral/croodles-neutral.svg?background=%2300ff00",
    id: 7
  }

  const handleGuest = () => {
    localStorage.setItem("personInStorage", JSON.stringify(data))
    navigate('/home')
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnChange: false,
    validateOnBlur: false,

    /*If the form notices an error, it will do nothing on submit.
     If there are no errors however it will store the person's details
     in their local storage and then navigate them to the home page*/

    onSubmit: (values) => {
      if (formik.errors.length > 0) {
        void 0;
      } else {
        for (let i of persons) {
          if (
            values.username === i.username &&
            values.password === i.password
          ) {
            localStorage.setItem("personInStorage", JSON.stringify(i));
            navigate("/home");
          }
        }
      }
    },
    validate,
  });

  return (
    <div className={styles.login_form}>
      {error && <div>{error}</div>}
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.username}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.username && formik.touched.username && (
            <div className={styles.error}>{formik.errors.username}</div>
          )}
        </div>
        <div className={styles.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div className={styles.error}>{formik.errors.password}</div>
          )}
        </div>
        <div className={styles.form_footer}>
          <button type="submit" className={styles.submit_button}>
            Submit
          </button>
          <button className={styles.guest_button} onClick={handleGuest}>Login As Guest</button>
          <p>
            Do not have an account? <Link to="/register">Register.</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
