import { useFormik } from "formik";
import React from "react";
import useFetch from "../useFetch.js";
import styles from "./styles/Register.js";

const Register = () => {
  const { data: profilePic } = useFetch(
    `https://avatars.dicebear.com/api/${formik.values.dpStyle}/${formik.values.firstName}.svg?background=%23${formik.values.dpColor}`
  );
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      username: "",
      password: "",
      confirmPassword: "",
      dpStyle: "",
      dpColor: "",
      dpUrl:
        "https://avatars.dicebear.com/api/male/john.svg?background=%23000000",
    },
    onSubmit: () => {
      console.log(values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.dp_section}>
          <div className={styles.dp}>
            <img src="" alt="" />
          </div>
          <div className={styles.dp_form}>
            <select
              name="profilePicStyle"
              id=""
              value={formik.values.dpStyle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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

            <input
              type="color"
              name="color"
              value={formik.values.dpColor}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className={styles.personal_details}>
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
                type="text"
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
                type="text"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="text"
                name="firstName"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <button style={styles.button} type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
