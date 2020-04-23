import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-style">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            WikiCountries
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/" class="nav-item nav-link active">
                Home <span class="sr-only">(current)</span>
              </Link>
              <Link to="/about" class="nav-item nav-link">
                About
              </Link>
              <Link to="/contact" class="nav-item nav-link">
                Contacts
              </Link>
            </div>
          </div>
        </nav>
      </nav>
    );
  }
}

export default Navbar;
