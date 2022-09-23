import React from "react";
import { Modal } from "../UI";
import style from "./cart.module.css";

const Cart = () => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    ({ id, name, amount, price }) => <li key={id}>{name}</li>
  );

  return (
    <Modal>
      <ul className={style["cart-items"]}>{cartItems}</ul>
      <div>
        <span>Total Amount: </span>
        <span>35.62</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]}>Close</button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
