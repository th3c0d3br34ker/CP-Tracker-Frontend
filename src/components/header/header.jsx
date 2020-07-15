import React, { Component } from "react";

import { Navbar, Image } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar fixed="top" className="custom-navbar shadow">
        <Navbar.Brand>
          <Image src={require("../../assets/logo.png")} alt="logo" width="40" />
        </Navbar.Brand>
        <div>
          <h2 className="text-center header">Competitive Programming </h2>
        </div>
      </Navbar>
    );
  }
}

export default Header;

// TODO:
// - Modify to API Call.
// - Add user profile.
