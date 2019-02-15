import React from "react";
import "./style.css";

function Chat() {
  return (
    <>
      <style type="text/css">
        {`
      .messages li {
        position: relative;
        background: #CCCCCC;
        border-radius: .4em;
        margin-bottom: .5em;

      }
      .messages li:after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 0.0em solid transparent;
        border-right-color: #00aabb;
        border-left: 0;
        margin-top: -0.062em;
        margin-left: -0.062em;
      }
      `}
      </style>
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
              <h3 className="title">What's your name?</h3>
              <input
                className="usernameInput"
                type="text"
                maxLength="14"
                defaultValue="DEV1"
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Chat;
