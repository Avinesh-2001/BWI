import React, { Component } from "react";
import "./../Css/mainpage.css";
import {
  aboutUsContent2,
  aboutUsContent1,
} from "./textcontent";
import Features from "../Module/Features";
export class Mainpage extends Component {
  render() {
    return (
      <div style={{backgroundColor: "antiquewhite"}}>
      
        <div className="smallabout">
          <h1 className="h1">
            <span>
              <span style={{ color: "#0A6A6E" }}> Very Warm Welcome</span> to Our
              BWI Website
            </span>
          </h1>
          <h5 className="h5">{aboutUsContent1}</h5>
          <h6 className="h6">{aboutUsContent2}</h6>
        </div>
        <Features/>
      </div>
    );
  }
}

export default Mainpage;
