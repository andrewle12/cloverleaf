import React, { Component } from "react";
// import Topics from "./topics.json";

// Will take in topics
class TopicsList extends Component {
  //   state = { Topics };

  render() {
    return (
      <>
        <style type="text/css">
          {`
            .header {
                font-family: "Josefin Sans", sans-serif;
                font-size: 25px;
              }
        `}
        </style>
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
      </>
    );
  }
}

export default TopicsList;
