import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Post extends Component {
   
   render() {
      const { post } = this.props;
      
      return (
         <div className="card">
         <div className="card-body">
           <h4 className="card-title">{post.title}</h4>
           <h6 className="card-subtitle mb-2 text-muted">{`By, ${post.userName}`}</h6>
           <p className="card-text">{post.body}</p>
         </div>
       </div>
      )
   }
}

Post.propTypes = {
   post: PropTypes.object.isRequired,
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
 });

 export default connect(mapStateToProps)(Post);