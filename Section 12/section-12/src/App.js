import React, { useCallback, useState } from "react";

import "./App.css";
import Demo from "./components/Demo/Demo";
import Button from "./components/UI/Button/Button";

function App() {
  const [showP, setShowP] = useState(false);

  console.count("APP RUNNING...");

  const showParagraphAction = useCallback(() => {
    setShowP((prev) => !prev);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showP} />
      <Button onClick={showParagraphAction}>Show Paragraph</Button>
    </div>
  );
}

export default App;
