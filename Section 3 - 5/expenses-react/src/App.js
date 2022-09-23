import React, { useState } from "react";
import { Expenses } from "./components/Expenses";
import { NewExpense } from "./components/NewExpense";

const EXPENSES = [
  {
    date: new Date(2022, 8, 10),
    title: "Car Insurance",
    amount: 200.0,
    id: Math.random().toString(),
  },
  {
    date: new Date(2022, 7, 10),
    title: "Food Groceries",
    amount: 100.0,
    id: Math.random().toString(),
  },
  {
    date: new Date(2022, 6, 10),
    title: "Loans",
    amount: 1000.0,
    id: Math.random().toString(),
  },
];

function App() {
  const [expenses, setExpenses] = useState(EXPENSES);

  const addExpense = (data) => setExpenses((prev) => [...prev, data]);

  return (
    <div>
      <NewExpense onSetExpenses={addExpense} />
      <Expenses expenses={expenses.reverse()} />
    </div>
  );
}

export default App;

/*
  Classic React Code
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get Started"),
    React.createElement(Expenses, { expenses })
  );
*/
