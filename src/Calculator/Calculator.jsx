import React, { useState } from "react";
import "./Calculator.css";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [result, setResult] = useState(""); // State to store the calculator result

  // Function to evaluate and update the result
  const calculate = () => {
    try {
      const evaluation = eval(result);
      setResult(evaluation);
    } catch (error) {
      setResult("Error");
    }
  };
 

  // Function to handle button clicks and update the result
  const handleClick = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      setResult("");
    } else {
      setResult(result + value);
    }
  };
  
  const Click = () => {
    setResult(eval(result) * 100);
  };


  return (
    <>
    <div className="calculator">
     <div className="calculator-input">
        <div className="result">{result} </div>
      </div>

      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => Click("%")}>%</button>
        <button className="equal" onClick={() => handleClick("=")}> = </button>
        <button className="clear" onClick={() => handleClick("C")}> C </button>
       </div>

    </div>
    <Link to="todo"/>
    <Link to="local-api"/>
    <Link to="search-api"/>
    <Link to="custom-slider"/>
  
    
    </>
  );
};

export default Calculator;

