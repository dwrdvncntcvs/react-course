import React from "react";
import { useCartContext } from "../../../hooks/cartHooks";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import style from "./headerCardButton.module.css";

const HeaderCardButton = ({ onClick }) => {
  const { items } = useCartContext();

  const numberOfItems = items.reduce((prev, cur) => prev + cur.amount, 0);

  return (
    <button className={style.button} onClick={onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCardButton;
