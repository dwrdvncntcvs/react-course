import { useCartState } from "../../store/cartSlice";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cartItems } = useCartState();

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(({ name, quantity, price, totalPrice, id }, i) => (
          <CartItem
            key={i}
            item={{ title: name, quantity, total: totalPrice, price, id }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
