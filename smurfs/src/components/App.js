import React from "react";
import "./App.css";
import Form from "./Form";
import SmurfList from "./SmurfList";

const App = () => {
  return (
    <div className="App">
      <h1>Smurf App</h1>
      <Form />
      <SmurfList />
    </div>
  );
};

export default App;
