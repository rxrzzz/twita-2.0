import React from 'react'
import useFetch from '../../useFetch'
import Header from './Header'
import PostList from './PostList'
import Trending from './Trending'

const Home = () => {
    const person = JSON.parse(localStorage.getItem("personInStorage"))
    const {data: people, error: peopleError} = useFetch('http://localhost:7000/people')
    const {data: posts, error: postsError} = useFetch('http://localhost:3010/posts')
    
  return (
    <div>
        <Header person={person}/>
        <Trending people={people} error={peopleError}/>
        <PostList posts={posts} error={postsError}/>

    </div>
  )
}

export default Home