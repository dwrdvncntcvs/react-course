import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const { isLoggedIn, onLogout } = useAuthContext();

  console.log("State: ", isLoggedIn);

  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
