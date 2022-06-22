import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./Container";
import { Input } from "./Input";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";

function App() {
  // const handleClick = () => {
  //   console.log('Button clicked')
  // }
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      />
      <Input  value="" handleInput={(event) => console.log(event)}/>
      <Container styles={{border: '1px solid black', padding: '1rem'}}/> */}
    </div>
  );
}

export default App;
