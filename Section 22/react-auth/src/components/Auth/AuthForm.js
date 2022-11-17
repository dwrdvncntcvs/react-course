import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { FIREBASE_API_KEY } from "../../utils/variables";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitData = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setIsLoading(true);
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:${
      isLogin ? "signInWithPassword" : "signUp"
    }?key=${FIREBASE_API_KEY}`;

    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    try {
      const responseData = await fetch(url, {
        method: "POST",
        body: JSON.stringify(authData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await responseData.json();

      if (!responseData.ok) {
        let errorMessage = "Authentication failed!";

        throw new Error(errorMessage);
      }

      login(data.idToken);
      history.replace("/");
      setIsLoading(false);
    } catch (err) {
      alert(err.message);
      setIsLoading(false);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitData}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passwordRef} required />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending Request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
