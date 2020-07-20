import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Creators from "../../elements/creators/creators.jsx";
import Community from "../../elements/community/community.jsx";
import ContactUs from "../../elements/contactus/contactus.jsx";
import Subscribe from "../../elements/subscribe/subscribe.jsx";

class Footer extends Component {
  render() {
    return (
      <Container fluid={true} className="footer-div bg-dark text-white">
        <Row>
          <Container>
            <div className="p-3">
              <Subscribe />
              <br />
              <div className="footer">
                <br />
                <Row className="justify-content-around">
                  <Col sm={4}>
                    <Creators />
                  </Col>
                  <Col sm={4}>
                    <Community />
                  </Col>
                  <Col sm={4}>
                    <ContactUs />
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Footer;
