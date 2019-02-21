import React, { Component } from 'react';
import { createPost } from "../../redux/actions/posts";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CreatePost extends Component{
   constructor(props) {
       super(props);
       this.state = {
           title: "",
           body: "",
           errors: {}
       }
       this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
   }
   
   componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

   onSubmit(e) {
       e.preventDefault();

       const newPost = {
           title: this.state.title,
           body: this.state.body
       }

       this.props.createPost(newPost);
   }

   onChange(e) {
       this.setState({ [e.target.name] : e.target.value});
   }
   
    render() { 
        const { errors } = this.state;

        return(
            <div>
                <h1>Create A Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input 
                        className="form-control"
                        placeholder="Enter Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                        error={errors.title}></input>
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <textarea 
                        className="form-control"
                        rows="5"
                        placeholder="Enter Post Body Here"
                        name="body"
                        value={this.state.body}
                        onChange={this.onChange}
                        error={errors.body}></textarea>
                    </div>
                    <button type="submit" 
                    className="btn btn-primary"
                    // onClick={}
                    >Create Post
                    </button>
                </form>
            </div>
        );
  } 
}

CreatePost.propTypes = {
    createPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {createPost})(CreatePost);