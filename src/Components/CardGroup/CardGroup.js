import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./CardGroup.css";

const CardGroup = (props) => {


  return (
    <div className="card_group_container">
      {props.data.map((data) => (
        <Link to={`/adventure/${data.id}`}>
          <Card
            city={data.city}
            description={data.description}
            image={data.image}
          />
        </Link>
      ))}
    </div>
  );
};

export default CardGroup;
