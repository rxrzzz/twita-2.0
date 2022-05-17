import React from 'react'

const Profile = () => {
  const person = JSON.parse(localStorage.getItem("personInStorage"));
  const { data: posts, error: postsError } = useFetch(
    "http://localhost:3010/posts"
  );
  
  return (
    <div>Profile</div>
  )
}

export default Profile