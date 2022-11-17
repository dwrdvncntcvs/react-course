import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/auth">Login</Link>
          </li>
          {isLoggedIn && (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
