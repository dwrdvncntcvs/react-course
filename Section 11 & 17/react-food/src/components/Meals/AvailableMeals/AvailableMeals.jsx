import React from "react";
import style from "./availableMeals.module.css";
import { Card } from "../../UI";
import MealItem from "../MealItem/MealItem";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../../utils/variables";
import { useCallback } from "react";
import useHttp from "../../../hooks/useHttp";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { error, loading, request } = useHttp();

  const transformData = useCallback((data) => {
    const mealsData = [];

    for (let key in data) {
      mealsData.push({ id: key, ...data[key] });
    }

    setMeals(mealsData);
  }, []);

  useEffect(() => {
    request(`${BASE_URL}/meals.json`, {}, transformData);
  }, [transformData, request]);

  const mealsList = meals.map(({ name, description, price, id }) => (
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
        {!loading ? <ul>{mealsList}</ul> : <p>Loading...</p>}
        {error.length > 0 && !loading && <p>{error}</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
