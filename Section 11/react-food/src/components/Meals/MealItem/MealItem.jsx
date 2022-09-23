import React from "react";
import style from "./mealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";

const MealItem = ({ name, description, price, id }) => {
  return (
    <li className={style.meal}>
      <div>
        <h3>{name}</h3>
        <p className={style.description}>{description}</p>
        <p className={style.price}>{`$${price}`}</p>
      </div>
      <div>
        <MealItemForm id={id}/>
      </div>
    </li>
  );
};

export default MealItem;
