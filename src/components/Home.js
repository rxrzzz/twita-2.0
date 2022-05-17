import React from "react";
import useFetch from "../useFetch";
import Header from "./Header";
import PostList from "./PostList";
import styles from "../styles/Home.module.css";
import Sidebar from "./Sidebar";

const Home = () => {
  const person = JSON.parse(localStorage.getItem("personInStorage"));
  const { data: posts, error: postsError } = useFetch(
    "http://localhost:3010/posts"
  );

  return (
    <div>
      <Sidebar/>
      <div className={styles.main}>
        <div>
          <Header person={person} />
        </div>
        <main>
          <PostList posts={posts} error={postsError} />
        </main>
      </div>
    </div>
  );
};

export default Home;
