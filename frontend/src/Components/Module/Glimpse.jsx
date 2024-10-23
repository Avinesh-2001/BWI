import React, { Component } from "react";
import "./../Css/glimpse.css";

export class Glimpse extends Component {
  render() {
    return (
      <section className="glimpse">
        <header>
          <h2 className="glimpse-head">
            <span className="head-span1">Glimpse</span>
            <span className="head-span2"> of Our Company</span>
          </h2>
        </header>
        <div className="glimpse-details">
          <article className="glimpse-row">
            <dl className="glimpse-rowwise">
              <div className="icon-container">
                <div className="icon-wrapper">
                  <i className="fas fa-user icon"></i>
                </div>
                <div className="text-wrapper">
                  <dt>Name of CEO</dt>
                  <dd>Mr. Anil Kumar</dd>
                </div>
              </div>
            </dl>
            <dl className="glimpse-rowwise">
              <div className="icon-container">
                <div className="icon-wrapper">
                  <i className="fas fa-briefcase icon"></i>
                </div>
                <div className="text-wrapper">
                  <dt>Nature of Business</dt>
                  <dd>Medical Equipment Manufacturer</dd>
                </div>
              </div>
            </dl>
            <dl className="glimpse-rowwise">
              <div className="icon-container">
                <div className="icon-wrapper">
                  <i className="fas fa-building-columns icon"></i>
                </div>
                <div className="text-wrapper">
                  <dt>Year of Establishment</dt>
                  <dd>2015</dd>
                </div>
              </div>
            </dl>
          </article>
          <article className="glimpse-row">
            <dl className="glimpse-rowwise">
              <div className="icon-container">
                <div className="icon-wrapper">
                  <i className="fas fa-people-group icon"></i>
                </div>
                <div className="text-wrapper">
                  <dt>Name of Employees</dt>
                  <dd>Up to 10 People</dd>
                </div>
              </div>
            </dl>
            <dl className="glimpse-rowwise">
              <div className="icon-container">
                <div className="icon-wrapper">
                  <i className="fas fa-hand-holding-dollar icon"></i>
                </div>
                <div className="text-wrapper">
                  <dt>Annual Turnover</dt>
                  <dd>10-20 Lakh</dd>
                </div>
              </div>
            </dl>
            <dl className="glimpse-rowwise">
              <div className="icon-container">
                <div className="icon-wrapper">
                  <i className="fas fa-shop icon"></i>
                </div>
                <div className="text-wrapper">
                  <dt>Market Covered</dt>
                  <dd>All Over India</dd>
                </div>
              </div>
            </dl>
          </article>
        </div>
      </section>
    );
  }
}

export default Glimpse;
