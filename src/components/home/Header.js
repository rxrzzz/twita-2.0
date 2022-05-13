import React from 'react'

const Header = ({person}) => {
  return (
    <div>
        {person.firstName}
        {person.lastName}
        <img src={person.dpUrl} alt="Profile Picture" />
    </div>
  )
}

export default Header