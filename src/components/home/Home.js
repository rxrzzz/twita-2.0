import React from 'react'
import useFetch from '../../useFetch'
import Header from './Header'
import PostList from './PostList'
import Trending from './Trending'

const Home = () => {
    const person = JSON.parse(localStorage.getItem("personInStorage"))
    const people = useFetch('http://localhost:7000/people')
    const posts = null
  return (
    <div>
        <Header person={person}/>
        <Trending people={people}/>
        <PostList posts={posts}/>
    </div>
  )
}

export default Home