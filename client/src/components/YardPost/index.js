import React from "react";
import "./style.css";

function YardPost(){
    return(
        <div className="card m-4">
        <div className="card-body text-center">
            <h5 className="header card-title">Post to Yard</h5>
        </div>
            <form className="m-2">
                <div className="form-group">
                    <label for="title">Title</label>
                    <input className="form-control" id="title" />
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <textarea className="form-control" id="description" rows="3"></textarea>
                </div>
                <div class="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" />
                    <label className="custom-file-label" for="customFile">Choose file</label>
                </div>
                <button type="submit" className="btn btn-danger mt-2">Submit</button>
            </form>
        </div>
    );
}

export default YardPost;