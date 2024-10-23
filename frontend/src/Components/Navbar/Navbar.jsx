import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./../Css/navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export class Navbar extends Component {
  render() {
    return (
      <nav className="custom-navbar navbar navbar-expand-lg bg-body-tertiary">
        <div className="custom-container container-fluid">
          <img
            src={require("./../../Assests/logobwi.png")}
            width="40"
            height="60"
            alt=""
          />
          <Link className="custom-navbar-brand navbar-brand" to="/">
            <b>BWI</b>
          </Link>
          <button
            className="custom-navbar-toggler navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#custom-navbarNav"
            aria-controls="custom-navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="custom-navbarNav" style={{ marginLeft: "30%" }}>
            <ul className="navbar-nav">
              <li className="custom-nav-item nav-item" style={{ padding: "10px", fontWeight:"bold" }}>
                <Link className="custom-nav-link nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="custom-nav-item nav-item" style={{ padding: "10px", fontWeight:"bold" }}>
                <Link className="custom-nav-link nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="custom-nav-item nav-item" style={{ padding: "10px", fontWeight:"bold" }}>
                <Link className="custom-nav-link nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="custom-nav-item nav-item" style={{ padding: "10px", fontWeight:"bold" }}>
                <Link className="custom-nav-link nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="custom-nav-item nav-item" style={{ padding: "10px", fontWeight:"bold" }}>
                <Link className="custom-nav-link nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="custom-nav-item nav-item" style={{ padding: "10px", fontWeight:"bold" }}>
                <form className="custom-search-form d-flex" role="search">
                  <input
                    className="custom-form-control form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="custom-search-btn btn btn-outline-success" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
