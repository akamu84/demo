import React from "react";

const Card = ({ name, homeworld }) => (
  <div>
    <h2>{name}</h2>
    <p>{homeworld}</p>
  </div>
);

export default Card;
