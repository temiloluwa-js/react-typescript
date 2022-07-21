import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import { CustomButton } from "./components/html/Button";
import CustomInput from "./components/html/CustomInput";
import { Oscar } from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { RandomNumber } from "./restriction/RandomNumber";
import { Toast } from "./templateliterals/Toast";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  //   firstname: 'Bruce',
  //   lastname: 'Wayne'
  // }

  /**Setter functions in React have a Typescript type of React.Dispatch<React.SetStateAction<the type of the actual state e.g string, boolean>>*/

  const personList = [
    { first: "Vishwas", last: "Ogbeni" },
    { first: "Salma", last: "Widad" },
  ];
  return (
    <div className="App">
      <Person name={personName} />
      <Greet name="Vishwas" messageCount={20} isLoggedIn={false} />
      <PersonList names={personList} />
      <RandomNumber value={10} isNegative />
      <Oscar>
        <Heading>Oscar goes to Dicaprio</Heading>
      </Oscar>
      <Heading>Placeholder text</Heading>
      <CustomButton variant="primary">Primary Button</CustomButton>
      {/* <CustomInput variant="secondary">Breh</CustomInput> */}
      <Toast position="center" />
    </div>
  );
}

export default App;
