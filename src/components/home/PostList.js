import React from 'react'

const PostList = ({posts, postsError}) => {
  return (
    <div>
     {posts && posts.map((post) => <div key={post.id}>{post.creatorFirstName} <img src={post.creatorDp}/></div>)} 
    </div>
  )
}

export default PostList