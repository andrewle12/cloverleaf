import React, { Component } from 'react';
import { createYard } from "../../redux/actions/yardsale";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class YardPost extends Component{
   constructor(props) {
       super(props);
       this.state = {
           title: "",
           image: "",
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
        e.target.reset();
        const newPost = {
           userName: this.props.auth.user.userName,
           title: this.state.title,
           image: this.state.image,
           body: this.state.body
       }

       this.props.createYard(newPost);
       this.resetForm();
   }

   onChange(e) {
       this.setState({ [e.target.name] : e.target.value});
   }

   resetForm() {
       this.setState({
        title: "",
        image: "",
        body: "",
        errors: {}
       });
   }
   
    render() { 
        const { errors } = this.state;
        
        return(
            <div className="card mt-3 mr-1 shadow-sm">
                    <div className="card-body">
                        <h5 className="header card-title">Post to Yard</h5>
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
                            <label>Image URL</label>
                            <input 
                            className="form-control"
                            placeholder="Enter Link to Image"
                            name="image"
                            value={this.state.image}
                            onChange={this.onChange}
                            error={errors.image}></input>
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
                            >Create Post
                            </button>
                        </form>
                    </div>
            </div>
        );
  } 
}

YardPost.propTypes = {
    createYard: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {createYard})(YardPost);