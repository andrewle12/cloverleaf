import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from "../Post";

class PostMap extends Component {
   render() {
      const { posts } = this.props;
      const postsArray = posts.map(post => <Post post={post}/>);

      return postsArray;
   }
}

PostMap.propTypes = {
   posts: PropTypes.array.isRequired
}

export default PostMap