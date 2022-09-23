import React from "react";
import { Card } from "../Layout";
import ExpenseDate from "./ExpenseDate";
import "./expenseItem.css";

export default function ExpenseItem({ expense }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">${expense.amount}</div>
        </div>
      </Card>
    </li>
  );
}
