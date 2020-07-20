import React, { Component } from "react";

class Community extends Component {
  state = {
    home: "/#home",
    practice: "/#practice",
    about: "/#about",
    blog: "#blog",
  };
  render() {
    return (
      <div className="d-flex flex-column text-center community-div pt-2">
        <h5>Community</h5>
        <a href={this.state.home} className="text-white">
          Home
        </a>
        <a href={this.state.practice} className="text-white">
          Practise
        </a>
        <a href={this.state.about} className="text-white">
          About Us
        </a>
      </div>
    );
  }
}

export default Community;
