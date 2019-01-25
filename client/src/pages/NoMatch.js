import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";

function NoMatch() {
  
  return (
    <Container fluid>
      <Row>
        <Col size="md-4">
          
            <Card 
            title="This is my first card"
            subtitle="This is the subtitle"
            text="This is the text"
            />
          
        </Col>
        <Col size="md-4">
          
            <Card 
            title="This is my second card"
            subtitle="This is the subtitle"
            text="This is the text"
            />
          
        </Col>
        <Col size="md-4">
          
            <Card 
            title="This is my third card"
            subtitle="This is the subtitle"
            text="This is the text"
            />
          
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
