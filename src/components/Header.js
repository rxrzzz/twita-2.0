import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = ({ person }) => {
  return (
    <div className={styles.header}>
      <div className={styles.person_details}>
        <Link to='/profile'><img src={person.dpUrl} alt="Profile Picture" /></Link>
      </div>
      <div className={styles.create_post}>
        <Link to="/create_post" className={styles.link}>What's on your mind?</Link>
      </div>
    </div>
  );
};

export default Header;
