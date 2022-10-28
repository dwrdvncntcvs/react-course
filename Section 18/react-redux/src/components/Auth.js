import { useDispatch } from "react-redux";
import { signIn } from "../features/authSlice";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  const signInAction = (e) => {
    e.preventDefault();

    dispatch(signIn());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={signInAction}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
