import React from "react";
import useFetch from "../useFetch";
import Header from "./Header";
import PostList from "./PostList";
import styles from "../styles/Home.module.css";
import image from "../images/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  const person = JSON.parse(localStorage.getItem("personInStorage"));
  const { data: posts, error: postsError } = useFetch(
    "http://localhost:3010/posts"
  );

  return (
    <div>
      <div>hiiiiiiiiiiiii</div>
      <div>
        <div className={styles.app_header}>
          <Link to="/home">
            <img src={image} alt="Home" />
          </Link>
        </div>
        <div className={styles.header}>
          <Header person={person} />
        </div>
        <main className={styles.postlist}>
          <PostList posts={posts} error={postsError} />
        </main>
      </div>
    </div>
  );
};

export default Home;
