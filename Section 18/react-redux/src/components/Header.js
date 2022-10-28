import { useDispatch } from "react-redux";
import { signOut, useAuthState } from "../features/authSlice";
import classes from "./Header.module.css";

const Header = () => {
  const { isAuth } = useAuthState();
  const dispatch = useDispatch();

  const signOutAction = () => {
    dispatch(signOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>

            <li>
              <button onClick={signOutAction}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
