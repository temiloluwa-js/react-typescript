import React from "react";
import "./App.css";
import { CustomButton } from "./components/html/Button";
import CustomInput from "./components/html/CustomInput";
import { RandomNumber } from "./restriction/RandomNumber";
import { Toast } from "./templateliterals/Toast";

function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isNegative/>
      <CustomButton variant="primary">Primary Button</CustomButton>
      <CustomInput variant="secondary">Breh</CustomInput>
      <Toast position="center"/>
    </div>
  );
}

export default App;
