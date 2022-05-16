import React from "react";
import useFetch from "../useFetch";
import Header from "./Header";
import PostList from "./PostList";
import styles from "../styles/Home.module.css";

const Home = () => {
  const person = JSON.parse(localStorage.getItem("personInStorage"));
  const { data: posts, error: postsError } = useFetch(
    "http://localhost:3010/posts"
  );

  return (
    <div>
      <div className={styles.header}>
        <Header person={person} />
      </div>
      <div className={styles.postlist}>
        <PostList posts={posts} error={postsError} />
      </div>
    </div>
  );
};

export default Home;
