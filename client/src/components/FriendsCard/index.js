import React, {Component} from "react";
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
  loadFriends() {

  }

  render() {
    return (
    <div className="card mt-3 mr-1 shadow-sm">
      <div className="card-body text-center">
        <h5 className="header card-title">Friends</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Friend #1</li>
        <li className="list-group-item">Friend #2</li>
        <li className="list-group-item">Friend #3</li>
      </ul>
    </div>
    );
  }
}

export default FriendsCard;
