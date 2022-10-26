import React from "react";
import { useCartContext } from "../../../hooks/cartHooks";
import style from "./mealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = ({ name, description, price, id }) => {
  const { addItem } = useCartContext();

  const addToCart = (amount) => {
    const data = { id, name, price, amount };

    addItem(data)
  };

  return (
    <li className={style.meal}>
      <div>
        <h3>{name}</h3>
        <p className={style.description}>{description}</p>
        <p className={style.price}>{`$${price}`}</p>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
