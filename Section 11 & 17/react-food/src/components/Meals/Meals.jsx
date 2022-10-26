import React from "react";
import AvailableMeals from "./AvailableMeals/AvailableMeals";
import MealSummary from "./MealSummary/MealSummary";

export default function Meals() {
  return (
    <>
      <MealSummary />
      <AvailableMeals />
    </>
  );
}
