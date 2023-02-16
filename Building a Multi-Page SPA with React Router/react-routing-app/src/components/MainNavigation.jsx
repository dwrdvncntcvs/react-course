import React from "react";
import { Link, NavLink } from "react-router-dom";
import css from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? css.active : "")}
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? css.active : "")}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
