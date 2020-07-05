import React, { Component } from "react";

class Community extends Component {
  state = {
    home: "#home",
    practice: "#practice",
    about: "#about",
    blog: "#blog",
  };
  render() {
    return (
      <div className="col-3">
        <div className="d-flex flex-column">
          <h5>Community</h5>
          <a href={this.state.home}>Home</a>
          <a href={this.state.practice}>Practise</a>
          <a href={this.state.about}>About Us</a>
          <a href={this.state.blog}>Blog</a>
        </div>
      </div>
    );
  }
}

export default Community;
