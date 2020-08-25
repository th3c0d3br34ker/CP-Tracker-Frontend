import React, { Component } from "react";
import "./contactus.css";

class ContactUs extends Component {
  state = {
    instagram: "https://www.instagram.com/cptracks/",
    linkedin: "",
    mail: "mailto:cptracksreachout@gmail.com",
  };
  render() {
    return (
      <div className="d-flex flex-column text-center pt-2">
        <h5>Connect & Contact Us</h5>
        <div className="icon-button-contactus">
          <a href={this.state.instagram}>
            <i className="fa fa-instagram"></i>
          </a>

          <a href={this.state.linkedin}>
            <i className="fa fa-linkedin"></i>
          </a>
          <a href={this.state.mail}>
            <i className="fa fa-envelope"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default ContactUs;
