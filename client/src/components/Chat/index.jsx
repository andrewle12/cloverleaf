import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";


class Chat extends Component {

  render() {
  const user = this.props.auth.user;
  console.log(user);
  return (
    <>
      <style type="text/css">
        {`
      .list-group-item {
        line-height: 2.5;
      }
      
      * {
        box-sizing: border-box;
      }
      
      html {
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
      }
      
      html,
      input {
        font-family: "Josefin Sans", sans-serif;
      }
      
      html,
      body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      
      ul {
        list-style: none;
        word-wrap: break-word;
      }
      
      /* Pages */
      
      .pages {
        height: 100%;
        margin: 0;
        padding: 0;
        width: 100%;
      }
      
      .page {
        height: 83%;
        position: absolute;
        width: 100%;
        margin-top: 18px;
      }
      
      /* Login Page */
      
      .login.page {
        background-color: #a6cb60;
      }
      
      .login.page .form {
        height: 100px;
        margin-top: -100px;
        position: absolute;
      
        text-align: center;
        top: 50%;
        width: 100%;
      }
      
      .login.page .form .usernameInput {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #fff;
        outline: none;
        padding-bottom: 15px;
        text-align: center;
        width: 400px;
      }
      
      .login.page .title {
        font-size: 200%;
      }
      
      .login.page .usernameInput {
        font-size: 200%;
        letter-spacing: 3px;
      }
      
      .login.page .title,
      .login.page .usernameInput {
        color: #fff;
        font-weight: 100;
      }
      
      /* Chat page */
      
      .chat.page {
        display: none;
      }
      
      /* Font */
      
      .messages {
        font-size: 95%;
      }
      
      .inputMessage {
        font-size: 100%;
      }
      
      .log {
        color: gray;
        font-size: 70%;
        margin: 5px;
        text-align: center;
      }
      
      /* Messages */
      
      .chatArea {
        height: 100%;
        padding-bottom: 60px;
        background-color: #ffffff;
      }
      
      .messages {
        height: 100%;
        margin: 0;
        overflow-y: scroll;
      }
      
      .message.typing .messageBody {
        color: gray;
      }
      
      .username {
        font-weight: 700;
        overflow: hidden;
        padding-right: 15px;
        text-align: right;
      }
      
      /* Input */
      
      .inputMessage {
        bottom: 0;
        height: 60px;
        left: 0;
        outline: none;
        padding-left: 10px;
        position: absolute;
        right: 0;
        width: 100%;
      }
      


      ul .messages {
        padding: 0;
      }
      .messages li {
        position: relative;
        background: #CCCCCC;
        border-radius: .5em;
        margin: 2px;
        padding: 2px 5px;
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
      .row {
        justify-content: space-around;
        align-items: stretch;
        height: 100vh;
        }
      `}
      </style>
      <div>
        <ul className="pages font shadow">
          <li className="chat page shadow">
            <div className="chatArea">
              <ul className="messages" />
            </div>
            <input className="inputMessage" placeholder="Type here..." />
          </li>
          <li className="login page">
            <div className="form">
              <h3 className="title font">What's your name?</h3>
              <input
                className="usernameInput font"
                type="text"
                maxLength="14"
                defaultValue={`${user.userName}`}
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
}

Chat.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Chat);
