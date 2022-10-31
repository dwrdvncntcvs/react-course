import { useDispatch } from "react-redux";
import { useCartState } from "../../store/cartSlice";
import { toggle } from "../../store/uiSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const { totalQuantity } = useCartState();
  const dispatch = useDispatch();

  const toggleAction = () => {
    dispatch(toggle());
  };

  return (
    <button className={classes.button} onClick={toggleAction}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
