import React from "react";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import style from "./headerCardButton.module.css";

const HeaderCardButton = ({ onClick }) => {
  return (
    <button className={style.button}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>3</span>
    </button>
  );
};

export default HeaderCardButton;
