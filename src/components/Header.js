import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = ({ person }) => {
  return (
    <div>
      <div className={styles.person_details}>
        {person.firstName}
        {person.lastName}
      </div>
      <div className={styles.create_post}>
        
      </div>
      <img src={person.dpUrl} alt="Profile Picture" width="150px" />
      <Link to="/create_post">Create Post</Link>
    </div>
  );
};

export default Header;
