import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({person}) => {
  return (
    <div>
        {person.firstName}
        {person.lastName}
        <img src={person.dpUrl} alt="Profile Picture" width='150px'/>
        <Link to='/create_post'>Create Post</Link>
    </div>
  )
}

export default Header