import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function FaceBookLogin() {
  
    return (
      <Container fluid>
        <Row>
          <Col size="md-12" font>
            
              <Jumbotron>
              <h1 FaceBook Login />
              <h2 Please login here to access app />
              <a href="Login with Facebook" </a>
              </Jumbotron>
            
          </Col>
          
        </Row>
      </Container>
    );
  }
  
  export default FaceBookLogin;