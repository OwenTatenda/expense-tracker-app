import "./ExpensesList.css";
import React, { useState } from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense, i) => (
        <ExpenseItem
          key={i}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
