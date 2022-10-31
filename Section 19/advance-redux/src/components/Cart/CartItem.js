import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";
import classes from "./CartItem.module.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id } = item;

  const removeCartItem = () => {
    dispatch(removeItem(id));
  };

  const addCartItem = () => {
    dispatch(addItem({ name: title, price, id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemPrice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeCartItem}>-</button>
          <button onClick={addCartItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
