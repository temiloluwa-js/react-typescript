import React from "react";
import "./App.css";
import { Button } from "./components/Button";

function App() {

  // const handleClick = () => {
  //   console.log('Button clicked')
  // }
  return (
    <div className="App">

      <Button handleClick={(event) => {console.log('Button clicked', event)}}/>

    </div>
  );
}

export default App;
