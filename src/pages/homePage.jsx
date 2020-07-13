import React, { Component } from "react";

import Header from "../components/header/header.jsx";
import CarouselMapped from "../components/carousel/carousel.jsx";
import Posts from "../components/posts/posts.jsx";
import MiddleGreeting from "../components/midSection/midSection.jsx";
import Footer from "../components/footer/footer.jsx";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <CarouselMapped />
        <Posts />
        <MiddleGreeting />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
