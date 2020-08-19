import React, { Component } from "react";

import Header from "../components/header/header.jsx";
import Tutorial from "../components/tutorial/tutorial.jsx";
import Problem from "../components/problem/problem.jsx";
import MiddleGreeting from "../components/midSection/midSection.jsx";
import Footer from "../components/footer/footer.jsx";

class JavaPage extends Component {
  state = {
    tutorial: "https://cp-track.herokuapp.com/api/postcard/java/java-tutorial",
    problem: "https://cp-track.herokuapp.com/api/postcard/java/java-problem",
  };

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

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

export default JavaPage;
