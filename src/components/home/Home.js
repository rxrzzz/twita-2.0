import React from 'react'
import useFetch from '../../useFetch'
import CommentList from './CommentList'
import Header from './Header'
import PostList from './PostList'


const Home = () => {
    const person = JSON.parse(localStorage.getItem("personInStorage"))
    const {data: posts, error: postsError} = useFetch('http://localhost:3010/posts')
    const {data: comments, error: commentsError} = useFetch('http://localhost:3020/comments')
    
  return (
    <div>
        <Header person={person}/>
        <PostList posts={posts} error={postsError}/>

    </div>
  )
}

export default Home