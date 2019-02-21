import React, { Component } from "react";
import { Container } from "../Grid/index";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/auth";

class Nav extends Component {
  logoutBtn(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    localStorage.setItem("name", user.userName);

    const login = (
      <>
        <li className="nav-link float-right mx-5 p-0">
          <a className="nav-link text-dark" href="/login">
            Login
          </a>
        </li>
        <li className="nav-link float-right p-0">
          <a className="nav-link text-dark" href="/signup">
            Sign up
          </a>
        </li>
      </>
    );

    const logout = (
      <>
        <li className="nav-item float-right mx-5">
          <a
            className="nav-link text-dark"
            onClick={this.logoutBtn.bind(this)}
            href="/login"
          >
            Logout
          </a>
        </li>
        <li className="nav-item float-right p-2">Welcome, {user.userName}</li>
      </>
    );

    return (
      <>
        <style>
          {`
      
      .titlefont {
        font-family: "Josefin Sans", sans-serif;
        line-height: 60px;
      }
  
      .navfont {
        font-family: "Josefin Sans", sans-serif;
        font-weight: bold;
        font-size: 20px;
        background-color: #ffffff;
      }
      .listStyle {
        list-style-type: none;
      }
      `}
        </style>
        <Container>
          <div className="sm-shadow">
            <h1 className="titlefont text-center bg-success text-light pt-3 mb-0">
              CloverLeaf
            </h1>
            <div className="justify-content-between navfont nav">
              <ul className="p-0 my-0 listStyle">
                <li className="nav-item ml-5 float-left">
                  <a className="nav-link active text-dark" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item ml-5 float-left">
                  <a className="nav-link text-dark" href="/yard">
                    Yard
                  </a>
                </li>
                <li className="nav-item ml-5 float-left">
                  <a className="nav-link text-dark" href="/posts">
                    My Posts
                  </a>
                </li>
                <li className="nav-item ml-5 float-left">
                  <a className="nav-link disabled text-dark" href="/help">
                    Help
                  </a>
                </li>
              </ul>
              <ul className="my-0">{isAuthenticated ? logout : login}</ul>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Nav);
