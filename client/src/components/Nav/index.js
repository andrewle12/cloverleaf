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

    const login = (
      <>
        <li>
          <a className="nav-link text-dark float-right" href="/signup">
            Sign up
          </a>
        </li>
        <li>
        <a className="nav-link text-dark float-right" href="/login">
          Login
        </a>
      </li>
      </>
    );

     const logout = (
       <> 
        <h3>Welcome, {this.props.auth.user.username}</h3>
           <li>
             <a className="nav-link text-dark float-right" onClick={this.logoutBtn.bind(this)} href="/login">
               Logout
             </a>
           </li>
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
      `}
        </style>
        <Container>
          <div className="sm-shadow">
            <h1 className="titlefont text-center bg-success text-light pt-3 mb-0">
              CloverLeaf
            </h1>
            <ul className="navfont nav">
              <li className="nav-item ml-5">
                <a className="nav-link active text-dark" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item ml-5">
                <a className="nav-link text-dark" href="/yard">
                  Yard
                </a>
              </li>
              <li className="nav-item ml-5">
                <a className="nav-link text-dark" href="/posts">
                  Posts
                </a>
              </li>
              <li className="nav-item ml-5">
                <a className="nav-link disabled text-dark" href="/help">
                  Help
                </a>
              </li>
            {isAuthenticated ? logout : login}
            </ul>
          </div>
        </Container>
      </>
    );
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});


export default connect(mapStateToProps, {logoutUser})(Nav);
