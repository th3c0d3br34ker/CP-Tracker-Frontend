import { Col, Container, Row } from "react-bootstrap";

import Community from "../elements/community/community.jsx";
import ContactUs from "../elements/contactus/contactus.jsx";
import Creators from "../elements/creators/creators.jsx";
import React from "react";
import Subscribe from "../elements/subscribe/subscribe.jsx";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container fluid={true} className="footer-div text-white">
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
