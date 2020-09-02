import React, { Component } from "react";

import CarouselMapped from "../components/carouselSection.jsx";
import Footer from "../components/footer/footer.jsx";
import Header from "../components/header/header.jsx";
import MiddleGreeting from "../components/midSection/midSection.jsx";
import Posts from "../components/posts/posts.jsx";

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
