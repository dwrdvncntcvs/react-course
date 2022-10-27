import React, { useState } from "react";
import { useCartContext } from "../../hooks/cartHooks";
import useHttp from "../../hooks/useHttp";
import { BASE_URL } from "../../utils/variables";
import { Modal } from "../UI";
import style from "./cart.module.css";
import CartItem from "./CartItem/CartItem";
import CheckOut from "./CheckOut/CheckOut";

const Cart = ({ onHideCart }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const { items, totalAmount, addItem, removeItem } = useCartContext();
  const { loading, request, error } = useHttp();
  const [didSubmit, setDidSubmit] = useState(false);

  const cartItemRemove = (id) => {
    console.log(id);
    removeItem(id);
  };

  const addCartItem = (item) => {
    addItem(item);
  };

  const checkOut = () => {
    setIsCheckout(true);
  };

  const submitOrders = async (userData) => {
    const body = {
      user: userData,
      orderedItems: items,
    };

    console.log(body);

    const data = await request(`${BASE_URL}/orders.json`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (data.ok) {
      setDidSubmit(true);
    }
  };

  const cartItems = items.map(({ id, name, amount, price }) => (
    <CartItem
      key={id}
      amount={amount}
      name={name}
      price={price}
      onRemove={cartItemRemove.bind(null, id)}
      onAdd={addCartItem.bind(null, { id, name, amount, price })}
    />
  ));

  const actionsBtn = (
    <div className={style.actions}>
      <button className={style["button--alt"]} onClick={onHideCart}>
        Close
      </button>
      {items.length > 0 && (
        <button className={style.button} onClick={checkOut}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose={onHideCart}>
      {loading && <p>Loading...</p>}
      {!loading && !didSubmit && (
        <>
          <ul className={style["cart-items"]}>{cartItems}</ul>
          <div className={style.total}>
            <span>Total Amount: </span>
            <span>{totalAmount.toFixed(2)}</span>
          </div>
          {isCheckout ? (
            <CheckOut onConfirm={submitOrders} onClose={onHideCart} />
          ) : (
            actionsBtn
          )}
        </>
      )}
      {didSubmit && !loading && (
        <>
          <p>Order submitted...</p>
          <div className={style.actions}>
            <button className={style.button} onClick={onHideCart}>
              Close
            </button>
          </div>
        </>
      )}
      {error.trim().length > 0 && <p>{error}</p>}
    </Modal>
  );
};

export default Cart;
