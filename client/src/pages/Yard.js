import React, {Component} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row, Col } from "../components/Grid";
import YardPost from "../components/YardPost";
import { getPosts } from "../redux/actions/posts";

import FriendsCard from "../components/FriendsCard";
import Chat from "../components/Chat";

class Yard extends Component{
  componentDidMount() {
    this.props.getPosts();
  }

  render() {

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
          <div className="card mt-3 shadow-sm">
            <div className="card-body text-center">
              <h5 className="header card-title">Yard Sales</h5>
              <h5><strong>Coming Soon!</strong></h5>
              <div className="yard-post text-left p-2">
                <Row>
                  <Col size="md-6">
                    <h5>Yard Sale!</h5>
                    <p>When: Now</p>
                    <p>Where: My House</p>
                    <p>What: Really old books</p>
                  </Col>
                  <Col size="md-6">
                    <img src="https://www.roadsideamerica.com/attract/images-icon/wv/WVSHEtinyhouse4_quesada_640x480.jpg" alt="MyHouse" />
                  </Col>
                </Row>
              </div>
              
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
}

Yard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Yard);
