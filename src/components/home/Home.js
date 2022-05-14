import React from 'react'
import useFetch from '../../useFetch'
import Header from './Header'
import PostList from './PostList'


const Home = () => {
    const person = JSON.parse(localStorage.getItem("personInStorage"))
    const {data: posts, error: postsError} = useFetch('http://localhost:3010/posts')
    
  return (
    <div>
        <Header person={person}/>

        <PostList posts={posts} error={postsError}/>

    </div>
  )
}

export default Home