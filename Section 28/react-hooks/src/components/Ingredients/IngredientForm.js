import React, { memo, useState } from "react";
import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";
import "./IngredientForm.css";

const IngredientForm = ({ onAddIngredient, loading }) => {
  const [inputData, setInputData] = useState({ title: "", amount: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    for (let data in inputData) {
      if (inputData[data].trim() === "") return;
    }

    onAddIngredient(inputData);
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputData.title}
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputData.amount}
              name="amount"
              onChange={handleChange}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {loading ? <LoadingIndicator /> : null}
          </div>
        </form>
      </Card>
    </section>
  );
};

export default memo(IngredientForm);
