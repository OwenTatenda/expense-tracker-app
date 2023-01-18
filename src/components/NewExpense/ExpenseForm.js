import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const onClickCancelButtonHandler = () => {
    setIsEditing(true);
  };

  const onClickAddButtonHandler = () => {
    setIsEditing(false);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const onSubmitChangeHandler = (event) => {
    event.preventDefault();
    setAmount("");
    setDate("");
    setTitle("");
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
  };
  if (isEditing) {
    return (
      <div className="new-expense__addexpense">
        <button type="submit" onClick={onClickAddButtonHandler}>
          Add Expense
        </button>
      </div>
    );
  }
  return (
    <form action="" onSubmit={onSubmitChangeHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} value={title} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-10-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="cancel" onClick={onClickCancelButtonHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
