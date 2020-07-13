import React, { Component } from "react";

import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

class CarouselMapped extends Component {
  render() {
    return (
      <div>
        <Carousel indicators={false} interval="2000" controls={false}>
          <Carousel.Item>
            <Image
              fluid={true}
              src={require("../../assets/cp-carousel.png")}
              alt="Competitive Programming"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              fluid={true}
              src={require("../../assets/python-carousel.png")}
              alt="Competitive Programming"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              fluid={true}
              src={require("../../assets/cpp-carousel.png")}
              alt="Competitive Programming"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default CarouselMapped;
