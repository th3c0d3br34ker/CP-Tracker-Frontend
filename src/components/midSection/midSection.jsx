import React, { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";

class MidGreeting extends Component {
  state = {
    text1:
      "There is a lot of material out there for learning Coding. So don't worry. We have prepared different tracks for learning coding which covers all the necessary concepts and questions you have to do for mastering it.",
    text2:
      "To empower each and every student interested in coding with power to code.",
    text3:
      "To grow this community and level up the coding enviornment that we have in today's world to next level.",
  };
  render() {
    return (
      <Container>
        <div className="flex-column d-flex p-4 bg-dark text-center text-white">
          <Row>
            <div className="justify-content-between">
              <h2>We help you to practise!</h2>
              <p>{this.state.text1}</p>
            </div>
          </Row>
          <Row>
            <Col>
              <h4>Our Mission</h4>
              <p>{this.state.text2}</p>
            </Col>
            <Col>
              <h4>Our Vision</h4>
              <p>{this.state.text3}</p>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default MidGreeting;
