import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (dateFilter) => {
    setFilteredYear(dateFilter);
  };
  const filteredArrExpenses = props.expenses.filter((e) => {
    return filteredYear === e.date.getFullYear().toString();
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        <ExpensesList items={filteredArrExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
