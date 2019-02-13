import React from "react";
import "./style.css";

function Nav() {
  return (
    <div>
      <h1 className="font text-center bg-success text-light">CloverLeaf</h1>
      <ul className="navfont nav">
        <li className="nav-item ml-5">
          <a className="nav-link active text-dark" href="/">
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
  );
}

export default Nav;
