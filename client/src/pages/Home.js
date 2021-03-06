import React from "react";
import { Container, Row, Col } from "../components/Grid";
import FriendsCard from "../components/FriendsCard";
import Chat from "../components/Chat";
// import TopicsList from "../components/TopicsList";

function Home() {
  return (
    <>
      <style type="text/css">
        {`
      .container {
      display: flex;
      flex-direction: column;
      }
      .col {
      height: 100vh;
      }
      .col-md-6 {
      padding: 0;
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
          <Col size="md-3">{/* <TopicsList /> */}</Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
