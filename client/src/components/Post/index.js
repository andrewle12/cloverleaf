import React, { Component } from 'react';

class Post extends Component{
   render() { 
    return(
        <div>
            <h1>Create A Post</h1>
            <form>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Body</label>
                    <textarea className="form-control" rows="5"></textarea>
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

export default Post;