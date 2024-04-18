import React, { useState } from "react";

const Form = ({adventureId}) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    person: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, date, person } = formData;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: `name=${encodeURIComponent(name)}&date=${encodeURIComponent(
        date
      )}&person=${encodeURIComponent(person)}&adventure=${adventureId}`,
    };

    fetch("https://makemytrip-backend-w2d2.onrender.com/reservations/new", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("response", data);
        alert("Success");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed");
      });
  };

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        <br />
        <label>
          Pick Data :
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          ></input>
        </label>

        <br />

        <label>
          Person Count :
          <input
            type="number"
            name="person"
            value={formData.personCount}
            onChange={handleInputChange}
          ></input>
        </label>

        <button type="submit">Book Adventure</button>
      </form>
    </div>
  );
};

export default Form;
