import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import SignIn from '../components/Login/signIn.jsx';
import Radio from "../components/ToggleBtn";
import Dropdown from "../components/DropdownMenu"


class Expenses extends Component {
  state = {
    expenses: [],
    //  catagory: "",
    amount: "",
     payType: "",
    reason: "",
    noteToSelf: ""
  };

  componentDidMount() {
    this.loadExpenses();
  }

  loadExpenses = () => {
    API.getExpenses()
      .then(res =>
        
        this.setState({ expenses: res.data, amount: "", payType: "", reason: "", noteToSelf: "" })
      )
      .catch(err => console.log(err));
  };

  deleteExpense = id => {
    API.deleteExpense(id)
      .then(res => this.loadExpenses())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.amount && this.state.reason) {
      API.saveExpense({
        //  catagory: this.state.catagory,
        amount: this.state.amount,
         payType: this.state.payType,
        reason: this.state.reason,
        noteToSelf: this.state.noteToSelf
      })
        .then(res => this.loadExpenses())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
      {/* <SignIn></SignIn> */}
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Please enter the amount</h1>
            </Jumbotron>
            <form>
              {/* <Dropdown
                value={this.state.catagory}
                onChange={this.handleInputChange}
                name="catagory"
              /> */}
              <Input
                value={this.state.amount}
                onChange={this.handleInputChange}
                name="amount"
                placeholder="Enter the amount (Required)"
              />
              <Radio
                value={this.state.payType}
                onChange={this.handleInputChange}
                name="payType"
              />
              <Input
                value={this.state.reason}
                onChange={this.handleInputChange}
                name="reason"
                placeholder="Enter reason/item (Required)"
              />

              <TextArea
                value={this.state.noteToSelf}
                onChange={this.handleInputChange}
                name="noteToSelf"
                placeholder="Enter comment here for future reference (Optional)"
              />
              <FormBtn
                disabled={!(this.state.reason && this.state.amount)}
                onClick={this.handleFormSubmit}
              >
                Submit Expense
              </FormBtn>
            </form>
          </Col>
         
        </Row>
      </Container>
    );
  }
}

export default Expenses;
