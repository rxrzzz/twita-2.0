import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

return <div className={styles.sidebar}>
      <Link to='/' className={styles.link}>twita.</Link>
      <button onClick={handleLogout}><span>📲</span>Log Out</button>
  </div>;
};

export default Sidebar;
