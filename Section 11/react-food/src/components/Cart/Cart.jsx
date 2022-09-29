import React from "react";
import { useCartContext } from "../../hooks/cartHooks";
import { Modal } from "../UI";
import style from "./cart.module.css";
import CartItem from "./CartItem/CartItem";

const Cart = ({ onHideCart }) => {
  const { items, totalAmount } = useCartContext();

  const cartItemRemove = (id) => {};

  const addCartItem = (item) => {};

  const cartItems = items.map(({ id, name, amount, price }) => (
    <CartItem
      key={id}
      amount={amount}
      name={name}
      price={price}
      onRemove={cartItemRemove.bind(null, id)}
      onAdd={addCartItem.bind(null, id)}
    />
  ));

  return (
    <Modal onClose={onHideCart}>
      <ul className={style["cart-items"]}>{cartItems}</ul>
      <div className={style.total}>
        <span>Total Amount: </span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        {items.length > 0 && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
