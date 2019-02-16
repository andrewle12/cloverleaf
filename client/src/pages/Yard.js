import React, {Component} from "react";
import {Container, Row, Col} from "../components/Grid";
import Chat from "../components/Chat";
import YardPost from "../components/YardPost";

class Yard extends Component {
  render() {
    return (
    <>
      <style type="text/css">
        {`
    .container-fluid {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    .row {
      justify-content: space-around;
      align-items: stretch;
      height: 100vh;
    }
    .col {
      height: 100vh;
    }
    `}
      </style>
      <Container>
        <Row>
          <Col size="md-6">
            <Chat />
          </Col>
          <Col size="md-3">
            Yard Posts go here.
          </Col>
          <Col size="md-3">
            <YardPost />
          </Col>
        </Row>
      </Container>
    </>
  );
  }
}

export default Yard;
