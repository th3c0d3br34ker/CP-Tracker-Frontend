import React, { Component } from "react";

import { Container, Image, Carousel } from "react-bootstrap";

class CarouselMapped extends Component {
  state = {
    carouselImages: [
      {
        id: 1,
        src: require("../../assets/img4-carousel.png"),
      },
      {
        id: 2,
        src: require("../../assets/img2-carousel.png"),
      },
      {
        id: 3,
        src: require("../../assets/img3-carousel.png"),
      },
      {
        id: 4,
        src: require("../../assets/img1-carousel.png"),
      },
    ],
  };
  render() {
    return (
      <Container id="home" className="carousel-container">
        <Carousel interval={2000}>
          {this.state.carouselImages.map((image) => (
            <Carousel.Item>
              <Image
                key={image.id}
                className="w-100"
                src={image.src}
                alt="Competitive Programming"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default CarouselMapped;
