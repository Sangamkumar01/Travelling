import React from 'react';
import './Card.css'

const Card = (props) => {
  return (
    <div className='card_container'>
      <img src={props.image}/>
      <div className='card_text'>
        <h3>{props.city}</h3>
        <h4>{props.description}</h4>
      </div>
    </div>
  )
}

export default Card
