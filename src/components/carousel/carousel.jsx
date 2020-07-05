import React, { Component } from "react";

import Carousel from "nuka-carousel";

class CarouselMapped extends Component {
  render() {
    return (
      <Carousel autoplay="true">
        <img
          src={require("../../assets/cp-carousel.png")}
          alt="Competitive Programming"
        />
        <img
          src={require("../../assets/python-carousel.png")}
          alt="Competitive Programming"
        />
        <img
          src={require("../../assets/cpp-carousel.png")}
          alt="Competitive Programming"
        />
      </Carousel>
    );
  }
}

export default CarouselMapped;
