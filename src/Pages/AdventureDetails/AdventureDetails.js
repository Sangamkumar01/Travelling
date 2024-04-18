import React, { useEffect, useState } from 'react';
import './AdventureDetails.css';
import { useParams } from 'react-router-dom';
import Form from '../../Components/Form/Form';

const AdventureDetails = () => {

  const {id} = useParams();
  const [adventureData, setAdventureData] = useState();

  const fetchData =async() =>  {
    let response =await fetch(`https://makemytrip-backend-w2d2.onrender.com/adventures/detail?adventure=${id}`);
    response=await response.json();
    setAdventureData(response)
  }
  useEffect(()=>{
    fetchData();
  },[])

  {console.log(adventureData)}
  return (

    <div className='adventure-details-container'>
      <div className='adventure-details-flex-1'>
        <h1>{adventureData?.name}</h1>
        <h3>{adventureData?.subtitle}</h3>
        <img src={adventureData?.images[0]} alt='adventure-image'/>
        <div>
          <hr></hr>
        <h3>About the Experience</h3>
        <p>{adventureData?.content}</p>
        </div>
      </div>
      <div className='adventure-details-flex-2'>
        {adventureData?.available ? <Form adventureId={adventureData?.id}/> : <h2>sold out</h2>}
      </div>
    </div>
  )
}

export default AdventureDetails
