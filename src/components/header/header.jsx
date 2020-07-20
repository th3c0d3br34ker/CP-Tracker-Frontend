import React, { Component } from "react";

import { Container, Image } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Container fluid={true} className="header-div bg-dark">
        <div className="row header">
          <Image
            className="logo"
            src={require("../../assets/logo.png")}
            alt="logo"
            width="40"
          />

          <h2>CP-Tracker</h2>
        </div>
      </Container>
    );
  }
}

export default Header;

// TODO:
// - Modify to API Call.
// - Add user profile.
