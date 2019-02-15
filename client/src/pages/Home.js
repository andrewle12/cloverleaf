import React, {Component} from "react";
import { Col, Row, Container } from "../components/Grid";
import FriendsCard from "../components/FriendsCard";
import Chat from "../components/Chat";

class Home extends Component {
  render() {
    return (
    <Container fluid>
      <Row>
        <Col size="md-4">
          <FriendsCard />
        </Col>
        <Col size="md-4">
          <Chat />
        </Col>
        <Col size="md-4">
          Topics
        </Col>
      </Row>
    </Container>
    );
  }
}

export default Home;
