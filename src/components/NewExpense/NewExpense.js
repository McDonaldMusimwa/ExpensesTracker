import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  let [additem, setadditem] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    //console.log(expenseData)
    setadditem(false)
    props.onAddExpense(expenseData);
  };

  const startaddingHandler = () => {
    setadditem(true);
  };

  const stopaddingHandler = () => {
    setadditem(false);
  };

  return (
    <div className="new-expense">
      {!additem && 
        <button onClick={startaddingHandler} >
          Add new Expense
        </button>
      }
      {additem && <ExpenseForm onCancel={stopaddingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
