import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../useFetch'

const FriendProfile = () => {
    const {username} = useParams()
    const person = useFetch(`http://localhost:7000/people?username=${username}`)
    person && console.log(person.data)
  return (
    <div>{person && <p>{person.firstName}</p>}</div>
  )
}

export default FriendProfile