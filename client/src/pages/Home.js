import React from "react";
import { Col, Row, Container } from "../components/Grid";
import FriendsCard from "../components/FriendsCard";
import Chat from "../components/Chat";

function Home() {
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
      <Container fluid variant="d-flex flex-column h-100">
        <Row variant="justify-content-around align-items-stretch">
          <Col size="md-4">
            <FriendsCard />
          </Col>
          <Col size="md-4">
            <Chat />
          </Col>
          <Col size="md-4">Topics</Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
