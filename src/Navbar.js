import React from "react";
import { Link } from "@reach/router";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Hamza Chaouai
      </Link>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/cv">
              Curriculum vitae
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/messages">
              Messages
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/jeu">
              Jeu
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
