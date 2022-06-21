import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Diana",
      last: "Price",
    },
  ];

  const newNames = [
    "Hello", "Hola", "Bora Bora"
  ]

  return (
    <div className="App">
      <Greet name="Vishwas" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={newNames}/>
    </div>
  );
}

export default App;
