import React from "react";
import { NavLink } from "react-router-dom";
import style from "./MainNavigation.module.css";
const MainNavigation = () => {
  const links = [
    {
      to: "/quotes",
      label: "All Quotes",
    },
    {
      to: "/new-quote",
      label: "Add Quote",
    },
  ];

  return (
    <header className={style.header}>
      <div className={style.logo}>Great Quotes</div>
      <nav className={style.nav}>
        <ul>
          {links.map(({ label, to, className }, i) => (
            <li key={i}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? style.active : null)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
