import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

export default function NewExpense({ onSetExpenses }) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseData = (dataEntry) => {
    const expenseData = {
      ...dataEntry,
      id: Math.random().toString(),
    };

    onSetExpenses(expenseData);
  };

  const showAction = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {!!!showForm ? (
        <button onClick={showAction}>Add Expenses</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          showAction={showAction}
        />
      )}
    </div>
  );
}
