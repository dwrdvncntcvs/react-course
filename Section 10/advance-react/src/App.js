import React from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { isLoggedIn } = useAuthContext();

  return (
    <>
      <MainHeader />
      <main>{!isLoggedIn ? <Login /> : <Home />}</main>
    </>
  );
}

export default App;
