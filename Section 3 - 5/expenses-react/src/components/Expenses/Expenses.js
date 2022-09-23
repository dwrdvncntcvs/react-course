import React, { useState } from "react";
import "./expenses.css";
import { Card } from "../Layout";
import { ExpenseFilter } from "../ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const currentYear = new Date().getFullYear().toString();

export default function Expenses({ expenses }) {
  const [selectedDate, setSelectedDate] = useState(currentYear);

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === +selectedDate
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
