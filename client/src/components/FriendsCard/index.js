import React, { Component } from "react";
import "./style.css";

// Will eventually take in friend props
class FriendsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.loadFriends();
  }

  // Grab friends list from api
  loadFriends() {}

  render() {
    return (
      <>
        <style>
          {`
          .row {
            justify-content: space-around;
            align-items: stretch;
            height: 100vh;
            }
          
        `}
        </style>
        <div className="card mt-3 mr-1 shadow-sm">
          <div className="card-body text-center">
            <h5 className="header card-title">Friends</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Coming Soon!</strong></li>
            
          </ul>
        </div>
      </>
    );
  }
}

export default FriendsCard;
