import React, {Component} from "react";
import "./style.css";

class YardPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            img: ""
        };
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        
        // Save yard post to api here
    };

    render() {
       return(
        <div className="card mt-3">
        <div className="card-body text-center">
            <h5 className="header card-title">Post to Yard</h5>
        </div>
            <form className="m-2">
                <div className="form-group">
                    <label for="title">Title</label>
                    <input className="form-control" id="title" 
                        value={this.state.title}
                        handleInputChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <textarea className="form-control" id="description" rows="3"
                            value={this.state.description}
                            handleInputChange={this.handleInputChange}>
                    </textarea>
                </div>
                <div class="custom-file">
                    <label className="custom-file-label" for="customFile">Choose file</label>
                    <input type="file" className="custom-file-input" id="customFile" 
                            value={this.state.img}
                            handleInputChange={this.handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-danger mt-2"
                        handleFormSubmit={this.handleFormSubmit}>
                        Submit</button>
            </form>
        </div>
        ); 
    }
}

export default YardPost;