import React from "react";
import { Container, Row, Col } from "../components/Grid";
import Chat from "../components/Chat";
import YardPost from "../components/YardPost";
import YardSales from "../components/YardSales";

function Yard() {
  return (
    <>
      <style type="text/css">
        {`
      .container {
      display: flex;
      flex-direction: column;
      padding: 0;
      }
    .row {
      justify-content: space-around;
      align-items: stretch;
      height: 100vh;
      margin: 0;
    }
    .col {
      height: 100vh;
    }
    .col-md-5,
    .col-md-3 {
      padding: 0;
      }
    `}
      </style>

      <Container>
        <Row>
          <Col size="md-3">
            <YardPost />
          </Col>
          <Col size="md-6">
            <YardSales />
          </Col>
          <Col size="md-3">
            <Chat />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Yard;
