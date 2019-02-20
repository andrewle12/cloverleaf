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
      
      // .chat.page {
      //   display: none;
      // }
      
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
        // Tooltip -------->
        [data-tooltip] {
          display: inline-block;
          position: relative;
          cursor: help;
          padding: 4px;
      }
      /* Tooltip styling */
      [data-tooltip]:before {
          content: attr(data-tooltip);
          display: none;
          position: absolute;
          background: #000;
          color: #fff;
          padding: 4px 8px;
          font-size: 14px;
          line-height: 1.4;
          min-width: 100px;
          text-align: center;
          border-radius: 4px;
      }
            /* Dynamic horizontal centering */
      [data-tooltip-position="top"]:before,
      [data-tooltip-position="bottom"]:before {
          left: 50%;
          -ms-transform: translateX(-50%);
          -moz-transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
      }
      /* Dynamic vertical centering */
      [data-tooltip-position="right"]:before,
      [data-tooltip-position="left"]:before {
          top: 50%;
          -ms-transform: translateY(-50%);
          -moz-transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
      }
      [data-tooltip-position="top"]:before {
          bottom: 100%;
          margin-bottom: 6px;
      }
      [data-tooltip-position="right"]:before {
          left: 100%;
          margin-left: 6px;
      }
      [data-tooltip-position="bottom"]:before {
          top: 100%;
          margin-top: 6px;
      }
      [data-tooltip-position="left"]:before {
          right: 100%;
          margin-right: 6px;
      }

      /* Tooltip arrow styling/placement */
      [data-tooltip]:after {
          content: '';
          display: none;
          position: absolute;
          width: 0;
          height: 0;
          border-color: transparent;
          border-style: solid;
      }
      /* Dynamic horizontal centering for the tooltip */
      [data-tooltip-position="top"]:after,
      [data-tooltip-position="bottom"]:after {
          left: 50%;
          margin-left: -6px;
      }
      /* Dynamic vertical centering for the tooltip */
      [data-tooltip-position="right"]:after,
      [data-tooltip-position="left"]:after {
          top: 50%;
          margin-top: -6px;
      }
      [data-tooltip-position="top"]:after {
          bottom: 100%;
          border-width: 6px 6px 0;
          border-top-color: #000;
      }
      [data-tooltip-position="right"]:after {
          left: 100%;
          border-width: 6px 6px 6px 0;
          border-right-color: #000;
      }
      [data-tooltip-position="bottom"]:after {
          top: 100%;
          border-width: 0 6px 6px;
          border-bottom-color: #000;
      }
      [data-tooltip-position="left"]:after {
          right: 100%;
          border-width: 6px 0 6px 6px;
          border-left-color: #000;
      }
      /* Show the tooltip when hovering */
      [data-tooltip]:hover:before,
      [data-tooltip]:hover:after {
          display: block;
          z-index: 50;
      }







      `}
        </style>
        <div>
          <ul className="pages font shadow">
            <li className="chat page shadow">
              <div className="chatArea">
                <ul className="messages" />
              </div>
              <input
                className="inputMessage"
                href="/home"
                placeholder="Type here..."
              />
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
