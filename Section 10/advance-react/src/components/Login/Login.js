import React, { useEffect, useState, useReducer, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import { useAuthContext } from "../../hooks/useAuthContext";
import Input from "../UI/Input/Input";

const EMAIL_STATE = { value: "", isValid: null };
const PASSWORD_STATE = { value: "", isValid: null };

const emailReducer = (state, action) => {
  switch (action.type) {
    case "set_email":
      return { ...state, value: action.payload };
    case "email_validity":
      return { ...state, isValid: state.value.includes("@") };
    default:
      return state;
  }
};

const passwordReducer = (state, action) => {
  switch (action.type) {
    case "set_password":
      return { ...state, value: action.payload };
    case "password_validity":
      return { ...state, isValid: state.value.trim().length > 6 };
    default:
      return state;
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const { onLogin } = useAuthContext();

  const [emailState, emailDispatch] = useReducer(emailReducer, EMAIL_STATE);
  const [passwordState, passwordDispatch] = useReducer(
    passwordReducer,
    PASSWORD_STATE
  );

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    console.log("First Effect");

    return () => {
      console.log("Clean Up Effect");
    };
  }, []);

  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log("Debouncing...");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    const value = event.target.value;
    emailDispatch({ type: "set_email", payload: value });

    // setFormIsValid(
    //   value.includes("@") && passwordState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({ type: "set_password", payload: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    emailDispatch({
      type: "email_validity",
    });
  };

  const validatePasswordHandler = () => {
    passwordDispatch({ type: "password_validity" });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!emailState.isValid) emailRef.current.activate();
    else if (!passwordState.isValid) passwordRef.current.activate();

    if (formIsValid) onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          isValid={emailState.isValid === false}
          htmlFor="email"
          type="email"
          id="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          label="E-mail"
        />
        <Input
          ref={passwordRef}
          isValid={passwordState.isValid === false}
          htmlFor="password"
          type="password"
          id="password"
          label="Password"
          value={passwordState.valid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
