import React, { Component } from "react";

import Header from "../components/header/header.jsx";
import Tutorial from "../components/tutorial/tutorial.jsx";
import Problem from "../components/problem/problem.jsx";
import MiddleGreeting from "../components/midSection/midSection.jsx";
import Footer from "../components/footer/footer.jsx";

class PythonPage extends Component {
  state = {
    tutorial:
      "https://cp-track.herokuapp.com/api/postcard/python/python-tutorial",
    problem:
      "https://cp-track.herokuapp.com/api/postcard/python/python-problem",
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Tutorial tutorial={this.state.tutorial} />
        <Problem problem={this.state.problem} />
        <MiddleGreeting />
        <Footer />
      </React.Fragment>
    );
  }
}

export default PythonPage;
