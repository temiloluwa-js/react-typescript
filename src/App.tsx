import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import { Oscar } from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
      {/* <Heading>Placeholder text</Heading> */}
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio</Heading>
      </Oscar>
      <Greet name="Vishwas"  isLoggedIn={false} />
      {/* <Person name={personName} />
      <PersonList names={newNames}/>
      <Status status="loading"/> */}
    </div>
  );
}

export default App;
