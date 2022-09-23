import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./expensesList.css";

export default function ExpensesList({ filteredExpenses }) {
  return (
    <ul className="expenses-list">
      {filteredExpenses.length === 0 && (
        <h2 className="expenses-list__fallback ">No expenses found.</h2>
      )}
      {filteredExpenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </ul>
  );
}
