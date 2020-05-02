import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addSmurf } from "../actions";

const Form = ({ addSmurf }) => {
  const [smurfInfo, setSmurfInfo] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSmurfInfo({
      ...smurfInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSmurf = {
      ...smurfInfo,
      id: Date.now(),
    };
    addSmurf(newSmurf);
    setSmurfInfo({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <FormContainer>
      <h2>Add a new smurf!</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={smurfInfo.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          name="age"
          type="number"
          value={smurfInfo.age}
          placeholder="Age"
          onChange={handleChange}
        />
        <input
          name="height"
          type="text"
          value={smurfInfo.height}
          placeholder="Height"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add Smurf!</button>
      </form>
    </FormContainer>
  );
};

export default connect(null, { addSmurf })(Form);

const FormContainer = styled.div`
  input {
    margin: 0 10px;
  }
  button {
    background: dodgerblue;
    text-shadow: black 1px 1px 1px;
    color: white;
    border: solid black 3px;
    border-radius: 4px;
    width: 200px;
    margin-top: 10px;
    padding: 5px 0;
  }
`;
