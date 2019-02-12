import React from "react";
import "../components/Chat/style.css";

function Chat() {
  return (
    <div>
      <ul className="pages">
        <li className="chat page">
          <div className="chatArea">
            <ul className="messages" />
          </div>
          <input className="inputMessage" placeholder="Type here..." />
        </li>
        <li className="login page">
          <div className="form">
            <h3 className="title">What do you want to be called?</h3>
            <input className="usernameInput" type="text" maxLength="14" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Chat;
