import React, { Component } from "react";
import "./../Css/feature.css"; // Adjust path to your CSS file
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from "../../Assests/Hospital_Bed.png";
import image2 from "../../Assests/OT.png";
import image3 from "../../Assests/Overbed_Table.png";
import image4 from "../../Assests/Stool.png";
import image5 from "../../Assests/Bedside_Cabinet.png";
import image6 from "../../Assests/scrubsink.png";
import image7 from "../../Assests/Trolley.png";
import image8 from "../../Assests/Bedside_Screen.png";
import image9 from "../../Assests/ABS_Trolley.png";
import image10 from "../../Assests/3seater.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const sliderItems = [
  // { imageUrl: image1},
  // { imageUrl: image2},
  // { imageUrl: image3},
  // { imageUrl: image4},
  // { imageUrl: image5},
  // { imageUrl: image6},
  // { imageUrl: image7},
  // { imageUrl: image8},
  // { imageUrl: image9},
  // { imageUrl: image10}
  {
    imageUrl: image1,
    name: "Hospital Bed",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
  },
  {
    imageUrl: image2,
    name: "OT",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
  },
  {
    imageUrl: image3,
    name: "Overbed Table",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
  },
  {
    imageUrl: image4,
    name: "Stool",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
  },
  {
    imageUrl: image5,
    name: "Bedside Cabinet",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
  },
  {
    imageUrl: image6,
    name: "Scrub Sink",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
  },
  {
    imageUrl: image7,
    name: "Trolley",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
  },
  {
    imageUrl: image8,
    name: "Bedside Screen",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
  },
  {
    imageUrl: image9,
    name: "ABS Trolley",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
  },
  {
    imageUrl: image10,
    name: "3 Seater",
    backtext:
      "In this category, Hospital Beds, patients bed, Attendant bed, Pediatric Beds are included.",
  },
];

export class Features extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2 className="feature-heading">Product Features</h2>
        <hr className="feature-separator" />

        <div className="carousel-wrapper">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            dotListClass="custom-dot-list-style"
          >
            {sliderItems.map((items, index) => (
              <div className="slider" key={index}>
                <div className="flip-card">
                  <div className="image-container">
                    <div className="image-wrapper">
                      <img
                        src={items.imageUrl}
                        alt={items.name}
                        className="image"
                      />
                      <div className="image-label">{items.name}</div>
                    </div>
                    <div className="flip-card-back">
                      {/* <h1>John Doe</h1>
                      <p>Architect & Engineer</p> */}
                      <p
                        style={{
                          fontFamily: "initial",
                          fontWeight: "bolder",
                          paddingTop: "10px",
                          marginTop: "10px",
                        }}
                      >
                        {items.backtext}
                      </p>
                      <button className="backbutton">go to page</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <hr className="feature-separator" />
      </div>
    );
  }
}

export default Features;
