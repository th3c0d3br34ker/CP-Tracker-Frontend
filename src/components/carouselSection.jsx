import { Carousel, Container, Image } from "react-bootstrap";
import React, { Component } from "react";

// import styled from "styled-components";

// const CarouselContainer = styled(Container)`
//   height: 80%;
// `;

class CarouselMapped extends Component {
  state = {
    carouselImages: [
      {
        id: 1,
        src: require("../assets/img1-carousel.webp"),
      },
      {
        id: 2,
        src: require("../assets/img2-carousel.webp"),
      },
      {
        id: 3,
        src: require("../assets/img3-carousel.webp"),
      },
      {
        id: 4,
        src: require("../assets/img4-carousel.webp"),
      },
    ],
  };
  render() {
    return (
      <Container id="home">
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
