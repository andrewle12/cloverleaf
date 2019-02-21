import React from "react";
import { Container, Row, Col } from "../components/Grid";
import FriendsCard from "../components/FriendsCard";
import Chat from "../components/Chat";

function Posts() {
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
            <FriendsCard />
          </Col>
          <Col size="md-6">
          <div className="card mt-3 mx-1 shadow-sm">
            <div className="card-body text-center">
              <h5 className="header card-title">My Posts</h5>
              <h5><strong>Coming Soon!</strong></h5>
            </div>
          </div>
          </Col>
          <Col size="md-3">
            <Chat />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Posts;
