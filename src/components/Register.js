import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import styles from "../styles/Register.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const Register = () => {
  /*The use navigate method is meant for switching between routes */
  const history = useNavigate();
  const { data: profiles } = useFetch("http://localhost:7000/people");
  const [dpStyle, setDpStyle] = useState("male");
  const [dpColor, setDpColor] = useState("000000");
  const [dpUrl, setDpUrl] = useState(
    "https://avatars.dicebear.com/api/male/john.svg?background=%23000000"
  );

  useEffect(() => {
    setDpUrl(
      `https://avatars.dicebear.com/api/${dpStyle}/${dpStyle}.svg?background=%23${dpColor.replace(
        "#",
        ""
      )}`
    );
  }, [dpStyle, dpColor]);

  /*Formik is a React library used for handling form validations.
  It is a tedious process using HTML Constraints and the Constraints Validation API */

  const validate = (values) => {
    const errors = {};

    if (values.username) {
      for (let i of profiles) {
        if (i["username"] == values.username) {
          errors.username = "username not available";
        }
      }
    } else if (!values.username) {
      errors.username = "enter your username";
    }

    if (!values.firstName) {
      errors.firstName = "enter your first name";
    } else if (!values.lastName) {
      errors.lastName = "enter your last name";
    } else if (!values.dateOfBirth) {
      errors.dateOfBirth = "choose date of birth";
    } else if (!values.username) {
      errors.username = "enter your desired username";
    }

    if (!values.password) {
      errors.password = "enter a password";
    } else if (!values.confirmPassword) {
      errors.confirmPassword = "please confirm your password";
    }

    if (values.password != values.confirmPassword) {
      errors.confirmPassword = "input the correct password";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      username: "",
      password: "",
      confirmPassword: "",
    },

    /*On Submit, the values in the form should be sent to the people server and then redirect them to the login page.  */

    onSubmit: () => {
      axios
        .post("http://localhost:7000/people", {
          ...formik.values,
          dpUrl: dpUrl,
        })
        .then(history("/login"));
    },
    validate,
  });

  /*Read up on Formik from their website:  https://formik.org ,
    or watch this Youtube tutorial: https://www.youtube.com/watch?v=bMSHmf_ckM8 */

  //   <div className={styles.dp_form}>

  // </div>

  return (
    <div className={styles.registration_form}>
      <div className={styles.title}>
        <h1>Create Profile</h1>
      </div>
      <div className={styles.dp_form}>
        <img src={dpUrl} alt="#" />
        <div className={styles.dp_form_details}>
          <div>
            <label htmlFor="profilePicStyle">Picture Type</label>
            <select
              name="profilePicStyle"
              onChange={(e) => setDpStyle(e.target.value)}
            >
              <option value="adventurer">Adventurer</option>
              <option value="adventurer-neutral">Adventurer Neutral</option>
              <option value="avataaars">Avatars</option>
              <option value="big-ears">Big Ears</option>
              <option value="big-ears-neutral">Big Ears Neutral</option>
              <option value="big-smile">Big Smile</option>
              <option value="bottts">Bottts</option>
              <option value="croodles">Croodles</option>
              <option value="croodles-neutral">Croodles Neutral</option>
              <option value="identicon">Identicon</option>
              <option value="micah">Micah</option>
              <option value="miniavs">Miniavs</option>
              <option value="open-peeps">Open Peeps</option>
              <option value="personas">Personas</option>
              <option value="pixel-art">Pixel Art</option>
              <option value="pixel-art-neutral">Pixel Art Neutral</option>
            </select>
          </div>
          <div>
            <label htmlFor="color">Color</label>
            <input
              type="color"
              name="color"
              onChange={(e) => setDpColor(e.target.value)}
            />
          </div>
        </div>
      </div>

      <main className={styles.details_form}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <p className={styles.error}>{formik.errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <p className={styles.error}>{formik.errors.lastName}</p>
            )}
          </div>

          <div>
            <label htmlFor="dateOfBirth">Date Of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formik.values.dateOfBirth}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
              <p className={styles.error}>{formik.errors.dateOfBirth}</p>
            )}
          </div>

          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <p className={styles.error}>{formik.errors.username}</p>
            )}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className={styles.error}>{formik.errors.password}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className={styles.error}>{formik.errors.confirmPassword}</p>
              )}
          </div>

          <button className={styles.button} type="submit">
            Register
          </button>
        </form>
      </main>
      <p className={styles.footer}>
        Already have an account? <Link to="/login">Login.</Link>
      </p>
    </div>
  );
};

export default Register;
