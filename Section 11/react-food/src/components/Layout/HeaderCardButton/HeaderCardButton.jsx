import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useCartContext } from "../../../hooks/cartHooks";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import style from "./headerCardButton.module.css";

const HeaderCardButton = ({ onClick }) => {
  const [buttonBump, setButtonBump] = useState(false);
  const { items } = useCartContext();

  const numberOfItems = items.reduce((prev, cur) => prev + cur.amount, 0);

  const btnClasses = `${style.button} ${buttonBump ? style.bump : ""}`;

  useEffect(() => {
    if (items.length < 1) return;

    setButtonBump(true);

    const timeout = setTimeout(() => {
      setButtonBump(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCardButton;
