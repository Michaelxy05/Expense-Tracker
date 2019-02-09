import React from "react";
import { Col } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


import  {List, ListItem }  from "../components/List";

import { Link } from "react-router-dom"; 
import  DeleteBtn  from "../components/DeleteBtn"; 

function NoMatch() {
  
  return (

      <Col size="md-12 sm-12">
<Jumbotron>
  <h1>Expenses On My List</h1>
</Jumbotron>
{this.state.expenses.length ? (
  <List>
    {this.state.expenses.map(expense => (
      <ListItem key={expense._id}>
        <Link to={"/expenses/" + expense._id}>
          <strong>
          <a> $ {expense.amount} used for {expense.reason} </a>
          <br></br>
          <a> {expense.date} </a>
          </strong>
        </Link>
        <DeleteBtn onClick={() => this.deleteExpense(expense._id)} />
      </ListItem>
    ))}
  </List>
) : (
  <h3>No Results to Display</h3>
)}
</Col>


   
   

  );
}

export default NoMatch;
