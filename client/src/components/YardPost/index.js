import React, {Component} from "react";
import API from "../../utilities/API";
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

    saveYard = event => {
        event.preventDefault();
         const newTitle = event.target.title;
         const newDescription = event.target.description
         const newImgsrc = event.target.imgsrc;
    
         API.saveBook({
          title: newTitle,
          description: newDescription,
          img: newImgsrc
        })
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }

    render() {
       return(
        <div className="card mt-3">
        <div className="card-body text-center">
            <h5 className="header card-title">Post to Yard</h5>
        </div>
            <form className="m-2">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input className="form-control" id="title" 
                        value={this.state.title}
                        onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="3"
                            value={this.state.description}
                            onChange={this.handleInputChange}>
                    </textarea>
                </div>
                <div className="custom-file">
                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                    <input type="file" className="custom-file-input" id="customFile" 
                            value={this.state.img}
                            onChange={this.handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-danger mt-2"
                        onClick={this.handleFormSubmit}>
                        Submit</button>
            </form>
        </div>
        ); 
    }
}

export default YardPost;