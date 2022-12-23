import React  from 'react'
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const Expenseitem = (props) => {
  /*
  const [title,setTitle]=useState(props.title);
  

  const titleHandler=()=>{
    setTitle("updated")
   
  }*/

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} month={props.month} year={props.year} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      
    </Card>
  );
};

export default Expenseitem;
