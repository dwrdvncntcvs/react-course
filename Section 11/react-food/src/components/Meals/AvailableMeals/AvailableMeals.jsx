import React from "react";
import style from "./availableMeals.module.css";
import { DUMMY_MEALS } from "../../../data/data-meals";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(({ name, id }) => <li key={id}>{name}</li>);

  return (
    <section className={style.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
