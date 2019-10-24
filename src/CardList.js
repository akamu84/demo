import React from "react";
import Card from "./Card";

const CardList = ({ people }) => (
  <div>
    {people.map(user => {
      return (
        <Card key={user.url} name={user.name} homeworld={user.homeworld} />
      );
    })}
  </div>
);

export default CardList;
