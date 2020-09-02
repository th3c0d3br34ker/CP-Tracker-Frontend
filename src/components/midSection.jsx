import { Col, Container, Row } from "react-bootstrap";
import React, { Component } from "react";

import styled from "styled-components";

const MidSectionContainer = styled(Container)`
  border-top: 1px solid black;
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StyledRow = styled(Row)`
  padding: 0.5rem;
`;

const PracticeWrapper = styled(Col)`
  padding-top: 0.5rem;
  justify-content: space-between;
`;

class MiddleGreeting extends Component {
  state = {
    text1:
      "There is a lot of material out there for learning Coding. So don't worry. We have prepared different tracks for learning coding which covers all the necessary concepts and questions you have to do for mastering it.",
    text2:
      "Our vision is to help people learn to code and develop the skill set needed to develop their own programs.  We hope to aid them in their learning process by making good quality practice exercises, study materials, etc accessible to them. We also want to make coding captivating by regularly updating our website with interesting and useful content.",
    text3:
      "Our vision is to create a nurturing environment for coding enthusiasts by making sure that everything they need for their learning process is available. We hope to build a strong community of aspiring programmers where they can collectively learn and share their knowledge.",
  };
  render() {
    return (
      <MidSectionContainer>
        <StyledRow>
          <PracticeWrapper>
            <h2>We help you to practise!</h2>
            <p>{this.state.text1}</p>
          </PracticeWrapper>
        </StyledRow>
        <StyledRow>
          <Col sm={6}>
            <h4>Our Mission</h4>
            <p>{this.state.text2}</p>
          </Col>
          <Col sm={6}>
            <h4>Our Vision</h4>
            <p>{this.state.text3}</p>
          </Col>
        </StyledRow>
      </MidSectionContainer>
    );
  }
}

export default MiddleGreeting;
