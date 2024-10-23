import React from "react";
import "./../Css/contact.css";

const Contact = () => {
  return (
    <div>
      <h2 className="contact-title">Get In Touch</h2>
      <div className="contact-details">
        <div className="contact-form">
          <h3 className="contact-head">Contact Form</h3>
          <form className="form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder="City" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Type your message here ..."
              ></textarea>
            </div>
            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-office">
          <h3 className="contact-head">Our Registered Office</h3>
          <div className="register">
            <h4 style={{ fontSize: "25px" }}>Bajaj Wellmed International</h4>
            <p className="contact-person" style={{ fontWeight: "bold" }}>
              Anil Kumar (Director)
            </p>
            <h5 className="title pt">
              <i className="fa fa-map-marker-alt" aria-hidden="true"></i> Office
              Address
            </h5>
            <p className="pt-7">
              Add: Plot No. H-392, Riico Industrial Area, Khushkhera, Bhiwadi
            </p>
            <h5 className="title pt">
              <i className="fa fa-phone"></i> Phone
            </h5>
            <p className="oo_mp pt">
              <a className="text-black" href="tel:+91-9811561415">
                +91-9811561415
              </a>{" "}
              /
              <a className="text-black" href="tel:+91-7568138415">
                +91-7568138415
              </a>
            </p>
            <h5 className="title pt ">
              <i className="fa fa-envelope"></i> Email Address
            </h5>
            <p className="oo_mp pt" style={{ marginBottom: "0px" }}>
              <a className="text-black" href="mailto:beiak.1976@gmail.com">
                beiak.1976@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="contact-details-1">
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.0071978217084!2d76.85510707447648!3d28.207093903274867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d375eacb785cb%3A0x16d6c05969f834c3!2sBajaj%20Wellmed%20International!5e0!3m2!1sen!2sin!4v1728732703802!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bajaj Wellmed International Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
