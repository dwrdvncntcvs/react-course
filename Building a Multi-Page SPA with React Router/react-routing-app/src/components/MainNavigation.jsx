import React from "react";
import { Link } from "react-router-dom";
import css from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
