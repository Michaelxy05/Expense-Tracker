import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Dropdown from "../components/DropdownMenu";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <wrap>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              
            </h1>
            <Dropdown/>
          </Jumbotron>
        </Col>
        </wrap>
      </Row>
    </Container>
  );
}

export default NoMatch;