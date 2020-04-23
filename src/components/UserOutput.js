import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className='UserOutput'> 
      <p> You are amazing, {props.userName}</p>
      <p>I have a girlfriend</p>
    </div>
  )
}

export default UserOutput
