import React, {Component} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CreatePost from "../components/CreatePost";
import PostMap from "../components/PostMap";
import { getPosts } from "../redux/actions/posts";

class Posts extends Component{
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props.post;

    return (
    <div>
      <h1>Posts</h1>
      <CreatePost />
      <PostMap posts={posts}/>
    </div>
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
