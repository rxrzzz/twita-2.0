import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import backbutton from "../images/back-button.png";
import styles from "../styles/EditProfile.module.css";

const EditProfile = () => {
  const history = useNavigate();
  const person = JSON.parse(localStorage.getItem("personInStorage"));

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
    },

    onSubmit: () => {
      axios
        .put(`http://localhost:7000/people?username=${person.username}`, {
          ...person,
          dpUrl: dpUrl,
          firstName: formik.values.firstName,
          lastName: formik.values.lastName,
          dateOfBirth: formik.values.dateOfBirth,
        })
        .then(history("/login"));
    },
  });

  return (
    <div className={styles.edit_form}>
      <div className={styles.title}>
        <h1>Create Profile</h1>
      </div>
      <div className={styles.dp_form}>
        <img src={dpUrl} alt="Profile Picture" />
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

          <button className={styles.button} type="submit">
            Save
          </button>
        </form>
      </main>
      <p className={styles.footer}>
        Already have an account? <Link to="/login">Login.</Link>
      </p>
    </div>
  );
};

export default EditProfile;
