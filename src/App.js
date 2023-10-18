//import React from "react";
import { useState, useRef } from "react";
import "./App.css";
//import { useState } from "react";

const App = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const [result, setResult] = useState(0);

  //function for addition
  function add(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  //function for subtraction
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  //function for multition
  function multiply(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  //function for division
  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  //function for resetting input
  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = 0;
  }

  //function for resetting result
  function resetResult(e) {
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simple Calcultor App</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {result}
        </p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={add}>Add</button> 
        <button onClick={minus}>Subtract</button> 
        <button onClick={multiply}>Multiply</button> 
        <button onClick={divide}>Divide</button> 
        
        <button onClick={resetInput}>Reset Input</button> 
        <button onClick={resetResult}>Reset Result</button> 
      </form>
    </div>
  );
}

export default App;