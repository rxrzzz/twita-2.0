import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import styles from "../styles/Register.module.css";
import image from "../images/register_form_image.jpg";
import axios from "axios";

const Register = () => {
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

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      username: "",
      password: "",
      confirmPassword: "",
      dpUrl: dpUrl,
    },

    onSubmit: () => {
      axios
        .post("http://localhost:7000/people", formik.values)
        .then(
          localStorage.setItem("personInStorage", JSON.stringify(formik.values))
        );
    },
  });

  return (
    <div className={styles.register}>
      <div className={styles.image}>
        <img src={image} alt="#" />
      </div>
      <div className={styles.form_section}>
        <div className={styles.dp_section}>
          <div className={styles.dp}>
            <img src={dpUrl} alt="" width="150px" height="150px" />
          </div>
          <div className={styles.dp_form}>
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
          </div>

          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
