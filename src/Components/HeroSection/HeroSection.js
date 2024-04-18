import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const HeroSection = ({ data, setData, originalData }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search == "") {
      setData(originalData);
    } else {
      let filterData = data.filter((item) =>
        item.city.toLowerCase().includes(search)
      );
      setData(filterData);
    }
  }, [search, data]);

  console.log(data);

  return (
    <div className="hero_section_container">
      <h1>Welcome to TripKaro</h1>
      <h2>Explore the world with fantastic places to venture around</h2>

      {/* search bar */}
      <input
        type="text"
        placeholder="Search a city"
        value={search}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

export default HeroSection;
