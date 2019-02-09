import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Dropdown from "../components/DropdownMenu";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              
            </h1>
            <Dropdown/>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
