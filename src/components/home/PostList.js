import React from 'react'

const PostList = ({posts, postsError}) => {
  return (
    <div>
{postsError && <p>{postsError}</p>}
     {posts && posts.map((post) => <div key={post.id}>{post.creatorFirstName} <img src={post.creatorDp} width='150px'/></div>)} 
    </div>
  )
}

export default PostList