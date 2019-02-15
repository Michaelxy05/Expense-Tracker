import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Layout from "../components/Chart";


class Summary extends Component {
    state = {
        expenses: [],
        amount: "",
        reason: "",
        noteToSelf: ""
    };

    componentDidMount() {
        this.loadExpenses();
    }

    loadExpenses = () => {
        API.getExpenses()
            .then(res =>
                this.setState({ expenses: res.data, amount: "", reason: "", noteToSelf: "" })
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
                amount: this.state.amount,
                reason: this.state.reason,
                noteToSelf: this.state.noteToSelf
            })
                .then(res => this.loadExpenses())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Col size="md-12 sm-12">
                <Jumbotron>
                    <h1>Summary of my expenses</h1>
                </Jumbotron>
                {this.state.expenses.length ? (
                    <List>
                        {this.state.expenses.map(expense => (
                            <ListItem key={expense._id}>
                                <Link to={"/expenses/" + expense._id}>
                                    <Layout />
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </Col>
        );
    }
}

export default Summary;


