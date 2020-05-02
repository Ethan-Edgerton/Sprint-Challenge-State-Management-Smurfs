import React from "react";
import styled from "styled-components";

const SmurfCard = ({ smurf, removeSmurf }) => {
  return (
    <Card>
      <h2>Meet, {smurf.name}!</h2>
      <p>
        {smurf.name} is {smurf.age} years old and is {smurf.height} feet tall!
      </p>
      <button onClick={() => removeSmurf(smurf.id)}>Remove Smurf</button>
    </Card>
  );
};

export default SmurfCard;

const Card = styled.div`
  background-color: dodgerblue;
  width: 60%;
  border-radius: 5px;
  padding: 10px 0;
  margin: 10px auto;
  color: white;
  text-shadow: black 1px 1px 1px;
  button {
    background: dodgerblue;
    color: white;
    border: solid black 3px;
    text-shadow: black 1px 1px 1px;
    border-radius: 4px;
    padding: 10px;
  }
`;
