import React, { Component } from "react";
import "./contactus.css"

class ContactUs extends Component {
  state = {
    instagram:"instagram",
    facebook:"facebook",
    linkedin:"github",
    mail:"mail"
  }
  render()
   {
    return (
      <div className="col-3">
        <div className="d-flex flex-column">
          <h5>Connect & Contact Us</h5>
          <div className="icon-button-contactus">
            <a href={this.state.instagram}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href={this.state.facebook}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href={this.state.linkedin}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={this.state.mail}>
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
