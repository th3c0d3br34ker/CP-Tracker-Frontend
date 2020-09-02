import React, { Component } from "react";

import Footer from "../components/footer/footer.jsx";
import Header from "../components/header/header.jsx";
import Problem from "../components/problem/problem.jsx";
import Tutorial from "../components/tutorial/tutorial.jsx";

class ProblemPage extends Component {
  state = {
    tutorial: "https://cp-tracker.herokuapp.com/api/postcard/cp/cp-tutorial",
    problem: "https://cp-tracker.herokuapp.com/api/postcard/cp/cp-problem",
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default ProblemPage;
