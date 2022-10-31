import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = ({ title, price, description, id }) => {
  const dispatch = useDispatch();

  const addToCartAction = () => {
    const data = {
      name: title,
      price,
      id,
    };

    dispatch(addItem(data));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartAction}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
