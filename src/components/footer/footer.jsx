import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

import Creators from "../../elements/creators/creators.jsx";
import Community from "../../elements/community/community.jsx";
import ContactUs from "../../elements/contactus/contactus.jsx";
import Subscribe from "../../elements/subscribe/subscribe.jsx";

class Footer extends Component {
  render() {
    return (
      <Container>
        <div className="content-3">
          <Row className="d-flex justify-content-center"></Row>
          <Row>
            <div className="container p-3">
              <Subscribe />
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
          </Row>
        </div>
      </Container>
    );
  }
}

export default Footer;
