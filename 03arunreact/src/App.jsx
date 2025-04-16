import { useState } from "react";
import "./App.css"; // Ensure you have the CSS file for styling

function Example() {
  const [counter, setcounter] = useState(15);

  const addvalue = () => {
    setcounter(prevCounter => prevCounter + 5);
  };

  const removevalue = () => {
    setcounter(prevCounter => prevCounter - 5);
  };

  return (
    <div className="container"> {/* Wrapped in a div with centering styles */}
      <button onClick={addvalue} >Add Value {counter}</button> <br />
      <button onClick={removevalue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </div>
  );
}

export default Example;