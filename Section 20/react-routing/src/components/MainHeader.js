import React from "react";
import { NavLink } from "react-router-dom";
import style from "./mainHeader.module.css";

export default function MainHeader() {
  return (
    <div className={style.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : null)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? style.active : null)}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
