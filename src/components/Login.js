import { useFormik } from "formik";
import React from "react";
import useFetch from "../useFetch.js";

const Login = () => {
  const { data: persons, error } = useFetch("htp://localhost:7000/persons");

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Please enter your username";
    } else if (!values.password) {
      errors.password = "Please enter your password";
    }

    if (values.username) {
      let personFound = persons.some(
        (person) => (person.username = values.username)
      );
      if (!personFound) {
        errors.username = "Invalid username";
      }
    } else if (values.password) {
      let personFound = persons.some(
        (person) => (person.password = values.password)
      );
      if (!personFound) {
        errors.password = "Invalid username";
      }
    }
    return errors;
  };
  const formik = () =>
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit: () => {
        if(formik.errors.length > 0){
            void(0)
        }else{
            console.log('Person found')
        }
      },
      validate,
    });

  return <div></div>;
};

export default Login;
