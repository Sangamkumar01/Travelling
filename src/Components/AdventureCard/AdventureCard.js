import React from 'react';
import './AdventureCard.css'

const AdventureCard = (props) => {

  return (
    <div className='adventure_card_container'>

      <img src={props.image}></img>
      <div className='adventure_card_text'>
        <div className='adventure_name_price'>
            <div>{props.name}</div>
            <div><b>₹ {props.costPerHead}</b></div>
        </div>
        <div className='adventure_duration'>
            <div>Duration</div>
            <div><b>{props.duration} Hours</b></div>
        </div>
      </div>

      <div className='adventure_tag'>
        <span>{props.category}</span>
      </div>
    </div>
  )
}

export default AdventureCard
