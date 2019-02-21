
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row, Col } from "../components/Grid";
import CreatePost from "../components/CreatePost";
import PostMap from "../components/PostMap";
import { getPosts } from "../redux/actions/posts";

import FriendsCard from "../components/FriendsCard";
import Chat from "../components/Chat";

class Posts extends Component{
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props.post;

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
          <CreatePost />
          <div className="card mt-3 mx-1 shadow-sm">
            <div className="card-body text-center">
              <h5 className="header card-title">My Posts</h5>
              <PostMap posts={posts}/>
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

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
