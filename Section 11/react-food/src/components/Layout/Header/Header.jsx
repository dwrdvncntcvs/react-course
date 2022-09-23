import React from "react";
import { mealsImage } from "../../../assets/images";
import HeaderCardButton from "../HeaderCardButton/HeaderCardButton";
import style from "./header.module.css";

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <h1>React Meals</h1>
        <HeaderCardButton />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="A table full of foods." />
      </div>
    </>
  );
};

export default Header;
