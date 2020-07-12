import React, { Component } from "react";

import Creators from "../../elements/creators/creators.jsx";
import Community from "../../elements/community/community.jsx";
import ContactUs from "../../elements/contactus/contactus.jsx";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="content-3">
          <div className="text-white pt-3 text-center">
            <h2 className="d-inline-flex">Subscribe Newsletter</h2>
            <form>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                class="p-2 mr-sm-2 "
                size="40"
              />
              <button type="button" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
          <div className="container p-3">
            <br />
            <div className="footer border-top ">
              <br />
              <div className="row justify-content-around text-white">
                <Creators />
                <Community />
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
