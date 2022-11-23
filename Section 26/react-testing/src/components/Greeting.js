import React, { useState } from "react";

const Greeting = () => {
  const [isTextChanged, setIsTextChanged] = useState(false);

  const changeText = () => {
    setIsTextChanged(true);
  };

  return (
    <div>
      <h1>Greeting</h1>
      {!isTextChanged ? <p>It's good to see you!</p> : <p>Changed!</p>}
      <p>Hello World!</p>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
};

export default Greeting;
