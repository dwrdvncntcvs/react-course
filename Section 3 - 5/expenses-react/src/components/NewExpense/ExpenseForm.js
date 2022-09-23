import React, { useState } from "react";
import "./expenseForm.css";

export default function ExpenseForm({ onSaveExpenseData, showAction }) {
  const [data, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const onChangeHandler = (e) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const fields = [
    {
      label: "Title",
      type: "text",
      name: "title",
      value: data.title,
      onChange: onChangeHandler,
    },
    {
      label: "Amount",
      type: "number",
      name: "amount",
      min: "0.01",
      step: "0.01",
      value: data.amount,
      onChange: onChangeHandler,
    },
    {
      label: "Date",
      type: "date",
      name: "date",
      min: "2019-01-01",
      max: "2022-12-31",
      value: data.date,
      onChange: onChangeHandler,
    },
  ];

  const submitExpenseForm = (e) => {
    e.preventDefault();

    const expenseData = {
      title: data.title,
      amount: data.amount,
      date: new Date(data.date),
    };

    onSaveExpenseData(expenseData);
    showAction();

    setData({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitExpenseForm}>
      <div className="new-expense__controls">
        {fields.map(
          ({ label, type, min, max, step, onChange, value, name }, i) => (
            <div className="new-expense__control" key={i}>
              <label>{label}</label>
              <input
                name={name}
                type={type}
                min={min}
                max={max}
                step={step}
                onChange={onChange}
                value={value}
              />
            </div>
          )
        )}
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={showAction}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
