import React from "react";
import style from "./mealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = ({ name, description, price, id }) => {
  return (
    <li>
      <div className={style.meal}>
        <h3>{name}</h3>
        <p className={style.description}>{description}</p>
        <p className={style.price}>{`$${price}`}</p>
      </div>
      <MealItemForm />
    </li>
  );
};

export default MealItem;
