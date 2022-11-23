import React, { useState } from "react";
import Output from "./Output/Output";

const Greeting = () => {
  const [isTextChanged, setIsTextChanged] = useState(false);

  const changeText = () => {
    setIsTextChanged(true);
  };

  return (
    <div>
      <h1>Greeting</h1>
      {!isTextChanged ? (
        <Output>It's good to see you!</Output>
      ) : (
        <Output>Changed!</Output>
      )}
      <p>Hello World!</p>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
};

export default Greeting;
