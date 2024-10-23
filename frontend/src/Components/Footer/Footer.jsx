import React, { Component } from 'react';
import "./../Css/footer.css";

export class Footer extends Component {
  render() {
    return (
        <footer className="footer-distributed"> {/* eslint-disable-line no-undef */}

        <div className="footer-left">{/* eslint-disable-line no-undef */}
          <img
            src={require("./../../Assests/logobwi.png")}
            width="40"
            height="60"
            alt=""
          />
          <a className="custom-navbar-brand navbar-brand" href="#">
            <b style={{ fontSize: "1.5em" }}>BAJAJ WELLMED INTERNATIONAL</b>
          </a>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">About</a>

            <a href="#">Product</a>

            <a href="#">Pricing</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">BWI © 2015</p>
        </div>

        <div className="footer-center" style={{ paddingLeft: "10px" }}>{/* eslint-disable-line no-undef */}
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Plot No. H-392, Riico Industrial Area, </span>Khushkhera ,
              Bhiwadi
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91-9811561415 / 7568138415</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="bwiak1976@gmail.com">bwiak1976@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">{/* eslint-disable-line no-undef */}
          <p className="footer-company-about">{/* eslint-disable-line no-undef */}
            <span>About the company</span>
            Welcome to Bajaj Wellmed International! Since 2015, we've been your
            trusted partner in industrial manufacturing, specializing in
            top-notch surgical scrub sink stations, hospital ward furniture, and
            accessories. With ISO 9001:2015 certification, we're dedicated to
            quality and excellence, serving medical facilities globally. Count
            on us for high-quality products tailored to meet critical medical
            needs.
          </p>

          <div className="footer-icons">{/* eslint-disable-line no-undef */}
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
