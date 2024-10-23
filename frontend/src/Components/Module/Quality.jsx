import React, { Component } from "react";
import { quality } from "../MainPage/textcontent"; // Assuming this import is correct
import "./../Css/quality.css";
// import "./../../../public/BAJAJ WELLMED INTERNATIONAL.pdf"

export class Quality extends Component {
  openPDF = () => {
    window.open('/BAJAJ WELLMED INTERNATIONAL.pdf', '_blank');
  };
  
  render() {
    return (
      <>
        <div className="quality">
          <div className="contentquality">
            <h1>Quality</h1>
            <p className="h6">{quality}</p>

            <button>View More</button>
          </div>
          <div className="formtable">
            <h3 style={{ paddingRight: "48%", color: "white" }}>
              I would like to discuss
            </h3>
            <div className="formbox">
              <div className="row50">
                <div className="inputbox">
                  {/* <span>First Name</span> */}
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="inputbox">
                  {/* <span>Last Name</span> */}
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="row50">
                <div className="inputbox">
                  {/* <span>Email</span> */}
                  <input type="email" placeholder="abcd@gmail.com" />
                </div>
                <div className="inputbox">
                  {/* <span>Mobile number</span> */}
                  <input
                    type="tel"
                    pattern="[6-9]\d{9}"
                    required
                    placeholder="+91- "
                    maxLength="10"
                  />
                </div>
              </div>
              <div className="row100">
                <div className="inputbox">
                  {/* <span>Message</span> */}
                  <textarea placeholder="Write your queries here..."></textarea>
                </div>
              </div>
              <div className="row100">
                <div className="inputbox">
                  <input type="submit" value="Send" />
                  {/* <button>submit</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <h4>Call Us on : 9811561415/7568138415</h4>

          <button className="catelogue" onClick={this.openPDF}>
            Catalogue
          </button>
        </div>
      </>
    );
  }
}

export default Quality;
