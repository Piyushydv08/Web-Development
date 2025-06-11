import React from 'react'
import piyushpic from '../assets/me1.jpg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.img} alt={props.name} />
      <p id='user-desc'>Description of {props.name}</p>
    </div>
  )
}

export default UserCard
