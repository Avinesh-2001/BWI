import React, { Component } from "react";
import "./../Css/about.css";
import { aboutUsContent2 } from "../MainPage/textcontent";
import image1 from "../../Assests/Hospital_Bed.png";
import image2 from "../../Assests/OT.png";
import image3 from "../../Assests/Overbed_Table.png";
import image5 from "../../Assests/Bedside_Cabinet.png";
import image7 from "../../Assests/Trolley.png";
import { missioncontent, visioncontent } from "./about_content";
import Features from "../Module/Features";

const sliderItems = [image1, image2, image3, image5, image7];

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  componentDidMount() {
    this.imageInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentImageIndex:
          (prevState.currentImageIndex + 1) % sliderItems.length,
      }));
    }, 2000); // 2 seconds
  }

  componentWillUnmount() {
    clearInterval(this.imageInterval);
  }

  render() {
    const { currentImageIndex } = this.state;
    const currentImage = sliderItems[currentImageIndex];

    return (
      <div className="about-us">
        <h2 className="about-head">About Us</h2>
        <div className="about-content">
          <div className="content">
            <p>{aboutUsContent2}</p>
          </div>
          <div className="about-img-container">
            <div className="about-img">
              <img src={currentImage} alt="About us" />
            </div>
          </div>
        </div>
        <div className="vision-mission-container">
          <div className="vision">
            <h1>Vision</h1>
            <p style={{ fontSize: "15px" }}>{visioncontent}</p>
          </div>
          <div className="mission">
            <h1>Mission</h1>
            <p style={{ fontSize: "15px" }}>{missioncontent}</p>
          </div>
        </div>
        <Features/>
      </div>
    );
  }
}

export default About;