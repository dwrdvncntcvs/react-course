import React from "react";

import Card from "./UI/Card";
import "./Auth.css";
import useAuth from "../hooks/useAuth";

const Auth = () => {
  const { loginAction } = useAuth();

  const loginHandler = () => loginAction();

  return (
    <div className="auth">
      <Card>
        <h2>You are not authenticated!</h2>
        <p>Please log in to continue.</p>
        <button onClick={loginHandler}>Log In</button>
      </Card>
    </div>
  );
};

export default Auth;
