import React, {Component} from "react";
import Topics from "./topics.json";
import "./style.css";

// Will take in topics
class TopicsList extends Component {
    state = {Topics};

    render() {
        return (
        <div className="card m-4">
            <div className="card-body text-center">
                <h5 className="header card-title">Topics</h5>
            </div>
            <ul className="list-group list-group-flush">
            {this.state.Topics.map(topic => {
               <li className="list-group-item" id={topic.id}>
                    {topic.topicName}
                </li> 
            })}
            </ul>
        </div>
        );
    } 
}

export default TopicsList;