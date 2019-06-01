import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <div className="container" id="top-nav-bar">
    <nav className="navbar" role="navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <span className="title is-5 first-name">Karl</span>
          <span className="title is-5 last-name">Musingo</span>
        </a>

        <button className="navbar-burger burger">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/home">
            Home
          </Link>
          <Link className="navbar-item" to="/resume">
            Resume
          </Link>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  </div>
);

export default NavBar;
