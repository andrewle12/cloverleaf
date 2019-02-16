import React, { Component } from "react";
import "./style.css";
// import Topics from "./topics.json";

// Will take in topics
class TopicsList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        topics: []
      };
  }

  render() {
    return (
      <div className="card mt-3 ml-1 shadow-sm">
      <div className="card-body text-center">
        <h5 className="header card-title">Topics</h5>
      </div>
      <ul className="list-group list-group-flush">
        {/* {this.state.Topics.map(topic => {
            <li className="list-group-item" id={topic.id}>
                {topic.topicName}
            </li> 
        })} */}
      </ul>
      </div>
    );
  }
}

export default TopicsList;
