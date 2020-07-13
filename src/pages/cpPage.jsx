import React, { Component } from "react";

import Header from "../components/header/header.jsx";
import Tutorial from "../components/tutorial/tutorial.jsx";
import MiddleGreeting from "../components/midSection/midSection.jsx";
import Footer from "../components/footer/footer.jsx";

class CPPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Tutorial />
        <MiddleGreeting />
        <Footer />
      </React.Fragment>
    );
  }
}

export default CPPage;
