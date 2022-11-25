import React from "react";
import Auth from "./components/Auth";

import Ingredients from "./components/Ingredients/Ingredients";
import useAuth from "./hooks/useAuth";

const App = (props) => {
  const { isAuth } = useAuth();

  return !isAuth ? <Auth /> : <Ingredients />;
};

export default App;
