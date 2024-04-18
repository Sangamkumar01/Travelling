import React, {useState, useEffect} from 'react'
import Header from '../../Components/Header/Header';
import HeroSection from '../../Components/HeroSection/HeroSection'
import CardGroup from '../../Components/CardGroup/CardGroup';

const Home = () => {

  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);


  const fetchData = async () => {
    let response = await fetch(
      "https://makemytrip-backend-w2d2.onrender.com/cities"
    );
    response = await response.json();
    setOriginalData(response)
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <HeroSection data={data} setData={setData} originalData={originalData}/>
      <CardGroup data={data}/>
    </div>
  )
}

export default Home
