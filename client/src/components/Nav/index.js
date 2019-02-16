import React from "react";
import { Container } from "../Grid/index";

function Nav() {
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
          </ul>
        </div>
      </Container>
    </>
  );
}

export default Nav;
