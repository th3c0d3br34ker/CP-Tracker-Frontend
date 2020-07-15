import React, { Component } from "react";

import { Container, Image, Carousel } from "react-bootstrap";

class CarouselMapped extends Component {
  render() {
    return (
      <Container>
        <Carousel indicators={false} interval={2000} controls={false}>
          <Carousel.Item>
            <Image
              className="d-block"
              src={require("../../assets/img1-carousel.svg")}
              alt="Competitive Programming"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={require("../../assets/img2-carousel.svg")}
              alt="Competitive Programming"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={require("../../assets/img3-carousel.svg")}
              alt="Competitive Programming"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default CarouselMapped;
