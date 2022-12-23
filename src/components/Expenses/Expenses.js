import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import Expenseitem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYearSelected] = useState("2020");

  const changeYear = (year) => {
    setYearSelected(year);

  
  };

  const filterExpenses = props.data.filter(expense=>{
    return expense.date.getFullYear().toString()=== year
  });

  let expensesContent = <p  >No Expenses Found</p>
  if (filterExpenses.length>0){
    expensesContent = filterExpenses.map((expense) => (
      <Expenseitem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={changeYear} selected={year} />
        {expensesContent }
        <ExpensesChart expenses={filterExpenses}/>
        
        
      </Card>
    </div>
  );
};

export default Expenses;
