import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <>
      <style>
      {`
        .landing {
          font-family: "Josefin Sans", sans-serif;
        }
      `}
      </style>
      <div className="landing">
        <div className="dark-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Cloverleaf</h1>
                <p className="lead">
                  Create an Account
                </p>
                <hr />
                <Link to="/signup" className="btn btn-lg btn-info">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Landing;