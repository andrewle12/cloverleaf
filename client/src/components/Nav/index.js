import React from "react";

function Nav() {
  return (
    <div>
      <h1 className="text-center bg-success text-light">CloverLeaf</h1>
      <ul className="nav">
        <li className="nav-item ml-5">
          <a className="nav-link active" href="/">
            Home
          </a>
        </li>
        <li className="nav-item ml-5">
          <a className="nav-link" href="/yard">
            Yard
          </a>
        </li>
        <li className="nav-item ml-5">
          <a className="nav-link" href="/posts">
            Posts
          </a>
        </li>
        <li className="nav-item ml-5">
          <a className="nav-link disabled" href="/help">
            Help
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
