import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import Layout from "../components/Chart";
var Chart = require("chart.js");


class Summary extends Component {
    state = {
        expenses: [],
        amount: "",
        reason: "",
        noteToSelf: ""
    };

    componentDidMount() {
        const node = this.node;

        var myChart = new Chart(node, {
            type: "pie", //==bar==line==radar==polararea==doughnut==
            data: {
                labels: ["Bills", "Gas", "Food", "Other"],
                datasets: [
                    {
                        label: "Total money spent",
                        // {this.state.expense.catagory}
                        data: [12, 19, 3, 40],
                        backgroundColor: [
                            "rgba(255, 99, 132)",
                            "rgba(54, 162, 235)",
                            "rgba(255, 206, 86)",
                            "rgba(255, 206, 205)"
                        ]
                    }
                ]
            }
        });
    }


    loadExpenses = () => {
        API.getExpenses()
            .then(res =>
                this.setState({ expenses: res.data, amount: "", reason: "", noteToSelf: "" })
            )
            .catch(err => console.log(err));
    };




    render() {
        return (
            <Col size="md-12 sm-12">
                <Jumbotron>
                    <h1>Summary of my expenses</h1>
                </Jumbotron>
                <h1 className="text-center">Summary of my expenses</h1>
                <div>
                    <canvas
                        style={{ width: 800, height: 300 }}
                        ref={node => (this.node = node)}
                    />
                </div>
            </Col>
        );
    }
}

export default Summary;


