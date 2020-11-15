import React from "react";
import { Link } from "react-router-dom";

function HeaderBar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Name List</span>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/namelist">
              User List
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderBar;
