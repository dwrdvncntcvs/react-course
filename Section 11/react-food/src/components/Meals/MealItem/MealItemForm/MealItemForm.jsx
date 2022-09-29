import React, { useRef, useState } from "react";
import Input from "../../../UI/Input/Input";
import style from "./mealItem.module.css";

const MealItemForm = ({ id, onAddToCart }) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const inputRef = useRef();

  const submitEntry = (e) => {
    e.preventDefault();
    const enteredAmount = +inputRef.current.value;

    if (enteredAmount < 1 || enteredAmount > 5) {
      setIsFormValid(false);
      return;
    }

    onAddToCart(enteredAmount);
  };

  return (
    <form className={style.form} onSubmit={submitEntry}>
      <Input
        ref={inputRef}
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
      {!isFormValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
