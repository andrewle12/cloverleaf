import React from "react";
import { Container, Row, Col } from "../components/Grid";

function Help() {
    return(
        <Container>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
          <div className="card mt-3 mx-1 shadow-sm">
            <div className="card-body text-center">
              <a href="https://github.com/andrewle12/cloverleaf" className="header card-title">Github</a>
            </div>
          </div>
          </Col>
          <Col size="md-3"></Col>
        </Row>
      </Container>
    );
}

export default Help;