import React from "react";
import style from "./availableMeals.module.css";
import { DUMMY_MEALS } from "../../../data/data-meals";
import { Card } from "../../UI";
import MealItem from "../MealItem/MealItem";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(({ name, description, price, id }) => (
    <MealItem
      name={name}
      description={description}
      price={price}
      id={id}
      key={id}
    />
  ));

  return (
    <section className={style.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
