import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";
import useFetch from "../useFetch";

const Sidebar = () => {
  const person = JSON.parse(localStorage.getItem("personInStorage"));
  const { data: posts, error: postsError } = useFetch(
    "http://localhost:3010/posts"
  );
  return <div className={styles.sidebar}>
      <p>twita.</p>
      <Link to='/' className={styles.link}><span>👩🏽‍🦲</span>Profile</Link>
      <button><span>📲</span>Log Out</button>
  </div>;
};

export default Sidebar;
