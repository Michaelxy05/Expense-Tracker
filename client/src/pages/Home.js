import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";


db.reactexpenselist.aggregate({
    $group: {
        _id: '',
        amount: { $sum: '$amount' }
    }
}, {
    $project: {
        _id: 0,
        amount: '$amount'
    }
})