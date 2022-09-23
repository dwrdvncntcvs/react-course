import React from "react";
import Input from "../../../UI/Input/Input";
import style from "./mealItem.module.css";

const MealItemForm = ({ id }) => {
  return (
    <form className={style.form}>
      <Input
        label={"Add"}
        input={{
          id: `amount_${id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default MealItemForm;
