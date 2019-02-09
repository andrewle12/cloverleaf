import React from "react";
import "../components/Chat/style.css";

function Chat() {
  return (
    <div>
      <ul class="pages">
        <li class="chat page">
          <div class="chatArea">
            <ul class="messages" />
          </div>
          <input class="inputMessage" placeholder="Type here..." />
        </li>
        <li class="login page">
          <div class="form">
            <h3 class="title">What do you want to be called?</h3>
            <input class="usernameInput" type="text" maxlength="14" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Chat;
