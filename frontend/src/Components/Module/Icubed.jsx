import React, { Component } from "react";
import "./../Css/icubed.css";
import axios from "axios";
import { icubed_instruct, icubed_points } from "./../Textfile/icu_bed.js";
import image1 from "../../Product_feat/IcuBed.png";

class Icubed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalImage: "",
      showEnquiryModal: false,
      value: 1,
      formData: {
        name: "",
        phone: "",
        email: "",
        product: "",
        quantity: 1,
      },
    };
  }

  openPDF = () => {
    window.open("/BAJAJ WELLMED INTERNATIONAL.pdf", "_blank");
  };

  RangeSlider = (event) => {
    const quantity = event.target.value; // Get the new quantity value
    this.setState({ value: quantity }); // Update local state
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        quantity: quantity, // Update quantity in formData
      },
    }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { formData } = this.state;
    console.log("Form Data Submitted:", formData);
    try {
      // Replace with your actual API endpoint
      await axios.post("http://localhost:5000/api/inquiries", formData);
      alert("Enquiry submitted successfully!");
      this.closeEnquiryModal(); // Close the modal after submission
    } catch (error) {
      console.error("There was an error submitting the enquiry!", error);
      alert("Error submitting enquiry. Please try again later.");
    }
  };

  handleImageClick = (imageSrc) => {
    this.setState({ showModal: true, modalImage: imageSrc });
    document.body.style.overflow = "hidden";
  };

  closeModal = () => {
    this.setState({ showModal: false, modalImage: "" });
    document.body.style.overflow = "auto";
  };

  handleEnquiryClick = (product) => {
    const productName = product.split(" (")[0]; 
    const productCode = product.split('(')[1].slice(0, -1);
    this.setState((prevState) => ({
        showEnquiryModal: true,
        formData: { 
            ...prevState.formData, 
            product: productName,
            productcode: productCode 
        },
    }));
    console.log("Selected product:", productName);
    console.log("Selected product code:", productCode);
    document.body.style.overflow = "hidden";
};


  closeEnquiryModal = () => {
    this.setState({ showEnquiryModal: false, currentProduct: "" });
    document.body.style.overflow = "auto";
  };

  render() {
    const { showModal, modalImage, showEnquiryModal, formData } = this.state;
    const imageDemos = [
      { src: image1, name: "ICU Bed Demo 1" },
      { src: image1, name: "ICU Bed Demo 2" },
      { src: image1, name: "ICU Bed Demo 3" },
      { src: image1, name: "ICU Bed Demo 4" },
      { src: image1, name: "ICU Bed Demo 5" },
    ];

    return (
      <div className="icubed-container">
        <h1 className="icubed-title">ICU Bed</h1>
        <p className="icubed-instruct">{icubed_instruct}</p>
        <div className="icubed-item">
          <h2 className="type1">Electric ICU Bed</h2>
          <div className="icubed-1">
            <h2 className="title1">ICU Bed 5-Function (BWI-1701)</h2>
            <div className="specification-container">
              <div className="specification">
                <h3 className="icubed-spec">Electric Bed Specification:</h3>
                <ul className="icubed-points">
                  {icubed_points.split("\n").map((point, index) => (
                    <li className="points" key={index}>
                      {point.trim()}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <p style={{ padding: " 12px 0 0 0" }}>Qty:</p>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={this.state.value}
                    onChange={this.RangeSlider}
                    style={{
                      width: "80px",
                      accentColor: "green",
                    }}
                  />
                  <span>{this.state.value}</span>{" "}
                  {/* Display the current slider value here */}
                </div>

                <div>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() =>
                      this.handleEnquiryClick("ICU Bed 5-Function (BWI-1701)")
                    }
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
              <div className="image-section">
                <div
                  className="image1"
                  onClick={() => this.handleImageClick(image1)}
                >
                  <img src={image1} alt="ICU Bed" />
                </div>
                <div className="image-demo-container">
                  {imageDemos.map((image, index) => (
                    <img
                      key={index}
                      className="image-demo"
                      src={image.src}
                      alt={image.name}
                      onClick={() => this.handleImageClick(image.src)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.openPDF}
                >
                  Read More{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="icubed-2">
            <h2 className="title1">ICU Bed 3-Function (BWI-1702)</h2>
            <div className="specification-container">
              <div className="specification">
                <h3 className="icubed-spec">Electric Bed Specification:</h3>
                <ul className="icubed-points">
                  {icubed_points.split("\n").map((point, index) => (
                    <li className="points" key={index}>
                      {point.trim()}
                    </li>
                  ))}
                </ul>
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <p style={{ padding: " 12px 0 0 0" }}>Qty:</p>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={this.state.value}
                    onChange={this.RangeSlider}
                    style={{
                      width: "80px",
                      accentColor: "green",
                    }}
                  />
                  <span>{this.state.value}</span>{" "}
                  {/* Display the current slider value here */}
                </div>

                <div>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => this.handleEnquiryClick}
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
              <div className="image-section">
                <div
                  className="image1"
                  onClick={() => this.handleImageClick(image1)}
                >
                  <img src={image1} alt="ICU Bed" />
                </div>
                <div className="image-demo-container">
                  {imageDemos.map((image, index) => (
                    <img
                      key={index}
                      className="image-demo"
                      src={image.src}
                      alt={image.name}
                      onClick={() => this.handleImageClick(image.src)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  className="custom btn btn-success"
                  onClick={this.openPDF}
                >
                  Read More{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div id="myModal" className="modal" onClick={this.closeModal}>
            <span className="modal-close" onClick={this.closeModal}>
              &times;
            </span>
            <div className="modalcontent">
              <img src={modalImage} alt="ICU Bed Fullscreen" />
            </div>
          </div>
        )}
        {showEnquiryModal && (
          <div id="enquiryModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeEnquiryModal}>
                &times;
              </span>
              <form onSubmit={this.handleSubmit}>
                <div className="form">
                  <div className="form-title">
                    <p className="h2">Enquiry Form</p>
                    <div className="subtitle">
                      Fill the details below and we will contact you regarding
                      your enquiry
                    </div>
                  </div>
                  <div className="input-container">
                    <input
                      id="name"
                      name="name"
                      className="input"
                      type="text"
                      placeholder=" "
                      value={this.state.formData.name} // Bind input value
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="name" className="placeholder">
                      Your Name*
                    </label>
                  </div>
                  <div className="input-container">
                    <input
                      id="phone"
                      name="phone"
                      className="input"
                      type="text"
                      placeholder=" "
                      value={this.state.formData.phone} // Bind input value
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="phone" className="placeholder">
                      Mobile Number*
                    </label>
                  </div>
                  <div className="input-container">
                    <input
                      id="email"
                      name="email"
                      className="input"
                      type="email"
                      placeholder=" "
                      value={this.state.formData.email} // Bind input value
                      onChange={this.handleChange}
                      required
                    />
                    <label htmlFor="email" className="placeholder">
                      Email*
                    </label>
                  </div>
                  <input
                    type="text"
                    name="product"
                    value={formData.product} // Bind the product value here
                    hidden // Hide the input in the form
                  />
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity} // Keep quantity in formData
                    hidden // Hide the input in the form
                  />

                  <button type="submit" className="submit">
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Icubed;
