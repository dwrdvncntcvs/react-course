import React from "react";
import { mealsImage } from "../../../assets/images";
import HeaderCardButton from "../HeaderCardButton/HeaderCardButton";
import style from "./header.module.css";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={style.header}>
        <h1>React Meals</h1>
        <HeaderCardButton onClick={onShowCart} />
      </header>
      <div className={style["main-image"]}>
        <img src={mealsImage} alt="A table full of foods." />
      </div>
    </>
  );
};

export default Header;
