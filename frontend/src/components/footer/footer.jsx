import React, { Component } from "react";
import "./footer.css";

import Creators from "../../elements/creators/creators.jsx";
import Community from "../../elements/community/community.jsx";
import ContactUs from "../../elements/contactus/contactus.jsx";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="content-3">
          <div className="text-white pt-3">
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

/*
      <footer>
        <ul>
          {this.state.creators.map(creator => 
            <li class="list-group-item d-flex justify-content-between align-items-center" key={creator}>
            {creator.name}
            <i className="fa fa-linkedin" href={creator.linkedin} ></i>
          </li>)}
        </ul>
      </footer>







      <ul className="text-white">
      <li><a href="https://www.linkedin.com/in/harsh-kanani-69a45818b/">Harsh Kannani</a></li>
    <li> <a href="https://www.linkedin.com/in/jainam-desai/">Jainam Desai</a></li>
    <li><a href="https://www.linkedin.com/in/aayush-chodvadiya/">Aayush Chodvadiya</a></li>
      </ul>

*/
