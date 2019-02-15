import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import FriendsCard from "../components/FriendsCard";
import Chat from "../components/Chat";
import TopicsList from "../components/TopicsList";

class Home extends Component {
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
          <Col size="md-3">
            <FriendsCard />
          </Col>
          <Col size="md-6">
            <Chat />
          </Col>
          <Col size="md-3">
            <TopicsList />
          </Col>
        </Row>
      </Container>
    </>
  );
  }
}

export default Home;
