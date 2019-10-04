import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Container, Row, Col } from "../components/Grid";
import YardPost from "../components/YardPost";
import YardMap from "../components/YardMap";
import { getYard } from "../redux/actions/yardsale";

import FriendsCard from "../components/FriendsCard";
import Chat from "../components/Chat";

class Yard extends Component {
  componentDidMount() {
    this.props.getYard();
  }

  render() {
    const { yards } = this.props.yards;

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
    .yard-post {
      height: 290px;
      margin-top: 20px;
    }
    `}
        </style>

        <Container>
          <Row>
            <Col size="md-3">
              <FriendsCard />
            </Col>
            <Col size="md-6">
              <YardPost />
              <YardMap yards={yards} />
            </Col>
            <Col size="md-3">
              <Chat />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

Yard.propTypes = {
  getYard: PropTypes.func.isRequired,
  yards: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  yards: state.yards
});

export default connect(
  mapStateToProps,
  { getYard }
)(Yard);
